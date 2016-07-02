/* @flow */
/* eslint react/prop-types: 0 */
import React, { PropTypes } from "react";

import Icon from "@walmart/wmreact-base/lib/components/icon";
import classNames from "classnames";

import ProgressSpinner from "./button-progress-spinner";

import fireStatelessUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-stateless-ui-event";

/**
A button wrapper
@examples
```jsx
<Button>
  Foo
</Button>
```

A mini button:

```jsx
<Button mini={true}>Mini Button</Button>
```

A fake link button:

```jsx
<Button fakelink={true}>Fake Link Button</Button>
```

A dropdown button:

```jsx
<Button dropdown={true}>Dropdown-Style Button</Button>
```

A disabled button:

```jsx
<Button disabled={true}>Disabled Button</Button>
```

A button that extends across the entire block:

```jsx
<Button block={true}>Block Button</Button>
```

A primary button:

```jsx
<Button primary={true}>Primary Button</Button>
```

A badge button:

```jsx
<Button badge={true}>Badge Button</Button>
```

An inverse button:

```jsx
<Button inverse={true}>Inverse Button</Button>
```

A button with an arrow link:

```jsx
<Button arrowlink={true}>Arrow Link Button</Button>
```

A remove button with an icon:

```jsx
<Button icon='remove' remove={true} />
```

Custom styled button:

```jsx
<Button style={{
  backgroundColor: "#8b67a5",
  color: "#fff"
}}>Custom Styled Button</Button>
```

@component Button
@return {ReactElement} Element tree
@param {object} props Props
@param {object} context Context
@import {Button}
@playground
```
<div>
  <div><Button>Base Button</Button></div><br/>
  <div><Button mini={true}>Mini Button</Button></div><br/>
  <div><Button disabled={true}>Disabled Button</Button></div><br/>
  <div><Button block={true}>Block Button</Button></div><br/>
  <div><Button primary={true}>Primary Button</Button></div><br/>
  <div><Button inverse={true}>Inverse Button</Button></div><br />
  <div>
    <Button style={{
      backgroundColor: "#8b67a5",
      color: "#fff"
      }}
    >Custom Styled Button</Button>
  </div>
</div>
```
@playground
Fake link
```
<Button fakelink={true}>Fake Link Button</Button>
```
@playground
Drop down
```
<Button dropdown={true}>Dropdown-Style Button</Button>
```
@playground
Badge
```
<Button badge={true}>Badge Button</Button>
```
@playground
Arrow link
```
<Button arrowlink={true}>Arrow Link Button</Button>
```
*/
const Button = (props, context) => {
  const {
    active,
    arrowlink,
    badge,
    badgeAlt,
    block,
    children,
    className,
    compact,
    disabled,
    dropdown,
    fakelink,
    flat,
    icon,
    inverse,
    mini,
    onClick,
    primary,
    remove,
    spinner,
    textIcon,
    type,
    vote,
    automationId,
    tealeafId,
    ...extraProps
  } = props;

  const extras = {
    "arrow-link": arrowlink,
    "btn-flat": flat,
    "btn-fake-link": fakelink || arrowlink,
    "btn-inverse": inverse,
    "btn-primary": primary,
    dropdown,
    "btn-compact": compact,
    "btn-mini": mini,
    "btn-block": block,
    "btn-vote": vote,
    "btn-delete": remove,
    "btn-badge": badge,
    "btn-badge-alt": badgeAlt,
    active,
    "btn-progress": spinner
  };

  const _onClick = (e: Object) => {
    fireStatelessUIEvent(props, context, e);

    if (props.disabled) {
      return;
    }

    if (props.onClick) {
      props.onClick(e);
    }
  };

  const baseName = (fakelink || arrowlink) ? "" : "btn";
  if (spinner) {
    return (
      <button
        type={type}
        aria-disabled={disabled}
        disabled={disabled}
        className={classNames(
          className,
          baseName,
          extras,
          props.hidden ? "hide-content" : ""
        )}
        data-automation-id={automationId}
        data-tl-id={tealeafId}
        {...extraProps}
        onClick={(e) => _onClick(e)}>
        {props.children}
        <ProgressSpinner/>
      </button>
    );
  } else if (icon) {

    const classes = classNames(
      "no-wrap btn-double",
      className,
      props.hidden ? "hide-content" : ""
    );

    return (
      <div className={classes} data-automation-id={automationId} data-tl-id={tealeafId}>
        <button
          type={type}
          aria-disabled={disabled}
          disabled={disabled}
          className={classNames("btn", extras)}
          onClick={(e) => _onClick(e)}>
          <Icon name={icon} />
        </button>
        <button
          type={type}
          aria-disabled={disabled}
          disabled={disabled}
          className={classNames("btn-fake-link")}
          {...extraProps}
          onClick={(e) => _onClick(e)}>
          {props.children}
        </button>
      </div>
    );
  } else if (textIcon) {
    return (
      <button
        type={type}
        aria-disabled={disabled}
        disabled={disabled}
        className={classNames(
          className,
          baseName,
          extras,
          props.hidden ? "hide-content" : ""
        )}
        data-automation-id={automationId}
        data-tl-id={tealeafId}
        {...extraProps}
        onClick={(e) => _onClick(e)}>
        <i className={classNames("wmicon", `wmicon-${textIcon}`)}></i>
        {props.children}
      </button>
    );
  } else {
    return (
      <button
        type={type}
        aria-disabled={disabled}
        disabled={disabled}
        className={classNames(
          className,
          baseName,
          extras,
          props.hidden ? "hide-content" : ""
        )}
        data-automation-id={automationId}
        data-tl-id={tealeafId}
        {...extraProps}
        onClick={(e) => _onClick(e)}>
        {props.children}
      </button>
    );
  }
};

