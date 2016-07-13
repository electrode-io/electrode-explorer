import React from "react";

/**
The controls section of Tabber
@component Tabber.Controls
@import {Tabber}
@references Tabber
*/
export default class Controls extends React.Component {
  _addChildRefs(control: ReactElement, i: number): ReactElement {
    if (!control) {
      return null;
    }

    const self = this;
    return React.cloneElement(control, {
      ref: i,
      handleControlClick: (event) => { self.props.setActiveTab(i, event); },
      isActive: i === this.props.activeTab,
      activeTabClass: this.props.activeTabClass
    });
  }

  render(): ReactElement {
    return (
      <div className={this.props.className} style={this.props.style}>
        {React.Children.map(this.props.children, this._addChildRefs, this)}
      </div>
    );
  }
}

Controls.propTypes = {
  /**
  Event handler for setting the active tab
  */
  setActiveTab: React.PropTypes.func,
  /**
  The active tab number
  */
  activeTab: React.PropTypes.number,
  /**
  The CSS class to apply to the active tab
  */
  activeTabClass: React.PropTypes.string,
  children: React.PropTypes.node,
  style: React.PropTypes.string,
  className: React.PropTypes.string
};
