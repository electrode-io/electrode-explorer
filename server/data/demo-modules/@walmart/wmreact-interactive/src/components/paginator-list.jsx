/* @flow */
/* eslint react/prop-types: 0 */
import React from "react";

import classNames from "classnames";
import fireStatelessUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-stateless-ui-event";

const renderPageLink = (page: number, selected: boolean, onClick): ReactElement => {
  return (
    <li key={page}>
      <a
        className={selected ? "active" : ""}
        onClick={(event) => onClick(page, event)}>
        {page + 1}
      </a>
    </li>
  );
};

const renderGap = (key: number): ReactElement => {
  return (
    <li key={`gap_${key}`} className="paginator-list-gap"></li>
  );
};

/**
List for a paginator
@examples
```jsx
<Paginator.PaginatorList total={5} current={0}/>
```
@return {ReactElement} Element tree
@param {object} props Props
@param {object} context Context
@component Paginator.PaginatorList
@import {Paginator}
@references Paginator
@playground
```
<Paginator.PaginatorList total={5} current={0}/>
```
*/
const PaginatorList = (props, context) => {
  const _onClick = (index: number, event: Object): void => {
    fireStatelessUIEvent(props, context, event);

    if (event) {
      event.preventDefault();
    }
    props.onClick(index || 0, event);
  };

  let pageLinks = [];
  if (props.pages) {
    pageLinks = props.pages.map((page, index) =>
      (page.gap ? renderGap(index) : renderPageLink(page.page - 1, page.selected, _onClick))
    );
  } else {
    const beginning = Math.max(props.current - 5, 0);
    const end = Math.min(props.current + 5, props.total);

    if (beginning > 1) {
      pageLinks.push(renderPageLink(0, props.current === 0, _onClick));
      pageLinks.push(renderGap(0));
    }
    for (let i = beginning; i < end; i++) {
      pageLinks.push(renderPageLink(i, props.current === i, _onClick));
    }
    if (end < props.total - 2) {
      pageLinks.push(renderGap(props.total - 1));
      pageLinks.push(renderPageLink(props.total - 1, props.current === props.total, _onClick));
    }
  }

  return (
    <ul className={classNames("paginator-list", props.hidden ? "hide-content" : "")}>
      {pageLinks}
    </ul>
  );
};

PaginatorList.contextTypes = {
  analytics: React.PropTypes.object
};

export default PaginatorList;
