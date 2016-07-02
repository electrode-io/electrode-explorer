"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _copy = require("@walmart/wmreact-base/lib/components/copy");

var _copy2 = _interopRequireDefault(_copy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_CHILDREN = _react2.default.createElement(
  "span",
  null,
  _react2.default.createElement(
    "span",
    { className: "font-bold" },
    "This item is not available "
  ),
  "with these options",
  _react2.default.createElement("br", null),
  "Please choose different options to purchase this product."
);

/**
 A ProductInvalidPrompt component. Displays a generic invalid prompt in the primary cta component.

 For example this is how we use this component.

 ```jsx
<ProductInvalidPrompt/>
 ```

 @import {ProductInvalidPrompt}
 @flags noVisibleRender
 @component ProductInvalidPrompt
 @playground
 ProductInvalidPrompt
 ```
<ProductInvalidPrompt/>
 ```
 */

var ProductInvalidPrompt = function (_React$Component) {
  (0, _inherits3.default)(ProductInvalidPrompt, _React$Component);

  function ProductInvalidPrompt() {
    (0, _classCallCheck3.default)(this, ProductInvalidPrompt);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  ProductInvalidPrompt.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: "prod-InvalidPrompt prod-Padding--m" },
      _react2.default.createElement(
        _copy2.default.Small,
        null,
        this.props.children
      )
    );
  };

  return ProductInvalidPrompt;
}(_react2.default.Component);

ProductInvalidPrompt.displayName = "ProductInvalidPrompt";

ProductInvalidPrompt.propTypes = {
  children: _react.PropTypes.node
};

ProductInvalidPrompt.defaultProps = {
  children: DEFAULT_CHILDREN
};
exports.default = ProductInvalidPrompt;