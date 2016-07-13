import React, { PropTypes } from "react";
import classNames from "classnames";

/**
Wraps a ProductsBOT.Row cell.
@import {ProductsBOT}
@component ProductsBOT.Row
@references ProductsBOT
@playground
```
<ProductsBOT>
  <ProductsBOT.Row><div className="foo">Node Module 1</div></ProductsBOT.Row>
  <ProductsBOT.Row showBottomBorder={false}>
    <div className="foo">Node Module 2</div>
  </ProductsBOT.Row>
</ProductsBOT>
```
@returns {ReactElement} A React Element
*/

const productsBOTRow = (props) => {
  const extras = {
    "prod-showBottomBorder": props.showBottomBorder,
    "prod-BotRow--colored": props.colored
  };

  const {
    className,
    children,
    ...rest
  } = props;

  return (
    <div
      className={classNames(
        "prod-BotRow",
        extras,
        className)}
      {...rest}>
      {children}
    </div>
  );
};

productsBOTRow.propTypes = {
  /**
  * Children to render in container
  */
  children: PropTypes.any,
  /**
  * Hide the bottom border style
  */
  showBottomBorder: PropTypes.bool,
  /**
  * Adds a background color to the bot row.
  */
  colored: PropTypes.bool
};

productsBOTRow.defaultProps = {
  showBottomBorder: true,
  colored: false
};

export default productsBOTRow;
