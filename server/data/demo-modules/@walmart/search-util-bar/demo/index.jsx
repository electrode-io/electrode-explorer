import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

// mock data object
import * as mock from "./data/demo";

// import list of components
import Brand from "../src/components/utilbar-brand";
import Price from "../src/components/utilbar-price";
import Sort from "../src/components/utilbar-sort";
import Switcher from "../src/components/utilbar-switcher";
import Store from "../src/components/utilbar-store-availability";
import SearchUtilBar from "../src/components/search-util-bar";

// example code as plain text
import brandExample from "raw!./examples/brand.example";
import priceExample from "raw!./examples/price.example";
import sortExample from "raw!./examples/sort.example";
import switcherExample from "raw!./examples/switcher.example";
import storeAvailabilityExample from "raw!./examples/store-availability.example";
import containerExample from "raw!./examples/container.example";

export default React.createClass({
  propTypes: {
    scope: React.PropTypes.object
  },

  render() {
    return (
      <div className="components-documentation">
        <h3>Search UtilBar Container</h3>
        <Playground
          codeText={containerExample}
          scope={assign({
            React,
            SearchUtilBar,
            brandChoices: mock.brand.choices,
            sortOptions: mock.sort.options
          }, this.props.scope || {})}
          noRender={true}
        />

        <h3>Store Availability Dropdown</h3>
        <Playground
          codeText={storeAvailabilityExample}
          scope={assign({React, Store, nearbyStores: mock.location.stores, location: mock.location.location}, this.props.scope || {})}
          noRender={true}
        />

        <h3>Sort Dropdown</h3>
        <Playground
          codeText={sortExample}
          scope={assign({React, Sort, options: mock.sort.options}, this.props.scope || {})}
          noRender={true}
        />

        <h3>Price Dropdown</h3>
        <Playground
          codeText={priceExample}
          scope={assign({React, Price}, this.props.scope || {})}
          noRender={true}
        />

        <h3>Brand Dropdown</h3>
        <Playground
          codeText={brandExample}
          scope={assign({React, Brand, choices: mock.brand.choices}, this.props.scope || {})}
          noRender={true}
        />

        <h3>View Switcher</h3>
        <Playground
          codeText={switcherExample}
          scope={assign({React, Switcher}, this.props.scope || {})}
          noRender={true}
        />
      </div>
    );
  }
});
