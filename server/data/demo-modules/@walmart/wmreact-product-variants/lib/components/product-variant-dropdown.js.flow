/* @flow */
/* eslint react/prop-types: 0 */
import React, { PropTypes } from "react";
import classNames from "classnames";
import isEmpty from "lodash/isEmpty";
import Chooser from "@walmart/wmreact-chooser/lib/components/chooser";
import ProductVariantOption from "./product-variant-option";
import {OUT_OF_STOCK, NOT_AVAILABLE} from "../enums/availability-status";

const STATUS_SUFFIXES = {
  [NOT_AVAILABLE]: "- Not available",
  [OUT_OF_STOCK]: "- Out of stock"
};

/**
 The product variant dropdown.

 For example this is how we use this component.

 ```jsx
 <ProductVariantDropdown
  onVariantClick={(ev)=>{console.log(ev)}}
  variantOptions={[{
    id: "color_blue",
    name: "Blue",
    status: "in stock"
  }, {
    id: "color_red",
    name: "Red",
    status: "out of stock"
  }, {
    id: "color_green",
    name: "Green",
    status: "not available"
  }]}/>
 ```

 @return {ReactElement} Element tree
 @param {object} props Props
 @import {ProductVariantDropdown}
 @flags noVisibleRender
 @component ProductVariantDropdown
 @playground
 ProductVariantDropdown
 ```
 <ProductVariantDropdown
  onVariantClick={(ev)=>{console.log(ev)}}
  variantOptions={[{
    id: "color_blue",
    name: "Blue",
    status: "in stock"
  }, {
    id: "color_red",
    name: "Red",
    status: "out of stock"
  }, {
    id: "color_green",
    name: "Green",
    status: "not available"
 }]}/>
 ```
 */

const ProductVariantDropdown = (props) => {
  const _getClasses = ({className}): string => {
    return classNames("prod-ProductVariantDropdown",
      "display-block-xs",
      "prod-PaddingTop--xs",
      className);
  };

  const _renderVariantOptionByStatus = ({name, status}): ReactElement => {
    if (status === NOT_AVAILABLE || status === OUT_OF_STOCK) {
      return (<ProductVariantOption
        variantName={name}
        suffix={STATUS_SUFFIXES[status]}
        disabled={true}
        disabledVariantClassName={props.disabledVariantClassName}
        displaySuffix={true}/>);
    } else if (isEmpty(status)) {
      const classes = classNames(
        "prod-ProductVariantDropdown-chooseOption",
        {"prod-ProductVariant-variantUnselectedError": props.variantUnselectedError}
      );
      return (
        <div className={classes}>{name}</div>
      );
    }

    return (<ProductVariantOption variantName={name} />);
  };

  const _renderVariantOptions = ({title, variantOptions}): Array<ReactElement> => {
    variantOptions.unshift({
      id: "choose_an_option",
      name: `Choose ${title}`
    });

    return variantOptions.map((variant) => {
      return (<Chooser.Option key={variant.id} value={variant.id}>
        {_renderVariantOptionByStatus(variant)}
      </Chooser.Option>);
    });
  };

  return (
    <div className={_getClasses(props)}>
      <Chooser chooserName="js-ProductVariantDropdown"
        isBlock={false} onChange={props.onVariantClick}>
        {_renderVariantOptions(props)}
      </Chooser>
    </div>
  );
};

ProductVariantDropdown.displayName = "ProductVariantDropdown";

ProductVariantDropdown.propTypes = {
  /**
   Default title for the unselected option
   */
  "title": PropTypes.string,
  /**
   Is variant not selected as part of the Unselected Variants Experience
   */
  "variantUnselectedError": PropTypes.bool,
  /**
   A list of variant options. Internally its a list of objects,
   containing props like: id, name, status.
   */
  "variantOptions": PropTypes.array.isRequired,
  /**
   Any additional css classes that needs to be applied
   to the root element.
   */
  "className": PropTypes.string,
  /**
   A className for displaying a disabled state on variant option.
   Used when the variant status is not in stock.
   */
  "disabledVariantClassName": PropTypes.string,
  /**
   Callback function upon variant click. Usually handled in
   a higher order component.
   */
  "onVariantClick": PropTypes.func
};

ProductVariantDropdown.defaultProps = {
  "title": "an option",
  "variantUnselectedError": false,
  "className": "",
  "disabledVariantClassName": "u-textGrey",
  "onVariantClick": () => {/*no-op*/}
};

export default ProductVariantDropdown;
