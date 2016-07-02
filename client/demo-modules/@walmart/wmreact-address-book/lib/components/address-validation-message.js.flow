import React, {PropTypes} from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import i18n from "../utils/i18n";
import ADDRESS_VALIDATION_STATUS from "../enums/address-validation-status";

export default React.createClass({
  displayName: "Customer-AddressValidationMessage",
  propTypes: {
    // Actions and callbacks
    actions: PropTypes.object,
    onContinue: PropTypes.func,

    // Essential address data
    address: PropTypes.object,

    // State properties
    embedded: PropTypes.bool,
    loading: PropTypes.bool,

    // Errors
    alert: PropTypes.object,
    invalidAddressError: PropTypes.object.isRequired
  },

  onUseAddressClick(addr) {
    this.props.actions.submitEdit(Object.assign({}, this.props.address, addr), {
      bypassValidation: true,
      onContinue: this.props.embedded ? this.props.onContinue : null
    });
  },

  closeButton(text) {
    return (
      <Button fakelink={true}
        disabled={this.props.loading}
        className="edit-address-validation btn-block-max-s"
        onClick={this.props.actions.clearError}>
        {text}
      </Button>
    );
  },

  address(addr, noSelect) {
    const button = !noSelect
      ? <Button onClick={() => this.onUseAddressClick(addr)}>{i18n("Select")}</Button>
      : null;

    return (
      <div>
        <div className="recipient-name">{addr.firstName} {addr.lastName}</div>
        <div>{addr.addressLineOne}</div>
        <div>{addr.addressLineTwo}</div>
        <div>{addr.city}, {addr.state} {addr.postalCode}</div>
        <br />
        {button}
      </div>
    );
  },

  unmatched() {
    const {loading, address} = this.props;

    return (
      <div>
        <div><b>{i18n("You entered:")}</b></div>
        {this.address(address, true)}
        <Button
          spinner={loading}
          disabled={loading}
          className="button-save-address btn-block-max-s"
          onClick={() => this.onUseAddressClick()}>
          {i18n("Save Address")}
        </Button>
        {this.closeButton(i18n("Edit"))}
      </div>
    );
  },

  multipleMatches(addresses) {
    return (
      <div>
        <ul className="multiple-addresses">
          {addresses.map((addr, index) => (
            <li className="multiple-address-block" key={index}>
              {this.address(addr)}
            </li>)
          )}
        </ul><br />
        {this.closeButton(i18n("Cancel"))}
      </div>
    );
  },

  render() {
    const {addresses, postalCodeStatus} = this.props.invalidAddressError.serverResponse;
    const isMultiple = postalCodeStatus === ADDRESS_VALIDATION_STATUS.MULTIPLE_MATCHES
      && addresses
      && addresses.length;

    const message = i18n(isMultiple
      ? "We identified multiple validated addresses. Please choose from the list below."
      : "We can't verify this address. Want to save it anyway?");

    return (
      <div className="grid address-validation">
        {this.props.alert}

        <div className="validation-wrap">
          <div>{message}</div><br />

          {isMultiple ? this.multipleMatches(addresses) : this.unmatched()}
        </div>
      </div>
    );
  }
});
