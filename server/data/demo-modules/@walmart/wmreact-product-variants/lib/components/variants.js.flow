/* @flow */
import React from "react";

import classNames from "classnames";

import VariantExpander from "./variant-expander";
import VariantItem from "./variant-item";

/**
 Variants container
 @examples
 ```jsx
 <div>
  <Variants>
    <Variants.Item>S</Variants.Item>
    <Variants.Item selected={true}>M</Variants.Item>
    <Variants.Item>L</Variants.Item>
    <Variants.Item disabled={true}>XL</Variants.Item>
    <Variants.Item unavailable={true}>XXL</Variants.Item>
  </Variants>
  <Variants small={true} swatches={true}>
    <Variants.Item type='checkbox' disabled={true} swatch='#fead41'>Yellow</Variants.Item>
    <Variants.Item type='checkbox' selected={true} swatch='#d40b23'>Red</Variants.Item>
    <Variants.Item type='checkbox' unavailable={true} swatch='#47d9bf'>Teal</Variants.Item>
    <Variants.Expander />
  </Variants>
  <Variants swatches={true}>
    <Variants.Item type='radio' selected={true} swatch='#fead41'>Yellow</Variants.Item>
    <Variants.Item type='radio' disabled={true} swatch='#d40b23'>Red</Variants.Item>
    <Variants.Item type='radio' unavailable={true} swatch='#47d9bf'>Teal</Variants.Item>
    <Variants.Item index={2} type='radio' isImageSwatch={true}
      swatch='http://placekitten.com/g/1024/1024'>
      Kitten
    </Variants.Item>
    <Variants.Expander active={true} less={true} />
  </Variants>
 </div>
 ```
 @return {ReactElement} Element tree
 @param {object} props Props
 @component Variants
 @import {Variants}
 @references Variants
 @playground
 Variants
 ```
 <div>
  <h4>Variants as buttons</h4>
  <Variants>
    <Variants.Item index={0}>S</Variants.Item>
    <Variants.Item index={1} selected={true}>M</Variants.Item>
    <Variants.Item index={2}>L</Variants.Item>
    <Variants.Item index={3} disabled={true}>XL</Variants.Item>
    <Variants.Item index={4} unavailable={true}>XXL</Variants.Item>
  </Variants>
 <h4>Small variants</h4>
  <Variants small={true} swatches={true}>
    <Variants.Item index={0} type='checkbox' disabled={true} swatch='#fead41'>
      Yellow
    </Variants.Item>
    <Variants.Item index={1} type='checkbox' selected={true} swatch='#d40b23'>
      Red
    </Variants.Item>
    <Variants.Item index={2} type='checkbox' unavailable={true} swatch='#47d9bf'>
      Teal
    </Variants.Item>
    <Variants.Expander />
  </Variants>
 <h4>Large variants</h4>
  <Variants swatches={true}>
    <Variants.Item index={0} type='radio' selected={true} swatch='#fead41'>
      Yellow
    </Variants.Item>
    <Variants.Item index={1} type='radio' disabled={true} swatch='#d40b23'>
      Red
    </Variants.Item>
    <Variants.Item index={2} type='radio' unavailable={true} swatch='#47d9bf'>
      Teal
    </Variants.Item>
    <Variants.Item index={2} type='radio' isImageSwatch={true}
      swatch='http://placekitten.com/g/1024/1024'>
      Kitten
    </Variants.Item>
    <Variants.Expander active={true} less={true} />
  </Variants>
 </div>
 ```
 */
const Variants = (props) => {
  const _getClasses = ({small, swatches, className}): string => {
    return classNames("variants",
      {
        "variants-small": small === undefined ? false : small,
        "variants-swatches": swatches === undefined ? false : swatches
      }, className);
  };

  return (
    <div className={_getClasses(props)}>
      {props.children}
    </div>
  );
};

Variants.displayName = "Variants";

Variants.propTypes = {
  /**
   Child nodes, usually an instance of Variant.Item or Variant.Expander
   */
  children: React.PropTypes.node.isRequired,
  /**
   True if the variants are small
   */
  small: React.PropTypes.bool,
  /**
   True if the variants are swatches
   */
  swatches: React.PropTypes.bool,
  /**
   Any additional style classes
   */
  className: React.PropTypes.string
};

Variants.defaultProps = {
  small: false,
  swatches: false,
  className: ""
};

Variants.Item = VariantItem;
Variants.Expander = VariantExpander;

export default Variants;
