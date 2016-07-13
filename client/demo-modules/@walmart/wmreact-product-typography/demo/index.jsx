/* eslint complexity:0 */
import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

import * as libraryScope from "../src/index";

import aboutItemEx from "raw!./examples/about-item.example";
import prodAvaiStatusLabelEx from "raw!./examples/product-availability-status-label.example";
import prodBrandEx from "raw!./examples/product-brand.example";
import prodPriceMsgEx from "raw!./examples/product-price-msg.example";
import prodSecInfoEx from "raw!./examples/product-secondary-information.example";
import prodSellerInfoEx from "raw!./examples/product-seller-info.example";
import prodShortDescEx from "raw!./examples/product-short-description.example";
import prodStoreInfoLabelEx from "raw!./examples/product-store-info-label.example";
import prodTitleEx from "raw!./examples/product-title.example";
import prodLegalBadgeEx from "raw!./examples/product-legal-badge.example";
import productFulfillmentHeaderEx from "raw!./examples/product-fulfillment-header.example";

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
    title: "AboutItem",
    examples: [
      {
        type: "playground",
        code: aboutItemEx,
        noRender: true
      }
    ]
  },
  {
    title: "ProductLegalBadge",
    examples: [
      {
        type: "playground",
        code: prodLegalBadgeEx,
        noRender: true
      }
    ]
  },
  {
    title: "ProductAvailabilityStatusLabel",
    examples: [
      {
        type: "playground",
        code: prodAvaiStatusLabelEx,
        noRender: true
      }
    ]
  },
  {
    title: "ProductBrand",
    examples: [
      {
        type: "playground",
        code: prodBrandEx,
        noRender: true
      }
    ]
  },
  {
    title: "ProductPriceMsg",
    examples: [
      {
        type: "playground",
        code: prodPriceMsgEx,
        noRender: true
      }
    ]
  },
  {
    title: "ProductSecondaryInformation",
    examples: [
      {
        type: "playground",
        code: prodSecInfoEx,
        noRender: true
      }
    ]
  },
  {
    title: "ProductShortDescription",
    examples: [
      {
        type: "playground",
        code: prodShortDescEx,
        noRender: true
      }
    ]
  },
  {
    title: "ProductStoreInfoLabel",
    examples: [
      {
        type: "playground",
        code: prodStoreInfoLabelEx,
        noRender: true
      }
    ]
  },
  {
    title: "ProductTitle",
    examples: [
      {
        type: "playground",
        code: prodTitleEx,
        noRender: true
      }
    ]
  },
  {
    title: "ProductSellerInfo",
    examples: [
      {
        type: "playground",
        code: prodSellerInfoEx,
        noRender: true
      }
    ]
  },
  {
    title: "ProductFulfillmentHeader",
    examples: [
      {
        type: "playground",
        code: productFulfillmentHeaderEx,
        noRender: true
      }
    ]
  }
];