Button.displayName = "Button";

Button.propTypes = {
  /**
  True if this is an arrow link
  */
  arrowlink: PropTypes.bool,
  /**
  True if this is an fake link
  */
  fakelink: PropTypes.bool,
  /**
  True if this is a compact button
  */
  compact: PropTypes.bool,
  /**
  True if this is disabled
  */
  disabled: PropTypes.bool,
  /**
  True if this should be inverse
  */
  inverse: PropTypes.bool,
  /**
  True if this is a mini button
  */
  mini: PropTypes.bool,
  /**
  True if this is a block button
  */
  block: PropTypes.bool,
  /**
  True if this is an primary button
  */
  primary: PropTypes.bool,
  /**
  True if this is an badge button
  */
  badge: PropTypes.bool,
  /**
  True if this is an altbadge button
  */
  badgeAlt: PropTypes.bool,
  /**
  True if this is actve
  */
  active: PropTypes.bool,
  /**
  True if this is a vote button
  */
  vote: PropTypes.bool,
  /**
  True if this should show a spinner
  */
  spinner: PropTypes.bool,
  /**
  True if this is an remove button
  */
  remove: PropTypes.bool,
  /**
  The icon to show in the button
  */
  icon: PropTypes.string,
  /**
  The text icon to show in the button
  */
  textIcon: PropTypes.string,
  /**
  The button type
  */
  type: PropTypes.string,
  /**
  The click handler
  */
  onClick: PropTypes.func,
  /*
  Automation id for testing
  */
  automationId: PropTypes.string,
  /*
  Tealeaf id for tracking
  */
  tealeafId: PropTypes.string,
  /**
  True if this is a dropdown button
  */
  dropdown: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
  hidden: PropTypes.bool
};

Button.defaultProps = {
  arrowlink: false,
  fakelink: false,
  compact: false,
  disabled: false,
  inverse: false,
  mini: false,
  block: false,
  primary: false,
  remove: false,
  badge: false,
  badgeAlt: false,
  vote: false,
  active: false,
  type: "button",
  automationId: "button",
  tealeafId: "button",
  spinner: false,
  onClick: () => {}
};

Button.contextTypes = {
  analytics: PropTypes.object
};

Button.ProgressSpinner = ProgressSpinner;

export default Button;
