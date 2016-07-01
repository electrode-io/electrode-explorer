/* @flow */
/* eslint react/prop-types: 0 */
import React from "react";

import classNames from "classnames";

import { fireStatelessUIEvent } from "@walmart/wmreact-analytics";

/**
Dropdown link.
@examples
```jsx
<Link.Dropdown>
  Foo
</Link.Dropdown>
```
@return {ReactElement} - React element
@param {object} props Properties
@param {object} context Context
@component Link.Dropdown
@import {Link}
@playground
```
<Link.Dropdown>
  Foo
</Link.Dropdown>
```
*/
const LinkDropdown = (props, context) => {
  const {onClick, className, ...other} = props;
  const _onClick = (event: Object) => {
    fireStatelessUIEvent(props, context, event);
    if (props.onClick) {
      props.onClick(event);
    }
  };
  return (
    <a className={classNames(
        "dropdown-link",
        props.hidden ? "hide-content" : "",
        props.className
      )}
      onClick={_onClick}
      {...other}>
        {props.children}
    </a>
  );
};

LinkDropdown.contextTypes = {
  analytics: React.PropTypes.object
};

LinkDropdown.propTypes = {
  /**
  Handles the onClick event.
  */
  onClick: React.PropTypes.func,
  className: React.PropTypes.string,
  children: React.PropTypes.node,
  hidden: React.PropTypes.bool
};

export default LinkDropdown;
