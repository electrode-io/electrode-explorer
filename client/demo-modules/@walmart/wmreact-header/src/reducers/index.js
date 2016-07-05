import { combineReducers } from "redux";
import { storeFinder } from "./store-finder";
import { userName } from "./user-name";
import { cartCount } from "./cart-count";
import { shippingPass } from "./shipping-pass";
import { quimbyDataReducer } from "../tempo-core";

const headerReducer = combineReducers({
  userName,
  shippingPass,
  totalItemsCount: cartCount,
  storeFinder,
  quimbyData: quimbyDataReducer
});

export default headerReducer;
