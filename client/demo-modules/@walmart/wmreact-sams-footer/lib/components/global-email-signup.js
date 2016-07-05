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

var _email = require("@walmart/wmreact-forms/lib/components/email");

var _email2 = _interopRequireDefault(_email);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _globalFooterItem = require("@walmart/wmreact-footer/lib/components/global-footer-item");

var _globalFooterItem2 = _interopRequireDefault(_globalFooterItem);

var _globalEmailSignupModal = require("@walmart/wmreact-footer/lib/components/global-email-signup-modal");

var _globalEmailSignupModal2 = _interopRequireDefault(_globalEmailSignupModal);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _fireUiEvent = require("@walmart/wmreact-analytics/lib/helpers/fire-ui-event");

var _fireUiEvent2 = _interopRequireDefault(_fireUiEvent);

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
This component displays the form to user
to signup for marketing emails at walmart.com
*/

var GlobalEmailSignup = function (_Component) {
  (0, _inherits3.default)(GlobalEmailSignup, _Component);

  function GlobalEmailSignup(props) {
    (0, _classCallCheck3.default)(this, GlobalEmailSignup);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this._handleFormSubmit = _this._handleFormSubmit.bind(_this);
    return _this;
  }

  GlobalEmailSignup.prototype.componentDidUpdate = function componentDidUpdate(prevProps) {
    if (!prevProps.showModal && this.props.showModal) {
      // Fire email signup analytics if service returns success
      (0, _fireUiEvent2.default)(this, {}, { eventType: "emailSignupSubmit" });
    }
  };

  GlobalEmailSignup.prototype._handleFormSubmit = function _handleFormSubmit(ev) {
    ev.preventDefault();
    var emailInput = this.refs.emailInput;
    var emailId = emailInput.getValue();
    var onEmailSubmitted = this.props.onEmailSubmitted;


    if (emailId && emailInput.validate()) {
      emailInput.clearValue();
      onEmailSubmitted(emailId);
    }
  };

  GlobalEmailSignup.prototype._renderHeader = function _renderHeader(_ref) {
    var campaignId = _ref.campaignId;
    var headerColor = _ref.headerColor;
    var header = _ref.header;
    var emailInfoText = _ref.emailInfoText;
    var link = _ref.link;
    var autoId = _ref.autoId;

    var headerStyle = { color: headerColor };
    var linkSuffix = "link";
    return _react2.default.createElement(
      "div",
      { className: "footer-GlobalEmailSignup-heading", "data-id": campaignId },
      _react2.default.createElement(
        "p",
        { className: "font-semibold", style: headerStyle },
        header
      ),
      _react2.default.createElement(
        "div",
        null,
        emailInfoText + " ",
        _react2.default.createElement(_globalFooterItem2.default, {
          className: "footer-GlobalEmailSignup-link display-inline-block-m",
          link: link,
          autoId: autoId + "-" + linkSuffix })
      )
    );
  };

  GlobalEmailSignup.prototype._renderSignupModal = function _renderSignupModal(_ref2) {
    var showModal = _ref2.showModal;
    var emailId = _ref2.emailId;
    var emailInfoText = _ref2.emailInfoText;
    var emailExclusions = _ref2.emailExclusions;
    var autoId = _ref2.autoId;
    var moduleData = _ref2.moduleData;
    var onModalClose = _ref2.onModalClose;
    var isMobile = _ref2.isMobile;
    var link = moduleData.configs.link;

    return _react2.default.createElement(_globalEmailSignupModal2.default, {
      isMobile: isMobile,
      onModalClose: onModalClose,
      showModal: showModal,
      emailId: emailId,
      link: link,
      emailInfoText: emailInfoText,
      emailExclusions: emailExclusions,
      autoId: autoId + "-modal" });
  };

  GlobalEmailSignup.prototype._renderEmailForm = function _renderEmailForm(_ref3) {
    var autoId = _ref3.autoId;
    var loading = _ref3.loading;
    var emailExclusions = _ref3.emailExclusions;

    var formSuffix = "form";
    var formInputSuffix = "formInput";
    var formButtonSuffix = "formButton";
    return _react2.default.createElement(
      "div",
      { className: "footer-GlobalEmailSignup-form display-inline-block valign-top" },
      _react2.default.createElement(
        "form",
        (0, _extends3.default)({ onSubmit: this._handleFormSubmit
        }, (0, _automationIdUtils.getDataAutomationIdPair)(formSuffix, autoId)),
        _react2.default.createElement(_email2.default, (0, _extends3.default)({
          isRequiredField: false,
          ref: "emailInput",
          showLabel: false,
          labelText: "Enter Email address",
          placeholderText: "Email address"
        }, (0, _automationIdUtils.getDataAutomationIdPair)(formInputSuffix, autoId))),
        _react2.default.createElement(
          _button2.default,
          (0, _extends3.default)({ type: "submit", primary: true, spinner: loading
          }, (0, _automationIdUtils.getDataAutomationIdPair)(formButtonSuffix, autoId)),
          "Sign Up"
        ),
        _react2.default.createElement(
          "div",
          { className: "footer-GlobalEmailSignup-form-exclusions" },
          emailExclusions
        )
      )
    );
  };

  GlobalEmailSignup.prototype.render = function render() {
    var _props = this.props;
    var _props$moduleData = _props.moduleData;
    var type = _props$moduleData.type;
    var moduleId = _props$moduleData.moduleId;
    var configs = _props$moduleData.configs;
    var autoId = _props.autoId;


    return _react2.default.createElement(
      _collectorContext2.default,
      { moduleId: moduleId },
      _react2.default.createElement(
        "div",
        (0, _extends3.default)({ className: "footer-GlobalEmailSignup", "data-module": type, "data-module-id": moduleId
        }, (0, _automationIdUtils.getDataAutomationIdPair)(autoId, "")),
        this._renderHeader(configs),
        this._renderEmailForm(this.props),
        this._renderSignupModal(this.props)
      )
    );
  };

  return GlobalEmailSignup;
}(_react.Component);

