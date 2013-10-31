/**
 * @module ./main.reel
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },

    templateDidLoad: {
        value: function() {
            window.addEventListener("hashchange", this, false);
            this.loadGist();
        }
    },

    loadGist: {
        value: function() {
            var gistId = location.hash.slice(3);

            if (gistId) {
                this.templateObjects.embed.id = gistId;
            }
        }
    },

    handleHashchange: {
        value: function() {
            this.loadGist();
        }
    }
});
