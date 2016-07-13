"use strict";

exports.__esModule = true;
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