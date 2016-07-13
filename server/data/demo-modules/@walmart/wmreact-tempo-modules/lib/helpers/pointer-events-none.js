"use strict";

exports.__esModule = true;
exports.addPointerEvents = undefined;

var _reactDom = require("react-dom");

/**
  * Detection to see if pointer-events, the css attribute, has been implemented
  * Lifted straight from Modernizr's detection
  *
  * @returns {Boolean} Pointer Events CSS exists
  */
var pointerEventsExist = function pointerEventsExist() {
  var style = window.document.createElement("a").style;
  style.cssText = "pointer-events:auto";
  return style.pointerEvents === "auto";
};

/**
 * Create a mouse event using the deprecated API that is needed in < IE 11
 * https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/initMouseEvent
 *
 * @param {MouseEvent} oldEvent - Intercepted click event
 * @returns {MouseEvent} Our new event, ready to forward on
 */
var createMouseEvent = function createMouseEvent(oldEvent) {
  var screenX = oldEvent.screenX;
  var screenY = oldEvent.screenY;
  var clientX = oldEvent.clientX;
  var clientY = oldEvent.clientY;
  var ctrlKey = oldEvent.ctrlKey;
  var altKey = oldEvent.altKey;
  var shiftKey = oldEvent.shiftKey;
  var metaKey = oldEvent.metaKey;


  var event = window.document.createEvent("MouseEvent");
  event.initMouseEvent("click", // event
  true, // canBubble
  true, // cancelable
  window, // view
  0, // detail
  screenX, screenY, clientX, clientY, ctrlKey, altKey, shiftKey, metaKey, 0, // button
  null // relatedTarget
  );

  return event;
};

/**
 * Find our new target (underneath the element) by hiding it
 *
 * @param {Element} element - Element that has pointer-events: none
 * @param {MouseEvent} oldEvent - Intercepted click event
 * @returns {Element} Our new target
 */
var findNewTarget = function findNewTarget(element, oldEvent) {
  var clientX = oldEvent.clientX;
  var clientY = oldEvent.clientY;
  var display = element.style.display;


  element.style.display = "none";
  var newTarget = window.document.elementFromPoint(clientX, clientY);
  element.style.display = display;

  return newTarget;
};

/**
 * Stop the old click event, find the new target and forward the click onto it
 *
 * @param {Element} element - Element that has pointer-events: none
 * @returns {function} Event Handler
 */
var pointerEventsNone = function pointerEventsNone(element) {
  return function (oldEvent) {
    oldEvent.preventDefault();

    var newTarget = findNewTarget(element, oldEvent);
    var event = createMouseEvent(oldEvent);

    newTarget.dispatchEvent(event);
  };
};

/**
 * Create event listener on the element that passes click events to the element underneath it
 *
 * @param {Element} element - Element that has pointer-events: none
 * @param {Boolean} debug - Force event listener, even when pointer-events are supported
 * @returns {undefined}
 */
var addPointerEvents = exports.addPointerEvents = function addPointerEvents(element) {
  var debug = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

  if (pointerEventsExist() && !debug) {
    return;
  }
  element = (0, _reactDom.findDOMNode)(element);

  element.addEventListener("click", pointerEventsNone(element));
};