"use strict";

var _masker = require("../masker");

var _masker2 = _interopRequireDefault(_masker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = function (ref, pattern) {
  return {
    getInitialState: function getInitialState() {
      var el = {
        value: "",
        selectionStart: 0
      };
      this.mask = (0, _masker2.default)(el, {
        pattern: pattern
      });
      return {
        maskValue: this.mask.value
      };
    },
    applyMask: function applyMask(newPattern, val) {
      var _this = this;

      var el = void 0;

      if (typeof val !== "undefined") {
        el = {
          value: val
        };
      } else {
        el = this.refs[ref];
      }

      this.mask = (0, _masker2.default)(el, {
        pattern: newPattern || pattern
      });

      this.setState({
        maskValue: this.mask.value
      }, function () {
        _this.refs[ref].setSelectionRange(_this.mask.cursor.start, _this.mask.cursor.end);
      });

      return this.mask.value;
    },
    resetCaret: function resetCaret() {
      var self = this;
      setTimeout(function () {
        self.refs[ref].setSelectionRange(self.mask.cursor.start, self.mask.cursor.end);
      }, 0);
    }
  };
}; /*
   Usage
   -------------------------------------------------
   
   Attach to your component via mixins, passing the
   target ref as the first argument, and the pattern
   as the second.
   
   Pattern Logic
   -------------------------------------------------
   
   Wrap user input chars in {{ }}
   
   Valid input chars are:
   
   9 - [0-9]
   a -  [A-Za-z]
   * - [A-Za-z0-9]
   
   Example:
   
   Date - {{99}}/{{99}}/{{9999}}
   Phone - ({{999}}) {{999}}-{{9999}}
   
   mixins: [
     MaskMixin(
       "mask",
       "{{99}}/{{99}}/{{9999}}"
     )
   ],
   
   Component Methods
   -------------------------------------------------
   
   In order to respond correctly to events, set your
   component up like this:
   
   render() {
     return (
       <input
         type="text"
         ref="mask"
         value={this.state.maskValue}
         onChange={this.applyMask}
         onFocus={this.resetCaret}
       />
     )
   }
   
   The applyMask and resetCaret methods can be called
   from within other handler methods if other logic is
   also required.
   
   */
/*global setTimeout */