/* @flow */

import React, {PropTypes} from "react";
import classNames from "classnames";

import PriceFormatter from "@walmart/wmreact-formatters/lib/components/price-formatter";

class Price extends React.Component {
  renderZeroPrice():ReactElement {
    const {zeroAlt, zeroAltText, currency} = this.props;

    return zeroAlt ? (zeroAltText) : `${currency}0.00`;
  }

  render():ReactElement {
    const {
      plain, className, currency, zeroAlt, zeroAltText, price, automationId, tealeafId
    } = this.props;

    const priceValue = price || 0;

    const componentClassName = classNames("OrderSummary-Price",
      plain ? "OrderSummary-Price--plain" : "price-display",
      className);

    const componentAttributes = {
      "data-automation-id": automationId,
      "data-tl-id": tealeafId
    };

    const formatOptions = {
      currencyUnit: currency,
      useZero: zeroAlt,
      zero: zeroAltText,
      hiddenClass: (zeroAlt && priceValue === 0) ? null : "OrderSummary-Price-decimal",
      useComma: true
    };

    const formattedPrice = priceValue !== 0
      ? PriceFormatter.displayPrice(priceValue, formatOptions)
      : this.renderZeroPrice();

    return (
      <span className={componentClassName} {...componentAttributes}>
        {formattedPrice}
      </span>
    );
  }
}

Price.defaultProps = {
  className: "",
  price: 0,
  currency: "$",
  zeroAlt: false,
  zeroAltText: "FREE",
  plain: true
};

Price.displayName = "OrderSummary.Price";

Price.propTypes = {
  className: PropTypes.string,
  price: PropTypes.number,
  currency: PropTypes.string,
  zeroAlt: PropTypes.bool,
  zeroAltText: PropTypes.string,
  plain: PropTypes.bool,
  automationId: PropTypes.string,
  tealeafId: PropTypes.string
};

export default Price;
