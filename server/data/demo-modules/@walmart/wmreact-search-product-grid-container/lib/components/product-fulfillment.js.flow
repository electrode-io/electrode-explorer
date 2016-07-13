import React from "react";
import classNames from "classnames";
import _ from "underscore";
import { formatDate } from "../utils/date";
import { formatUSD } from "../utils/currency";

export default class ProductFulfillment extends React.Component {
  _getShippingInfo(fulfillment): ReactElement {
    const {inventory, cookieValue, shippingPassEligible,
      preOrderAvailableDate, sellerName} = this.props;
    const shippingInfoJsx = [];
    if (!(inventory && inventory.displayFlags &&
      inventory.displayFlags[0] === "OUT_OF_STOCK")) {
      _.each(fulfillment.s2HDisplayFlags, function (val) {
        switch (val) {
        case "PRE_ORDER":
          shippingInfoJsx.push(
            <span className="pre-order-message">
              <strong>Preorder now.</strong>
              &nbsp;Item ships on {formatDate(preOrderAvailableDate)}
            </span>
          );
          break;
        case "MARKETPLACE":
          shippingInfoJsx.push(
            <span className="marketplace-sold-by">
              Sold &amp; Shipped by {sellerName}
            </span>
          );
          break;
        case "MEDIA":
          shippingInfoJsx.push(
            <div className="media-product">
              <span className="vudu-media-streaming"><b>Instant Video Streaming by&nbsp;</b><span
                className="wmicon wmicon-vudu vudu-logo"></span></span>
              <span className="rent-media-streaming"><b>Rent</b> for hours </span>
              <span className="buy-media-streaming"><b>Buy</b> unlimited viewings</span>
            </div>
          );
          break;
        case "FREE_SHIPPING":
          if ((cookieValue && cookieValue !== "s") ||
            (cookieValue && cookieValue === "s"
            && !shippingPassEligible) || !cookieValue) {
            shippingInfoJsx.push(
              <div className="free-shipping">
                <span className="free-label">Free</span> shipping
              </div>
            );
          }
          break;
        case "THRESHOLD_SHIPPING":
          if (!(cookieValue && cookieValue === "s")) {
            shippingInfoJsx.push(
              <div className="free-threshold-shipping">
                <span className="free-label">Free</span>
                &nbsp;shipping on orders over {formatUSD(fulfillment.thresholdAmount, 0)}
              </div>
            );
          }
          break;
        }
      }, this);
    }
    return shippingInfoJsx;
  }

  _getPickupInfo(fulfillment):ReactElement {
    const pickupInfoJsx = [];
    const {inventory, prefStoreAddress, isPutFilterSelected} = this.props;
    if (!(inventory && inventory.displayFlags && inventory.displayFlags[0] === "OUT_OF_STOCK")) {
      _.each(fulfillment.s2SDisplayFlags, function (val) {
        switch (val) {
        case "PICKUP_TODAY":
          pickupInfoJsx.push(
            <div className="free-pickup-today"><span className="free-label">Free</span>
            &nbsp;store pickup today</div>
          );
          break;
        case "PICKUP":
          const store = prefStoreAddress;
          if (isPutFilterSelected && store) {
            if (store.address) {
              const location = store.address.city + " - " + store.address.address1;
              pickupInfoJsx.push(
                <div className="put-oos display-block margin-top">
                  <b className="display-block">Not available in:</b>
                <span className="put-oss-address display-block">
                  {location}
                </span>
                <span className="link-fake-text display-block">
                  Check in other stores
                </span>
                </div>
              );
            }
          } else {
            pickupInfoJsx.push(
              <div className="free-pickup"><span className="free-label">Free</span>
              &nbsp;store pickup</div>
            );
          }
          break;
        }
      }, this);
    }
    return pickupInfoJsx;
  }

  render(): ReactElement {
    const classes = classNames({
      "search-result-product-shipping-details": true,
      "listview": !this.props.gridView,
      "gridview": this.props.gridView,
      "hide-display": this.props.hidePriceFulfillmentDisplay
    });
    const fulfillment = this.props.fulfillment;
    let ret = null;
    if (_.isEmpty(fulfillment)) { return ret; }

    ret = (
      <div className={classes}>
        {this._getShippingInfo(fulfillment)}
        {this._getPickupInfo(fulfillment)}
      </div>
    );
    return ret;
  }
}

ProductFulfillment.displayName = "ProductFulfillment";
ProductFulfillment.propTypes = {
  "hidePriceFulfillmentDisplay": React.PropTypes.bool,
  "inventory": React.PropTypes.object,
  "fulfillment": React.PropTypes.object,
  "cookieValue": React.PropTypes.bool,
  "shippingPassEligible": React.PropTypes.bool,
  "preOrderAvailableDate": React.PropTypes.string,
  "prefStoreAddress": React.PropTypes.object,
  "isPutFilterSelected": React.PropTypes.bool,
  "sellerName": React.PropTypes.string,
  "gridView": React.PropTypes.bool
};

export default ProductFulfillment;
