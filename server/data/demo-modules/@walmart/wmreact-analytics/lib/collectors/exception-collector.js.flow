/* @flow */
/* eslint max-params: 0 */
import React from "react";
import ExecutionEnvironment from "exenv";

/**
Catches any exceptions.
@examples
```jsx
<ExceptionCollector>
  <button onClick={() => foo/bar}>Click me for an exceptional experience!</button>
</ExceptionCollector>
```
@component ExceptionCollector
@import {ExceptionCollector}
*/
export default class ExceptionCollector extends React.Component {
  constructor(props: Object): void {
    super(props);
  }

  componentDidMount(): void {
    if (ExecutionEnvironment.canUseDOM) {
      window.onerror = (message, file, line, col, error) => {
        this.context.analytics.callback({ _type: "exception",
          context: this.context.analytics.context,
          state: {
            message, file, line, col, error, stack: error ? error.stack : null
          }
        });
      };
    }
  }

  render(): ReactElement {
    return this.props.children;
  }
}

ExceptionCollector.contextTypes = {
  analytics: React.PropTypes.object
};

ExceptionCollector.propTypes = {
  children: React.PropTypes.object
};
