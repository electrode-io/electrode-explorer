"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Enhance a component to give a `hidden` property as required by a large number
 * of electrode bits. Note that the component being passed into this _must_
 * support the `className` prop (which is standard for a lot of DOM components).
 *
 * @param {React.Component} Component Component to make hideable.
 * @returns {React.Component} New component.
 */
var hideable = function hideable(Component) {
  return function (props) {
    return _react2.default.createElement(Component, (0, _extends3.default)({
      className: (0, _classnames2.default)(props.className, { "hide-content": props.hidden })
    }, props));
  };
};

exports.default = hideable;