import {LOADING, LOADED} from "../actions/ads";
const initialState = {
  loading: true,
  midasConfig: {},
  midasContext: {}
};

const ads = (state = initialState, action) => {
  switch (action.type) {
  case LOADING:
    return {...state, loading: true};
  case LOADED:
    const { midasContext, midasConfig } = action;
    return {...state, loading: false, midasContext, midasConfig};
  default:
    return state;
  }
};
export default ads;
