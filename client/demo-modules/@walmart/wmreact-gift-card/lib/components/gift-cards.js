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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _layout = require("@walmart/wmreact-layout/lib/components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _alert = require("@walmart/wmreact-forms/lib/components/alert");

var _alert2 = _interopRequireDefault(_alert);

var _spinner = require("@walmart/wmreact-containers/lib/components/spinner");

var _spinner2 = _interopRequireDefault(_spinner);

var _heading = require("@walmart/wmreact-base/lib/components/heading");

var _heading2 = _interopRequireDefault(_heading);

var _addGiftCard = require("./add-gift-card");

var _addGiftCard2 = _interopRequireDefault(_addGiftCard);

var _giftCard = require("./gift-card");

var _giftCard2 = _interopRequireDefault(_giftCard);

var _giftCardForm = require("./gift-card-form");

var _giftCardForm2 = _interopRequireDefault(_giftCardForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MaxCardTile = function MaxCardTile() {
  return _react2.default.createElement(
    "div",
    { className: "gift-card", "data-automation-id": "max-cards-reached-tile" },
    _react2.default.createElement(
      "div",
      { className: "card-body" },
      _react2.default.createElement(
        _heading2.default.H5,
        { className: "no-margin" },
        "Want to add another gift card?"
      ),
      _react2.default.createElement(
        "div",
        { className: "max-gift-cards-description copy-small" },
        "You've reached the maximum number of saved gift cards. To add a new card, delete a card you're no longer using."
      )
    )
  );
};

var GiftCards = function (_React$Component) {
  (0, _inherits3.default)(GiftCards, _React$Component);

  function GiftCards() {
    (0, _classCallCheck3.default)(this, GiftCards);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  GiftCards.prototype._createOnDelete = function _createOnDelete(card) {
    return this.props.onDelete && this.props.onDelete.bind(null, { id: card.id });
  };

  GiftCards.prototype._createFetchCardHistory = function _createFetchCardHistory(card) {
    return this.props.onFetchCardHistory && this.props.onFetchCardHistory.bind(null, { id: card.id });
  };

  GiftCards.prototype._save = function _save(data) {
    this.props.onAdd(data);
  };

  GiftCards.prototype._renderCard = function _renderCard(card, index) {
    var _props = this.props;
    var tealeafIds = _props.tealeafIds;
    var loadedHistoryCardId = _props.loadedHistoryCardId;
    var cardProps = _props.cardProps;
    var cardInDeleteMode = _props.cardInDeleteMode;
    var _onRequestDeleteMode = _props.onRequestDeleteMode;


    var GiftCardComponent = this.props.tile || _giftCard2.default;
    return _react2.default.createElement(
      "div",
      { key: index, className: "padded-card" },
      _react2.default.createElement(GiftCardComponent, (0, _extends3.default)({
        index: index,
        deleteMode: cardInDeleteMode === card.id,
        historyLoaded: loadedHistoryCardId === card.id,
        onDelete: this._createOnDelete(card),
        onRequestDeleteMode: function onRequestDeleteMode(deleteMode) {
          return _onRequestDeleteMode({ id: card.id, deleteMode: deleteMode });
        },
        onFetchCardHistory: this._createFetchCardHistory(card),
        onShowGiftCardHistory: this.props.onShowGiftCardHistory,
        tealeafIndex: index,
        tealeafIds: tealeafIds.card
      }, card, cardProps))
    );
  };

  GiftCards.prototype.renderLastTile = function renderLastTile() {
    var _props2 = this.props;
    var onAdd = _props2.onAdd;
    var showAddForm = _props2.showAddForm;
    var onRequestAdd = _props2.onRequestAdd;
    var tealeafIds = _props2.tealeafIds;
    var addTile = _props2.addTile;
    var cards = _props2.cards;

    var AddTile = addTile || (cards.length > 4 ? MaxCardTile : _addGiftCard2.default);

    if (onAdd) {
      return _react2.default.createElement(
        "div",
        { key: "last", className: (0, _classnames2.default)("padded-card", { "add-new-card": showAddForm }) },
        _react2.default.createElement(AddTile, { onClick: function onClick() {
            return onRequestAdd(true);
          }, tealeafId: tealeafIds.addCard })
      );
    } else {
      return null;
    }
  };

  GiftCards.prototype.renderSpinner = function renderSpinner() {
    var _props3 = this.props;
    var initSpinner = _props3.initSpinner;
    var fetchInitialData = _props3.fetchInitialData;

    return initSpinner || _react2.default.createElement(_spinner2.default, { fixed: fetchInitialData, loading: true });
  };

  GiftCards.prototype.renderForm = function renderForm(noCards) {
    var _this2 = this;

    var _props4 = this.props;
    var adding = _props4.adding;
    var error = _props4.error;
    var onRequestAdd = _props4.onRequestAdd;
    var tealeafIds = _props4.tealeafIds;
    var addFormProps = _props4.addFormProps;
    var floatingLabels = _props4.floatingLabels;
    var scrollFormIntoViewOnMount = _props4.scrollFormIntoViewOnMount;


    return _react2.default.createElement(_giftCardForm2.default, (0, _extends3.default)({
      loading: adding,
      isInitial: noCards,
      onSave: function onSave(formData) {
        return _this2._save(formData);
      },
      onCancel: function onCancel() {
        return onRequestAdd(false);
      },
      error: error,
      floatingLabels: floatingLabels,
      tealeafIds: tealeafIds.form,
      scrollIntoViewOnMount: scrollFormIntoViewOnMount
    }, addFormProps));
  };

  GiftCards.prototype.renderError = function renderError() {
    var _props5 = this.props;
    var error = _props5.error;
    var showAddForm = _props5.showAddForm;
    var cards = _props5.cards;
    // Render error on top if the form is not open, else let the form render
    // the erorr inside the form, see renderForm().

    if (error && !showAddForm && cards && cards.length) {
      return _react2.default.createElement(_alert2.default, (0, _extends3.default)({}, error, { isBlock: true, className: "js-alert-message" }));
    } else {
      return null;
    }
  };

  GiftCards.prototype.showAddForm = function showAddForm() {
    var _props6 = this.props;
    var cards = _props6.cards;
    var showAddForm = _props6.showAddForm;
    var adding = _props6.adding;

    return !cards || cards && cards.length === 0 || showAddForm || adding;
  };

  GiftCards.prototype.renderPage = function renderPage() {
    var _this3 = this;

    var _props7 = this.props;
    var cards = _props7.cards;
    var renderHeader = _props7.renderHeader;
    var fullWidth = _props7.fullWidth;

    var layoutOverrides = fullWidth ? { large: 4, medium: 3 } : {};
    var hasCards = cards && cards.length;
    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)("gift-card-wrapper-inner", { "no-cards": !hasCards }) },
      renderHeader && renderHeader(cards && cards.length > 0),
      this.renderError(),
      _react2.default.createElement(
        _layout2.default,
        (0, _extends3.default)({ large: 3, small: 2, "x-small": 1 }, layoutOverrides, { className: "gift-card-wrapper" }),
        cards && cards.map(function (c, index) {
          return _this3._renderCard(c, index);
        }),
        cards && cards.length > 0 && this.renderLastTile()
      ),
      this.showAddForm() && this.renderForm(!hasCards)
    );
  };

  GiftCards.prototype.render = function render() {
    var fetchInitialData = this.props.fetchInitialData;

    return _react2.default.createElement(
      "div",
      { className: "gift-cards-wrapper", "data-view-name": "giftcard" },
      fetchInitialData && this.renderSpinner(),
      !fetchInitialData && this.renderPage()
    );
  };

  return GiftCards;
}(_react2.default.Component);

