/**
 * Master Client Side Validator List
 * See https://confluence.walmart.com/display/USFEFER/Cross-Track+Field+Validation+Matrix for specs.
 */
import isFinite from "lodash/isFinite";
import trim from "lodash/trim";
import CreditCard from "./credit-card";

// http://stackoverflow.com/a/46181/11236 modified to exclude forward slashes
const EMAIL_PATTERN = /(([^<>()[\]\\\/.,;:\s@\"]+(\.[^<>()[\]\\\/.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/; // eslint-disable-line max-len
const addressExp = /(^[a-zA-Z\s0-9\-\.\/#,'\&@\(\)]*$)/;
const atLeastOneLetterExp = /.*[a-zA-Z].*/;
const cardNameExp = /^[a-z0-9,'\s\-\.\/]+$/i;
const cityExp = /(^[a-zA-Z\s0-9\-\.,']*$)/;
  // Matches yyyy-mm-dd (HTML5 output) and mm/dd/yyyy (non-HTML5, masked output)
const dobPattern = /^[^0\D]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])$|^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/[^0\D]\d{3}$/; // eslint-disable-line max-len
const emailExp = new RegExp(`^${EMAIL_PATTERN.source}$`);
const emailsExp = new RegExp(`^(?:${EMAIL_PATTERN.source + /(?:\s*[,\s]\s*|\s*$)/.source})+$`);
const fullNameExp = /^[a-zA-Z\,\.'\-\/]+\s+[a-zA-Z ,.'\-\/]+$/;
const legalTextExp = /^[a-z0-9\u00C0-\u017F\s\.\,\-\'\!]*$/i;
const legalTextareaExp = /^[a-z0-9\u00C0-\u017F\s\.\,\-\'\!\$\%\(\)\+\=\\\/\?]*$/i;
const nameExp = /^[0-9a-záéíóúüñ,'\-\.\/\s]+$/i;
const digitSpaceAndSymbolsExp = /[\d,'\-\.\/\s]/g;
const orderNumberExp = /^\d{6}$|(^\d{13}$)|(^\d{7}-\d{6}$)/;
const passwordExp = /^([^\s]{6,12}$)/;
const phoneExp = /(^[\s0-9/\(\)\-]*$)/;
const postalCodeExp = /(^\d{5}(\-\d{4})?$)/;
const ukPostalCodeExp = /^(([gG][iI][rR] {0,}0[aA]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$/; // eslint-disable-line max-len
const samsMembershipExp = /^(?:\d{13}|\d{17})$/;

// private method
const nameTokenValidator = (val) => {
  return !!(
    val.length <= 25 &&
    nameExp.test(val) &&
    // string does not only contain digits, spaces and symbols only
    val.replace(digitSpaceAndSymbolsExp, "").length
  );
};

const validations = {
  address1: {
    validate(val) {
      const isCorrectLength = val ? val.length <= 50 : true;
      const isCorrectCharacters = (addressExp).test(val);
      const atLeastOneLetters = atLeastOneLetterExp.test(val);

      return isCorrectLength && isCorrectCharacters && atLeastOneLetters;
    },
    message: "Please enter a valid street address."
  },

  address2: {
    validate(val) {
      const isCorrectLength = val ? val.length <= 50 : true;
      const isCorrectCharacters = (addressExp).test(val);

      return isCorrectLength && isCorrectCharacters;
    },
    message: "Please enter valid address details."
  },

  postalcode: {
    validate(val) {
      return postalCodeExp.test(val);
    },
    message: "Please enter a valid zip code."
  },

  ukpostalcode: {
    validate(val) {
      return ukPostalCodeExp.test(val);
    },
    message: "Please enter a valid postal code."
  },

  city: {
    validate(val) {
      const isCorrectLength = val.length <= 30;
      const isCorrectCharacters = cityExp.test(val);
      const atLeastOneLetters = atLeastOneLetterExp.test(val);

      return isCorrectLength && isCorrectCharacters && atLeastOneLetters;
    },
    message: "Please enter a valid city."
  },

  userLocation: {
    validate(val) {
      // Check that first character is alphanumeric, rest can be alphanumeric/comma/space/dash
      const isValidLocation = (/^[a-zA-Z0-9][a-zA-Z\s0-9\-,']*$/).test(val);
      const isPostalNumber = (/^[\d-]*$/).test(val);
      const isValidPostalcode = validations.postalcode.validate(val);

      return isValidPostalcode || !isPostalNumber && isValidLocation;
    },
    message: "Please enter a valid city, state or zip code."
  },

  email: {
    validate(val) {
      const maxLen = val.length <= 70;

      return emailExp.test(trim(val)) && maxLen;
    },
    message: "Please enter a valid email address."
  },

  multiemail: {
    validate(val) {
      return emailsExp.test(val);
    },
    message: "Please enter valid email addresses separated by comma or whitespace."
  },

  password: {
    validate(val) {
      // accept alphabets, numbers and special character, minimum 6 char and maximum 12 char.
      return passwordExp.test(val);
    },
    message: "Must contain 6-12 characters. No spaces."
  },

  currentpassword: {
    message: "Your current password is incorrect. Please try again."
  },

  genericpassword: {
    message: "Your password must contain between 6 and 12 characters," +
      " with no spaces. Please try again."
  },

  phone: {
    validate(val) {
      const digits = val.replace(/\D/g, "");

      const isCorrectCharacters = phoneExp.test(val);
      const isCorrectLength = digits.length === 10;
      const startsWithCorrectNumbers = (/[2-9]/).test(digits.charAt(0));
      const validNumber = isCorrectCharacters && isCorrectLength && startsWithCorrectNumbers;
      const noDigits = !(/\d/.test(val));

      // Removes the validator warning elements if nothing is in the input field
      return validNumber || noDigits;
    },
    message: "Please enter a valid 10 digit phone number."
  },

  cvv: {
    validate(val, length) {
      const isDigits = (/(^[0-9]*$)/).test(val);
      const isCorrectLength = val.length === length;

      return isDigits && isCorrectLength;
    },
    message: "Please enter a valid security code."
  },

  creditcard: {
    validate(val) {
      const creditCard = new CreditCard(val);
      return creditCard.isValid();
    },
    message: "Please enter a valid credit card number."
  },

  giftcard: {
    validate(val) {
      const creditCard = new CreditCard(val);
      return creditCard.isValidGenericCard();
    },
    message: "Please enter a valid gift card number."
  },

  giftcardpin: {
    validate(val) {
      return (isFinite(parseFloat(val)) && val.length === 4);
    },
    message: "Please enter a valid PIN."
  },

  giftcardnickname: {
    validate(val) {
      return (val.length <= 25);
    },
    message: "Nickname cannot exceed 25 characters."
  },

  associatecard: {
    validate(val) {
      const creditCard = new CreditCard(val);
      return creditCard.isValidGenericCard();
    },
    message: "Please enter a valid associate discount number."
  },

  associatewin: {
    validate(val) {
      return (isFinite(parseFloat(val)) && val.length >= 9 && val.length <= 11);
    },
    message: "Please enter a valid WIN."
  },

  samsmembership: {
    validate(val) {
      return samsMembershipExp.test(val);
    },
    message: "Please enter a valid membership number."
  },

  minlength: {
    validate(val, length) {
      return val.length >= length;
    },
    message: "Min character limit not met."
  },

  // Excludes leading and trailing whitespaces.
  // Counts multiple adjacent middle whitespaces as 1 character each.
  minlengthexcludewhitespace: {
    validate(val, length) {
      return trim(val).replace(/\s+/g, " ").length >= length;
    },
    message: "Min character limit not met."
  },

  noleadingzero: {
    validate(val) {
      return !val.match(/^0/);
    },
    message: "First character cannot be \"0\""
  },

  notEmpty: {
    validate(val) {
      return val.length >= 1;
    },
    message: "This information is required."
  },

  maxlength: {
    validate(val, length) {
      return val.length <= length;
    },
    message: "Max character limit exceeded."
  },

  exactdigitlength: {
    validate(val, length) {
      return (/^[0-9]*$/.test(val) && val.length === length);
    },
    message: "Exact number of digits limit not met"
  },

  required: {
    validate(val) {
      return val.length > 0;
    },
    message: "This information is required."
  },

  // Tests for valid number, disallows absolutely anything but any non-numeric characters
  // http://rubular.com/r/wQ9iBHBZYc
  number: {
    validate(val) {
      return /^[0-9]*$/.test(val);
    },
    message: "Please enter a number."
  },

  numberpositive: {
    validate(val) {
      return isFinite(parseFloat(val)) && (parseFloat(val) >= 0);
    },
    message: "Please enter a positive number."
  },

  fullname: {
    validate(val) {
      // Accepts multiple spaces between names, hypens, commas, dots and forward slash.
      const regex = fullNameExp.test(val);
      const maxLen = val.length <= 50;

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
    validate(val) {
      return cardNameExp.test(val);
    },
    message: "Please enter your first name as it appears on your card."
  },

  lastnamecreditcard: {
    validate(val) {
      return cardNameExp.test(val);
    },
    message: "Please enter your last name as it appears on your card."
  },

  legaltext: {
    validate(val) {
      // Accepts lower case, upper case chars, numbers,
      // spaces, periods, commans, hyphens, single quotes, and exclamations
      // Only these characters would be considered legal across atlas
      return legalTextExp.test(val);
    },
    message: "Invalid characters."
  },

  legaltextarea: {
    validate(val) {
      // Accepts lower case, upper case chars, numbers,
      // spaces, periods, commans, hyphens, single quotes, and exclamations,
      // question, forward and backward slash, percentage, dollar, plus, equals
      // Only these characters would be considered legal across atlas
      return legalTextareaExp.test(val);
    },
    message: "Invalid characters."
  },

  ordernumber: {
    validate(val) {
      // Accepts digits and hypen in the form of 123456, 1234567-123456 or 1234567890123
      return orderNumberExp.test(val);
    },
    message: "Please enter a valid order number."
  },

  dob: {
    validate(val) {
      if (!dobPattern.test(val)) {
        return false;
      }

      const currentDate = new Date();
      const expiryDate = new Date(val); // val's format is "MM/DD/YYYY"
      let dateInPast = false;

      if (expiryDate.toDateString() !== "Invalid Date") {
        dateInPast = (expiryDate - currentDate) < 0; // is date in past?
      }

      return dateInPast;
    },
    message: "Please enter a valid birth date."
  },

  expdate: {
    validate(val) {
      const currentDate = new Date();
      const monthYearArr = val.split("/"); // val's format is "MM/YY"
      const year = validations.getYear(monthYearArr[1]);
      const month = validations.getMonth(monthYearArr[0]);
      const expiryDate = new Date(year, month);
      let dateInFuture = false;

      if (expiryDate.toDateString() !== "Invalid Date") {
        dateInFuture = (expiryDate - currentDate) > 0; // is date in future?
      }

      return dateInFuture;
    },
    message: "Please enter a valid expiration date."
  },

  getYear(lastTwoOfYear) {
    return Number.parseInt(`20${lastTwoOfYear}`);
  },

  getMonth(month) {
    return Number.parseInt(month) - 1;
  },

  // Use this if a component requires any combination of the above validations
  // Pass an object to params of that component with a validations key
  // e.g., `validationParams={{maxlength: 25, legaltext: null}}`
  multiplevalidations: {
    validate(val, params) {
      let isValid = true;
      for (const validator in params) {
        if (validations[validator]) {
          const validationParams = [val].concat(params[validator]);
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
