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

var _redux = require("redux");

var _shippingPass = require("../redux/action-creators/shipping-pass");

var _message = require("@walmart/wmreact-forms/lib/components/message");

var _message2 = _interopRequireDefault(_message);

var _shippingPassWell = require("../components/shipping-pass-well");

var _shippingPassWell2 = _interopRequireDefault(_shippingPassWell);

var _infoWell = require("../components/info-well");

var _infoWell2 = _interopRequireDefault(_infoWell);

var _constants = require("../redux/types/constants");

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConnectedShippingPass = function (_React$Component) {
  (0, _inherits3.default)(ConnectedShippingPass, _React$Component);

  function ConnectedShippingPass(props) {
    (0, _classCallCheck3.default)(this, ConnectedShippingPass);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    props.getSubscriptionStatus();
    return _this;
  }

  ConnectedShippingPass.prototype._renderErrorMessage = function _renderErrorMessage() {
    var _messages;

    var errorMessage = arguments.length <= 0 || arguments[0] === undefined ? constants.DEFAULT : arguments[0];

    var messages = (_messages = {}, _messages[constants.DEFAULT] = "with your request", _messages[constants.GET_SUBSCRIPTION_STATUS] = "retrieving your ShippingPass subscription information", _messages[constants.UPDATE_AUTO_RENEW] = "updating your ShippingPass renewal preference", _messages[constants.UPDATE_PAYMENT_PREF] = "updating your ShippingPass subscription payment method", _messages);

    return _react2.default.createElement(
      _message2.default.Error,
      { block: true },
      "There was a problem ",
      messages[errorMessage],
      ". Please try again later."
    );
  };

  ConnectedShippingPass.prototype.render = function render() {
    var _props = this.props;
    var errorMessage = _props.errorMessage;
    var successMessage = _props.successMessage;


    return _react2.default.createElement(
      "div",
      { className: "shipping-pass-wrapper-container" },
      errorMessage ? this._renderErrorMessage(errorMessage) : successMessage && _react2.default.createElement(
        _message2.default.Success,
        { block: true },
        "Your subscription payment method has been successfully updated."
      ),
      _react2.default.createElement(
        "div",
        { className: "shipping-pass-background" },
        _react2.default.createElement(
          "div",
          { className: "well-background" },
          _react2.default.createElement(_shippingPassWell2.default, this.props)
        ),
        _react2.default.createElement(
          "div",
          { className: "well-background" },
          _react2.default.createElement(_infoWell2.default, this.props)
        )
      )
    );
  };

  return ConnectedShippingPass;
}(_react2.default.Component);

ConnectedShippingPass.propTypes = {
  autoRenew: _react2.default.PropTypes.bool,
  errorMessage: _react2.default.PropTypes.any,
  getSubscriptionStatus: _react2.default.PropTypes.func,
  logo: _react2.default.PropTypes.any,
  renewalDate: _react2.default.PropTypes.string,
  successMessage: _react2.default.PropTypes.bool,
  url: _react2.default.PropTypes.string
};

ConnectedShippingPass.defaultProps = {
  logo: "https://ll-us-i5.wal.co/dfw/63fd9f59-7052/ \n" + "k2-_172e318e-3f2f-4ba6-9a9f-f533fb0341b3.v1.svg-70748dd17a5ac3fe08acc57256b45d83881d3337",
  url: "https://i5.walmartimages.com/ \n" + "dfw/9fa19e5c-82/k2-_ffadaccd-41be-44c9-be65-82825125cd17.v1.html"
};

var mapStateToProps = function mapStateToProps() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  return (0, _extends3.default)({}, state.shippingPass);
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return (0, _redux.bindActionCreators)({
    getModalInfo: _shippingPass.getModalInfo,
    getSubscriptionStatus: _shippingPass.getSubscriptionStatus,
    updateAutoRenew: _shippingPass.updateAutoRenew,
    updatePaymentPref: _shippingPass.updatePaymentPref
  }, dispatch);
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(ConnectedShippingPass);