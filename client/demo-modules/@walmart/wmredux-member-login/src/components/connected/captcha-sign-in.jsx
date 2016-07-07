import { ccm } from "@walmart/electrode-ui-config";

import SignIn from "@walmart/wmreact-member-login/lib/components/sign-in";
import ForgotPassword from "@walmart/wmreact-member-login/lib/components/forgot-password";

import ForgotPasswordReset
  from "@walmart/wmreact-member-login/lib/components/forgot-password-reset";
import ForgotEmail from "@walmart/wmreact-member-login/lib/components/forgot-email";
import LostStolen from "@walmart/wmreact-member-login/lib/components/lost-stolen";
import MultipleEmails from "@walmart/wmreact-member-login/lib/components/multiple-emails";

import enableCaptcha from "../common/captcha";

const cyberFendConfig = ccm.cyberFendConfig || {};
const googleRecaptchaConfig = ccm.googleRecaptchaConfig || {};

export const CaptchaSignIn = enableCaptcha({
  invokeApiProp: "onSignIn",
  beKey: cyberFendConfig.cyberFendPublicKey
    || "ZQnKFzXlispHyjE67llCB9tMEQVDm81Q5U7WxC1mBLA",
  reCaptchaSiteKey: googleRecaptchaConfig.reCaptchaSiteKey
    || "6LcsGRkTAAAAAOfCy3i-m6lX8XqKaYzkMdJ_GJL7"
})(SignIn);

export const CaptchaForgotPassword = enableCaptcha({
  invokeApiProp: "onForgotPassword",
  beKey: cyberFendConfig.cyberFendPublicKey
    || "ZQnKFzXlispHyjE67llCB9tMEQVDm81Q5U7WxC1mBLA",
  reCaptchaSiteKey: googleRecaptchaConfig.reCaptchaSiteKey
    || "6LcsGRkTAAAAAOfCy3i-m6lX8XqKaYzkMdJ_GJL7"
})(ForgotPassword);

export const CaptchaForgotEmail = enableCaptcha({
  invokeApiProp: "onForgotEmail",
  beKey: cyberFendConfig.cyberFendPublicKey
    || "ZQnKFzXlispHyjE67llCB9tMEQVDm81Q5U7WxC1mBLA",
  reCaptchaSiteKey: googleRecaptchaConfig.reCaptchaSiteKey
    || "6LcsGRkTAAAAAOfCy3i-m6lX8XqKaYzkMdJ_GJL7"
})(ForgotEmail);

export const CaptchaResetPassword = enableCaptcha({
  invokeApiProp: ["onResetPasswordRequested", "onNewCodeRequested"],
  beKey: cyberFendConfig.cyberFendPublicKey
    || "ZQnKFzXlispHyjE67llCB9tMEQVDm81Q5U7WxC1mBLA",
  reCaptchaSiteKey: googleRecaptchaConfig.reCaptchaSiteKey
    || "6LcsGRkTAAAAAOfCy3i-m6lX8XqKaYzkMdJ_GJL7"
})(ForgotPasswordReset);

export const CaptchaLostStolen = enableCaptcha({
  invokeApiProp: "onLostStolen",
  beKey: cyberFendConfig.cyberFendPublicKey
    || "ZQnKFzXlispHyjE67llCB9tMEQVDm81Q5U7WxC1mBLA",
  reCaptchaSiteKey: googleRecaptchaConfig.reCaptchaSiteKey
    || "6LcsGRkTAAAAAOfCy3i-m6lX8XqKaYzkMdJ_GJL7"
})(LostStolen);

export const CaptchaMultipleEmails = enableCaptcha({
  invokeApiProp: "onMultipleEmail",
  beKey: cyberFendConfig.cyberFendPublicKey
    || "ZQnKFzXlispHyjE67llCB9tMEQVDm81Q5U7WxC1mBLA",
  reCaptchaSiteKey: googleRecaptchaConfig.reCaptchaSiteKey
    || "6LcsGRkTAAAAAOfCy3i-m6lX8XqKaYzkMdJ_GJL7"
})(MultipleEmails);
