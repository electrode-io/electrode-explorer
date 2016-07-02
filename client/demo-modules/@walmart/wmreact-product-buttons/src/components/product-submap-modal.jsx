/* @flow */
/*eslint no-invalid-this:0*/
import React, { Component, PropTypes } from "react";
import { Button } from "@walmart/wmreact-interactive";
import { SlidePanel, Modal } from "@walmart/wmreact-containers";
import { Field } from "@walmart/wmreact-stateless-fields";
import {
  firstname as firstNameValidator,
  lastname as lastNameValidator,
  email as emailValidator
} from "@walmart/wmreact-validation/lib/validators";

class SubmapModal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstName: null,
      lastName: null,
      email: null
    };
  }

  _isEmailValid(email: string): boolean {
    return emailValidator.validate(email);
  }

  _isFirstNameValid(name: any): boolean {
    return firstNameValidator.validate(name || "");
  }

  _isLastNameValid(name: any): boolean {
    return lastNameValidator.validate(name || "");
  }

  _onBlur(type: string) {(e: Object): void => this.setState({ [`${type}`]: e.target.value })}

  _onContinue(): void {
    const { firstName, lastName, email } = this.state;
    if (
      this._isFirstNameValid(firstName) &&
      this._isLastNameValid(lastName) &&
      this._isEmailValid(email)
    ) {
      this.props.onContinue({ firstName, lastName, email });
    } else {
      // re-render UI to show error warning
      this.setState({
        firstName: firstName || "",
        lastName: lastName || "",
        email: email || ""
      });
    }
  }

  _renderResponsiveModalContent(isMobile: boolean, onClose): ReactElement {
    const { firstName, lastName, email } = this.state;
    return (
      <div>
        <h2 className="heading-b prod-submap-modal-title">
          Enter your name and email to reveal this low price
        </h2>
        <p>
          Because our price for this item is below the
          manufacturer’s minimum advertised price,
          they require us to collect your name and email address
          before we can show it to you—don’t worry,
          this will not opt you into Walmart emails.
          You can remove the item from your cart at any time.
        </p>
        <Field
          label="First name"
          onBlur={this._onBlur("firstName")}
          touched={firstName !== null && !this._isFirstNameValid(firstName)}
          error="This information is required" />
        <Field
          label="Last name"
          onBlur={this._onBlur("lastName")}
          touched={lastName !== null && !this._isLastNameValid(lastName)}
          error="This information is required" />
        <Field
          label="Email"
          onBlur={this._onBlur("email")}
          touched={email !== null && !this._isEmailValid(email)}
          error="Please enter a valid email address." />
        {
          isMobile ?
            null :
            <div className="prod-submap-modal-footer">
              <Button
                primary
                className="prod-submap-modal-btn"
                onClick={this._onContinue}>
                Continue
              </Button>
              <button
                className="btn-fake-link"
                onClick={onClose}
                >Cancel</button>
            </div>
        }
      </div>
    );
  }

  _renderMobileHeader(onClose): ReactElement {
    return (
      <div className="Grid Grid--gutters">
        <div className="Grid-col u-size-1-2">
          <Button
            className="btn-block btn-large"
            inverse
            onClick={onClose}>
            Cancel
          </Button>
        </div>
        <div className="Grid-col u-size-1-2">
          <Button
            primary
            className="prod-submap-modal-btn btn-block btn-large"
            onClick={this._onContinue}>
            Continue
          </Button>
        </div>
      </div>
    );
  }

  render(): ReactElement {
    const { active, onClose } = this.props;
    return (
      <div>
        <SlidePanel
          header={this._renderMobileHeader(onClose)}
          className="prod-submap-slide-panel hide-content-m"
          active={active}
          onClose={onClose}
          direction="bottom">
          {active && this._renderResponsiveModalContent(true)}
        </SlidePanel>
        <Modal
          className="Modal--small hide-content-max-m prod-submap-modal"
          active={active}
          padded={true}
          onClose={onClose}
          fixed={true}>
          {active && this._renderResponsiveModalContent(null, onClose)}
        </Modal>
      </div>
    );
  }
}

SubmapModal.defaultProps = {
  active: false,
  onContinue: () => {},
  onClose: () => {}
};

SubmapModal.propTypes = {
  /**
   Used to hide and show modal
   */
  active: PropTypes.bool,
  /**
   Used to submit the from
   */
  onContinue: PropTypes.func,
  /**
   Used to close modal
   */
  onClose: PropTypes.func
};

export default SubmapModal;
