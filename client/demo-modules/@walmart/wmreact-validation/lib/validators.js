"use strict";

var _parseInt = require("babel-runtime/core-js/number/parse-int");

var _parseInt2 = _interopRequireDefault(_parseInt);

var _isFinite = require("lodash/isFinite");

var _isFinite2 = _interopRequireDefault(_isFinite);

var _trim = require("lodash/trim");

var _trim2 = _interopRequireDefault(_trim);

var _creditCard = require("./credit-card");

var _creditCard2 = _interopRequireDefault(_creditCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// http://stackoverflow.com/a/46181/11236 modified to exclude forward slashes
var EMAIL_PATTERN = /(([^<>()[\]\\\/.,;:\s@\"]+(\.[^<>()[\]\\\/.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/; // eslint-disable-line max-len
/**
 * Master Client Side Validator List
 * See https://confluence.walmart.com/display/USFEFER/Cross-Track+Field+Validation+Matrix for specs.
 */
var addressExp = /(^[a-zA-Z\s0-9\-\.\/#,'\&@\(\)]*$)/;
var atLeastOneLetterExp = /.*[a-zA-Z].*/;
var cardNameExp = /^[a-z0-9,'\s\-\.\/]+$/i;
var cityExp = /(^[a-zA-Z\s0-9\-\.,']*$)/;
// Matches yyyy-mm-dd (HTML5 output) and mm/dd/yyyy (non-HTML5, masked output)
var dobPattern = /^[^0\D]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$|^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/[^0\D]\d{3}$/; // eslint-disable-line max-len
var emailExp = new RegExp("^" + EMAIL_PATTERN.source + "$");
var emailsExp = new RegExp("^(?:" + (EMAIL_PATTERN.source + /(?:\s*[,\s]\s*|\s*$)/.source) + ")+$");
var fullNameExp = /^[a-zA-Z\,\.'\-\/]+\s+[a-zA-Z ,.'\-\/]+$/;
var legalTextExp = /^[a-z0-9\u00C0-\u017F\s\.\,\-\'\!]*$/i;
var legalTextareaExp = /^[a-z0-9\u00C0-\u017F\s\.\,\-\'\!\$\%\(\)\+\=\\\/\?]*$/i;
var nameExp = /^[0-9a-záéíóúüñ,'\-\.\/\s]+$/i;
var digitSpaceAndSymbolsExp = /[\d,'\-\.\/\s]/g;
var orderNumberExp = /^\d{6}$|(^\d{13}$)|(^\d{7}-\d{6}$)/;
var passwordExp = /^([^\s]{6,12}$)/;
var phoneExp = /(^[\s0-9/\(\)\-]*$)/;
var postalCodeExp = /(^\d{5}(\-\d{4})?$)/;
var ukPostalCodeExp = /^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/; // eslint-disable-line max-len
var samsMembershipExp = /^(?:\d{13}|\d{17})$/;

// private method
var nameTokenValidator = function nameTokenValidator(val) {
  return !!(val.length <= 25 && nameExp.test(val) &&
  // string does not only contain digits, spaces and symbols only
  val.replace(digitSpaceAndSymbolsExp, "").length);
};

var validations = {
  address1: {
    validate: function validate(val) {
      var isCorrectLength = val ? val.length <= 50 : true;
      var isCorrectCharacters = addressExp.test(val);
      var atLeastOneLetters = atLeastOneLetterExp.test(val);

      return isCorrectLength && isCorrectCharacters && atLeastOneLetters;
    },

    message: "Please enter a valid street address."
  },

  address2: {
    validate: function validate(val) {
      var isCorrectLength = val ? val.length <= 50 : true;
      var isCorrectCharacters = addressExp.test(val);

      return isCorrectLength && isCorrectCharacters;
    },

    message: "Please enter valid address details."
  },

  postalcode: {
    validate: function validate(val) {
      return postalCodeExp.test(val);
    },

    message: "Please enter a valid zip code."
  },

  ukpostalcode: {
    validate: function validate(val) {
      return ukPostalCodeExp.test(val);
    },

    message: "Please enter a valid postal code."
  },

  city: {
    validate: function validate(val) {
      var isCorrectLength = val.length <= 30;
      var isCorrectCharacters = cityExp.test(val);
      var atLeastOneLetters = atLeastOneLetterExp.test(val);

      return isCorrectLength && isCorrectCharacters && atLeastOneLetters;
    },

    message: "Please enter a valid city."
  },

  userLocation: {
    validate: function validate(val) {
      // Check that first character is alphanumeric, rest can be alphanumeric/comma/space/dash
      var isValidLocation = /^[a-zA-Z0-9][a-zA-Z\s0-9\-,']*$/.test(val);
      var isPostalNumber = /^[\d-]*$/.test(val);
      var isValidPostalcode = validations.postalcode.validate(val);

      return isValidPostalcode || !isPostalNumber && isValidLocation;
    },

    message: "Please enter a valid city, state or zip code."
  },

  email: {
    validate: function validate(val) {
      var maxLen = val.length <= 70;

      return emailExp.test((0, _trim2.default)(val)) && maxLen;
    },

    message: "Please enter a valid email address."
  },

  multiemail: {
    validate: function validate(val) {
      return emailsExp.test(val);
    },

    message: "Please enter valid email addresses separated by comma or whitespace."
  },

  password: {
    validate: function validate(val) {
      // accept alphabets, numbers and special character, minimum 6 char and maximum 12 char.
      return passwordExp.test(val);
    },

    message: "Must contain 6-12 characters. No spaces."
  },

  currentpassword: {
    message: "Your current password is incorrect. Please try again."
  },

  genericpassword: {
    message: "Your password must contain between 6 and 12 characters," + " with no spaces. Please try again."
  },

  phone: {
    validate: function validate(val) {
      var digits = val.replace(/\D/g, "");

      var isCorrectCharacters = phoneExp.test(val);
      var isCorrectLength = digits.length === 10;
      var startsWithCorrectNumbers = /[2-9]/.test(digits.charAt(0));
      var validNumber = isCorrectCharacters && isCorrectLength && startsWithCorrectNumbers;
      var noDigits = !/\d/.test(val);

      // Removes the validator warning elements if nothing is in the input field
      return validNumber || noDigits;
    },

    message: "Please enter a valid 10 digit phone number."
  },

  cvv: {
    validate: function validate(val, length) {
      var isDigits = /(^[0-9]*$)/.test(val);
      var isCorrectLength = val.length === length;

      return isDigits && isCorrectLength;
    },

    message: "Please enter a valid security code."
  },

  creditcard: {
    validate: function validate(val) {
      var creditCard = new _creditCard2.default(val);
      return creditCard.isValid();
    },

    message: "Please enter a valid credit card number."
  },

  giftcard: {
    validate: function validate(val) {
      var creditCard = new _creditCard2.default(val);
      return creditCard.isValidGenericCard();
    },

    message: "Please enter a valid gift card number."
  },

  giftcardpin: {
    validate: function validate(val) {
      return (0, _isFinite2.default)(parseFloat(val)) && val.length === 4;
    },

    message: "Please enter a valid PIN."
  },

  giftcardnickname: {
    validate: function validate(val) {
      return val.length <= 25;
    },

    message: "Nickname cannot exceed 25 characters."
  },

  associatecard: {
    validate: function validate(val) {
      var creditCard = new _creditCard2.default(val);
      return creditCard.isValidGenericCard();
    },

    message: "Please enter a valid associate discount number."
  },

  associatewin: {
    validate: function validate(val) {
      return (0, _isFinite2.default)(parseFloat(val)) && val.length >= 9 && val.length <= 11;
    },

    message: "Please enter a valid WIN."
  },

  samsmembership: {
    validate: function validate(val) {
      return samsMembershipExp.test(val);
    },

    message: "Please enter a valid membership number."
  },

  minlength: {
    validate: function validate(val, length) {
      return val.length >= length;
    },

    message: "Min character limit not met."
  },

  // Excludes leading and trailing whitespaces.
  // Counts multiple adjacent middle whitespaces as 1 character each.
  minlengthexcludewhitespace: {
    validate: function validate(val, length) {
      return (0, _trim2.default)(val).replace(/\s+/g, " ").length >= length;
    },

    message: "Min character limit not met."
  },

  noleadingzero: {
    validate: function validate(val) {
      return !val.match(/^0/);
    },

    message: "First character cannot be \"0\""
  },

  notEmpty: {
    validate: function validate(val) {
      return val.length >= 1;
    },

    message: "This information is required."
  },

  maxlength: {
    validate: function validate(val, length) {
      return val.length <= length;
    },

    message: "Max character limit exceeded."
  },

  exactdigitlength: {
    validate: function validate(val, length) {
      return (/^[0-9]*$/.test(val) && val.length === length
      );
    },

    message: "Exact number of digits limit not met"
  },

  required: {
    validate: function validate(val) {
      return val.length > 0;
    },

    message: "This information is required."
  },

  // Tests for valid number, disallows absolutely anything but any non-numeric characters
  // http://rubular.com/r/wQ9iBHBZYc
  number: {
    validate: function validate(val) {
      return (/^[0-9]*$/.test(val)
      );
    },

    message: "Please enter a number."
  },

  numberpositive: {
    validate: function validate(val) {
      return (0, _isFinite2.default)(parseFloat(val)) && parseFloat(val) >= 0;
    },

    message: "Please enter a positive number."
  },

  fullname: {
    validate: function validate(val) {
      // Accepts multiple spaces between names, hypens, commas, dots and forward slash.
      var regex = fullNameExp.test(val);
      var maxLen = val.length <= 50;

      return regex && maxLen;
    },

    message: "Please enter first and last name."
  },

  firstname: {
    validate: nameTokenValidator,
    message: "Please enter a valid first name."
  },

  lastname: {
    validate: nameTokenValidator,
    message: "Please enter a valid last name."
  },

  firstnamecreditcard: {
    validate: function validate(val) {
      return cardNameExp.test(val);
    },

    message: "Please enter your first name as it appears on your card."
  },

  lastnamecreditcard: {
    validate: function validate(val) {
      return cardNameExp.test(val);
    },

    message: "Please enter your last name as it appears on your card."
  },

  legaltext: {
    validate: function validate(val) {
      // Accepts lower case, upper case chars, numbers,
      // spaces, periods, commans, hyphens, single quotes, and exclamations
      // Only these characters would be considered legal across atlas
      return legalTextExp.test(val);
    },

    message: "Invalid characters."
  },

  legaltextarea: {
    validate: function validate(val) {
      // Accepts lower case, upper case chars, numbers,
      // spaces, periods, commans, hyphens, single quotes, and exclamations,
      // question, forward and backward slash, percentage, dollar, plus, equals
      // Only these characters would be considered legal across atlas
      return legalTextareaExp.test(val);
    },

    message: "Invalid characters."
  },

  ordernumber: {
    validate: function validate(val) {
      // Accepts digits and hypen in the form of 123456, 1234567-123456 or 1234567890123
      return orderNumberExp.test(val);
    },

    message: "Please enter a valid order number."
  },

  dob: {
    validate: function validate(val) {
      if (!dobPattern.test(val)) {
        return false;
      }

      var currentDate = new Date();
      var expiryDate = new Date(val); // val's format is "MM/DD/YYYY"
      var dateInPast = false;

      if (expiryDate.toDateString() !== "Invalid Date") {
        dateInPast = expiryDate - currentDate < 0; // is date in past?
      }

      return dateInPast;
    },

    message: "Please enter a valid birth date."
  },

  expdate: {
    validate: function validate(val) {
      var currentDate = new Date();
      var monthYearArr = val.split("/"); // val's format is "MM/YY"
      var year = validations.getYear(monthYearArr[1]);
      var month = validations.getMonth(monthYearArr[0]);
      var expiryDate = new Date(year, month);
      var dateInFuture = false;

      if (expiryDate.toDateString() !== "Invalid Date") {
        dateInFuture = expiryDate - currentDate > 0; // is date in future?
      }

      return dateInFuture;
    },

    message: "Please enter a valid expiration date."
  },

  getYear: function getYear(lastTwoOfYear) {
    return (0, _parseInt2.default)("20" + lastTwoOfYear);
  },
  getMonth: function getMonth(month) {
    return (0, _parseInt2.default)(month) - 1;
  },


  // Use this if a component requires any combination of the above validations
  // Pass an object to params of that component with a validations key
  // e.g., `validationParams={{maxlength: 25, legaltext: null}}`
  multiplevalidations: {
    validate: function validate(val, params) {
      var isValid = true;
      for (var validator in params) {
        if (validations[validator]) {
          var validationParams = [val].concat(params[validator]);
          if (!validations[validator].validate.apply(this, validationParams)) {
            isValid = false;
            break;
          }
        }
      }
      return isValid;
    },

    message: "One or more validations did not pass."
  }
};

module.exports = validations;

/* jshint ignore:end */
/* jscs: enable */