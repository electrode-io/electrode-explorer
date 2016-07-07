"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (password) {
  // eslint-disable-line max-statements
  if (!password) {
    return {};
  }

  var upperCase = new RegExp("[A-Z]");
  var lowerCase = new RegExp("[a-z]");
  var numbers = new RegExp("[0-9]");
  var specialChars = new RegExp("([^a-zA-Z\\d])");

  var strength = 0;

  if (password.length >= 8) {
    strength += 1;
  }

  if (password.match(upperCase)) {
    strength += 1;
  }

  if (password.match(lowerCase)) {
    strength += 1;
  }

  if (password.match(numbers)) {
    strength += 1;
  }

  if (password.match(specialChars)) {
    strength += 1;
  }

  return strength;
};