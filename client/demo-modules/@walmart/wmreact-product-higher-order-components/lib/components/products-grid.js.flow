/* @flow */
import React from "react";

import Layout from "@walmart/wmreact-layout/lib/components/layout";
import ProductItem from "@walmart/wmreact-product-card/lib/components/product-item-tile";
import StoreItemTile from "@walmart/wmreact-product-card/lib/components/store-item-tile";
import Shuffle from "react-shuffle";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";

/**
Products grid.
@examples
```jsx
<ProductsGrid products={productsData} />
```
@component ProductsGrid
@import {ProductsGrid}
@playground
ProductsGrid
```
<ProductsGrid products={productsData} />
```
*/
const STORE_TILE = "store-item-tile";

export default class ProductsGrid extends React.Component {

  _renderProductItem(product, index): ReactElement {
    const keyPair = typeof index !== "undefined"
      ? { key: index }
      : undefined;

    const productWithAutomation = Object.assign(
      getDataAutomationIdPair("ProductTile", product.id, process),
      keyPair,
      product
    );
    return this.props.tileType === STORE_TILE ?
      <StoreItemTile {...productWithAutomation}/> : <ProductItem {...productWithAutomation}/>;
  }

  _renderBase(): ReactElement {
    const { columns } = this.props;
    return (
      <Layout medium={columns.medium} large={columns.large}>
        {this.props.products.map((product, index) => {
          return this._renderProductItem(product, index);
        })}
      </Layout>
    );
  }

  _renderAnimated(): ReactElement {
    return (
      <Shuffle className="Grid">
        {this.props.products.map((product) => {
          return (
            <div className="Grid-col u-size-1-5-l u-size-3-12-m u-size-6-12-s" key={product.id}>
              {this._renderProductItem(product)}
            </div>
          );
        })}
      </Shuffle>
    );
  }

  _renderStoreItemGrid(): ReactElement {
    return (
      <div className="text-left Grid store-item-grid">
        {this._renderStoreItemTiles()}
      </div>
    );
  }

  _renderStoreItemTiles(): ReactElement {
    return this.props.products.map((product, index) => {
      return (
        <div className="Grid-col u-size-1-5-l u-size-3-12-m u-size-6-12" key={index}>
          {this._renderProductItem(product, index)}
        </div>
      );
    });
  }

  render(): ReactElement {
    const { animated, automationId, tileType } = this.props;
    let markup;

    if (tileType === STORE_TILE) {
      markup = this._renderStoreItemGrid();
    } else {
      markup = animated === true
      ? this._renderAnimated()
      : this._renderBase();
    }

    return <div data-automation-id={automationId}> {markup} </div>;
  }
}

ProductsGrid.propTypes = {
  /**
  The products
  */
  products: React.PropTypes.array,
  /**
  True if it's animated
  */
  animated: React.PropTypes.bool,
  /**
  Number of columns to display
  */
  columns: React.PropTypes.object,
  /**
  Type of tile
  */
  tileType: React.PropTypes.string,
  /**
  Automation Id
  */
  automationId: React.PropTypes.string
};

ProductsGrid.defaultProps = {
  products: [],
  animated: true,
  columns: {
    medium: 3,
    large: 4
  },
  tileType: ""
};
