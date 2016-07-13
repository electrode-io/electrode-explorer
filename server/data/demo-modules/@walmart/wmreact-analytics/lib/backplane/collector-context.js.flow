/* @flow */
/* eslint prefer-const: 0 */
import React from "react";

/**
Provides a mechanism to percolate more context information down
into the subtree.
@examples
```jsx
<CollectorContext productId={123213}>
  <YourApp />
</CollectorContext>
```
@component CollectorContext
@import {CollectorContext}
*/
export default class CollectorContext extends React.Component {
  constructor(props: Object): void {
    super(props);
  }
  getChildContext(): {
    analytics: {
      context: Object
    }
  } {
    const {analytics} = this.context;
    // do nothing if no analytics hooked up
    if (analytics !== undefined) {
      const {children, ...props} = this.props;
      return {
        analytics: {
          ... analytics,
          context: {
            ... analytics.context,
            ... props
          }
        }
      };
    }
  }
  render(): ReactElement {
    return this.props.children;
  }
}

CollectorContext.contextTypes = {
  analytics: React.PropTypes.object
};

CollectorContext.childContextTypes = {
  analytics: React.PropTypes.object
};

CollectorContext.propTypes = {
  children: React.PropTypes.object
};
