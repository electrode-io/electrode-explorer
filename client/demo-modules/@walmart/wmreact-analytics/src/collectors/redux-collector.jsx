/* eslint func-style: 0 */
export default function reduxCollector(store: Function, analytics: ?{
  callback: (evt: Object) => void, context: Object
} = null): Function {
  let wrappedStore: ?Function = null;
  wrappedStore = (state, action) => {
    if (wrappedStore.analytics) {
      wrappedStore.analytics.callback({
        _type: "redux-action",
        context: wrappedStore.analytics.context,
        action,
        state
      });
    }

    const newState = store(state, action);

    if (wrappedStore.analytics) {
      wrappedStore.analytics.callback({
        _type: "redux-new-state",
        context: wrappedStore.analytics.context,
        action,
        state: newState
      });
    }

    return newState;
  };
  wrappedStore.analytics = analytics;
  return wrappedStore;
}
