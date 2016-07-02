/* @flow */
import React, { PropTypes } from "react";
import classNames from "classnames";

import Flyout from "@walmart/wmreact-containers/lib/components/flyout";

/**
 A simple button with help icon and a flyout to show the
 help text

 For example this is how we use this component.

 ```jsx
 <ProductHelpFlyoutButton
   helpIconsClass="wmicon wmicon-help u-textBlue"
   flyoutPosition="right"
   flyoutSize="wide"
   content={<span>Hello!!!</span>}/>
 ```

 @import {ProductHelpFlyoutButton}
 @flags noVisibleRender
 @component ProductHelpFlyoutButton
 @playground
 ProductHelpFlyoutButton
 ```
 <ProductHelpFlyoutButton
   helpIconsClass="wmicon wmicon-help u-textBlue"
   flyoutPosition="right"
   flyoutSize="wide"
   content={<span>Hello!!!</span>}/>
 ```
 */

const ProductHelpFlyoutButton = (props) => {
  const {
    className,
    helpIconsClass,
    flyoutSize,
    flyoutHover,
    flyoutPosition,
    flyoutCloseButton,
    content
  } = props;

  const helpFlyoutButton = <i className={helpIconsClass}></i>;

  const flyoutElClasses = classNames("prod-ProductHelpFlyoutButton", "inline-block-xs", className);

  const flyout = (
    <Flyout
      trigger={helpFlyoutButton}
      size={flyoutSize}
      hover={flyoutHover}
      direction={flyoutPosition}
      closeButton={flyoutCloseButton}>
      {content}
    </Flyout>
  );

  return <span className={flyoutElClasses}>{flyout}</span>;
};

ProductHelpFlyoutButton.displayName = "ProductHelpFlyoutButton";

ProductHelpFlyoutButton.propTypes = {
  /**
   The content of the flyout.
   */
  content: PropTypes.element,
  /**
   The position of the flyout.
   */
  flyoutPosition: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  /**
   The size of the flyout.
   */
  flyoutSize: PropTypes.string,
  /**
   Whether to show the flyout on hover
  */
  flyoutHover: PropTypes.bool,
  /**
   Whether to show a close button on the flyout
  */
  flyoutCloseButton: PropTypes.bool,
  /**
   Additional classes for help icon button.
   */
  helpIconsClass: PropTypes.string,
  /**
   Any additional css classes that needs to be applied
   to the root element.
   */
  className: PropTypes.string
};

ProductHelpFlyoutButton.defaultProps = {
  helpIconsClass: "wmicon wmicon-help",
  flyoutPosition: "left",
  flyoutSize: "wide",
  flyoutHover: false,
  flyoutCloseButton: false,
  className: ""
};

export default ProductHelpFlyoutButton;
