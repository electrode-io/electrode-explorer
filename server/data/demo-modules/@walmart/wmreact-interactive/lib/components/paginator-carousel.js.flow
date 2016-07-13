/* @flow */
/* eslint no-loop-func: 0 */
import React from "react";

import classNames from "classnames";

import fireStatelessUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-stateless-ui-event";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";

/**
A paginator for carousels
@examples
```jsx
<Paginator.Carousel total={5} current={0}/>
```
@return {ReactElement} Element tree
@param {object} props Props
@param {object} context Context
@component Paginator.Carousel
@import {Paginator}
@references Paginator
@playground
```
<Paginator.Carousel total={5} current={0}/>
```
*/
const PaginatorCarousel = (props, context) => {
  const {
    onDotClick,
    hidden,
    className,
    mini,
    positioned,
    total,
    current,
    dataAutomationId
  } = props;

  const _onDotClick = (i, event) => {
    fireStatelessUIEvent(props, context, event, {typeName: "onDotClick"});
    if (onDotClick) {
      onDotClick(i, event);
    }
  };

  const classes = classNames(
    "carousel-paginator-list",
    hidden ? "hide-content" : "",
    className,
    {"carousel-paginator-list-mini": mini},
    {"carousel-paginator-list-positioned": positioned}
  );
  const dots = [];
  for (let i = 0; i < total; i++) {
    dots.push((
      <li key={i}
        className={(i === current) ? "slick-active" : ""}
        onClick={(event) => _onDotClick(i, event)}>
        <button
          className="carousel-paginator-item"
          type="button"
          {...getDataAutomationIdPair(i, dataAutomationId)}>
          <span className="visuallyhidden">{i + 1}</span>
        </button>
      </li>
    ));
  }
  return (
    <ul className={classes}>
      {dots}
    </ul>
  );
};

PaginatorCarousel.contextTypes = {
  analytics: React.PropTypes.object
};

export default PaginatorCarousel;
