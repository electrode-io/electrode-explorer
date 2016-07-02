/* @flow */
import React from "react";
import RadonSelect from "radon-select";

/**
A chooser option
@import Chooser
@component Chooser.Option
@references Chooser
*/
export default React.createClass({
  displayName: "Chooser.Option",

  propTypes: {
    // TODO: Disabled
    /**
    The value of the option
    */
    value: React.PropTypes.string.isRequired,
    children: React.PropTypes.oneOfType([React.PropTypes.node, React.PropTypes.string]).isRequired
  },

  getInitialState(): Object {
    return {
      hovered: false
    };
  },

  setHover(isHover: boolean): void {
    this.setState({
      hovered: isHover
    });
  },

  render(): ReactElement {
    return (
      <RadonSelect.Option
        {...this.props}
        className="chooser-option"
        activeClassName="active"
        hoverClassName="active" />
    );
  }
});
