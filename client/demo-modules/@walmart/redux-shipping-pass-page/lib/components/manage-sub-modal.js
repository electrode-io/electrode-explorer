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

var _modal = require("@walmart/wmreact-containers/lib/components/modal");

var _modal2 = _interopRequireDefault(_modal);

var _slidepanel = require("@walmart/wmreact-containers/lib/components/slidepanel");

var _slidepanel2 = _interopRequireDefault(_slidepanel);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _radioTile = require("@walmart/wmreact-forms/lib/components/radio-tile");

var _radioTile2 = _interopRequireDefault(_radioTile);

var _copy = require("@walmart/wmreact-base/lib/components/copy");

var _copy2 = _interopRequireDefault(_copy);

var _wrappedCreditCard = require("./wrapped-credit-card");

var _wrappedCreditCard2 = _interopRequireDefault(_wrappedCreditCard);

var _reduxCreditCard = require("@walmart/redux-credit-card");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ManageSubModal = function (_React$Component) {
  (0, _inherits3.default)(ManageSubModal, _React$Component);

  function ManageSubModal(props) {
    (0, _classCallCheck3.default)(this, ManageSubModal);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = { active: false, selectedCardID: undefined };
    _this.toggle = _this.toggle.bind(_this);
    return _this;
  }

  ManageSubModal.prototype.toggle = function toggle() {
    this.setState({ active: !this.state.active, selectedCardID: undefined });
  };

  ManageSubModal.prototype._renderText = function _renderText() {
    var _props = this.props;
    var cardSprite = _props.cardSprite;
    var cardStatus = _props.cardStatus;
    var piHash = _props.piHash;


    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "h1",
        { className: "heading-a modal-heading" },
        "Manage payment"
      ),
      _react2.default.createElement(
        _copy2.default,
        null,
        _react2.default.createElement(
          "strong",
          null,
          "ShippingPass subscription"
        ),
        " payment method:"
      ),
      _react2.default.createElement(
        "div",
        null,
        cardStatus !== "UNAVAILABLE" && _react2.default.createElement(
          "div",
          { className: "card-spacing" },
          _react2.default.createElement("span", { className: "payment-option " + cardSprite }),
          ' ',
          "Ending in ",
          _react2.default.createElement(
            "strong",
            null,
            piHash,
            ' '
          )
        ),
        cardStatus === "EXPIRED" ? _react2.default.createElement(
          _copy2.default,
          { className: "u-textRed font-semibold" },
          "This card has expired"
        ) : cardStatus === "UNAVAILABLE" && _react2.default.createElement(
          _copy2.default,
          { className: "u-textRed font-semibold" },
          "There is no card for this subscription payment."
        )
      ),
      _react2.default.createElement(
        _copy2.default,
        { className: "cc-widget-spacing" },
        cardStatus === "UNAVAILABLE" ? "Please choose a card" : "Please edit the card, choose a different card",
        ", or add a new card."
      )
    );
  };

  ManageSubModal.prototype._renderUpdatePayment = function _renderUpdatePayment(block) {
    var _this2 = this;

    var selectedCardID = this.state.selectedCardID;
    var _props2 = this.props;
    var type = _props2.cardType;
    var lastFour = _props2.piHash;

    var groupName = "creditCards-" + (block ? "block" : "");
    return(
      /*eslint no-unused-expressions:0*/
      _react2.default.createElement(
        "div",
        null,
        this._renderText(),
        _react2.default.createElement(
          _radioTile2.default,
          { groupName: groupName },
          _react2.default.createElement(_reduxCreditCard.CreditCardsWidget, {
            store: this.context.store,
            fetchInitialData: true,
            showExpiredLabel: true,
            tile: function tile(props) {
              var selected = void 0;
              if (selectedCardID) {
                selected = selectedCardID;
              } else if (props.cardType === type && props.lastFour === lastFour) {
                selected = props.id;
              }

              return _react2.default.createElement(_wrappedCreditCard2.default, (0, _extends3.default)({}, props, {
                key: props.id,
                groupName: groupName,
                checked: selected === props.id,
                onSelected: function onSelected() {
                  return _this2.setState({ selectedCardID: props.id });
                }
              }));
            }
          })
        ),
        _react2.default.createElement(
          _button2.default,
          {
            "data-automation-id": "continueButtons",
            className: "pull-right update-button",
            block: block,
            onClick: function onClick() {
              selectedCardID && _this2.props.updatePaymentPref(selectedCardID);
              _this2.toggle();
            } },
          "Continue"
        )
      )
    );
  };

  ManageSubModal.prototype._renderSlidePanel = function _renderSlidePanel() {
    return _react2.default.createElement(
      _slidepanel2.default,
      {
        ref: "slidePanel",
        active: this.state.active,
        onClose: this.toggle,
        direction: "left",
        className: "hide-content-s" },
      this._renderUpdatePayment(true)
    );
  };

  ManageSubModal.prototype._renderModal = function _renderModal() {
    return _react2.default.createElement(
      "div",
      { className: "hide-content-max-s" },
      _react2.default.createElement(
        _modal2.default,
        {
          ref: "cancelModal",
          active: this.state.active,
          fixed: this.props.fixed,
          padded: this.props.padded,
          onClose: this.toggle,
          className: "cancel-modal-body" },
        this._renderUpdatePayment()
      )
    );
  };

  ManageSubModal.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      null,
      this.state.active && this._renderSlidePanel(),
      this._renderModal()
    );
  };

  return ManageSubModal;
}(_react2.default.Component);

ManageSubModal.propTypes = {
  cardSprite: _react2.default.PropTypes.string,
  cardStatus: _react2.default.PropTypes.string,
  cardType: _react2.default.PropTypes.string,
  fixed: _react2.default.PropTypes.bool,
  padded: _react2.default.PropTypes.bool,
  piHash: _react2.default.PropTypes.string,
  renewalDate: _react2.default.PropTypes.string,
  logo: _react2.default.PropTypes.any,
  updatePaymentPref: _react2.default.PropTypes.func
};

ManageSubModal.contextTypes = {
  store: _react2.default.PropTypes.any
};

exports.default = ManageSubModal;