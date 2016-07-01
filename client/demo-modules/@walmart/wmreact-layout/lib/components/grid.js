"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _gridApplyClasses = require("./grid-apply-classes");

var _gridApplyClasses2 = _interopRequireDefault(_gridApplyClasses);

var _gridGroupChildren = require("./grid-group-children");

var _gridGroupChildren2 = _interopRequireDefault(_gridGroupChildren);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Component that adds the `grid` CSS class to container
PropTypes:
1) className: CSS class name to apply to the container.
2) children: Array of Children to render in the container.
3) hidden: Assigns a hide-content class when set to true.
@deprecated
@component Grid
@param {object} props object with following properties className, children, hidden.
@returns {ReactElement} A React Element
*/
var Grid = function Grid(props) {
  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({}, props, {
      className: (0, _classnames2.default)(props.className, "grid", props.hidden ? "hide-content" : "") }),
    props.children
  );
};

Grid.propTypes = {
  /**
   CSS class name to apply to the container
   */
  className: _react2.default.PropTypes.string,
  /**
   * Children to render in the container
   */
  children: _react2.default.PropTypes.array,
  hidden: _react2.default.PropTypes.bool
};

Grid.ApplyClasses = _gridApplyClasses2.default;
Grid.GroupChildren = _gridGroupChildren2.default;

exports.default = Grid;