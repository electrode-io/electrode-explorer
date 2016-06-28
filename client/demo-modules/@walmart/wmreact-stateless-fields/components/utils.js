"use strict";

exports.__esModule = true;
/* eslint-disable no-unused-vars */

var shouldDisplayError = exports.shouldDisplayError = function shouldDisplayError(props) {
  return props.error && props.touched;
};
var shouldDisplayValid = exports.shouldDisplayValid = function shouldDisplayValid(props) {
  return false;
};