/**
 * @module ./embed.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component,
    Template = require("montage/core/template").Template,
    gist = require("gist").gist;

/**
 * @class Embed
 * @extends Component
 */
exports.Embed = Component.specialize(/** @lends Embed# */ {
    constructor: {
        value: function Embed() {
            this.super();
        }
    },

    mfiddleUrl: {
        value: "http://montagejs.github.io/mfiddle/"
    },

    _fiddle: {
        value: null
    },
    fiddle: {
        get: function() {
            return this._fiddle;
        },
        set: function(value) {
            this._fiddle = value;
            this._updateActiveTabContent();
        }
    },

    _activeTab: {
        value: "serialization"
    },

    activeTab: {
        get: function() {
            return this._activeTab;
        },
        set: function(value) {
            var content;

            if (value !== this._activeTab) {
                this._activeTab = value;
                this._updateActiveTabContent();
            }
        }
    },

    templateDidLoad: {
        value: function() {
            this.addEventListener("action", this, false);
        }
    },

    loadGist: {
        value: function(id) {
            var self = this;

            gist.load(id, null, function(settings, css, html, javascript) {
                var htmlDocument,
                    serialization,
                    template;

                //if (settings.version !== VERSION) {
                //    self.redirectToVersion(settings.version, id);
                //    return;
                //}

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

                self.fiddle = {
                    id: id,
                    css: css,
                    serialization: serialization,
                    html: html,
                    javascript: javascript
                };
                //self.executeFiddle();
            });
        }
    },

    _updateActiveTabContent: {
        value: function() {
            var activeTab = this._activeTab,
                content,
                fiddle = this.fiddle;

            if (!fiddle) {
                return;
            }

            if (activeTab == "html") {
                content = fiddle.html || "";
            } else if (activeTab == "css") {
                content = fiddle.css || "";
            } else if (activeTab == "javascript") {
                content = fiddle.javascript || "";
            } else if (activeTab == "serialization") {
                content = fiddle.serialization || "";
            }

            this.templateObjects.content.value = content;
        }
    },

    // Handle functions

    handleTabAction: {
        value: function(event) {
            this.activeTab = event.detail.get("tab");
        }
    }
});
