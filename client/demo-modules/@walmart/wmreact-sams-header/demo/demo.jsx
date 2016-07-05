/*global document:false*/
import React from "react";
import {quimbyData, storeFinderResponse} from "./data";
import SamsHeader from "../src/components/sams-header";
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import { combineReducers } from "redux";
import thunkMiddleware from "redux-thunk";

import { userName } from "@walmart/wmreact-header/lib/reducers/user-name";
import { cartCount } from "@walmart/wmreact-header/lib/reducers/cart-count";
import { shippingPass } from "@walmart/wmreact-header/lib/reducers/shipping-pass";
import businessToolNavMobileReducer from "../src/reducers/business-tool-nav-mobile";
import stores from "../src/reducers/store-finder";

// Removed quimbyDataReducer
const rootReducer = combineReducers({
  header: combineReducers({
    userName,
    shippingPass,
    totalItemsCount: cartCount,
    storeFinder: combineReducers({
      response: stores
    }),
    bizToolsMob: businessToolNavMobileReducer
  })
});

export const store = createStore(
  rootReducer,
  applyMiddleware(thunkMiddleware)
);

import "./demo.styl";

export default class Demo extends React.Component {
  render() {
    return (
      <div className="demo" style={ {height: "1000px"} }>
        <Provider store={store}>
          <SamsHeader
            searchExposed={true}
            totalItemsCount={100}
            userName=""
            quimbyData={quimbyData}
            storeFinderResponse={storeFinderResponse}
          />
        </Provider>

        <div className="ResponsiveContainer">
          <img src="//s7d2.scene7.com/is/image/samsclub/2016-wk15-hp-pov-1a?wid=1140&fmt=jpg&qlt=90"/>
        </div>
      </div>

    );
  }
}
