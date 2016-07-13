/* @flow */
/* eslint react/prop-types: 0 */
import React from "react";

import classNames from "classnames";

import { fireStatelessUIEvent } from "@walmart/wmreact-analytics";

/**
Link for more.
@examples
```jsx
<Link.More>
  Foo
</Link.More>
```
@return {ReactElement} - React element
@param {object} props Properties
@param {object} context Context
@component Link.More
@import {Link}
@playground
```
<Link.More>
  Foo
</Link.More>
```
*/
const LinkMore = (props, context) => {
  const {onClick, className, ...other} = props;
  const _onClick = (event: Object) => {
    fireStatelessUIEvent(props, context, event);
    if (props.onClick) {
      props.onClick(event);
    }
  };

  return (
    <a className={classNames(
        "more-link",
        props.hidden ? "hide-content" : "",
        props.className
      )}
      onClick={_onClick}
      {...other}>
        {props.children}
    </a>
  );
};

LinkMore.contextTypes = {
  analytics: React.PropTypes.object
};

LinkMore.propTypes = {
  /**
  Handles the onClick event.
  */
  onClick: React.PropTypes.func,
  className: React.PropTypes.string,
  children: React.PropTypes.node,
  hidden: React.PropTypes.bool
};

export default LinkMore;
