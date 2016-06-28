"use strict";

exports.__esModule = true;
exports._getCategoryTileHeight = exports._getItemTileHeight = exports._setTileOptionProps = exports._setOffToFalse = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _exenv = require("exenv");

var _exenv2 = _interopRequireDefault(_exenv);

var _carouselDecorators = require("@walmart/wmreact-carousel/lib/components/carousel-decorators");

var _featuredElementCarousel = require("@walmart/wmreact-carousel/lib/components/featured-element-carousel");

var _featuredElementCarousel2 = _interopRequireDefault(_featuredElementCarousel);

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

var _moduleHeader = require("./module-header");

var _moduleHeader2 = _interopRequireDefault(_moduleHeader);

var _carouselFirstTile = require("./carousel-first-tile");

var _carouselFirstTile2 = _interopRequireDefault(_carouselFirstTile);

var _tempoItemTile = require("./tempo-item-tile");

var _tempoItemTile2 = _interopRequireDefault(_tempoItemTile);

var _tempoCategoryTile = require("./tempo-category-tile");

var _tempoCategoryTile2 = _interopRequireDefault(_tempoCategoryTile);

var _categoryTileHelpers = require("../../helpers/category-tile-helpers");

var _categoryTileHelpers2 = _interopRequireDefault(_categoryTileHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SLIDE_WIDTH_SMALL = { slideWidth: "136px", initialSlideWidth: 136 };
var SLIDE_WIDTH_LARGE = { slideWidth: "168px", initialSlideWidth: 168 };
var SLIDE_HEIGHT_LARGE = { slideHeight: "168px", initialSlideHeight: 168 };
var CELL_SPACING_SMALL = { cellSpacing: 8 };
var CELL_SPACING_LARGE = { cellSpacing: 12 };

var HORIZONTAL_CAROUSEL_PROPS = {
  slidesToScroll: "auto",
  frameOverflow: "visible",
  responsive: [{
    selectors: ["x-small"],
    settings: (0, _extends3.default)({
      framePadding: "0 8px"
    }, CELL_SPACING_SMALL, SLIDE_WIDTH_SMALL)
  }, {
    selectors: ["small"],
    settings: (0, _extends3.default)({
      framePadding: "0 16px"
    }, CELL_SPACING_SMALL, SLIDE_WIDTH_SMALL)
  }, {
    selectors: ["medium"],
    settings: (0, _extends3.default)({
      framePadding: "0 16px"
    }, CELL_SPACING_SMALL, SLIDE_WIDTH_LARGE)
  }, {
    selectors: ["large"],
    settings: (0, _extends3.default)({
      framePadding: "0 20px"
    }, CELL_SPACING_LARGE, SLIDE_WIDTH_LARGE)
  }, {
    selectors: ["x-large"],
    settings: (0, _extends3.default)({
      framePadding: "0 32px"
    }, CELL_SPACING_LARGE, SLIDE_WIDTH_LARGE)
  }]
};

var VERTICAL_CAROUSEL_PROPS = (0, _extends3.default)({
  slidesToShow: 7.16,
  slidesToScroll: "auto",
  framePadding: "0 16px"
}, CELL_SPACING_LARGE, SLIDE_HEIGHT_LARGE);

var PAGINATOR_STYLE = { top: 84 };

var TILE_PADDING = 8;
var TILE_IMAGE_HEIGHT = 144;
var TILE_IMAGE_MARGIN = 4;
var TILE_TEXT_LINE_HEIGHT = 18;
var TILE_PRICE_HEIGHT = 36;
var TILE_STARS_HEIGHT = 15;
var TILE_SHIPPING_PASS_HEIGHT = 15;
var TILE_BASE_HEIGHT = TILE_PADDING * 2 + TILE_IMAGE_HEIGHT + TILE_IMAGE_MARGIN;

var _setOffToFalse = exports._setOffToFalse = function _setOffToFalse(value) {
  return value !== "off";
};

var _setTileOptionProps = exports._setTileOptionProps = function _setTileOptionProps(_ref) {
  var price = _ref.price;
  var itemFlag = _ref.itemFlag;
  var productTitle = _ref.productTitle;
  var ratingsReviews = _ref.ratingsReviews;
  var deliveryPass = _ref.deliveryPass;

  var productNameLinesValues = {
    off: 0,
    single: 1,
    double: 2
  };

  return {
    productNameLines: productNameLinesValues[productTitle],
    showPrice: _setOffToFalse(price),
    showFlags: _setOffToFalse(itemFlag),
    showRatings: _setOffToFalse(ratingsReviews),
    showShippingPass: _setOffToFalse(deliveryPass)
  };
};

var _getItemTileHeight = exports._getItemTileHeight = function _getItemTileHeight(tileOptionProps) {
  var productNameLines = tileOptionProps.productNameLines;
  var showPrice = tileOptionProps.showPrice;
  var showRatings = tileOptionProps.showRatings;
  var showShippingPass = tileOptionProps.showShippingPass;

  var tileHeight = TILE_BASE_HEIGHT + TILE_TEXT_LINE_HEIGHT * productNameLines;
  if (showPrice) {
    tileHeight += TILE_PRICE_HEIGHT;
  }
  if (showRatings) {
    tileHeight += TILE_STARS_HEIGHT;
  }
  if (showShippingPass) {
    tileHeight += TILE_SHIPPING_PASS_HEIGHT;
  }

  return tileHeight;
};

var _getCategoryTileHeight = exports._getCategoryTileHeight = function _getCategoryTileHeight(titleAlignment) {
  var titleLines = titleAlignment === "center" ? 1 : 2;
  return TILE_BASE_HEIGHT + TILE_TEXT_LINE_HEIGHT * titleLines;
};

var TempoTileCarousel = function (_Component) {
  (0, _inherits3.default)(TempoTileCarousel, _Component);

  function TempoTileCarousel(props) {
    (0, _classCallCheck3.default)(this, TempoTileCarousel);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      lazyLoadIndex: props.isMobile ? 6 : 8
    };

    _this._loadTiles = _this._loadTiles.bind(_this);
    return _this;
  }

  TempoTileCarousel.prototype._renderFirstTile = function _renderFirstTile(vertical, _ref2, automationId) {
    var firstTile = _ref2.firstTile;
    var themeButton = _ref2.themeButton;
    var themeButtonColor = _ref2.themeButtonColor;
    var themeTextColor = _ref2.themeTextColor;

    if (firstTile && !vertical) {
      var props = (0, _extends3.default)({
        themeButton: (0, _extends3.default)({
          buttonTextColor: themeTextColor,
          themeButtonColor: themeButtonColor
        }, themeButton),
        dataAutomationId: automationId + "-firstTile"
      }, firstTile);

      return [_react2.default.createElement(_carouselFirstTile2.default, (0, _extends3.default)({ key: 0 }, props))];
    }
  };

  TempoTileCarousel.prototype._renderItemTiles = function _renderItemTiles(props, lazyLoadIndex, automationId, tileOptionProps) {
    // eslint-disable-line max-params, max-len
    var _props$moduleData = props.moduleData;
    var configs = _props$moduleData.configs;
    var products = _props$moduleData.configs.products;
    var moduleId = _props$moduleData.moduleId;
    var userLoggedIn = props.userLoggedIn;
    var lowQuantityThreshold = props.lowQuantityThreshold;
    var vertical = props.vertical;
    var isMobile = props.isMobile;


    var tileProps = (0, _extends3.default)({
      userLoggedIn: userLoggedIn,
      lowQuantityThreshold: lowQuantityThreshold,
      isMobile: isMobile,
      moduleId: moduleId
    }, tileOptionProps);

    var tiles = this._renderFirstTile(vertical, configs, automationId) || [];
    var renderedTileIndex = tiles.length;

    products.forEach(function (product) {
      if (product.canAddToCart) {
        if (lazyLoadIndex !== null && renderedTileIndex >= lazyLoadIndex) {
          tiles.push(null);
        } else {
          tiles.push(_react2.default.createElement(_tempoItemTile2.default, (0, _extends3.default)({
            key: renderedTileIndex,
            dataAutomationId: automationId + "-itemTile-" + renderedTileIndex,
            productData: product
          }, tileProps)));
        }
        renderedTileIndex++;
      }
    });

    return tiles;
  };

  TempoTileCarousel.prototype._renderCategoryTiles = function _renderCategoryTiles(props, lazyLoadIndex, automationId) {
    var _props$moduleData2 = props.moduleData;
    var configs = _props$moduleData2.configs;
    var _props$moduleData2$co = _props$moduleData2.configs;
    var categories = _props$moduleData2$co.tiles;
    var titleAlignment = _props$moduleData2$co.titleAlignment;
    var vertical = props.vertical;
    var isMobile = props.isMobile;


    var tileProps = {
      titleAlignment: titleAlignment,
      isMobile: isMobile
    };

    var tiles = this._renderFirstTile(vertical, configs, automationId) || [];
    var renderedTileIndex = tiles.length;

    categories.forEach(function (category) {
      // don't render tiles with no image or link
      if ((0, _categoryTileHelpers2.default)(category)) {
        if (lazyLoadIndex !== null && renderedTileIndex >= lazyLoadIndex) {
          tiles.push(null);
        } else {
          tiles.push(_react2.default.createElement(_tempoCategoryTile2.default, (0, _extends3.default)({
            key: renderedTileIndex,
            dataAutomationId: automationId + "-categoryTile-" + renderedTileIndex,
            category: category,
            className: (0, _classnames2.default)({ "font-semibold": vertical })
          }, tileProps)));
        }
        renderedTileIndex++;
      }
    });

    return tiles;
  };

  // Load all tiles once user interacts with carousel


  TempoTileCarousel.prototype._loadTiles = function _loadTiles() {
    if (this.state.lazyLoadIndex !== null) {
      this.setState({ lazyLoadIndex: null });
    }
  };

  TempoTileCarousel.prototype.render = function render() {
    var _props = this.props;
    var _props$moduleData3 = _props.moduleData;
    var _props$moduleData3$co = _props$moduleData3.configs;
    var title = _props$moduleData3$co.title;
    var titleColor = _props$moduleData3$co.titleColor;
    var themeColor = _props$moduleData3$co.themeColor;
    var themeImage = _props$moduleData3$co.themeImage;
    var seeAllLink = _props$moduleData3$co.seeAllLink;
    var seeAllLinkHexCode = _props$moduleData3$co.seeAllLinkHexCode;
    var products = _props$moduleData3$co.products;
    var tiles = _props$moduleData3$co.tiles;
    var tileOptions = _props$moduleData3$co.tileOptions;
    var titleAlignment = _props$moduleData3$co.titleAlignment;
    var moduleId = _props$moduleData3.moduleId;
    var type = _props$moduleData3.type;
    var dataAutomationId = _props.dataAutomationId;
    var vertical = _props.vertical;
    var className = _props.className;
    var isMobile = _props.isMobile;
    var zoneId = _props.zoneId;

    // Don't bother rendering if no products or categories

    if ((!products || !products.length) && (!tiles || !tiles.length)) {
      return null;
    }

    var lazyLoadIndex = this.state.lazyLoadIndex;


    var wrapperProps = {
      backgroundColor: themeColor,
      backgroundImage: themeImage ? "url(" + themeImage.src + ")" : null,
      dataModuleId: moduleId,
      dataModuleType: type,
      dataAutomationId: dataAutomationId
    };

    var newAutomationId = dataAutomationId + "-" + type;

    var headerProps = {
      headerTitle: title,
      headerTitleColor: titleColor,
      themeButton: (0, _extends3.default)({
        buttonTextColor: seeAllLinkHexCode
      }, seeAllLink),
      dataAutomationId: newAutomationId + "-header"
    };

    HORIZONTAL_CAROUSEL_PROPS.decorators = (0, _carouselDecorators.getCarouselDecorators)({
      dataAutomationId: newAutomationId,
      rightBtnStyle: PAGINATOR_STYLE,
      leftBtnStyle: PAGINATOR_STYLE
    });

    VERTICAL_CAROUSEL_PROPS.decorators = (0, _carouselDecorators.getCarouselDecorators)({
      dataAutomationId: newAutomationId,
      vertical: vertical
    });

    // set initial carousel props based on device type
    HORIZONTAL_CAROUSEL_PROPS.breakpoint = isMobile ? "small" : "large";

    var tempoTileClass = vertical ? "TempoTileCarousel-vertical" : "TempoTileCarousel";

    var tileOptionProps = products ? _setTileOptionProps(tileOptions) : null;
    var tileHeight = products ? _getItemTileHeight(tileOptionProps) : _getCategoryTileHeight(titleAlignment);
    var CAROUSEL_PROPS = vertical ? (0, _extends3.default)({}, VERTICAL_CAROUSEL_PROPS) : (0, _extends3.default)({}, HORIZONTAL_CAROUSEL_PROPS);
    return _react2.default.createElement(
      _collectorContext2.default,
      { moduleId: moduleId, zoneId: zoneId },
      _react2.default.createElement(
        _featuredElementCarousel2.default,
        (0, _extends3.default)({
          className: (0, _classnames2.default)(className, tempoTileClass, "tile--height" + tileHeight, {
            "is-loading": !_exenv2.default.canUseDOM
          }),
          vertical: vertical
        }, wrapperProps, CAROUSEL_PROPS, {
          header: _react2.default.createElement(_moduleHeader2.default, headerProps),
          beforeSlide: this._loadTiles }),
        products ? this._renderItemTiles(this.props, lazyLoadIndex, newAutomationId, tileOptionProps) : this._renderCategoryTiles(this.props, lazyLoadIndex, newAutomationId)
      )
    );
  };

  return TempoTileCarousel;
}(_react.Component);

