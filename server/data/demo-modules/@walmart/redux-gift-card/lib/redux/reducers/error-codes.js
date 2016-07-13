"use strict";

exports.__esModule = true;
/* eslint-disable camelcase */
exports.default = {
  gift_card_must_have_positive_balance: {
    message: "This card has $0.00 balance. Please enter a different gift card below or use" + " another payment method."
  },
  gift_card_zero_balance_with_gift_card: {
    message: "This card has $0.00 balance. Please enter a different gift card below or pay" + " your remaining balance with a credit card."
  },
  gift_card_zero_balance_with_credit_card: {
    message: "This card has $0.00 balance. If you have another gift card, please enter it" + " below."
  },
  invalid_gift_card: {
    message: "The gift card number and PIN you entered do not match. Please try again.",
    type: "error"
  },
  history_fetch_error: {
    message: "We're having trouble when fetching history. Please try again.",
    type: "error"
  },
  duplicate_gift_card: {
    message: "You've already saved this gift card. Please cancel and select it above.",
    type: "error"
  },
  payment_applied_multiple_times: {
    message: "You've already saved this gift card. Please cancel and select it above."
  },
  unknown: {
    message: "We're having trouble with your request. Please wait a moment and then try again."
  },
  401: {
    message: "Your session has expired or you haven't login. Please login."
  }
};
/* eslint-enable camelcase */