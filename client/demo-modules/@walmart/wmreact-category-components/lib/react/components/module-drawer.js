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

var _reactDom = require("react-dom");

var _moduleTitle = require("./module-title");

var _moduleTitle2 = _interopRequireDefault(_moduleTitle);

var _moduleDrawerTile = require("./module-drawer-tile");

var _moduleDrawerTile2 = _interopRequireDefault(_moduleDrawerTile);

var _revealer = require("@walmart/wmreact-interactive/lib/components/revealer");

var _revealer2 = _interopRequireDefault(_revealer);

var _layout = require("@walmart/wmreact-layout/lib/components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _debounce = require("lodash/debounce");

var _debounce2 = _interopRequireDefault(_debounce);

var _categoryUtils = require("@walmart/category-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A component for displaying a group of tiles within a sliding drawer container.

The child Revealer component requires a base height be input; the base height
determines the height of the container when the component is collapsed. The base
height is dynamically calculated, after the component has mounted, using the
height of the tiles, the overall height of the container, and the number of rows
that should be displayed.

This component is responsive. The height of container will be recalculated on a
screen resize. To minimize the effects of many screen resizings, this method is
wrapped in lodash's debounce function.

@examples
```jsx
<ModuleDrawer data={[
  {
    "title": "TVs",
    "url": "/browse/electronics/tvs/3944_1060825_447913",
    "alt": "TVs",
    "imageUrl": "//i5.walmartimages.com/dfw/4ff9c6c9-5220/" +
      "k2-_ace57524-f8e5-4fb9-8189-4f94adf6d011.v1.jpg",
    "categoryId": "3944_1060825_447913",
    "assetId": "b5f4c3d0-d357-11e4-8430-9bb6eb04884d",
    "uid": "2TXEZx_h"
  },
  {
    "title": "Laptops",
    "url": "/browse/electronics/laptop-computers/3944_3951_132960",
    "alt": "Laptops",
    "imageUrl": "http://i5.walmartimages.com/dfw/4ff9c6c9-ce9a/" +
      "k2-_71a2c162-b553-428e-8e52-d149efbf0da9.v1.jpg",
    "categoryId": "3944_3951_132960",
    "assetId": "d1229ec0-d357-11e4-8c7c-258c79afbf66",
    "uid": "IE78xV1I"
  }
]} />
```
@component ModuleDrawer
@import {ModuleDrawer}
@playground
ModuleDrawer
```
<ModuleDrawer data={[
  {
    "title": "TVs",
    "url": "/browse/electronics/tvs/3944_1060825_447913",
    "alt": "TVs",
    "imageUrl": "//i5.walmartimages.com/dfw/4ff9c6c9-5220/" +
      "k2-_ace57524-f8e5-4fb9-8189-4f94adf6d011.v1.jpg",
    "categoryId": "3944_1060825_447913",
    "assetId": "b5f4c3d0-d357-11e4-8430-9bb6eb04884d",
    "uid": "2TXEZx_h"
  },
  {
    "title": "Laptops",
    "url": "/browse/electronics/laptop-computers/3944_3951_132960",
    "alt": "Laptops",
    "imageUrl": "http://i5.walmartimages.com/dfw/4ff9c6c9-ce9a/" +
      "k2-_71a2c162-b553-428e-8e52-d149efbf0da9.v1.jpg",
    "categoryId": "3944_3951_132960",
    "assetId": "d1229ec0-d357-11e4-8c7c-258c79afbf66",
    "uid": "IE78xV1I"
  }
]} />
```
*/

var ModuleDrawer = function (_Component) {
  (0, _inherits3.default)(ModuleDrawer, _Component);

  function ModuleDrawer(props) {
    (0, _classCallCheck3.default)(this, ModuleDrawer);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      baseHeight: 0
    };

    _this._normalizeRowHeight = _this._normalizeRowHeight.bind(_this);
    _this._debouncedNormalizeRowHeight = (0, _debounce2.default)(_this._normalizeRowHeight, _this.props.resizeThreshold);

    _this._calculateBaseHeight = _this._calculateBaseHeight.bind(_this);
    _this._renderTiles = _this._renderTiles.bind(_this);
    return _this;
  }

  ModuleDrawer.prototype._getNodeFromRef = function _getNodeFromRef(ref) {
    return (0, _reactDom.findDOMNode)(ref);
  };

  ModuleDrawer.prototype._normalizeRowHeight = function _normalizeRowHeight() {
    var revealer = this._getNodeFromRef(this.refs.Revealer);
    if (!revealer) {
      return;
    }

    var collapsable = revealer.children[0];
    var layout = this._getNodeFromRef(this.refs.Layout);
    var aTile = layout.children[0];

    if (collapsable && layout && aTile) {
      this.setState({
        baseHeight: this._calculateBaseHeight({
          rows: this.props.rows,
          collapsable: collapsable,
          layout: layout,
          aTile: aTile
        })
      });
    }
  };

  ModuleDrawer.prototype._calculateBaseHeight = function _calculateBaseHeight(opts) {
    // Revealer has ability to auto-hide the toggle button when the
    // content is less than the baseHeight. Add 1px to baseHeight to ensure
    // toggle button is hidden if content and baseHeight are equal
    var visibleRows = opts.collapsable.offsetHeight <= opts.layout.offsetHeight ? opts.rows : 1;
    return opts.aTile.offsetHeight * visibleRows + 1;
  };

  ModuleDrawer.prototype.componentDidMount = function componentDidMount() {
    // Add listener for screen size changes to appropriately handle responsive layout
    window.addEventListener("resize", this._debouncedNormalizeRowHeight);

    this._normalizeRowHeight();
  };

  ModuleDrawer.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("resize", this._debouncedNormalizeRowHeight);
  };

  ModuleDrawer.prototype._renderTiles = function _renderTiles(data) {
    return data.map(function (tile, i) {
      return _react2.default.createElement(_moduleDrawerTile2.default, (0, _extends3.default)({ key: i }, tile));
    });
  };

  ModuleDrawer.prototype.render = function render() {
    var _props = this.props;
    var buttonClosedText = _props.buttonClosedText;
    var buttonOpenText = _props.buttonOpenText;
    var data = _props.data;
    var large = _props.large;
    var medium = _props.medium;
    var moduleTitle = _props.moduleTitle;
    var small = _props.small;
    var xLarge = _props.xLarge;
    var xSmall = _props.xSmall;


    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({ className: "ModuleDrawer"
      }, (0, _categoryUtils.getTempoModuleAutomationId)("ModuleDrawer", process)),
      moduleTitle && _react2.default.createElement(_moduleTitle2.default, { title: moduleTitle }),
      _react2.default.createElement(
        _revealer2.default,
        { baseHeight: this.state.baseHeight,
          defaultOpen: false,
          disableClose: false,
          border: false,
          inverse: true,
          fakeLink: false,
          buttonClosedText: buttonClosedText,
          buttonOpenText: buttonOpenText,
          ref: "Revealer" },
        _react2.default.createElement(
          "div",
          { className: "Grid ResponsiveContainer ModuleDrawer-grid" },
          _react2.default.createElement(
            _layout2.default,
            { ref: "Layout",
              "x-large": xLarge,
              large: large,
              medium: medium,
              small: small,
              "x-small": xSmall,
              padded: true },
            this._renderTiles(data)
          )
        )
      )
    );
  };

  return ModuleDrawer;
}(_react.Component);

