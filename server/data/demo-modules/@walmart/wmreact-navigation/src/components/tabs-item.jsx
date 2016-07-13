/* @flow */
import React from "react";

/**
Tabs child item.
@examples
```jsx
<Tabs.Item title="First">
  <p>First Tab!</p>
</Tabs.Item>
```
@component Tabs.Item
@import {Tabs}
@playground
Tabs Item
```
<Tabs.Item title="First">
  <p>First Tab!</p>
</Tabs.Item>
```
*/
module.exports = React.createClass({
  displayName: "Tab.Item",

  propTypes: {
    /**
    The title
    */
    title: React.PropTypes.node.isRequired,
    children: React.PropTypes.node,
    hidden: React.PropTypes.bool
  },

  getInitialState(): Object {
    return {
      current: false
    };
  },

  render(): ReactElement {
    return (
      <div className={this.props.hidden ? "hide-content" : ""}>
        {this.props.children}
      </div>
    );
  }
});
