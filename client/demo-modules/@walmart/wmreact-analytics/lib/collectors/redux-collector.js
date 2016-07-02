"use strict";

exports.__esModule = true;
exports.default = reduxCollector;
/* eslint func-style: 0 */
function reduxCollector(store) {
  var analytics = arguments.length <= 1 || arguments[1] === undefined ? null : arguments[1];

  var _wrappedStore = null;
  _wrappedStore = function wrappedStore(state, action) {
    if (_wrappedStore.analytics) {
      _wrappedStore.analytics.callback({
        _type: "redux-action",
        context: _wrappedStore.analytics.context,
        action: action,
        state: state
      });
    }

    var newState = store(state, action);

    if (_wrappedStore.analytics) {
      _wrappedStore.analytics.callback({
        _type: "redux-new-state",
        context: _wrappedStore.analytics.context,
        action: action,
        state: newState
      });
    }

    return newState;
  };
  _wrappedStore.analytics = analytics;
  return _wrappedStore;
}