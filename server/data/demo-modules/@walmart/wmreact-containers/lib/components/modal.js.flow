/* @flow */
/* eslint valid-jsdoc:0 */
/* global document */

import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import ExecutionEnvironment from "exenv";

import Backdrop from "../utils/backdrop";

import ModalTray from "./modal-tray";
import ModalAlert from "./modal-alert";
import ModalConfirm from "./modal-confirm";

/**
Modal dialog component.
@examples
```jsx
var ModalExample = React.createClass({
  showModal() {
    this.refs.modal.show();
  },
  render() {
  return (
      <div>
        <Modal ref="modal" fixed={true}>
          <h1>Hi!</h1>
        </Modal>
        <a href="javascript:void(0)" onClick={this.showModal}>
          Show Modal
        </a>
      </div>
    )
  }
});

React.render(<ModalExample/>, mountNode);
```
@component Modal
@import {Modal}
@synonym dialog
@playground
Modal
!noRenderFalse!
```
var ModalExample = React.createClass({
  showModal() {
    this.refs.modal.show();
  },
  render() {
  return (
      <div>
        <Modal ref="modal" fixed={true} style={{width: "50%"}}>
          <h1>Hi!</h1>
        </Modal>
        <a href="javascript:void(0)" onClick={this.showModal}>
          Show Modal
        </a>
      </div>
    )
  }
});

React.render(<ModalExample/>, mountNode);
```
*/
class Modal extends React.Component {
  constructor(props: Object): void {
    super(props);
    this.backdropHost = null;
    this.backdrop = null;
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this._onBackdropClick = this._onBackdropClick.bind(this);
    this.state = {
      active: props.active
    };
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
    if (nextProps.active !== this.props.active) {
      this.setState({active: nextProps.active});
    }
  }

  componentDidUpdate(): void {
    this.backdrop.setState({active: this.state ? this.state.active : false});
    this.backdrop = ReactDOM.render(
      <Backdrop onClick={this.state.active ? this._onBackdropClick : null}/>, this.backdropHost
    );
  }

  /**
  Shows the dialog
  */
  show(): void {
    this.setState({active: true});
  }

  /**
  Hides the dialog
  */
  hide(): void {
    this.setState({active: false});
    this.props.onClose();
  }

  _onBackdropClick(): void {
    this.hide();
  }

  render(): ReactElement {
    const extras = {
      "active": this.state.active,
      "modal-padded": this.props.padded,
      "modal-fixed": this.props.fixed
    };

    return (
      <div className={classNames("modal", extras, this.props.className)} ref="modal">
        <button className="modal-close" type="button" onClick={this.hide}>
          <Icon.Remove />
          <span className="visuallyhidden">Close</span>
        </button>
        <div className="module">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Modal.displayName = "Modal";

Modal.propTypes = {
  /*
  True if the modal is open
  */
  active: React.PropTypes.bool,
  /**
  True if this should be padded
  */
  padded: React.PropTypes.bool,
  /**
  True if the dialog is fixed
  */
  fixed: React.PropTypes.bool,
  /**
  Children
  */
  children: React.PropTypes.node,
  /**
  Set class on Component
  */
  className: React.PropTypes.string,
  /**
  Set callback on Component
  */
  onClose: React.PropTypes.func
};

Modal.defaultProps = {
  active: false,
  padded: false,
  fixed: false,
  className: "",
  onClose: () => {}
};

Modal.Tray = ModalTray;
Modal.Alert = ModalAlert;
Modal.Confirm = ModalConfirm;

export default Modal;
