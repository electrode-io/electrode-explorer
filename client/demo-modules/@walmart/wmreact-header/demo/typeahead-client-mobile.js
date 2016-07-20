"use strict";

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

require("./demo.styl");

var _headerInstanceMobile = require("./header-instance-mobile");

var _headerInstanceMobile2 = _interopRequireDefault(_headerInstanceMobile);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_headerInstanceMobile2.default, document.getElementById("main"));