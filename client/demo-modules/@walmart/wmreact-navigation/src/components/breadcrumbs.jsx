/* @flow */
import React from "react";

/**
Breadcrumbs control.
@examples
```jsx
<Breadcrumbs automationId="demo-breadcrumbs">
  <a>Breadcrumb 1</a>
  <a>Breadcrumb 2</a>
  <a>Breadcrumb 3</a>
</Breadcrumbs>
```
@component Breadcrumbs
@import {Breadcrumbs}
@playground
Breadcrumbs
```
<Breadcrumbs automationId="demo-breadcrumbs">
  <a>Breadcrumb 1</a>
  <a>Breadcrumb 2</a>
  <a>Breadcrumb 3</a>
</Breadcrumbs>
```
*/
export default React.createClass({
  displayName: "Breadcrumbs",

  mixins: [React.PureRenderMixin],

  propTypes: {
    /**
    True if we should apply the mini CSS
    */
    mini: React.PropTypes.bool,
    /**
    Optional automation ID
    */
    automationId: React.PropTypes.string,
    children: React.PropTypes.node,
    hidden: React.PropTypes.bool
  },

  getDefaultProps(): Object {
    return {
      mini: false
    };
  },

  render(): ReactElement {
    const self = this;
    const count = React.Children.count(this.props.children) - 1;
    const children = React.Children.map(this.props.children, (child, index) => {
      let automationId = self.props.automationId
        ? self.props.automationId
        : "breadcrumb";
      automationId += `-item-${index}`;

      return (
        <li key={index}
          data-automation-id={automationId}
          className={`breadcrumb ${(index === count ? "active" : "")}`}
          itemType="http://data-vocabulary.org/Breadcrumb">
          {child}
        </li>
      );
    });

    return (
      <nav className={this.props.hidden ? "hide-content" : ""}
        data-automation-id={this.props.automationId}>
        <ol className={`breadcrumb-list ${(this.props.mini ? "breadcrumb-list-mini" : "")}`}>
          {children}
        </ol>
      </nav>
    );
  }
});
