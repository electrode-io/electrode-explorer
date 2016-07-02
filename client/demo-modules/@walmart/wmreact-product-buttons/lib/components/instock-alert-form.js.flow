/* @flow */
/*eslint no-invalid-this:0*/
import React, { Component, PropTypes } from "react";
import classNames from "classnames";
import Arrange from "@walmart/wmreact-layout/lib/components/arrange";
import Layout from "@walmart/wmreact-layout/lib/components/layout";
import { Field } from "@walmart/wmreact-stateless-fields";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import { getDataAutomationIdPair } from "@walmart/automation-utils";
import Copy from "@walmart/wmreact-base/lib/components/copy";
import {
  email as emailValidator
} from "@walmart/wmreact-validation/lib/validators";
import { CTA_INITIALIZED,
  IN_PROGRESS,
  IN_STOCK_ALERT_SENT,
  IN_STOCK_ALERT_ERROR } from "../enums/action-status";

const INSTOCK_ALERT_SUBMIT_BUTTON_CONTEXT = "in_stock_alert_submit_button";
const INSTOCK_ALERT_EMAIL_FIELD_CONTEXT = "in_stock_alert_email_field";
const ALERT_PRIMARY_TEXT = "This item isn't available right now,";
const ALERT_SECONDARY_TEXT = " but we can send you an email as soon as it's back in stock.";
const ALERT_SUCCESS_TEXT = "Thanks! We'll send you an email when this item is back in stock.";
const ALERT_FAILED_TEXT = "There was a problem submitting your email address. Please try again.";

/**
 A simple InStockAlert form with alert text, email form field and submit button.

 For example this is how we use this component.

 ```jsx
 <InStockAlertForm />
 ```

 @import {InStockAlertForm}
 @flags noVisibleRender
 @component InStockAlertForm
 @playground
 InStockAlertForm
 ```
 <InStockAlertForm />
 ```
 */

class InStockAlertForm extends Component {

  static defaultProps = {
    actionStatus: CTA_INITIALIZED,
    className: "",
    onNotifyBackInStock: () => {},
    autoId: ""
  };

  static propTypes = {
    /**
     Any additional style classes.
     */
    className: PropTypes.string,
    /**
     Email submit callback handler.
     */
    onNotifyBackInStock: PropTypes.func,
    /**
    Used for generating unique automation id's
    */
    autoId: PropTypes.string,
    /**
     The status of the action resulting from clicking the CTA
     */
    actionStatus: PropTypes.oneOf([
      CTA_INITIALIZED,
      IN_PROGRESS,
      IN_STOCK_ALERT_SENT,
      IN_STOCK_ALERT_ERROR])
  };

  state = { email: null };

  _onBlur = (e: Object): void => this.setState({ email: e.target.value });

  _isAValidEmail(email: string): boolean {
    return emailValidator.validate(email || "");
  }

  _onNotifyBackInStock(): void {
    const { email } = this.state;
    if (this._isAValidEmail(email)) {
      this.props.onNotifyBackInStock(email);
    }
  }

  _renderAlertTextComponent(emailSentStatus: string): ReactElement {
    let primaryText;
    let secondaryTextComponent;
    switch (emailSentStatus) {
    case "succeeded":
      primaryText = (
        <div className="prod-ProductInstockAlertForm-successText">
          {ALERT_SUCCESS_TEXT}
        </div>
      );
      break;
    case "failed":
      primaryText = (
        <div className="prod-ProductInstockAlertForm-failedText">
          {ALERT_FAILED_TEXT}
        </div>
        );
      break;
    case "notSent":
      primaryText = ALERT_PRIMARY_TEXT;
      secondaryTextComponent = (
        <span className="prod-ProductInstockAlertForm-secondaryText">
          {ALERT_SECONDARY_TEXT}
        </span>
      );
      break;
    }

    return (
      <Copy.Small>
        <span className="font-bold prod-ProductInstockAlertForm-primaryText">
          {primaryText}
        </span>
        {secondaryTextComponent}
      </Copy.Small>
    );
  }

  _renderEmailComponent({autoId}): ReactElement {
    const { email } = this.state;
    return (
      <Arrange className="prod-ProductInstockAlertForm-emailContainer">
        <Arrange.Fit>
          <div className="prod-ProductInstockAlertForm-emailLabel">
            <Copy.Small>Email:</Copy.Small>
          </div>
        </Arrange.Fit>
        <Arrange.Fill>
          <Field
            placeholder="example@example.com"
            onBlur={this._onBlur}
            touched={email !== null && !this._isAValidEmail(email)}
            error="Please enter a valid email address."
            {...getDataAutomationIdPair(INSTOCK_ALERT_EMAIL_FIELD_CONTEXT, autoId, process)} />
        </Arrange.Fill>
      </Arrange>
    );
  }

  _renderSubmitButton({autoId, actionStatus}): ReactElement {
    const inProgress = actionStatus === IN_PROGRESS;
    return (
      <Button onClick={this._onNotifyBackInStock.bind(this)}
        mini={true}
        spinner={inProgress}
        disabled={inProgress}
        {...getDataAutomationIdPair(INSTOCK_ALERT_SUBMIT_BUTTON_CONTEXT, autoId, process)}>
        Submit
      </Button>
    );
  }

  _getAlertFormClasses({className}): string {
    return classNames("prod-ProductInstockAlertForm", className);
  }

  _hasEmailBeenSent({actionStatus}): string {
    switch (actionStatus) {
    case IN_STOCK_ALERT_SENT:
      return "succeeded";
    case IN_STOCK_ALERT_ERROR:
      return "failed";
    default:
      return "notSent";
    }
  }

  render(): ReactElement {
    const emailSentStatus = this._hasEmailBeenSent(this.props);
    return (
      <Layout padded={true} x-small-sizes={[12]}
        className={this._getAlertFormClasses(this.props)}>
        {this._renderAlertTextComponent(emailSentStatus)}
        {emailSentStatus === "notSent" && this._renderEmailComponent(this.props)}
        {emailSentStatus === "notSent" && this._renderSubmitButton(this.props)}
      </Layout>
    );
  }
}

export default InStockAlertForm;
