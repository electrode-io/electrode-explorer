/* @flow */
import React, {PropTypes} from "react";
import classNames from "classnames";
import Link from "@walmart/wmreact-base/lib/components/link";
import { getDataAutomationIdPair } from "@walmart/automation-utils";

/**
This componet display the seller's info on the marketplace page.
```jsx
<ProductSellerInfo
  name="OJ Commerce"
  link="http://www.ojcommerce.com/"
  logo="http://cloudfront.ojcommerce.com/img/des/logo.png"
  returnPolicy=
    "https://www.walmart.com/reviews/seller/42?offerId=64CC7E13E445433BA905A9AD8696126E"
/>
*/

const AUTOMATION_CONTEXT = "ProductSellerInfo";
const DEFAULT_SOLD_AT = "Sold at";
const DEFAULT_SOLD_AND_SHIPPED_BY = "Sold & Shipped by";

const _renderLogo = ({isWM, link, logo, isResponsive, removeLink}) => {
  if ((!isWM && !logo) || removeLink) {
    // if it's not a wm seller, and it doesn't have a logo.
    // BTW, this should be considered as a data error.
    // For now, we don't show logo
    return null;
  }
  const sellerLink = isWM ? "http://help.walmart.com/" : link;
  const backgroundImage = isWM ? "" : `url(${logo})`;
  const logoClassNames = classNames("hide-content", {"SellerInfo-walmart-logo": isWM,
    "display-block-m": isResponsive}, "SellerInfo-logo");

  return (
    <Link
      href={sellerLink}
      style={{backgroundImage}}
      {...getDataAutomationIdPair("Logo", AUTOMATION_CONTEXT, process)}
      className={logoClassNames}
    />
  );
};

const _renderSoiMessage = (isWM, isSOI, isResponsive) => {
  if (isWM && isSOI) {
    return (<span className={classNames("SellerInfo-Soi",
      {"hide-content-m": isResponsive})}>In-store purchase only</span>);
  }
};

const _renderSellerLink = (sellerName, sellerLink, removeLink) => {
  if (removeLink) {
    return (
      <span {...getDataAutomationIdPair("SellerName", AUTOMATION_CONTEXT, process)}
        className="seller-shipping-msg font-bold u-textBlue">{sellerName}</span>
    );
  }

  return (
    <Link
      {...getDataAutomationIdPair("SellerName", AUTOMATION_CONTEXT, process)}
      href={sellerLink} className="seller-shipping-msg font-bold"
      >{sellerName}</Link>
  );
};

const _renderReturnPolicy = ({isWM, isSOI, returnPolicy}) => {
  let returnPolicyText = "Return policy";
  if (isWM) {
    returnPolicyText = isSOI ?
      "Free returns in stores" : "Free returns online and in stores";
    return (
      <span
        {...getDataAutomationIdPair("ReturnPolicy", AUTOMATION_CONTEXT, process)}
        className="SellerInfo-return-policy font-semibold"
      >
        {returnPolicyText}
      </span>
    );
  }
  return (
    <Link
      {...getDataAutomationIdPair("ReturnPolicy", AUTOMATION_CONTEXT, process)}
      href={returnPolicy} className="SellerInfo-return-policy"
    >
      {returnPolicyText}
    </Link>
  );
};

const ProductSellerInfo = (props) => {
  const {isWM, isSOI, name, link, removeLink, className, returnPolicy, isResponsive} = props;
  const isWMSoi = isWM && isSOI;
  const soldShippedBy = isWMSoi ? DEFAULT_SOLD_AT : DEFAULT_SOLD_AND_SHIPPED_BY;
  let sellerName = isWM ? "Walmart" : name;
  sellerName = isWMSoi ? "Walmart store" : sellerName;
  const sellerLink = isWM ? "http://help.walmart.com/" : link;

  return (
    <div
      {...getDataAutomationIdPair("ProductSellerInfo", AUTOMATION_CONTEXT, process)}
      className={classNames("SellerInfo", {"SellerInfo-responsive": isResponsive},
      className)}
    >
      <div>
        <span
          {...getDataAutomationIdPair("SoldShippedBy", AUTOMATION_CONTEXT, process)}
          className="SellerInfo-shipping-msg"
        >
          <span className="no-wrap">{soldShippedBy}</span>
        </span>
        {_renderSellerLink(sellerName, sellerLink, removeLink)}
        {isWM ?
          <i
            className={classNames("wmicon wmicon-16 wmicon-spark xxs-margin-left",
              {"hide-content-m": isResponsive})}
          /> : null}
        {_renderSoiMessage(isWM, isSOI, isResponsive)}
      </div>
      <div className="logo-return-container">
        {_renderLogo(props)}
        { returnPolicy && _renderReturnPolicy(props) }
      </div>
    </div>
  );
};

ProductSellerInfo.displayName = "ProductSellerInfo";

ProductSellerInfo.propTypes = {
  /**
   if the seller is walmart online or store
  */
  isWM: PropTypes.bool,
  /**
   store only item from walmart
  */
  isSOI: PropTypes.bool,
  /**
   is pickup today
  */
  name: PropTypes.string,
  /**
   seller's logo showing on the component
  */
  logo: PropTypes.string,
  /**
   seller's return policy showing on the component
  */
  returnPolicy: PropTypes.string,
  /**
   seller's website linking from the name and logo
  */
  link: PropTypes.string,
  /**
   remove link for use in sbot
  */
  removeLink: PropTypes.bool,
  /**
   Any additonal style classes
   */
  className: React.PropTypes.string
};

ProductSellerInfo.defaultProps = {};

export default ProductSellerInfo;
