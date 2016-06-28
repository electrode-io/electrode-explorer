"use strict";

exports.__esModule = true;
exports.mapDispatchToProps = exports.mapStateToProps = exports.P13NTile = undefined;

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

var _reactRedux = require("react-redux");

var _tile = require("@walmart/wmreact-product-card/lib/components/tile");

var _tile2 = _interopRequireDefault(_tile);

var _productCtaAddToCart = require("@walmart/wmreact-product-buttons/lib/components/product-cta-add-to-cart");

var _productCtaAddToCart2 = _interopRequireDefault(_productCtaAddToCart);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _addToCart = require("../actions/add-to-cart");

var _addToCartAdapter = require("../adapters/add-to-cart-adapter");

var _actionStatusAdapter = require("../adapters/action-status-adapter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var addToCartAdapter = new _addToCartAdapter.AddToCartAdapter();
var actionStatusAdapter = new _actionStatusAdapter.ActionStatusAdapter();

var P13NTile = exports.P13NTile = function (_Component) {
  (0, _inherits3.default)(P13NTile, _Component);

  function P13NTile() {
    (0, _classCallCheck3.default)(this, P13NTile);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  P13NTile.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps) {
    return this.props.product !== nextProps.product || this.props.enableATC !== nextProps.enableATC || this.props.actionStatus !== nextProps.actionStatus;
  };

  P13NTile.prototype._onAddToCart = function _onAddToCart(product) {
    var onAddToCart = this.props.onAddToCart;

    return function () {
      onAddToCart(product, 1);
    };
  };

  P13NTile.prototype._renderATCButton = function _renderATCButton(onAddToCart) {
    var _props = this.props;
    var actionStatus = _props.actionStatus;
    var onCloseAddedToCartFlyout = _props.onCloseAddedToCartFlyout;

    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(_productCtaAddToCart2.default, {
        actionStatus: actionStatus,
        onAddToCart: onAddToCart,
        onCloseAddedToCartFlyout: onCloseAddedToCartFlyout,
        displayingCartIcon: true,
        buttonStyle: "inverse",
        flyoutDirection: "center",
        flyoutAlign: "bottom",
        checkoutMsg: "Added to cart" })
    );
  };

  P13NTile.prototype._renderControls = function _renderControls(product) {
    var onAddToCart = this._onAddToCart(product).bind(this);
    if (product.atcEnabled) {
      if (product.atcButtonType === "addToCart") {
        return this._renderATCButton(onAddToCart);
      } else {
        return _react2.default.createElement(
          "div",
          { className: "p13n-atc-more" },
          _react2.default.createElement(
            _button2.default,
            { className: "btn-block",
              inverse: true,
              onClick: function onClick() {
                return window.location.href = product.url;
              } },
            "See Details"
          )
        );
      }
    }
    return null;
  };

  P13NTile.prototype._renderParentTileTitle = function _renderParentTileTitle(index, isRVI, isTrending) {
    return isRVI && !isTrending && index === 0 ? _react2.default.createElement(
      "div",
      { className: "parent-heading-container" },
      _react2.default.createElement(
        "h5",
        { className: "parent-heading font-semibold" },
        "Item you viewed"
      )
    ) : null;
  };

  P13NTile.prototype.render = function render() {
    var _props2 = this.props;
    var index = _props2.index;
    var product = _props2.product;
    var onClick = _props2.onClick;
    var isRVI = _props2.isRVI;
    var isTrending = _props2.isTrending;

    return _react2.default.createElement(
      "div",
      { className: "p13n-tile" },
      this._renderParentTileTitle(index, isRVI, isTrending),
      _react2.default.createElement(_tile2.default, (0, _extends3.default)({
        key: index
      }, product, {
        onClick: onClick
      })),
      this._renderControls(product)
    );
  };

  return P13NTile;
}(_react.Component);

P13NTile.displayName = "P13NTile";

P13NTile.propTypes = {
  "enableATC": _react.PropTypes.bool,
  "isRVI": _react.PropTypes.bool,
  "isTrending": _react.PropTypes.bool,
  "index": _react.PropTypes.number,
  "product": _react.PropTypes.object,
  "onAddToCart": _react.PropTypes.func,
  "onCloseAddedToCartFlyout": _react.PropTypes.func,
  "actionStatus": _react.PropTypes.object,
  "onClick": _react.PropTypes.func
};

P13NTile.defaultProps = {
  "index": 0,
  "enableATC": true
};

var mapStateToProps = exports.mapStateToProps = function mapStateToProps(state, ownProps) {
  var actionStatus = actionStatusAdapter.adapt(ownProps.product, state.recommendationMap.addToCartStatus);
  return {
    actionStatus: actionStatus
  };
};

var mapDispatchToProps = exports.mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    onAddToCart: function onAddToCart(product, quantity) {
      var item = addToCartAdapter.adapt(product, quantity);
      dispatch((0, _addToCart.addToCart)(item));
    },
    onCloseAddedToCartFlyout: function onCloseAddedToCartFlyout() {
      dispatch((0, _addToCart.clearLatestAddToCartResult)());
    }
  };
};

var StatefulP13NTile = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(P13NTile);

exports.default = StatefulP13NTile;