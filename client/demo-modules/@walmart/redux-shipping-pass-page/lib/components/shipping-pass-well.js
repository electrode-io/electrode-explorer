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

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _copy = require("@walmart/wmreact-base/lib/components/copy");

var _copy2 = _interopRequireDefault(_copy);

var _well = require("@walmart/wmreact-containers/lib/components/well");

var _well2 = _interopRequireDefault(_well);

var _separator = require("@walmart/wmreact-containers/lib/components/separator");

var _separator2 = _interopRequireDefault(_separator);

var _option = require("@walmart/wmreact-forms/lib/components/option");

var _option2 = _interopRequireDefault(_option);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _cancelModal = require("./cancel-modal");

var _cancelModal2 = _interopRequireDefault(_cancelModal);

var _manageSubModal = require("./manage-sub-modal");

var _manageSubModal2 = _interopRequireDefault(_manageSubModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cards = {
  WMUSGESTORECARD: "walmart-credit-card",
  WMMASTERCARD: "walmart-mastercard",
  MASTERCARD: "mastercard",
  VISA: "visa",
  AMEX: "american-express",
  DISCOVER: "discover"
};

var ShippingPassWell = function (_React$Component) {
  (0, _inherits3.default)(ShippingPassWell, _React$Component);

  function ShippingPassWell() {
    (0, _classCallCheck3.default)(this, ShippingPassWell);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  ShippingPassWell.prototype._renderHeader = function _renderHeader() {
    var _props = this.props;
    var renewalDate = _props.renewalDate;
    var trialStatus = _props.trialStatus;


    return _react2.default.createElement(
      "h1",
      { className: "heading-c well-heading" },
      "You're getting FREE unlimited shipping until ",
      trialStatus ? " your trial ends " : " ",
      _react2.default.createElement(
        "span",
        { className: "font-semibold" },
        renewalDate
      )
    );
  };

  ShippingPassWell.prototype._renderFlow = function _renderFlow() {
    var _this2 = this;

    var _props2 = this.props;
    var autoRenew = _props2.autoRenew;
    var cardInfo = _props2.cardInfo;
    var cardStatus = _props2.cardStatus;
    var link = _props2.link;
    var logo = _props2.logo;
    var price = _props2.price;
    var renewalDate = _props2.renewalDate;
    var trialStatus = _props2.trialStatus;
    var updateAutoRenew = _props2.updateAutoRenew;
    var updatePaymentPref = _props2.updatePaymentPref;


    var cardSprite = cards[cardInfo.type];

    var CardCopy = function CardCopy() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _copy2.default.Small,
          null,
          "Need to cancel? Contact our ",
          _react2.default.createElement(
            _link2.default,
            { href: link },
            " Help Center"
          )
        ),
        _react2.default.createElement(_separator2.default, null),
        _react2.default.createElement(
          _copy2.default,
          null,
          "On ",
          renewalDate,
          " we'll charge your card ",
          price,
          " to continue for another year."
        ),
        _react2.default.createElement(
          "div",
          null,
          cardStatus === "EXPIRED" ? _react2.default.createElement(
            _copy2.default,
            { className: "u-textRed font-semibold" },
            "This card has expired"
          ) : cardStatus === "UNAVAILABLE" && _react2.default.createElement(
            _copy2.default,
            { className: "u-textRed font-semibold" },
            "Please add a payment method to continue."
          ),
          cardStatus === "UNAVAILABLE" ? _react2.default.createElement(
            _button2.default,
            {
              fakelink: true,
              onClick: function onClick() {
                return _this2.refs.manageSubModal.toggle();
              } },
            "Add card"
          ) : _react2.default.createElement(
            "div",
            { className: "card-spacing" },
            _react2.default.createElement("span", { className: "payment-option " + cardSprite }),
            ' ',
            "Ending in ",
            _react2.default.createElement(
              "span",
              { className: "font-bold" },
              cardInfo.digits,
              ' '
            ),
            _react2.default.createElement(
              _button2.default,
              {
                fakelink: true,
                onClick: function onClick() {
                  return _this2.refs.manageSubModal.toggle();
                } },
              "Change"
            )
          )
        )
      );
    };

    return _react2.default.createElement(
      "div",
      null,
      this._renderHeader(),
      _react2.default.createElement(
        "div",
        { className: "option-form-control" },
        _react2.default.createElement(
          _option2.default,
          {
            checkboxName: "subscribedCheckbox",
            "data-automation-id": "subscribedCheckbox",
            checked: autoRenew,
            onChange: function onChange() {
              return autoRenew ? _this2.refs.cancelModal.toggle() : updateAutoRenew(!autoRenew);
            } },
          "Automatically renew subscription"
        )
      ),
      autoRenew && _react2.default.createElement(CardCopy, null),
      _react2.default.createElement(_cancelModal2.default, {
        ref: "cancelModal",
        "data-automation-id": "cancelModalButton",
        cancel: function cancel() {
          return updateAutoRenew(!autoRenew);
        },
        renewalDate: renewalDate,
        logo: logo,
        trial: trialStatus,
        padded: true }),
      _react2.default.createElement(_manageSubModal2.default, {
        ref: "manageSubModal",
        "data-automation-id": "manageSubModalButton",
        cardSprite: cardSprite,
        cardType: cardInfo.type,
        piHash: cardInfo.digits,
        updatePaymentPref: updatePaymentPref,
        renewalDate: renewalDate,
        logo: logo,
        cardStatus: cardStatus,
        fixed: false,
        padded: true })
    );
  };

  ShippingPassWell.prototype._renderTrialFlow = function _renderTrialFlow() {
    var _this3 = this;

    var _props3 = this.props;
    var autoRenew = _props3.autoRenew;
    var cardInfo = _props3.cardInfo;
    var logo = _props3.logo;
    var price = _props3.price;
    var renewalDate = _props3.renewalDate;
    var trialStatus = _props3.trialStatus;
    var updateAutoRenew = _props3.updateAutoRenew;


    var DiscontinueCopy = function DiscontinueCopy() {
      return _react2.default.createElement(
        "div",
        { className: "option-form-control" },
        _react2.default.createElement(
          _option2.default,
          {
            checkboxName: "trialCheckbox",
            "data-automation-id": "trialCheckbox",
            onCheckedChange: function onCheckedChange() {
              return updateAutoRenew(!autoRenew);
            } },
          "Continue ",
          _react2.default.createElement(
            "em",
            null,
            "Shipping"
          ),
          "Pass for one full year"
        )
      );
    };

    return _react2.default.createElement(
      "div",
      null,
      this._renderHeader(),
      autoRenew ? _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(_separator2.default, null),
        _react2.default.createElement(
          _copy2.default.Small,
          null,
          "After your FREE trial ends we'll charge your card ",
          price,
          " to continue for a year."
        ),
        _react2.default.createElement(
          _copy2.default.Small,
          null,
          _react2.default.createElement("span", { className: "payment-option " + cards[cardInfo.type] }),
          "Ending in ",
          _react2.default.createElement(
            "strong",
            null,
            ' ',
            cardInfo.digits
          )
        ),
        _react2.default.createElement(
          _copy2.default.Small,
          null,
          "Need to end your subscription?",
          ' ',
          _react2.default.createElement(
            _button2.default,
            {
              fakelink: true,
              onClick: function onClick() {
                return _this3.refs.cancelModal.toggle();
              } },
            "Cancel"
          ),
          ' ',
          "before your FREE trial ends and pay nothing."
        ),
        _react2.default.createElement(_cancelModal2.default, {
          ref: "cancelModal",
          "data-automation-id": "cancelModalButton",
          cancel: function cancel() {
            return updateAutoRenew(!autoRenew);
          },
          renewalDate: renewalDate,
          logo: logo,
          trialStatus: trialStatus,
          fixed: true,
          padded: true })
      ) : _react2.default.createElement(DiscontinueCopy, null)
    );
  };

  ShippingPassWell.prototype.render = function render() {
    var _props4 = this.props;
    var loading = _props4.loading;
    var trialStatus = _props4.trialStatus;


    return(
      /*eslint no-nested-ternary:0*/
      _react2.default.createElement(
        _well2.default,
        {
          padded: true,
          below: false },
        loading ? _react2.default.createElement(
          "div",
          { className: "spinner-backdrop spinner-well" },
          _react2.default.createElement("div", { className: "spinner" })
        ) : trialStatus ? this._renderTrialFlow() : this._renderFlow()
      )
    );
  };

  return ShippingPassWell;
}(_react2.default.Component);

ShippingPassWell.propTypes = {
  autoRenew: _react2.default.PropTypes.bool,
  cardInfo: _react2.default.PropTypes.object,
  cardStatus: _react2.default.PropTypes.string,
  error: _react2.default.PropTypes.bool,
  getSubscriptionStatus: _react2.default.PropTypes.func,
  link: _react2.default.PropTypes.string,
  loading: _react2.default.PropTypes.bool,
  logo: _react2.default.PropTypes.any,
  price: _react2.default.PropTypes.string,
  renewalDate: _react2.default.PropTypes.string,
  trialStatus: _react2.default.PropTypes.bool,
  updateAutoRenew: _react2.default.PropTypes.func,
  updatePaymentPref: _react2.default.PropTypes.func
};

ShippingPassWell.defaultProps = {
  price: "$49",
  link: "http://help.walmart.com/app/answers/detail/a_id/778"
};

exports.default = ShippingPassWell;