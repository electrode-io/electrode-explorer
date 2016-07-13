/* @flow */
/* eslint func-style: 0 */
import React from "react";
import eventsWrapper from "./events-wrapper";
import invariant from "invariant";

export default function collectorWrapper(eventsToWrap: Object = {},
  options: Object = {}): Function {
  return (WrappedComponent) => {
    let { withRef } = options;
    withRef = withRef || false;
    class Connect extends React.Component {
      getWrappedInstance(): Object {
        invariant(withRef,
          `To access the wrapped instance, you need to specify ` +
          `{ withRef: true } as the second argument of the analyticsWrapper() call.`
        );

        return this.refs.wrappedInstance;
      }

      render(): ReactElement {
        const ref = withRef ? "wrappedInstance" : null;
        const props = {};
        for (const k in this.props) {
          if (eventsToWrap[k] === undefined) {
            props[k] = this.props[k];
          }
        }
        return (
          <WrappedComponent
            {... eventsWrapper(this, eventsToWrap)}
            {... props} ref={ref} />
        );
      }
    }

    Connect.contextTypes = {
      analytics: React.PropTypes.object
    };

    return Connect;
  };
}
