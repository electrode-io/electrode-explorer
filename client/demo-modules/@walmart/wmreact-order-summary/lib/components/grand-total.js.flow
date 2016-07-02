/* @flow */

import React, {PropTypes} from "react";
import classNames from "classnames";
import Price from "./price";

class GrandTotal extends React.Component {
  render():ReactElement {
    const {
      className, grandTotal, grandTotalLabel, automation
    } = this.props;

    const componentClassName = classNames("OrderSummary-GrandTotal OrderSummary-line clearfix",
      className);

    return (
      <div className={componentClassName}>
        <span className="OrderSummary-label" data-automation-id={automation.label}>
          {grandTotalLabel}
        </span>
        <Price {...this.props} price={grandTotal} plain={false} automationId={automation.price} />
      </div>
    );
  }
}

GrandTotal.defaultProps = {
  className: "",
  grandTotal: 0,
  grandTotalLabel: "Total",
  automation: {
    label: "order-summary-grand-total-label",
    price: "order-summary-grand-total-amount"
  }
};

GrandTotal.displayName = "OrderSummary.GrandTotal";

GrandTotal.propTypes = {
  className: PropTypes.string,
  grandTotal: PropTypes.number.isRequired,
  grandTotalLabel: PropTypes.string.isRequired,
  automation: PropTypes.shape({
    label: PropTypes.string,
    price: PropTypes.string
  })
};

export default GrandTotal;
