import React from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Layout from "@walmart/wmreact-layout/lib/components/layout";
import classNames from "classnames";
import {i18n} from "../config";
import tokens from "./internals/form-tokens.json";
import CardInfoFields from "./internals/card-info-fields";
import AddressFields from "./internals/address-fields";
import AddressValidationMessage from "./address-validation-message";
import AlertErrors from "./alert-errors";
import Alert from "@walmart/wmreact-forms/lib/components/alert";
import Heading from "@walmart/wmreact-base/lib/components/heading";
import ReactDOM from "react-dom";
import trim from "lodash/fp/trim";
import isString from "lodash/isString";

const DefaultActions = ({primary, onSave, loading, isInitial, onCancel}) => (
  <div>
    <Button
      primary={primary}
      className="last btn-block-max-s save-btn pull-right-s"
      automationId="save-cc"
      onClick={onSave}
      spinner={loading}
      disabled={loading}
    >{i18n(tokens.save)}</Button>
    {
      !isInitial &&
      <Button
        automationId="cancel-save-cc"
        className="btn-block-max-s cancel-btn btn-link btn-fake-link-large"
        onClick={onCancel}
        disabled={loading}>
        {i18n(tokens.cancel)}
      </Button>
    }
  </div>
);


DefaultActions.propTypes = {
  onCancel: React.PropTypes.func,
  onSave: React.PropTypes.func,
  loading: React.PropTypes.bool,
  isInitial: React.PropTypes.bool,
  primary: React.PropTypes.bool
};

class CreditCardForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {localError: null};
  }

  componentDidUpdate() {
    const {inEditMode} = this.props;
    const {editCreditCard} = this.refs;
    const errors = this.state.localError
      ? [this.state.localError]
      : Object.keys(this.props.errors || {});
    //component is focused when there are no errors
    if (inEditMode && editCreditCard && errors.length === 0) {
      ReactDOM.findDOMNode(editCreditCard).scrollIntoView({behavior: "smooth"});
    }
  }

  componentWillReceiveProps({inEditMode, avsError, loading}) {
    if (!inEditMode) {
      this.setState({localError: null});
    }
    if ((!this.props.avsError || !this.props.avsError.corrected)
      && avsError && avsError.corrected) {
      this.refs.addressFields.updateWithCorrected(avsError.corrected);
    }
    if (!loading && this.props.loading && avsError && avsError.message) {
      this.refs.addressFields.updateWithAvs(avsError);
    }
  }
  _creditCardProps() {
    return this.refs.cardFields ? this.refs.cardFields.value() : {
      cardExpiryDate: this.props.cardExpiryDate,
      phone: this.props.phone,
      firstName: this.props.firstName,
      lastName: this.props.lastName
    };
  }

  _addressProps() {
    if (this.refs.addressFields) {
      return this.refs.addressFields.value();
    }
    return {
      postalCode: this.props.postalCode,
      addressLineOne: this.props.addressLineOne,
      addressLineTwo: this.props.addressLineTwo,
      state: this.props.state,
      city: this.props.city
    };
  }

  validate() {
    const creditCardValid = this.refs.cardFields.validate();
    const addressValid = this.refs.addressFields.validate();
    // Trigger all validations to set validation texts on all that is invalid
    return creditCardValid && addressValid;
  }

  _save(bypassValidation = false, overrides = {}, skipAvs = false) {
    if (!bypassValidation && !this.validate()) {
      this.setState({localError: "client_validation_failed"});
      return false;
    }else {
      this.setState({localError: null});
    }
    const serialized = {
      ...this._addressProps(),
      ...this.refs.cardFields.value(),
      bypassValidation: bypassValidation || skipAvs
    };

    // If the card is not new and the `creditCard` field is populated, the card
    // number had been modified. In this case we are about to delete and
    // re-create the card so the `cardType` field is required.
    if (this.props.isNew || serialized.creditCard) {
      serialized.cardType = this.refs.cardFields.state.cardType;
    }

    // Strip leading/trailing whitespace from all fields.
    // See: https://jira.walmart.com/browse/GPCC-7435
    Object.keys(serialized).forEach((key) => {
      serialized[key] = isString(serialized[key])
        ? trim(serialized[key])
        : serialized[key];
    });

    return this.props.onSave(Object.assign(serialized, overrides));
  }

  _renderErrors() {
    const keys = this.state.localError
      ? [this.state.localError]
      : Object.keys(this.props.errors || {});

    if (keys.length > 0) {

      const alertComponent = this.props.alertComponent;
      if (alertComponent) {
        return <AlertErrors errorCodes={keys} alertComponent={alertComponent}/>;
      } else {
        return <AlertErrors errorCodes={keys} />;
      }

    }
    return null;
  }

  _renderEditForm() {
    const {tealeafIds, index, avsError, loading} = this.props;
    const AddressForm = this.props.addressForm || AddressFields;
    const Actions = this.props.actions || DefaultActions;
    const onSave = () => !loading && this._save(false, {}, this.props.bypassValidation);
    const showForm = !avsError || avsError.message;
    const AlertComponent = this.props.alertComponent || Alert;
    return (
      <div
        ref="editCreditCard"
        className={classNames("edit-form-wrapper", {visuallyhidden: !showForm})}>
        <form
          className={classNames("edit-form")}>
          {avsError && avsError.message && <AlertComponent {...avsError} isBlock/>}
          {this._renderErrors()}

          <Layout small={2} className="edit-form-part">
            <CardInfoFields {...this._creditCardProps()}
              cardNumberEditable={this.props.cardNumberEditable}
              floatingLabels={this.props.floatingLabels}
              cardType={this.props.cardType}
              isTemp={this.props.isTemp}
              lastFour={this.props.lastFour}
              validationDate={this.props.validationDate}
              ref="cardFields"
              tealeafIndex={index}
              tealeafIds={tealeafIds.infoForm}/>
            <div>
              <Heading.H3>{i18n(tokens.billingAddress)}</Heading.H3>

              <AddressForm
                {...this._addressProps()}
                ref="addressFields"
                isNew={this.props.isNew}
                tealeafIndex={index}
                floatingLabels={this.props.floatingLabels}
                tealeafIds={tealeafIds.addressForm}/>
            </div>
          </Layout>

          <div className="edit-form-actions margin-top">
            <Actions
              {...this.props}
              onSave={onSave}
            />
          </div>
        </form>
      </div>
    );
  }

  _updateValidationChange(newAddress) {
    this.props.onValidationChange({
      id: this.props.id,
      error: {
        message: "We've updated your address. Please confirm below.",
        alertType: "warning",
        corrected: newAddress
      }
    });
  }

  _renderAvsInvalid() {
    const {firstName, lastName} = this._creditCardProps();
    const {primary} = this.props;

    return (
      <div className="edit-form-wrapper">
        <div className="edit-form">
          <AddressValidationMessage
            loading={this.props.loading}
            primary={primary}
            onContinue={() => this._save(true)}
            address={Object.assign({firstName, lastName}, this._addressProps())}
            invalidAddressError={this.props.avsError}
            actions={{
              submitEdit: (newAddress) => this._updateValidationChange(newAddress),
              clearErrors: () => this.props.onRequestClearErrors()
            }}
          />
        </div>
      </div>
    );
  }

  render() {
    const {avsError, floatingLabels} = this.props;
    return (
      <div className={classNames("edit-credit-card-wrapper", {"floating-labels": floatingLabels})}>
        {this.props.children && (
          <div className={classNames("padded-card", {"edit-mode": this.props.inEditMode})}>
            {this.props.children}
          </div>
        )}
        {this.props.inEditMode && this._renderEditForm()}
        {this.props.inEditMode && avsError && !avsError.message && this._renderAvsInvalid()}
      </div>
    );
  }
}

