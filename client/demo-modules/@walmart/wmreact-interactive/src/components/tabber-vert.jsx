/* @flow */
/* eslint global-strict:0, react/no-multi-comp:0 */
import React from "react";
import Control from "./tabber-control";
import Controls from "./tabber-controls";
import Content from "./tabber-content";
import Section from "./tabber-section";
import Tabber from "./tabber";


const _renderControls = (children) => {
  if (children) {
    return (
       <Controls className="vertical-tabber-controls display-inline-block valign-top u-size-3-12">
        {React.Children.map(children, (child, index) => {
          if (child) {
            return (
              <Control key={`control${index}`}>
                <div className="vertical-tabber-control" badge={true} badgeAlt={true}>
                  {child.props.title}
                </div>
              </Control>
            );
          }
        })}
       </Controls>
    );
  }
};

const _renderContent = (children) => {
  if (children) {
    return (
      <Content className="display-inline-block valign-top u-size-9-12">
        {React.Children.map(children, (child, index) => {
          if (child) {
            return (
              <Section key={index}>
                <div className="vertical-tabber-contents">
                  {child}
                </div>
              </Section>
            );
          }
        })}
      </Content>
    );
  }
};

const VerticalTabs = (props): ReactElement => {
  const {
    initialActiveTab,
    children
  } = props;
  return (
    <div className="vertical-tabber">
      <Tabber activeTabClass="active" initialActiveTab={initialActiveTab || 0}>
        {_renderControls(children)}
        {_renderContent(children)}
      </Tabber>
    </div>
  );
};


VerticalTabs.propTypes = {
  /**
  The number of the initially active tab
  */
  initialActiveTab: React.PropTypes.number,
  children: React.PropTypes.node.isRequired
};

VerticalTabs.defaultProps = {
  initialActiveTab: 1
};

Tabber.VerticalTabs = VerticalTabs;
