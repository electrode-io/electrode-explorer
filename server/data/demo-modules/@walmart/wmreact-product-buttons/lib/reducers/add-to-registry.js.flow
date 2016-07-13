export const addToRegistry = (state, action) => {
  switch (action.type) {
  case "SIGN_IN_STATUS":
    return Object.assign({}, state, {isSignedIn: action.isSignedIn, status: action.status});
  case "ADD_TO_REGISTRY_REQUEST":
  case "ADD_TO_REGISTRY_ERROR":
  case "ADD_TO_REGISTRY_SUCCESS":
  case "REGISTRY_PROMPT_CLOSED":
    return Object.assign({}, state, {status: action.status});
  case "SHOW_REGISTRIES":
    const {status, lists, ...rest} = state;
    return {
      status: "PROMPT",
      lists: action.lists,
      ...rest
    };
  default:
    return state;
  }
};
