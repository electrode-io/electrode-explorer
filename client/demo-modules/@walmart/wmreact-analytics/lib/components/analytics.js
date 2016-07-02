"use strict";

exports.__esModule = true;

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
This is deprecated and dying. We are moving away from it. Do not use it.
*/

var Analytics = function () {
  function Analytics() {
    (0, _classCallCheck3.default)(this, Analytics);

    this.subscribed = [];
    this.debug = false;
  }

  Analytics.prototype.setDebug = function setDebug(debug) {
    this.debug = debug;
  };

  Analytics.prototype.findSubscriber = function findSubscriber(subscriber) {
    for (var i = 0; i < this.subscribed.length; i++) {
      if (this.subscribed[i] === subscriber) {
        return i;
      }
    }
    return -1;
  };

  Analytics.prototype.addSubscriber = function addSubscriber(subscriber) {
    if (this.findSubscriber(subscriber) === -1) {
      this.subscribed.push(subscriber);
    }
  };

  Analytics.prototype.removeSubscriber = function removeSubscriber(subscriber) {
    var index = this.findSubscriber(subscriber);
    if (index !== -1) {
      this.subscribed.splice(index, 1);
    }
  };

  Analytics.prototype.fire = function fire(event) {
    for (var i in this.subscribed) {
      try {
        this.subscribed[i].analyticsEvent(event);
      } catch (e) {//eslint-disable-line
      }
    }
    if (this.debug) {
      console.log((0, _stringify2.default)(event)); //eslint-disable-line
    }
  };

  Analytics.prototype.mixin = function mixin() {
    var self = this;
    return {
      componentWillMount: function componentWillMount() {
        self.addSubscriber(this);
      },
      componentWillUnmount: function componentWillUnmount() {
        self.removeSubscriber(this);
      }
    };
  };

  Analytics.prototype.componentMixin = function componentMixin(events) {
    var _this = this;

    var self = this;

    var mixin = {
      fire: function fire(component, event, options) {
        // eslint-disable-line max-statements
        options = options || {};

        var children = [component];
        if (options.children) {
          for (var i in options.children) {
            children.push(options.children[i]);
          }
        }

        event = event || {};
        event.displayName = component.constructor.displayName;

        for (var c in children) {
          var props = children[c].props.analytics || {};
          if (props.disabled) {
            return;
          }
          if (props.tags) {
            for (var t in props.tags) {
              if (props.tags[t]) {
                event[t] = props.tags[t];
              }
            }
          }
        }

        self.fire(event);
      }
    };

    var _loop = function _loop(i) {
      mixin["fire" + _this.capitalize(events[i])] = function (component, event, options) {
        // eslint-disable-line
        event = event || {};
        event.type = events[i];
        mixin.fire(component, event, options);
      };
    };

    for (var i in events) {
      _loop(i);
    }

    return mixin;
  };

  Analytics.prototype.capitalize = function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return Analytics;
}();

var _analytics = _analytics || new Analytics();

exports.default = _analytics;