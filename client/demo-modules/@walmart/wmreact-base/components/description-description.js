"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Description within a descriptions block
@component Descriptions.Description
@import {Descriptions}
@references Descriptions
@return {ReactElement} - React element
@param {object} props Properties
*/
var DescriptionDescription = function DescriptionDescription(props) {
  return _react2.default.createElement(
    "dd",
    { className: props.hidden ? "hide-content" : "" },
    props.children
  );
};

DescriptionDescription.displayName = "Descriptions.Description";

DescriptionDescription.propTypes = {
  children: _react2.default.PropTypes.node,
  hidden: _react2.default.PropTypes.bool
};

exports.default = DescriptionDescription;