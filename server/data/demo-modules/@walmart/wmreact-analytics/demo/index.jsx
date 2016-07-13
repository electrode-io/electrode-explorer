/* eslint no-console: 0, no-undef: 0 */
import React from "react";

import {AnalyticsProvider, EventCollector,
  CollectorContext, collectorWrapper,
  RawEventCollector, ExceptionCollector,
  WaypointCollector, reduxCollector, fireUIEvent} from "../src/index";

import {createStore} from "redux";
import {Provider, connect} from "react-redux";

import ImageLoader from "react-imageloader";

import canary from "./canary";

import _ from "lodash";
import fp from "lodash/fp";

const counter = (state = {count: 0}, action) => {
  switch (action.type) {
  case "INCREMENT":
    return {count: state.count + 1};
  default:
    return state;
  }
};

class SimpleButton extends React.Component {
  render() {
    return (
      <button {... this.props} className="btn" style={{margin: 5}}>
        {this.props.children}
      </button>
    );
  }
}
SimpleButton.propTypes = {
  children: React.PropTypes.node
};

const SelfWrappingButton = collectorWrapper({onClick: {type: "Button"}})(SimpleButton);

class SelfInstrumentedButton extends React.Component {
  constructor(props) {
    super(props);
    this._onClick = this._onClick.bind(this);
  }
  _onClick(event) {
    fireUIEvent(this, event);
  }
  render() {
    return (
      <button onClick={this._onClick} className="btn" style={{margin: 5}}>
        {this.props.children}
      </button>
    );
  }
}
SelfInstrumentedButton.propTypes = {
  children: React.PropTypes.node
};
SelfInstrumentedButton.contextTypes = {
  analytics: React.PropTypes.object
};

const CounterDisplay = connect((state) => state)((props) => (
  <span>{props.count}</span>
));

class InstrumentedImageLoader extends React.Component {
  render() {
    const props = {};
    props.onError = (evt) => {
      if (this.props.onError) {
        this.props.onError(evt);
      }
      this.context.analytics.callback({
        _type: "image-loader-error",
        event: evt,
        props: this.props
      });
    };
    return (
      <ImageLoader {... this.props} {... props} />
    );
  }
}

InstrumentedImageLoader.propTypes = {
  onError: React.PropTypes.func
};

InstrumentedImageLoader.contextTypes = {
  analytics: React.PropTypes.object
};

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
        <span>
          <SimpleButton onClick={() => this.store.dispatch({type: "INCREMENT"})}>Increment</SimpleButton>
          <CounterDisplay />
        </span>
      </Provider>
    );
  }
}

ReduxSmartComponent.contextTypes = {
  analytics: React.PropTypes.object
};

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
    this.processEvent = this.processEvent.bind(this);
  }
  processEvent(evt) {
    canary(evt);

    const _formatKeys = (obj, depth = 0) => {
      return _.isPlainObject(obj) && depth < 2 ? fp.flow(
        fp.filter((k) => !_.isSymbol(obj[k])),
        fp.map((k) => `${k}=${_formatKeys(obj[k], depth + 1)}`),
        fp.join(", ")
      )(_.keys(obj)) : obj;
    };

    this.state.events.push(_formatKeys(evt));
    this.setState({
      events: this.state.events
    });
  }
  render() {
    return (
      <AnalyticsProvider onEvent={this.processEvent}>
        <ExceptionCollector>
          <RawEventCollector onClick={{foo: "bar"}}>
            <div className="component-documentation">
              <InstrumentedImageLoader src="/foobar.jpg" />

              <SimpleButton onClick={(evt) => console.log(evt)}>Standard button</SimpleButton>

              <EventCollector onClick>
                <span>
                  <span>
                    <span>
                      <SimpleButton alex={1} onClick={(evt) => {console.log(evt);}} page={1}>React event collection - 1</SimpleButton>
                      <SimpleButton alex={2} onClick={(evt) => {console.log(evt);}} page={1}>React event collection - 2</SimpleButton>
                    </span>
                  </span>
                </span>
              </EventCollector>

              <EventCollector onClick={{pid: 2}}>
                <SimpleButton onClick={(evt) => {console.log(evt);}} page={2}>Additional context with an object</SimpleButton>
              </EventCollector>

              <EventCollector onClick={(ctx) => ({
                ... ctx,
                coolStuff: 5
              })}>
                <SimpleButton onClick={(evt) => {console.log(evt);}} page={2}>Additional context with a function</SimpleButton>
              </EventCollector>

              <CollectorContext productTitle="Rabbit">
                <EventCollector onClick>
                  <SimpleButton onClick={(evt) => {console.log(evt);}} page={1}>Simple CollectorContext</SimpleButton>
                </EventCollector>
              </CollectorContext>

              <CollectorContext productTitle="Rabbit">
                <CollectorContext productDescription="Small fluffy woodland creature">
                  <EventCollector onClick>
                    <SimpleButton onClick={(evt) => {console.log(evt);}} page={1}>Nested CollectorContext</SimpleButton>
                  </EventCollector>
                </CollectorContext>
              </CollectorContext>

              <SelfWrappingButton onClick={(evt) => {console.log(evt);}} whatever={54}>
                Self wrapping button
              </SelfWrappingButton>

              <SimpleButton onClick={() => a / foobaz} page={1}>Error Handling</SimpleButton>

              <CollectorContext in-redux={true}>
                <ReduxSmartComponent />
              </CollectorContext>

              <SelfInstrumentedButton>
                Self instrumented
              </SelfInstrumentedButton>

              <CollectorContext randomAttribute="Hello">
                <div style={{overflow: "scroll", height: "200px", width: "50%", border: "2px solid red"}} >
                  <strong>Scroll down to fire a waypoint event</strong>
                  <div style={{height: "500px"}} />
                  <WaypointCollector>
                    <div>Waypoint event fired!</div>
                  </WaypointCollector>
                  <div style={{height: "200px"}} />
                  <WaypointCollector topOffset={100} bottomOffset={100}>
                    An event will fire in 100px
                  </WaypointCollector>
                  <div style={{height: "200px"}} />
                </div>
              </CollectorContext>

              <h4>Events</h4>
              {this.state.events.map((evt, index) => {
                return (
                  <pre key={index} style={{
                    paddingTop: 5,
                    margin: 0,
                    borderBottom: "1px solid #777"
                  }}>
                    {evt}
                  </pre>
                );
              })}
            </div>
          </RawEventCollector>
        </ExceptionCollector>
      </AnalyticsProvider>
    );
  }
}
