"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _carousel = require("@walmart/wmreact-carousel/lib/components/carousel");

var _carousel2 = _interopRequireDefault(_carousel);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _collapsable = require("@walmart/wmreact-layout/lib/components/collapsable");

var _collapsable2 = _interopRequireDefault(_collapsable);

var _carouselDecorators = require("@walmart/wmreact-carousel/lib/components/carousel-decorators");

var _carouselDecorators2 = _interopRequireDefault(_carouselDecorators);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _spinner = require("@walmart/wmreact-containers/lib/components/spinner");

var _spinner2 = _interopRequireDefault(_spinner);

var _utils = require("../common/utils");

var _storeTile = require("./store-tile");

var _storeTile2 = _interopRequireDefault(_storeTile);

var _zipFinder = require("./zip-finder");

var _zipFinder2 = _interopRequireDefault(_zipFinder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StoreFinderCarousel = function (_Component) {
  (0, _inherits3.default)(StoreFinderCarousel, _Component);

  function StoreFinderCarousel() {
    (0, _classCallCheck3.default)(this, StoreFinderCarousel);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  StoreFinderCarousel.prototype.componentDidMount = function componentDidMount() {
    var onMount = this.props.onMount;

    onMount();
  };

  // --------------------------------------------------------------------------

  StoreFinderCarousel.prototype._renderZip = function _renderZip() {
    var _props = this.props;
    var zip = _props.zip;
    var isSearchingForZip = _props.isSearchingForZip;
    var onZipChange = _props.onZipChange;
    var toggleSearching = _props.toggleSearching;

    return zip ? _react2.default.createElement(_zipFinder2.default, {
      zip: zip,
      isSearching: isSearchingForZip,
      onSearch: onZipChange,
      toggleSearching: toggleSearching
    }) : null;
  };

  StoreFinderCarousel.prototype._renderShowOrHideLink = function _renderShowOrHideLink() {
    var _props2 = this.props;
    var isVisible = _props2.isVisible;
    var toggleVisibility = _props2.toggleVisibility;

    var linkClasses = (0, _classnames2.default)("StoreCarousel-toggleVisibility pull-right", {
      "show-arrow": !isVisible
    });

    return _react2.default.createElement(
      _link2.default.More,
      { className: linkClasses, onClick: toggleVisibility },
      isVisible ? "Hide" : "Show"
    );
  };

  StoreFinderCarousel.prototype._renderCarousel = function _renderCarousel() {
    var _props3 = this.props;
    var carouselConfig = _props3.carouselConfig;
    var currentStore = _props3.currentStore;
    var filterDecorators = _props3.filterDecorators;
    var isVisible = _props3.isVisible;
    var myStore = _props3.myStore;
    var stores = _props3.stores;
    var onChange = _props3.onChange;

    var decorators = filterDecorators ? _carouselDecorators2.default.filter(filterDecorators) : _carouselDecorators2.default;

    return _react2.default.createElement(
      _collapsable2.default,
      { isOpen: isVisible },
      _react2.default.createElement(
        _carousel2.default,
        (0, _extends3.default)({ decorators: decorators }, carouselConfig),
        stores.map(function (store) {
          var id = store.id;

          return _react2.default.createElement(_storeTile2.default, {
            key: id,
            store: store,
            shouldLink: id !== currentStore,
            isMyStore: id === myStore,
            onClick: onChange
          });
        })
      )
    );
  };

  StoreFinderCarousel.prototype.render = function render() {
    var _props4 = this.props;
    var className = _props4.className;
    var loading = _props4.loading;

    var classes = (0, _classnames2.default)("StoreCarousel", className);

    return _react2.default.createElement(
      "div",
      { className: classes },
      loading ? _react2.default.createElement(_spinner2.default, { loading: true, fixed: false }) : _react2.default.createElement(
        "div",
        null,
        this._renderZip(),
        this._renderShowOrHideLink(),
        this._renderCarousel()
      )
    );
  };

  return StoreFinderCarousel;
}(_react.Component);

exports.default = StoreFinderCarousel;


StoreFinderCarousel.propTypes = {

  /**
   * The array of stores to loop over. It's expected that these arrive in the shape
   * returned by the GSF endpoint: https://confluence.walmart.com/display/PGGSF/Response+Json
   */
  stores: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    id: _react.PropTypes.number,
    address: _react.PropTypes.shape({
      city: _react.PropTypes.string,
      address1: _react.PropTypes.string
    })
  })),

  /**
   * Callback to be fired when user selects a store. It's passed the ID of the new store.
   */
  onChange: _react.PropTypes.func,

  /**
   * Callback to be fired when user enters a new zip to search near. It's passed the new zip.
   */
  onZipChange: _react.PropTypes.func,

  /**
   * Callback to restrict what navigation UI is shown: hairline arrows, dots, etc.
   * By default, the carousel shows all the "decorators" (UI elements) present in
   * gecgithub01.walmart.com/react/carousel/blob/master/src/components/carousel-decorators.jsx,
   * but consumers can pick and choose decorators by providing this arbitrary filtering function.
   */
  filterDecorators: _react.PropTypes.func,

  /**
   * Callback to handle showing/hiding carousel; see `props.isVisible`.
   */
  toggleVisibility: _react.PropTypes.func,

  /**
   * Callback to alert parent container when mounted (e.g., for data fetching)
   */
  onMount: _react.PropTypes.func,

  /**
   * Callback to alert parent container to toggle between zip display/search mode.
   */
  toggleSearching: _react.PropTypes.func,

  /**
   * Governs whether to show spinner or not. If `loading` is true, no carousel will
   * be rendered, even if `stores` contains store objects.
   */
  loading: _react.PropTypes.bool,

  /**
   * Governs 1.) whether carousel will be visible and 2.) whether UI text will read
   * "Show" or "Hide."
   */
  isVisible: _react.PropTypes.bool,

  /**
   * Governs whether zip UI will show search box/button or current zip.
   */
  isSearchingForZip: _react.PropTypes.bool,

  /**
   * Zip code to be displayed in the upper left in the format, "Stores near {zip}."
   * If no zip is provided, no zip-related UI will appear.
   */
  zip: _react.PropTypes.string,

  /**
   * Store ID to treat as "current." Current stores aren't hyperlinked or clickable.
   */
  currentStore: _react.PropTypes.number,

  /**
   * Store ID to highlight as "My Store" with a gold star.
   */
  myStore: _react.PropTypes.number,

  /**
   * Class name to apply to outermost wrapper element.
   */
  className: _react.PropTypes.string,

  /**
   * All values namespaced under `carouselConfig` are passed through to the underlying `Carousel`:
   * https://gecgithub01.walmart.com/react/carousel/blob/master/src/components/carousel.jsx
   *
   * `propTypes` left intentionally vague (no `shape`) because that's Carousel's decision.
   */
  carouselConfig: _react.PropTypes.object
};

StoreFinderCarousel.defaultProps = {
  // `currentStore` and `myStore` don't have any defaults because they're 1.) strictly
  // user-determined (e.g., no way to guess a default `myStore`) and 2.) not required.
  stores: [],
  isSearchingForZip: false,
  onChange: (0, _utils.noop)(),
  onZipChange: (0, _utils.noop)(),
  toggleSearching: (0, _utils.noop)(),
  toggleVisibility: (0, _utils.noop)(),
  onMount: (0, _utils.noop)(),
  filterDecorators: function filterDecorators() {
    return true;
  },
  loading: false,
  isVisible: true,
  className: "",
  zip: "",
  carouselConfig: {
    framePadding: "35",
    responsive: [{
      selectors: ["x-small", "small", "medium", "large", "x-large", "xx-large"],
      settings: { slidesToShow: 7, slidesToScroll: 6 }
    }]
  }
};