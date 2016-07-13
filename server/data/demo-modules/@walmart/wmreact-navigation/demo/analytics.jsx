import React from "react";
import {AnalyticsProvider, CollectorContext} from "@walmart/wmreact-analytics";
import {Subnav, Tabs} from "../src/index";
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
            <Subnav automationId="demo-subnav">
              <Subnav.Item href="#foo" current={true} childCount={3} automationId="subnav-0">
                Item 1
              </Subnav.Item>

              <Subnav.Item href="#bar" current={false} childCount={3} automationId="subnav-1">
                Item 2
              </Subnav.Item>

              <Subnav.Item href="#baz" current={false} childCount={3} automationId="subnav-2">
                Item 3
              </Subnav.Item>
            </Subnav>

            <Tabs style={{minWidth: "100%"}} automationId="demo-tabs">
              <Tabs.Item title="First">
                <p>First Tab!</p>
              </Tabs.Item>
              <Tabs.Item title="Second">
                <p>Second Tab!</p>
              </Tabs.Item>
            </Tabs>

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
