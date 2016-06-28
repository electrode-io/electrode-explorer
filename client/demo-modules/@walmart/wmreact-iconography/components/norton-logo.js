"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _norton = require("../images/norton.png");

var _norton2 = _interopRequireDefault(_norton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-script-url, max-len */
//norton has specific requirment around opening the a new window and hence disabling no-script-url and max-len

exports.default = function () {
  return _react2.default.createElement(
    "table",
    { className: "no-margin", border: "0", cellPadding: "2", cellSpacing: "0",
      title: "Click to Verify - This site chose Symantec SSL \\ for secure e-commerce and confidential communications." },
    _react2.default.createElement(
      "tbody",
      null,
      _react2.default.createElement(
        "tr",
        null,
        _react2.default.createElement(
          "td",
          { align: "center", valign: "top" },
          _react2.default.createElement(
            "a",
            { tabIndex: "-1",
              href: "javascript:window.open('https://trustsealinfo.verisign.com/splash?form_file=fdf/splash.fdf&dn=www.walmart.com&lang=en', 'VRSN_Splash', 'location=yes,status=yes,resizable=yes,scrollbars=yes,width=560,height=500');void(0);" },
            _react2.default.createElement("img", { className: "norton-icon",
              border: "true",
              alt: "Click to Verify - This site has chosen an SSL Certificate to improve Web site security",
              onContextMenu: function onContextMenu() {
                return false;
              },
              src: _norton2.default,
              name: "seal" })
          )
        )
      )
    )
  );
};
/* eslint-enable no-script-url, max-len */