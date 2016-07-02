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

var _wmreactInteractive = require("@walmart/wmreact-interactive");

var _wmreactContainers = require("@walmart/wmreact-containers");

var _wmreactStatelessFields = require("@walmart/wmreact-stateless-fields");

var _validators = require("@walmart/wmreact-validation/lib/validators");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubmapModal = function (_Component) {
  (0, _inherits3.default)(SubmapModal, _Component);

  function SubmapModal() {
    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, SubmapModal);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, _Component.call.apply(_Component, [this].concat(args))), _this), _this.state = {
      firstName: null,
      lastName: null,
      email: null
    }, _this._onBlur = function (type) {
      return function (e) {
        var _this$setState;

        return _this.setState((_this$setState = {}, _this$setState["" + type] = e.target.value, _this$setState));
      };
    }, _this._onContinue = function () {
      var _this$state = _this.state;
      var firstName = _this$state.firstName;
      var lastName = _this$state.lastName;
      var email = _this$state.email;

      if (_this._isFirstNameValid(firstName) && _this._isLastNameValid(lastName) && _this._isEmailValid(email)) {
        _this.props.onContinue({ firstName: firstName, lastName: lastName, email: email });
      } else {
        // re-render UI to show error warning
        _this.setState({
          firstName: firstName || "",
          lastName: lastName || "",
          email: email || ""
        });
      }
    }, _this._renderResponsiveModalContent = function (isMobile, onClose) {
      var _this$state2 = _this.state;
      var firstName = _this$state2.firstName;
      var lastName = _this$state2.lastName;
      var email = _this$state2.email;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h2",
          { className: "heading-b prod-submap-modal-title" },
          "Enter your name and email to reveal this low price"
        ),
        _react2.default.createElement(
          "p",
          null,
          "Because our price for this item is below the manufacturer’s minimum advertised price, they require us to collect your name and email address before we can show it to you—don’t worry, this will not opt you into Walmart emails. You can remove the item from your cart at any time."
        ),
        _react2.default.createElement(_wmreactStatelessFields.Field, {
          label: "First name",
          onBlur: _this._onBlur("firstName"),
          touched: firstName !== null && !_this._isFirstNameValid(firstName),
          error: "This information is required" }),
        _react2.default.createElement(_wmreactStatelessFields.Field, {
          label: "Last name",
          onBlur: _this._onBlur("lastName"),
          touched: lastName !== null && !_this._isLastNameValid(lastName),
          error: "This information is required" }),
        _react2.default.createElement(_wmreactStatelessFields.Field, {
          label: "Email",
          onBlur: _this._onBlur("email"),
          touched: email !== null && !_this._isEmailValid(email),
          error: "Please enter a valid email address." }),
        isMobile ? null : _react2.default.createElement(
          "div",
          { className: "prod-submap-modal-footer" },
          _react2.default.createElement(
            _wmreactInteractive.Button,
            {
              primary: true,
              className: "prod-submap-modal-btn",
              onClick: _this._onContinue },
            "Continue"
          ),
          _react2.default.createElement(
            "button",
            {
              className: "btn-fake-link",
              onClick: onClose
            },
            "Cancel"
          )
        )
      );
    }, _this._renderMobileHeader = function (onClose) {
      return _react2.default.createElement(
        "div",
        { className: "Grid Grid--gutters" },
        _react2.default.createElement(
          "div",
          { className: "Grid-col u-size-1-2" },
          _react2.default.createElement(
            _wmreactInteractive.Button,
            {
              className: "btn-block btn-large",
              inverse: true,
              onClick: onClose },
            "Cancel"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "Grid-col u-size-1-2" },
          _react2.default.createElement(
            _wmreactInteractive.Button,
            {
              primary: true,
              className: "prod-submap-modal-btn btn-block btn-large",
              onClick: _this._onContinue },
            "Continue"
          )
        )
      );
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  SubmapModal.prototype._isEmailValid = function _isEmailValid(email) {
    return _validators.email.validate(email);
  };

  SubmapModal.prototype._isFirstNameValid = function _isFirstNameValid(name) {
    return _validators.firstname.validate(name || "");
  };

  SubmapModal.prototype._isLastNameValid = function _isLastNameValid(name) {
    return _validators.lastname.validate(name || "");
  };

  SubmapModal.prototype.render = function render() {
    var _props = this.props;
    var active = _props.active;
    var onClose = _props.onClose;

    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        _wmreactContainers.SlidePanel,
        {
          header: this._renderMobileHeader(onClose),
          className: "prod-submap-slide-panel hide-content-m",
          active: active,
          onClose: onClose,
          direction: "bottom" },
        active && this._renderResponsiveModalContent(true)
      ),
      _react2.default.createElement(
        _wmreactContainers.Modal,
        {
          className: "Modal--small hide-content-max-m prod-submap-modal",
          active: active,
          padded: true,
          onClose: onClose,
          fixed: true },
        active && this._renderResponsiveModalContent(null, onClose)
      )
    );
  };

  return SubmapModal;
}(_react.Component);
/*eslint no-invalid-this:0*/


SubmapModal.defaultProps = {
  active: false,
  onContinue: function onContinue() {},
  onClose: function onClose() {}
};
SubmapModal.propTypes = {
  /**
   Used to hide and show modal
   */
  active: _react.PropTypes.bool,
  /**
   Used to submit the from
   */
  onContinue: _react.PropTypes.func,
  /**
   Used to close modal
   */
  onClose: _react.PropTypes.func
};
exports.default = SubmapModal;