/* eslint valid-jsdoc:0 */

import React, { Component, PropTypes } from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";

import ModalAlert from "./modal-alert";

/**
Confirm dialog.
@component Modal.Confirm
@import {Modal}
*/
class ModalConfirm extends Component {
  /**
  Shows the dialog
  */
  show(): void {
    this.refs.alert.show();
  }

  /**
  Hides the dialog
  */
  hide(): void {
    this.refs.alert.hide();
  }

  render(): ReactElement {
    const Alert = ModalAlert;
    return (
      <Alert ref="alert" buttons={<Button primary={true} onClick={this.props.onOK}>OK</Button>}>
        {this.props.children}
      </Alert>
    );
  }
}

ModalConfirm.displayName = "Modal.Confirm";

ModalConfirm.propTypes = {
  /**
    Event handler for the OK button
    */
  onOK: PropTypes.func,
  children: PropTypes.node.isRequired
};

ModalConfirm.defaultProps = {
  onOK: () => {/*no-op*/}
};

export default ModalConfirm;
