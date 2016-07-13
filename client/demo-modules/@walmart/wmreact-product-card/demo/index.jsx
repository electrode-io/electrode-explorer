import React from "react";
import Playground from "component-playground";
import assign from "object-assign";

import ProductBasicInfoExample from "raw!./examples/product-basic-info.example";
import ProductCallToActionExample from "raw!./examples/product-call-to-action.example";
import ProductCardExample from "raw!./examples/product-card.example";
import ProductCardFlagListExample from "raw!./examples/product-card-flag-list.example";
import ProductImageExample from "raw!./examples/product-image.example";
import ProductInformationExample from "raw!./examples/product-information.example";
import ProductItemTileExample from "raw!./examples/product-item-tile.example";
import ProductSellerCardExample from "raw!./examples/product-seller-card.example";
import ProductShortInfoExample from "raw!./examples/product-short-info.example";
import ProductSwatchSelectorExample from "raw!./examples/product-swatch-selector.example";
import ProductThemeTileExample from "raw!./examples/product-theme-tile.example";
import StoreItemTileExample from "raw!./examples/store-item-tile.example";
import TileBrickExample from "raw!./examples/tile-brick.example";
import TileExample from "raw!./examples/tile.example";
import ProductCompetitorInfoExample from "raw!./examples/product-competitor-info.example";

import * as libraryScope from "../src/index";

import variantTypes from "./data/variantTypes";
import tileData from "./data/tileData";

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
    title: "ProductCallToAction",
    examples: [
      {
        type: "playground",
        code: ProductCallToActionExample,
        noRender: true
      }
    ]
  },
  {
    title: "ProductCard",
    examples: [
      {
        type: "playground",
        code: ProductCardExample,
        noRender: true,
        extraScope: {variantTypes}
      }
    ]
  },
  {
    title: "ProductCardFlagList",
    examples: [
      {
        type: "playground",
        code: ProductCardFlagListExample,
        noRender: true
      }
    ]
  },
  {
    title: "ProductImage",
    examples: [
      {
        type: "playground",
        code: ProductImageExample,
        noRender: true
      }
    ]
  },
  {
    title: "ProductSwatchSelector",
    examples: [
      {
        type: "playground",
        code: ProductSwatchSelectorExample,
        noRender: true
      }
    ]
  },
  {
    title: "ProductInformation",
    examples: [
      {
        type: "playground",
        code: ProductInformationExample,
        noRender: true
      }
    ]
  },
  {
    title: "ProductBasicInfo",
    examples: [
      {
        type: "playground",
        code: ProductBasicInfoExample,
        noRender: true
      }
    ]
  },
  {
    title: "ProductShortInfo",
    examples: [
      {
        type: "playground",
        code: ProductShortInfoExample,
        noRender: true
      }
    ]
  },
  {
    title: "Tile",
    examples: [
      {
        type: "playground",
        code: TileExample,
        noRender: true
      }
    ]
  },
  {
    title: "Tile.Brick",
    examples: [
      {
        type: "playground",
        code: TileBrickExample,
        noRender: true
      }
    ]
  },
  {
    title: "ProductItemTile",
    examples: [
      {
        type: "playground",
        code: ProductItemTileExample,
        noRender: true,
        extraScope: {tileData}
      }
    ]
  },
  {
    title: "ProductSellerCard",
    examples: [
      {
        type: "playground",
        code: ProductSellerCardExample,
        noRender: true
      }
    ]
  },
  {
    title: "ProductThemeTile",
    examples: [
      {
        type: "playground",
        code: ProductThemeTileExample,
        noRender: true
      }
    ]
  },
  {
    title: "StoreItemTile",
    examples: [
      {
        type: "playground",
        code: StoreItemTileExample,
        noRender: true
      }
    ]
  },
  {
    title: "ProductCompetitorInfo",
    examples: [
      {
        type: "playground",
        code: ProductCompetitorInfoExample,
        noRender: true
      }
    ]
  }
];
