/* @flow */
import React from "react";

/**
Listens for web events in the children and posts them to the analytics event stream.
@examples
```jsx
<RawEventCollector onClick>
  <YourApp />
</RawEventCollector>
```
@component RawEventCollector
@import {RawEventCollector}
*/
export default class RawEventCollector extends React.Component {
  constructor(props: Object): void {
    super(props);
    this._createEventHandler = this._createEventHandler.bind(this);
  }

  _createEventHandler(extra: Object): Function {
    return (evt: Object): void => {
      const attributes = {};
      for (const a in evt.target.attributes) {
        const attr = evt.target.attributes[a];
        if (attr.nodeName) {
          attributes[attr.nodeName] = attr.nodeValue;
        }
      }
      this.context.analytics.callback({
        extra,
        attributes,
        target: evt.target,
        _type: evt.type
      });
    };
  }

  render(): ReactElement {
    const detectors = {};
    for (const p in this.props) {
      detectors[p] = this._createEventHandler(this.props[p]);
    }
    return (
      <span {... detectors}>
        {this.props.children}
      </span>
    );
  }
}

RawEventCollector.contextTypes = {
  analytics: React.PropTypes.object
};

RawEventCollector.propTypes = {
  children: React.PropTypes.object
};
