/* @flow */
import React from "react";

/**
A child section of a Tabber
@component Tabber.Controls
@import {Tabber}
@references Tabber
*/
export default class Section extends React.Component {
  render(): ReactElement {
    return (
      <div {... this.props}>
        {this.props.children}
      </div>
    );
  }
}

Section.propTypes = {
  children: React.PropTypes.node
};
