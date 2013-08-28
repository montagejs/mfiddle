/**
 * @module ./preview.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component,
    Fiddle = require("core/fiddle").Fiddle;

/**
 * @class Preview
 * @extends Component
 */
exports.Preview = Component.specialize(/** @lends Preview# */ {
    constructor: {
        value: function Preview() {
            this.super();
        }
    },

    _id: {
        value: null
    },

    id: {
        set: function(value) {
            if (value !== this._id) {
                this._id = value;
                this.loadGist(value);
            }
        },
        get: function() {
            return this._id;
        }
    },

    _fiddle: {
        value: null
    },

    fiddle: {
        set: function(value) {
            if (!this._fiddle || value && this._fiddle.id !== value.id) {
                this._fiddle = value;
                this._update();
            }
        },
        get: function() {
            return this._fiddle;
        }
    },

    templateDidLoad: {
        value: function() {
            this._update();
        }
    },

    _update: {
        value: function() {
            if (this._fiddle && this.templateObjects) {
                this.templateObjects.montageFrame.load(
                    this._fiddle.css,
                    this._fiddle.serialization,
                    this._fiddle.html,
                    this._fiddle.javascript
                );
            }
        }
    },

    loadGist: {
        value: function(id) {
            var self = this;

            Fiddle.fromId(id).then(function(fiddle) {
                self.fiddle = fiddle;
            });
        }
    }
});
