import React from "react";
import omit from "lodash/omit";
import pick from "lodash/pick";
import isBoolean from "lodash/isBoolean";
import every from "lodash/every";

import StateChooser from "@walmart/wmreact-state-chooser/lib/components/state-chooser";

import Layout from "@walmart/wmreact-layout/lib/components/layout";

import Alert from "@walmart/wmreact-forms/lib/components/alert";
import Field from "@walmart/wmreact-forms/lib/components/field";
import ZipCode from "@walmart/wmreact-forms/lib/components/zipcode";

import formValidationMixin from "@walmart/wmreact-validation/lib/mixins/form-validation";

import AddressApi from "../api/address-api";


// Determines if all address fields in the response are valid. All address fields
// in response object have a boolean value indicating validity, with one additional
// outlier by the name of 'addressIsValid' which indicates address validity at
// a general level.
//
// Address field keys are:
// - cityIsValid
// - postalCodeIsValid
// - stateIsValid
// - streetNumberIsValid
const _allFieldsValid = (response) => {
  let fields = pick(response, isBoolean);
  // only need to check address fields, not validity in general
  fields = omit(fields, "addressIsValid");

  /* eslint-disable no-unused-vars */
  return every(fields, (value, key) => {
    return value;
  });
  /* eslint-enable no-unused-vars */
};

export default React.createClass({
  displayName: "AddressForm",

  mixins: [
    formValidationMixin(["address1", "address2", "city", "zipCode"])
  ],

  /*
    There is no need for a onValidationEnd function, since the handler
    functions will be run when server side validation is finished.
  */
  propTypes: {
    pureRender: React.PropTypes.bool,
    validationUrl: React.PropTypes.string,
    onValidationStart: React.PropTypes.func,
    successHandler: React.PropTypes.func,
    errorHandler: React.PropTypes.func,
    address1: React.PropTypes.string,
    address2: React.PropTypes.string,
    city: React.PropTypes.string,
    state: React.PropTypes.string,
    zipCode: React.PropTypes.string,
    className: React.PropTypes.string,
    forceMobileView: React.PropTypes.bool
  },

  getDefaultProps() {
    return {
      pureRender: false,
      onValidationStart: () => {}
    };
  },

  getInitialState() {
    return {
      globalMessage: ""
    };
  },

  /*
    We want to make sure to only modify the input field values if they were
    passed in. Otherwise, the fields might be incorrectly invalidated.
  */
  componentDidMount() {
    if (this.props.city) {
      this.refs.city.setValue(this.props.city);
    }
    if (this.props.state) {
      this.refs.state.setValue(this.props.state);
    }
    if (this.props.zipCode) {
      this.refs.zipCode.setValue(this.props.zipCode);
    }
    if (this.props.address1) {
      this.refs.address1.setValue(this.props.address1);
    }
    if (this.props.address2) {
      this.refs.address2.setValue(this.props.address2);
    }
  },

  /*
    If pureRender prop is set to true, component should only update when its address props update.
  */
  receivedNewAddressProps(nextProps) {
    return !this.props.pureRender
      || nextProps.city !== this.props.city
      || nextProps.state !== this.props.state
      || nextProps.zipCode !== this.props.zipCode
      || nextProps.address1 !== this.props.address1
      || nextProps.address2 !== this.props.address2;
  },

  shouldComponentUpdate(nextProps) {
    return this.receivedNewAddressProps(nextProps);
  },

  /*
    Only set values when given a new address, regardless of pureRender setting
  */
  componentWillReceiveProps(nextProps) {
    if (this.receivedNewAddressProps(nextProps)) {
      if (nextProps.city) {
        this.refs.city.setValue(nextProps.city);
      }
      if (nextProps.state) {
        this.refs.state.setValue(nextProps.state);
      }
      if (nextProps.zipCode) {
        this.refs.zipCode.setValue(nextProps.zipCode);
      }
      if (nextProps.address1) {
        this.refs.address1.setValue(nextProps.address1);
      }
      if (nextProps.address2) {
        this.refs.address2.setValue(nextProps.address2);
      }
    }
  },

  getAddress() {
    return {
      address1: this.refs.address1.getValue(),
      address2: this.refs.address2.getValue(),
      city: this.refs.city.getValue(),
      state: this.refs.state.getValue(),
      zipCode: this.refs.zipCode.getValue()
    };
  },

  invalidateFields(response) {
    const error = response.error;

    if (!error.cityIsValid) {
      this.refs.city.invalidate();
    }
    if (!error.stateIsValid) {
      this.refs.state.invalidate("Please select the correct state");
    }
    if (!error.postalCodeIsValid) {
      this.refs.zipCode.invalidate();
    }
    if (!error.streetNumberIsValid) {
      this.refs.address1.invalidate();
    }

    // handling special case in which service indicates address is invalid at a
    // general level but does not indicate which fields, specifically, are not valid
    if (!error.addressIsValid && _allFieldsValid(response)) {
      // invalidate all fields
      this.refs.address1.invalidate();
      this.refs.city.invalidate();
      this.refs.state.invalidate("Please select the correct state");
      this.refs.zipCode.invalidate();
    }
  },

  setGlobalError(response) {
    this.setState({
      globalMessage: response.error.errorMessage
    });
  },

  onError(response) {
    this.setGlobalError(response);
    this.invalidateFields(response);
  },

  onSuccess(response) {
    this.setState({
      globalMessage: response.successMessage
    });
  },

  validateForm() {
    const validateOnServer = this.props.validationUrl ? true : false;
    const formIsValid = (this.validate() && this.refs.state.validate());

    const errorHandler = this.props.errorHandler || this.onError;
    const successHandler = this.props.successHandler || this.onSuccess;

    if (!formIsValid) {
      return false;
    } else if (!validateOnServer) {
      return true;
    } else {
      /*
        This function is used to trigger custom events when server validation begins.
        Such as spinners on the wmreact button component. We only want this to trigger if
        client side validation passes.
      */
      this.props.onValidationStart();

      AddressApi.validateAddress(this.props.validationUrl, this.getAddress())
        .done(successHandler)
        .fail(errorHandler);
    }
  },

  renderFormFields() {
    return (
      <Layout
        padded={true}
        small={1}
        medium={this.props.forceMobileView ? 1 : 2}>
        <Field
          ref="address1"
          type="text"
          inputName="address1"
          labelText="Street address"
          validationType="address1"
          isRequiredField={true} />
        <Field
          ref="address2"
          type="text"
          inputName="address2"
          labelText="Apt, suite, bldg, c/o (optional)"
          validationType="address2"
          isRequiredField={false} />
        <Field
          ref="city"
          type="text"
          inputName="city"
          labelText="City"
          validationType="city"
          isRequiredField={true} />
        <Layout
          padded={true}
          small={2}>
          <StateChooser
            ref="state"
            defaultValue={this.props.state}
            chooserName="state-chooser"
            isRequiredField={true}
            isRounded={true} />
          <ZipCode
            ref="zipCode"
            isRequiredField={true} />
        </Layout>
      </Layout>
    );
  },

  render() {
    const alert = <Alert message={this.state.globalMessage} isBlock={true} />;

    /*
      The following div needs to be set to required. For some strange
      reason, when it is not set to required, the field component validation
      does not trigger onBlur. This may be fixed in future versions of the
      wmreact field or validation modules.
    */
    return (
      <div className={this.props.className} isRequiredField={true}>
        {this.state.globalMessage ? alert : null}
        {this.renderFormFields()}
      </div>
    );
  }
});
