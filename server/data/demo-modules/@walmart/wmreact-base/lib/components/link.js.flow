/* @flow */
/* eslint react/prop-types: 0 */
import React from "react";

import classNames from "classnames";

import LinkArrow from "./link-arrow";
import MoreArrow from "./link-more";
import DropdownArrow from "./link-dropdown";

import { fireStatelessUIEvent } from "@walmart/wmreact-analytics";

/**
The base link component.
@examples
```jsx
<div>
  <Link href="#">Base Link</Link><br/>
  <Link href="#" arrow={true}>Arrow Link</Link><br/>
  <Link href="#" active={true}>Active Link</Link><br/>
  <Link href="#" dropdown={true}>Dropdown Link</Link>
</div>
```
@return {ReactElement} - React element
@param {object} props Properties
@param {object} context Context
@component Link
@import {Link}
@playground
Link
```
<div>
  <Link href="#">Base Link</Link><br/>
  <Link href="#" arrow={true}>Arrow Link</Link><br/>
  <Link href="#" active={true}>Active Link</Link><br/>
  <Link href="#" dropdown={true}>Dropdown Link</Link>
</div>
```
*/
const Link = (props, context) => {
  const extras = {
    "arrow-link": props.arrow,
    "active": props.active,
    "more-link": props.more,
    "dropdown-link": props.dropdown
  };
  const {onClick, className, ...other} = props;

  const _onClick = (event: Object) => {
    fireStatelessUIEvent(props, context, event);
    if (props.onClick) {
      props.onClick(event);
    }
  };

  return (
    <a className={classNames(
        extras,
        props.hidden ? "hide-content" : "",
        props.className
      )}
      onClick={_onClick}
      {...other}>
        {props.children}
    </a>
  );
};

Link.contextTypes = {
  analytics: React.PropTypes.object
};

Link.propTypes = {
  /**
  True if you want to apply `arrow-link`
  */
  arrow: React.PropTypes.bool,
  /**
  True if you want to apply `more-link`
  */
  more: React.PropTypes.bool,
  /**
  True if you want to apply `dropdown-link`
  */
  dropdown: React.PropTypes.bool,
  /**
  Handles the onClick event.
  */
  onClick: React.PropTypes.func,
  /**
  True if you want to apply `active`
  */
  active: React.PropTypes.bool,
  className: React.PropTypes.string,
  children: React.PropTypes.node,
  hidden: React.PropTypes.bool
};

Link.defaultProps = {
  arrow: false,
  active: false,
  more: false,
  dropdown: false
};

Link.Arrow = LinkArrow;
Link.More = MoreArrow;
Link.Dropdown = DropdownArrow;

export default Link;
