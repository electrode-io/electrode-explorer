import { ccm } from "@walmart/electrode-ui-config";

import SignIn from "@walmart/wmreact-user/lib/components/sign-in";
import ForgotPassword from "@walmart/wmreact-user/lib/components/forgot-password";
import ResetPassword from "@walmart/wmreact-user/lib/components/reset-password";
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

export const CaptchaResetPassword = enableCaptcha({
  invokeApiProp: ["onResetPassword", "onNewCodeRequested"],
  beKey: cyberFendConfig.cyberFendPublicKey
    || "ZQnKFzXlispHyjE67llCB9tMEQVDm81Q5U7WxC1mBLA",
  reCaptchaSiteKey: googleRecaptchaConfig.reCaptchaSiteKey
    || "6LcsGRkTAAAAAOfCy3i-m6lX8XqKaYzkMdJ_GJL7"
})(ResetPassword);
