/* @flow */

import React, {PropTypes} from "react";
import classNames from "classnames";

import SubTotal from "./sub-total";
import LineItem from "./line-item";
import ShippingCost from "./shipping-cost";
import GenericFee from "./generic-fee";
import Tax from "./tax";
import GrandTotal from "./grand-total";

class OrderSummary extends React.Component {
  _getLineItems():Array<LineItem.propTypes> {
    const {lineItems} = this.props;
    return lineItems || [];
  }

  _getShippingCosts():Array<ShippingCost.propTypes> {
    const {shippingCosts, lineItems} = this.props;
    if (
      shippingCosts && shippingCosts.length <= 0
      && (!lineItems || lineItems.length <= 0)
    ) {
      return [{ label: "Shipping", price: 0, showFree: false }];
    } else {
      return shippingCosts || [];
    }
  }

  _getGenericFees():Array<GenericFee.propTypes> {
    const {genericFees} = this.props;
    if (genericFees) {
      return genericFees;
    } else {
      return [];
    }
  }

  _getGrandTotal():number {
    const {
      grandTotal, subTotal, taxTotal
    } = this.props;

    if (grandTotal !== null && grandTotal !== undefined) {
      return grandTotal;
    } else {
      const sumCost = (total, cost) => total + cost.price;
      return subTotal +
        this._getLineItems().reduce(sumCost, 0) +
        this._getShippingCosts().reduce(sumCost, 0) +
        this._getGenericFees().reduce(sumCost, 0) +
        taxTotal;
    }
  }

  _getAutomationIndex(item, index):number {
    if (item.automationIndex === null || item.automationIndex === undefined) {
      return index;
    } else {
      return item.automationIndex;
    }
  }

  _renderSubTotal():ReactElement {
    const {automation, tealeaf} = this.props;
    return (
      <SubTotal {...this.props} automation={automation.subtotal} tealeaf={tealeaf.subtotal} />
    );
  }

  _renderLineItems():Array<ReactElement> {
    return this._getLineItems().map((lineItem, index) => {
      return (
        <LineItem {...this.props} {...lineItem} key={index}
          automation={lineItem.automation}
          automationIndex={this._getAutomationIndex(lineItem, index)} />
      );
    });
  }

  _renderShippingCosts():Array<ReactElement> {
    return this._getShippingCosts().map((shippingCost, index) => {
      return (
        <ShippingCost {...this.props} {...shippingCost} key={index}
          automation={shippingCost.automation}
          automationIndex={this._getAutomationIndex(shippingCost, index)} />
      );
    });
  }

  _renderGenericFees():Array<ReactElement> {
    return this._getGenericFees().map((genericFee, index) => {
      return (
        <GenericFee {...this.props} {...genericFee} key={index}
          automation={genericFee.automation}
          automationIndex={this._getAutomationIndex(genericFee, index)} />
      );
    });
  }

  _renderTax():ReactElement {
    const {automation, tealeaf} = this.props;
    return (
      <Tax {...this.props} automation={automation.tax} tealeaf={tealeaf.tax} />
    );
  }

  _renderGrandTotal():ReactElement {
    const {automation} = this.props;
    return (
      <GrandTotal {...this.props} grandTotal={this._getGrandTotal()}
        automation={automation.grandTotal} />
    );
  }

  render():ReactElement {
    const {className} = this.props;
    const componentClassName = classNames("OrderSummary", className);

    return (
      <div className={componentClassName}>
        {this._renderSubTotal()}
        {this._renderLineItems()}
        {this._renderShippingCosts()}
        {this._renderGenericFees()}
        {this._renderTax()}
        {this._renderGrandTotal()}
      </div>
    );
  }
}

OrderSummary.defaultProps = {
  className: "",
  subTotal: 0,
  lineItems: [],
  shippingCosts: [],
  genericFees: [],
  taxTotal: 0,
  grandTotal: null,
  automation: {},
  tealeaf: {}
};

OrderSummary.displayName = "OrderSummary";

OrderSummary.propTypes = {
  className: PropTypes.string,
  subTotal: PropTypes.number,
  lineItems: PropTypes.arrayOf(PropTypes.shape(LineItem.propTypes)),
  shippingCosts: PropTypes.arrayOf(PropTypes.shape(ShippingCost.propTypes)),
  genericFees: PropTypes.arrayOf(PropTypes.shape(GenericFee.propTypes)),
  taxTotal: PropTypes.number,
  grandTotal: PropTypes.number,
  automation: PropTypes.shape({
    subtotal: SubTotal.propTypes.automation,
    tax: Tax.propTypes.automation,
    grandTotal: GrandTotal.propTypes.automation
  }),
  tealeaf: PropTypes.shape({
    subtotal: SubTotal.propTypes.tealeaf,
    tax: Tax.propTypes.automation
  })
};

export default OrderSummary;
