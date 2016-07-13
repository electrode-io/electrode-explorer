import React, { PropTypes, Component } from "react";
import Playground from "component-playground";
import assign from "object-assign";

import ministoryData from "../test/client/test-data/ministory-test-data";
import HomepageSavingCenterData from "../test/client/test-data/homepage-saving-center-test-data";
import itemCarouselCuratedData from "../test/client/test-data/item-carousel-curated-test-data";
import categoryCarouselCuratedData from "../test/client/test-data/category-carousel-curated-test-data";
import singleStoryImageMapData from "../test/client/test-data/single-story-image-map-data";
import multiStoryPOVData from "../test/client/test-data/multi-story-pov-data";
import FeaturedCategoriesCuratedData from "../test/client/test-data/featured-categories-curated";
import VerticalCategoryCarouselCuratedData from "../test/client/test-data/vertical-category-carousel-curated-data";
import VerticalItemCarouselCuratedData from "../test/client/test-data/vertical-item-carousel-curated-data";
import wmxompAdCarouselData from "../test/client/test-data/wmxomp-ad-carousel-test-data";

import * as libraryScope from "../src/index";

export default class Index extends Component {
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
  scope: PropTypes.object
};

Index.Components = [
  {
    title: "Multi Story POV",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/multi-story-pov-responsive.example"),
        noRender: true,
        extraScope: {multiStoryPOVData}
      }
    ]
  },
  {
    title: "Featured Categories curated",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/featured-categories-curated.example"),
        noRender: true,
        extraScope: {FeaturedCategoriesCuratedData}
      }
    ]
  },
  {
    title: "Tempo Featured Category Tile",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/tempo-category-tile.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Homepage Saving Center",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/homepage-saving-center.example"),
        noRender: true,
        extraScope: {HomepageSavingCenterData}
      }
    ]
  },
  {
    title: "Single Story POV with image map",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/single-story-pov-image-map.example"),
        noRender: true,
        extraScope: {singleStoryImageMapData}
      }
    ]
  },
  {
    title: "Highlighted Departments",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/highlighted-departments.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Ministory Tile",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/mini-story-tile.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Ministory Stackable",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/mini-story-stackable.example"),
        noRender: true,
        extraScope: {ministoryData}
      }
    ]
  },
  {
    title: "Theme Button",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/theme-button.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Module Header",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/module-header.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Banner Message",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/banner-message.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Tempo Item Tile",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/tempo-item-tile.example"),
        noRender: true
      }
    ]
  },
  {
    title: "Category Carousel Curated",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/category-carousel-curated.example"),
        noRender: true,
        extraScope: {categoryCarouselCuratedData}
      }
    ]
  },
  {
    title: "Item Carousel Curated",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/item-carousel-curated.example"),
        noRender: true,
        extraScope: {itemCarouselCuratedData}
      }
    ]
  },
  {
    title: "WMXOMP Ad Carousel",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/wmxomp-ad-carousel.example"),
        noRender: true,
        extraScope: {wmxompAdCarouselData}
      }
    ]
  },
  {
    title: "vertical Item Carousel Curated",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/vertical-item-carousel-curated.example"),
        noRender: true,
        extraScope: {VerticalItemCarouselCuratedData}
      }
    ]
  },
  {
    title: "vertical Category Carousel Curated",
    examples: [
      {
        type: "playground",
        code: require("raw!./examples/vertical-category-carousel-curated.example"),
        noRender: true,
        extraScope: {VerticalCategoryCarouselCuratedData}
      }
    ]
  }
];
