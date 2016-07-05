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

var _wmreactProductCard = require("@walmart/wmreact-product-card");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchProductImage = function (_React$Component) {
  (0, _inherits3.default)(SearchProductImage, _React$Component);

  function SearchProductImage() {
    (0, _classCallCheck3.default)(this, SearchProductImage);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  SearchProductImage.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props;
    var imageUrl = _props.imageUrl;
    var url = _props.url;
    var productTitle = _props.productTitle;
    var gridView = _props.gridView;
    var lazyLoadingEnabled = _props.lazyLoadingEnabled;

    var classes = (0, _classnames2.default)("search-result-productimage", { "listview": !gridView }, { "gridview": gridView });
    return _react2.default.createElement(
      "div",
      { className: classes,
        onClick: function onClick() {
          return _this2.props.onClickImage(_this2.props.itemId);
        } },
      _react2.default.createElement(_wmreactProductCard.ProductImage, {
        isLazy: lazyLoadingEnabled,
        imageUrl: imageUrl,
        url: url,
        productTitle: productTitle,
        shouldRenderFlags: false,
        isTileImage: true })
    );
  };

  return SearchProductImage;
}(_react2.default.Component);

exports.default = SearchProductImage;


SearchProductImage.displayName = "SearchProductImage";
SearchProductImage.propTypes = {
  /**
  Defer loading/lazy loading boolean
  */
  lazyLoadingEnabled: _react2.default.PropTypes.bool,
  /**
  Product Image Url
  */
  imageUrl: _react2.default.PropTypes.string,
  /**
  Product Page Url
  */
  url: _react2.default.PropTypes.string,
  /**
  Product Title
  */
  productTitle: _react2.default.PropTypes.string,
  /**
  A flag to determine whether the display mode is grid view
  */
  gridView: _react2.default.PropTypes.bool,
  /**
  item Id
  */
  itemId: _react2.default.PropTypes.string,
  /**
  Action triggered when clicking on image
  */
  onClickImage: _react2.default.PropTypes.func
};

SearchProductImage.defaultProps = {
  "productTitle": "",
  "gridView": false,
  onClickImage: function onClickImage() {}
};

exports.default = SearchProductImage;