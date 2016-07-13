/* @flow */

import React, {PropTypes} from "react";
import classNames from "classnames";

import Flyout from "@walmart/wmreact-containers/lib/components/flyout";
import Button from "@walmart/wmreact-interactive/lib/components/button";

import Price from "./price";
import PostalCodeForm from "./postal-code-form";

class Tax extends React.Component {
  constructor(props:Object, context:Object) {
    super(props, context);
    this._hideFlyout = this._hideFlyout.bind(this);
    this._toggleFlyout = this._toggleFlyout.bind(this);
    this._updatePostalCode = this._updatePostalCode.bind(this);

    this.state = {
      flyoutActive: false,
      submitPending: false
    };
  }

  _updatePostalCode(postalCode:string) {
    const {onTaxZipCodeChanged} = this.props;
    this.setState({ submitPending: true }, () => {
      if (onTaxZipCodeChanged) {
        onTaxZipCodeChanged(postalCode, (response) => {
          this._onPostalCodeChangeResponse(response);
        });
      }
    });
  }

  _onPostalCodeChangeResponse(response:Object) {
    const {postalCodeForm} = this.refs;
    if (response.success) {
      this.setState({ submitPending: false, flyoutActive: false });
    } else {
      this.setState({ submitPending: false });
      postalCodeForm.invalidate({ zipCodeField: "Please enter a valid zip code." });
    }
  }

  _hideFlyout() {
    this._toggleFlyout(false);
  }

  _toggleFlyout(active:bool) {
    this.setState({ flyoutActive: active });
  }

  _renderFlyout():ReactElement {
    const {
      taxPostalCode, onTaxZipCodeChanged, automation, tealeaf, flyout
    } = this.props;

    const flyoutTrigger = (
      <Button className="flyout-trigger" fakelink={true}
        data-automation-id={automation.changeZipCode} data-tl-id={tealeaf.changeZipCode}>
        {taxPostalCode ? "Change" : "Calculate tax"}
      </Button>
    );

    const flyoutClassNames = classNames("OrderSummary-flyout OrderSummary-flyout--tax",
      !onTaxZipCodeChanged ? "visuallyhidden" : "");

    return (
      <div className={flyoutClassNames}>
        <Flyout
          direction={flyout.direction || "left"}
          trigger={flyoutTrigger}
          onActiveChange={this._toggleFlyout}
          active={this.state.flyoutActive}
          closeOnClickOut={!this.state.submitPending}
        >
          <PostalCodeForm
            ref="postalCodeForm"
            postalCode={taxPostalCode}
            onSubmit={this._updatePostalCode}
            onCancel={this._hideFlyout}
            loading={this.state.submitPending}
            automation={automation.form}
            tealeaf={tealeaf.form} />
        </Flyout>
      </div>
    );
  }

  render():ReactElement {
    let postalCode;
    let price;

    const {
      className, taxPostalCode, taxTotal, taxLabel, taxCalculated, automation
    } = this.props;

    const componentClassName = classNames("OrderSummary-Tax OrderSummary-line clearfix",
      className);

    if (taxPostalCode) {
      postalCode = (
        <span className="OrderSummary-label-line2">
          <span data-automation-id={automation.baseOnZipCode}>
            Based on {taxPostalCode}
          </span> {this._renderFlyout()}
        </span>
      );

      if (taxCalculated) {
        price = (
          <Price {...this.props} price={taxTotal} automationId={automation.price} />
        );
      } else {
        price = (
          <span className="OrderSummary-Price OrderSummary-Price--light"
            data-automation-id={automation.price}>
            Not Calculated
          </span>
        );
      }
    } else {
      price = (
        <span className="OrderSummary-Price" data-automation-id={automation.price}>
          {this._renderFlyout()}
        </span>
      );
    }

    return (
      <div className={componentClassName}>
        <span className="OrderSummary-label">
          <span data-automation-id={automation.label}>
            {taxLabel}
          </span>
          {postalCode}
        </span>
        {price}
      </div>
    );
  }
}

Tax.defaultProps = {
  className: "",
  taxTotal: 0,
  taxLabel: "Est. Tax",
  taxPostalCode: null,
  taxCalculated: true,
  onTaxZipCodeChanged: null,
  flyout: {},
  automation: {
    label: "order-summary-tax-label",
    price: "order-summary-tax-amount",
    baseOnZipCode: "order-summary-tax-base-on-zip",
    changeZipCode: "order-summary-tax-change-zip"
  },
  tealeaf: {
    changeZipCode: "order-summary-tax-change-zip"
  }
};

Tax.displayName = "OrderSummary.Tax";

Tax.propTypes = {
  className: PropTypes.string,
  taxTotal: PropTypes.number.isRequired,
  taxLabel: PropTypes.string.isRequired,
  taxPostalCode: PropTypes.string,
  taxCalculated: PropTypes.bool,
  onTaxZipCodeChanged: PropTypes.func,
  automation: PropTypes.shape({
    label: PropTypes.string,
    price: PropTypes.string,
    baseOnZipCode: PropTypes.string,
    changeZipCode: PropTypes.string,
    form: PostalCodeForm.propTypes.automation
  }),
  tealeaf: PropTypes.shape({
    changeZipCode: PropTypes.string,
    form: PostalCodeForm.propTypes.tealeaf
  }),
  flyout: PropTypes.shape({
    direction: PropTypes.string
  })
};

export default Tax;
