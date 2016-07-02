/* @flow */
/* eslint react/prop-types: 0, space-infix-ops: 0 */
import React from "react";

import classNames from "classnames";

import PaginatorList from "./paginator-list";
import PaginatorHairline from "./paginator-hairline";
import PaginatorCarousel from "./paginator-carousel";
import fireStatelessUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-stateless-ui-event";

/**
Paginators group
@examples
```jsx
<Paginator total={5} current={0}/>
```
@return {ReactElement} Element tree
@param {object} props Props
@param {object} context Context
@component Paginator
@import {Paginator}
@playground
Paginators
```
<Paginator total={5} current={0}/>
```
*/
const Paginator = (props, context) => {
  const _fireAnalyticsEvent = (type: string, event: Object, extras: Object = {}) => {
    fireStatelessUIEvent(props, context, event, {eventType: type, extras});
  };

  const _onPaginatorClick = (index: number, event: Object): void => {
    _fireAnalyticsEvent("onPaginatorClick", event, {index});
    props.onClick(index);
  };

  const _onPrevious = (event: Object): void => {
    _fireAnalyticsEvent("onPrevious", event);
    event.preventDefault();
    props.onClick(props.previous >= 0 ? props.previous : props.current - 1);
  };

  const _onNext = (event: Object): void => {
    _fireAnalyticsEvent("onNext", event);
    event.preventDefault();
    props.onClick(props.next || props.current + 1);
  };

  const prev = (props.previous >= 0 || props.current > 0) ?
    <a className="paginator-btn paginator-btn-prev" onClick={(e) => _onPrevious(e)}>
      <span className="visuallyhidden">Previous</span>
    </a> : null;

  const next = (props.next || props.current + 1 < props.total) ?
    <a className="paginator-btn paginator-btn-next" onClick={(e) => _onNext(e)}>
      <span className="visuallyhidden">Next</span>
    </a> : null;

  return (
    <div className={classNames(
      "paginator",
      props.hidden ? "hide-content" : ""
    )}>
      {prev}
      <PaginatorList
        total={props.total}
        current={props.current}
        pages={props.pages}
        onClick={(index, event) => _onPaginatorClick(index, event)} />
      {next}
    </div>
  );
};

Paginator.contextTypes = {
  analytics: React.PropTypes.object
};

Paginator.PaginatorList = PaginatorList;
Paginator.Hairline = PaginatorHairline;
Paginator.Carousel = PaginatorCarousel;

export default Paginator;
