import React, { PropTypes } from "react";
import classNames from "classnames";

export const COMPONENT_CLASSES = [
  "prod-LegalBadge",
  "text-center",
  "display-inline-block",
  "prod-PaddingRight--xs",
  "prod-PaddingLeft--xs",
  "copy-mini"
];

/**
The legal badge component.
@examples
```
<ProductLegalBadge badgeLabel="PG-13" className="foo" />
```
@return {ReactElement} Element tree
@param {object} props Props
@component ProductLegalBadge
@import {ProductLegalBadge}
@playground
ProductLegalBadge
```
<ProductLegalBadge badgeLabel="PG-13" className="foo" />
```
*/


const ProductLegalBadge = (props) => {
  const { className, badgeLabel = "" } = props;
  return (
    <div className={classNames(COMPONENT_CLASSES, className)}>
      {badgeLabel}
    </div>
  );
};

ProductLegalBadge.propTypes = {
  /**
   The legal badge label.
  */
  badgeLabel: PropTypes.string,
  /**
   Any additional style classes
  */
  className: PropTypes.string
};

export default ProductLegalBadge;
