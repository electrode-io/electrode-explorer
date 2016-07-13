
/* eslint complexity:0 */
import React from "react";
import Playground from "component-playground";
import assign from "object-assign";
/// start imports
/// end imports

import extraData from "./data";
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
    title: "ProductSecondaryBot",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/products-secondary-bot.example")
      }
    ]
  },
  {
    title: "ProductsReviewMessaging",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/products-review-messaging.example")
      }
    ]
  },
  {
    title: "ProductsFulfillmentMessaging",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/products-fulfillment-messaging.example")
      }
    ]
  },
  {
    title: "ProductsFulfillmentTable",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/products-fulfillment-table.example"),
        noRender: true
      }
    ]
  },
  {
    title: "DetailedHeroImage",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/detailed-hero-image.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Comparison.Large",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/comparison.large.example"),
        noRender: true,
        extraScope: {comparisonData: extraData.comparisonData}
      }
    ],
    options: {
      image: require("./images/Comparison.Large.png")
    }
  },
  {
    title: "Comparison.Small",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/comparison.small.example"),
        noRender: true,
        extraScope: {comparisonData: extraData.comparisonData}
      }
    ],
    options: {
      image: require("./images/Comparison.Small.png")
    }
  },
  {
    title: "ProductsCarousel",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/products-carousel.example"),
        noRender: true,
        extraScope: {productsData: extraData.productsData}
      }
    ],
    options: {
      image: require("./images/ProductsCarousel.png")
    }
  },
  {
    title: "ProductsGrid",
    examples: [
      {
        title: "Simple",
        type: "playground",
        code: require("raw!./examples/products-grid.example"),
        noRender: true,
        extraScope: {productsData: extraData.productsData}
      },
      {
        title: "Animated",
        type: "playground",
        code: require("raw!./examples/animated-products-grid.example"),
        noRender: false,
        extraScope: {productsData: extraData.productsData}
      },
      {
        title: "Store Tiles",
        type: "playground",
        code: require("raw!./examples/store-products-grid.example"),
        noRender: true,
        extraScope: {storeItemData: extraData.storeItemData}
      }
    ],
    options: {
      image: require("./images/ProductsGrid.png")
    }
  },
  {
    title: "ProductsBOT",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/products-bot.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/ProductsGrid.png")
    }
  },
  {
    title: "StarRating",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/star-rating.example"),
        noRender: true
      }
    ],
    options: {
      image: require("./images/Stars.png")
    }
  },
  {
    title: "Histogram",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/histogram.example"),
        noRender: true,
        extraScope: {bars: extraData.histogramData}
      }
    ]
  },
  {
    title: "StickyNav",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/sticky-nav.example"),
        noRender: true
      }
    ]
  },
  {
    title: "DiscoveryModule",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/discovery-module.example")
      }
    ]
  },
  {
    title: "FulfillmentContainerElements",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/fulfillment-container-elements.example")
      }
    ]
  }
];
