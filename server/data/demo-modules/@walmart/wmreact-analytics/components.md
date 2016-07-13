#  (@walmart/wmreact-analytics)




## AnalyticsProvider

Wraps an app to provide analytics services throughout.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *onEvent* | func |  | 
| *context* | object |  | 

### import

```jsx
import {AnalyticsProvider} from "@walmart/wmreact-analytics";
```

<hr/>

## CollectorContext

Provides a mechanism to percolate more context information down
into the subtree.


### import

```jsx
import {CollectorContext} from "@walmart/wmreact-analytics";
```

<hr/>

## EventCollector

Wraps an app to provide analytics services throughout.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *maxDepth* | number |  | `null`

### import

```jsx
import {EventCollector} from "@walmart/wmreact-analytics";
```

<hr/>

## ExceptionCollector

Catches any exceptions.


### import

```jsx
import {ExceptionCollector} from "@walmart/wmreact-analytics";
```

<hr/>

## RawEventCollector

Listens for web events in the children and posts them to the analytics event stream.


### import

```jsx
import {RawEventCollector} from "@walmart/wmreact-analytics";
```

<hr/>

## WaypointCollector

Posts events to the analytics stream when a component is scrolled into view.

Will forward all props to `react-waypoint`. See the documentation for supported
props - https://github.com/brigade/react-waypoint/blob/master/README.md#prop-types

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *onEnter* | func | Additional callback to call after analytics event | `() => {}`
| *throttleHandler* | func | Method for throttling the scroll event handling | `(cb) => throttle(cb, 100)`
| *eventType* | string | Type of the event to send to the processor | `"waypoint"`

### import

```jsx
import {WaypointCollector} from "@walmart/wmreact-analytics";
```

<hr/>
