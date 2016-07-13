/* @flow */
/* eslint react/prop-types: 0 */
import React from "react";
import classNames from "classnames";
import { getDataAutomationIdPair } from "@walmart/automation-utils";
import { checkImageSrc } from "@walmart/wmreact-image-utils";

const AUTOMATION_CONTEXT = "VariantItem";

/**
 A variant expander button
 @examples
 ```jsx
<Variants.Item index={0}>S</Variants.Item>
 ```

 But really this should be inside a variants block, like so:

 ```jsx
<Variants>
  <Variants.Item index={0}>S</Variants.Item>
  <Variants.Item index={1} selected={true}>M</Variants.Item>
  <Variants.Item index={2}>L</Variants.Item>
  <Variants.Item index={3} disabled={true}>XL</Variants.Item>
  <Variants.Item index={4} unavailable={true}>XXL</Variants.Item>
</Variants>
 ```
 @return {ReactElement} Element tree
 @param {object} props Props
 @component VariantItem
 @import {Variants}
 @references Variants
 @playground
 VariantItem
 ```
 <div className="variants">
  <Variants.Item index={0}>S</Variants.Item>
 </div>
 ```
 */
const VariantItem = (props) => {
  const _getSwatchStyle = (): Object => {
    const {isImageSwatch, swatch} = props;
    const style = {};
    const imageUrl = checkImageSrc(swatch, 60, 60);
    if (isImageSwatch) {
      style.backgroundImage = `url('${imageUrl}')`;
      style.backgroundSize = "100% 100%";
      return style;
    }
    style.background = swatch;
    return style;
  };

  const _getClasses = (): string => {
    const {selected, disabled, unavailable} = props;
    return classNames(props.className, "variant", {
      selected,
      disabled,
      "variant-unavailable": unavailable
    });
  };

  const _renderSwatch = (): ReactElement => {
    const {selected} = props;

    const classes = classNames(props.className, {
      "variant-swatch": true
    });

    return (
      <span
        className={classes}
        style={_getSwatchStyle()}
        {...getDataAutomationIdPair(
          `rest.index${selected ? "-selected" : ""}`,
          AUTOMATION_CONTEXT, process)
        }
      >
        {props.children}
      </span>
    );
  };

  const _renderInput = (): ReactElement => {
    const {children, type, displayName, className, ...rest} = props;
    const classes = classNames(className, "variant-container", {
      "variant-with-display-name": !!displayName
    });
    return (
      <div
        className={classes}
        {...rest}
        {...getDataAutomationIdPair(
          `rest.index${rest.selected ? "-selected" : ""}`,
          AUTOMATION_CONTEXT, process)
        }
      >
        <input type={type} name={`variant-swatcher-item-${rest.index}`}/>
        <label className={_getClasses()}
          htmlFor={`variant-swatcher-item-${rest.index}`}>
          {rest.swatch ? _renderSwatch() : children}
          {displayName ? <div className="variant-name">{displayName}</div> : null}
        </label>
      </div>
    );
  };

  const _renderButton = (): ReactElement => {
    const {children, disabled, ...rest} = props;
    return (
      <button {...rest}
        className={_getClasses()}>
        {rest.swatch ? _renderSwatch() : children}
      </button>
    );
  };

  const {type} = props;
  return (type === "radio" || type === "checkbox") ? _renderInput() : _renderButton();
};

VariantItem.displayName = "Variants.Item";

VariantItem.propTypes = {
  /**
   Boolean for displaying the variant name
   */
  displayName: React.PropTypes.bool,
  /**
   Index of the variant swatch
   */
  index: React.PropTypes.number.isRequired,
  /**
   Any child node.
   */
  children: React.PropTypes.node.isRequired,
  /**
   True if this variant is selected
   */
  selected: React.PropTypes.bool,
  /**
   True if this variant is disabled
   */
  disabled: React.PropTypes.bool,
  /**
   True if this variant is unavailable
   */
  unavailable: React.PropTypes.bool,
  /**
   Swatch property can be a image url or a hex
   color value.
   */
  swatch: React.PropTypes.string,
  /**
   When set to true, uses the swatch prop as a
   background image else expects swatch property
   to be a hex color value.
   */
  isImageSwatch: React.PropTypes.bool,
  /**
   The type of control to use for this variant.
   */
  type: React.PropTypes.oneOf(["button", "checkbox", "radio"]),
  /**
   Any additional style classes.
   */
  className: React.PropTypes.string
};

VariantItem.defaultProps = {
  displayName: "",
  selected: false,
  disabled: false,
  unavailable: false,
  swatch: "",
  isImageSwatch: false,
  className: "",
  type: "button"
};

export default VariantItem;
