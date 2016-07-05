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

var _tile = require("./tile");

var _tile2 = _interopRequireDefault(_tile);

var _availabilityStatus = require("@walmart/wmreact-product-offers/lib/enums/availability-status");

var _availabilityStatus2 = _interopRequireDefault(_availabilityStatus);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Store item tile.
@examples
```jsx
<StoreItemTile />
```
@component StoreItemTile
@import {StoreItemTile}
@playground
StoreItemTile
```
<StoreItemTile />
```
*/

var StoreItemTile = function (_Tile) {
  (0, _inherits3.default)(StoreItemTile, _Tile);

  function StoreItemTile() {
    (0, _classCallCheck3.default)(this, StoreItemTile);
    return (0, _possibleConstructorReturn3.default)(this, _Tile.apply(this, arguments));
  }

  StoreItemTile.prototype._renderInStoreInfo = function _renderInStoreInfo() {
    if (this.props.inStoreInfo.availabilityStatus === _availabilityStatus2.default.IN_STOCK) {
      return _react2.default.createElement(
        "div",
        { className: "stockStatus" },
        _react2.default.createElement(
          "strong",
          { className: "stockStatus-available" },
          " In Stock "
        ),
        this._renderDepartment(),
        this._renderAisle()
      );
    } else {
      return _react2.default.createElement(
        "div",
        { className: "stockStatus" },
        _react2.default.createElement(
          "strong",
          { className: "stockStatus-unavailable" },
          " Out of Stock "
        )
      );
    }
  };

  StoreItemTile.prototype._renderDepartment = function _renderDepartment() {
    var inStoreInfo = this.props.inStoreInfo;

    return inStoreInfo.department ? _react2.default.createElement(
      "span",
      null,
      "in ",
      inStoreInfo.department
    ) : null;
  };

  StoreItemTile.prototype._renderAisle = function _renderAisle() {
    var inStoreInfo = this.props.inStoreInfo;

    return inStoreInfo.aisle ? _react2.default.createElement(
      "p",
      { className: "stockStatus-aisle" },
      _react2.default.createElement("i", { className: "wmicon wmicon-pin" }),
      "Aisle ",
      _react2.default.createElement(
        "span",
        { className: "font-semibold" },
        " ",
        inStoreInfo.aisle,
        " "
      ),
      this._renderLowQuantity()
    ) : null;
  };

  StoreItemTile.prototype._renderLowQuantity = function _renderLowQuantity() {
    var inStoreInfo = this.props.inStoreInfo;

    return inStoreInfo.quantity < 5 ? _react2.default.createElement(
      "span",
      { className: "stockStatus-lowQuantity" },
      "Only a few left!"
    ) : null;
  };

  StoreItemTile.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: "StoreItemTile" },
      this._renderImage(),
      this.props.inStoreInfo && this._renderInStoreInfo(),
      this._renderContent()
    );
  };

  return StoreItemTile;
}(_tile2.default);

exports.default = StoreItemTile;


StoreItemTile.displayName = "StoreItemTile";

StoreItemTile.propTypes = {
  inStoreInfo: _react2.default.PropTypes.object
};