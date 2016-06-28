"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 The header button toggle component. Primarily used in the mobile header to expand search or nav.

 ```jsx
 <HeaderSearchToggle onClick={() => {}} />
 ```

 @import {HeaderButtonToggle}
 @flags noVisibleRender
 @component HeaderButtonToggle
 @playground
HeaderSearchToggle
 */

var HeaderButtonToggle = function HeaderButtonToggle(props) {
  return _react2.default.createElement(
    _button2.default,
    (0, _extends3.default)({ fakelink: true }, props),
    _react2.default.createElement(_icon2.default, { className: "header-HeaderPrimary-icon", name: props.name })
  );
};

HeaderButtonToggle.displayName = "HeaderButtonToggle";

HeaderButtonToggle.propTypes = {
  /**
  Click handler
  */
  onClick: _react.PropTypes.func.isRequired,
  /**
  Name of icon
  */
  name: _react.PropTypes.string.isRequired
};

exports.default = HeaderButtonToggle;