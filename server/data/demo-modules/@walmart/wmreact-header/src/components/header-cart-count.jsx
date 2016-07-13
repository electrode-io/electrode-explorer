/* @flow */
import React, { PropTypes } from "react";
import classNames from "classnames";

type HeaderCountPropTypes = {
  totalItemsCount: ?number,
  maxCountThreshold: ?number,
  classNames: ?string
}; // props

type HeaderCountDefaultProps = {
  totalItemsCount: number,
  maxCountThreshold: number,
  className: string
}; // default props

const DEFAULT_CLASS_NAMES = ["header-Cart-count", "u-borderRadiusFull", "display-block"];

/**
 A header cart count indicator component.
 @examples
 ```jsx
<HeaderCartCount totalItemsCount={100}/>
 ```
 @component HeaderCartCount
 @import {HeaderCartCount}
 @references HeaderCartCount
 @playground
 HeaderCartCount
 ```
 <HeaderCartCount totalItemsCount={100}/>
 ```
 */

const HeaderCartCount = (props: Object): ReactElement<HeaderCountPropTypes,
  HeaderCountDefaultProps> => {
  const { totalItemsCount, maxCountThreshold, className, ...rest } = props;
  const isHidden = totalItemsCount < 1;
  const classNameStr = classNames(DEFAULT_CLASS_NAMES, className, { "hide-content": isHidden });
  let displayValue = `${totalItemsCount}`;

  if (totalItemsCount > maxCountThreshold) {
    displayValue = `${maxCountThreshold}+`;
  }

  return (
    <b className={classNameStr} {...rest}>{displayValue}</b>
  );
};

HeaderCartCount.displayName = "HeaderCartCount";

HeaderCartCount.propTypes = {
  /**
    Total number of items.
   */
  totalItemsCount: PropTypes.number,
  /**
    The max count value. After totalItemsCount reaches maxCountThreshold,
    the HeaderCartCount would start displaying the value as
    (maxCountThreshold+) instead of actual totalItemsCount, for e.g. if maxCountThreshold is 99
    and totalItemsCount is 100, the component would display the total as 99+ instead of 100.
    Default value for this is 99.
   */
  maxCountThreshold: PropTypes.number,
  /**
    Any additional style classes.
   */
  className: PropTypes.string
};

HeaderCartCount.defaultProps = {
  totalItemsCount: 0,
  maxCountThreshold: 99,
  className: ""
};

export default HeaderCartCount;
