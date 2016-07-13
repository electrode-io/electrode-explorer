import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

import libraryScope from "../src/index";

const components = [
  {
    title: "Banner",
    examples: [
      {
        title: "Image Banner",
        type: "playground",
        code: require("raw!./examples/banner1.example"),
        noRender: true
      },
      {
        title: "Message Banner",
        type: "playground",
        code: require("raw!./examples/banner2.example"),
        noRender: true
      }
    ]
  },
  {
    title: "BreadCrumbs",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/breadcrumbs-single.example"),
        noRender: true
      },
      {
        type: "playground",
        code: require("raw!./examples/breadcrumbs.example"),
        noRender: true
      }
    ]
  },
  {
    title: "ExpandableHtmlText",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/expandable-html-text.example"),
        noRender: true
      }
    ]
  },
  {
    title: "FacetTab",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/facet-tab.example"),
        noRender: true
      }
    ]
  },
  {
    title: "InfiniteMenu",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/infinite-menu.example"),
        noRender: true
      }
    ]
  },
  {
    title: "MinistoryStackable",
    examples: [
      {
        title: "Layout 1: [ [1/3, 1/3, 1/3], [1/3, 1/3, 1/3] ]",
        type: "playground",
        code: require("raw!./examples/mini-story-stackable1.example"),
        noRender: true
      },
      {
        title: "Layout 2: [ [2/3, 1/3], [1/3, 2/3] ]",
        type: "playground",
        code: require("raw!./examples/mini-story-stackable2.example"),
        noRender: true
      },
      {
        title: "Layout 3: [ [2/3, 1/3], [1/3, 1/3, 1/3] ]",
        type: "playground",
        code: require("raw!./examples/mini-story-stackable3.example"),
        noRender: true
      },
      {
        title: "Layout 4: [ [2/3, 1/3], [1/3, 2/3], [1/3, 1/3, 1/3] ]",
        type: "playground",
        code: require("raw!./examples/mini-story-stackable4.example"),
        noRender: true
      }
    ]
  },
  {
    title: "ModuleDrawer",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/module-drawer.example"),
        noRender: true
      }
    ]
  },
  {
    title: "ModuleTitle",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/module-title.example"),
        noRender: true
      },
      {
        type: "playground",
        code: require("raw!./examples/module-title-link.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Multi Story Module",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/multi-story.example"),
        noRender: true
      }
    ]
  },
  {
    title: "PopularCategories",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/popular-categories.example"),
        noRender: true
      },
      {
        type: "playground",
        code: require("raw!./examples/popular-categories-no-button.example"),
        noRender: true
      }
    ]
  },
  {
    title: "ProductCarousel",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/product-carousel.example"),
        noRender: true
      }
    ]
  },
  {
    title: "RedirectMessage",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/redirect-message.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Single Story Module",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/single-story.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Single Item Module",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/single-item-basic.example"),
        noRender: true
      },
      {
        type: "playground",
        code: require("raw!./examples/single-item.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Sidebar Menu Module",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/sidebar-menu-module.example"),
        noRender: true
      }
    ]
  },
  {
    title: "TabNavigation",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/tab-navigation.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Tabbed Product Carousel",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/tabbed-product-carousel.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Themed Tile",
    examples: [
      {
        title: "Themed tile with only background image",
        type: "playground",
        code: require("raw!./examples/themed-tile1.example"),
        noRender: true
      },
      {
        title: "Themed tile with theme button",
        type: "playground",
        code: require("raw!./examples/themed-tile2.example"),
        noRender: true
      }
    ]
  },
  {
    title: "TopBrands",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/top-brands.example"),
        noRender: true
      }
    ]
  },
  {
    title: "CrossLinksModule",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/cross-links-module.example"),
        noRender: true
      }
    ]
  }
];

export default React.createClass({
  propTypes: {
    scope: React.PropTypes.object
  },

  getComponents() {
    const localScope = assign({React}, this.props.scope || {}, libraryScope);
    return components.map((component, index) => (
      <div key={index}>
        <h3 id={component.title}>{component.title}</h3>
        {component.examples.map((example, subindex) => (
          <div key={subindex}>
            {example.title ? <h4>{example.title}</h4> : null}
            <Playground
              codeText={example.code}
              scope={localScope}
              noRender={example.noRender}/>
          </div>
        ))}
      </div>
    ));
  },

  render() {
    return (
      <div className="component-documentation">
        {this.getComponents()}
      </div>
    );
  }
});
