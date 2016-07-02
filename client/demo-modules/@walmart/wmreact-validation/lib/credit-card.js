"use strict";

var _isNumber = require("lodash/isNumber");

var _isNumber2 = _interopRequireDefault(_isNumber);

var _isString = require("lodash/isString");

var _isString2 = _interopRequireDefault(_isString);

var _fastLuhn = require("fast-luhn");

var _fastLuhn2 = _interopRequireDefault(_fastLuhn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get a number string with all non-digit characters removed. Useful to normalize credit card
 * account numbers or phone numbers.
 *
 * @param   {string} number  The number string with non-digit characters
 *
 * @returns {string}         Number string with only digit characters.
 */
var normalizeNumber = function normalizeNumber(number) {
  // Cast to string and ensure non-null.
  number = "" + number;
  // remove any character that is not a numerical digit
  return number.replace(/\D/g, "");
}; /* eslint-disable no-invalid-this */

/**
 * Credit Card Class
 *
 * Class to be used when interacting with a Credit Card object.
 *
 * @{param}  {String}  ccNumber  This is the Credit Card number that you can optionally
 *                               new up the credit card view with.
 *
 * Uses:
 * - Validate Bank Card Number
 * - Return the Issuing Network for a given CC number (Amex, VISA)
 * - Format CC number in a more readable form.
 *
 * Example:
 *
 * var creditCard = new CreditCard("1234567891011121")
 * creditCard.isValid()
 * creditCard.getIssuingNetwork
 *
 */


var CreditCard = function CreditCard(ccNumber) {
  if ((0, _isNumber2.default)(ccNumber)) {
    ccNumber = ccNumber.toString();
  }

  this.number = ccNumber;
};

CreditCard.prototype.CARD_TYPES = {
  VISA: "VISA",
  MASTERCARD: "MASTERCARD",
  AMEX: "AMEX",
  DISCOVER: "DISCOVER",
  WMUSGESTORECARD: "WMUSGESTORECARD",
  WMUSGEDISCOVER: "WMUSGEDISCOVER",
  WMMASTERCARD: "WMMASTERCARD"
};

/**
 * isValid  It determines if the number is valid.
 * Evaluates number and ensures it both:
 * 1. Has 15 digits if American Express, 16 digits for all other types
 * 2. Passes luhn's algorithm check.
 *
 * @param {string} number Used for testing purposes only so that a this.number isn't required.
 *
 * @return  {bool}  Returns whether card is valid or not.
 */
CreditCard.prototype.isValid = function (number) {
  number = number || this.number;

  if (!(0, _isString2.default)(number)) {
    return false;
  }

  var normalizedCardNumber = normalizeNumber(number);
  var cardType = this.getIssuingNetwork();

  var passesLuhnCheck = (0, _fastLuhn2.default)(normalizedCardNumber);
  var cardLength = normalizedCardNumber.length;
  var isCorrectLength = cardType === "AMEX" ? cardLength === 15 : cardLength === 16;

  // use luhn algorithm to validate credit card
  // will return true/false depending on whether card number passes check
  return passesLuhnCheck && isCorrectLength;
};

/**
 * isValidGenericCard  Ensures that a card number is 16 digits
 * and contains only numbers (with optional dashes)
 *
 * @param {string} number Used for testing purposes only so that a this.number isn't required.
 *
 * @return  {bool}  Returns whether card is valid or not.
 */
CreditCard.prototype.isValidGenericCard = function (number) {
  number = number || this.number;

  if (!(0, _isString2.default)(number)) {
    return false;
  }

  var isCorrectCharacters = /(^[\s0-9\-]*$)/.test(number);
  var normalizedCardNumber = normalizeNumber(number);

  var isCorrectLength = normalizedCardNumber.length === 16;

  return isCorrectCharacters && isCorrectLength;
};

/**
 * getIssuingNetwork  Determines which Issuing Network (VISA, AMEX)
 *
 * @return  {string}  Returns the name of the Issuing Network
 */
CreditCard.prototype.getIssuingNetwork = function () {
  var cardType = null;

  if (this._isWalmartMasterCard(this.number)) {
    cardType = this.CARD_TYPES.WMMASTERCARD;
  } else if (this._isWalmartCreditCard(this.number)) {
    cardType = this.CARD_TYPES.WMUSGESTORECARD;
  } else if (this._isMasterCard(this.number)) {
    cardType = this.CARD_TYPES.MASTERCARD;
  } else if (this._isVisa(this.number)) {
    cardType = this.CARD_TYPES.VISA;
  } else if (this._isAmex(this.number)) {
    cardType = this.CARD_TYPES.AMEX;
  } else if (this._isDiscover(this.number)) {
    cardType = this.CARD_TYPES.DISCOVER;
  }

  return cardType;
};

/**
 * Adds the appropriate spacing between numbers for credit card numbers
 *
 * @param   {string} cardNumber  Normalized credit card account number
 *
 * @returns {string} Formatted credit card account number
 */
CreditCard.prototype.getFormattedCardNumber = function () {
  var issuingNetwork = this.getIssuingNetwork();
  var number = normalizeNumber(this.number);

  if (issuingNetwork === this.CARD_TYPES.AMEX) {
    // Add spaces after 4th and 10th digit for AmEx formatting
    return number.replace(/(.{4})(.{6})/, "$1 $2 ");
  } else {
    // Add spaces after every 4th digit for Visa, Discover, MC formatting
    return number.replace(/(.{4})(?=.)/g, "$1 ");
  }
};

CreditCard.prototype._isWalmartCreditCard = function (number) {
  return (/^603220((25)|(20)|([137]))/.test(number)
  );
};

CreditCard.prototype._isWalmartMasterCard = function (number) {
  return (/^523914/.test(number)
  );
};

CreditCard.prototype._isAmex = function (number) {
  return (/^3[47]/.test(number)
  );
};

CreditCard.prototype._isVisa = function (number) {
  return (/^4/.test(number)
  );
};

CreditCard.prototype._isMasterCard = function (number) {
  return (/^5[0-5]/.test(number)
  );
};

CreditCard.prototype._isDiscover = function (number) {
  return (/^6([045]|22)/.test(number)
  );
};

module.exports = CreditCard;