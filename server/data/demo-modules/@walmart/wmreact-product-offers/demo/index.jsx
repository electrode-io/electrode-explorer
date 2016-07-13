import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

import * as libraryScope from "../src/index";

export default class Index extends React.Component {
  render() {
    const localScope = assign({ React }, this.props.scope || {}, libraryScope);
    return (
      <div className="component-documentation">
        {Index.Components.map((component, index) => (
          <div key={index}>
            <h3 id={component.title}>{component.title}</h3>
            {component.examples.map((example, subindex) => (
              <div key={subindex}>
                {example.title ? <h4>{example.title}</h4> : null}
                <Playground codeText={example.code}
                  scope={assign(localScope, example.extraScope || {})}
                  noRender={example.noRender}/>
              </div>
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
    title: "Price",
    examples: [
      {
        title: "Base Price",
        type: "playground",
        code: require("raw!./examples/price/base.example"),
        noRender: true
      },
      {
        title: "Price Superscript",
        type: "playground",
        code: require("raw!./examples/price/superscript.example"),
        noRender: true
      },
      {
        title: "Price Subscript",
        type: "playground",
        code: require("raw!./examples/price/subscript.example"),
        noRender: true
      },
      {
        title: "Was Price",
        type: "playground",
        code: require("raw!./examples/price/was-price.example"),
        noRender: true
      },
      {
        title: "List Price",
        type: "playground",
        code: require("raw!./examples/price/list-price.example"),
        noRender: true
      },
      {
        title: "Save Price",
        type: "playground",
        code: require("raw!./examples/price/save-price.example"),
        noRender: true
      },
      {
        title: "PPU Price",
        type: "playground",
        code: require("raw!./examples/price/ppu-price.example"),
        noRender: true
      },
      {
        title: "Submap message",
        type: "playground",
        code: require("raw!./examples/price/submap-price.example"),
        noRender: true
      },
      {
        title: "Submap Flyout",
        type: "playground",
        code: require("raw!./examples/price/submap-flyout.example"),
        noRender: true
      },
      {
        title: "Hero Price",
        type: "playground",
        code: require("raw!./examples/price/hero-price.example"),
        noRender: true
      },
      {
        title: "Price Range",
        type: "playground",
        code: require("raw!./examples/price/price-range.example"),
        noRender: true
      },
      {
        title: "Product Secondary Price",
        type: "playground",
        code: require("raw!./examples/product-secondary-price.example"),
        noRender: true
      },
      {
        title: "Product Offer Fulfillment",
        type: "playground",
        code: require("raw!./examples/product-offer-fulfillment.example"),
        noRender: true
      },
      {
        title: "Product Offer Price",
        type: "playground",
        code: require("raw!./examples/product-offer-price.example"),
        noRender: true
      },
      {
        title: "Product Offer",
        type: "playground",
        code: require("raw!./examples/product-offer.example"),
        noRender: true
      },
      {
        title: "Product Delivery",
        type: "playground",
        code: require("raw!./examples/product-delivery.example"),
        noRender: true
      },
      {
        title: "Care plan help flyout",
        type: "playground",
        code: require("raw!./examples/care-plan/help-flyout-button.example"),
        noRender: true
      },
      {
        title: "Care plan",
        type: "playground",
        code: require("raw!./examples/care-plan/care-plan.example"),
        noRender: false
      },
      {
        title: "Product Seller Offer",
        type: "playground",
        code: require("raw!./examples/product-seller-offer.example")
      },
      {
        title: "Product Shipping Price",
        type: "playground",
        code: require("raw!./examples/product-shipping-price.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Price.png")
    }
  }
];
