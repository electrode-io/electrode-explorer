/* @flow */
import React from "react";
import classNames from "classnames";

/**
Subnav control.
@examples
```jsx
<Subnav automationId="demo-subnav">
  <Subnav.Item href="#foo" current={true} childCount={3} automationId="subnav-0">
    Item 1
  </Subnav.Item>

  <Subnav.Item href="#bar" current={false} childCount={3} automationId="subnav-1">
    Item 2
  </Subnav.Item>

  <Subnav.Item href="#baz" current={false} childCount={3} automationId="subnav-2">
    Item 3
  </Subnav.Item>
</Subnav>
```
@component Subnav
@import {Subnav}
@playground
Subnav
```
<Subnav automationId="demo-subnav">
  <Subnav.Item href="#foo" current={true}
    childCount={3} automationId="subnav-0">
    Item 1
  </Subnav.Item>

  <Subnav.Item href="#bar" current={false}
    childCount={3} automationId="subnav-1">
    Item 2
  </Subnav.Item>

  <Subnav.Item href="#baz" current={false}
    childCount={3} automationId="subnav-2">
    Item 3
  </Subnav.Item>
</Subnav>
```
*/
const baseClass = React.createClass({
  displayName: "Subnav",

  propTypes: {
    /**
    If a page is static, add `staticPage` to set a fixed
    width of 1024px to the subnav. This maintains correct
    styling if a browser is more narrow than 1024px and the
    user scrolls to the right.
    */
    staticPage: React.PropTypes.bool,
    /**
    Adds a container element inside the subnav for proper
    display when the element should span the entire width
    of the page.
    */
    withContainer: React.PropTypes.bool,
    /**
    If a component user or author needs a subnav to differentiate
    itself for automation purposes, we accept an
    externally-supplied automationId.
    */
    automationId: React.PropTypes.string,
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    hidden: React.PropTypes.bool
  },

  getDefaultProps(): Object {
    return {
      staticPage: false,
      withContainer: false
    };
  },

  _renderInterior(): ReactElement {
    // Set an automation-id on <ul> if containerless, on the container otherwise.
    const automationId = this.props.withContainer ? undefined : this.props.automationId;
    const interiorContent = (
      <ul className="persistent-subnav-list"
        data-automation-id={automationId}>
        {this.props.children}
      </ul>
    );

    if (this.props.withContainer) {
      return (
        <div className="ResponsiveContainer" data-automation-id={this.props.automationId}>
          {interiorContent}
        </div>
      );
    }

    return interiorContent;
  },

  render(): ReactElement {
    const componentClasses = classNames(
      "persistent-subnav",
      {fullwidth: this.props.staticPage},
      this.props.hidden ? "hide-content" : "",
      this.props.className
    );

    return (
      <nav className={componentClasses} {... this.props}>
        {this._renderInterior()}
      </nav>
    );
  }
});

baseClass.Item = require("./subnav-item");

export default baseClass;
