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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SponsoredProduct = function (_React$Component) {
  (0, _inherits3.default)(SponsoredProduct, _React$Component);

  function SponsoredProduct() {
    (0, _classCallCheck3.default)(this, SponsoredProduct);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  SponsoredProduct.prototype.render = function render() {
    var _props = this.props;
    var sponsored = _props.sponsored;
    var gridView = _props.gridView;

    var classes = (0, _classnames2.default)("search-result-sponsored-product", { "listview": !gridView }, { "gridview": gridView });
    return _react2.default.createElement(
      "div",
      { className: classes },
      sponsored ? _react2.default.createElement(
        "p",
        { className: "sponsored-product-search" },
        "Sponsored Product"
      ) : null
    );
  };

  return SponsoredProduct;
}(_react2.default.Component);

exports.default = SponsoredProduct;


SponsoredProduct.displayName = "SponsoredProduct";
SponsoredProduct.propTypes = {
  /**
  A flag to indicate if this product is a sponsored product or not.
  */
  sponsored: _react2.default.PropTypes.bool,
  /**
  A flag to indicate if it's in grid view display mode
  */
  gridView: _react2.default.PropTypes.bool
};