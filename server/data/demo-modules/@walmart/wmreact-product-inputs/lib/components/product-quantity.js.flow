import React, { Component, PropTypes } from "react";
import Chooser from "@walmart/wmreact-chooser/lib/components/chooser";
import isEmpty from "lodash/isEmpty";
import classNames from "classnames";
import {
  getDataAutomationId,
  getDataAutomationIdPair
} from "@walmart/automation-utils/lib/utils/automation-id-utils";

const AUTOMATION_CONTEXT = "ProductQuantity";
const AUTOMATION_LABEL = "Label";
const AUTOMATION_DROPDOWN = "Dropdown";

/**
 The quantity dropdown field for the product page.

 For example this is how we use this component.

 ```jsx
 <ProductQuantity label="Quantity: " quantityOptions={[1, 2, 3, 4, 5]}/>
 ```

 @import {ProductQuantity}
 @flags noVisibleRender
 @component ProductQuantity
 @playground
 ProductQuantity
 ```
 <ProductQuantity label="Quantity: " quantityOptions={[1, 2, 3, 4, 5]}/>
 ```
 */

class ProductQuantity extends Component {
  _getQuantityLabelField() {
    if (!isEmpty(this.props.label)) {
      return (
        <span
          className="font-semibold"
          {...getDataAutomationIdPair(
            AUTOMATION_CONTEXT,
            AUTOMATION_LABEL,
            process
          )}
        >{this.props.label}</span>);
    }
  }
  _getQuantityValue(qtyVal) {
    return qtyVal.toString();
  }

  _getQuantityOptions() {
    const {quantityOptions} = this.props;

    return quantityOptions.map((qtyVal, index) => {
      const qtyValStr = this._getQuantityValue(qtyVal);
      return <Chooser.Option key={index} value={qtyValStr}>{qtyValStr}</Chooser.Option>;
    });
  }

  render() {
    const clz = classNames("prod-ProductQuantity", this.props.className);
    return (
      <span className={clz}>
        {this._getQuantityLabelField()}
        <Chooser
          onChange={(qtyStr) => {
            this.props.onChange(parseInt(qtyStr, 10));
          }}
          chooserName={this.props.label}
          automationId={getDataAutomationId(
            AUTOMATION_CONTEXT,
            AUTOMATION_DROPDOWN
          )
        }>
         {this._getQuantityOptions()}
        </Chooser>
      </span>
    );
  }
}

ProductQuantity.displayName = "ProductQuantity";

ProductQuantity.propTypes = {
  /**
   Event callback when selected quantity changes
   */
  "onChange": PropTypes.func,
  /**
   An array of quantity options/values.
   */
  "quantityOptions": PropTypes.array,
  /**
   The label for the quantity field
   */
  "label": PropTypes.string,
  /**
   Any additional css classes that needs to be applied
   to the root element.
   */
  "className": PropTypes.string
};

ProductQuantity.defaultProps = {
  "onChange": () => { /*no-op*/ },
  "quantityOptions": [1],
  "label": "Quantity : ",
  "className": ""
};

export default ProductQuantity;
