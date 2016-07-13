/* @flow */
import React from "react";
import classNames from "classnames";

/**
 The product variant dropdown option.

 For example this is how we use this component.

 ```jsx
 <ProductVariantOption
  variantName="Color Red"
  suffix="- Out of stock"
  disabled={true}
  disabledVariantClassName="u-textGrey"
  displaySuffix={true}/>
 ```

 @return {ReactElement} Element tree
 @param {object} props Props
 @import {ProductVariantOption}
 @flags noVisibleRender
 @component ProductVariantOption
 @playground
 ProductVariantOption
 ```
 <ProductVariantOption
  variantName="Color Red"
  suffix="- Out of stock"
  disabled={true}
  disabledVariantClassName="u-textGrey"
  displaySuffix={true}/>
 ```
 */

const ProductVariantOption = (props) => {
  const _getClasses = (): string => {
    return classNames({[props.disabledVariantClassName]: props.disabled});
  };

  const _renderSuffixComponent = ({displaySuffix, suffix}): ?ReactElement => {
    if (displaySuffix) {
      return (<span className="prod-ProductVariantDropdown-suffix">&nbsp;{suffix}</span>);
    }
  };

  return (
    <div className={_getClasses()}>
      {props.variantName}
      {_renderSuffixComponent(props)}
    </div>
  );
};

ProductVariantOption.displayName = "ProductVariantOption";

ProductVariantOption.propTypes = {
  /**
   The actual variantName or label
   */
  variantName: React.PropTypes.string.isRequired,
  /**
   When set to true adds a suffix option
   */
  displaySuffix: React.PropTypes.bool,
  /**
   The suffix string.
   */
  suffix: React.PropTypes.string,
  /**
   When set to true adds a disabled state class
   */
  disabled: React.PropTypes.bool,
  /**
   A disabled state className
   */
  disabledVariantClassName: React.PropTypes.string
};

ProductVariantOption.defaultProps = {
  displaySuffix: false,
  suffix: "",
  disabled: false,
  disabledVariantClassName: "u-textGrey"
};

export default ProductVariantOption;
