/* @flow */
import React from "react";

/**
Wraps an app to provide analytics services throughout.
@examples
```jsx
<AnalyticsProvider onEvent={(evt) => console.log(evt)}>
  <YourApp />
</AnalyticsProvider>
```
@component AnalyticsProvider
@import {AnalyticsProvider}
*/
export default class AnalyticsProvider extends React.Component {
  constructor(props: Object): void {
    super(props);
  }
  getChildContext(): Object {
    return {
      analytics: {
        callback: this.props.onEvent,
        context: this.props.context || {}
      }
    };
  }
  render(): ReactElement {
    return this.props.children;
  }
}

AnalyticsProvider.childContextTypes = {
  analytics: React.PropTypes.object
};

AnalyticsProvider.propTypes = {
  children: React.PropTypes.object,
  onEvent: React.PropTypes.func.isRequired,
  context: React.PropTypes.object
};
