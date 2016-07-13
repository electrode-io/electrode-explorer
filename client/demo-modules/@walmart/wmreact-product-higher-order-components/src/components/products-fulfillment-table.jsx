/* @flow */
import React from "react";
import Table from "@walmart/wmreact-table/lib/components/table";
import ShippingPassTile from "@walmart/wmreact-shipping-pass/lib/components/shipping-pass-tile";

const { Component, PropTypes } = React;

/**
 This component displays the productsFulfillmentTable.
 The table Handles both the PICKUP and SHIPPING options.
 ```jsx
 <ProductsFulfillmentTable
   type={"SHIPPING"}
   data={[
        {shipMethod: "SHIPPING_PASS", date: "Tue, Jun 28", cost: "Free"},
        {shipMethod: "Rush", date: "Wed, Jun 29", cost: "$15.93"},
        {shipMethod: "Value", date: "Wed, Jul 6", cost: "Free"},
        {shipMethod: "Standard", date: "Thu, Jun 30", cost: "$4.97"}
      ]}
   isShippingPassAvailable={true}
   isTargetedUser={true}
   isSubscribedUser={false}
   byDate={"Wed, Jul 6"}
   learnMoreUrl={"http://www.walmart.com/cp/3472216"}
 />
 */

const pickup = "PICKUP";
const shipping = "SHIPPING";
const shippingPass = "SHIPPING_PASS";
const pickupHeaders = ["Location", "Buy online for pickup"];
const shippingHeaders = ["Type", "Arrives", "Cost"];

class ProductsFulfillmentTable extends Component {

  _isPickup(type): bool {
    return type === pickup;
  }

  _isShipping(type): bool {
    return type === shipping;
  }

  _isShippingPass(shipMethod): bool {
    return shipMethod === shippingPass;
  }

  _getOrderByTime(): string {

    let timeZone;
    let timeStr;

    try {
      //Today's date
      const today = new Date().toLocaleString("en", {timeZoneName: "short"});
      //Get timezone
      timeZone = today.split(" ").pop();
    } catch (err) {
      timeStr = "11.00a.m.";
      timeZone = "PST";
    }

    switch (timeZone) {
    case "PST":
    case "PDT":
      timeStr = "11a.m.";
      break;
    case "EST":
    case "EDT":
      timeStr = "2p.m.";
      break;
    case "MST":
    case "MDT":
      timeStr = "12p.m.";
      break;
    case "CST":
    case "CDT":
      timeStr = "1p.m.";
      break;
    default:
      //default to 11.00a.m. PST
      timeStr = "11.00a.m.";
      timeZone = "PST";
    }

    return {
      timeZone,
      timeStr
    };

  }

  _renderHeaders({type}): ReactElement {
    let headers;
    if (this._isPickup(type)) {
      headers = pickupHeaders;
    } else if (this._isShipping(type)) {
      headers = shippingHeaders;
    }

    return headers.map((header) => {
      return (
        <Table.Header>{header}</Table.Header>
      );
    });
  }

  _renderRows({data, type}): ReactElement {

    let renderRowFunction;
    if (this._isPickup(type)) {
      renderRowFunction = this._renderPickupRow;
    } else if (this._isShipping(type)) {
      renderRowFunction = this._renderShippingRow;
    }

    return data.map((rowData, idx) => {
      return renderRowFunction(rowData, idx, this);
    });
  }

  _renderPickupRow(rowData, idx): ReactElement {
    return (
      <Table.Row key={`row-${idx}`}>
        <Table.Cell>
          <div> <b>{rowData.storeName}</b> - {rowData.distance} </div>
          <div> {rowData.storeAddress} </div>
        </Table.Cell>
        <Table.Cell>
          {rowData.date}
        </Table.Cell>
      </Table.Row>
    );
  }

  _renderShippingRow(rowData, idx, scope): ReactElement {

    return (
      <Table.Row key={`row-${idx}`}>
        <Table.Cell className="font-bold">
          {
            scope._isShippingPass(rowData.shipMethod) ?
              scope._renderShippingPassTile() :
              rowData.shipMethod
          }
        </Table.Cell>
        <Table.Cell>{rowData.date}</Table.Cell>
        <Table.Cell>{rowData.cost}</Table.Cell>
      </Table.Row>
    );
  }

  _renderShippingPassInfo({
    isShippingPassAvailable,
    isTargetedUser,
    isSubscribedUser,
    byDate,
    learnMoreUrl,
    type}
  ): ReactElement {
    let shippingPassInfoHtml = null;
    if (isShippingPassAvailable && this._isShipping(type)) {
      let shippingPassInfoInnerHtml;
      if (isTargetedUser) {
        shippingPassInfoInnerHtml = this._renderTargetedUserShippingPassInfo(byDate, learnMoreUrl);
      } else if (isSubscribedUser) {
        shippingPassInfoInnerHtml = this._renderSubscribedUserShippingPassInfo();
      }
      shippingPassInfoHtml = (<div className="prod-shippingPassInfo">
          {shippingPassInfoInnerHtml}
        </div>);
    }
    return shippingPassInfoHtml;
  }

  _renderTargetedUserShippingPassInfo(byDate, learnMoreUrl): ReactElement {
    return (
      <span className="prod-targetedUsersSPInfo">
        Get this item by <b>{byDate}</b> with {this._renderShippingPassTile()}
        <a className="s-margin-left" href={learnMoreUrl}>learn more</a>
      </span>
    );
  }

  _renderSubscribedUserShippingPassInfo(): ReactElement {
    const orderByTime = this._getOrderByTime();
    return (
      <span className="prod-subscribedUsersSPInfo">
        Order by <b>{orderByTime.timeStr}</b> {orderByTime.timeZone} and this item ships today.
      </span>
    );
  }

  _renderShippingPassTile() {
    return (
      <div className="display-inline-block">
        <ShippingPassTile
          shippingPassEligible={() => {return true;}}/>
      </div>
    );
  }

  render(): ReactElement {
    return (
      <div>
        <Table className="product-fulfillment-table">
          <Table.Head className="text-left">
            {this._renderHeaders(this.props)}
          </Table.Head>
          <Table.Body>
            {this._renderRows(this.props)}
          </Table.Body>
        </Table>
        {this._renderShippingPassInfo(this.props)}
      </div>
    );
  }

}

ProductsFulfillmentTable.displayName = "ProductsFulfillmentTable";

ProductsFulfillmentTable.propTypes = {
  /**
   The type of the table.
   */
  type: PropTypes.oneOf([pickup, shipping]).isRequired,
  /**
   The data used to populate the table.
   */
  data: PropTypes.array.isRequired,
  /**
   Is the ShippingPass option available for the item
   */
  isShippingPassAvailable: PropTypes.bool,
  /**
   Is the user a ShippingPass targeted user (cookie:SP=t)
   */
  isTargetedUser: PropTypes.bool,
  /**
   Is the user a ShippingPass subscribed user (cookie:SP=s)
   */
  isSubscribedUser: PropTypes.bool,
  /**
   Shipping Pass expected delivery date
   */
  byDate: PropTypes.string,
  /**
   href for Shipping pass learn more link
   */
  learnMoreUrl: PropTypes.string
};

ProductsFulfillmentTable.defaultProps = {
  isShippingPassAvailable: false,
  isTargetedUser: true,
  isSubscribedUser: false,
  learnMoreUrl: "http://www.walmart.com/cp/3472216"
};

export default ProductsFulfillmentTable;
