import React from "react";
import {AnalyticsProvider, CollectorContext} from "@walmart/wmreact-analytics";
import Carousel from "../src/index";
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
            <Carousel style={{marginBottom: 40}}
              framePadding="40"
              cellSpacing={20}
              responsive={[
                {
                  selectors: ["x-small", "small"],
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  selectors: ["medium", "large"],
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                  }
                },
                {
                  selectors: ["x-large", "xx-large"],
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                  }
                }
              ]}>
              <div style={{
                background: "#ccc",
                padding: "4rem",
                textAlign: "center"
              }}>A</div>
              <div style={{
                background: "#aaa",
                padding: "4rem",
                textAlign: "center"
              }}>B</div>
              <div style={{
                background: "#ccc",
                padding: "4rem",
                textAlign: "center"
              }}>C</div>
              <div style={{
                background: "#aaa",
                padding: "4rem",
                textAlign: "center"
              }}>D</div>
              <div style={{
                background: "#ccc",
                padding: "4rem",
                textAlign: "center"
              }}>E</div>
              <div style={{
                background: "#aaa",
                padding: "4rem",
                textAlign: "center"
              }}>F</div>
            </Carousel>

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
