/* @flow */
/* eslint valid-jsdoc:0 */

import React, { Component, PropTypes } from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Collapsable from "@walmart/wmreact-layout/lib/components/collapsable";
import Layout from "@walmart/wmreact-layout/lib/components/layout";

/**
Tray container component.
@examples
```jsx
var TrayExample = React.createClass({
  showTray() {
    this.refs.tray.openTray();
  },
  render() {
  return (
      <div>
        <Tray ref="tray"
          isOpen={false}>
          <h1>Hi!</h1>
        </Tray>
        <a href="javascript:void(0)" onClick={this.showTray}>
          Show Tray
        </a>
      </div>
    )
  }
});

React.render(<TrayExample/>, mountNode);
```
@component Tray
@import {Tray}
@playground
Tray
!noRenderFalse!
```
var TrayExample = React.createClass({
  showTray() {
    this.refs.tray.openTray();
  },
  render() {
  return (
      <div>
        <Tray ref="tray"
          isOpen={false}>
          <h1>Hi!</h1>
        </Tray>
        <a href="javascript:void(0)" onClick={this.showTray}>
          Show Tray
        </a>
      </div>
    )
  }
});

React.render(<TrayExample/>, mountNode);
```
*/

class Tray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen
    };

    this.renderButtons = this.renderButtons.bind(this);
    this.openTray = this.openTray.bind(this);
    this.closeTray = this.closeTray.bind(this);
  }

  /**
  Opens the tray
  */
  openTray(): void {
    this.setState({
      isOpen: true
    });
  }

  /**
  Closes the tray
  */
  closeTray(): void {
    this.setState({
      isOpen: false
    });
  }

  componentWillReceiveProps(nextProps: Object): void {
    if (nextProps.isOpen && nextProps.isOpen !== this.props.isOpen) {
      this.setState({
        isOpen: nextProps.isOpen
      });
    }
  }

  renderButtons(): ?ReactElement {
    const onCancel = (this.props.onCancel) ? this.props.onCancel : this.closeTray;
    const onDone = (this.props.onDone) ? this.props.onDone : this.closeTray;

    const cancelButtonClasses = [
      "tray-button",
      "width-full",
      this.props.cancelButtonClass
    ];

    const doneButtonClasses = [
      "tray-button",
      "width-full",
      this.props.hideCancelButton ? "" : "x-small-margin-top",
      this.props.doneButtonClass
    ];

    const cancelButton = (
      <Button className={cancelButtonClasses.join(" ")} onClick={onCancel} inverse={true}>
      {this.props.cancelButtonText}
      </Button>
    );

    const doneButton = (
      <Button className={doneButtonClasses.join(" ")} onClick={onDone} primary={true}>
        {this.props.doneButtonText}
      </Button>
    );

    const buttonsHidden = this.props.hideDoneButton && this.props.hideCancelButton;

    const buttonColumns = this.props.hideDoneButton || this.props.hideCancelButton ? 1 : 2;

    return this.props.hideButtons || buttonsHidden ? null : (
      <Layout small={buttonColumns} padded={true}>
        {this.props.hideCancelButton ? null : cancelButton}
        {this.props.hideDoneButton ? null : doneButton}
      </Layout>
    );
  }

  render(): ReactElement {
    const style = (this.props.scrollable) ? {
      overflow: "scroll"
    } : null;

    const trayHeaderClasses = [
      "tray-header",
      this.props.trayHeaderClass
    ];

    const trayContentClasses = [
      "tray-content-wrapper",
      this.props.trayContentClass
    ];


    const header = (this.props.header) ? (
      <div className={trayHeaderClasses.join(" ")}>
        {this.props.header}
      </div>) : null;

    return (
      <Collapsable className="tray-wrapper" isOpen={this.state.isOpen} hidden={!!this.props.hidden}>
        <div className={trayContentClasses.join(" ")}>
          {this.renderButtons()}
          {header}
          <div style={style}>
            {
              this.props.children
            }
          </div>
        </div>
      </Collapsable>
    );
  }
}

Tray.displayName = "Tray";

Tray.propTypes = {
  /**
    This is required, and is what triggers the tray showing and hidding
  */
  isOpen: PropTypes.bool.isRequired,
  /**
    Optional text for "Cancel" button (or left button)
  */
  cancelButtonText: PropTypes.string,
  /**
    CSS class for the cancel button
  */
  cancelButtonClass: PropTypes.string,
  /**
    Optional text for "Done" button (or right button)
  */
  doneButtonText: PropTypes.string,
  /**
    CSS class for the done button
  */
  doneButtonClass: PropTypes.string,
  /**
    CSS class for the tray header
  */
  trayHeaderClass: PropTypes.string,
  /**
    CSS class for the tray content
  */
  trayContentClass: PropTypes.string,
  /**
    The header node
  */
  header: PropTypes.node,
  /**
    True if we should hide both buttons
  */
  hideButtons: PropTypes.bool,
  /**
    True if we should hide the done button
  */
  hideDoneButton: PropTypes.bool,
  /**
    True if we should hide the cancel button
  */
  hideCancelButton: PropTypes.bool,
  /**
    True if this is scrollable
  */
  scrollable: PropTypes.bool,
  /**
    Optional function that "Cancel" button will call
  */
  onCancel: PropTypes.func,
  /**
    Optional function that "Done" button will call
  */
  onDone: PropTypes.func,
  /**
    True if the tray is hidden
  */
  hidden: PropTypes.bool,
  children: PropTypes.node
};

Tray.defaultProps = {
  cancelButtonText: "Cancel",
  cancelButtonClass: "",
  doneButtonText: "Done",
  doneButtonClass: "",
  trayHeaderClass: "",
  trayContentClass: "",
  header: null,
  hideButtons: false,
  hideDoneButton: false,
  hideCancelButton: false,
  scrollable: false
};

export default Tray;
