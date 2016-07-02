const reduxReducer = function (reducerMap, initial = {}) {
  return function (state = initial, {type, payload}) {
    if (typeof reducerMap[type] === "function") {
      const patch = reducerMap[type](payload, state);
      return Object.assign({}, state, patch);
    }
    return state;
  };
};

export default reduxReducer;
