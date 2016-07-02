"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _config = require("../../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AltMessageComponent = function AltMessageComponent(props) {
  var altMessageText = props.altMessageText;
  var altLinkText = props.altLinkText;
  var onNewCodeRequested = props.onNewCodeRequested;
  var onForgotPasswordRequested = props.onForgotPasswordRequested;
  var email = props.fields.email;
  var automation = props.automation;
  var tealeaf = props.tealeaf;
  var error = props.error;


  var wrapAction = function wrapAction(cb) {
    return function (data) {
      _config2.default.logger.log("On Submit", { event: "submit", form: "ResendToken" });
      return cb(data);
    };
  };
  var btnAction = error && error.code === "unregistered_email" ? onForgotPasswordRequested : wrapAction(onNewCodeRequested);

  return _react2.default.createElement(
    "p",
    { className: "no-margin" },
    altMessageText && altMessageText + " ",
    altLinkText && _react2.default.createElement(
      _button2.default,
      {
        fakelink: true,
        onClick: function onClick() {
          return btnAction({ email: email.value });
        },
        automationId: automation.newCodeBtnLink,
        tealeafId: tealeaf.newCodeBtnLink },
      altLinkText
    )
  );
};

exports.default = AltMessageComponent;