/* @flow */

import React, {PropTypes} from "react";
import classNames from "classnames";

import Flyout from "@walmart/wmreact-containers/lib/components/flyout";
import Button from "@walmart/wmreact-interactive/lib/components/button";

import Price from "./price";

class LineItem extends React.Component {
  renderLabel():ReactElement {
    const {
      label, automation, automationIndex, labelExtension
    } = this.props;

    const automationLabel = `${automation.label}-${automationIndex}`;

    const labelInner = (/shipping\s*pass/i.test(label))
      ? (<span className="OrderSummary-shippingPassLogo--green"></span>)
      : `${label}`;

    return (
      <span className="OrderSummary-label" data-automation-id={automationLabel}>
        {labelInner} {this.renderFlyout()}
        {labelExtension && this.renderLabelExtension()}
      </span>
    );
  }

  renderPrice():ReactElement {
    const {
      showFree, automation, automationIndex
    } = this.props;

    const automationPrice = `${automation.price}-${automationIndex}`;

    return (
      <Price {...this.props} zeroAlt={showFree} automationId={automationPrice} />
    );
  }

  renderLabelExtension():ReactElement {
    const {labelExtension, automation, automationIndex} = this.props;
    const automationLabel = `${automation.labelExtension}-${automationIndex}`;

    return (
      <span className="OrderSummary-label-line2" data-automation-id={automationLabel}>
        {labelExtension}
      </span>
    );
  }

  renderFlyout():ReactElement {
    const {flyout} = this.props;

    if (flyout) {
      let flyoutTrigger = (
        <Button className="flyout-trigger" fakelink={true}>
          {flyout.label}
        </Button>
      );

      if (/wmicon/i.test(flyout.label)) {
        flyoutTrigger = (
          <Button className="flyout-trigger" fakelink={true}>
            <i className="wmicon wmicon-help form-label-help-icon"></i>
            <span className="visuallyhidden">What is this?</span>
          </Button>
        );
      }

      const flyoutClassNames = classNames("OrderSummary-flyout", {
        "OrderSummary-label-line2": flyout.newline
      });

      return (
        <div className={flyoutClassNames}>
          <Flyout direction={flyout.direction || "left"} trigger={flyoutTrigger}>
            {flyout.content}
          </Flyout>
        </div>
      );
    }
  }

  render():ReactElement {
    const {className} = this.props;
    const componentClassName = classNames("OrderSummary-LineItem OrderSummary-line clearfix",
      className);

    return (
      <div className={componentClassName}>
        {this.renderLabel()}
        {this.renderPrice()}
      </div>
    );
  }
}

LineItem.defaultProps = {
  className: "",
  label: "Line Item",
  price: 0,
  showFree: false,
  flyout: null,
  labelExtension: null,
  automationIndex: 0,
  automation: {
    label: "order-summary-item-type",
    price: "order-summary-item-price",
    labelExtension: "order-summary-item-type-ext"
  }
};

LineItem.displayName = "OrderSummary.LineItem";

LineItem.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
  price: PropTypes.number,
  showFree: PropTypes.bool,
  flyout: PropTypes.shape({
    newline: PropTypes.bool,
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
    labelExtension: PropTypes.string
  }),
  labelExtension: PropTypes.string
};

export default LineItem;
