/* eslint no-unused-vars: 0, arrow-parens: 0 */
export default (analytics) => {
  return store => next => action => {
    analytics.callback({
      _type: "redux-action",
      context: analytics.context,
      action
    });

    const result = next(action);

    analytics.callback({
      _type: "redux-new-state",
      context: analytics.context,
      action,
      state: result
    });

    return result;
  };
};