ModuleDrawer.displayName = "ModuleDrawer";

ModuleDrawer.propTypes = {
  /**
  Revealer button text when revealer is closed
  */
  buttonClosedText: _react.PropTypes.string,
  /**
  Revealer button text when revealer is closed
  */
  buttonOpenText: _react.PropTypes.string,
  /**
  Array of tile data
  */
  data: _react.PropTypes.array.isRequired,
  /**
  Number of tiles per row at large breakpoints
  */
  large: _react.PropTypes.number,
  /**
  Number of tiles per row at medium breakpoints
  */
  medium: _react.PropTypes.number,
  /**
  Component title
  */
  moduleTitle: _react.PropTypes.string,
  /**
  Responsive debouncing threshold for window.resize
  */
  resizeThreshold: _react.PropTypes.number,
  /**
  Number of rows that are visible when the revealer is closed
  */
  rows: _react.PropTypes.number,
  /**
  Number of tiles per row at small breakpoints
  */
  small: _react.PropTypes.number,
  /**
  Number of tiles per row at x-large breakpoints
  */
  xLarge: _react.PropTypes.number,
  /**
  Number of tiles per row at x-small breakpoints
  */
  xSmall: _react.PropTypes.number
};

ModuleDrawer.defaultProps = {
  buttonClosedText: "View more",
  buttonOpenText: "View less",
  large: 6,
  medium: 4,
  moduleTitle: "",
  moduleType: "ModuleDrawer",
  resizeThreshold: 100,
  rows: 2,
  small: 4,
  xLarge: 6,
  xSmall: 3
};

ModuleDrawer.Tile = _moduleDrawerTile2.default;

exports.default = ModuleDrawer;