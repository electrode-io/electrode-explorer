"use strict";

exports.__esModule = true;

var _getWpa = require("./get-wpa");

Object.defineProperty(exports, "ajaxRender", {
  enumerable: true,
  get: function get() {
    return _getWpa.ajaxRender;
  }
});
Object.defineProperty(exports, "bootstrapWpa", {
  enumerable: true,
  get: function get() {
    return _getWpa.bootstrapWpa;
  }
});
Object.defineProperty(exports, "receiveWpa", {
  enumerable: true,
  get: function get() {
    return _getWpa.receiveWpa;
  }
});
Object.defineProperty(exports, "fetchWpa", {
  enumerable: true,
  get: function get() {
    return _getWpa.fetchWpa;
  }
});
Object.defineProperty(exports, "requestWpa", {
  enumerable: true,
  get: function get() {
    return _getWpa.requestWpa;
  }
});
Object.defineProperty(exports, "invalidateWpa", {
  enumerable: true,
  get: function get() {
    return _getWpa.invalidateWpa;
  }
});
Object.defineProperty(exports, "wpaRendered", {
  enumerable: true,
  get: function get() {
    return _getWpa.wpaRendered;
  }
});
Object.defineProperty(exports, "REQUEST_WPA", {
  enumerable: true,
  get: function get() {
    return _getWpa.REQUEST_WPA;
  }
});
Object.defineProperty(exports, "RECEIVE_WPA", {
  enumerable: true,
  get: function get() {
    return _getWpa.RECEIVE_WPA;
  }
});
Object.defineProperty(exports, "INVALIDATE_WPA", {
  enumerable: true,
  get: function get() {
    return _getWpa.INVALIDATE_WPA;
  }
});

var _loadWpa = require("./load-wpa");

Object.defineProperty(exports, "showAdsAction", {
  enumerable: true,
  get: function get() {
    return _loadWpa.showAdsAction;
  }
});
Object.defineProperty(exports, "LOADING_WPA", {
  enumerable: true,
  get: function get() {
    return _loadWpa.LOADING;
  }
});
Object.defineProperty(exports, "LOADED_WPA", {
  enumerable: true,
  get: function get() {
    return _loadWpa.LOADED;
  }
});


var _initialState = {
  loading: true,
  midasConfig: {},
  midasContext: {}
};

var initialState = exports.initialState = _initialState;