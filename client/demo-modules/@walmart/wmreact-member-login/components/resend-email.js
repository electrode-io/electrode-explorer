"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _iconEmail1x = require("@walmart/icons-set/icons/pngs/icon-email-1x.png");

var _iconEmail1x2 = _interopRequireDefault(_iconEmail1x);

var _reactRouter = require("react-router");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ResendEmail = function (_React$Component) {
  _inherits(ResendEmail, _React$Component);

  function ResendEmail() {
    _classCallCheck(this, ResendEmail);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ResendEmail).apply(this, arguments));
  }

  _createClass(ResendEmail, [{
    key: "render",
    value: function render() {
      var _props = this.props;
      var titleText = _props.titleText;
      var bodyText = _props.bodyText;
      var resendLinkText = _props.resendLinkText;
      var resendEmailRoute = _props.resendEmailRoute;

      return _react2.default.createElement(
        "section",
        { className: "resend-email" },
        _react2.default.createElement("img", { src: _iconEmail1x2.default }),
        _react2.default.createElement(
          "h2",
          { className: "main-msg" },
          titleText
        ),
        _react2.default.createElement(
          "label",
          { className: "detailed-msg" },
          bodyText
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          {
            to: resendEmailRoute,
            className: "forgot-link resend-email-link",
            automationId: this.props.automation.resendEmailLinkBtn,
            tealeafId: this.props.tealeaf.resendEmailLinkBtn },
          resendLinkText
        )
      );
    }
  }]);

  return ResendEmail;
}(_react2.default.Component);

ResendEmail.propTypes = {
  // Configurable props
  onResendEmailRequested: _react.PropTypes.func.isRequired,
  titleText: _react.PropTypes.string.required,
  bodyText: _react.PropTypes.string.required,
  resendEmailRoute: _react.PropTypes.string,
  resendLinkText: _react.PropTypes.string.required,
  //Automation id defaults
  automation: _react.PropTypes.shape({
    resendEmailLinkBtn: _react.PropTypes.string
  }),
  //Tealeaf id's
  tealeaf: _react.PropTypes.shape({
    resendEmailLinkBtn: _react.PropTypes.string
  })
};

ResendEmail.defaultProps = {
  automation: {
    resendEmailLinkBtn: "resend-email-link"
  },
  tealeaf: {
    resendEmailLinkBtn: "resend-email-link"
  }
};

exports.default = ResendEmail;