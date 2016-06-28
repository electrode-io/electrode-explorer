"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _moduleDrawer = require("./module-drawer");

var _moduleDrawer2 = _interopRequireDefault(_moduleDrawer);

var _analyticsDispatcher = require("./analytics-dispatcher");

var _analyticsDispatcher2 = _interopRequireDefault(_analyticsDispatcher);

var _categoryUtils = require("@walmart/category-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _formTiles = function _formTiles(tileData, maxTiles) {
  return tileData.slice(0, maxTiles).map(function (tile) {
    return (0, _extends3.default)({}, tile, { displayTitle: false });
  });
};

/**
A component for displaying a list of top brands.
@examples
```jsx
<TopBrands data={[
  {
    "title": "Samsung Electronics",
    "url": "/browse/3944/?cat_id=3944&facet=brand:Samsung",
    "alt": "Samsung Electronics ",
    "imageUrl": "//i5.walmartimages.com/dfw/4ff9c6c9-5484/" +
      "k2-_a1d90899-3b0e-4f74-8c80-4be9b336b163.v1.gif",
    "categoryId": "3944",
    "assetId": "c0058390-c359-11e4-8f2a-ef40d94420a5",
    "uid": "jToSBtCX"
  },
  {
    "title": "Apple Electronics",
    "url": "/browse/3944/?cat_id=3944&facet=brand:Apple",
    "alt": "Apple Electronics",
    "imageUrl": "//i5.walmartimages.com/dfw/4ff9c6c9-643a/" +
      "k2-_3db1015a-9400-42ca-8fe2-2fca614388b1.v1.jpg",
    "categoryId": "3944",
    "assetId": "bfd39ac0-d17d-11e3-842a-cf01f4d25362",
    "uid": "Vzmv1a7X"
  }
]} />
```
@component TopBrands
@import {TopBrands}
@playground
TopBrands
```
<TopBrands data={[
  {
    "title": "Samsung Electronics",
    "url": "/browse/3944/?cat_id=3944&facet=brand:Samsung",
    "alt": "Samsung Electronics ",
    "imageUrl": "//i5.walmartimages.com/dfw/4ff9c6c9-5484/" +
      "k2-_a1d90899-3b0e-4f74-8c80-4be9b336b163.v1.gif",
    "categoryId": "3944",
    "assetId": "c0058390-c359-11e4-8f2a-ef40d94420a5",
    "uid": "jToSBtCX"
  },
  {
    "title": "Apple Electronics",
    "url": "/browse/3944/?cat_id=3944&facet=brand:Apple",
    "alt": "Apple Electronics",
    "imageUrl": "//i5.walmartimages.com/dfw/4ff9c6c9-643a/" +
      "k2-_3db1015a-9400-42ca-8fe2-2fca614388b1.v1.jpg",
    "categoryId": "3944",
    "assetId": "bfd39ac0-d17d-11e3-842a-cf01f4d25362",
    "uid": "Vzmv1a7X"
  }
]} />
```
*/

var TopBrands = function TopBrands(props) {
  var data = props.data;
  var maxTiles = props.maxTiles;
  var moduleType = props.moduleType;

  return _react2.default.createElement(
    _analyticsDispatcher2.default,
    (0, _extends3.default)({}, props, {
      __self: undefined
    }),
    _react2.default.createElement(
      "div",
      (0, _extends3.default)({ className: "TopBrands"
      }, (0, _categoryUtils.getTempoModuleAutomationId)(moduleType, process), {
        __self: undefined
      }),
      _react2.default.createElement(_moduleDrawer2.default, (0, _extends3.default)({}, props, { data: _formTiles(data, maxTiles), __self: undefined
      }))
    )
  );
};

TopBrands.displayName = "TopBrands";

TopBrands.propTypes = {
  /**
  Array of tile data
  */
  data: _react.PropTypes.array.isRequired,
  /**
  Maximum number of tiles displayed in the open revealer
  */
  maxTiles: _react.PropTypes.number,
  /**
  Number of top brand tiles per row at large breakpoints
  */
  large: _react.PropTypes.number,
  /**
  Number of top brand tiles per row at medium breakpoints
  */
  medium: _react.PropTypes.number,
  /**
  Component title
  */
  moduleTitle: _react.PropTypes.string,
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: _react.PropTypes.string,
  /**
  Number of rows that are visible when the revealer is closed
  */
  rows: _react.PropTypes.number,
  /**
  Number of top brand tiles per row at small breakpoints
  */
  small: _react.PropTypes.number,
  /**
  Number of top brand tiles per row at x-large breakpoints
  */
  xLarge: _react.PropTypes.number,
  /**
  Number of top brand tiles per row at x-small breakpoints
  */
  xSmall: _react.PropTypes.number
};

TopBrands.defaultProps = {
  maxTiles: 20,
  large: 6,
  medium: 6,
  moduleTitle: "Top Brands",
  moduleType: _categoryUtils.moduleTypes.TOP_BRAND,
  rows: 2,
  small: 6,
  xLarge: 6,
  xSmall: 4
};

exports.default = TopBrands;