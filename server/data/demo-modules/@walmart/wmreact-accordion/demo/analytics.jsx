import React from "react";
import {AnalyticsProvider, CollectorContext} from "@walmart/wmreact-analytics";
import Accordion from "../src/index";

export default class Analytics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
    this.processEvent = this.processEvent.bind(this);
  }

  processEvent(evt) {
    const keysToString = (obj) => {
      const elements = [];
      for (const k in obj) {
        if (k !== "_reactObject" && typeof obj[k] !== "function") {
          elements.push(`${k}=${obj[k]}`);
        }
      }
      return `{${elements.join(", ")}}`;
    };

    let keys = [];
    for (const k in evt) {
      keys.push(k);
    }
    keys = keys.sort((a, b) => {
      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    const elements = [];
    for (const k of keys) {
      if (k !== "_reactObject" && typeof evt[k] !== "function") {
        if (typeof evt[k] === "object" && k !== "component" && k !== "event") {
          elements.push(`${k}=${keysToString(evt[k])}`);
        } else {
          elements.push(`${k}=${evt[k]}`);
        }
      }
    }
    this.state.events.push(elements.join(", "));
    this.setState({
      events: this.state.events
    });
  }

  render() {
    return (
      <AnalyticsProvider onEvent={this.processEvent}>
        <CollectorContext productId={2020}>
          <div className="component-documentation">
            <Accordion>
              <Accordion.Item title="Step 1">
                <h1>First Step Content</h1>
              </Accordion.Item>
              <Accordion.Item title="Step 2">
                <h1>Second Step Content</h1>
              </Accordion.Item>
              <Accordion.Item title="Step 3">
                <h1>Third Step Content</h1>
              </Accordion.Item>
            </Accordion>

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
