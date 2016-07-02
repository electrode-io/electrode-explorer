import React from "react";

export default {
  /*eslint-disable camelcase*/
  user_auth_fail: {
    alertType: "error",
    message: (<span>{`Your password and email do not match. Please try again or `}
      <button className="js-reset-password-link btn-fake-link">
        {` reset your password`}
      </button>.
    </span>)
  },

  user_locked: {
    alertType: "error",
    message: (<span>{`Your account has been temporarily locked due to
    too many failed sign-in attempts. Please try again shortly or `}
      <button className="js-reset-password-link btn-fake-link">
        {` reset your password`}
      </button>.
    </span>)
  },

  ca_user_deleted: {
    alertType: "error",
    message: "Your password and email address do not match. Please try again."
  },

  ca_user_not_found: {
    alertType: "error",
    message: "Your password and email address do not match. Please try again."
  },

  account_already_exist: {
    alertType: "warning",
    message: "A SamsClub.com account already exists for membership #"
  },

  validation_fail: {
    alertType: "error",
    message: (<span>{`Please correct the errors below. Didn't receive your code? `}
      <button className="js-request-code-link btn-fake-link">
        {` Request a new one`}
      </button>.
    </span>)
  },

  unregistered_email: {
    alertType: "error",
    message: `This email isn't associated with an account.
      Please try a different email.`
  },

  invalid_passcode: {
    alertType: "error",
    message: (<span>{`Your verification code is invalid. Please try again or `}
      <button className="js-request-code-link btn-fake-link">
        {` request a new one`}
      </button>.
    </span>),
    fields: {
      passcode: `Your verification code is invalid.`
    }
  },

  expired_passcode: {
    alertType: "error",
    message: (<span>{`Your verification code has expired. `}
      <button className="js-request-code-link btn-fake-link">
        {` Please request a new one`}
      </button>.
    </span>)
  },

  invalid_email: {
    alertType: "error",
    message: `Please enter the email where we sent the verification code.`
  },

  cf_is_bot: {
    alertType: "warning",
    message: "Bot detected"
  },

  /*
   * Reset password alert states.
   * We try to use these smartly for header/success states as well
   */
  request_new_code_success: {
    alertType: "success",
    message: "A new verification code has been sent to:",
    altMessageText: (<span>{`Didn't receive your code? `}
      <button
        className="js-request-code-link btn-fake-link font-semibold">
        {` Request a new one`}
      </button>
    </span>)
  },

  /*
   * Forgot password account compromised message
   */
  compromised_message_alert: {
    code: "user_compromised",
    alertType: "warning",
    message: (<span>{`Due to unusual attempts to sign in to your account,
      we have reset your password as a security measure. `}
      <p>{` To access your account follow the instructions below.`}</p>
    </span>)
  },

  membership_invalid: {
    alertType: "error",
    message: `Something doesn't match. Can you try again?`
  },

  generic: {
    alertType: "error",
    message: `We're having trouble with your request.
      Please wait a moment and then try again.`
  },
  /*eslint-enable camelcase*/

  getAlert(key) {
    const knownError = this[key];

    return {
      ...(knownError || this.generic),
      isKnownError: !!knownError
    };
  },

  getFieldAlerts(key) {
    return this[key] && this[key].fields;
  },

  getReduxFormError(rawError = {}) {
    return {
      _error: {
        ...rawError,
        ...this.getAlert(rawError.code)
      },
      ...this.getFieldAlerts(rawError.code)
    };
  }
};
