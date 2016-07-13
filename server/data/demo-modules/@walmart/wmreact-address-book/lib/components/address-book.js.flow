/* global window */
import isEmpty from "lodash/isEmpty";
import map from "lodash/map";
import values from "lodash/values";
import keys from "lodash/keys";

import React, {PropTypes} from "react";
import classNames from "classnames";
import Alert from "@walmart/wmreact-forms/lib/components/alert";
import ReactDOM from "react-dom";
import i18n from "../utils/i18n";
import AddressTile from "./address-tile";
import AddressForm from "./address-form";
import ActionButtons from "./address-book-action-buttons";
import NewAddressTile from "./new-address-tile";
import {addEvent, removeEvent} from "../utils/address-book-utils";

const AddressBook = React.createClass({
  displayName: "Common-AddressBook",

  propTypes: {
    // Actions and callbacks
    actions: PropTypes.object,
    onCancel: PropTypes.func,
    onContinue: PropTypes.func,

    // Address Book data
    addresses: PropTypes.object,
    countries: PropTypes.array.isRequired,
    defaultCountryCode: PropTypes.string,
    hideCountry: PropTypes.bool,
    hideAddressBookOverlay: PropTypes.bool,
    hideActionButtons: PropTypes.bool,
    showFormButtons: PropTypes.bool,

    // Address Book look and feel
    initialTileMessage: PropTypes.node,
    selectedTileMessage: PropTypes.node,

    // Address Book alerts and errors
    alert: PropTypes.object,
    invalidAddressError: PropTypes.object,

    // Address Book state properties
    loading: PropTypes.bool,
    adding: PropTypes.bool,
    editing: PropTypes.string,
    deleting: PropTypes.string,
    deleteConfirmed: PropTypes.bool,
    selected: PropTypes.string,

    // Address Book behavior properties
    showFormWhenEmpty: PropTypes.bool,

    createAddressForm: PropTypes.func.isRequired
  },

  getInitialState() {
    return {tileHeights: []};
  },

  onContinue() {
    const {addresses, selected} = this.props;

    this.props.onContinue(addresses[selected]);
  },

  componentDidUpdate(prevProps) {
    const oldAddressCount = Object.keys(prevProps.addresses || {}).length;
    const newAddressCount = Object.keys(this.props.addresses || {}).length;

    if (oldAddressCount !== newAddressCount) {
      this.recalculateTileHeights();
    }
  },

  shouldComponentUpdate(newProps) {
    const {editing, adding} = this.props;
    const {editing: willEdit, adding: willAdd} = newProps;

    // Do not re-render entire address book when in adding/editing mode
    return !(
      editing && willEdit === editing ||
      adding && willAdd === adding
    );
  },

  componentDidMount() {
    addEvent(window, "resize", this.recalculateTileHeights);
    this.recalculateTileHeights();
  },

  componentWillMount() {
    const {
      createAddressForm,
      countries,
      hideCountry,
      showFormButtons,
      hideActionButtons
    } = this.props;

    this.StatefulAddressForm = createAddressForm({
      AddressFormComponent: AddressForm,
      initialValues: {
        isDefault: true,
        state: "AL"
      },
      countries,
      hideCountry,
      showFormButtons,
      hideCancelButton: true,
      hideActionButtons
    });
  },

  componentWillUnmount() {
    removeEvent(window, "resize", this.recalculateTileHeights);
  },

  findRowsTiles() {
    const rows = {};
    const tiles = [];

    // Identify the rows of tiles in the address book
    for (let i = 0; i <= Object.keys(this.props.addresses).length; i++) {
      const tile = this.refs[`tile${i}`];
      const tileDOMNode = tile.tileDOMNode();

      // Reset heights in order to see browser calculated heights
      tileDOMNode.style.height = "";

      const top = ReactDOM.findDOMNode(tile).offsetTop;
      rows[top] = rows[top] || [];
      rows[top].push(tile);

      tiles.push({node: tileDOMNode, row: keys(rows).length - 1});
    }

    return {rows, tiles};
  },

  recalculateTileHeights() {
    const {adding, editing} = this.props;

    if (isEmpty(this.refs) || adding || editing) {
      return;
    }

    const rowsTiles = this.findRowsTiles();

    // Get max height for each tile row
    const heights = map(rowsTiles.rows, (row) =>
      Math.max(...map(row, (tile) => tile.tileDOMNode().offsetHeight))
    );

    if (heights.length === rowsTiles.tiles.length) {
      // If all tiles are stacked - let browser calculate height
      rowsTiles.tiles.forEach((tile) => tile.node.style.height = "");
    } else {
      rowsTiles.tiles.forEach((tile) => tile.node.style.height = `${heights[tile.row]}px`);
    }
  },

  getTileHeight(index) {
    return this.state.tileHeights[index] || null;
  },

  seeAllSavedAddress() {
    return (
      <div className="address-col-full address-col-inner expand-addresses-wrapper"
        style={{display: "none"}}>
        <button className="btn btn-link">
          {i18n("See all saved addresses")}
        </button>
      </div>
    );
  },

  addressBookOverlay() {
    const {adding, editing, loading} = this.props;
    const className = classNames("address-book-overlay", {"active": adding || editing});

    return (
      // Make the overlay clickable so tapping outside of the form would cancel the form
      // unless address book is in the loading state.
      <div className={className}
        onClick={() => { if (!loading) { this.props.actions.cancelEdit(); }}}>
      </div>
    );
  },

  addressBookAlert() {
    const {adding, editing, alert} = this.props;

    // Show an alert above the address book when alert exists and user has *no* address form open
    return alert && !adding && !editing
      ? <Alert {...alert} isBlock={true} isAboveForm={true} />
      : null;
  },

  addressTiles() {

    const {
      selected,
      editing,
      deleting,
      deleteConfirmed,
      createAddressForm
    } = this.props;

    return values(this.props.addresses)
      .filter((address) => address.id !== deleteConfirmed)
      .map((address, index) => (
        <AddressTile {...this.props}
          deleting={deleting === address.id}
          selected={selected === address.id}
          editing={editing === address.id}
          height={this.getTileHeight(index)}
          createAddressForm={createAddressForm}
          address={address}
          index={index + 1}
          ref={`tile${index}`}
          key={index} />));
  },

  render() {
    // Don't render the address book until initial addresses loading is complete
    if (!this.props.addresses) { return null; }

    if (this.props.showFormWhenEmpty && isEmpty(this.props.addresses)) {
      const StatefulAddressForm = this.StatefulAddressForm;
      const {actions} = this.props;
      if (!StatefulAddressForm) {
        return null;
      }
      return <StatefulAddressForm actions={actions} embedded={true}/>;
    }

    const index = Object.keys(this.props.addresses).length;

    return (
      <div className="shipping-addresses grid accordion-form show-all Common-AddressBook">
        {this.addressBookAlert()}
        <div className="address-grid">
          {this.addressTiles()}
          {this.seeAllSavedAddress()}

          <NewAddressTile {...this.props}
            height={this.getTileHeight(index)}
            ref={`tile${index}`} />
        </div>
        {!this.props.hideAddressBookOverlay && this.addressBookOverlay}
        {
          this.props.hideActionButtons
            ? null
            : <ActionButtons onCancel={this.props.onCancel} onContinue={this.onContinue} />
        }
      </div>
    );
  }
});

AddressBook.defaultProps = {
  hideCountry: false,
  hideActionButtons: false,
  hideAddressBookOverlay: false,
  initialTileMessage: "Select",
  selectedTileMessage: "Selected"
};

export default AddressBook;
