import React, {PropTypes} from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import i18n from "../utils/i18n";
import AddressForm from "./address-form";
import {formatPhone} from "../utils/address-book-utils";
import find from "lodash/find";

const AddressTile = React.createClass({
  displayName: "Common-AddressTile",

  propTypes: {
    actions: PropTypes.object,
    address: PropTypes.object,
    countries: PropTypes.array.isRequired,
    defaultCountryCode: PropTypes.string,
    hideCountry: PropTypes.bool,
    showFormButtons: PropTypes.bool,
    hideActionButtons: PropTypes.bool,
    selectedTileMessage: PropTypes.string,
    initialTileMessage: PropTypes.string,
    selected: PropTypes.bool,
    deleting: PropTypes.bool,
    editing: PropTypes.bool,
    loading: PropTypes.bool,
    height: PropTypes.number,
    index: PropTypes.number,
    createAddressForm: PropTypes.func.isRequired
  },

  tileDOMNode() {
    return ReactDOM.findDOMNode(this.refs.addressTile);
  },

  address() {
    return this.props.address;
  },

  onSelectClick() {
    const {selected, actions, address} = this.props;

    if (!selected) {
      actions.cancelEdit();
      actions.unSelect();
      actions.select(address.id);
      const options = {
        bypassValidation: true,
        isGuest: false,
        OnContinue: false,
        isDefault: true
      };
      actions.submitEdit(address, options);
    }
  },

  checkBox() {
    return (
      <input
        data-automation-id="address-tile-select-address"
        type="radio"
        name="option-address-checkbox"
        checked={this.props.selected ? "checked" : ""}
        onClick={(e) => e.stopPropagation()}
      />
    );
  },

  label() {
    const {selected, selectedTileMessage, initialTileMessage} = this.props;
    let labelText = i18n(selected ? selectedTileMessage : initialTileMessage);
    if (this.props.deleting) {
      labelText = i18n("Are you sure you want to delete this address?");
    }
    return (
      <label>{labelText}</label>
    );
  },

  addressDetails() {
    const addr = this.address();
    const {countries, defaultCountryCode, selectedTileMessage, hideCountry} = this.props;
    const country = (
      find(countries, (_country) => _country.value === addr.countryCode) ||
      find(countries, (_country) => _country.value === defaultCountryCode)
    ).label;
    const prefAddress = "Preferred address";

    if (addr.registryId) {
      return (
        <div className="address-details">
          <div className="recipient-name">{i18n("Registry address for:")}</div>
          <div>{addr.recipientName}</div>
          <div>{addr.city}, {addr.state}</div>
          {!hideCountry && <div>{country}</div>}
        </div>
      );
    }

    return (
      <div className="address-details">
        <div className="recipient-name ">{addr.firstName} {addr.lastName}</div>
        <div>{addr.addressLineOne}</div>
        <div>{addr.addressLineTwo}</div>
        <div>
          {addr.city}, {addr.state} {addr.postalCode}
        </div>
        {!hideCountry && <div>{country}</div>}
        <div className="complete-number ">{formatPhone(addr.phone)}</div>
        { selectedTileMessage !== prefAddress && this.preferredAddress(addr)}
      </div>
    );
  },

  preferredAddress(address) {
    if (address.isDefault) {
      return (
        <div className="preferred-address">{i18n("Preferred Address")}</div>
      );
    }
  },

  tileActions() {
    if (this.address().registryId) { return null; }

    const actions = this.props.actions;
    const loading = this.props.loading;
    const id = this.props.address.id;

    return (
      <div className="shipping-address-footer">
        <Button
          onClick={() => {
            actions.cancelEdit();
            actions.requestDelete(id);
          }}
          fakelink={true}
          disabled={loading}
          className="delete-link">
          {i18n("Delete")}
        </Button>
        <Button
          onClick={() => {
            actions.cancelEdit();
            actions.cancelDelete();
            // Adding timeout to make sure old form is deleted before we initialize new form
            // https://gecgithub01.walmart.com/R-User/account/issues/35
            /* eslint-disable no-undef */
            setTimeout(() => {
              actions.requestEdit(id);
            }, 0);
            /* eslint-enable no-undef */
          }}
          fakelink={true}
          disabled={loading}
          className="edit-link">
          {i18n("Edit")}
        </Button>
        <Button onClick={() => actions.submitDelete(id)}
          mini={true}
          disabled={loading}
          className="delete-button">
          {i18n("Delete")}
        </Button>
        <Button onClick={() => actions.cancelDelete()}
          fakelink={true}
          disabled={loading}
          className="cancel-link">
          {i18n("Cancel")}
        </Button>
      </div>
    );
  },

  formFlyout() {
    const address = this.address();
    const {
      countries,
      createAddressForm,
      editing,
      defaultCountryCode,
      hideCountry,
      hideActionButtons,
      showFormButtons
    } = this.props;

    if (!editing) { return null; }

    const StatefulAddressForm = createAddressForm({
      AddressFormComponent: AddressForm,

      initialValues: Object.assign(address, {
        countryCode: address.countryCode || defaultCountryCode
      }),

      countries,
      hideCountry,
      hideActionButtons,
      showFormButtons
    });

    return (
      <StatefulAddressForm actions={this.props.actions} />
    );
  },

  colRowClass() {
    const ALPHA = "address-col-alpha";
    const BETA = "address-col-beta";
    const GAMMA = "address-col-gamma";
    if (this.props.index <= 3) {
      return `${ALPHA} ${BETA} ${GAMMA}`;
    }
    if (this.props.index <= 6) {
      return `${BETA} ${GAMMA}`;
    }
    if (this.props.index <= 8) {
      return GAMMA;
    }
    return false;
  },

  nthChild(val1, val2) {
    val1 = parseFloat(val1);
    val2 = parseFloat(val2);
    return `nth-${val1}np${val2 % val1 || val1}`;
  },

  render() {
    const addr = this.address();
    const {editing, deleting, selected} = this.props;

    const tileClass = classNames("address-tile", {
      selected,
      "delete-confirmation": deleting,
      "address-book-enabled-element": editing,
      "address-tile-preferred": addr.isDefault
    });

    const colClass = classNames([
      "Common-AddressTile",
      "address-col",
      this.nthChild(4, this.props.index),
      this.nthChild(3, this.props.index),
      this.nthChild(2, this.props.index),
      this.colRowClass()
    ]);

    const {height, loading} = this.props;

    return (
      <div className={colClass}>
        <div className="address-col-inner">
          <div ref="addressTile"
            className={tileClass}
            style={height ? {height} : null}>
            <div className="address-tile-clickable" onClick={this.onSelectClick}>
              {loading && selected && <div className="spinner-backdrop">
                <div className="spinner preferred-address-spinner"></div>
              </div>}
              <div className="radio option-custom checkbox-container">
                {this.checkBox()}
                {this.label()}
              </div>
            </div>
            {this.addressDetails()}
            {this.tileActions()}
          </div>
        </div>
        {this.formFlyout()}
      </div>
    );
  }
});

AddressTile.defaultProps = {
  hideCountry: false
};

export default AddressTile;
