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

var _connectedGiftCards = require("./connected-gift-cards");

var _connectedGiftCards2 = _interopRequireDefault(_connectedGiftCards);

var _index = require("../redux/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GiftCardWidget = function (_React$Component) {
  (0, _inherits3.default)(GiftCardWidget, _React$Component);

  function GiftCardWidget(props) {
    (0, _classCallCheck3.default)(this, GiftCardWidget);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this));

    _this._store = props.store || (0, _index2.default)();
    return _this;
  }

  GiftCardWidget.prototype.render = function render() {
    return _react2.default.createElement(
      _reactRedux.Provider,
      { store: this._store },
      _react2.default.createElement(_connectedGiftCards2.default, this.props)
    );
  };

  return GiftCardWidget;
}(_react2.default.Component);

GiftCardWidget.propTypes = {
  fetchInitialData: _react2.default.PropTypes.bool,
  store: _react2.default.PropTypes.object
};

GiftCardWidget.defaultProps = {
  fetchInitialData: true
};

exports.default = GiftCardWidget;