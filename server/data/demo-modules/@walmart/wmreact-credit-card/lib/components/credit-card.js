"use strict";

exports.__esModule = true;

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _dates = require("./internals/form/utils/dates");

var _formTokens = require("./internals/form-tokens.json");

var _formTokens2 = _interopRequireDefault(_formTokens);

var _config = require("../config");

var _spinner = require("@walmart/wmreact-containers/lib/components/spinner");

var _spinner2 = _interopRequireDefault(_spinner);

var _heading = require("@walmart/wmreact-base/lib/components/heading");

var _heading2 = _interopRequireDefault(_heading);

var _isStoreCard = require("../utils/is-store-card");

var _isStoreCard2 = _interopRequireDefault(_isStoreCard);

var _isTemporaryCard = require("../utils/is-temporary-card");

var _isTemporaryCard2 = _interopRequireDefault(_isTemporaryCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cards = {
  WMUSGESTORECARD: "walmart-credit-card",
  WMMASTERCARD: "walmart-mastercard",
  MASTERCARD: "mastercard",
  VISA: "visa",
  AMEX: "american-express",
  DISCOVER: "discover"
};

/**
 A component for displaying a single credit card.

 Here is a simple example:

 ```jsx
 <CreditCard
 onDelete={(ev) => console.log(ev)}
 onEdit={(ev) => console.log(ev)}
 cardType="VISA"
 lastFour="1111"
 firstName="John"
 lastName="Snow"
 cardExpiryDate="07/17"
 />
 ```
 @component CreditCards
 @import {CreditCards}
 @playground
 CreditCards
 ```
 <CreditCard
 onDelete={(ev) => console.log(ev)}
 onEdit={(ev) => console.log(ev)}
 cardType="VISA"
 lastFour="1111"
 firstName="John"
 lastName="Snow"
 cardExpiryDate="07/17"
 />
 ```
 */

var CreditCard = function (_React$Component) {
  (0, _inherits3.default)(CreditCard, _React$Component);

  function CreditCard() {
    (0, _classCallCheck3.default)(this, CreditCard);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this));
  }

  CreditCard.prototype._toggleDeleteMode = function _toggleDeleteMode() {
    var _props = this.props;
    var onDeleteModeChanged = _props.onDeleteModeChanged;
    var deleteMode = _props.deleteMode;

    if (onDeleteModeChanged) {
      onDeleteModeChanged(!deleteMode);
    }
  };

  CreditCard.prototype._delete = function _delete() {
    this._toggleDeleteMode();
    this.props.onDelete();
  };

  CreditCard.prototype._isEditable = function _isEditable() {
    return !(0, _isTemporaryCard2.default)(this.props);
  };

  CreditCard.prototype._isExpired = function _isExpired() {
    var _parseDateParts = (0, _dates.parseDateParts)(this.props.cardExpiryDate);

    var month = _parseDateParts.month;
    var year = _parseDateParts.year;


    return (0, _dates.isCardExpired)(month, year);
  };

  CreditCard.prototype._hasExpiryDate = function _hasExpiryDate() {
    var cardExpiryDate = this.props.cardExpiryDate;

    return cardExpiryDate && (!(0, _isStoreCard2.default)(this.props) || (0, _isTemporaryCard2.default)(this.props));
  };

  CreditCard.prototype._expires = function _expires() {
    var isTemp = this.props.isTemp;

    var _parseDateParts2 = (0, _dates.parseDateParts)(this.props.cardExpiryDate);

    var day = _parseDateParts2.day;
    var month = _parseDateParts2.month;
    var year = _parseDateParts2.year;
    // Temp cards are supposed to be shown with the day.
    // See: https://jira.walmart.com/browse/GPCC-6009

    if (isTemp) {
      return month + "/" + day + "/" + year.substring(2, 4);
    }
    return month + "/" + year.substring(2, 4);
  };

  CreditCard.prototype._renderCardBody = function _renderCardBody() {
    var paymentOptionClasses = (0, _classnames2.default)(cards[this.props.cardType], "payment-option", "js-payment-option", "js-payment-option-" + this.props.index);
    var _props2 = this.props;
    var showExpiredLabel = _props2.showExpiredLabel;
    var deleteMode = _props2.deleteMode;


    return _react2.default.createElement(
      "div",
      { className: "inner-card-body" },
      _react2.default.createElement("div", { className: paymentOptionClasses }),
      _react2.default.createElement(
        "div",
        null,
        (0, _config.i18n)(_formTokens2.default.cardTile.endingIn),
        " ",
        _react2.default.createElement(
          "span",
          {
            className: "font-semibold js-last-four",
            "data-automation-id": "credit-card-tile-lastFour-" + this.props.index },
          this.props.lastFour
        )
      ),
      this._renderExpiryDate(),
      _react2.default.createElement(
        "div",
        {
          className: "credit-card-fullname js-credit-card-fullname",
          "data-automation-id": "credit-card-tile-name-" + this.props.index },
        this.props.firstName,
        " ",
        this.props.lastName
      ),
      this._hasExpiryDate() && this._isExpired() && showExpiredLabel && !deleteMode && _react2.default.createElement(
        "div",
        {
          "data-automation-id": "credit-card-expired-label-" + this.props.index,
          className: "credit-card-expired-label" },
        "This card has expired"
      )
    );
  };

  CreditCard.prototype._renderExpiryDate = function _renderExpiryDate() {
    if (this._hasExpiryDate()) {
      return _react2.default.createElement(
        "div",
        null,
        (0, _config.i18n)(_formTokens2.default.cardTile.expires),
        " ",
        _react2.default.createElement(
          "span",
          {
            className: "font-semibold js-expires",
            "data-automation-id": "credit-card-tile-expires-" + this.props.index },
          this._expires()
        )
      );
    }
    return null;
  };

  CreditCard.prototype._renderActions = function _renderActions() {
    var _this2 = this;

    var tealeafIds = this.props.tealeafIds;

    var editClasses = (0, _classnames2.default)({ last: !this.props.onDelete }, "cc-edit-action");
    return _react2.default.createElement(
      "div",
      { className: "credit-card-actions" },
      this.props.onEdit && this._isEditable() && _react2.default.createElement(
        _button2.default,
        {
          fakelink: true,
          onClick: function onClick() {
            return _this2.props.onEdit();
          },
          automationId: "edit-credit-card-" + this.props.index,
          tealeafId: "" + tealeafIds.edit + this.props.index,
          className: editClasses },
        (0, _config.i18n)(_formTokens2.default.edit)
      ),
      this.props.onDelete && _react2.default.createElement(
        _button2.default,
        {
          fakelink: true,
          automationId: "delete-credit-card-" + this.props.index,
          tealeafId: "" + tealeafIds.delete + this.props.index,
          onClick: function onClick() {
            return _this2._toggleDeleteMode();
          },
          className: "last cc-delete-action" },
        (0, _config.i18n)(_formTokens2.default.delete)
      )
    );
  };

  CreditCard.prototype._deleteConfirmation = function _deleteConfirmation() {
    var _this3 = this;

    var tealeafIds = this.props.tealeafIds;

    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)("credit-card", this.props.className) },
      _react2.default.createElement(
        "div",
        { className: "confirm-delete" },
        _react2.default.createElement(
          _heading2.default.H5,
          null,
          (0, _config.i18n)(_formTokens2.default.deleteCardConfirmation)
        ),
        this._renderCardBody(),
        _react2.default.createElement(
          "div",
          { className: "credit-card-full-actions" },
          _react2.default.createElement(
            _button2.default,
            {
              automationId: "submit-delete-credit-card-" + this.props.index,
              tealeafId: "" + tealeafIds.deleteConfirmDelete + this.props.index,
              onClick: function onClick() {
                return _this3._delete();
              },
              ref: function ref(_ref) {
                _this3._confirmDelete = _ref;
              },
              className: "cc-confirm-delete" },
            (0, _config.i18n)(_formTokens2.default.delete)
          ),
          _react2.default.createElement(
            _button2.default,
            {
              fakelink: true,
              automationId: "cancel-delete-credit-card-" + this.props.index,
              tealeafId: "" + tealeafIds.deleteConfirmCancel + this.props.index,
              onClick: function onClick() {
                return _this3._toggleDeleteMode();
              },
              className: "cc-cancel-delete" },
            (0, _config.i18n)(_formTokens2.default.cancel)
          )
        )
      )
    );
  };

  CreditCard.prototype._viewMode = function _viewMode() {
    var changing = this.props.loading || this.props.deleting;
    var classes = { "is-expired": this._hasExpiryDate() && this._isExpired() };
    return _react2.default.createElement(
      "div",
      {
        className: (0, _classnames2.default)("credit-card", classes, this.props.className) },
      this.props.deleting && _react2.default.createElement(_spinner2.default, { loading: true }),
      _react2.default.createElement(
        "div",
        { className: "card-body" },
        this._renderCardBody(),
        this.props.children,
        !changing && this._renderActions()
      )
    );
  };

  CreditCard.prototype.render = function render() {
    return this.props.deleteMode ? this._deleteConfirmation() : this._viewMode();
  };

  return CreditCard;
}(_react2.default.Component);

