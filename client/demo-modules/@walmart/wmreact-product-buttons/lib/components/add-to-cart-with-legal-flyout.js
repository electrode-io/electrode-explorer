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

var _tray = require("@walmart/wmreact-containers/lib/components/tray");

var _tray2 = _interopRequireDefault(_tray);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _flyout = require("@walmart/wmreact-containers/lib/components/flyout");

var _flyout2 = _interopRequireDefault(_flyout);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _productLegalFlyoutContent = require("./product-legal-flyout-content");

var _productLegalFlyoutContent2 = _interopRequireDefault(_productLegalFlyoutContent);

var _legalMoreInfoModal = require("./legal-more-info-modal");

var _legalMoreInfoModal2 = _interopRequireDefault(_legalMoreInfoModal);

var _productCtaAddToCart = require("./product-cta-add-to-cart");

var _productCtaAddToCart2 = _interopRequireDefault(_productCtaAddToCart);

var _legalPromptProptype = require("./legal-prompt-proptype");

var _legalPromptProptype2 = _interopRequireDefault(_legalPromptProptype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LegalAddToCartButton = function (_Component) {
  (0, _inherits3.default)(LegalAddToCartButton, _Component);

  function LegalAddToCartButton(props) {
    (0, _classCallCheck3.default)(this, LegalAddToCartButton);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this._onFlyoutClosed = _this._onFlyoutClosed.bind(_this);
    _this._onAcceptClicked = _this._onAcceptClicked.bind(_this, props);
    return _this;
  }

  LegalAddToCartButton.prototype._renderButtonComponent = function _renderButtonComponent(isLoading, onClick) {
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

  LegalAddToCartButton.prototype._onAcceptClicked = function _onAcceptClicked(_ref) {
    var addToCartProps = _ref.addToCartProps;
    var onAcceptClicked = _ref.onAcceptClicked;

    if (addToCartProps && addToCartProps.onAddToCart) {
      addToCartProps.onAddToCart();
    }
    onAcceptClicked();
  };

  LegalAddToCartButton.prototype._renderDeclineContent = function _renderDeclineContent() {
    return _react2.default.createElement(
      "div",
      { className: "prod-LegalATC-decline" },
      _react2.default.createElement(
        "strong",
        { className: "prod-LegalATC-decline-heading" },
        "This item could not be added to your cart."
      ),
      _react2.default.createElement(
        "p",
        { className: "prod-LegalATC-decline-content" },
        "Please review the rating warning displayed on the page and try again."
      )
    );
  };

  LegalAddToCartButton.prototype._renderLegalPromptContent = function _renderLegalPromptContent(_ref2) {
    var onDeclineClicked = _ref2.onDeclineClicked;
    var onMoreInfoClicked = _ref2.onMoreInfoClicked;

    return _react2.default.createElement(_productLegalFlyoutContent2.default, {
      onAcceptClicked: this._onAcceptClicked,
      onDeclineClicked: onDeclineClicked,
      onMoreInfoClicked: onMoreInfoClicked
    });
  };

  LegalAddToCartButton.prototype._renderAsTray = function _renderAsTray(props, content) {
    return _react2.default.createElement(
      "div",
      { className: "hide-content-s prod-LegalContent-tray" },
      this._renderButtonComponent(true),
      _react2.default.createElement(
        _tray2.default,
        { isOpen: true, hideButtons: true, onCancel: props.onFlyoutClosed },
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "button",
            { className: "flyout-close", type: "button", onClick: props.onFlyoutClosed },
            _react2.default.createElement(_icon2.default.Remove, null),
            _react2.default.createElement(
              "span",
              { className: "visuallyhidden" },
              "Close"
            )
          ),
          content
        )
      )
    );
  };

  LegalAddToCartButton.prototype._onFlyoutClosed = function _onFlyoutClosed(active) {
    if (!active) {
      this.props.onFlyoutClosed();
    }
  };

  LegalAddToCartButton.prototype._renderAsFlyout = function _renderAsFlyout(props, content) {
    return _react2.default.createElement(
      "div",
      { className: "hide-content-max-s" },
      _react2.default.createElement(
        _flyout2.default,
        { direction: "left",
          size: "extrawide",
          closeButton: true,
          className: "display-block prod-LegalContent-flyout",
          onActiveChange: this._onFlyoutClosed,
          trigger: this._renderButtonComponent(true),
          active: true },
        content
      )
    );
  };

  LegalAddToCartButton.prototype._renderPrompt = function _renderPrompt(props, content) {
    return _react2.default.createElement(
      "div",
      null,
      this._renderAsTray(props, content),
      this._renderAsFlyout(props, content)
    );
  };

  LegalAddToCartButton.prototype.render = function render() {
    var _props = this.props;
    var legalPromptStatus = _props.legalPromptStatus;
    var addToCartProps = _props.addToCartProps;
    var onClick = _props.onClick;

    switch (legalPromptStatus) {
      case "ACCEPTED":
        return _react2.default.createElement(_productCtaAddToCart2.default, addToCartProps);
      case "NOT_YET_ACCEPTED":
        return this._renderButtonComponent(false, onClick);
      case "MORE_INFO":
        return _react2.default.createElement(
          "div",
          null,
          this._renderButtonComponent(false),
          _react2.default.createElement(_legalMoreInfoModal2.default, { active: true, onClose: this.props.onMoreInfoClosed })
        );
      case "PROMPT":
        {
          var legalConent = this._renderLegalPromptContent(this.props);
          return this._renderPrompt(this.props, legalConent);
        }
      case "DECLINE":
        var declineContent = this._renderDeclineContent();
        return this._renderPrompt(this.props, declineContent);
    }
  };

  return LegalAddToCartButton;
}(_react.Component);

LegalAddToCartButton.propTypes = _legalPromptProptype2.default;

LegalAddToCartButton.defaultProps = {
  legalPromptStatus: "ACCEPTED",
  onClick: function onClick() {},
  onMoreInfoClicked: function onMoreInfoClicked() {},
  onMoreInfoClosed: function onMoreInfoClosed() {},
  onAcceptClicked: function onAcceptClicked() {},
  onDeclineClicked: function onDeclineClicked() {},
  onFlyoutClosed: function onFlyoutClosed() {}
};

exports.default = LegalAddToCartButton;