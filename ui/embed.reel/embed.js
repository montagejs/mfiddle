/**
 * @module ./embed.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component,
    Fiddle = require("core/fiddle").Fiddle;

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

            Fiddle.fromId(id).then(function(fiddle) {
                self.fiddle = fiddle;
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
