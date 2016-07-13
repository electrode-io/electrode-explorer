import { combineReducers } from "redux";
import stores from "./store-finder";
import { userName } from "@walmart/wmreact-header/lib/reducers/user-name";
import { cartCount } from "@walmart/wmreact-header/lib/reducers/cart-count";
import { shippingPass } from "@walmart/wmreact-header/lib/reducers/shipping-pass";
import { quimbyDataReducer } from "@walmart/wmreact-header/lib/tempo-core";
import businessToolNavMobileReducer from "./business-tool-nav-mobile";

const headerReducer = combineReducers({
  userName,
  shippingPass,
  totalItemsCount: cartCount,
  storeFinder: combineReducers({
    response:
    stores
  }),
  quimbyData: quimbyDataReducer,
  bizToolsMob: businessToolNavMobileReducer
});

export default headerReducer;
