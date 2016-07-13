/* eslint complexity:0 */
import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

import ZipCodeSearchExample from "raw!./examples/zipcode-search.example";
import HelpFlyoutButtonExample from "raw!./examples/product-help-flyout-button.example";
import PrimaryCTAExample from "raw!./examples/product-primary-cta.example";
import InstockAlertFromExample from "raw!./examples/instock-alert-form.example";
import CTAOutOfStockExample from "raw!./examples/product-cta-out-of-stock.example";
import CTAAddToCartExample from "raw!./examples/product-cta-add-to-cart.example";
import PreorderFlyoutContent from "raw!./examples/preorder-flyout-content.example";
import InvalidPrompt from "raw!./examples/product-invalid-prompt.example";
import LegalFlyoutContentExample from "raw!./examples/legal-flyout-content.example";
import MoreInfoModalExample from "raw!./examples/more-info-modal.example";
import AddToCartWithLegalFlyoutExample from "raw!./examples/add-to-cart-with-legal-flyout.example";
import AddToListRegistryFlyoutContentExample from "raw!./examples/add-to-list-registry-flyout-content.example";
import AddToRegistryButtonExample from "raw!./examples/add-to-registry-button.example";
import AddToCartWithSubmapModalExample from "raw!./examples/add-to-cart-with-submap-modal.example";
import SubmapModalExample from "raw!./examples/product-submap-modal.example";
import PostAddToRegistryContentExample from "raw!./examples/post-add-to-registry-content.example";
import CellCoverageFinderCTAExample from "raw!./examples/add-to-cart-with-cell-coverage-finder.example";

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
                  scope={localScope}
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
    title: "AddToCartWithSubmapModal",
    examples: [
      {
        type: "playground",
        code: AddToCartWithSubmapModalExample,
        noRender: false
      }
    ]
  },
  {
    title: "Post ATR",
    examples: [
      {
        type: "playground",
        code: PostAddToRegistryContentExample,
        noRender: true
      }
    ]
  },
  {
    title: "ZipCodeSearch",
    examples: [
      {
        type: "playground",
        code: ZipCodeSearchExample,
        noRender: true
      }
    ]
  },
  {
    title: "CellCoverageFinderCTA",
    examples: [
      {
        type: "playground",
        code: CellCoverageFinderCTAExample,
        noRender: true
      }
    ]
  },
  {
    title: "AddToListRegistryFlyoutContent",
    examples: [
      {
        type: "playground",
        code: AddToListRegistryFlyoutContentExample,
        noRender: true
      }
    ]
  },
  {
    title: "AddToRegistryButton",
    examples: [
      {
        type: "playground",
        code: AddToRegistryButtonExample,
        noRender: true
      }
    ]
  },
  {
    title: "LegalFlyoutContent",
    examples: [
      {
        type: "playground",
        code: LegalFlyoutContentExample,
        noRender: true
      }
    ]
  },
  {
    title: "MoreInfoModal",
    examples: [
      {
        type: "playground",
        code: MoreInfoModalExample,
        noRender: false
      }
    ]
  },
  {
    title: "AddToCartWithLegalFlyout",
    examples: [
      {
        type: "playground",
        code: AddToCartWithLegalFlyoutExample,
        noRender: false
      }
    ]
  },
  {
    title: "ProductHelpFlyoutButton",
    examples: [
      {
        type: "playground",
        code: HelpFlyoutButtonExample,
        noRender: true
      }
    ]
  },
  {
    title: "ProductInvalidPrompt",
    examples: [
      {
        type: "playground",
        code: InvalidPrompt,
        noRender: true
      }
    ]
  },
  {
    title: "ProductCTAAddToCart",
    examples: [
      {
        type: "playground",
        code: CTAAddToCartExample,
        noRender: true
      }
    ]
  },
  {
    title: "InStockAlertForm",
    examples: [
      {
        type: "playground",
        code: InstockAlertFromExample,
        noRender: true
      }
    ]
  },
  {
    title: "ProductCTAOutOfStock",
    examples: [
      {
        type: "playground",
        code: CTAOutOfStockExample,
        noRender: true
      }
    ]
  },
  {
    title: "PreorderFlyoutContent",
    examples: [
      {
        type: "playground",
        code: PreorderFlyoutContent,
        noRender: true
      }
    ]
  },
  {
    title: "ProductPrimaryCTA",
    examples: [
      {
        type: "playground",
        code: PrimaryCTAExample,
        noRender: true
      }
    ]
  },
  {
    title: "SubmapModal",
    examples: [
      {
        type: "playground",
        code: SubmapModalExample,
        noRender: false
      }
    ]
  }
];
