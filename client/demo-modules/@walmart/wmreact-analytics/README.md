# analytics

This is a set of analytics classes geared towards getting your application
analytics ready.

The intent is to have the UI export events saying that buttons have been clicked,
checkboxes checked, radios changed, and so on, without actually having any interruption
in the function of the system. So event handlers are wrapped so that events are still
fired, with all the arguments preserved, but analytics events are also fired
and percolated up to the top of the application so that they can be analyzed and
possibly batched up to be sent off to systems like beacon.

## Architecture

There are four important architectural elements inolved here that you should know about:

* **Collector** - A collector gathers event data. For example, a collector might
gather click data, or errors, or actions and store updates from a flux store.
* **Processor** - This is the system that processes the events and decides whether
or not to fire of an event to an event colletion system like Anivea or Beacon.
* **Backplane** - This is the communication mechanism by which events from collectors
make their way to the event processor(s).
* **Context** - Context models the ecosytem within which the event was fired. For
example, the page context of the item page would include the item ID, the item name,
and so on. And this context is added to all of the collected events that are
sent to the event processor(s). In this way implementers are freed from sending data
down to components that they only need to send to Beacon or Anivea.

Graphically this is how they relate to each other:

![Analytics Pipeline](./images/pipeline.png)

It also shows how data flows through the system. The collectors collector, the backplane
manages and moves the events and sends them to the processor(s).

The graphic also shows what is, and more importantly, what is **not** in this particular
library. So boxes that are *dashed* are **not** in this library.

This library only provides the backplane and the client agnostic collectors. That means
collectors that can work either in `react` or in `react-native`. Collectors for specific
technologies, for example `react-router` or the image loading error collector are in other
client specific libraries. In addition this library doesn't include any event processors
as that is specific to the client as well. Though the demo code does integrate with Canary
as a proof of concept.

## Canary

Canary is an important architectural piece and deserves some mention here. Canary is a rules
based event processing system. And it's important here because it provides the analytics team
with an opporunity to monitor the event stream coming out of the application and fire off events
when they match their rules.

The idea is that applications include an npm library of Canary rules. Those rules are maintained
by the analytics team. So the result is that analytics engineers can add new events without having
vertical engineers adding Beacon or Anivea events to the code.

It's important to note that Canary is **not** the only possible event processor. The processor
callback is wide open and we could have any number of processors that look at the events.

## What you need to know as an App developer

Your application needs to create an analytics callback, that looks like this:

```
export (event) => {
  ... do something
};
```

