import { combineReducers } from "redux";

import reducer from "./shipping-pass";
import { reducers } from "@walmart/redux-credit-card";

const rootReducer = combineReducers({
  shippingPass: reducer,
  creditCards: reducers.creditCards
});

export const shippingPassReducer = reducer;
export const creditCardReducer = reducers.creditCards;

export default rootReducer;
