"use strict";

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

require("./demo.styl");

var _headerInstanceDesktop = require("./header-instance-desktop");

var _headerInstanceDesktop2 = _interopRequireDefault(_headerInstanceDesktop);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_reactDom2.default.render(_headerInstanceDesktop2.default, document.getElementById("main"));