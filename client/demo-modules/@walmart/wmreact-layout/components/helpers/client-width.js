"use strict";

exports.__esModule = true;
exports.BREAKPOINTS = undefined;

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _BREAKPOINTS_ENUM; /* eslint max-len: 0, no-undef: 0, valid-jsdoc: 0 */
/*
A pretty straight port of:
https://gecgithub01.walmart.com/GlobalProducts/atlas-common/blob/master/frontend/js/common/utils/client-width.js
*/

var _exenv = require("exenv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Breakpoints from http://walmartlabs.github.io/web-style-guide/#responsive-breakpoints
// The _.extend() below is a refactor to rely on the common global breakpoints
// object, rather than replicating breakpoint constants, but also keeping support for legacy
// keywords that are used throughout atlas based on the original version of the js.
// TODO: USFEG-1904 Search and remove all instances of these keys, replacing with
// TODO: the keys from common/breakpoints, and then remove this _.extend() block.
var BREAKPOINTS = exports.BREAKPOINTS = {
  EXTRA_SMALL: "extraSmall",
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
  EXTRA_LARGE: "extraLarge"
};

var BREAKPOINTS_ENUM = (_BREAKPOINTS_ENUM = {}, _BREAKPOINTS_ENUM[BREAKPOINTS.EXTRA_SMALL] = 320, _BREAKPOINTS_ENUM[BREAKPOINTS.SMALL] = 480, _BREAKPOINTS_ENUM[BREAKPOINTS.MEDIUM] = 768, _BREAKPOINTS_ENUM[BREAKPOINTS.LARGE] = 1024, _BREAKPOINTS_ENUM[BREAKPOINTS.EXTRA_LARGE] = 1364, _BREAKPOINTS_ENUM);

var _widthGetter = _exenv.canUseDOM ? function () {
  return window.innerWidth;
} : function () {
  return 0;
};

var ClientWidth = {
  breakpoints: BREAKPOINTS_ENUM,

  _setClientWidthGetter: function _setClientWidthGetter(func) {
    _widthGetter = func;
  },

  getClientWidth: function getClientWidth() {
    // *Note*: IE6 & IE7 don't have window.innerWidth
    var innerWidth = _widthGetter();

    if (innerWidth && innerWidth !== ClientWidth._getDocumentClientWidth()) {
      // Chrome doesn't always report the proper size when we resize the screen
      // So we need to select innerWidth in that case
      return _widthGetter();
    }

    return ClientWidth._getDocumentClientWidth();
  },

  _getInnerWidth: function _getInnerWidth() {
    return window.innerWidth;
  },

  _getDocumentClientWidth: function _getDocumentClientWidth() {
    return _exenv.canUseDOM ? document.documentElement.clientWidth : 0;
  },

  /**
   * Returns whether the browser width is less than the break point passed in
   *
   * @param  {String||Number}  breakPoint This is the break point that you're comparing against
   *                                      the browser width. Valid examples inlcude "large", 1024,
   *                                      "1024" and "1024px".
   *
   * @param  {Boolean}   maxWidth This will calculate breakpoint values based on max-width values
   *                     as per style guide (optional).
   *
   * @return {Boolean}
   */
  isBelowBreakPoint: function isBelowBreakPoint(breakPoint, maxWidth) {
    var breakPointValue = breakPoint;
    if (BREAKPOINTS_ENUM[breakPoint]) {
      breakPointValue = BREAKPOINTS_ENUM[breakPoint];

      if (maxWidth) {
        breakPointValue--;
      }
    } else if (parseInt(breakPoint, 10)) {
      breakPointValue = parseInt(breakPoint, 10);
    } else {
      throw new Error("Breakpoint not valid");
    }

    return breakPointValue >= ClientWidth.getClientWidth();
  },

  /**
   * Returns the current active breakpoint.
   * @return {string} current active breakpoint
   */
  getCurrentBreakpoint: function getCurrentBreakpoint() {
    var width = ClientWidth.getClientWidth();
    var bps = (0, _keys2.default)(BREAKPOINTS);

    while (bps.length) {
      var bpoint = bps.pop();
      if (width >= BREAKPOINTS_ENUM[BREAKPOINTS[bpoint]]) {
        return BREAKPOINTS[bpoint];
      }
    }

    return BREAKPOINTS.EXTRA_SMALL;
  }
};

exports.default = ClientWidth;