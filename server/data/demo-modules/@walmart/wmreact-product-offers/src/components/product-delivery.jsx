/* @flow */
import React, {PropTypes} from "react";
import classNames from "classnames";
import monthEnum from "../enums/month";
import { getDataAutomationIdPair } from "@walmart/automation-utils";

/**
This componet display the seller's info on the marketplace page.
```jsx
<ProductDelivery
  minDate={1458860168437}
  maxDate={1459666800000}
  isWM={true}
  storeName="Mountain View"
/>
*/

const SOONER_DATE_MSG = "Want it sooner? Choose an earlier date at checkout.";
const OUT_OF_STOCK_MSG = "Pickup not available within 50 miles";
const FREE_PICKUP = "FREE pickup";
const AUTOMATION_CONTEXT = "ProductDelivery";

const _renderSecondaryMsg = ({isWM, isToday, storeName, isUpsell, isOOS, isResponsive}) => {
  if (isWM) {
    if (isOOS) {
      return (
        <div
          {...getDataAutomationIdPair("SecondaeryMsg", AUTOMATION_CONTEXT, process)}
          className="ProductDelivery-msg ProductDelivery-store"
        >
          <span className="font-semibold">{OUT_OF_STOCK_MSG}</span>
        </div>
      );
    }

    return (
      <div
        {...getDataAutomationIdPair("SecondaeryMsg", AUTOMATION_CONTEXT, process)}
        className="ProductDelivery-msg ProductDelivery-store"
      >
        <div className={classNames("display-inline-block",
          {"display-block-m": isResponsive})}>
          <span className="ProductDelivery-pickup-icon wmicon wmicon-store" />
          <span className="ProductDelivery-pickup-msg font-semibold">
            {`${FREE_PICKUP}${isToday ? " today" : ""}`}
          </span>
        </div>
        {storeName ?
        <span>
          <span className={classNames(
            {"hide-content-m": isResponsive})}>&nbsp;</span>
          at <span className="font-semibold">{storeName}</span></span> :
        null}
      </div>
    );
  }
  if (isUpsell) {
    return (
      <div
        className={classNames("ProductDelivery-msg ProductDelivery-upSell hide-content",
        {"display-block-m": isResponsive})}
      >{SOONER_DATE_MSG}</div>
    );
  }
};

const ProductDelivery = (props) => {
  const {minDate, maxDate, className, isResponsive, isWM} = props;
  const earliest = new Date(minDate);
  const latest = new Date(maxDate);
  const earliestMonth = monthEnum.english[earliest.getMonth()];
  const latestMonth = monthEnum.english[latest.getMonth()];
  const earliestDate = earliest.getDate();
  const latestDate = latest.getDate();
  const deliveryDateSubDate = earliestMonth === latestMonth ?
    "-" :
    `-${latestMonth} `;
  const deliveryDate = minDate === maxDate ?
    `${earliestMonth} ${earliestDate}` :
    `${earliestMonth} ${earliestDate}${deliveryDateSubDate}${latestDate}`;

  return (
    <div
      {...getDataAutomationIdPair("ProductDelivery", AUTOMATION_CONTEXT, process)}
      className={classNames("ProductDelivery", className,
      {"responsive-product-delivery": isResponsive})}
    >
      {minDate && maxDate ?
        <div
          {...getDataAutomationIdPair("DeliveryDate", AUTOMATION_CONTEXT, process)}
          className="ProductDelivery-delivery-date"
        >
          <span className={classNames(
            {"hide-content-m": isResponsive})}>Arrives&nbsp;</span>
          <span className="font-semibold">{deliveryDate}</span>
          {isWM ? <span
            className="display-block font-semibold ProductDelivery-msg-separator">or</span> :
            null}
        </div> : null
      }
      {_renderSecondaryMsg(props)}
    </div>
  );
};

ProductDelivery.displayName = "ProductDelivery";

ProductDelivery.propTypes = {
  /**
   if the seller is walmart
  */
  isWM: PropTypes.bool,
  /**
   if walmart OOS
  */
  isOOS: PropTypes.bool,
  /**
   if it can be picked up today
  */
  isToday: PropTypes.bool,
  /**
   it could be shipped earlier
  */
  isUpsell: PropTypes.bool,
  /**
   unix time for the earliest delivery date
  */
  minDate: PropTypes.number.isRequired,
  /**
   unix time for the latest delivery date
  */
  maxDate: PropTypes.number.isRequired,
  /**
   walmart store name
  */
  storeName: PropTypes.string,
  /**
   Any additonal style classes
   */
  className: React.PropTypes.string
};

ProductDelivery.defaultProps = {
  isWM: false,
  isToday: false,
  isUpsell: true,
  storeName: ""
};

export default ProductDelivery;