CreditCardForm.propTypes = {
  cardNumberEditable: React.PropTypes.bool,
  index: React.PropTypes.number,
  isNew: React.PropTypes.bool,
  isInitial: React.PropTypes.bool,
  isEditorActive: React.PropTypes.bool,
  inEditMode: React.PropTypes.bool.isRequired,
  avsError: React.PropTypes.object,
  onRequestClearErrors: React.PropTypes.func,
  onSave: React.PropTypes.func.isRequired,
  onValidationChange: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  actions: React.PropTypes.func,
  primary: React.PropTypes.bool,
  postalCode: React.PropTypes.string,
  addressLineOne: React.PropTypes.string,
  addressLineTwo: React.PropTypes.string,
  state: React.PropTypes.string,
  id: React.PropTypes.string,
  city: React.PropTypes.string,
  children: React.PropTypes.node,
  firstName: React.PropTypes.string,
  lastName: React.PropTypes.string,
  cardExpiryDate: React.PropTypes.string,
  validationDate: React.PropTypes.object,
  lastFour: React.PropTypes.string,
  cardType: React.PropTypes.string,
  isTemp: React.PropTypes.bool,
  phone: React.PropTypes.string,
  loading: React.PropTypes.bool,
  addressForm: React.PropTypes.func,
  alertComponent: React.PropTypes.func,
  floatingLabels: React.PropTypes.bool,
  bypassValidation: React.PropTypes.bool,
  tealeafIds: React.PropTypes.shape({
    infoForm: React.PropTypes.object,
    addressForm: React.PropTypes.object,
    save: React.PropTypes.string,
    cancel: React.PropTypes.string
  }),
  errors: React.PropTypes.shape({
    delete: React.PropTypes.object,
    edit: React.PropTypes.object
  })
};

CreditCardForm.defaultProps = {
  tealeafIds: {
    save: "save",
    cancel: "cancel"
  },
  primary: true
};

export default CreditCardForm;
