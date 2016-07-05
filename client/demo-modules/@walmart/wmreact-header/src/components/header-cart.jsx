/* @flow */
import React, { PropTypes } from "react";
import Link from "@walmart/wmreact-base/lib/components/link";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import HeaderCartCount from "./header-cart-count";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";

/**
 A header cart icon component.
 @examples
 ```jsx
<HeaderCart totalItemsCount={100}/>
 ```
 @component HeaderCart
 @import {HeaderCart}
 @references HeaderCart
 @playground
 HeaderCart
 ```
 <HeaderCart totalItemsCount={100}/>
 ```
 */

const HeaderCart = (props: Object): ReactElement => {
  const {
    dataAutomationId,
    totalItemsCount,
    maxCountThreshold
  } = props;

  const _renderCartCount = (): ?ReactElement => {
    if (totalItemsCount > 0) {
      return (
        <HeaderCartCount
          totalItemsCount={totalItemsCount}
          maxCountThreshold={maxCountThreshold}
          {...getDataAutomationIdPair("count", dataAutomationId)}
        />
      );
    }
  };

  return (
    <Link
      className="header-Cart display-block text-center"
      href="/cart"
      {...getDataAutomationIdPair(dataAutomationId, "")}>
      <Icon name="cart" />
      {_renderCartCount()}
      <span className="visuallyhidden">Items in cart</span>
    </Link>
  );
};

HeaderCart.displayName = "HeaderCart";

HeaderCart.propTypes = {
  /**
  Total number of items.
   */
  totalItemsCount: PropTypes.number,
  /**
  The max count value. After totalItemsCount reaches maxCountThreshold,
  the HeaderCartCount would start displaying the value as
  (maxCountThreshold+) instead of actual totalItemsCount, for e.g. if maxCountThreshold is 99
  and totalItemsCount is 100, the component would display the total as 99+ instead of 100.
  Default value for this is 99.
   */
  maxCountThreshold: PropTypes.number,
  /**
  dataAutomationId for the element.
   */
  dataAutomationId: PropTypes.string
};

HeaderCart.defaultProps = {
  totalItemsCount: 0,
  maxCountThreshold: 99,
  dataAutomationId: "header-Cart"
};

export default HeaderCart;
