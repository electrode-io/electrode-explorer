"use strict";

exports.__esModule = true;
exports.thawScrollPosition = exports.freezeScrollPosition = undefined;

var _exenv = require("exenv");

var scrollPosition = 0;
var frozen = false;

var freezeScrollPosition = exports.freezeScrollPosition = function freezeScrollPosition() {
  if (frozen || !_exenv.canUseDOM) {
    return;
  }

  frozen = true;

  var _window = window;
  var _window$document = _window.document;
  var html = _window$document.documentElement;
  var body = _window$document.body;
  var innerHeight = _window.innerHeight;

  // Detect if the page scrollbar was visible.

  var hasScrollbar = body.scrollHeight > innerHeight;

  // Capture the current scroll position.
  scrollPosition = body.scrollTop || html.scrollTop;

  // Preserve the scrollbar with position "scroll" to prevent horizontal jank.
  html.style.overflowY = hasScrollbar ? "scroll" : "hidden";
  html.style.position = "fixed";
  html.style.right = html.style.left = 0;

  // Offset the now fixed document by the previous scroll position. This
  // preserves the scroll position when changing the `overflow` property on the
  // document.
  html.style.top = -scrollPosition + "px";
};

var thawScrollPosition = exports.thawScrollPosition = function thawScrollPosition() {
  if (!frozen || !_exenv.canUseDOM) {
    return;
  }

  frozen = false;

  var _window2 = window;
  var _window2$document = _window2.document;
  var html = _window2$document.documentElement;
  var body = _window2$document.body;

  // Clear inline style attributes.

  html.style.overflowY = "";
  html.style.position = "";
  html.style.overflow = "";
  html.style.right = "";
  html.style.left = "";
  html.style.top = "";

  // Restore saved scroll position.
  body.scrollTop = html.scrollTop = scrollPosition;
};