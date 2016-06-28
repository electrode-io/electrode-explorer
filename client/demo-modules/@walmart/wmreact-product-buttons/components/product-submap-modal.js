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

var _wmreactForms = require("@walmart/wmreact-forms");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubmapModal = function (_Component) {
  (0, _inherits3.default)(SubmapModal, _Component);

  function SubmapModal(props) {
    (0, _classCallCheck3.default)(this, SubmapModal);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this._onContinue = _this._onContinue.bind(_this);
    return _this;
  }

  SubmapModal.prototype._isFirstNameValid = function _isFirstNameValid() {
    return this.refs.firstNameInput.validate();
  };

  SubmapModal.prototype._isLastNameValid = function _isLastNameValid() {
    return this.refs.lastNameInput.validate();
  };

  SubmapModal.prototype._isEmailValid = function _isEmailValid() {
    return this.refs.emailInput.validate();
  };

  SubmapModal.prototype._getFirstName = function _getFirstName() {
    return this.refs.firstNameInput.validate();
  };

  SubmapModal.prototype._getLastName = function _getLastName() {
    return this.refs.lastNameInput.validate();
  };

  SubmapModal.prototype._getEmail = function _getEmail() {
    return this.refs.emailInput.validate();
  };

  SubmapModal.prototype._onContinue = function _onContinue() {
    var isFirstNameValid = this._isFirstNameValid();
    var isLastNameValid = this._isLastNameValid();
    var isEmailValid = this._isEmailValid();
    if (isFirstNameValid && isLastNameValid && isEmailValid) {
      this.props.onContinue({
        firstName: this._getFirstName(),
        lastName: this._getLastName(),
        email: this._getEmail()
      });
    }
  };

  SubmapModal.prototype._renderResponsiveModalContent = function _renderResponsiveModalContent(isMobile, onClose) {
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
      _react2.default.createElement(_wmreactForms.FirstName, { ref: "firstNameInput" }),
      _react2.default.createElement(_wmreactForms.LastName, { ref: "lastNameInput" }),
      _react2.default.createElement(_wmreactForms.Email, { ref: "emailInput" }),
      isMobile ? null : _react2.default.createElement(
        "div",
        { className: "prod-submap-modal-footer" },
        _react2.default.createElement(
          _wmreactInteractive.Button,
          {
            primary: true,
            className: "prod-submap-modal-btn",
            onClick: this._onContinue },
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
  };

  SubmapModal.prototype._renderMobileHeader = function _renderMobileHeader(onClose) {
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
            onClick: this._onContinue },
          "Continue"
        )
      )
    );
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

SubmapModal.displayName = "SubmapModal";

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

SubmapModal.defaultProps = {
  active: false,
  onContinue: function onContinue() {},
  onClose: function onClose() {}
};

exports.default = SubmapModal;