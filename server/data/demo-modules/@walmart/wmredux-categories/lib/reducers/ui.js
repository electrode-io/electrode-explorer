"use strict";

exports.__esModule = true;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _facetTab = require("../actions/facet-tab");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var _Object$assign2, _Object$assign3;

  var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case _facetTab.ON_FACET_TAB_LOAD:
      return (0, _assign2.default)({}, state, (_Object$assign2 = {}, _Object$assign2[action.moduleId] = {
        active: 0,
        loadedTabs: [0]
      }, _Object$assign2));

    case _facetTab.ON_FACET_TAB_CHANGE:
      var loadedTabs = state[action.moduleId].loadedTabs;
      var tabsToLoad = [].concat(loadedTabs);

      if (loadedTabs[action.active] === undefined) {
        tabsToLoad = [].concat(loadedTabs.slice(0, action.active), [action.active], loadedTabs.slice(action.active));
      }

      return (0, _assign2.default)({}, state, (_Object$assign3 = {}, _Object$assign3[action.moduleId] = {
        active: action.active,
        loadedTabs: tabsToLoad
      }, _Object$assign3));

    default:
      return state;
  }
}; /** Stores ui state, like current active tab, is LHN expanded etc*/