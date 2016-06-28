"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _actionsProducts = require("../actions/products");

var _reactRedux = require("react-redux");

var _storeWrapper = require("./store-wrapper");

var _storeWrapper2 = _interopRequireDefault(_storeWrapper);

var _storesProducts = require("../stores/products");

var _storesProducts2 = _interopRequireDefault(_storesProducts);

/**
Products by (Item Recommendation Service) IRS container.
@examples
```jsx
<ProductsList.IRS productId="012312" moduleName="foo" />
```
@component ProductsList.IRS
@import {ProductsList}
@playground
ProductsList.IRS
```
<ProductsList.IRS productId="012312" moduleName="foo">
  <ProductsCarousel />
</ProductsList.IRS>
```
*/

var ProductsListIRS = (function (_React$Component) {
  _inherits(ProductsListIRS, _React$Component);

  function ProductsListIRS(props) {
    _classCallCheck(this, ProductsListIRS);

    _get(Object.getPrototypeOf(ProductsListIRS.prototype), "constructor", this).call(this, props);
    this.store = (0, _storesProducts2["default"])();
  }

  _createClass(ProductsListIRS, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (props.productId !== undefined && props.moduleName !== undefined) {
        this.store.dispatch((0, _actionsProducts.searchIRS)(props.productId, props.moduleName));
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      _get(Object.getPrototypeOf(ProductsListIRS.prototype), "componentDidMount", this).call(this);
      if (this.props.productId !== undefined && this.props.moduleName !== undefined) {
        this.store.dispatch((0, _actionsProducts.searchIRS)(this.props.productId, this.props.moduleName));
      }
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        _reactRedux.Provider,
        { store: this.store },
        _react2["default"].createElement(
          _storeWrapper2["default"],
          null,
          this.props.children
        )
      );
    }
  }]);

  return ProductsListIRS;
})(_react2["default"].Component);

exports["default"] = ProductsListIRS;

ProductsListIRS.displayName = "ProductsList.IRS";

ProductsListIRS.propTypes = {
  /**
  The current product
  */
  productId: _react2["default"].PropTypes.string,
  /**
  The module identifier
  */
  moduleName: _react2["default"].PropTypes.string,
  children: _react2["default"].PropTypes.array
};
module.exports = exports["default"];