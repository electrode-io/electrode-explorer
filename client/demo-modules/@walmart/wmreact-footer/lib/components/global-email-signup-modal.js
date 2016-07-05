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

var _slidepanel = require("@walmart/wmreact-containers/lib/components/slidepanel");

var _slidepanel2 = _interopRequireDefault(_slidepanel);

var _modal = require("@walmart/wmreact-containers/lib/components/modal");

var _modal2 = _interopRequireDefault(_modal);

var _globalFooterItem = require("./global-footer-item");

var _globalFooterItem2 = _interopRequireDefault(_globalFooterItem);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
This component displays the confermation modal to user
when they signup for emails.

@import {GlobalEmailSignupModal}
@flags noVisibleRender
@component GlobalEmailSignupModal
@playground
Global Email Signup Modal
```
<GlobalEmailSignupModal showModal={true} emailId="a@a.com" link={
  {
    "linkText": "Walmart MoneyCenter",
    "title": "Walmart MoneyCenter",
    "clickThrough": {
      "type": "url",
      "value": "http:\/\/www-e16.walmart.com\/instantcredit"
    },
    "uid": "iyoJypI4"
  }
}/>
```
*/

var GlobalEmailSignupModal = function (_Component) {
  (0, _inherits3.default)(GlobalEmailSignupModal, _Component);

  function GlobalEmailSignupModal() {
    (0, _classCallCheck3.default)(this, GlobalEmailSignupModal);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  GlobalEmailSignupModal.prototype._renderResponsiveModalContent = function _renderResponsiveModalContent(link, emailId) {
    var emailSuffix = "emailId";
    var linkSuffix = "link";
    var autoId = this.props.autoId;

    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "h2",
        { className: "footer-GlobalEmailSignupModal-heading heading-d" },
        "Thank you for signing up!"
      ),
      _react2.default.createElement(
        "p",
        { className: "footer-GlobalEmailSignupModal-text" },
        "You’ll receive an email shortly at: ",
        _react2.default.createElement(
          "span",
          (0, _extends3.default)({ className: "footer-GlobalEmailSignupModal-emailId font-semibold"
          }, (0, _automationIdUtils.getDataAutomationIdPair)(emailSuffix, autoId)),
          emailId
        )
      ),
      _react2.default.createElement(
        "p",
        { className: "footer-GlobalEmailSignupModal-text" },
        "For even more access to Walmart values, including special in-app savings, download the Walmart App today."
      ),
      _react2.default.createElement(
        "p",
        { className: "footer-GlobalEmailSignupModal-text" },
        "Here at Walmart.com, we are committed to protecting your privacy. Your email address will never be sold or distributed to a third party for any reason. Please take a minute to review our ",
        _react2.default.createElement(_globalFooterItem2.default, { newTab: true, link: link, autoId: autoId + "-" + linkSuffix }),
        "."
      )
    );
  };

  GlobalEmailSignupModal.prototype._renderSlidePanel = function _renderSlidePanel(_ref) {
    var showModal = _ref.showModal;
    var onModalClose = _ref.onModalClose;
    var link = _ref.link;
    var emailId = _ref.emailId;

    return _react2.default.createElement(
      "div",
      { className: "hide-content-m" },
      _react2.default.createElement(
        _slidepanel2.default,
        { active: showModal,
          ref: "emailSlidePanel", onClose: onModalClose, direction: "bottom" },
        showModal && this._renderResponsiveModalContent(link, emailId)
      )
    );
  };

  GlobalEmailSignupModal.prototype._renderModal = function _renderModal(_ref2) {
    var showModal = _ref2.showModal;
    var onModalClose = _ref2.onModalClose;
    var link = _ref2.link;
    var emailId = _ref2.emailId;

    return _react2.default.createElement(
      "div",
      { className: "hide-content-max-m" },
      _react2.default.createElement(
        _modal2.default,
        { active: showModal, padded: true,
          ref: "emailModal", onClose: onModalClose, fixed: true },
        showModal && this._renderResponsiveModalContent(link, emailId)
      )
    );
  };

  GlobalEmailSignupModal.prototype.render = function render() {
    var _props = this.props;
    var isMobile = _props.isMobile;
    var autoId = _props.autoId;

    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({ className: "footer-GlobalEmailSignupModal"
      }, (0, _automationIdUtils.getDataAutomationIdPair)(autoId, "", process)),
      this._renderSlidePanel(this.props),
      !isMobile && this._renderModal(this.props)
    );
  };

  return GlobalEmailSignupModal;
}(_react.Component);

GlobalEmailSignupModal.displayName = "GlobalEmailSignupModal";

GlobalEmailSignupModal.propTypes = {
  /**
   check mobile device
   */
  isMobile: _react.PropTypes.bool,
  /**
   Used to hide and show modal
   */
  showModal: _react.PropTypes.bool,
  /**
   Show email id for customer
   */
  emailId: _react.PropTypes.string.isRequired,
  /**
   Show Privacy link in the modal
   */
  link: _react.PropTypes.shape({
    linkText: _react.PropTypes.string.isRequired,
    clickThrough: _react.PropTypes.shape({
      value: _react.PropTypes.string.isRequired
    })
  }),
  /**
  Used for generating unique automation id's
  */
  autoId: _react.PropTypes.string,
  onModalClose: _react.PropTypes.func
};

GlobalEmailSignupModal.defaultProps = {
  isMobile: false,
  showModal: false,
  link: {
    linkText: "",
    clickThrough: {
      value: ""
    }
  },
  autoId: "",
  onModalClose: function onModalClose() {}
};

exports.default = GlobalEmailSignupModal;