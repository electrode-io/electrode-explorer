"use strict";

exports.__esModule = true;
exports.WidthWatcher = exports.WidthWatcherException = undefined;

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _exenv = require("exenv");

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breakpointMap = {};

var isEmpty = function isEmpty(map) {
  return (0, _keys2.default)(map).length === 0;
};

var WidthWatcherException = exports.WidthWatcherException = function WidthWatcherException() {
  (0, _classCallCheck3.default)(this, WidthWatcherException);

  this.name = "WidthWatcherException";
  this.message = "This exception was likely caused by subscribing to an instance " + "of the WidthWatcher class and not providing an implementation of the " + "`updateWidth(newWidth)` method. See the WidthWatcher class documention for more " + "information";
};

var WidthWatcher = exports.WidthWatcher = function () {
  // If you use this class be sure to shim matchMedia for IE8/IE9 compatibility:
  // https://github.com/paulirish/matchMedia.js

  function WidthWatcher() {
    (0, _classCallCheck3.default)(this, WidthWatcher);

    // We'll need to  ensure that there actually is a DOM to be accessed
    // via `window` before we make any sort of media query. Additionally,
    // there's no need to instantiate several sets of media matchers. If one
    // has already been set up, then we're good to go.
    if (isEmpty(breakpointMap) && _exenv2.default.canUseDOM) {
      breakpointMap = {
        "small": window.matchMedia("(min-width: 480px)"),
        "medium": window.matchMedia("(min-width: 768px)"),
        "large": window.matchMedia("(min-width: 1024px)"),
        "x-large": window.matchMedia("(min-width: 1364px)")
      };
    }

    for (var key in breakpointMap) {
      breakpointMap[key].addListener(this.onBreakpointMatched.bind(this));
    }

    this.subscribed = [];
  }

  // Asks our set of media queries present in `breakpointMap` for any match,
  // then return the largest sized match made. Will return one of five sizes:
  // ["small", "medium", "large", "x-large", "xx-large"]


  WidthWatcher.prototype.onBreakpointMatched = function onBreakpointMatched() {
    this.updateWidth(this.width);
  };

  // publish a change in device width to all subscribers.
  // throw an error should any subscriber not have an implementation
  // of `updateWidth(newWidth)`


  WidthWatcher.prototype.updateWidth = function updateWidth(newWidth) {
    this.subscribed.forEach(function (subscriber) {
      try {
        subscriber.updateWidth(newWidth);
      } catch (exception) {
        throw new WidthWatcherException();
      }
    });
  };

  // Ensure subscriber hasn't previously subscribed, then add subscriber.


  WidthWatcher.prototype.addSubscriber = function addSubscriber(subscriber) {
    if (this.findSubscriber(subscriber) === -1) {
      this.subscribed.push(subscriber);
    }
  };

  // Iterate through all subscribers and return index of provided
  // subscriber. If said subscriber is not found, return -1.


  WidthWatcher.prototype.findSubscriber = function findSubscriber(subscriber) {
    for (var index in this.subscribed) {
      if (this.subscribed[index] && this.subscribed[index] === subscriber) {
        return index;
      }
    }

    return -1;
  };

  // Ensure provided subscriber has indeed subscribed, then remove.


  WidthWatcher.prototype.removeSubscriber = function removeSubscriber(subscriber) {
    var index = this.findSubscriber(subscriber);

    if (index !== -1) {
      this.subscribed.splice(index, 1);
    }
  };

  (0, _createClass3.default)(WidthWatcher, [{
    key: "width",
    get: function get() {
      var name = "x-small";
      var checkOrder = ["small", "medium", "large", "x-large"];

      checkOrder.forEach(function (size) {
        // Need to check the type for IE versions < 10, otherwise this will break
        if ((0, _typeof3.default)(breakpointMap[size]) === "object" && breakpointMap[size].matches) {
          name = size;
        }
      });

      return name;
    }
  }]);
  return WidthWatcher;
}();