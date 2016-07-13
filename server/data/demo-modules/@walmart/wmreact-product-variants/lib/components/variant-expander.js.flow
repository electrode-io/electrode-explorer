/* @flow */
import React from "react";
import classNames from "classnames";

/**
 A variant expander button
 @examples
 ```jsx
 <Variants.Expander active={true} less={true} />
 ```
 @return {ReactElement} Element tree
 @param {object} props Props
 @component VariantExpander
 @import {Variants}
 @references Variants
 @playground
 VariantExpander
 ```
 <Variants.Expander active={true} less={true} />
 ```
 */
const VariantExpander = (props) => {
  const _getClassNames = ({active, less}): string => {
    return classNames(props.className,
      "variant variant-expand", {
        active,
        "variant-expand-less": less
      });
  };

  return (
    <button {...props} className={_getClassNames(props)}>
      <span className="visuallyhidden">
        {props.less ? "Show More" : "Show Less"}
      </span>
    </button>
  );
};

VariantExpander.displayName = "VariantExpander";

VariantExpander.propTypes = {
  /**
   True if this is active.
   */
  active: React.PropTypes.bool,
  /**
   True if we should be showing as less.
   */
  less: React.PropTypes.bool,
  /**
   Any additional style class.
   */
  className: React.PropTypes.string
};

VariantExpander.defaultProps = {
  active: false,
  less: false,
  className: ""
};

export default VariantExpander;
