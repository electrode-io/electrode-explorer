/* eslint complexity:0 */

import React from "react";
import { Provider } from "react-redux";
import { configureStore } from "./store";
import P13NRecommendation from "../src/components/p13n-recommendation";
import mockData from "./data";
const store = configureStore();

export default class Index extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="component-documentation">
          <h3 className="P13NCarousel">P13NRecommendation Carousel</h3>
          <P13NRecommendation
            products={mockData.products}/>
        </div>
      </Provider>
    );
  }
}
