"use strict";

exports.__esModule = true;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _layout = require("@walmart/wmreact-layout/lib/components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _productItemTile = require("@walmart/wmreact-product-card/lib/components/product-item-tile");

var _productItemTile2 = _interopRequireDefault(_productItemTile);

var _storeItemTile = require("@walmart/wmreact-product-card/lib/components/store-item-tile");

var _storeItemTile2 = _interopRequireDefault(_storeItemTile);

var _reactShuffle = require("react-shuffle");

var _reactShuffle2 = _interopRequireDefault(_reactShuffle);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Products grid.
@examples
```jsx
<ProductsGrid products={productsData} />
```
@component ProductsGrid
@import {ProductsGrid}
@playground
ProductsGrid
```
<ProductsGrid products={productsData} />
```
*/
var STORE_TILE = "store-item-tile";

var ProductsGrid = function (_React$Component) {
  (0, _inherits3.default)(ProductsGrid, _React$Component);

  function ProductsGrid() {
    (0, _classCallCheck3.default)(this, ProductsGrid);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  ProductsGrid.prototype._renderProductItem = function _renderProductItem(product, index) {
    var keyPair = typeof index !== "undefined" ? { key: index } : undefined;

    var productWithAutomation = (0, _assign2.default)((0, _automationIdUtils.getDataAutomationIdPair)("ProductTile", product.id, process), keyPair, product);
    return this.props.tileType === STORE_TILE ? _react2.default.createElement(_storeItemTile2.default, productWithAutomation) : _react2.default.createElement(_productItemTile2.default, productWithAutomation);
  };

  ProductsGrid.prototype._renderBase = function _renderBase() {
    var _this2 = this;

    var columns = this.props.columns;

    return _react2.default.createElement(
      _layout2.default,
      { medium: columns.medium, large: columns.large },
      this.props.products.map(function (product, index) {
        return _this2._renderProductItem(product, index);
      })
    );
  };

  ProductsGrid.prototype._renderAnimated = function _renderAnimated() {
    var _this3 = this;

    return _react2.default.createElement(
      _reactShuffle2.default,
      { className: "Grid" },
      this.props.products.map(function (product) {
        return _react2.default.createElement(
          "div",
          { className: "Grid-col u-size-1-5-l u-size-3-12-m u-size-6-12-s", key: product.id },
          _this3._renderProductItem(product)
        );
      })
    );
  };

  ProductsGrid.prototype._renderStoreItemGrid = function _renderStoreItemGrid() {
    return _react2.default.createElement(
      "div",
      { className: "text-left Grid store-item-grid" },
      this._renderStoreItemTiles()
    );
  };

  ProductsGrid.prototype._renderStoreItemTiles = function _renderStoreItemTiles() {
    var _this4 = this;

    return this.props.products.map(function (product, index) {
      return _react2.default.createElement(
        "div",
        { className: "Grid-col u-size-1-5-l u-size-3-12-m u-size-6-12", key: index },
        _this4._renderProductItem(product, index)
      );
    });
  };

  ProductsGrid.prototype.render = function render() {
    var _props = this.props;
    var animated = _props.animated;
    var automationId = _props.automationId;
    var tileType = _props.tileType;

    var markup = void 0;

    if (tileType === STORE_TILE) {
      markup = this._renderStoreItemGrid();
    } else {
      markup = animated === true ? this._renderAnimated() : this._renderBase();
    }

    return _react2.default.createElement(
      "div",
      { "data-automation-id": automationId },
      " ",
      markup,
      " "
    );
  };

  return ProductsGrid;
}(_react2.default.Component);

exports.default = ProductsGrid;


ProductsGrid.propTypes = {
  /**
  The products
  */
  products: _react2.default.PropTypes.array,
  /**
  True if it's animated
  */
  animated: _react2.default.PropTypes.bool,
  /**
  Number of columns to display
  */
  columns: _react2.default.PropTypes.object,
  /**
  Type of tile
  */
  tileType: _react2.default.PropTypes.string,
  /**
  Automation Id
  */
  automationId: _react2.default.PropTypes.string
};

ProductsGrid.defaultProps = {
  products: [],
  animated: true,
  columns: {
    medium: 3,
    large: 4
  },
  tileType: ""
};