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

var _connectedShippingPass = require("./connected-shipping-pass");

var _connectedShippingPass2 = _interopRequireDefault(_connectedShippingPass);

var _index = require("../redux/index");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProvidedShippingPass = function (_React$Component) {
  (0, _inherits3.default)(ProvidedShippingPass, _React$Component);

  function ProvidedShippingPass(props) {
    (0, _classCallCheck3.default)(this, ProvidedShippingPass);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this));

    _this._store = props.store || (0, _index2.default)();
    return _this;
  }

  ProvidedShippingPass.prototype.render = function render() {
    return _react2.default.createElement(
      _reactRedux.Provider,
      { store: this._store },
      _react2.default.createElement(_connectedShippingPass2.default, this.props)
    );
  };

  return ProvidedShippingPass;
}(_react2.default.Component);

ProvidedShippingPass.propTypes = {
  store: _react2.default.PropTypes.object
};

exports.default = ProvidedShippingPass;