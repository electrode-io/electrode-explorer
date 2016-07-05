/* @flow */
import React from "react";

import Tile from "./tile";
import AvailabilityStatus
from "@walmart/wmreact-product-offers/lib/enums/availability-status";

/**
Store item tile.
@examples
```jsx
<StoreItemTile />
```
@component StoreItemTile
@import {StoreItemTile}
@playground
StoreItemTile
```
<StoreItemTile />
```
*/
export default class StoreItemTile extends Tile {

  _renderInStoreInfo(): ReactElement {
    if (this.props.inStoreInfo.availabilityStatus === AvailabilityStatus.IN_STOCK) {
      return (
        <div className="stockStatus">
          <strong className="stockStatus-available" > In Stock </strong>
          {this._renderDepartment()}
          {this._renderAisle()}
        </div>
      );
    } else {
      return (
        <div className="stockStatus">
          <strong className="stockStatus-unavailable"> Out of Stock </strong>
        </div>
      );
    }
  }

  _renderDepartment(): ReactElement {
    const {inStoreInfo} = this.props;
    return inStoreInfo.department ? (
      <span>
        in {inStoreInfo.department}
      </span>
    ) : null;
  }

  _renderAisle(): ReactElement {
    const { inStoreInfo } = this.props;
    return inStoreInfo.aisle ? (
      <p className="stockStatus-aisle">
        <i className="wmicon wmicon-pin"></i>
          Aisle <span className="font-semibold"> {inStoreInfo.aisle} </span>
          {this._renderLowQuantity()}
      </p>
    ) : null;
  }

  _renderLowQuantity(): ReactElement {
    const { inStoreInfo } = this.props;
    return inStoreInfo.quantity < 5 ? (
      <span className="stockStatus-lowQuantity">
        Only a few left!
      </span>
    ) : null;
  }

  render(): ReactElement {
    return (
      <div className="StoreItemTile">
        {this._renderImage()}
        {this.props.inStoreInfo && this._renderInStoreInfo()}
        {this._renderContent()}
      </div>
    );
  }
}

StoreItemTile.displayName = "StoreItemTile";

StoreItemTile.propTypes = {
  inStoreInfo: React.PropTypes.object
};