GlobalEmailSignup.displayName = "GlobalEmailSignup";

GlobalEmailSignup.propTypes = {
  /**
   check mobile device
   */
  isMobile: _react.PropTypes.bool,
  /**
   Tempo module Data
   */
  moduleData: _react.PropTypes.shape({
    type: _react.PropTypes.string,
    moduleId: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      campaignId: _react.PropTypes.string,
      emailInfoText: _react.PropTypes.string,
      emailExclusions: _react.PropTypes.string,
      headerColor: _react.PropTypes.string,
      header: _react.PropTypes.string.isRequired,
      link: _react.PropTypes.shape({
        linkText: _react.PropTypes.string.isRequired,
        clickThrough: _react.PropTypes.shape({
          value: _react.PropTypes.string.isRequired
        })
      })
    }).isRequired
  }).isRequired,
  /**
   Show modal with customer Email
   */
  showModal: _react.PropTypes.bool,
  /**
   Callback trigger on modal close.
   */
  onModalClose: _react.PropTypes.func,
  /**
   Pass value of the email box to set showModal
   */
  onEmailSubmitted: _react.PropTypes.func.isRequired,
  /**
  Used for generating unique automation id's
  */
  autoId: _react.PropTypes.string,
  emailId: _react.PropTypes.string,
  loading: _react.PropTypes.bool,
  didInvalidate: _react.PropTypes.bool
};

GlobalEmailSignup.defaultProps = {
  isMobile: false,
  moduleData: {
    type: "",
    moduleId: "",
    configs: {
      campaignId: "",
      emailInfoText: "",
      emailExclusions: "",
      headerColor: "",
      header: "",
      link: {
        linkText: "",
        clickThrough: {
          value: ""
        }
      }
    }
  },
  showModal: false,
  onModalClose: function onModalClose() {},
  autoId: "",
  emailId: ""
};

GlobalEmailSignup.contextTypes = {
  analytics: _react.PropTypes.object
};

exports.default = GlobalEmailSignup;