import {findDOMNode} from "react-dom";

/**
  * Detection to see if pointer-events, the css attribute, has been implemented
  * Lifted straight from Modernizr's detection
  *
  * @returns {Boolean} Pointer Events CSS exists
  */
const pointerEventsExist = () => {
  const style = window.document.createElement("a").style;
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
const createMouseEvent = (oldEvent) => {
  const {
    screenX, screenY,
    clientX, clientY,
    ctrlKey,
    altKey,
    shiftKey,
    metaKey
  } = oldEvent;

  const event = window.document.createEvent("MouseEvent");
  event.initMouseEvent(
    "click", // event
    true,    // canBubble
    true,    // cancelable
    window,  // view
    0,       // detail
    screenX, screenY,
    clientX, clientY,
    ctrlKey,
    altKey,
    shiftKey,
    metaKey,
    0,       // button
    null     // relatedTarget
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
const findNewTarget = (element, oldEvent) => {
  const {clientX, clientY} = oldEvent;
  const {display} = element.style;

  element.style.display = "none";
  const newTarget = window.document.elementFromPoint(clientX, clientY);
  element.style.display = display;

  return newTarget;
};

/**
 * Stop the old click event, find the new target and forward the click onto it
 *
 * @param {Element} element - Element that has pointer-events: none
 * @returns {function} Event Handler
 */
const pointerEventsNone = (element) => (
  (oldEvent) => {
    oldEvent.preventDefault();

    const newTarget = findNewTarget(element, oldEvent);
    const event = createMouseEvent(oldEvent);

    newTarget.dispatchEvent(event);
  }
);

/**
 * Create event listener on the element that passes click events to the element underneath it
 *
 * @param {Element} element - Element that has pointer-events: none
 * @param {Boolean} debug - Force event listener, even when pointer-events are supported
 * @returns {undefined}
 */
export const addPointerEvents = (element, debug = false) => {
  if (pointerEventsExist() && !debug) {
    return;
  }
  element = findDOMNode(element);

  element.addEventListener("click", pointerEventsNone(element));
};

