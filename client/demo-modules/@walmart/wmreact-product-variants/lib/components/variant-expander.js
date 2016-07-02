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
 A variant expander button
 @examples
 ```jsx
 <Variants.Expander active={true} less={true} />
 ```
 @return {ReactElement} Element tree
 @param {object} props Props
 @component VariantExpander
 @import {Variants}
 @references Variants
 @playground
 VariantExpander
 ```
 <Variants.Expander active={true} less={true} />
 ```
 */
var VariantExpander = function VariantExpander(props) {
  var _getClassNames = function _getClassNames(_ref) {
    var active = _ref.active;
    var less = _ref.less;

    return (0, _classnames2.default)(props.className, "variant variant-expand", {
      active: active,
      "variant-expand-less": less
    });
  };

  return _react2.default.createElement(
    "button",
    (0, _extends3.default)({}, props, { className: _getClassNames(props) }),
    _react2.default.createElement(
      "span",
      { className: "visuallyhidden" },
      props.less ? "Show More" : "Show Less"
    )
  );
};

VariantExpander.displayName = "VariantExpander";

VariantExpander.propTypes = {
  /**
   True if this is active.
   */
  active: _react2.default.PropTypes.bool,
  /**
   True if we should be showing as less.
   */
  less: _react2.default.PropTypes.bool,
  /**
   Any additional style class.
   */
  className: _react2.default.PropTypes.string
};

VariantExpander.defaultProps = {
  active: false,
  less: false,
  className: ""
};

exports.default = VariantExpander;