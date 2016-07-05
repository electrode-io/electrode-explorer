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

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

var _waypointCollector = require("@walmart/wmreact-analytics/lib/collectors/waypoint-collector");

var _waypointCollector2 = _interopRequireDefault(_waypointCollector);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _tempoCategoryTile = require("../helper-components/tempo-category-tile");

var _tempoCategoryTile2 = _interopRequireDefault(_tempoCategoryTile);

var _moduleHeader = require("../helper-components/module-header");

var _moduleHeader2 = _interopRequireDefault(_moduleHeader);

var _categoryTileHelpers = require("../../helpers/category-tile-helpers");

var _categoryTileHelpers2 = _interopRequireDefault(_categoryTileHelpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Featured Categories Curated Module
@examples
@component FeaturedCategoriesCurated
@import {FeaturedCategoriesCurated}
@playground
FeaturedCategoriesCurated
```
<FeaturedCategoriesCurated
  moduleData={FeaturedCategoriesCuratedData}
/>
```
*/

var FeaturedCategoriesCurated = function (_Component) {
  (0, _inherits3.default)(FeaturedCategoriesCurated, _Component);

  function FeaturedCategoriesCurated(props) {
    (0, _classCallCheck3.default)(this, FeaturedCategoriesCurated);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      expanded: false
    };

    _this._toggleExpanded = _this._toggleExpanded.bind(_this);
    return _this;
  }

  FeaturedCategoriesCurated.prototype._toggleExpanded = function _toggleExpanded() {
    this.setState({
      expanded: !this.state.expanded
    });
  };

  FeaturedCategoriesCurated.prototype._renderFeaturedCategoryTiles = function _renderFeaturedCategoryTiles(categories, automationId, verticalZonesCount, // eslint-disable-line max-params, max-len
  isMobile) {
    // eslint-disable-line max-params
    var gridColClasses = (0, _classnames2.default)("Grid-col u-size-1-3 u-size-1-4-s", "u-size-1-" + (5 - verticalZonesCount) + "-m", "u-size-1-" + (6 - verticalZonesCount) + "-l", "u-size-1-" + (7 - verticalZonesCount) + "-xl");

    var tiles = [];
    var renderedTileIndex = 0;

    categories.forEach(function (category) {
      if ((0, _categoryTileHelpers2.default)(category)) {
        tiles.push(_react2.default.createElement(_tempoCategoryTile2.default, {
          className: gridColClasses,
          key: renderedTileIndex,
          category: category,
          dataAutomationId: automationId + "-categoryTile-" + renderedTileIndex,
          isMobile: isMobile,
          mobileImageSize: 90
        }));
        renderedTileIndex++;
      }
    });

    return tiles;
  };

  FeaturedCategoriesCurated.prototype._getButtonClasses = function _getButtonClasses(categoryLength) {
    var hideButtonClass = "";

    if (categoryLength <= 9) {
      hideButtonClass = "hide-content";
    } else if (categoryLength <= 10) {
      hideButtonClass = "hide-content-s";
    } else if (categoryLength <= 12) {
      hideButtonClass = "hide-button-s-l";
    } else if (categoryLength <= 14) {
      hideButtonClass = "hide-content-xl";
    }

    return (0, _classnames2.default)("caret", "caret-blue", "font-semibold", "copy-mini", "btn", "btn-inverse", hideButtonClass, { "active": this.state.expanded });
  };

  FeaturedCategoriesCurated.prototype._renderFeaturedCategories = function _renderFeaturedCategories(automationId) {
    var _props = this.props;
    var _props$moduleData$con = _props.moduleData.configs;
    var categories = _props$moduleData$con.categories;
    var displayMode = _props$moduleData$con.displayMode;
    var verticalZonesCount = _props.verticalZonesCount;
    var isMobile = _props.isMobile;


    if (displayMode === "standard") {
      return _react2.default.createElement(
        "div",
        { className: "FeaturedCategoriesCurated-gutters" },
        _react2.default.createElement(
          "div",
          {
            className: (0, _classnames2.default)("FeaturedCategoriesCurated-expander", { "is-open": this.state.expanded }) },
          _react2.default.createElement(
            "div",
            { className: "clearfix" },
            this._renderFeaturedCategoryTiles(categories, automationId, verticalZonesCount, isMobile)
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "FeaturedCategoriesCurated-button text-center" },
          _react2.default.createElement(
            _button2.default,
            (0, _extends3.default)({
              className: this._getButtonClasses(categories.length),
              onClick: this._toggleExpanded
            }, (0, _automationIdUtils.getDataAutomationIdPair)("expander", automationId)),
            "View ",
            this.state.expanded ? "less" : "more"
          )
        )
      );
    } else {
      return _react2.default.createElement(
        "div",
        { className: "FeaturedCategoriesCurated-gutters" },
        this._renderFeaturedCategoryTiles(categories, automationId, verticalZonesCount, isMobile)
      );
    }
  };

  FeaturedCategoriesCurated.prototype.render = function render() {
    var _props2 = this.props;
    var _props2$moduleData = _props2.moduleData;
    var type = _props2$moduleData.type;
    var _props2$moduleData$co = _props2$moduleData.configs;
    var title = _props2$moduleData$co.title;
    var titleColor = _props2$moduleData$co.titleColor;
    var themeColor = _props2$moduleData$co.themeColor;
    var themeImage = _props2$moduleData$co.themeImage;
    var moduleId = _props2$moduleData.moduleId;
    var dataAutomationId = _props2.dataAutomationId;


    var style = {
      backgroundColor: themeColor
    };

    if (themeImage) {
      style.backgroundImage = "url('" + themeImage.src + "')";
    }

    var automationId = dataAutomationId + "-FeaturedCategoriesCurated";

    return _react2.default.createElement(
      _collectorContext2.default,
      { moduleId: moduleId },
      _react2.default.createElement(
        _waypointCollector2.default,
        { eventType: "module_view", bottomOffset: 200 },
        _react2.default.createElement(
          "div",
          (0, _extends3.default)({
            "data-module": type,
            "data-module-id": moduleId,
            className: "FeaturedCategoriesCurated",
            style: style
          }, (0, _automationIdUtils.getDataAutomationIdPair)(automationId, "")),
          title && _react2.default.createElement(_moduleHeader2.default, {
            headerTitle: title,
            headerTitleColor: titleColor,
            dataAutomationId: automationId
          }),
          this._renderFeaturedCategories(automationId)
        )
      )
    );
  };

  return FeaturedCategoriesCurated;
}(_react.Component);

FeaturedCategoriesCurated.displayName = "FeaturedCategoriesCurated";

FeaturedCategoriesCurated.propTypes = {
  /**
   * Data for configuring the component. Typically coming from Tempo.
   * Contains information on the URL detail, image detail and header data.
   */
  moduleData: _react.PropTypes.shape({
    type: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      title: _react.PropTypes.string,
      titleColor: _react.PropTypes.string,
      themeColor: _react.PropTypes.string,
      themeImage: _react.PropTypes.object,
      displayMode: _react.PropTypes.string,
      categories: _react.PropTypes.array
    }).isRequired,
    moduleId: _react.PropTypes.string
  }).isRequired,
  /**
  * Tempo module type for analytics and automation testing.
  */
  dataAutomationId: _react.PropTypes.string,
  /**
  * Vertical Zones on the sides. Used to change the Grid column structure.
  */
  verticalZonesCount: _react.PropTypes.number,
  /**
  * True on mobile devices
  */
  isMobile: _react.PropTypes.bool
};

FeaturedCategoriesCurated.defaultProps = {
  dataAutomationId: "",
  verticalZonesCount: 0,
  isMobile: false
};

exports.default = FeaturedCategoriesCurated;