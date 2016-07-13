/* @flow */

import React, {PropTypes} from "react";
import classNames from "classnames";

import Flyout from "@walmart/wmreact-containers/lib/components/flyout";
import Button from "@walmart/wmreact-interactive/lib/components/button";

import Price from "./price";

class ShippingCost extends React.Component {
  _getLabel():string {
    const {label, noSuffix} = this.props;

    if (/shipping\s*pass/i.test(label)) {
      return (<span className="OrderSummary-shippingPassLogo--green"></span>);
    } else if (noSuffix) {
      return `${label}`;
    } else {
      return `${label} shipping`;
    }
  }

  render():ReactElement {
    const {
      flyout, className, showFree, automation, automationIndex, showSurchargeLabel
    } = this.props;

    let shippingCostFlyout;
    if (flyout) {
      const flyoutLabel = (
        <Button className="flyout-trigger" fakelink={true}>{flyout.label}</Button>
      );
      shippingCostFlyout = (
        <div className="OrderSummary-flyout OrderSummary-label-line2">
          <Flyout direction={flyout.direction || "left"} trigger={flyoutLabel}>
            {flyout.content}
          </Flyout>
        </div>
      );
    }

    const componentClassName = classNames("OrderSummary-ShippingCost OrderSummary-line clearfix",
      className);

    const automationLabel = `${automation.label}-${automationIndex}`;
    const automationPrice = `${automation.price}-${automationIndex}`;
    const automationSurcharge = `${automation.surcharge}-${automationIndex}`;

    return (
      <div className={componentClassName}>
        <span className="OrderSummary-label" data-automation-id={automationLabel}>
          {this._getLabel()} {shippingCostFlyout}
          {showSurchargeLabel &&
            <span className="copy-mini"
              data-automation-id={automationSurcharge}>
              {showSurchargeLabel}
            </span>
          }
        </span>
        <Price {...this.props} zeroAlt={showFree} automationId={automationPrice} />
      </div>
    );
  }
}

ShippingCost.defaultProps = {
  className: "",
  label: "Shipping",
  showSurchargeLabel: null,
  price: 0,
  showFree: true,
  noSuffix: false,
  flyout: null,
  automationIndex: 0,
  automation: {
    label: "order-summary-shipping-type",
    price: "order-summary-shipping-price",
    surcharge: "order-summary-shipping-surcharge"
  }
};

ShippingCost.displayName = "OrderSummary.ShippingCost";

ShippingCost.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  showSurchargeLabel: PropTypes.string,
  price: PropTypes.number,
  showFree: PropTypes.bool,
  noSuffix: PropTypes.bool,
  flyout: PropTypes.shape({
    direction: PropTypes.string,
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ]).isRequired,
    content: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.node
    ]).isRequired
  }),
  automationIndex: PropTypes.number,
  automation: PropTypes.shape({
    label: PropTypes.string,
    price: PropTypes.string,
    surcharge: PropTypes.string
  })
};

export default ShippingCost;
