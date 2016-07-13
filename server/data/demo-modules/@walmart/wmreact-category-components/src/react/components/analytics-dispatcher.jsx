import { Component, PropTypes } from "react";
import isEmpty from "lodash/isEmpty";
import { beaconMessage } from "@walmart/wmreact-analytics/lib/helpers/event-types";


/**
A component for module instrument,
supported react component state is "componentDidMount".
@examples
```jsx
const data = {
  "getDidMountData": () => {},
  "dispatch": () => {}
};

React.render(<AnalyticsDispatcher {...data} />, mountNode);
```
@component AnalyticsDispatcher
@import {AnalyticsDispatcher}
@references AnalyticsDispatcher
@playground
```
const data = {
  "getDidMountData": () => {},
  "dispatch": () => {}
};

React.render(<AnalyticsDispatcher {...data} />, mountNode);
```
*/

export class AnalyticsDispatcher extends Component {
  constructor(props): void {
    super(props);

    const emptyFunc = () => {};
    const analyticsDataCallback = this.props.analyticsDataFunc;

    this.getDidMountData = (
        analyticsDataCallback.getDidMountData || emptyFunc
      ).bind(this);

    this.dispatch = (
        analyticsDataCallback.dispatch || emptyFunc
      ).bind(this);
  }

  _dispatchBeaconData(beaconDataArray): void {
    beaconDataArray.forEach((item) => {
      this.dispatch(beaconMessage(item));
    });
  }

  componentDidMount(): void {
    const analyticsData = this.getDidMountData(this.props);
    if (!isEmpty(analyticsData)) {
      this._dispatchBeaconData(analyticsData);
    }
  }

  render(): ReactElement {
    return this.props.children;
  }
}

AnalyticsDispatcher.displayName = "AnalyticsDispatcher";

AnalyticsDispatcher.propTypes = {
  /**
  this is children component array, do not need to be passing in as props epecifically
  */
  children: PropTypes.object,
  /**
  this is a function that will return a object
   which will contain all the module instrument callback functions
  */
  analyticsDataFunc: PropTypes.shape({
    getDidMountData: PropTypes.func,
    dispatch: PropTypes.func
  })
};

/* istanbul ignore next */
AnalyticsDispatcher.defaultProps = {
  analyticsDataFunc: {}
};


export default AnalyticsDispatcher;
