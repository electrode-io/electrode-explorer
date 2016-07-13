
/*global document:false*/
import React from "react";
import assign from "lodash/assign";
import Playground from "component-playground";
import * as libraryScope from "../src/index";

import StoreHeaderExample1 from "raw!./examples/store-header-1.example";
import StoreHeaderExample2 from "raw!./examples/store-header-2.example";
import StoreHeaderExample3 from "raw!./examples/store-header-3.example";
import StoreHeaderExample4 from "raw!./examples/store-header-4.example";
import StoreHeaderExample5 from "raw!./examples/store-header-5.example";
import CouponsIframeWrapperExample1 from "raw!./examples/coupons-iframe-wrapper-1.example";

export default class Index extends React.Component {
  render() {
    const scope = assign({React}, libraryScope, this.props.scope);
    return (
      <div className="demo">
        {Index.Components.map((component, index) => (
          <div key={index}>
            <h3>{component.name}</h3>
            {component.examples.map((example, i) => (
              <Playground scope={scope} key={i} codeText={example.code} noRender={example.noRender}/>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

Index.propTypes = {
  scope: React.PropTypes.object
};

Index.Components = [
  {
    "name": "Store Header",
    examples: [
      {
        type: "playground",
        code: StoreHeaderExample1,
        noRender: true
      },
      {
        type: "playground",
        code: StoreHeaderExample2,
        noRender: true
      },
      {
        type: "playground",
        code: StoreHeaderExample3,
        noRender: true
      },
      {
        type: "playground",
        code: StoreHeaderExample4,
        noRender: true
      },
      {
        type: "playground",
        code: StoreHeaderExample5,
        noRender: true
      }
    ]
  },
  {
    "name": "Coupons iframe Wrapper",
    examples: [
      {
        type: "playground",
        code: CouponsIframeWrapperExample1,
        noRender: true
      }
    ]
  }
];
