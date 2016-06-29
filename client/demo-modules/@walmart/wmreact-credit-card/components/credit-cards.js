"use strict";

exports.__esModule = true;

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

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

var _addCreditCard = require("./internals/add-credit-card");

var _addCreditCard2 = _interopRequireDefault(_addCreditCard);

var _creditCard = require("./credit-card");

var _creditCard2 = _interopRequireDefault(_creditCard);

var _creditCardForm = require("./credit-card-form");

var _creditCardForm2 = _interopRequireDefault(_creditCardForm);

var _layout = require("@walmart/wmreact-layout/lib/components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _errorCodes = require("../error-codes.json");

var _errorCodes2 = _interopRequireDefault(_errorCodes);

var _spinner = require("@walmart/wmreact-containers/lib/components/spinner");

var _spinner2 = _interopRequireDefault(_spinner);

var _alertErrors = require("./alert-errors");

var _alertErrors2 = _interopRequireDefault(_alertErrors);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 A component listing credit cards.

 Here is a simple example:

 ```jsx
 <CreditCards cards = {[{
    lastFour:"1111",
    firstName:"John",
    lastName:"Snow",
    cardExpiryDate:"2020-07-15",
    cardType:"AMEX",
    id:"1",
    addressLineOne: "860 w california ave",
    city: "sunnyvale",
    state: "CA",
    postalCode: "94086",
    phone: "8123823828"
  }]} onAdd={(card) => {}} onEdit={({id,card}) => {}} onDelete={({id}) => {}} />
 ```
 @component CreditCards
 @import {CreditCards}
 @playground
 CreditCards
 ```
 <CreditCards cards = {[{
    lastFour:"1111",
    firstName:"John",
    lastName:"Snow",
    cardExpiryDate:"2020-07-15",
    cardType:"AMEX",
    id:"1",
    addressLineOne: "860 w california ave",
    city: "sunnyvale",
    state: "CA",
    postalCode: "94086",
    phone: "8123823828"
  }]} onAdd={(card) => console.log(card)}
 onEdit={({id,card}) => console.log(card)}
 onDelete={({id}) => console.log(id)} />
 ```
 */

var CreditCards = function (_React$Component) {
  (0, _inherits3.default)(CreditCards, _React$Component);

  function CreditCards() {
    (0, _classCallCheck3.default)(this, CreditCards);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  CreditCards.prototype._createOnAdd = function _createOnAdd() {
    var _this2 = this;

    if (this.props.onAdd && this.props.onRequestEdit) {
      return function () {
        return _this2.props.onRequestEdit("new");
      };
    }
  };

  CreditCards.prototype._createOnEdit = function _createOnEdit(card) {
    var _this3 = this;

    if (this.props.onEdit && this.props.onRequestEdit) {
      return function () {
        return _this3.props.onRequestEdit(card.id);
      };
    }
  };

  CreditCards.prototype._createOnDelete = function _createOnDelete(card) {
    return this.props.onDelete && this.props.onDelete.bind(null, { id: card.id });
  };

  CreditCards.prototype._createOnDeleteModeChange = function _createOnDeleteModeChange(card, deleteMode) {
    return this.props.onDeleteModeChange && this.props.onDeleteModeChange({ id: card.id, deleteMode: deleteMode });
  };

  CreditCards.prototype._save = function _save(id, data) {
    return id === "new" ? this.props.onAdd(data) : this.props.onEdit({ id: id, patch: data });
  };

  CreditCards.prototype._renderCard = function _renderCard(card, index) {
    var _this4 = this;

    var _props = this.props;
    var tealeafIds = _props.tealeafIds;
    var cardInDeleteMode = _props.cardInDeleteMode;
    var showExpiredLabel = _props.showExpiredLabel;

    var _ref = this.props.errors[card.id] || {};

    var errors = _ref.delete;

    var Tile = this.props.tile || _creditCard2.default;
    return this._editable(_react2.default.createElement(Tile, (0, _extends3.default)({}, card, {
      key: card.id,
      index: index,
      tealeafIds: tealeafIds.card,
      onEdit: this._createOnEdit(card),
      onDeleteModeChanged: function onDeleteModeChanged(deleteMode) {
        return _this4._createOnDeleteModeChange(card, deleteMode);
      },
      deleteMode: cardInDeleteMode === card.id,
      onDelete: this._createOnDelete(card),
      showExpiredLabel: showExpiredLabel,
      errors: errors })), (0, _extends3.default)({ index: index }, card));
  };

  CreditCards.prototype._renderAdd = function _renderAdd() {
    var tealeafIds = this.props.tealeafIds;

    var AddTile = this.props.addTile || _addCreditCard2.default;
    return this._editable(_react2.default.createElement(AddTile, { onAdd: this._createOnAdd(), tealeafId: tealeafIds.addCard }), (0, _extends3.default)({ id: "new", loading: this.props.adding }, this.props.defaults));
  };

  CreditCards.prototype._editable = function _editable(component, data) {
    var _this5 = this;

    var _ref2 = this.props.errors[data.id] || {};

    var avsInvalid = _ref2[_errorCodes2.default.avsInvalid];
    var errors = _ref2.edit;
    var _props2 = this.props;
    var cards = _props2.cards;
    var bypassAvs = _props2.bypassAvs;
    var tealeafIds = _props2.tealeafIds;
    var usePrimaryButtons = _props2.usePrimaryButtons;

    return _react2.default.createElement(
      _creditCardForm2.default,
      (0, _extends3.default)({}, data, {
        cardNumberEditable: this.props.cardNumberEditable,
        floatingLabels: this.props.floatingLabels,
        key: data.index,
        tealeafIds: tealeafIds.form,
        addressForm: this.props.addressForm,
        onValidationChange: this.props.onValidationChange,
        isNew: data.id === "new",
        isInitial: cards.length === 0,
        actions: this.props.formActions,
        isEditorActive: !!this.props.cardEdited,
        inEditMode: cards.length === 0 || data.id === this.props.cardEdited,
        onSave: function onSave(formData) {
          return _this5._save(data.id, formData);
        },
        onCancel: function onCancel() {
          return _this5.props.onRequestEdit(null);
        },
        avsError: avsInvalid,
        bypassValidation: bypassAvs,
        errors: errors,
        primary: usePrimaryButtons,
        validationDate: this.props.validationDate,
        onRequestClearErrors: function onRequestClearErrors() {
          return _this5.props.onRequestClearErrors(data.id);
        } }),
      cards.length > 0 && component
    );
  };

  CreditCards.prototype.render = function render() {
    var _this6 = this;

    var errors = (0, _assign2.default)({}, this.props.errors.delete, this.props.errors.fetch);
    var cardIds = this.props.cards.map(function (card) {
      return card.id;
    });
    var _props3 = this.props;
    var fetchInitialData = _props3.fetchInitialData;
    var initSpinner = _props3.initSpinner;
    var loading = _props3.loading;
    var fullWidth = _props3.fullWidth;

    var cards = this.props.cards.sort(function (cardA, cardB) {
      if (cardA.isDefault !== cardB.isDefault) {
        return !!cardB.isDefault - !!cardA.isDefault;
      }
      return cardIds.indexOf(cardA.id) - cardIds.indexOf(cardB.id);
    }).slice(0, this.props.truncate && this.props.onShowAllCards ? 5 : this.props.cards.length).map(function (card, index) {
      return _this6._renderCard(card, index);
    });
    var noCards = cards.length === 0;
    var layoutOverrides = fullWidth ? { large: 4, medium: 3 } : {};
    var wrapperClasses = { "no-cards": noCards, "full-width": fullWidth };

    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)("credit-cards-wrapper", wrapperClasses) },
      !fetchInitialData && this.props.renderHeader && this.props.renderHeader(noCards),
      fetchInitialData && initSpinner || loading && _react2.default.createElement(_spinner2.default, { fixed: fetchInitialData, loading: true }),
      !fetchInitialData && _react2.default.createElement(_alertErrors2.default, { errorCodes: (0, _keys2.default)(errors) }),
      !fetchInitialData && _react2.default.createElement(
        _layout2.default,
        (0, _extends3.default)({
          large: 3,
          small: 2,
          "x-small": 1
        }, layoutOverrides, {
          className: "credit-card-wrapper" }),
        cards,
        this.props.onAdd && this._renderAdd()
      ),
      !fetchInitialData && this.props.truncate && this.props.onShowAllCards && this.props.cards.length > 5 ? _react2.default.createElement(
        _button2.default,
        {
          automationId: "show-hide-cc",
          fakelink: true,
          className: "see-more",
          onClick: this.props.onShowAllCards
        },
        "See all saved credit and debit cards"
      ) : null
    );
  };

  return CreditCards;
}(_react2.default.Component);

