import React from "react";

import TableRow from "./table-row";
import TableCell from "./table-cell";
import TableBody from "./table-body";
import TableHead from "./table-head";
import TableHeader from "./table-header";

const BaseClass = React.createClass({
  propTypes: {
    light: React.PropTypes.bool,
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    colGroupClasses: React.PropTypes.array,
    striped: React.PropTypes.oneOf(["odd", "even"])
  },

  getDefaultProps() {
    return {
      light: false,
      colGroupClasses: []
    };
  },

  renderColumnGroupClass(columnClass, index) {
    return <col className={columnClass} key={index} />;
  },

  renderColumnGroup() {
    return (
      <colGroup>
        { this.props.colGroupClasses.map(this.renderColumnGroupClass) }
      </colGroup>
    );
  },

  render() {
    const stripeClass = this.props.striped ?
      `table-striped-${this.props.light ? "light-" : ""}${this.props.striped}` : "";

    const tableClasses = [
      "table",
      stripeClass,
      this.props.className
    ];

    return (
      <table className={tableClasses.join(" ")}>
        { this.props.colGroupClasses.length > 0 ? this.renderColumnGroup() : null }
        { this.props.children }
      </table>
    );
  }
});

BaseClass.Row = TableRow;
BaseClass.Cell = TableCell;
BaseClass.Body = TableBody;
BaseClass.Head = TableHead;
BaseClass.Header = TableHeader;

export default BaseClass;
