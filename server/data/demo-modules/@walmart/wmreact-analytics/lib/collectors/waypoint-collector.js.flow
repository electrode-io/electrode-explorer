/* @flow */

import React, {Component, PropTypes, Children} from "react";
import Waypoint from "react-waypoint";
import once from "lodash/once";
import throttle from "lodash/throttle";

/**
Posts events to the analytics stream when a component is scrolled into view.

Will forward all props to `react-waypoint`. See the documentation for supported
props - https://github.com/brigade/react-waypoint/blob/master/README.md#prop-types

@examples
```jsx
<WaypointCollector topOffset={10} bottomOffset={0} onEnter={() => console.log("App entered")}>
  <YourApp />
</WaypointCollector>
```
@component WaypointCollector
@import {WaypointCollector}
*/
export default class WaypointCollector extends Component {
    _onEnter(child : ReactElement, waypoint : Object) {
      const { onEnter, eventType } = this.props;
      this._fireEvent(eventType, child, waypoint);
      onEnter(eventType, child, waypoint);
    }

    _fireEvent(eventType: string, child : ReactElement, waypoint : Object) {
      const extra = {
        previousPosition: waypoint.previousPosition,
        currentPosition: waypoint.currentPosition
      };
      this.context.analytics.callback({
        _type: eventType,
        _reactChild: child,
        event: waypoint.event,
        context: this.context.analytics.context,
        props: child.props,
        extra
      });
    }

    shouldComponentUpdate() : boolean { //To avoid firing twice
      return false;
    }

    render() : ReactElement {
      const {
        children,
        ...rest
      } = this.props;
      return (
        <span>
        { Children.map(children, (child) => [
          <Waypoint {...rest} onEnter={once(this._onEnter.bind(this, child))} />,
          child
        ])}
        </span>
      );
    }
}

WaypointCollector.propTypes = {
  /**
  * The kids
  */
  children: PropTypes.object.isRequired,

  /**
  * Additional callback to call after analytics event
  */
  onEnter: PropTypes.func,

  /**
  * Method for throttling the scroll event handling
  */
  throttleHandler: PropTypes.func,

  /**
  * Type of the event to send to the processor
  */
  eventType: PropTypes.string
};

WaypointCollector.contextTypes = {
  analytics: PropTypes.object
};

WaypointCollector.defaultProps = {
  onEnter: () => {},
  eventType: "waypoint",
  throttleHandler: (cb) => throttle(cb, 100)
};

WaypointCollector.displayName = "WaypointCollector";
