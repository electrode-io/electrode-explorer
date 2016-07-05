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

var _utilbarBrand = require("./utilbar-brand");

var _utilbarBrand2 = _interopRequireDefault(_utilbarBrand);

var _utilbarPrice = require("./utilbar-price");

var _utilbarPrice2 = _interopRequireDefault(_utilbarPrice);

var _utilbarSort = require("./utilbar-sort");

var _utilbarSort2 = _interopRequireDefault(_utilbarSort);

var _utilbarSwitcher = require("./utilbar-switcher");

var _utilbarSwitcher2 = _interopRequireDefault(_utilbarSwitcher);

var _utilbarStoreAvailability = require("./utilbar-store-availability");

var _utilbarStoreAvailability2 = _interopRequireDefault(_utilbarStoreAvailability);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchUtilBar = function (_Component) {
  (0, _inherits3.default)(SearchUtilBar, _Component);

  function SearchUtilBar() {
    (0, _classCallCheck3.default)(this, SearchUtilBar);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  SearchUtilBar.prototype.render = function render() {
    var _props = this.props;
    var min = _props.min;
    var max = _props.max;
    var currency = _props.currency;
    var onChangePrice = _props.onChangePrice;
    var brandChoices = _props.brandChoices;
    var onChangeBrand = _props.onChangeBrand;
    var location = _props.location;
    var selectedStores = _props.selectedStores;
    var nearbyStores = _props.nearbyStores;
    var onFetchStores = _props.onFetchStores;
    var onFetchPreso = _props.onFetchPreso;
    var currentSortValue = _props.currentSortValue;
    var sortOptions = _props.sortOptions;
    var onChangeSort = _props.onChangeSort;
    var isGridView = _props.isGridView;
    var onChangeSwitcher = _props.onChangeSwitcher;


    return _react2.default.createElement(
      "div",
      { className: "desktop-util-bar" },
      _react2.default.createElement(
        "div",
        { className: "desktop-bar-left" },
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "p",
            { className: "desktop-bar-heading" },
            "Refine"
          )
        ),
        _react2.default.createElement(_utilbarPrice2.default, { min: min, max: max, currency: currency, onChange: onChangePrice }),
        _react2.default.createElement(_utilbarBrand2.default, { choices: brandChoices, onChange: onChangeBrand }),
        _react2.default.createElement(_utilbarStoreAvailability2.default, { nearbyStores: nearbyStores, selectedStores: selectedStores,
          onFetchStores: onFetchStores, location: location, onFetchPreso: onFetchPreso })
      ),
      _react2.default.createElement(
        "div",
        { className: "desktop-bar-right" },
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "p",
            { className: "desktop-bar-heading" },
            "Sort"
          )
        ),
        _react2.default.createElement(_utilbarSort2.default, { currentSortValue: currentSortValue, options: sortOptions, onChange: onChangeSort }),
        _react2.default.createElement(_utilbarSwitcher2.default, { isGridView: isGridView, onChange: onChangeSwitcher })
      )
    );
  };

  return SearchUtilBar;
}(_react.Component);

exports.default = SearchUtilBar;


SearchUtilBar.displayName = "SearchUtilBar";

SearchUtilBar.propTypes = {
  min: _react.PropTypes.number,
  max: _react.PropTypes.number,
  currency: _react.PropTypes.string,
  onChangePrice: _react.PropTypes.func,

  brandChoices: _react.PropTypes.array,
  onChangeBrand: _react.PropTypes.func,

  location: _react.PropTypes.any,
  selectedStores: _react.PropTypes.array,
  nearbyStores: _react.PropTypes.array,
  onFetchStores: _react.PropTypes.func,
  onFetchPreso: _react.PropTypes.func,

  currentSortValue: _react.PropTypes.string,
  sortOptions: _react.PropTypes.array,
  onChangeSort: _react.PropTypes.func,

  isGridView: _react.PropTypes.bool,
  onChangeSwitcher: _react.PropTypes.func
};

SearchUtilBar.defaultProps = {
  isGridView: false
};