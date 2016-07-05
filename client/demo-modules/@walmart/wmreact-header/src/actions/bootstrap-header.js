import { getQuimbyDataAction } from "../tempo-core";

// NOTE: getQuimbyData needs request object on server render
// so bootstrap header needs request object on server render
export const bootstrapHeader = (request, options) => {
  return (dispatch) => {
    // make sure we return a promise
    return dispatch(getQuimbyDataAction(request, options));
  };
};
