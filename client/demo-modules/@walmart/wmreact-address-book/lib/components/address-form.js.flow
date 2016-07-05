import React, {PropTypes} from "react";
import classNames from "classnames";
import Alert from "@walmart/wmreact-forms/lib/components/alert";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import usStates from "../enums/us-states";
import AddressValidationMessage from "./address-validation-message";
import ActionButtons from "./address-book-action-buttons";
import Checkbox from "./form/checkbox";
import i18n from "../utils/i18n";
import isUndefined from "lodash/isUndefined";
import FloatingField from "@walmart/wmreact-stateless-fields/lib/components/floating-field";
import SelectField from "@walmart/wmreact-stateless-fields/lib/components/select-field";

const COLUMN_CLASS = "Grid-col u-size-1-2-m address-form-main-column address-form-main-column-";
const FIRST_COLUMN_CLASS = `${COLUMN_CLASS}alpha`;
const SECOND_COLUMN_CLASS = `${COLUMN_CLASS}omega`;

export default React.createClass({
  displayName: "Common-AddressForm",

  propTypes: {
    fields: PropTypes.object.isRequired,

    handleSubmit: PropTypes.func.isRequired,

    actions: PropTypes.object,
    onCancel: PropTypes.func,
    onContinue: PropTypes.func,

    countries: PropTypes.array.isRequired,
    hideCountry: PropTypes.bool,
    showFormButtons: PropTypes.bool,
    hideCancelButton: PropTypes.bool,
    hideActionButtons: PropTypes.bool,

    embedded: PropTypes.bool,
    loading: PropTypes.bool,

    alert: PropTypes.object,
    invalid: PropTypes.bool,
    submitFailed: PropTypes.bool,

    addressSnapshot: PropTypes.object,

    isAddressModified: PropTypes.bool.isRequired,

    invalidAddressError: PropTypes.object
  },

  getDefaultProps() {
    return {
      hideCountry: false
    };
  },

  onCancelEdit() {
    this.props.actions.cancelEdit();
  },

  renderStateAndPostalCode() {
    const {fields: {state, postalCode}} = this.props;

    return (
      <div className="Grid">
        <div className="Grid-col u-size-3-6 state-validation-marker">
          <SelectField
            {...state}
            label={i18n("State")}
            data-automation-id="address-form-state"
          >
            {usStates.map(({code, name}, index) => (
              <option value={code} key={index}>{name}</option>
            ))}
          </SelectField>
        </div>
        <div className="Grid-col u-size-2-6 u-offset-1-6">
          <FloatingField
            data-automation-id="address-form-postalCode"
            label={i18n("ZIP Code")}
            maxLength="5"
            {...postalCode}
          />
        </div>
      </div>
    );
  },


  renderUserInfo() {
    const {fields: {firstName, lastName, phone}} = this.props;

    return (
      <div className={FIRST_COLUMN_CLASS}>
        <FloatingField
          autoFocus
          label={i18n("First Name")}
          maxLength="25"
          data-automation-id="address-form-firstName"
          data-tealeaf-id="COAC2ShpAddrFirstName"
          {...firstName}
        />
        <FloatingField
          label={i18n("Last Name")}
          maxLength="25"
          data-automation-id="address-form-lastName"
          data-tealeaf-id="COAC2ShpAddrLastName"
          {...lastName}
        />
        <FloatingField
          label={i18n("Phone")}
          instructions={i18n("Ex: (415) 444 - 5555")}
          maxLength="16"
          type="tel"
          data-automation-id="address-form-shippingPhone"
          {...phone}
        />
      </div>
    );
  },

  renderManualAddress() {
    const {fields: {addressLineOne, addressLineTwo, city}} = this.props;

    return (
      <div className={SECOND_COLUMN_CLASS}>
        <FloatingField
          label={i18n("Street address")}
          maxLength="25"
          data-automation-id="address-form-addressLineOne"
          tealeafId="COAC2ShpAddrAddress1"
          {...addressLineOne}
        />

        <FloatingField
          label={i18n("Apt, suite, bldg, c/o (optional)")}
          maxLength="25"
          data-automation-id="address-form-addressLineTwo"
          tealeafId="COAC2ShpAddrAddress2"
          {...addressLineTwo}
        />

        <FloatingField
          label={i18n("City")}
          maxLength="25"
          data-automation-id="address-form-city"
          tealeafId="COAC2ShpAddrCity"
          {...city}
        />
        {this.renderStateAndPostalCode()}
      </div>
    );
  },

  renderAlert() {
    const {invalidAddressError, isAddressModified, invalid, submitFailed} = this.props;
    let {alert} = this.props;

    if (!alert && isAddressModified) {
      alert = {alertType: invalidAddressError.alertType, message: invalidAddressError.message};
    } else if (!alert && invalid && submitFailed) {
      alert = {alertType: "error", message: "Please correct the errors below."};
    }

    return (alert) ?
      <Alert
        alertType={alert.alertType}
        message={alert.message}
        isBlock
        isAboveForm
      /> :
      null;
  },

  renderFormButtons() {
    const {loading, handleSubmit, hideCancelButton, actions: {submitEdit}} = this.props;
    const checkboxClass = "Grid-col u-size-1-2-m option option-form-control " +
      "address-form-preferred-address-wrapper pull-left";

    const cancelFormClass = "cancel-address-form btn btn-link btn-block-max-s " +
      "btn-fake-link-large cancel-btn pull-right-s";

    const {fields: {isDefault}} = this.props;

    return (
      <div className="Grid address-form-input-group">
        <Checkbox
          automationId="address-form-set-as-preferred"
          tealeafId="COAC2ShpAddrDefaultChkBox"
          className={checkboxClass}
          {...isDefault}
          >
          {i18n("Set as my preferred address")}
        </Checkbox>
        <div className="Grid-col u-size-1-2-m address-book-action-buttons">
          <div className="form-buttons">
            <Button
              data-automation-id="address-form-submit"
              tealeafId="COAC2ShpAddrUseThisAddrBtn"
              onClick={handleSubmit(submitEdit)}
              className="btn-block-max-s save-address pull-right-s"
              disabled={loading}
              spinner={loading}
            >
              {i18n("Save Address")}
            </Button>

            {!hideCancelButton &&
              <Button
                data-automation-id="address-form-on-cancel"
                tealeafId="COAC2ShpAddrCancelBtn"
                fakelink
                onClick={this.onCancelEdit}
                className={cancelFormClass}
                disabled={loading}
              >
                {i18n("Cancel")}
              </Button>
            }
          </div>
        </div>
      </div>
    );
  },

  renderAddressFormInputs() {
    return (
      <div className="Grid address-form-input-group">
        <div className="Grid-col">
          {this.renderAlert()}

          <div className="Grid">
            {this.renderUserInfo()}
            {this.renderManualAddress()}
          </div>
        </div>
      </div>
    );
  },

  render() {
    const {
      embedded,
      invalidAddressError,
      isAddressModified,
      onCancel,
      actions,
      onContinue,
      loading,
      handleSubmit,
      addressSnapshot
    } = this.props;

    // dont want to break checkout specific use case but My account will be passing these props
    let {showFormButtons, hideActionButtons} = this.props;

    const showAvsError = invalidAddressError && !isAddressModified;

    if (isUndefined(showFormButtons)) {
      showFormButtons = !embedded && !showAvsError;
    }
    if (isUndefined(hideActionButtons)) {
      hideActionButtons = !embedded && showAvsError;
    }

    const componentClass = classNames(
      "Common-AddressForm",
      "address-book-enabled-element",
      {
        "address-col-inner address-col-flyout": !embedded,
        "address-book-embedded-form": embedded
      }
    );

    if (invalidAddressError && invalidAddressError.responseCode === "STREET_NUMBER_UNMATCHED") {
      showFormButtons = false;
    }

    const formContent = showAvsError ?
      <AddressValidationMessage
        {...this.props}
        onContinue={onContinue}
        embedded={embedded}
        loading={loading}
        invalidAddressError={invalidAddressError}
        actions={actions}
        address={addressSnapshot}
        alert={this.renderAlert()}
      /> :
      this.renderAddressFormInputs();

    return (
      <div className={componentClass}>
        <div className={embedded ? "" : "address-col-flyout-inner"}>
          <form className="delivery-identity accordion-form">
            {formContent}
            {showFormButtons && this.renderFormButtons()}
          </form>

          {!hideActionButtons &&
          <ActionButtons
            onCancel={onCancel}
            onContinue={handleSubmit(this.props.actions.submitEdit)}
          />}
        </div>
      </div>
    );
  }
});
