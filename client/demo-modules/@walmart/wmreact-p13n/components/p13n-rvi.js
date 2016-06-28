"use strict";

exports.__esModule = true;
exports.P13NRecommendationRvi = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _p13nRviImage = require("./p13n-rvi-image");

var _p13nRviImage2 = _interopRequireDefault(_p13nRviImage);

var _p13nCarousel = require("./p13n-carousel");

var _p13nRviUtils = require("../utils/p13n-rvi-utils");

var _spsCookieUtils = require("../utils/sps-cookie-utils");

var _p13nUtils = require("../utils/p13n-utils");

var _p13nFetcher = require("../service/p13n-fetcher");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var P13NRecommendationRvi = exports.P13NRecommendationRvi = function (_Component) {
  (0, _inherits3.default)(P13NRecommendationRvi, _Component);

  function P13NRecommendationRvi(props) {
    (0, _classCallCheck3.default)(this, P13NRecommendationRvi);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      selectedIndex: 0,
      parentEntities: _this.props.irsData.parentEntities,
      products: _this.props.products
    };
    return _this;
  }

  P13NRecommendationRvi.prototype.handleClick = function handleClick(index, productId) {
    var _this2 = this;

    var self = this;
    this.setState({
      selectedIndex: index,
      updateCarousel: true
    });
    (0, _p13nFetcher.fetchIrsDataMap)({
      "parentItemId": productId,
      "template": "P13NRecommendation",
      "page": this.props.page,
      "clientGuid": (0, _p13nUtils.generateGuid)()
    }).then(function (data) {
      var irsData = (0, _p13nUtils.transformPlacementProducts)({
        irsDataObj: data.irsData,
        resultDetail: data.resultDetail,
        visitorId: data.visitorId,
        placementId: _this2.props.placementId
      });
      var products = irsData.adaptedData[_this2.props.placementId].recommendedProducts;
      var parentEntities = _this2.props.irsData.parentEntities;
      var selectedIndex = _this2.state.selectedIndex;
      var isTrending = (0, _p13nRviUtils.checkTrending)(parentEntities, products, selectedIndex);
      self.setState({
        isTrending: isTrending,
        updateCarousel: false,
        products: irsData.adaptedData[_this2.props.placementId].recommendedProducts
      });
    });
  };

  P13NRecommendationRvi.prototype.componentWillUpdate = function componentWillUpdate(nextProps, nextState) {
    if (nextState.updateCarousel) {
      this._renderSpinner();
    } else {
      this._removeSpinner();
    }
  };

  P13NRecommendationRvi.prototype.componentDidMount = function componentDidMount() {
    /* eslint-disable no-undef */
    var rviContainer = document.querySelector(".rvi-recommendations-container");
    var rviContainerStyle = window.getComputedStyle(rviContainer);
    var height = rviContainerStyle.getPropertyValue("height");
    var spinnerContainer = document.querySelector(".rvi-spinner-container");
    spinnerContainer.style.height = height;
  };

  P13NRecommendationRvi.prototype._renderSpinner = function _renderSpinner() {
    /* eslint-disable no-undef */
    var spinnerContainer = document.querySelector(".rvi-spinner-container");
    spinnerContainer.style.display = "block";
    var classNames = (0, _classnames2.default)("spinner-backdrop", "js-p13n-spinner-backdrop");
    _reactDom2.default.render(_react2.default.createElement(
      "div",
      { className: classNames },
      _react2.default.createElement("div", { className: "spinner" })
    ), spinnerContainer);
  };

  P13NRecommendationRvi.prototype._removeSpinner = function _removeSpinner() {
    /* eslint-disable no-undef */
    var spinnerContainer = document.querySelector(".rvi-spinner-container");
    spinnerContainer.style.display = "none";
  };

  P13NRecommendationRvi.prototype.clearRviList = function clearRviList() {
    (0, _p13nRviUtils.clearCurrentList)();
    /* eslint-disable no-undef */
    var rviView = document.querySelector(".rvi-view");
    (0, _spsCookieUtils.clearCookie)();
    rviView.style.display = "none";
  };

  P13NRecommendationRvi.prototype._renderP13NRVIFirstTier = function _renderP13NRVIFirstTier(parentEntities) {
    var _this3 = this;

    var classNames = (0, _classnames2.default)("recently-viewed-tiles", "u-paddedRow", "hide-content-max-m");
    return _react2.default.createElement(
      "div",
      { className: classNames },
      parentEntities.map(function (product, index) {
        var boundClick = _this3.handleClick.bind(_this3, index, product.productId);
        return _react2.default.createElement(_p13nRviImage2.default, {
          product: product,
          selected: index === _this3.state.selectedIndex,
          onClick: boundClick });
      })
    );
  };

  P13NRecommendationRvi.prototype._renderP13NRVISecondTier = function _renderP13NRVISecondTier(products) {
    var classNames = (0, _classnames2.default)("rvi-recommendations-container", "js-rvi-recommendations-container");
    return _react2.default.createElement(
      "div",
      { className: classNames },
      _react2.default.createElement("div", { className: "rvi-spinner-container" }),
      this._renderP13NCarousel(products)
    );
  };

  P13NRecommendationRvi.prototype._renderP13NCarousel = function _renderP13NCarousel(products) {
    var isTrending = this.state.isTrending;

    return this.state.hasOwnProperty("updateCarousel") && this.state.updateCarousel ? null : _react2.default.createElement(_p13nCarousel.P13NCarousel, { products: products, isRVI: true, isTrending: isTrending });
  };

  P13NRecommendationRvi.prototype.render = function render() {
    var _state = this.state;
    var parentEntities = _state.parentEntities;
    var products = _state.products;

    return parentEntities && parentEntities.length > 0 ? _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)("rvi-view", "js-rvi-view") },
      _react2.default.createElement(
        "div",
        { className: (0, _classnames2.default)("rvi-ResponsiveContainer", "p13n-rvi-module", "hide-content-max-m") },
        _react2.default.createElement(
          "div",
          { className: (0, _classnames2.default)("tempo-module-header", "u-paddedRow") },
          _react2.default.createElement(
            "h5",
            { className: (0, _classnames2.default)("tempo-module-heading", "pull-left") },
            "Inspired by your browsing history"
          ),
          _react2.default.createElement(
            "span",
            { onClick: this.clearRviList,
              className: (0, _classnames2.default)("clear-list", "js-clear-rvi-list", "pull-right", "hide-content-max-m") },
            "Clear this list"
          )
        ),
        this._renderP13NRVIFirstTier(parentEntities),
        this._renderP13NRVISecondTier(products)
      )
    ) : null;
  };

  return P13NRecommendationRvi;
}(_react.Component);

P13NRecommendationRvi.propTypes = {
  page: _react.PropTypes.string,
  placementId: _react.PropTypes.string,
  irsData: _react.PropTypes.object,
  products: _react.PropTypes.array
};

P13NRecommendationRvi.displayName = "P13NRecommendationRvi";

exports.default = P13NRecommendationRvi;