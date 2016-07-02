/* @flow */
/* eslint valid-jsdoc:0 */
/* global document */

import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import ExecutionEnvironment from "exenv";

import Backdrop from "../utils/backdrop";

/**
Alert dialog.
@component Modal.Alert
@import {Modal}
*/
class Alert extends React.Component {
  constructor(props: Object) {
    super(props);
    this.backdrop = null;
    this.backdropHost = null;
    this._onBackdropClick = this._onBackdropClick.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.state = {active: false};
  }

  componentDidMount(): void {
    if (ExecutionEnvironment.canUseDOM) {
      if (document.createElement && document.body) {
        this.backdropHost = document.createElement("div");
        document.body.insertBefore(this.backdropHost, document.body.firstChild);
        this.backdrop = ReactDOM.render(<Backdrop/>, this.backdropHost);
      }
    }
  }

  componentWillUnmount(): void {
    ReactDOM.unmountComponentAtNode(this.backdropHost);
  }

  componentWillReceiveProps(nextProps: Object): void {
    if (nextProps.active) {
      this.setState({active: nextProps.active});
    }
  }

  componentDidUpdate(): void {
    this.backdrop.setState({active: this.state.active});
    this.backdrop = ReactDOM.render(
      <Backdrop onClick={this.state.active ? this._onBackdropClick : null}/>, this.backdropHost
    );
  }

  /**
  Shows the alert
  */
  show(): void {
    this.setState({active: true});
  }

  /**
  Hides the alert
  */
  hide(): void {
    this.setState({active: false});
  }

  _onBackdropClick(): void {
    this.hide();
  }

  render(): ReactElement {
    const extras = {
      "active": this.state.active
    };

    return (
      <div
        aria-hidden="false"
        aria-labelledby="modal-title"
        role="dialog" className={classNames("modal modal-alert", extras, this.props.className)}
        ref="modal">
        <div className="modal-content" role="document">
          <h1 className="modal-message" id="modal-title">{this.props.children}</h1>
          <div className="modal-alert-actions clearfix">
            {this.props.buttons}
          </div>
        </div>
      </div>
    );
  }
}

Alert.propTypes = {
  /**
  True if the alert is active
  */
  active: React.PropTypes.bool,
  /**
  The buttons to show at the base of the alert
  */
  buttons: React.PropTypes.node,
  children: React.PropTypes.node,
  className: React.PropTypes.string
};

Alert.initialState = {
  active: false,
  buttons: null
};

Alert.defaultProps = {
  active: false
};

export default Alert;
