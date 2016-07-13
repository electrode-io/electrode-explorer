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

var _reactRedux = require("react-redux");

var _wmreactGiftCard = require("@walmart/wmreact-gift-card");

var _giftCards = require("../redux/action-creators/gift-cards");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConnectedGiftCards = function (_React$Component) {
  (0, _inherits3.default)(ConnectedGiftCards, _React$Component);

  function ConnectedGiftCards() {
    (0, _classCallCheck3.default)(this, ConnectedGiftCards);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  ConnectedGiftCards.prototype.componentWillMount = function componentWillMount() {
    this.props.getCards();
  };

  ConnectedGiftCards.prototype.render = function render() {
    return _react2.default.createElement(_wmreactGiftCard.GiftCards, this.props);
  };

  return ConnectedGiftCards;
}(_react2.default.Component);

ConnectedGiftCards.propTypes = {
  getCards: _react2.default.PropTypes.func
};

exports.default = (0, _reactRedux.connect)(function (_ref) {
  var giftCards = _ref.giftCards;
  return giftCards;
}, function (dispatch, _ref2) {
  var fetchInitialData = _ref2.fetchInitialData;
  var _ref2$onDelete = _ref2.onDelete;

  var _onDelete = _ref2$onDelete === undefined ? _giftCards.deleteCard : _ref2$onDelete;

  var _ref2$onAdd = _ref2.onAdd;

  var _onAdd = _ref2$onAdd === undefined ? _giftCards.addCard : _ref2$onAdd;

  var _ref2$historyEnabled = _ref2.historyEnabled;
  var historyEnabled = _ref2$historyEnabled === undefined ? true : _ref2$historyEnabled;
  return {
    onAdd: function onAdd(card) {
      return dispatch(_onAdd(card));
    },
    onDelete: function onDelete(idObj) {
      return dispatch(_onDelete(idObj));
    },
    onRequestDeleteMode: function onRequestDeleteMode(_ref3) {
      var id = _ref3.id;
      var deleteMode = _ref3.deleteMode;
      return dispatch((0, _giftCards.onRequestDeleteMode)({ id: id, deleteMode: deleteMode }));
    },
    onFetchCardHistory: historyEnabled ? function (idObj) {
      return dispatch((0, _giftCards.fetchCardHistory)(idObj));
    } : undefined,
    onShowGiftCardHistory: function onShowGiftCardHistory(card) {
      return dispatch((0, _giftCards.onShowGiftCardHistory)(card));
    },
    onRequestAdd: function onRequestAdd(showAddForm) {
      return dispatch((0, _giftCards.onRequestAddCard)(showAddForm));
    },
    getCards: fetchInitialData ? function () {
      return dispatch((0, _giftCards.getCards)());
    } : function () {
      return null;
    }
  };
})(ConnectedGiftCards);