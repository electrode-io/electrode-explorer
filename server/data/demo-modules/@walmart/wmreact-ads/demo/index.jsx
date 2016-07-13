/*global document:false*/
import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import { WpaModule } from "../src/index";

const store = configureStore();

export default class Index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h3 className="WpaModule">WPA Carousel</h3>
          <WpaModule
            pageType="homepage"
            pageId="0"
            type="custom"
            module="wpa"
            bucketId="control"/>
        </div>
      </Provider>
    );
  }
}
