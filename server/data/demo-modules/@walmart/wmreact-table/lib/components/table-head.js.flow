import React from "react";

const BaseClass = React.createClass({
  propTypes: {
    children: React.PropTypes.node,
    className: React.PropTypes.string,
    alt: React.PropTypes.bool
  },
  getDefaultProps() {
    return {
      alt: false
    };
  },
  render() {
    const classes = [
      this.props.alt ? "table-header-alt" : "table-header",
      this.props.className
    ];

    return (
      <thead className={classes.join(" ")}>
        <tr>
          {this.props.children}
        </tr>
      </thead>
    );
  }
});

export default BaseClass;
