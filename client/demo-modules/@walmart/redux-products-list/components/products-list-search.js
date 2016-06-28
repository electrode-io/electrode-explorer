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
Products by search container.
@examples
```jsx
<ProductsList.Search q="lcd tv" />
```
@component ProductsList.Search
@import {ProductsList}
@playground
ProductsList.Search
```
<ProductsList.Search q="lcd tv">
  <ProductsCarousel />
</ProductsList.Search>
```
*/

var ProductsListSearch = (function (_React$Component) {
  _inherits(ProductsListSearch, _React$Component);

  function ProductsListSearch(props) {
    _classCallCheck(this, ProductsListSearch);

    _get(Object.getPrototypeOf(ProductsListSearch.prototype), "constructor", this).call(this, props);
    this.store = (0, _storesProducts2["default"])();
  }

  _createClass(ProductsListSearch, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(props) {
      if (props.q !== this.props.q) {
        this.store.dispatch((0, _actionsProducts.search)(props.q));
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.q !== undefined) {
        this.store.dispatch((0, _actionsProducts.search)(this.props.q));
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

  return ProductsListSearch;
})(_react2["default"].Component);

exports["default"] = ProductsListSearch;

ProductsListSearch.displayName = "ProductsList.Search";

ProductsListSearch.propTypes = {
  /**
  The product search query
  */
  q: _react2["default"].PropTypes.string,
  children: _react2["default"].PropTypes.array
};
module.exports = exports["default"];