GiftCards.propTypes = {
  error: _react2.default.PropTypes.shape({
    message: _react2.default.PropTypes.string.isRequired,
    type: _react2.default.PropTypes.oneOf(["warn", "error"])
  }),
  cards: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    id: _react2.default.PropTypes.string
  })),
  addTile: _react2.default.PropTypes.node,
  initSpinner: _react2.default.PropTypes.node,
  tile: _react2.default.PropTypes.node,
  onAdd: _react2.default.PropTypes.func,
  onDelete: _react2.default.PropTypes.func,
  onRequestAdd: _react2.default.PropTypes.func.isRequired,
  onFetchCardHistory: _react2.default.PropTypes.func,
  onShowGiftCardHistory: _react2.default.PropTypes.func.isRequired,
  cardInDeleteMode: _react2.default.PropTypes.string,
  loadedHistoryCardId: _react2.default.PropTypes.string,
  showAddForm: _react2.default.PropTypes.bool,
  renderHeader: _react2.default.PropTypes.func,
  adding: _react2.default.PropTypes.bool,
  loading: _react2.default.PropTypes.bool,
  fullWidth: _react2.default.PropTypes.bool,
  fetchInitialData: _react2.default.PropTypes.bool,
  onRequestDeleteMode: _react2.default.PropTypes.func,
  tealeafIds: _react2.default.PropTypes.shape({
    card: _react2.default.PropTypes.object,
    addCard: _react2.default.PropTypes.string,
    form: _react2.default.PropTypes.object
  }),
  cardProps: _react2.default.PropTypes.shape({
    lastFourLabel: _react2.default.PropTypes.node,
    deleteMsg: _react2.default.PropTypes.string
  }),
  addFormProps: _react2.default.PropTypes.shape({
    showNickName: _react2.default.PropTypes.bool,
    saveBtnPrimary: _react2.default.PropTypes.bool,
    showActionsLeft: _react2.default.PropTypes.bool,
    saveGiftCardActionLabel: _react2.default.PropTypes.string
  }),
  floatingLabels: _react2.default.PropTypes.bool,
  scrollFormIntoViewOnMount: _react2.default.PropTypes.bool
};

GiftCards.defaultProps = {
  tealeafIds: {},
  addFormProps: {}
};

exports.default = GiftCards;