Most likely it will go to Canary, which is a flow documented in [canary.jsx](https://gecgithub01.walmart.com/react/analytics/blob/master/demo/canary.jsx)
which is used in [index.jsx](https://gecgithub01.walmart.com/react/analytics/blob/master/demo/index.jsx#L105)
in the demo project.

You then wrap your application in an `AnalyticsProvider` like so:

```
import {AnalyticsProvider} from "@walmart/wmreact-analytics";

<AnalyticsProvider onEvent={yourEventCallback}>
   <YourApp />
</AnalyticsProvider>
```

That will give you a stream of events from all the interactive components on the page.

Once that is done you will probably want to instrument your Redux store like so:

```
import {reduxCollector} from "@walmart/wmreact-analytics";

const reducerWithAnalytics = reduxCollector(myReducer, {
  callback: yourEventCallback,
  context: {}
});
```

The `context` object can have anything additional contextual information you want on top
of the redux actions and states that are sent to the analytics engine.

Finally, you will probably also want to wrap your application in an `ExceptionCollector` to
pick up any Javascript errors.

## What you need to know as a component developer

Analytics support is provided as a `context` object called `analytics` that is provided
from `AnalyticsProvider`. To fire an event all you need to do is call
`this.context.analytics.callback({yourEvent})`.

If you don't want to think about that you can just wrap your component in an `EventCollector`
and just tell it what events you want to instrument, for example; `onClick`.

## Custom Events outside the visual hierachy

Firing events is as simple as calling the `yourEventCallback` defined by your application.
So all you have to have is access to that function and you just call it with an object
that contains the data for the event.

## Migrating Beacon

We have a lot of Beacon code in the existing Atlas code base. And it's implemented directly in
click event handlers. Ideally this code would now sit in Canary rules. But honestly, that's
going to be a pain to implement. So our solution is to wrap the Beacon calls in the click
handlers of the react code in a wrapper that does the Beacon call but also pushes an event
into the analytics event stream for possible additional processing by Canary.

## API

The sections that follow detail the API.

### AnalyticsProvider

The `AnalyticsProvider` component provides the analytics pipeline through the React `context`
mechanism to the application.

```
import {AnalyticsProvider} from "@walmart/wmreact-analytics";

<AnalyticsProvider onEvent={(evt) => console.log(evt)}>
   <YourApp />
</AnalyticsProvider>
```

### EventCollector

You can wrap dumb components in triggers like so:

```
import {EventCollector} from "@walmart/wmreact-analytics";

<EventCollector onClick>
  <Button onClick={(evt) => {console.log(evt)}}>Basic triggering</Button>
</EventCollector>
```

This tells the system to add analytics tracking to the onClick of this dumb
component. The message will include all the props of the target component,
the name of the event and the react component that triggered the event.

If you want to add more you can do this like so:

```
<EventCollector onClick={{pageName: 'Item Page'}}>
  <Button onClick={(evt) => {console.log(evt)}}>Basic triggering</Button>
</EventCollector>
```

Or you can specify a function that will format the event message:

```
<EventCollector onClick={(context) => ({
  ... context,
  location: "Chicago"
})}>
  <Button onClick={(evt) => {console.log(evt)}}>Basic triggering</Button>
</EventCollector>
```

### collectorWrapper

You can add triggering to a component itself. Imagine you start with this component:

```
export default class Button extends React.Component {
  render() {
    return (
      <button
        onClick={this.props.onClick}
        className="btn">
        {this.props.children}
      </button>
    );
  }
}
```

You can make it self publish events like so:

```
import {collectorWrapper} from "@walmart/wmreact-analytics";

class Button extends React.Component {
  ... // Same as before
}

export default collectorWrapper({onClick: {extraStuffForAnalysts: "foo"}})(Button);
```

This wraps the `onClick` handler in analytics event emitter using the same
logic as applied with the `Trigger` mechanism described above. So in this case we are adding
the `extraStuffForAnalysts` key with the value `foo` to the event.

This is similar to the [connect](https://github.com/rackt/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options) function
within [react-redux](https://github.com/rackt/react-redux).

## RawEventCollector

In addition to getting high level React events with context you can also just get raw
web events into the analytics pipeline using the `RawEventCollector`, e.g.:

````
import {AnalyticsProvider, RawEventCollector} from "@walmart/wmreact-analytics";

<AnalyticsProvider onEvent={(evt) => console.log(evt)}>
  <RawEventCollector onClick>
    <YourApp />
  </RawEventCollector>
</AnalyticsProvider>
```

This picks up any onClick events as standard web events from any of the children.

### CollectorContext

Sometimes the atomic control doesn't know everything it needs to about the
context within which it sits. You can add context using the analytics `CollectorContext`
component, like so:

```
import {AnalyticsProvider, CollectorContext,
  EventCollector} from "@walmart/wmreact-analytics";

render() {
  <AnalyticsProvider onEvent={...}>
     ...
     <CollectorContext currentItemId={1500}>
       ...
       <EventCollector onClick>
         <Button onClick={...}>Foo</Button>
       </EventCollector>
       ...
     </CollectorContext>
     ...
  </AnalyticsProvider>
}
```

When `onClick` fires for the button the `currentItemId` key will be added to the
event because the `Button` resides within that context. You can add as many levels
of context as you like and they are all additive.

### ExceptionCollector

You can catch exceptions easily by just wrapping the app in an `ExceptionCollector`,
like so:

```
import {ExceptionCollector} from "@walmart/wmreact-analytics";

render() {
  <AnalyticsProvider onEvent={...}>
    <ExceptionCollector>
      ...
    </ExceptionCollector>
  </AnalyticsProvider>
}
```

### fireUIEvent

The `fireUIEvent` function, exported by `analytics` fires UI events from DOM callback functions
in our standard format. It's intended to be used by component authors that don't want to wrap
their components.

The function takes three parameters `fireEvent(component, event, options)`. The `component`
parameter is the component instance, `event` is the DOM event, and `options` is an optional
object with options for the callback.

Currently the only option supported is `eventType` which overrides the value of the `_type`
key sent to the analytics engine.

### reduxCollector

You can turn `redux` actions into instrumented events very easily using the `reduxCollector`.
Though, please note this library itself does not have a straight dependency on redux. `reduxCollector`
is a helper function that just wraps a reducer.

Shown below is the way to instrument the store outside of the context of React:

```
import {reduxCollector} from "@walmart/wmreact-analytics";

const reducerWithAnalytics = reduxCollector(myReducer, {
  callback: (evt) => console.log(evt),
  context: {}
});
```

Or you can hook it up to your store when you have the `context` passed in through
`AnalyticsProvider` like so:

```
import {reduxCollector} from "@walmart/wmreact-analytics";

class ReduxSmartComponent extends React.Component {
  constructor(props) {
    super(props);
    this.analyticsWrapper = reduxCollector(counter);
    this.store = createStore(this.analyticsWrapper);
  }
  componentDidMount() {
    this.analyticsWrapper.analytics = this.context.analytics;
  }
  render() {
    return (
      <Provider store={this.store}>
        ...
      </Provider>
    );
  }
}

ReduxSmartComponent.contextTypes = {
  analytics: React.PropTypes.object
};
```

The trick here is in simply wiring up the `analytics` context once the component mounts and we
have it.

## Demo

![Demo](./images/demo.gif)

## Installation

```
npm install @walmart/wmreact-analytics
```

## Scripts

If you want to use `builder` as a CLI tool (recommended), follow the instructions at [formidablelabs/builder to modify your `PATH`](https://github.com/formidablelabs/builder#local-install)

To run tests:

```
builder run test
```

To build /lib:

```
builder run build
```

## npm link

When using npm link, you must delete react from `zeus-components-layout/node_modules/`. This is because npm link is just a symlink, not a proper `npm install`.

You must also run `builder run build`

## Issues

Before submitting an issue, please see the [Issue Submission Guidelines](https://gecgithub01.walmart.com/react/react-dev-guide#submitting-issues)

## Contributing

If you're interested in contributing, see the [React Developer Guide's Contribution Guide](https://gecgithub01.walmart.com/react/react-dev-guide#contributing)
