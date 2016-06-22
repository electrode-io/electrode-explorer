"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _carousel = require("./carousel");

var _carousel2 = _interopRequireDefault(_carousel);

var _automationIdUtils = { getDataAutomationIdPair: function () { /* no-op */ } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Renders a header that pulls itself towards the carousel if available
@returns {ReactElement} Header
 */
var _renderHeader = function _renderHeader(_ref) {
  var padding = _ref.padding;
  var header = _ref.header;

  if (!header) {
    return null;
  }

  return _react2.default.createElement(
    "div",
    {
      className: "FeaturedElementCarousel-header",
      style: { margin: "0 " + padding + "px", marginBottom: -padding } },
    header
  );
};

/**
Renders Static Tile pulling left with set width (default: 200px) if available
@returns {ReactElement} Static Tile pulling left
 */
var _renderStaticTile = function _renderStaticTile(_ref2) {
  var padding = _ref2.padding;
  var staticTile = _ref2.staticTile;
  var staticWidth = _ref2.staticWidth;

  if (!staticTile) {
    return null;
  }

  return _react2.default.createElement(
    "div",
    {
      className: "FeaturedElementCarousel-staticTile display-inline-block",
      style: {
        width: staticWidth,
        padding: padding + "px 0 " + padding + "px " + padding + "px",
        verticalAlign: "top"
      } },
    staticTile
  );
};

/**
Renders Carousel with all passed on props. Overrides width and pulls left
@returns {ReactElement} Carousel pulling left
 */
var _renderCarousel = function _renderCarousel(_ref3) {
  var children = _ref3.children;
  var staticWidth = _ref3.staticWidth;
  var props = (0, _objectWithoutProperties3.default)(_ref3, ["children", "staticWidth"]);

  if (!staticWidth) {
    return _react2.default.createElement(
      _carousel2.default,
      props,
      children
    );
  }

  return _react2.default.createElement(
    "div",
    {
      className: "FeaturedElementCarousel-carousel display-inline-block",
      style: { width: "calc(100% - " + staticWidth + ")" } },
    _react2.default.createElement(
      _carousel2.default,
      props,
      children
    )
  );
};

/**
Responsive Carousel with option of static tile, background color and background image
@examples
```jsx
<FeaturedElementCarousel style={{marginBottom: 40}}
  cellSpacing={20}
  staticTile={
    <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>A</div>
  }
  backgroundColor="#fe9">
  <div style={{background:'#aaa',padding:'4rem', textAlign: 'center'}}>B</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>C</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>D</div>
  <div style={{background:'#aaa',padding:'4rem', textAlign: 'center'}}>E</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>F</div>
</FeaturedElementCarousel>
```

It takes all arguments that carousel takes.

@component FeaturedElementCarousel
@import Carousel
@playground
Carousel
```
<FeaturedElementCarousel style={{marginBottom: 40}}
  framePadding="40"
  cellSpacing={20}
  header={<h3 style={{lineHeight: "50px"}}>Example title</h3>}
  staticTile={<div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>Static</div>}
  backgroundColor="hotpink"
  responsive={[
    {
      selectors: ['x-small','small'],
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      selectors: ['medium','large'],
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      selectors: ['x-large'],
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]}>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>A</div>
  <div style={{background:'#aaa',padding:'4rem', textAlign: 'center'}}>B</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>C</div>
  <div style={{background:'#aaa',padding:'4rem', textAlign: 'center'}}>D</div>
  <div style={{background:'#ccc',padding:'4rem', textAlign: 'center'}}>E</div>
</FeaturedElementCarousel>
```

@returns {ReactElement} returns Stateless FeaturedElementCarousel component
 */
var FeaturedElementCarousel = function FeaturedElementCarousel(_ref4) {
  var header = _ref4.header;
  var staticTile = _ref4.staticTile;
  var staticTileWidth = _ref4.staticTileWidth;
  var children = _ref4.children;
  var backgroundColor = _ref4.backgroundColor;
  var backgroundImage = _ref4.backgroundImage;
  var dataModuleType = _ref4.dataModuleType;
  var dataModuleId = _ref4.dataModuleId;
  var dataAutomationId = _ref4.dataAutomationId;
  var className = _ref4.className;
  var props = (0, _objectWithoutProperties3.default)(_ref4, ["header", "staticTile", "staticTileWidth", "children", "backgroundColor", "backgroundImage", "dataModuleType", "dataModuleId", "dataAutomationId", "className"]);

  var staticWidth = staticTile ? staticTileWidth : null;

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({
      className: (0, _classnames2.default)("FeaturedElementCarousel-container", className),
      style: { backgroundColor: backgroundColor, backgroundImage: backgroundImage },
      "data-module": dataModuleType,
      "data-module-id": dataModuleId
    }, (0, _automationIdUtils.getDataAutomationIdPair)(dataModuleType, dataAutomationId)),
    _renderHeader({ padding: props.framePadding, header: header }),
    _renderStaticTile({ padding: props.framePadding, staticTile: staticTile, staticWidth: staticWidth }),
    _renderCarousel((0, _extends3.default)({ children: children, staticWidth: staticWidth }, props))
  );
};

FeaturedElementCarousel.propTypes = {
  /**
   * Header to be rendered inside customized area
   */
  header: _react.PropTypes.node,
  /**
   * Static tile to be rendered, doesn't rotate with children
   */
  staticTile: _react.PropTypes.node,
  /**
   * Static tile width
   */
  staticTileWidth: _react.PropTypes.string.isRequired,
  /**
   * Child components to be rendered as slides in the carousel
   */
  children: _react.PropTypes.node.isRequired,
  /**
   * CSS background-color property to be set on carousel wrapper
   */
  backgroundColor: _react.PropTypes.string,
  /**
   * CSS background-image property to be set on carousel wrapper
   */
  backgroundImage: _react.PropTypes.string,
  /**
   * Padding of carousel, also pads static tile
   */
  framePadding: _react.PropTypes.string,
  /**
   * Required for Tempo modules and automation tests
   */
  dataModuleType: _react.PropTypes.string,
  /**
   * Required for Tempo modules and automation tests
   */
  dataModuleId: _react.PropTypes.string,
  /**
   * Required for automation tests
   */
  dataAutomationId: _react.PropTypes.string,
  /**
   * Additional classes for styling
   */
  className: _react.PropTypes.string
};

FeaturedElementCarousel.defaultProps = {
  header: null,
  staticTile: null,
  staticTileWidth: "200px",
  backgroundColor: "transparent",
  backgroundImage: null,
  framePadding: "0",
  dataModuleType: "",
  dataModuleId: "",
  dataAutomationId: "",
  className: ""
};

exports.default = FeaturedElementCarousel;