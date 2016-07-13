import React from "react";
import {AnalyticsProvider, CollectorContext} from "@walmart/wmreact-analytics";
import {Button, Paginator, Revealer, Tabber, Zoom} from "../src/index";
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
            <div>
              <div>
                <Button>Base Button</Button>
              </div>
              <div>
                <Button mini>Mini Button</Button>
              </div>
            </div>

            <div>
              <Paginator.PaginatorList total={5} current={0}/>
            </div>

            <div>
              <Paginator.Carousel total={5} current={0}/>
            </div>

            <div>
              <Paginator total={5} current={0}/>
            </div>

            <Revealer baseHeight={100} defaultOpen={false} disableClose={true}>
              <ul>
                <li>Item one</li>
                <li>Item two</li>
                <li>Item three</li>
                <li>Item four</li>
                <li>Item five</li>
                <li>Item six</li>
                <li>Item seven</li>
                <li>Item eight</li>
                <li>Item nine</li>
                <li>Item ten</li>
              </ul>
            </Revealer>

            <Tabber activeTabClass="active" initialActiveTab={0}>
              <Tabber.Controls>
                <Tabber.Control>
                  <Button badge={true} badgeAlt={true}>
                    Tab 1
                  </Button>
                </Tabber.Control>

                <Tabber.Control>
                  <Button badge={true} badgeAlt={true} className="m-margin-left">
                    Tab 2
                  </Button>
                </Tabber.Control>
              </Tabber.Controls>

              <Tabber.Content className="m-margin-top" autoHeight>
                <Tabber.Section>
                  <p>Tab 1 content</p>
                </Tabber.Section>

                <Tabber.Section>
                  <p>Tab 2 other content</p>
                </Tabber.Section>
              </Tabber.Content>
            </Tabber>

            <div>
              <Zoom zoomIn={true}/>
              <Zoom zoomOut={true}/>
            </div>

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
