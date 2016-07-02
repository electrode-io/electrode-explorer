"use strict";

exports.__esModule = true;
// Actions
var ON_FACET_TAB_CHANGE = exports.ON_FACET_TAB_CHANGE = "ON_FACET_TAB_CHANGE";
var ON_FACET_TAB_LOAD = exports.ON_FACET_TAB_LOAD = "ON_FACET_TAB_LOAD";

//Action creators
var onFacetTabChange = exports.onFacetTabChange = function onFacetTabChange(moduleId, active) {
  return {
    type: ON_FACET_TAB_CHANGE,
    moduleId: moduleId,
    active: active
  };
};

var onFacetTabLoad = exports.onFacetTabLoad = function onFacetTabLoad(moduleId) {
  return {
    type: ON_FACET_TAB_LOAD,
    moduleId: moduleId
  };
};