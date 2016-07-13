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
      const { analytics } = this.context;
      if (analytics && analytics.callback) {
        analytics.callback({
          _type: eventType,
          _reactChild: child,
          event: waypoint.event,
          context: analytics.context,
          props: child.props,
          extra
        });
      }
    }

    _renderChild(child, fireAtBottom, rest) {
      const waypointComponent =
        <Waypoint {...rest} onEnter={once(this._onEnter.bind(this, child))} />;
      if (fireAtBottom) {
        return [child, waypointComponent];
      }
      return [waypointComponent, child];
    }

    render() : ReactElement {
      const {
        children,
        fireAtBottom,
        ...rest
      } = this.props;
      return (
        <span>
        {Children.map(children, (child) => this._renderChild(child, fireAtBottom, rest))}
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
  eventType: PropTypes.string,

  /**
  * Fires event when bottom of children are in view rather than the top
  */
  fireAtBottom: PropTypes.bool
};

WaypointCollector.contextTypes = {
  analytics: PropTypes.object
};

WaypointCollector.defaultProps = {
  onEnter: () => {},
  eventType: "waypoint",
  throttleHandler: (cb) => throttle(cb, 100),
  fireAtBottom: false
};

WaypointCollector.displayName = "WaypointCollector";
