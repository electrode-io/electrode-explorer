"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Description term
@component Descriptions.Term
@import {Descriptions}
@references Descriptions
@return {ReactElement} - React element
@param {object} props Properties
*/
var DescriptionTerm = function DescriptionTerm(props) {
  return _react2.default.createElement(
    "dt",
    { className: props.hidden ? "hide-content" : "" },
    props.children
  );
};

DescriptionTerm.displayName = "Descriptions.Term";

DescriptionTerm.propTypes = {
  children: _react2.default.PropTypes.node,
  hidden: _react2.default.PropTypes.bool
};

exports.default = DescriptionTerm;