"use strict";

exports.__esModule = true;
/**
 * Adding vendor prefix to inline styles
 * https://facebook.github.io/react/tips/inline-styles.html
 * @param {String} key the style property
 * @param {String} value the style property value
 * @return {Object} Style object that can be fed into the style prop
 */

exports.default = function (key, value) {
  var style = {};
  if (key.length) {
    (function () {
      // w3c spec
      style[key] = value;
      // vendor specific
      var vendorKey = key.charAt(0).toUpperCase() + key.slice(1);
      ["Webkit", "ms", "O"].forEach(function (prefix) {
        style["" + prefix + vendorKey] = value;
      });
    })();
  }
  return style;
};