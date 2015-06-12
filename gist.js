/**
 * This code was originally written by Lea Verou and is used with permission.
 * https://github.com/LeaVerou/dabblet/blob/master/code/global.js
 */

var GITHUB_API_URL = 'https://api.github.com/';

var gist = exports.gist = {
    clientId: 'clientId',
    files: null,

    oauth: [
        // Step 1: Ask permission
        function(callback){
            gist.oauth.callback = callback;

            var popup = open('https://github.com/login/oauth/authorize' +
                '?client_id=' + gist.clientId +
                '&scope=gist', 'popup', 'width=1015,height=500');
        },
        // Step 2: Get access token and store it
        function(token){
            if(token) {
                window.ACCESS_TOKEN = localStorage['access_token'] = token;

                gist.getUser(gist.oauth.callback);

            }
            else {
                alert('Authentication error');
            }

            gist.oauth.callback = null;
        }
    ],

    request: function(o) {
        o.method = o.method || 'GET';
        o.id = o.id || '';
        o.rev = o.rev || '';
        o.accepted = o.accepted || [];

        var anon = o.anon || o.method === 'GET';

        if(!anon && !window.ACCESS_TOKEN) {
            gist.oauth[0](function(){
                gist.request(o);
            });
            return;
        }

        var path = o.path || 'gists' +
                (o.id? '/' + o.id : '') +
                (o.rev? '/' + o.rev : '') +
                (o.gpath || '');

        this._xhr({
            method: o.method,
            url: GITHUB_API_URL + path + (!o.anon && window.ACCESS_TOKEN? '?access_token=' + ACCESS_TOKEN : ''),
            headers: o.headers,
            callback: function(xhr) {
                var data = xhr.responseText? JSON.parse(xhr.responseText) : null;

                if (data && data.message && o.accepted.indexOf(xhr.status) === -1) {
                    alert('Sorry, I got a ' + xhr.status + ' (' + data.message + ')');
                }
                else {
                    o.callback && o.callback(data, xhr);
                }
            },
            data: o.data? JSON.stringify(o.data) : null
        });
    },

    _xhr: function(o) {
        var xhr = new XMLHttpRequest(),
            method = o.method || 'GET',
            data = o.data || '';

        xhr.open(method, o.url + (method === 'GET' && data? '?' + data : ''), true);

        if(method !== 'GET') {
            xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        }

        if(o.headers) {
            for(var header in o.headers) {
                xhr.setRequestHeader(header, o.headers[header]);
            }
        }

        xhr.onreadystatechange = function(){
            if(xhr.readyState === 4) {
                if(xhr.responseText) {
                    o.callback(xhr);
                }
            }
        };

        xhr.send(method === 'GET'? null : data);

        return xhr;
    },

    getUser: function(callback) {
        gist.request({
            path: 'user',
            callback: function(data) {
                window.user = data;
                callback && callback(data);
            }
        });
    },

    save: function(options){
        options = options || {};

        var anonymous = options.anon || !window.user;
        var callback = options.callback;

        if(gist.id
        && (!gist.user || !window.user || gist.user.id != user.id)
        && !anonymous
        ) {
            // If it doesn't belong to current user, fork first
            gist.fork(gist.id, gist.save, options.anon);
            return;
        }

        var id = gist.id || '',
            cssCode = options.cssCode,
            htmlMarkup = options.htmlMarkup,
            jsCode = options.jsCode,
            settings = options.settings,
            title = "title",
            files = {};

        if (cssCode) {
            files["component.css"] = {"content": cssCode};
        }
        if (htmlMarkup) {
            files["component.html"] = {"content": htmlMarkup};
        }
        if (jsCode) {
            files["component.js"] = {"content": jsCode};
        }
        files["settings.json"] = {"content": JSON.stringify(settings)};

        gist.request({
            anon: options.anon,
            id: anonymous || options.forceNew? null : id,
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            },
            callback: function(data, xhr) {
                if(data.id) {
                    gist.update(data);
                }
                if (callback) {
                    callback(data.id);
                }
            },
            data: {
                "description": title,
                "public": true,
                "files": files
            }
        });
    },

    fork: function(id, callback, anon) {
        gist.request({
            method: 'POST',
            gpath: '/fork',
            id: id || gist.id || null,
            headers: {
                'Content-Type': 'text/plain; charset=UTF-8'
            },
            callback: function(data, xhr) {
                if(data.id) {
                    gist.update(data);

                    callback && callback();
                }
            },
            data: {}
        });
    },

    load: function(id, rev, callback){
        gist.request({
            id: id || gist.id,
            rev: rev || gist.rev,
            callback: function(data){
                gist.update(data);

                var files = this.files = data.files;

                var cssFile = files['component.css'],
                    htmlFile = files['component.html'],
                    jsFile = files['component.js'],
                    settingsFile = files['settings.json'],
                    css,
                    html,
                    javascript,
                    settings;

                if(!cssFile || !htmlFile || !jsFile) {
                    for(var filename in files) {
                        var ext = filename.slice(filename.lastIndexOf('.'));

                        if(!cssFile && ext == '.css') {
                            cssFile = files[filename];
                        }

                        if(!htmlFile && ext == '.html') {
                            htmlFile = files[filename];
                        }

                        if(!jsFile && ext == '.js') {
                            jsFile = files[filename];
                        }

                        if(cssFile && htmlFile && jsFile) {
                            break;
                        }
                    }
                }

                if (cssFile) {
                    css = cssFile.content;
                }
                if (htmlFile) {
                    html = htmlFile.content;
                }
                if (jsFile) {
                    javascript = jsFile.content;
                }

                if (settingsFile) {
                    try {
                        settings = JSON.parse(settingsFile.content);
                    } catch (ex) {
                        console.warn("Unknown settings: " , settingsFile);
                        settings = {};
                    }
                } else {
                    settings = {};
                }

                if (callback) {
                    callback(settings, css, html, javascript);
                }
            }
        });
    },

    update: function(data) {
        var id = data.id,
            rev = data.history && data.history[0] && data.history[0].version || '';

        if(gist.id != id) {
            gist.id = id;
            gist.rev = undefined;
        }
        else if(gist.rev && gist.rev !== rev) {
            gist.rev = rev;
        }

        if(data.user) {
            gist.user = data.user;
        }

        gist.saved = true;
    },

    saved: false
};

window.ACCESS_TOKEN = localStorage['access_token'];