/* @flow */
/* global document Event */

import ReactDOM from "react-dom";
import React from "react";

class OutsideClick extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  componentWillUnmount() : void {
    document.removeEventListener("click", this.onClick);
    document.removeEventListener("touchstart", this.onClick);
    this.element = null;
  }

  componentDidMount() : void {
    document.addEventListener("click", this.onClick);
    document.addEventListener("touchstart", this.onClick);
    this.element = ReactDOM.findDOMNode(this);
  }

  onClick(ev: Event) : void {
    // For whatever reason `componentWillUnmount` appears (at least in some
    // cases) to be called before this handler actually fires on IE10/IE9.
    // Ergo we need this hacky guard.
    // See: https://jira.walmart.com/browse/GPCC-7351
    if (this.element && !this.element.contains(ev.target)) {
      this.props.onClick(ev);
    }
  }

  render() {
    return React.Children.only(this.props.children);
  }
}

OutsideClick.propTypes = {
  onClick: React.PropTypes.func,
  children: React.PropTypes.node
};

export default OutsideClick;
