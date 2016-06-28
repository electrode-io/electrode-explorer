"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
  Returns true if device is touch device such as tablet or phone.

  @examples
  import { isTouchDevice } from "@walmart/react-utils"

  if ({isTouchDevice(window)}) {//do something}
*/

var isTouchDevice = exports.isTouchDevice = function isTouchDevice(currentWindow) {
  return "ontouchstart" in currentWindow || currentWindow.navigator.MaxTouchPoints > 0 || currentWindow.navigator.maxTouchPoints > 0 || currentWindow.navigator.msMaxTouchPoints > 0;
};