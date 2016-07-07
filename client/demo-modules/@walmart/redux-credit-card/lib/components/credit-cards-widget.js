"use strict";

exports.__esModule = true;

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactRedux = require("react-redux");

var _connectedCreditCards = require("./connected-credit-cards");

var _connectedCreditCards2 = _interopRequireDefault(_connectedCreditCards);

var _index = require("../redux/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This component is to be used if you are looking for a drop in credit-card solution
 * If you want to use your own provider, look into connected-credit-cards
 * All props you set, store excepted, will get sent on to connected-credit-cards
 */

var CreditCardWidget = function (_React$Component) {
  (0, _inherits3.default)(CreditCardWidget, _React$Component);

  function CreditCardWidget(props) {
    (0, _classCallCheck3.default)(this, CreditCardWidget);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this));

    _this._store = props.store || (0, _index2.default)();
    return _this;
  }

  CreditCardWidget.prototype.render = function render() {
    var _props = this.props;
    var store = _props.store;
    var props = (0, _objectWithoutProperties3.default)(_props, ["store"]);

    return _react2.default.createElement(
      _reactRedux.Provider,
      { store: this._store },
      _react2.default.createElement(_connectedCreditCards2.default, props)
    );
  };

  return CreditCardWidget;
}(_react2.default.Component);

CreditCardWidget.propTypes = {
  fetchInitialData: _react2.default.PropTypes.bool,
  /** if not set, the component will create its own store from redux/index */
  store: _react2.default.PropTypes.object
};

exports.default = CreditCardWidget;