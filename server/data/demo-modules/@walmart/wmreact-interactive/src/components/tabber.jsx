/* @flow */
import React from "react";

import ReactDOM from "react-dom";

import Control from "./tabber-control";
import Controls from "./tabber-controls";
import Content from "./tabber-content";
import Section from "./tabber-section";
import fireUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-ui-event";

/**
Tabber component
@examples
```jsx
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
```
@component Tabber
@import {Tabber}
@references Tabber
@playground
Tabber
```
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
```
*/
export default class Tabber extends React.Component {
  constructor(props: Object): void {
    super(props);
    this.state = {
      activeTab: this.props.initiallyClosed ? null : this.props.initialActiveTab
    };

    this._handleDocClick = this._handleDocClick.bind(this);
    this.setActiveTab = this.setActiveTab.bind(this);
    this._addActiveTab = this._addActiveTab.bind(this);
    this._addDocClickListener = this._addDocClickListener.bind(this);
    this._removeDocClickListener = this._removeDocClickListener.bind(this);
    this._closeTabs = this._closeTabs.bind(this);
  }

  componentWillUnmount(): void {
    this._removeDocClickListener();
  }

  _addDocClickListener(): void {
    document.addEventListener("click", this._handleDocClick); // eslint-disable-line no-undef
  }

  _removeDocClickListener(): void {
    document.removeEventListener("click", this._handleDocClick); // eslint-disable-line no-undef
  }

  _handleDocClick(ev: Object): void {
    const tabberEl = ReactDOM.findDOMNode(this);

    fireUIEvent(this, ev, {eventType: "closeAll"});

    if (!tabberEl.contains(ev.target)) {
      this._closeTabs();
    }
  }

  _closeTabs(): void {
    this.setState({
      activeTab: null
    });

    this._removeDocClickListener();
  }

  setActiveTab(tabRef: number, event: Object): void {
    fireUIEvent(this, event, {eventType: "closeAll", state: this.state});

    if (this.state.activeTab !== tabRef) {
      this.setState({
        activeTab: tabRef
      });

      if (this.props.closeOnDocClick) {
        this._removeDocClickListener();
        this._addDocClickListener();
      }

    } else if (this.props.closeable) {
      this._closeTabs();
    }
  }

  _addActiveTab(component: ReactElement): ReactElement {
    const tabberProps = {
      activeTab: this.state.activeTab,
      setActiveTab: this.setActiveTab,
      activeTabClass: this.props.activeTabClass
    };
    return React.cloneElement(component, tabberProps);
  }

  render(): ReactElement {
    return (
      <div className={this.props.className}>
        {React.Children.map(this.props.children, this._addActiveTab)}
      </div>
    );
  }
}

Tabber.propTypes = {
  /**
  The intially active tab
  */
  initialActiveTab: React.PropTypes.number.isRequired,
  /**
  The class to apply to the active tab
  */
  activeTabClass: React.PropTypes.string.isRequired,
  /**
  True if tabber starts out initially closed
  */
  initiallyClosed: React.PropTypes.bool.isRequired,
  /**
  True if the Tabber is closeable
  */
  closeable: React.PropTypes.bool.isRequired,
  /**
  True if we should close on a document click outside the tabber
  */
  closeOnDocClick: React.PropTypes.func,
  className: React.PropTypes.string,
  children: React.PropTypes.node
};

Tabber.contextTypes = {
  analytics: React.PropTypes.object
};

Tabber.defaultProps = {
  initialActiveTab: 0,
  activeTabClass: "is-active",
  initiallyClosed: false,
  closeable: false
};

Tabber.Control = Control;
Tabber.Controls = Controls;
Tabber.Content = Content;
Tabber.Section = Section;
