/* @flow */
/* eslint global-strict:0, react/no-multi-comp:0 */
import React from "react";
import Button from "./button";

import Control from "./tabber-control";
import Controls from "./tabber-controls";
import Content from "./tabber-content";
import Section from "./tabber-section";
import Tabber from "./tabber";

/**
A simple Tabber wrapper
@examples
```jsx
<Tabber.Simple>
  <div title="Foo">
    Foo!
  </div>
  <div title="Bar">
    Bar!
  </div>
</Tabber.Simple>
```
@component Tabber.Simple
@import {Tabber}
@references Tabber
@playground
Tabber.Simple
```
<Tabber.Simple>
  <div title="Foo">
    Foo!
  </div>
  <div title="Bar">
    Bar!
  </div>
</Tabber.Simple>
```
*/
export default class Simple extends React.Component {
  render(): ReactElement {
    return (
      <Tabber activeTabClass="active" initialActiveTab={this.props.initialActiveTab || 0}>
        <Controls>
          {React.Children.map(this.props.children, (child, index) => {
            return (
              <Control key={`control${index}`}>
                <Button badge={true} badgeAlt={true} className={index > 0 ? "m-margin-left" : ""}>
                  {child.props.title}
                </Button>
              </Control>
            );
          })}
        </Controls>

        <Content className="m-margin-top" autoHeight>
          {React.Children.map(this.props.children, (child, index) => {
            return (
              <Section key={index}>
                {child}
              </Section>
            );
          })}
        </Content>
      </Tabber>
    );
  }
}

Simple.propTypes = {
  /**
  The number of the initially active tab
  */
  initialActiveTab: React.PropTypes.number,
  children: React.PropTypes.node
};

Tabber.Simple = Simple;
