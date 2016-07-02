import React from "react";
import Price from "./price";
import classNames from "classnames";

/**
 * Product Shipping Price component
 *
 * Component used to display shipping price message
 * Usage can be explored at @playground
 *
 * <ProductShippingPrice
 *  primaryShippingPrice={100}
 *  logo="seller-offer-shipping-pass-logo"
 *  secondaryMessage="shipping"
 *  currency="$"
 *  secondaryShippingPrice={123}
 *  showPlus={true}
 * />
 *
 */

const _renderShippingPass = (logo) => {
  return (
     <div className={classNames(logo)}></div>
  );
};

const _renderShippingPrice = (props) => {
  const {primaryShippingPrice, currency} = props;
  return (
 <span><Price currency={currency} price={primaryShippingPrice}
   showMantissa={true} className="xxs-margin-left price"/></span>
 );
};

const _renderFreeMessage = () => {
  return (
   <span className="font-semibold">FREE</span>
 );
};

const _renderPrimaryMessage = (props) => {
  const {primaryShippingPrice} = props;
  return (
   <span> {primaryShippingPrice ? _renderShippingPrice(props) :
     _renderFreeMessage()}</span>
  );
};

const _renderSecondaryMessage = (props) => {
  const {secondaryMessage, currency, secondaryShippingPrice} = props;
  return (
   <span className="shipping-msg xxs-margin-left secondaryMessage">
    {secondaryMessage} {secondaryShippingPrice ? "+" : null}
    {secondaryShippingPrice ? <Price currency={currency} price={secondaryShippingPrice}
      showMantissa={false} /> : null}
    </span>
 );
};

const ProductShippingPrice = (props) => {
  const {logo, className, showPlus, isResponsive} = props;
  return (
    <div className={classNames("product-shipping-price display-inline-block",
      className, { "responsive-shipping-price display-block-m": isResponsive })}>
       <span className="plus">{showPlus ? "+" : null}</span>
       {_renderPrimaryMessage(props)}
       {_renderSecondaryMessage(props)}
     <div className={classNames("hide-content",
        className, { "display-inline-block-m": isResponsive })}>
      {_renderShippingPass(logo)}
     </div>
   </div>
  );
};

ProductShippingPrice.propTypes = {
 /**
 * This is shipping price
 */
  "primaryShippingPrice": React.PropTypes.number,

 /**
 * This is secondary shipping message
 */
  "secondaryMessage": React.PropTypes.string,

 /**
 * logo to be displayed
 */
  "logo": React.PropTypes.string,

 /**
 * Currency to fed in as currency symbols
 * Can also use the ISO code for currency, but will not be translated to currency symbol
 */
  "currency": React.PropTypes.string,

 /**
 * Price if we have any for secondary message
 */
  "secondaryShippingPrice": React.PropTypes.number,

  /**
 * true if we have to show "+" before message
 */
  "showPlus": React.PropTypes.bool,

/**
* Any additonal style classes
*/
  "className": React.PropTypes.string

};

export default ProductShippingPrice;
