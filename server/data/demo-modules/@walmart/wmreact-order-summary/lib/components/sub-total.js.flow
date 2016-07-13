/* @flow */

import React, {PropTypes} from "react";
import classNames from "classnames";

import Price from "./price";
import pluralize from "../utils/pluralize";

class SubTotal extends React.Component {
  render():ReactElement {
    const {
      itemCountVisible, itemCount, itemCountLink, className, subTotal, automation, tealeaf
    } = this.props;

    let label;
    if (itemCountVisible) {
      // 0 items, 1 item, 2 items
      let itemCountLabel = `${itemCount} ${pluralize(itemCount, "item", "items")}`;

      if (itemCountLink) {
        itemCountLabel = (
          <a className="OrderSummary-SubTotal-itemCountLink" href={itemCountLink}
            data-tl-id={tealeaf.quantity}>
            {itemCountLabel}
          </a>
        );
      }

      label = (
        <span className="OrderSummary-label">
          <span data-automation-id={automation.label}>Subtotal </span>
          <span className="copy-mini" data-automation-id={automation.quantity}>
            ({itemCountLabel})
          </span>
        </span>
      );
    } else {
      label = (
        <span className="OrderSummary-label" data-automation-id={automation.label}>
          Subtotal
        </span>
      );
    }

    const componentClassName = classNames("OrderSummary-SubTotal OrderSummary-line clearfix",
      className);

    return (
      <div className={componentClassName}>
        {label}
        <Price {...this.props} price={subTotal} automationId={automation.price} />
      </div>
    );
  }
}

SubTotal.defaultProps = {
  className: "",
  subTotal: 0,
  itemCount: 0,
  itemCountLink: null,
  itemCountVisible: true,
  automation: {
    quantity: "order-summary-item-quantity",
    label: "order-summary-subtotal-label",
    price: "order-summary-subtotal-price"
  },
  tealeaf: {
    quantity: "order-summary-item-quantity"
  }
};

SubTotal.displayName = "OrderSummary.SubTotal";

SubTotal.propTypes = {
  className: PropTypes.string,
  subTotal: PropTypes.number.isRequired,
  itemCount: PropTypes.number.isRequired,
  itemCountLink: PropTypes.string,
  itemCountVisible: PropTypes.bool.isRequired,
  automation: PropTypes.shape({
    quantity: PropTypes.string,
    label: PropTypes.string,
    price: PropTypes.string
  }),
  tealeaf: PropTypes.shape({
    quantity: PropTypes.string
  })
};

export default SubTotal;
