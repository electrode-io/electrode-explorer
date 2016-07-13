/* @flow */
/* eslint no-unused-vars: 0 */
import React from "react";
import classNames from "classnames";
import {fireUIEvent} from "@walmart/wmreact-analytics";

/**
Subnav child item.
@examples
```jsx
<Subnav.Item href="#foo" current={true} childCount={3} automationId="subnav-0">
  Item 1
</Subnav.Item>
```
@component Subnav.Item
@import {Subnav}
@playground
Subnav Item
```
<Subnav.Item href="#foo" current={true} childCount={3} automationId="subnav-0">
  Item 1
</Subnav.Item>
```
*/
module.exports = React.createClass({
  displayName: "Subnav.Item",

  propTypes: {
    /**
    Item title
    */
    title: React.PropTypes.node,
    /**
    The index
    */
    childCount: React.PropTypes.number.isRequired,
    /**
    True if this is the current item
    */
    current: React.PropTypes.bool,
    /**
    onClick callback
    */
    onClick: React.PropTypes.func,
    /**
    The href attribute for the link
    */
    href: React.PropTypes.string,
    /**
    An optional automation ID
    */
    automationId: React.PropTypes.string,
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    hidden: React.PropTypes.bool
  },

  contextTypes: {
    analytics: React.PropTypes.object
  },

  getDefaultProps(): Object {
    return {
      href: "#",
      current: false,
      childCount: 1,
      onClick(event: Object): void {}
    };
  },

  _onClick(event: Object): void {
    event.preventDefault();
    fireUIEvent(this, event);
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  },

  render(): ReactElement {
    const extras = {
      "current": this.props.current
    };
    const style = {
      width: `${(100 / this.props.childCount)}%`
    };
    return (
      <li
        style={style}
        data-automation-id={this.props.automationId}
        className={classNames(
          "persistent-subnav-item",
          extras,
          this.props.hidden ? "hide-content" : "",
          this.props.className
        )}
        {... this.props}
      >
        <a
          href={this.props.href}
          onClick={this._onClick}
        >
          {this.props.children || this.props.title}
        </a>
      </li>
    );
  }
});
