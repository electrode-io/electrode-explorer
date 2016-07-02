"use strict";

exports.__esModule = true;
exports.CaptchaResetPassword = exports.CaptchaForgotEmail = exports.CaptchaForgotPassword = exports.CaptchaSignIn = undefined;

var _electrodeUiConfig = require("@walmart/electrode-ui-config");

var _signIn = require("@walmart/wmreact-member-login/lib/components/sign-in");

var _signIn2 = _interopRequireDefault(_signIn);

var _forgotPassword = require("@walmart/wmreact-member-login/lib/components/forgot-password");

var _forgotPassword2 = _interopRequireDefault(_forgotPassword);

var _forgotPasswordReset = require("@walmart/wmreact-member-login/lib/components/forgot-password-reset");

var _forgotPasswordReset2 = _interopRequireDefault(_forgotPasswordReset);

var _forgotEmail = require("@walmart/wmreact-member-login/lib/components/forgot-email");

var _forgotEmail2 = _interopRequireDefault(_forgotEmail);

var _captcha = require("../common/captcha");

var _captcha2 = _interopRequireDefault(_captcha);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var cyberFendConfig = _electrodeUiConfig.ccm.cyberFendConfig || {};
var googleRecaptchaConfig = _electrodeUiConfig.ccm.googleRecaptchaConfig || {};

var CaptchaSignIn = exports.CaptchaSignIn = (0, _captcha2.default)({
  invokeApiProp: "onSignIn",
  beKey: cyberFendConfig.cyberFendPublicKey || "ZQnKFzXlispHyjE67llCB9tMEQVDm81Q5U7WxC1mBLA",
  reCaptchaSiteKey: googleRecaptchaConfig.reCaptchaSiteKey || "6LcsGRkTAAAAAOfCy3i-m6lX8XqKaYzkMdJ_GJL7"
})(_signIn2.default);

var CaptchaForgotPassword = exports.CaptchaForgotPassword = (0, _captcha2.default)({
  invokeApiProp: "onForgotPassword",
  beKey: cyberFendConfig.cyberFendPublicKey || "ZQnKFzXlispHyjE67llCB9tMEQVDm81Q5U7WxC1mBLA",
  reCaptchaSiteKey: googleRecaptchaConfig.reCaptchaSiteKey || "6LcsGRkTAAAAAOfCy3i-m6lX8XqKaYzkMdJ_GJL7"
})(_forgotPassword2.default);

var CaptchaForgotEmail = exports.CaptchaForgotEmail = (0, _captcha2.default)({
  invokeApiProp: "onForgotEmail",
  beKey: cyberFendConfig.cyberFendPublicKey || "ZQnKFzXlispHyjE67llCB9tMEQVDm81Q5U7WxC1mBLA",
  reCaptchaSiteKey: googleRecaptchaConfig.reCaptchaSiteKey || "6LcsGRkTAAAAAOfCy3i-m6lX8XqKaYzkMdJ_GJL7"
})(_forgotEmail2.default);

var CaptchaResetPassword = exports.CaptchaResetPassword = (0, _captcha2.default)({
  invokeApiProp: ["onResetPasswordRequested", "onNewCodeRequested"],
  beKey: cyberFendConfig.cyberFendPublicKey || "ZQnKFzXlispHyjE67llCB9tMEQVDm81Q5U7WxC1mBLA",
  reCaptchaSiteKey: googleRecaptchaConfig.reCaptchaSiteKey || "6LcsGRkTAAAAAOfCy3i-m6lX8XqKaYzkMdJ_GJL7"
})(_forgotPasswordReset2.default);