/* @flow */
import React from "react";
import classNames from "classnames";

/**
@private
*/
const Backdrop = React.createClass({
  propTypes: {
    active: React.PropTypes.bool,
    _onBodyClick: React.PropTypes.func,
    onClick: React.PropTypes.func
  },
  getInitialState(): Object {
    return {
      active: false
    };
  },
  getDefaultProps(): Object {
    return {
      active: false
    };
  },
  componentWillReceiveProps(nextProps: Object): void {
    if (nextProps.active) {
      this.setState({active: nextProps.active});
    }
  },
  _onBodyClick(event: Function): void {
    if (this.props.onClick) {
      this.props.onClick(event);
    }
  },
  render(): ReactElement {
    const extras = {
      "active": this.state.active
    };

    return (
      <div
        onClick={this.props._onBodyClick}
        className={classNames("modal-backdrop", extras)}
        ref="backdrop"
        {... this.props}>
      </div>
    );
  }
});

export default Backdrop;
