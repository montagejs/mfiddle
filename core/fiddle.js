var Montage = require("montage").Montage,
    Template = require("montage/core/template").Template,
    Promise = require("montage/core/promise").Promise,
    gist = require("gist").gist;

var Fiddle = exports.Fiddle = Montage.specialize({
    constructor: {
        value: function Fiddle() {
            this.super();
        }
    },

    id: {
        value: null
    },

    css: {
        value: null
    },

    serialization: {
        value: null
    },

    html: {
        value: null
    },

    settings: {
        value: null
    },

    init: {
        value: function(settings, css, html, javascript) {
            var htmlDocument,
                serialization,
                template;

            if (!settings) {
                settings = {
                    version: 1
                };
            }

            if (html) {
                template = new Template();
                // extract body and serialization
                htmlDocument = template.createHtmlDocumentWithHtml(html);
                serialization = template.getInlineObjectsString(htmlDocument);
                html = htmlDocument.body.innerHTML;

                // clean up a bit
                serialization = serialization.replace(/\n    /g, "\n");
                html = html.replace(/\n    /g, "\n").replace(/^\s*\n|\n\s*$/g, "");
            }

            this.settings = settings;
            this.css = css;
            this.serialization = serialization;
            this.html = html;
            this.javascript = javascript;

            return this;
        }
    }
}, {
    fromId: {
        value: function(id) {
            var deferred = Promise.defer();

            gist.load(id, null, function(settings, css, html, javascript) {
                var fiddle;

                fiddle = new Fiddle().init(settings, css, html, javascript);
                fiddle.id = id;
                deferred.resolve(fiddle);
            });

            return deferred.promise;
        }
    }
});