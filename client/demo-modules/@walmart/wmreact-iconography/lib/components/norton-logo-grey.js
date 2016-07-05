"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _norton = require("../../src/images/norton.png");

var _norton2 = _interopRequireDefault(_norton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _getWindow = function _getWindow() {
  return window;
};
/* eslint-disable no-script-url, max-len */
var _onClick = function _onClick(ev) {
  ev.preventDefault();
  _getWindow().open("https://trustsealinfo.verisign.com/splash?form_file=fdf/splash.fdf&amp;dn=www.walmart.com&amp;lang=en", "VRSN_Splash", "location=yes,status=yes,resizable=yes,scrollbars=yes,width=560,height=500");
};
var NortonLogo = function NortonLogo(props) {
  var _props$grey = props.grey;
  var grey = _props$grey === undefined ? true : _props$grey;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "div",
      { className: "norton-logo" },
      _react2.default.createElement(
        "a",
        { tabIndex: "-1",
          className: (0, _classnames2.default)("display-block logo", { grey: grey }),
          onClick: _onClick,
          href: "javascript:void(0);"
        },
        _react2.default.createElement(
          "span",
          { className: "visuallyhidden" },
          "Walmart. Save Money. Live Better."
        ),
        _react2.default.createElement("img", {
          src: _norton2.default,
          alt: "Click to Verify - This site has chosen an SSL Certificate to improve Web site security"
        })
      )
    )
  );
};
/* eslint-enable no-script-url, max-len */

NortonLogo.propTypes = {
  grey: _react.PropTypes.bool
};

exports.default = NortonLogo;