"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _omit = require("lodash/omit");

var _omit2 = _interopRequireDefault(_omit);

var _pick = require("lodash/pick");

var _pick2 = _interopRequireDefault(_pick);

var _isBoolean = require("lodash/isBoolean");

var _isBoolean2 = _interopRequireDefault(_isBoolean);

var _every = require("lodash/every");

var _every2 = _interopRequireDefault(_every);

var _stateChooser = require("@walmart/wmreact-state-chooser/lib/components/state-chooser");

var _stateChooser2 = _interopRequireDefault(_stateChooser);

var _layout = require("@walmart/wmreact-layout/lib/components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _alert = require("@walmart/wmreact-forms/lib/components/alert");

var _alert2 = _interopRequireDefault(_alert);

var _field = require("@walmart/wmreact-forms/lib/components/field");

var _field2 = _interopRequireDefault(_field);

var _zipcode = require("@walmart/wmreact-forms/lib/components/zipcode");

var _zipcode2 = _interopRequireDefault(_zipcode);

var _formValidation = require("@walmart/wmreact-validation/lib/mixins/form-validation");

var _formValidation2 = _interopRequireDefault(_formValidation);

var _addressApi = require("../api/address-api");

var _addressApi2 = _interopRequireDefault(_addressApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var _allFieldsValid = function _allFieldsValid(response) {
  var fields = (0, _pick2.default)(response, _isBoolean2.default);
  // only need to check address fields, not validity in general
  fields = (0, _omit2.default)(fields, "addressIsValid");

  /* eslint-disable no-unused-vars */
  return (0, _every2.default)(fields, function (value, key) {
    return value;
  });
  /* eslint-enable no-unused-vars */
};

exports.default = _react2.default.createClass({
  displayName: "AddressForm",

  mixins: [(0, _formValidation2.default)(["address1", "address2", "city", "zipCode"])],

  /*
    There is no need for a onValidationEnd function, since the handler
    functions will be run when server side validation is finished.
  */
  propTypes: {
    pureRender: _react2.default.PropTypes.bool,
    validationUrl: _react2.default.PropTypes.string,
    onValidationStart: _react2.default.PropTypes.func,
    successHandler: _react2.default.PropTypes.func,
    errorHandler: _react2.default.PropTypes.func,
    address1: _react2.default.PropTypes.string,
    address2: _react2.default.PropTypes.string,
    city: _react2.default.PropTypes.string,
    state: _react2.default.PropTypes.string,
    zipCode: _react2.default.PropTypes.string,
    className: _react2.default.PropTypes.string,
    forceMobileView: _react2.default.PropTypes.bool
  },

  getDefaultProps: function getDefaultProps() {
    return {
      pureRender: false,
      onValidationStart: function onValidationStart() {}
    };
  },
  getInitialState: function getInitialState() {
    return {
      globalMessage: ""
    };
  },


  /*
    We want to make sure to only modify the input field values if they were
    passed in. Otherwise, the fields might be incorrectly invalidated.
  */
  componentDidMount: function componentDidMount() {
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
  receivedNewAddressProps: function receivedNewAddressProps(nextProps) {
    return !this.props.pureRender || nextProps.city !== this.props.city || nextProps.state !== this.props.state || nextProps.zipCode !== this.props.zipCode || nextProps.address1 !== this.props.address1 || nextProps.address2 !== this.props.address2;
  },
  shouldComponentUpdate: function shouldComponentUpdate(nextProps) {
    return this.receivedNewAddressProps(nextProps);
  },


  /*
    Only set values when given a new address, regardless of pureRender setting
  */
  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
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
  getAddress: function getAddress() {
    return {
      address1: this.refs.address1.getValue(),
      address2: this.refs.address2.getValue(),
      city: this.refs.city.getValue(),
      state: this.refs.state.getValue(),
      zipCode: this.refs.zipCode.getValue()
    };
  },
  invalidateFields: function invalidateFields(response) {
    var error = response.error;

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
  setGlobalError: function setGlobalError(response) {
    this.setState({
      globalMessage: response.error.errorMessage
    });
  },
  onError: function onError(response) {
    this.setGlobalError(response);
    this.invalidateFields(response);
  },
  onSuccess: function onSuccess(response) {
    this.setState({
      globalMessage: response.successMessage
    });
  },
  validateForm: function validateForm() {
    var validateOnServer = this.props.validationUrl ? true : false;
    var formIsValid = this.validate() && this.refs.state.validate();

    var errorHandler = this.props.errorHandler || this.onError;
    var successHandler = this.props.successHandler || this.onSuccess;

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

      _addressApi2.default.validateAddress(this.props.validationUrl, this.getAddress()).done(successHandler).fail(errorHandler);
    }
  },
  renderFormFields: function renderFormFields() {
    return _react2.default.createElement(
      _layout2.default,
      {
        padded: true,
        small: 1,
        medium: this.props.forceMobileView ? 1 : 2 },
      _react2.default.createElement(_field2.default, {
        ref: "address1",
        type: "text",
        inputName: "address1",
        labelText: "Street address",
        validationType: "address1",
        isRequiredField: true }),
      _react2.default.createElement(_field2.default, {
        ref: "address2",
        type: "text",
        inputName: "address2",
        labelText: "Apt, suite, bldg, c/o (optional)",
        validationType: "address2",
        isRequiredField: false }),
      _react2.default.createElement(_field2.default, {
        ref: "city",
        type: "text",
        inputName: "city",
        labelText: "City",
        validationType: "city",
        isRequiredField: true }),
      _react2.default.createElement(
        _layout2.default,
        {
          padded: true,
          small: 2 },
        _react2.default.createElement(_stateChooser2.default, {
          ref: "state",
          defaultValue: this.props.state,
          chooserName: "state-chooser",
          isRequiredField: true,
          isRounded: true }),
        _react2.default.createElement(_zipcode2.default, {
          ref: "zipCode",
          isRequiredField: true })
      )
    );
  },
  render: function render() {
    var alert = _react2.default.createElement(_alert2.default, { message: this.state.globalMessage, isBlock: true });

    /*
      The following div needs to be set to required. For some strange
      reason, when it is not set to required, the field component validation
      does not trigger onBlur. This may be fixed in future versions of the
      wmreact field or validation modules.
    */
    return _react2.default.createElement(
      "div",
      { className: this.props.className, isRequiredField: true },
      this.state.globalMessage ? alert : null,
      this.renderFormFields()
    );
  }
});