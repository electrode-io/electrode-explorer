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

var _reactRedux = require("react-redux");

var _wmreactCreditCard = require("@walmart/wmreact-credit-card");

var _creditCards = require("../redux/action-creators/credit-cards");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConnectedCreditCards = function (_React$Component) {
  (0, _inherits3.default)(ConnectedCreditCards, _React$Component);

  function ConnectedCreditCards() {
    (0, _classCallCheck3.default)(this, ConnectedCreditCards);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  ConnectedCreditCards.prototype.componentWillMount = function componentWillMount() {
    this.props.getCards();
  };

  ConnectedCreditCards.prototype.render = function render() {
    return _react2.default.createElement(_wmreactCreditCard.CreditCards, this.props);
  };

  return ConnectedCreditCards;
}(_react2.default.Component);

ConnectedCreditCards.propTypes = {
  getCards: _react2.default.PropTypes.func.isRequired
};

exports.default = (0, _reactRedux.connect)(function (_ref, _ref2) {
  var creditCards = _ref.creditCards;
  var truncate = _ref2.truncate;
  return (0, _extends3.default)({}, creditCards, { truncate: creditCards.truncate && !!truncate });
}, function (dispatch, props) {
  return {
    onAdd: function onAdd(card) {
      return dispatch((0, _creditCards.addCard)(card));
    },
    onValidationChange: function onValidationChange(cardInfo) {
      return dispatch((0, _creditCards.validationError)(cardInfo));
    },
    onEdit: function onEdit(cardInfo) {
      return dispatch((0, _creditCards.editCard)(cardInfo));
    },
    onDeleteModeChange: function onDeleteModeChange(cardInfo) {
      return dispatch((0, _creditCards.changeDeleteMode)(cardInfo));
    },
    onDelete: function onDelete(idObj) {
      return dispatch((0, _creditCards.deleteCard)(idObj));
    },
    onRequestEdit: function onRequestEdit(id) {
      return dispatch((0, _creditCards.requestEditCard)(id));
    },
    onRequestClearErrors: function onRequestClearErrors(id) {
      return dispatch((0, _creditCards.requestClearErrors)(id));
    },
    onShowAllCards: props.truncate ? function () {
      return dispatch((0, _creditCards.setTruncate)(false));
    } : undefined,
    getCards: props.fetchInitialData ? function () {
      return dispatch((0, _creditCards.getCards)());
    } : function () {
      return null;
    }
  };
})(ConnectedCreditCards);