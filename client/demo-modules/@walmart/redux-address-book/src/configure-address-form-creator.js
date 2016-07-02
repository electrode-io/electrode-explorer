import {reduxForm, getValues} from "redux-form";
import {get as _get} from "lodash";
import ADDRESS_VALIDATION_STATUS from "./enums/address-validation-status";
import {
  addressFormFields,
  addressFormValidator
} from "./address-book-default-configuration";

const checkIsAddressModified = (invalidAddressError) => {
  const errorCode = (invalidAddressError || {}).responseCode;

  return errorCode === ADDRESS_VALIDATION_STATUS.CITY_MODIFIED
    || errorCode === ADDRESS_VALIDATION_STATUS.STATE_MODIFIED
    || errorCode === ADDRESS_VALIDATION_STATUS.POSTALCODE_MODIFIED;
};

const configureMapStateToProps = (options) => (state) => {
  const {invalidAddressError, loading} = state.addressBook;

  return {
    ...state.addressBookForm,
    invalidAddressError,
    countries: options.countries,
    hideCountry: options.hideCountry,
    showFormButtons: options.showFormButtons,
    hideCancelButton: options.hideCancelButton,
    hideActionButtons: options.hideActionButtons,
    loading,
    isAddressModified: checkIsAddressModified(invalidAddressError),
    addressSnapshot: _get(getValues(state.addressBookForm), "addressBookForm")
  };
};

const configureAddressFormCreator = () => ({
  AddressFormComponent,
  countries,
  hideCountry,
  showFormButtons,
  hideCancelButton,
  hideActionButtons,
  initialValues = {},
  fields = addressFormFields,
  validator = addressFormValidator()
}) => {
  const options = {countries, hideCountry, showFormButtons, hideCancelButton, hideActionButtons};

  const connectedAddressForm = reduxForm(
    {
      initialValues,
      fields,
      form: "addressBookForm",
      validate: validator,
      reduxMountPoint: "addressBookForm"
    },

    configureMapStateToProps(options)
  )(AddressFormComponent);

  return connectedAddressForm;
};

export default configureAddressFormCreator;
