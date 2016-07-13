/* @flow */
import React from "react";
import classNames from "classnames";
const cloneElement = React.cloneElement;

import AccordionItem from "./accordion-item";
import AccordionSummary from "./accordion-summary";

import fireUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-ui-event";
/**
An accordion component with expanding/collapsing titled
accordion segments that works well in responsive.
@examples
```jsx
<Accordion>
  <Accordion.Item title="Step 1">
    <h1>First Step Content</h1>
  </Accordion.Item>
  <Accordion.Item title="Step 2">
    <h1>Second Step Content</h1>
  </Accordion.Item>
  <Accordion.Item title="Step 3">
    <h1>Third Step Content</h1>
  </Accordion.Item>
</Accordion>
```

And one that shows more of the features:

```jsx
<Accordion>
  <Accordion.Item title="Step 1" titleCompleted="Step 1">
    <h1>First Step Content</h1>
  </Accordion.Item>
  <Accordion.Item title="Step 2" titleCompleted="Step 2"
    titleExtra={
      <Accordion.Summary>
        <span>A summary item of step 2</span>
        <span>And another one</span>
      </Accordion.Summary>}>
    <h1>Second Step Content</h1>
  </Accordion.Item>
  <Accordion.Item title="Step 3" titleCompleted="Step 3">
    <h1>Third Step Content</h1>
  </Accordion.Item>
</Accordion>
```
@import Accordion
@component Accordion
@uxUsage
+ Use when you want the benefits of a normal sidebar menu, but do not have the space to list
  all options.
+ Use when there are more than 2 main sections on a website each with 2 or more subsections.
+ Use when you have less than 10 main sections
+ Use when you only have two levels to show in the main navigation.
@uxSpecifications
+ Each headline / section has a panel, which upon clicking can be expanded either vertically or
  horizontally into showing its subsections.
+ The transition from showing no options of a headline to showing a headline’s list of options
  can be done either with a page refresh or with a javascript DHTML animation.
+ When one panel is clicked it is expanded, while other panels are collapsed.
@playground
Simple Accordion
```
<Accordion>
  <Accordion.Item title="Step 1">
    <h1>First Step Content</h1>
  </Accordion.Item>
  <Accordion.Item title="Step 2">
    <h1>Second Step Content</h1>
  </Accordion.Item>
  <Accordion.Item title="Step 3">
    <h1>Third Step Content</h1>
  </Accordion.Item>
</Accordion>
```
@playground
Accordion
```
<Accordion>
  <Accordion.Item title="Step 1" titleCompleted="Step 1">
    <h1>First Step Content</h1>
  </Accordion.Item>
  <Accordion.Item title="Step 2" titleCompleted="Step 2"
    titleExtra={
      <Accordion.Summary>
        <span>A summary item of step 2</span>
        <span>And another one</span>
      </Accordion.Summary>}>
    <h1>Second Step Content</h1>
  </Accordion.Item>
  <Accordion.Item title="Step 3" titleCompleted="Step 3">
    <h1>Third Step Content</h1>
  </Accordion.Item>
</Accordion>
```
*/
const classBase = React.createClass({
  displayName: "Accordion",

  mixins: [React.PureRenderMixin],

  contextTypes: {
    analytics: React.PropTypes.object
  },

  propTypes: {
    /**
    In `auto` mode the accordion tabs open and close themselves. In `manual` mode
    you use the `completed` state on the accordion item to manage which item is open
    */
    mode: React.PropTypes.oneOf(["auto", "manual"]),
    children: React.PropTypes.node,
    /**
    The ID to use for automation
    */
    automationId: React.PropTypes.string,
    hidden: React.PropTypes.bool
  },

  getDefaultProps():Object {
    return {
      mode: "auto"
    };
  },

  getInitialState():Object {
    return {
      selected: 0
    };
  },

  _isAuto():boolean {
    return (this.props.mode === "auto");
  },

  _onClick(index:number, event:Object):void {
    fireUIEvent(this, event, {extras: index});
    this.setState({selected: index});
  },

  _renderChild(child:ReactElement, index:number):ReactElement {
    if (this._isAuto()) {
      // Automation id assignment of children:
      //  - Use child's own automationId, if it has one already assigned
      //  - Use xxxx-item-N where N is child index and xxxx is *this*
      //    component's automationId (if present)
      //  - Fall back on accordion-item-N where N is the index of the
      //    child (if *this* component has no automationId)
      const automationId = child.props.automationId
        ? child.props.automationId
        : `${(this.props.automationId ? this.props.automationId : "accordion")}-item-${index}`;

      return cloneElement(child, {
        index: index + 1,
        automationId,
        onClick: (event) => this._onClick(index, event),
        open: this.state.selected === index,
        completed: this.state.selected > index,
        key: index
      });
    } else {
      return child;
    }
  },

  render():ReactElement {
    return (
      <ul data-automation-id={this.props.automationId}
        className={classNames(
          this.props.hidden ? "hide-content" : "",
          "zeus-accordion"
        )}>
        {React.Children.map(this.props.children, this._renderChild)}
      </ul>
    );
  }
});

classBase.Item = AccordionItem;
classBase.Summary = AccordionSummary;

export default classBase;
