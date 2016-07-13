"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
StickyNav.Row is child element for Sticky Nav
  <StickNav.Row>Tab Content</StickyNav.Row>
**/

var StickyNavRow = function StickyNavRow(props) {
  return _react2.default.createElement(
    "div",
    { id: props.link, className: "StickyNav-item" },
    props.children
  );
};

StickyNavRow.propTypes = {
  children: _react2.default.PropTypes.node
};

exports.default = StickyNavRow;