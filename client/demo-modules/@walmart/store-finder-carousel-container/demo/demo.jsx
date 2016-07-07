/*@flow*/
/*global document:false*/
import api from "@walmart/wmreact-store-finder/lib/api/api";
import { Provider } from "react-redux";
import React from "react";

import { configureStore } from "./store";
import { StoreFinderCarouselContainer } from "../src/index";

import data from "./data";
api.setDemoData({ payload: { storesData: data }});

const initialState = {
  zip: "98103"
};

const customStateKeys = {
  CURRENT_STORE_KEY: "anyOldKeyDefinedAtAppLevel"
};

const store = configureStore(initialState, customStateKeys);

const _filterDecorators = (decorator) => decorator.position !== "BottomCenter";
// ^ Removes the bottom pagination dots from the slider

export default class Demo extends React.Component {
  render() {
    return (
      <div className="demo">
        <Provider store={store}>
          <StoreFinderCarouselContainer
            stateKeyOverrides={customStateKeys}
            className={"class-defined-by-consuming-app"}
            filterDecorators={_filterDecorators}
          />
        </Provider>
      </div>
    );
  }
}
