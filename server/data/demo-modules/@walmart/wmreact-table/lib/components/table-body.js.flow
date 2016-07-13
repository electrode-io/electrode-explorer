import React from "react";

const BaseClass = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    rowSpan: React.PropTypes.number,
    colSpan: React.PropTypes.number
  },
  render() {
    return (
      <tbody className={this.props.className}>
        {this.props.children}
      </tbody>
    );
  }
});

export default BaseClass;
