/** Stores ui state, like current active tab, is LHN expanded etc*/

import {
  ON_FACET_TAB_CHANGE,
  ON_FACET_TAB_LOAD
} from "../actions";


export default (state = {}, action) => {
  switch (action.type) {
  case ON_FACET_TAB_LOAD:
    return Object.assign({}, state, {
      [action.moduleId]: {
        active: 0,
        loadedTabs: [0]
      }
    });

  case ON_FACET_TAB_CHANGE:
    const loadedTabs = state[action.moduleId].loadedTabs;
    let tabsToLoad = [].concat(loadedTabs);

    if (loadedTabs[action.active] === undefined) {
      tabsToLoad = [
        ...loadedTabs.slice(0, action.active),
        action.active,
        ...loadedTabs.slice(action.active)
      ];
    }

    return Object.assign({}, state, {
      [action.moduleId]: {
        active: action.active,
        loadedTabs: tabsToLoad
      }
    });

  default:
    return state;
  }
};
