"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _electrodeCookies = require("@walmart/electrode-cookies");

var _electrodeCookies2 = _interopRequireDefault(_electrodeCookies);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _productSubmapModal = require("./product-submap-modal");

var _productSubmapModal2 = _interopRequireDefault(_productSubmapModal);

var _productCtaAddToCart = require("./product-cta-add-to-cart");

var _productCtaAddToCart2 = _interopRequireDefault(_productCtaAddToCart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _renderButtonComponent = function _renderButtonComponent(isLoading, _ref) {
  var onClick = _ref.onClick;

  return _react2.default.createElement(
    _button2.default,
    { primary: true,
      spinner: isLoading,
      className: "prod-ProductCTA--primary",
      onClick: onClick,
      block: true },
    "Add to Cart"
  );
};

var _renderSubmapModal = function _renderSubmapModal(_ref2) {
  var submapModalStatus = _ref2.submapModalStatus;
  var onModalClosed = _ref2.onModalClosed;
  var onContinue = _ref2.onContinue;

  // if the status is INACTIVE or CONTINUE, don't show the modal/slidepanel
  var active = submapModalStatus === "ACTIVE" ? true : false;
  return _react2.default.createElement(_productSubmapModal2.default, {
    active: active,
    onClose: onModalClosed,
    onContinue: onContinue
  });
};

var SubmapAddToCartButton = function SubmapAddToCartButton(props) {
  // if status is ACTIVE or INACTIVE, render ATC as a regular button
  // continuedBefore means the submap form has been submitted before
  var continuedBefore = parseInt(_electrodeCookies2.default.get("PL")) === 1;
  var renderedComp = continuedBefore || props.submapModalStatus === "CONTINUE" ? _react2.default.createElement(_productCtaAddToCart2.default, props.addToCartProps) : _renderButtonComponent(false, props);
  return _react2.default.createElement(
    "div",
    null,
    renderedComp,
    _renderSubmapModal(props)
  );
};

SubmapAddToCartButton.propTypes = {};

SubmapAddToCartButton.defaultProps = {
  submapModalStatus: "INACTIVE",
  onClick: function onClick() {},
  onModalClosed: function onModalClosed() {},
  onContinue: function onContinue() {}
};

exports.default = SubmapAddToCartButton;