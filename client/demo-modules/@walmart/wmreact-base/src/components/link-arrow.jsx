/* @flow */
/* eslint react/prop-types: 0 */
import React from "react";

import classNames from "classnames";

import { fireStatelessUIEvent } from "@walmart/wmreact-analytics";

/**
Link with arrow.
@examples
```jsx
<Link.Arrow>
  Foo
</Link.Arrow>
```
@return {ReactElement} - React element
@param {object} props Properties
@param {object} context Context
@component Link.Arrow
@import {Link}
@playground
```
<Link.Arrow>
  Foo
</Link.Arrow>
```
*/
const LinkArrow = (props, context) => {
  const extras = {
    "active": props.active
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
        "arrow-link",
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

LinkArrow.contextTypes = {
  analytics: React.PropTypes.object
};

LinkArrow.propTypes = {
  /**
  True if it should apply `active`
  */
  active: React.PropTypes.bool,
  /**
  Handles the onClick event.
  */
  onClick: React.PropTypes.func,
  className: React.PropTypes.string,
  children: React.PropTypes.node,
  hidden: React.PropTypes.bool
};

export default LinkArrow;
