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

var _itemRowGridView = require("./item-row-grid-view");

var _itemRowGridView2 = _interopRequireDefault(_itemRowGridView);

var _itemRowListView = require("./item-row-list-view");

var _itemRowListView2 = _interopRequireDefault(_itemRowListView);

var _zeroResultsFilter = require("./zero-results-filter");

var _zeroResultsFilter2 = _interopRequireDefault(_zeroResultsFilter);

var _zeroResultsNoMatch = require("./zero-results-no-match");

var _zeroResultsNoMatch2 = _interopRequireDefault(_zeroResultsNoMatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchProductResult = function (_React$Component) {
  (0, _inherits3.default)(SearchProductResult, _React$Component);

  function SearchProductResult() {
    (0, _classCallCheck3.default)(this, SearchProductResult);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  SearchProductResult.prototype.componentDidMount = function componentDidMount() {
    if (this.props.initialIROCall) {
      var dataObject = {
        items: this.props.items,
        requestContext: this.props.requestContext
      };
      this.props.initialIROCall(dataObject);
    }
  };

  SearchProductResult.prototype.render = function render() {
    var _this2 = this;

    if (this.props.items.length) {
      return _react2.default.createElement(
        "div",
        { className: "search-product-result" },
        (!!this.props.zeroResultsPrice || !!this.props.zeroResultsStore) && _react2.default.createElement(_zeroResultsFilter2.default, {
          searchQuery: this.props.isBrowse ? false : this.props.query,
          priceFilter: !!this.props.zeroResultsPrice,
          storeFilter: !!this.props.zeroResultsStore }),
        this.props.gridView ? _react2.default.createElement(
          "ul",
          { className: "search-result-gridview-items" },
          this.props.items.map(function (item, index) {
            return _react2.default.createElement(
              "li",
              { className: "search-result-grid-unit" },
              _react2.default.createElement(_itemRowGridView2.default, {
                lazyLoadingEnabled: _this2.props.lazyLoadingEnabled && index > 2 ? true : false,
                hidePriceFulfillmentDisplay: _this2.props.hidePriceFulfillmentDisplay,
                data: item,
                cookieValue: _this2.props.cookieValue,
                prefStoreAddress: _this2.props.prefStoreAddress,
                isPutFilterSelected: _this2.props.isPutFilterSelected,
                isLoggedIn: false,
                onClickTitle: _this2.props.onClickTitle,
                onClickImage: _this2.props.onClickImage })
            );
          })
        ) : _react2.default.createElement(
          "div",
          { className: "search-result-listview-items" },
          this.props.items.map(function (item, index) {
            return _react2.default.createElement(_itemRowListView2.default, {
              lazyLoadingEnabled: _this2.props.lazyLoadingEnabled && index > 2 ? true : false,
              hidePriceFulfillmentDisplay: _this2.props.hidePriceFulfillmentDisplay,
              data: item,
              cookieValue: _this2.props.cookieValue,
              prefStoreAddress: _this2.props.prefStoreAddress,
              isPutFilterSelected: _this2.props.isPutFilterSelected,
              isLoggedIn: false,
              onClickTitle: _this2.props.onClickTitle,
              onClickImage: _this2.props.onClickImage,
              onClickLink: _this2.props.onClickLink });
          })
        )
      );
    } else {
      return _react2.default.createElement(_zeroResultsNoMatch2.default, { searchQuery: this.props.query, postalCode: this.props.postalCode });
    }
  };

  return SearchProductResult;
}(_react2.default.Component);

exports.default = SearchProductResult;


SearchProductResult.displayName = "SearchProductResult";

SearchProductResult.propTypes = {
  /**
  Function specific for IRO fetch call on initial load
  */
  initialIROCall: _react2.default.PropTypes.func,
  /**
  Defer loading/lazy loading boolean
  */
  lazyLoadingEnabled: _react2.default.PropTypes.bool,
  requestContext: _react2.default.PropTypes.object,
  cookieValue: _react2.default.PropTypes.string,
  gridView: _react2.default.PropTypes.bool,
  prefStoreAddress: _react2.default.PropTypes.string,
  isPutFilterSelected: _react2.default.PropTypes.bool,
  items: _react2.default.PropTypes.array,
  query: _react2.default.PropTypes.string,
  postalCode: _react2.default.PropTypes.string,
  isBrowse: _react2.default.PropTypes.bool,
  zeroResultsPrice: _react2.default.PropTypes.bool,
  zeroResultsStore: _react2.default.PropTypes.bool,
  onGetNewSearchResult: _react2.default.PropTypes.func,
  onClickTitle: _react2.default.PropTypes.func,
  onClickImage: _react2.default.PropTypes.func,
  onClickLink: _react2.default.PropTypes.func,
  hidePriceFulfillmentDisplay: _react2.default.PropTypes.bool
};

SearchProductResult.defaultProps = {
  lazyLoadingEnabled: false,
  hidePriceFulfillmentDisplay: false,
  items: [],
  cookieValue: "",
  prefStoreAddress: "",
  isPutFilterSelected: false,
  query: "",
  postalCode: "",
  isBrowse: false,
  zeroResultsPrice: false,
  zeroResultsStore: false,
  onGetNewSearchResult: function onGetNewSearchResult() {},
  onClickTitle: function onClickTitle() {},
  onClickImage: function onClickImage() {},
  onClickLink: function onClickLink() {}
};