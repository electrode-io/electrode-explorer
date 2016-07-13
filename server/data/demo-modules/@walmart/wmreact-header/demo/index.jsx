import React from "react";
import Playground from "component-playground";
import assign from "object-assign";
import { preferredStores, nearbyStores, quimbyData, storeFinderResponse } from "./data";

import headerExample from "raw!./examples/header.example";
import eyebrowNavExample from "raw!./examples/global-eyebrow-nav.example";
import eyebrowNavMobileExample from "raw!./examples/global-eyebrow-nav-mobile.example";
import storefinderLinkExample from "raw!./examples/storefinder-link.example";
import storeListItemExample from "raw!./examples/store-list-item.example";
import storeListExample from "raw!./examples/store-list.example";
import storeFinderFieldExample from "raw!./examples/store-finder-field.example";
import storeFinderPanelExample from "raw!./examples/store-finder-panel.example";
import headerLogoExample from "raw!./examples/header-logo.example";
import searchExample from "raw!./examples/global-search.example";
import searchDropdownExample from "raw!./examples/search-dropdown.example";
import buttonToggleExample from "raw!./examples/header-button-toggle.example";
import accountFlyoutExample from "raw!./examples/global-account-flyout.example";
import headerCartCountExample from "raw!./examples/header-cart-count.example";
import headerCartExample from "raw!./examples/header-cart.example";
import lhnPanelExample from "raw!./examples/lefthand-nav-panel.example";
import lhnExample from "raw!./examples/global-lefthand-nav.example";
import lhnMobileExample from "raw!./examples/global-lefthand-nav-mobile.example";
import secondaryNavExample from "raw!./examples/global-secondary-nav.example";
import marketingMessagesExample from "raw!./examples/global-marketing-messages.example";
import faderExample from "raw!./examples/fader.example";
import appBannerExample from "raw!./examples/appbanner.example";

import * as libraryScope from "../src/index";

class Index extends React.Component {

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
    title: "Header",
    examples: [
      {
        type: "playground",
        code: headerExample,
        noRender: true,
        extraScope: {
          quimbyData,
          storeFinderResponse
        }
      }
    ]
  },
  {
    title: "Global Eyebrow Nav",
    examples: [
      {
        type: "playground",
        code: eyebrowNavExample,
        noRender: true,
        extraScope: {
          quimbyData,
          storeFinderResponse
        }
      }
    ]
  },
  {
    title: "Global Eyebrow Nav Mobile",
    examples: [
      {
        type: "playground",
        code: eyebrowNavMobileExample,
        noRender: true,
        extraScope: {
          quimbyData
        }
      }
    ]
  },
  {
    title: "Store Finder Link",
    examples: [
      {
        type: "playground",
        code: storefinderLinkExample,
        noRender: true
      }
    ]
  },
  {
    title: "Store List Item",
    examples: [
      {
        type: "playground",
        code: storeListItemExample,
        noRender: true
      }
    ]
  },
  {
    title: "Store List",
    examples: [
      {
        type: "playground",
        code: storeListExample,
        noRender: true
      }
    ]
  },
  {
    title: "Store Finder Field",
    examples: [
      {
        type: "playground",
        code: storeFinderFieldExample,
        noRender: true
      }
    ]
  },
  {
    title: "Store Finder Panel",
    examples: [
      {
        type: "playground",
        code: storeFinderPanelExample,
        noRender: true,
        extraScope: {
          preferredStores,
          nearbyStores
        }
      }
    ]
  },
  {
    title: "Header Logo",
    examples: [
      {
        type: "playground",
        code: headerLogoExample,
        noRender: true
      }
    ]
  },
  {
    title: "Global Search",
    examples: [
      {
        type: "playground",
        code: searchExample,
        noRender: true,
        extraScope: {
          quimbyData
        }
      }
    ]
  },
  {
    title: "Search Dropdown",
    examples: [
      {
        type: "playground",
        code: searchDropdownExample,
        noRender: true,
        extraScope: {
          quimbyData
        }
      }
    ]
  },
  {
    title: "Header Icon Toggle",
    examples: [
      {
        type: "playground",
        code: buttonToggleExample,
        noRender: true
      }
    ]
  },
  {
    title: "Global Account Flyout",
    examples: [
      {
        type: "playground",
        code: accountFlyoutExample,
        noRender: true,
        extraScope: {
          quimbyData
        }
      }
    ]
  },
  {
    title: "Header Cart Count",
    examples: [
      {
        type: "playground",
        code: headerCartCountExample,
        noRender: true
      }
    ]
  },
  {
    title: "Header Cart",
    examples: [
      {
        type: "playground",
        code: headerCartExample,
        noRender: true
      }
    ]
  },
  {
    title: "Lefthand Nav Panel",
    examples: [
      {
        type: "playground",
        code: lhnPanelExample,
        noRender: true,
        extraScope: {
          quimbyData
        }
      }
    ]
  },
  {
    title: "Global Lefthand Nav",
    examples: [
      {
        type: "playground",
        code: lhnExample,
        noRender: true,
        extraScope: {
          quimbyData
        }
      }
    ]
  },
  {
    title: "Global Lefthand Nav Mobile",
    examples: [
      {
        type: "playground",
        code: lhnMobileExample,
        noRender: true,
        extraScope: {
          quimbyData
        }
      }
    ]
  },
  {
    title: "Global Secondary Nav",
    examples: [
      {
        type: "playground",
        code: secondaryNavExample,
        noRender: true,
        extraScope: {
          quimbyData
        }
      }
    ]
  },
  {
    title: "Global Marketing Messages",
    examples: [
      {
        type: "playground",
        code: marketingMessagesExample,
        noRender: true,
        extraScope: {
          quimbyData
        }
      }
    ]
  },
  {
    title: "Fader Util",
    examples: [
      {
        type: "playground",
        code: faderExample,
        noRender: true
      }
    ]
  },
  {
    title: "App Banner",
    examples: [
      {
        type: "playground",
        code: appBannerExample,
        noRender: true
      }
    ]
  }
];

module.exports = Index;