CreditCards.propTypes = {
  /**
   contains all cards you wish to show
   */
  cards: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    id: _react2.default.PropTypes.string.isRequired
  })),
  /**
   when set, will enable adding new cards by showing the add-new tile
   */
  onAdd: _react2.default.PropTypes.func,
  /**
   when set, will enable the edit of the cards
   */
  onEdit: _react2.default.PropTypes.func,
  /**
   when set, will enable the delete button on the cards
   */
  onDelete: _react2.default.PropTypes.func,
  /** required when either add or edit is to be used */
  onRequestEdit: _react2.default.PropTypes.func,
  onDeleteModeChange: _react2.default.PropTypes.func,
  cardInDeleteMode: _react2.default.PropTypes.string,
  /** use in combination with onRequestEdit */
  cardEdited: _react2.default.PropTypes.string,
  /** errors in the form of {cardId: {error_name: "details"}} */
  errors: _react2.default.PropTypes.object,
  /** clear errors by id, onRequestClearErrors(cardId) */
  onRequestClearErrors: _react2.default.PropTypes.func,
  onValidationChange: _react2.default.PropTypes.func,
  cardNumberEditable: _react2.default.PropTypes.bool,
  loading: _react2.default.PropTypes.bool,
  fetchInitialData: _react2.default.PropTypes.bool,
  renderHeader: _react2.default.PropTypes.func,
  adding: _react2.default.PropTypes.bool,
  initSpinner: _react2.default.PropTypes.node,
  validationDate: _react2.default.PropTypes.object,
  truncate: _react2.default.PropTypes.bool,
  onShowAllCards: _react2.default.PropTypes.func,
  /* default values to populate the add form with */
  defaults: _react2.default.PropTypes.object,
  bypassAvs: _react2.default.PropTypes.bool,
  tile: _react2.default.PropTypes.node,
  addTile: _react2.default.PropTypes.node,
  addressForm: _react2.default.PropTypes.func,
  fullWidth: _react2.default.PropTypes.bool,
  tealeafIds: _react2.default.PropTypes.shape({
    card: _react2.default.PropTypes.object,
    form: _react2.default.PropTypes.object,
    addCard: _react2.default.PropTypes.string
  }),
  formActions: _react2.default.PropTypes.func,
  usePrimaryButtons: _react2.default.PropTypes.bool,
  showExpiredLabel: _react2.default.PropTypes.bool,
  floatingLabels: _react2.default.PropTypes.bool
};

CreditCards.defaultProps = {
  tealeafIds: {},
  errors: {},
  truncate: false,
  usePrimaryButtons: true,
  defaults: {},
  bypassAvs: false,
  cards: []
};

exports.default = CreditCards;