CreditCard.supportedCardTypes = (0, _keys2.default)(cards);

CreditCard.propTypes = {
  index: _react2.default.PropTypes.number.isRequired,
  // note: duplicated to work properly with electrode-docgen
  cardType: _react2.default.PropTypes.oneOf(["WMUSGESTORECARD", "WMMASTERCARD", "MASTERCARD", "VISA", "AMEX", "DISCOVER"]).isRequired,
  isTemp: _react2.default.PropTypes.bool,
  cardExpiryDate: _react2.default.PropTypes.string.isRequired,
  lastFour: _react2.default.PropTypes.string.isRequired,
  firstName: _react2.default.PropTypes.string.isRequired,
  lastName: _react2.default.PropTypes.string.isRequired,
  onDeleteModeChanged: _react2.default.PropTypes.func,
  /** when set, the delete action will be enabled*/
  onDelete: _react2.default.PropTypes.func,
  /** when set, the edit action will be enabled*/
  onEdit: _react2.default.PropTypes.func,
  className: _react2.default.PropTypes.string,
  loading: _react2.default.PropTypes.bool,
  deleting: _react2.default.PropTypes.bool,
  deleteMode: _react2.default.PropTypes.bool,
  tealeafIds: _react2.default.PropTypes.shape({
    edit: _react2.default.PropTypes.string,
    delete: _react2.default.PropTypes.string,
    deleteConfirmDelete: _react2.default.PropTypes.string,
    deleteConfirmCancel: _react2.default.PropTypes.string
  }),
  children: _react2.default.PropTypes.node,
  showExpiredLabel: _react2.default.PropTypes.bool
};

CreditCard.defaultProps = {
  deleteMode: false,
  tealeafIds: {
    edit: "edit",
    delete: "delete",
    deleteConfirmDelete: "confirm-delete",
    deleteConfirmCancel: "confirm-cancel"
  }
};

exports.default = CreditCard;