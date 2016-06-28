"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// Action Types
var LOADING = exports.LOADING = "LOADING";
var LOADED = exports.LOADED = "LOADED";

var showAdsAction = exports.showAdsAction = function showAdsAction(data) {
  return {
    type: LOADED,
    midasContext: data.midasContext,
    midasConfig: data.midasConfig
  };
};