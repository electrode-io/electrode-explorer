/* @flow */

import React, {PropTypes} from "react";
import classNames from "classnames";

import Flyout from "@walmart/wmreact-containers/lib/components/flyout";
import Button from "@walmart/wmreact-interactive/lib/components/button";

import Price from "./price";

class GenericFee extends React.Component {
  _renderFlyout():?ReactElement {
    const {description} = this.props;
    if (description) {
      const flyoutTrigger = (
        <Button className="flyout-trigger" fakelink={true}>
          <i className="wmicon wmicon-help form-label-help-icon"></i>
          <span className="visuallyhidden">What is this?</span>
        </Button>
      );

      return (
        <div className="OrderSummary-flyout">
          <Flyout direction="left" trigger={flyoutTrigger}>
            {description}
          </Flyout>
        </div>
      );
    }
  }

  render():ReactElement {
    const {
      className, label, automation, automationIndex
    } = this.props;

    const componentClassName = classNames("OrderSummary-GenericFee OrderSummary-line clearfix",
      className);

    const automationLabel = `${automation.label}-${automationIndex}`;
    const automationPrice = `${automation.price}-${automationIndex}`;

    return (
      <div className={componentClassName}>
        <span className="OrderSummary-label">
          <span data-automation-id={automationLabel}>
            {label}
          </span> {this._renderFlyout()}
        </span>
        <Price {...this.props} automationId={automationPrice} />
      </div>
    );
  }
}

GenericFee.defaultProps = {
  className: "",
  label: "Misc. Fee",
  price: 0,
  description: null,
  automationIndex: 0,
  automation: {
    label: "order-summary-fee-type",
    price: "order-summary-fee-price"
  }
};

GenericFee.displayName = "OrderSummary.GenericFee";

GenericFee.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),
  automationIndex: PropTypes.number,
  automation: PropTypes.shape({
    label: PropTypes.string,
    price: PropTypes.string
  })
};

export default GenericFee;
