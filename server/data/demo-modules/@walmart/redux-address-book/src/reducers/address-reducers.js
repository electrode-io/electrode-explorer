import omit from "lodash/omit";
import isUndefined from "lodash/isUndefined";
import uniq from "lodash/uniq";
import find from "lodash/find";
import isEmpty from "lodash/isEmpty";
import changedFieldsFlags from "../enums/changed-fields-flags";
import {getChangedFieldsArray} from "../utils/address-book-utils";

const clearErrors = () => ({
  alert: null,
  invalidAddressError: null
});

export const selectAddress = (state, action) =>
  Object.assign({}, state, {selected: action.payload});

export const unSelectAddress = (state) => {
  const addresses = {...state.addresses};
  const prefAddress = find(addresses, (addr) => addr.isDefault) || {};

  if (isEmpty(prefAddress)) {
    return Object.assign({}, state, ...addresses);
  }

  const address = Object.assign({}, prefAddress, {isDefault: false});
  const newAddresses = Object.assign({}, addresses, {[prefAddress.id]: address});
  return Object.assign({}, state, {addresses: newAddresses});
};

export const requestDelete = (state, action) =>
  Object.assign({}, state, {deleting: action.payload});

export const cancelDelete = (state) =>
  Object.assign({}, state, {deleting: null}, clearErrors());

export const updateAddresses = (state, action) => {
  const selected = (action.payload.find((addr) => addr.isDefault) || {}).id;
  const addresses = action.payload.reduce((result, addr) =>
    Object.assign(result, {[addr.id]: addr}), {});

  return Object.assign({}, state, {addresses, selected, dataFetched: true}, clearErrors());
};

export const requestEdit = (state, action) => {
  const patch = action.payload
    ? {editing: action.payload}
    : {adding: true};

  return Object.assign({}, state, patch);
};

export const cancelEdit = (state) =>
  Object.assign({}, state, clearErrors(), {
    adding: false,
    editing: null,
    suggestions: []
  });

export const completeDelete = (state, action) =>
  Object.assign({}, state, {
    addresses: omit(state.addresses, action.payload),
    deleting: null
  });

export const deleteConfirmed = (state, action) =>
  Object.assign({}, state, {deleteConfirmed: action.payload});

export const completeEdit = (state, action) => {
  const addresses = {...state.addresses};
  const address = action.payload;

  address.changedFields = address.changedFields || [];

  if (isUndefined(addresses[address.id])) {
    address.changedFields = uniq([
      ...address.changedFields,
      changedFieldsFlags.NEW
    ]);
  } else {
    address.changedFields = uniq(
      ...address.changedFields,
      ...getChangedFieldsArray({
        oldAddress: addresses[address.id],
        newAddress: address
      })
    );
  }

  const newAddresses = Object.assign({}, addresses, {[address.id]: address});

  let selectedAddressId;
  if ((state.selected === address.id) && !address.isDefault) {
    // set selected to null when user unselect the preferred address
    selectedAddressId = null;
  } else {
    selectedAddressId = address.isDefault ? address.id : state.selected;
  }

  return {
    ...state,
    addresses: newAddresses,
    selected: selectedAddressId,
    ...clearErrors()
  };
};

export const seeAllAddresses = (state, action) => ({
  ...state,
  seeAllAddresses: action.payload
});