TempoTileCarousel.displayName = "TempoTileCarousel";

TempoTileCarousel.propTypes = {
  /**
  * Data coming from Tempo and IRO via Quimby to Apply to the Module
  */
  moduleData: _react.PropTypes.shape({
    configs: _react.PropTypes.shape({
      title: _react.PropTypes.string,
      titleColor: _react.PropTypes.string,
      themeColor: _react.PropTypes.string,
      themeImage: _react.PropTypes.object,
      firstTile: _react.PropTypes.object,
      themeButton: _react.PropTypes.object,
      themeButtonColor: _react.PropTypes.string,
      themeTextColor: _react.PropTypes.string,
      seeAllLink: _react.PropTypes.object,
      seeAllLinkHexCode: _react.PropTypes.string,
      tileOptions: _react.PropTypes.object,
      products: _react.PropTypes.array,
      tiles: _react.PropTypes.array,
      titleAlignment: _react.PropTypes.string
    }).isRequired,
    moduleId: _react.PropTypes.string,
    type: _react.PropTypes.string
  }).isRequired,
  /**
  * Whether or not user is logged in. Used in tiles for submap logic.
  */
  userLoggedIn: _react.PropTypes.bool,
  /**
  * Threshold at which to display the low quantity flag in item tiles.
  */
  lowQuantityThreshold: _react.PropTypes.number,
  /**
  * Whether or not the carousel is vertical.
  */
  vertical: _react.PropTypes.bool,
  /**
  * Whether or not the device has type mobile.
  */
  isMobile: _react.PropTypes.bool,
  /**
  * ID used to identify the component in automation tests.
  */
  dataAutomationId: _react.PropTypes.string,
  /**
  * Any additional classes to add for styling purposes
  */
  className: _react.PropTypes.string,

  /**
  * Zone ID for analytics
  */
  zoneId: _react.PropTypes.number
};

TempoTileCarousel.defaultProps = {
  userLoggedIn: false,
  lowQuantityThreshold: 7,
  vertical: false,
  isMobile: false,
  dataAutomationId: "",
  className: "",
  zoneId: 0
};

exports.default = TempoTileCarousel;