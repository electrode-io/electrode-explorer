/* @flow */
import React from "react";
import classNames from "classnames";

/**
The control for a Tabber
@component Tabber.Control
@import {Tabber}
@references Tabber
*/
export default class Control extends React.Component {
  render(): ReactElement {
    const child = this.props.children;

    const activeClassNames = {};

    activeClassNames[this.props.activeTabClass] = this.props.isActive;

    return React.cloneElement(child, {
      onClick: this.props.handleControlClick,
      className: classNames(
        child.props.className,
        activeClassNames
      )
    });
  }
}

Control.propTypes = {
  children: React.PropTypes.node,
  activeTabClass: React.PropTypes.string,
  isActive: React.PropTypes.bool,
  handleControlClick: React.PropTypes.func
};
