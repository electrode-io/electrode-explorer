import React from "react";

const hideable = function () {
  return {
    propTypes: {
      hidden: React.PropTypes.bool
    },

    //
    // Conditionally returns "hide-content" class if this.props.hidden is truthy.
    // Intended to be used with classNames to conditionally hide a component.
    // For example:
    //   <div className={classNames(this._hideableClasses(), "fooClass barClass")}>
    // Yields this if hidden is true:
    //   <div className="hide-content fooClass barClass">
    // Or this otherwise
    //   <div className="fooClass barClass">
    //
    // @return {string}
    //
    _hideableClasses() {
      return this.props.hidden ? "hide-content" : "";
    }
  };
};

export default hideable;
