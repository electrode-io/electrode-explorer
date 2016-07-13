import React from "react";

const BaseClass = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    rowSpan: React.PropTypes.number,
    colSpan: React.PropTypes.number
  },
  getDefaultProps() {
    return {
      rowSpan: 1,
      colSpan: 1
    };
  },
  render() {
    return (
      <th
        className={this.props.className}
        colSpan={this.props.colSpan}
        rowSpan={this.props.rowSpan}>
        {this.props.children}
      </th>
    );
  }
});

export default BaseClass;
