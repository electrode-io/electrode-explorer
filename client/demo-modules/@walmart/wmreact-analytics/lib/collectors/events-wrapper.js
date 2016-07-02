"use strict";

exports.__esModule = true;
exports.default = eventsWrapper;

var _triggerWrapper = require("./trigger-wrapper");

var _triggerWrapper2 = _interopRequireDefault(_triggerWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function eventsWrapper(self, props) {
  var newProps = {};
  for (var k in props) {
    newProps[k] = (0, _triggerWrapper2.default)(self.context.analytics, props[k], self, k);
  }
  return newProps;
}
/* eslint func-style: 0, consistent-this: 0 */