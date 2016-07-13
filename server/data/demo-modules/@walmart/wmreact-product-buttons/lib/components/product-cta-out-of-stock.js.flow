/* @flow */
import React from "react";
import Flyout from "@walmart/wmreact-containers/lib/components/flyout";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import classNames from "classnames";
import InStockAlertForm from "./instock-alert-form";
import { getDataAutomationIdPair } from "@walmart/automation-utils";
import clientWidth from "@walmart/wmreact-layout/lib/components/helpers/client-width";
import {
  CTA_INITIALIZED,
  IN_PROGRESS,
  IN_STOCK_ALERT_SENT,
  IN_STOCK_ALERT_ERROR
} from "../enums/action-status";

const CTA_OOS_BUTTON_CONTEXT = "cta_oos_button";
const CTA_OOS_FLYOUT_CONTEXT = "cta_oos_flyout";
const CTA_OOS_FLYOUT_FORM_CONTEXT = "cta_oos_flyout_form";

/**
 A ProductCTAOutOfStock component. Displayed when the availabilityStatus is OUT_OF_STOCK.

 For example this is how we use this component.

 ```jsx
<ProductCTAOutOfStock onNotifyBackInStock={(emailId)=>console.log(emailId)} flyoutDirection="top"/>
 ```

 @import {ProductCTAOutOfStock}
 @flags noVisibleRender
 @component ProductCTAOutOfStock
 @playground
 ProductCTAOutOfStock
 ```
<ProductCTAOutOfStock onNotifyBackInStock={(emailId)=>console.log(emailId)} flyoutDirection="top"/>
 ```
 */

class ProductCTAOutOfStock extends React.Component {
  _getComponentClasses({className}): string {
    return classNames("prod-ProductCTAOutOfStock", "display-block", className);
  }

  _renderButtonComponent({label, autoId}): ReactElement {
    return (
      <Button className="prod-ProductCTA--primary"
        block {...getDataAutomationIdPair(CTA_OOS_BUTTON_CONTEXT, autoId, process)}>
        {label}
      </Button>
    );
  }

  _renderFlyoutChildren({onNotifyBackInStock, actionStatus, autoId}): ReactElement {
    return (
      <InStockAlertForm
        {...{autoId, actionStatus, onNotifyBackInStock}}
        {...getDataAutomationIdPair(CTA_OOS_FLYOUT_FORM_CONTEXT, autoId, process)}/>
    );
  }

  _renderFlyoutComponent({flyoutSize, flyoutDirection, ...props}): ReactElement {
    return (
      <Flyout
        direction={flyoutDirection}
        size={flyoutSize}
        className={this._getComponentClasses(props)}
        closeButton={true}
        trigger={this._renderButtonComponent(props)}
        onActiveChange={(active) => {
          if (!active) {
            this.props.onCloseNotifyFlyout();
          }
        }}
        {...getDataAutomationIdPair(CTA_OOS_FLYOUT_CONTEXT, props.autoId, process)}>
          {this._renderFlyoutChildren(props)}
      </Flyout>
    );
  }

  _getFlyoutProps(flyoutProps): Object {
    let {flyoutDirection, flyoutSize} = flyoutProps;
    if (clientWidth.isBelowBreakPoint("medium", true)) {
      flyoutDirection = "top";
    }
    if (clientWidth.isBelowBreakPoint("medium", true)) {
      flyoutSize = "narrow";
    }
    return {...flyoutProps, flyoutDirection, flyoutSize};
  }

  render(): ReactElement {
    return this._renderFlyoutComponent(this._getFlyoutProps(this.props));
  }
}

ProductCTAOutOfStock.displayName = "ProductCTAOutOfStock";

ProductCTAOutOfStock.propTypes = {
  /**
   The status of the action resulting from clicking the CTA
   */
  actionStatus: React.PropTypes.oneOf([
    CTA_INITIALIZED,
    IN_PROGRESS,
    IN_STOCK_ALERT_SENT,
    IN_STOCK_ALERT_ERROR]),
  /**
   Any additonal style classes
   */
  className: React.PropTypes.string,
  /**
   Label for the CTA oos button, defaults to Get In-Stock Alert
   */
  label: React.PropTypes.string,
  /**
    Used for generating unique automation id's
  */
  autoId: React.PropTypes.string,
  /**
   The direction in which the email alert form flyout appears
   */
  flyoutDirection: React.PropTypes.oneOf(["left", "right", "top", "bottom", "center"]),
  /**
   The width of the flyout
   */
  flyoutSize: React.PropTypes.oneOf(["narrow", "wide", "extrawide", "fluid"]),
  /**
   The callback handler for signing up to be notified when a product is
   back in stock.
   */
  onNotifyBackInStock: React.PropTypes.func,
  /**
   When notify flyout closes.
   */
  onCloseNotifyFlyout: React.PropTypes.func
};

ProductCTAOutOfStock.defaultProps = {
  actionStatus: CTA_INITIALIZED,
  className: "",
  autoId: "",
  label: "Get In-Stock Alert",
  flyoutDirection: "left",
  flyoutSize: "wide",
  onNotifyBackInStock: () => {},
  onCloseNotifyFlyout: () => {}
};

export default ProductCTAOutOfStock;
