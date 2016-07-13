"use strict";

exports.__esModule = true;

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

exports.default = triggerWrapper;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint func-style: 0, max-params: 0, no-empty:0 */
function triggerWrapper(analytics, prop, child, key) {
  var extra = {};
  if ((typeof prop === "undefined" ? "undefined" : (0, _typeof3.default)(prop)) === "object") {
    extra = prop;
  }
  return function () {
    var _child$props;

    try {
      var payload = {
        _reactObject: child,
        _type: key,
        context: analytics.context,
        props: child.props,
        extra: extra
      };

      if (typeof prop === "function") {
        payload = prop(payload);
      }

      analytics.callback(payload);
    } catch (e) {}
    return (_child$props = child.props)[key].apply(_child$props, arguments);
  };
}