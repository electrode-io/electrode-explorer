/* @flow */
/* eslint max-params: 0 */
import React from "react";
import buildTriggerWrapper from "./trigger-wrapper";

/**
Wraps an app to provide analytics services throughout.
@examples
```jsx
<EventCollector onClick>
  <button onClick={() => alert(1)}>Click me!</button>
</EventCollector>
```
@component EventCollector
@import {EventCollector}
*/
export default class EventCollector extends React.Component {
  _wrap(depth: ?number, overrides: Object, comp: Object, ind: ?number): ReactElement {
    if (typeof comp === "string") {
      return comp;
    }
    const props = {};

    Object
      .keys(overrides)
      .forEach(
        (ev) => {
          if (comp.props[ev]) {
            props[ev] = buildTriggerWrapper(this.context.analytics,
              overrides[ev], comp, ev);
          }
        }
      );

    props.key = ind || 0;

    let recursiveChildren = comp.props.children;
    if (this.props.maxDepth === null || this.props.maxDepth < depth) {
      recursiveChildren = React.Children
        .toArray(comp.props.children)
        .map((child, index) => this._wrap(depth + 1, overrides, child, index)) || null;
    }

    return typeof comp === "object" ?
      React.cloneElement(comp, props, recursiveChildren) :
      React.createElement(comp, props, recursiveChildren);
  }

  render(): ReactElement {
    const {children, maxDepth, ...overrides} = this.props;
    return this._wrap(0, overrides, this.props.children);
  }
}

EventCollector.contextTypes = {
  analytics: React.PropTypes.object
};

EventCollector.propTypes = {
  children: React.PropTypes.object,
  maxDepth: React.PropTypes.number
};

EventCollector.defaultProps = {
  maxDepth: null
};
