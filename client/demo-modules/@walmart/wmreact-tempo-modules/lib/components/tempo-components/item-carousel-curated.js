"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _tempoTileCarousel = require("../helper-components/tempo-tile-carousel");

var _tempoTileCarousel2 = _interopRequireDefault(_tempoTileCarousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ItemCarouselCurated = function ItemCarouselCurated(props) {
  return _react2.default.createElement(_tempoTileCarousel2.default, (0, _extends3.default)({ className: "ItemCarouselCurated" }, props));
};

ItemCarouselCurated.propTypes = {
  /**
  * Data coming from Tempo and IRO via Quimby to apply to the Module
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
      tileOptions: _react.PropTypes.object.isRequired,
      products: _react.PropTypes.array.isRequired
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
  * Whether or not the device has type mobile.
  */
  isMobile: _react.PropTypes.bool,
  /**
  * ID used to identify the component in automation tests.
  */
  dataAutomationId: _react.PropTypes.string,
  /**
  * Zone ID for analytics
  */
  zoneId: _react.PropTypes.number
};

ItemCarouselCurated.defaultProps = {
  userLoggedIn: false,
  lowQuantityThreshold: 7,
  isMobile: false,
  dataAutomationId: "",
  zoneId: 0
};

exports.default = ItemCarouselCurated;