/* @flow */
import React from "react";

import classNames from "classnames";

import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";

/**
Hairline indicator for paginators
@examples
```jsx
<Paginator.Hairline direction="prev"/>
```
@return {ReactElement} Element tree
@param {object} props Props
@component Paginator.Hairline
@import {Paginator}
@references Paginator
@playground
```
<Paginator.Hairline direction="prev"/>
```
*/
export default (props) => {
  const {
    large,
    light,
    dark,
    noHover,
    positioned,
    disabled,
    direction,
    hidden,
    className,
    dataAutomationId
  } = props;

  const extras = {
    "paginator-hairline-btn-large": large,
    "paginator-hairline-btn-light-no-hover": light && noHover,
    "paginator-hairline-btn-dark-no-hover": dark && noHover,
    "paginator-hairline-btn-light": light && !noHover,
    "paginator-hairline-btn-dark": dark && !noHover,
    "paginator-hairline-btn-positioned": positioned,
    "hide-content": disabled
  };
  const text = {
    "prev": "Previous",
    "next": "Next",
    "up": "Previous",
    "down": "Next"
  }[direction];
  const classes = classNames(
    "paginator-hairline-btn",
    extras,
    `paginator-hairline-btn-${direction}`,
    hidden ? "hide-content" : "",
    className
  );
  return (
    <button
      type="button"
      className={classes}
      {...getDataAutomationIdPair(dataAutomationId, "")}
      {...props}
    >
      <span className="visuallyhidden">{text}</span>
    </button>
  );
};
