/* @flow */
import React from "react";

import classNames from "classnames";
import SubNav from "./subnav";
import {fireUIEvent} from "@walmart/wmreact-analytics";

/**
Tabs container.
@examples
```jsx
<Tabs style={{minWidth: '100%'}} automationId="demo-tabs">
  <Tabs.Item title="First">
    <p>First Tab!</p>
  </Tabs.Item>
  <Tabs.Item title="Second">
    <p>Second Tab!</p>
  </Tabs.Item>
</Tabs>
```
@component Tabs
@import {Tabs}
@playground
Tabs Container
```
<Tabs style={{minWidth: '100%'}} automationId="demo-tabs">
  <Tabs.Item title="First">
    <p>First Tab!</p>
  </Tabs.Item>
  <Tabs.Item title="Second">
    <p>Second Tab!</p>
  </Tabs.Item>
</Tabs>
```
*/
const baseClass = React.createClass({
  displayName: "Tabs",

  propTypes: {
    /**
    If a component user or author needs a tab control to
    differentiate itself for automation purposes, we
    accept an externally-supplied automationId.
    */
    automationId: React.PropTypes.string,
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    hidden: React.PropTypes.bool
  },

  contextTypes: {
    analytics: React.PropTypes.object
  },

  getInitialState(): Object {
    return {
      current: 0
    };
  },

  _onTitleClick(index: number, extra: any, event: any): void {
    fireUIEvent(this, event, {extras: {index}});
    event.preventDefault();
    this.setState({current: index});
  },

  _renderChild(child: ReactElement, index: number): ?ReactElement {
    return (this.state.current === index) ? child : null;
  },

  render(): ReactElement {
    const self = this;
    let childCount = 0;
    React.Children.map(this.props.children, () => {
      childCount++;
    });
    const navItems = React.Children.map(
      this.props.children,
      (child: ReactElement, index: number) => {
        let automationId = self.props.automationId
          ? self.props.automationId
          : "tab";
        automationId += `-item-${index}`;

        return (
          <SubNav.Item automationId={automationId}
            key={index}
            childCount={childCount}
            title={child.props.title}
            current={index === self.state.current}
            onClick={(event) => self._onTitleClick(index, {}, event)} />
        );
      });
    return (
      <div {... this.props}
        data-automation-id={this.props.automationId}
        className={classNames(
          this.props.className,
          this.props.hidden ? "hide-content" : ""
        )}>
        <SubNav {... this.props}>
          {navItems}
        </SubNav>
        {React.Children.map(this.props.children, this._renderChild)}
      </div>
    );
  }
});

baseClass.Item = require("./tabs-item");

export default baseClass;
