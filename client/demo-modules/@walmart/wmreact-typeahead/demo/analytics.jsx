import React from "react";
import {AnalyticsProvider, CollectorContext} from "@walmart/wmreact-analytics";
import Typeahead from "../src/index";
import _ from "lodash";

export default class Analytics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
    this.processEvent = this.processEvent.bind(this);
  }

  processEvent(evt) {
    const _formatKeys = (obj, depth = 0) => (
      _.isPlainObject(obj) && depth < 2 ? `{${_.chain(obj).keys(obj).sort()
        .map((k) => `${k}=${_formatKeys(obj[k], depth + 1)}`)
        .value().join(", ")}}` : obj
    );

    this.state.events.push(_formatKeys(evt));
    this.setState({
      events: this.state.events
    });
  }

  render() {
    return (
      <AnalyticsProvider onEvent={this.processEvent}>
        <CollectorContext productId={2020}>
          <div className="component-documentation">
            <Typeahead list={["bmw", "lexus", "mercedez"]}/>

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
        </CollectorContext>
      </AnalyticsProvider>
    );
  }
}
