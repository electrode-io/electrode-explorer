import { Provider } from "react-redux";
import React from "react";

import { configureStore } from "./store";
import Container from "./container";

import data from "./data";

const store = configureStore();

const _filterDecorators = (decorator) => decorator.position !== "BottomCenter";
const _getStoreIdAtIndex = (idx) => data.stores[idx].id;

export default class Demo extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container
          myStore={_getStoreIdAtIndex(0)}
          className={"class-defined-by-consuming-app"}
          filterDecorators={_filterDecorators}
        />
      </Provider>
    );
  }
}
