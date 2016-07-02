/* eslint valid-jsdoc:0 */
/* global document */

import React, { Component, PropTypes } from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import ExecutionEnvironment from "exenv";
import Backdrop from "../utils/backdrop";

/**
Tray dialog.
@component Modal.Tray
@import {Modal}
*/
class ModalTray extends Component {
  constructor(props) {
    super(props);
    this.backdropHost = null;
    this.backdrop = null;
    this.state = {
      active: false
    };
    this._onBackdropClick = this._onBackdropClick.bind(this);
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  componentDidMount(): void {
    if (ExecutionEnvironment.canUseDOM) {
      this.backdropHost = document.createElement("div");
      document.body.insertBefore(this.backdropHost, document.body.firstChild);
      this.backdrop = ReactDOM.render(<Backdrop/>, this.backdropHost);
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
  Shows the tray
  */
  show(): void {
    this.setState({active: true});
  }

  /**
  Hides the tray
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
        className={classNames("tray-modal", extras, this.props.className)}
        tabIndex="-1"
        ref="modal">
        <div className="tray-modal-dialog">
          <div className="tray-modal-content">
              {this.props.children}
            <button className="tray-modal-close" type="button" onClick={this.hide}>
              <Icon.Remove />
              <span className="visuallyhidden">Close</span>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

ModalTray.displayName = "Modal.Tray";

ModalTray.propTypes = {
  /**
    True if the tray is open
  */
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

ModalTray.defaultProps = {
  active: false,
  children: "",
  className: ""
};

export default ModalTray;
