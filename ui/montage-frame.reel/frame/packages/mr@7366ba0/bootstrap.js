(function(e){"use strict";var t,n=function(t){function n(){document.removeEventListener("DOMContentLoaded",n,!0),c=!0,l()}function a(e){if(!_[e]&&f[e]){var t=_[e]={};_[e]=f[e](a,t)||t}return _[e]}function o(){h=a("promise"),u=a("require"),d=a("mini-url"),l()}function l(){c&&u&&t(u,h,d)}var c,u,h,d,p=i();/interactive|complete/.test(document.readyState)?n():document.addEventListener("DOMContentLoaded",n,!0);var m={require:"require.js","require/browser":"browser.js",promise:"packages/q/q.js"};if(!e.preload){var g=r(window.location,p.mrLocation);for(var v in m)s(r(g,m[v]))}var f={};e.bootstrap=function(t,n){f[t]=n,delete m[t];for(t in m)return;delete e.bootstrap,o()},e.bootstrap("mini-url",function(e,t){t.resolve=r});var _={}},i=function(){var e,n,i,a,s,o,l;if(!t){t={};var c=document.getElementsByTagName("script");for(e=0;c.length>e;e++)if(a=c[e],a.src&&(i=a.src.match(/^(.*)bootstrap.js(?:[\?\.]|$)/i))&&(s=i[1]),a.hasAttribute("data-mr-location")&&(s=r(window.location,a.getAttribute("data-mr-location"))),s){if(a.dataset)for(l in a.dataset)a.dataset.hasOwnProperty(l)&&(t[l]=a.dataset[l]);else if(a.attributes){var u=/-([a-z])/g,h=function(e,t){return t.toUpperCase()};for(n=0;a.attributes.length>n;n++)o=a.attributes[n],i=o.name.match(/^data-(.*)$/),i&&(t[i[1].replace(u,h)]=o.value)}a.parentNode.removeChild(a),t.mrLocation=s;break}}return t},a=function(){var e=document.querySelector("base"),t=e;t||(e=document.createElement("base"),e.href="");var n=document.querySelector("head"),i=document.createElement("a");return function(a,r){if(t||n.appendChild(e),a+="",!/^[\w\-]+:/.test(a))throw Error("Can't resolve "+JSON.stringify(r)+" relative to "+JSON.stringify(a));var s=e.href;e.href=a,i.href=r;var o=i.href;return e.href=s,t||n.removeChild(e),o}},r=a(),s=function(e){var t=document.createElement("script");t.src=e,t.onload=function(){t.parentNode.removeChild(t)},document.querySelector("head").appendChild(t)};n(function(t,n,a){var r=i(),o={},l=a.resolve(t.getLocation(),r.package||"."),c=r.module||"";if(e.preload){var u={},h=function(e){return u[e]=u[e]||n.defer()};e.bundleLoaded=function(e){h(e).resolve()};var d=n.defer();o.preloaded=d.promise;var p=n.resolve();e.preload.forEach(function(e){p=p.then(function(){return n.all(e.map(function(e){return s(e),h(e).promise}))})}),d.resolve(p.then(function(){delete e.preload,delete e.bundleLoaded}))}t.loadPackage({location:r.mrLocation,hash:r.mrHash},o).then(function(e){return e.inject("mini-url",a),e.inject("promise",n),e.inject("require",t),e.loadPackage({name:"q",location:r.qLocation,hash:r.qHash}).then(function(t){return t.inject("q",n),"autoPackage"in r&&e.injectPackageDescription(l,{}),e.loadPackage({location:l,hash:r.applicationHash}).invoke("async",c)})}).done()})})(this);