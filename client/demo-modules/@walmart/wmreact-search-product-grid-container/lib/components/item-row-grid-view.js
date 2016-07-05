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

var _productImage = require("./product-image");

var _productImage2 = _interopRequireDefault(_productImage);

var _productFlag = require("./product-flag");

var _productFlag2 = _interopRequireDefault(_productFlag);

var _productVariantSwatches = require("./product-variant-swatches");

var _productVariantSwatches2 = _interopRequireDefault(_productVariantSwatches);

var _productPrice = require("./product-price");

var _productPrice2 = _interopRequireDefault(_productPrice);

var _productTitle = require("./product-title");

var _productTitle2 = _interopRequireDefault(_productTitle);

var _productRating = require("./product-rating");

var _productRating2 = _interopRequireDefault(_productRating);

var _productFulfillment = require("./product-fulfillment");

var _productFulfillment2 = _interopRequireDefault(_productFulfillment);

var _sponsoredProduct = require("./sponsored-product");

var _sponsoredProduct2 = _interopRequireDefault(_sponsoredProduct);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ItemRowGridView = function (_React$Component) {
  (0, _inherits3.default)(ItemRowGridView, _React$Component);

  function ItemRowGridView(props) {
    (0, _classCallCheck3.default)(this, ItemRowGridView);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = {
      image: props.data.imageUrl
    };
    return _this;
  }

  ItemRowGridView.prototype._setImageSrc = function _setImageSrc(imageSrc) {
    this.setState({
      image: imageSrc
    });
  };

  ItemRowGridView.prototype.render = function render() {
    if (!this.props.data) {
      return null;
    }
    var item = this.props.data;
    var classes = (0, _classnames2.default)({
      "js-wpa-product": !!item.sponsoredUUID,
      "search-result-gridview-item": true,
      "clearfix": true
    });
    var flagBadge = null;
    var seeAllCategory = { seeAllName: item.seeAllName, seeAllLink: item.seeAllLink };
    if (item.specialOfferBadge && item.specialOfferBadge) {
      flagBadge = [{ text: item.specialOfferText, type: item.specialOfferBadge }];
    }
    return _react2.default.createElement(
      "div",
      { className: classes },
      _react2.default.createElement(_productFlag2.default, {
        flags: flagBadge,
        seeAllCategory: seeAllCategory,
        gridView: true }),
      _react2.default.createElement(_productImage2.default, {
        lazyLoadingEnabled: this.props.lazyLoadingEnabled,
        imageUrl: this.state.image,
        itemId: item.usItemId,
        url: item.productPageUrl,
        productTitle: item.title,
        gridView: true,
        onClickImage: this.props.onClickImage }),
      _react2.default.createElement(_productVariantSwatches2.default, {
        lazyLoadingEnabled: this.props.lazyLoadingEnabled,
        swatches: item.variantSwatches,
        defaultImageUrl: item.imageUrl,
        onChange: this._setImageSrc.bind(this),
        gridView: true }),
      _react2.default.createElement(_sponsoredProduct2.default, {
        sponsored: !!item.sponsoredUUID }),
      _react2.default.createElement(_productPrice2.default, {
        hidePriceFulfillmentDisplay: this.props.hidePriceFulfillmentDisplay,
        primaryOffer: item.primaryOffer,
        productType: item.productType,
        productPageUrl: item.productPageUrl,
        inventory: item.inventory,
        submapType: item.submapType,
        ppu: item.ppu,
        isLoggedIn: this.props.isLoggedIn,
        gridView: true }),
      _react2.default.createElement(_productTitle2.default, {
        title: item.title,
        itemId: item.usItemId,
        className: "search-result-product-title",
        big: false,
        maxLines: 3,
        productPageUrl: item.productPageUrl,
        gridView: true,
        onClickTitle: this.props.onClickTitle }),
      _react2.default.createElement(_productRating2.default, {
        customerRating: item.customerRating,
        numReviews: item.numReviews,
        size: "small",
        esrb: item.esrb,
        mediaRating: item.mediaRating }),
      _react2.default.createElement(_productFulfillment2.default, {
        hidePriceFulfillmentDisplay: this.props.hidePriceFulfillmentDisplay,
        inventory: item.inventory,
        fulfillment: item.fulfillment,
        cookieValue: this.props.cookieValue,
        shippingPassEligibale: item.shippingPassEligibale,
        preOrderAvailableDate: item.preOrderAvailableDate,
        sellerName: item.sellerName,
        prefStoreAddress: this.props.prefStoreAddress,
        isPutFilerSelected: this.props.isPutFilerSelected,
        gridView: true })
    );
  };

  return ItemRowGridView;
}(_react2.default.Component);

exports.default = ItemRowGridView;


ItemRowGridView.displayName = "ItemRowGridView";
ItemRowGridView.propTypes = {
  /**
  Defer loading/lazy loading boolean
  */
  lazyLoadingEnabled: _react2.default.PropTypes.bool,
  /**
   * Boolean for hiding renderables
   */
  hidePriceFulfillmentDisplay: _react2.default.PropTypes.bool.isRequired,
  /**
   * Item Data
   */
  data: _react2.default.PropTypes.object.isRequired,
  /**
   * Cookie Value
   */
  cookieValue: _react2.default.PropTypes.any,
  /**
   * Store Address
   */
  prefStoreAddress: _react2.default.PropTypes.object,
  /**
   * A flag to indicate if a put filter is selected
   */
  isPutFilerSelected: _react2.default.PropTypes.bool,
  /**
   * A flag to indicate whether user is logged in
   */
  isLoggedIn: _react2.default.PropTypes.bool,
  /**
   * Action triggered when clicking on title
   */
  onClickTitle: _react2.default.PropTypes.func,
  /**
   * Action triggered when clicking on image
   */
  onClickImage: _react2.default.PropTypes.func
};

ItemRowGridView.defaultProps = {
  hidePriceFulfillmentDisplay: false,
  data: {},
  onClickTitle: function onClickTitle() {},
  onClickImage: function onClickImage() {}
};