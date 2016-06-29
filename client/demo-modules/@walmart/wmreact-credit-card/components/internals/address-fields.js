"use strict";

exports.__esModule = true;

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _formTokens = require("./form-tokens.json");

var _formTokens2 = _interopRequireDefault(_formTokens);

var _validatedField = require("./form/validated-field");

var _validatedField2 = _interopRequireDefault(_validatedField);

var _stateChooser = require("./form/state-chooser");

var _stateChooser2 = _interopRequireDefault(_stateChooser);

var _config = require("../../config");

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddressFields = function (_React$Component) {
  (0, _inherits3.default)(AddressFields, _React$Component);

  function AddressFields(props) {
    (0, _classCallCheck3.default)(this, AddressFields);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = {
      state: props.state || "AL",
      city: props.city,
      postalCode: props.postalCode,
      addressLineOne: props.addressLineOne,
      addressLineTwo: props.addressLineTwo
    };
    return _this;
  }

  AddressFields.prototype.validate = function validate() {
    var _this2 = this;

    return (0, _keys2.default)(this.refs).map(function (key) {
      return _this2.refs[key].validate();
    }).every(function (valid) {
      return valid;
    });
  };

  AddressFields.prototype.value = function value() {
    return (0, _extends3.default)({}, this.state);
  };

  AddressFields.prototype.updateWithAvs = function updateWithAvs(_ref) {
    var _setState;

    var responseCode = _ref.responseCode;
    var avsError = (0, _objectWithoutProperties3.default)(_ref, ["responseCode"]);

    // Ah the hacks from not being stateless...
    if (!responseCode || responseCode.indexOf("MODIFIED") === -1) {
      return;
    }
    var fieldMap = {
      CITY_MODIFIED: { field: "city", key: "updatedCity" },
      STATE_MODIFIED: { field: "state", key: "updatedState" },
      POSTALCODE_MODIFIED: { field: "postalCode", key: "updatedPostalCode" }
    };
    var _fieldMap$responseCod = fieldMap[responseCode];
    var field = _fieldMap$responseCod.field;
    var key = _fieldMap$responseCod.key;

    this.setState((_setState = {}, _setState[field] = avsError[key], _setState));
  };

  AddressFields.prototype.updateWithCorrected = function updateWithCorrected(_ref2) {
    var city = _ref2.city;
    var state = _ref2.state;
    var postalCode = _ref2.postalCode;
    var addressLineOne = _ref2.addressLineOne;
    var addressLineTwo = _ref2.addressLineTwo;

    this.setState({ city: city, state: state, postalCode: postalCode, addressLineOne: addressLineOne, addressLineTwo: addressLineTwo });
  };

  AddressFields.prototype._postalCodeType = function _postalCodeType() {
    return _config2.default.config.defaultCountryCode === "GBR" ? "ukpostalcode" : "postalcode";
  };

  AddressFields.prototype._postalMask = function _postalMask() {
    return _config2.default.config.defaultCountryCode === "GBR" ? {} : { maxLength: 5 };
  };

  AddressFields.prototype.render = function render() {
    var _this3 = this;

    var _props = this.props;
    var tealeafIds = _props.tealeafIds;
    var tealeafIndex = _props.tealeafIndex;
    var floatingLabels = _props.floatingLabels;


    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(_validatedField2.default, {
        ref: "addressLineOne",
        name: "addressLineOne",
        inputName: "addressLineOne",
        autoComplete: "address-line1",
        "data-automation-id": "addressLineOne-cc",
        "data-tl-id": "" + tealeafIds.addressLineOne + tealeafIndex,
        placeholder: "Street address",
        floating: floatingLabels,
        showPlaceholder: true,
        maxLength: "50",
        validationType: "address1",
        onChange: function onChange(ev) {
          return _this3.setState({ addressLineOne: ev.target.value });
        },
        value: this.state.addressLineOne,
        label: (0, _config.i18n)(_formTokens2.default.addressLineOne.label),
        errorLabel: (0, _config.i18n)(_formTokens2.default.addressLineOne.error) }),
      _react2.default.createElement(_validatedField2.default, {
        ref: "addressLineTwo",
        name: "addressLineTwo",
        inputName: "addressLineTwo",
        floating: floatingLabels,
        autoComplete: "address-line2",
        "data-automation-id": "addressLineTwo-cc",
        "data-tl-id": "" + tealeafIds.addressLineTwo + tealeafIndex,
        placeholder: "Apt, suite, bldg, c/o (optional)",
        maxLength: "50",
        validationType: "address2",
        isRequiredField: false,
        onChange: function onChange(ev) {
          return _this3.setState({ addressLineTwo: ev.target.value });
        },
        value: this.state.addressLineTwo,
        label: (0, _config.i18n)(_formTokens2.default.addressLineTwo.label),
        instructions: "(optional)",
        errorLabel: (0, _config.i18n)(_formTokens2.default.addressLineTwo.error) }),
      _react2.default.createElement(_validatedField2.default, {
        ref: "city",
        name: "city",
        inputName: "city",
        floating: floatingLabels,
        autoComplet: "address-level2",
        "data-automation-id": "city-cc",
        "data-tl-id": "" + tealeafIds.city + tealeafIndex,
        placeholder: "City",
        validationType: "city",
        maxLength: "30",
        onChange: function onChange(ev) {
          return _this3.setState({ city: ev.target.value });
        },
        value: this.state.city,
        label: (0, _config.i18n)(_formTokens2.default.city.label),
        errorLabel: (0, _config.i18n)(_formTokens2.default.city.error) }),
      _react2.default.createElement(
        "div",
        null,
        _config2.default.config.defaultCountryCode === "USA" && _react2.default.createElement(
          "div",
          { style: { float: "left", maxWidth: "50%" } },
          _react2.default.createElement(_stateChooser2.default, {
            ref: "state",
            name: "state",
            "data-automation-id": "state-cc",
            value: this.state.state,
            onChange: function onChange(ev) {
              return _this3.setState({ state: ev.target.value });
            },
            "data-tl-id": "" + tealeafIds.state + tealeafIndex })
        ),
        _react2.default.createElement(
          "div",
          { className: "postal-code-wrapper" },
          _react2.default.createElement(_validatedField2.default, (0, _extends3.default)({
            ref: "postalCode",
            name: "postalCode",
            inputName: "postalCode",
            autoComplete: "postal-code",
            pattern: "[0-9]*",
            inputMode: "numeric",
            floating: floatingLabels,
            "data-automation-id": "postalCode-cc",
            "data-tl-id": "" + tealeafIds.postalCode + tealeafIndex,
            placeholder: "ZIP Code"
          }, this._postalMask(), {
            value: this.state.postalCode,
            onChange: function onChange(ev) {
              return _this3.setState({ postalCode: ev.target.value });
            },
            validationType: this._postalCodeType(),
            label: (0, _config.i18n)(_formTokens2.default.postalCode.label),
            errorLabel: (0, _config.i18n)(_formTokens2.default.postalCode.error) }))
        )
      )
    );
  };

  return AddressFields;
}(_react2.default.Component);

AddressFields.propTypes = {
  tealeafIndex: _react2.default.PropTypes.number,
  tealeafIds: _react2.default.PropTypes.shape({
    addressLineOne: _react2.default.PropTypes.string,
    addressLineTwo: _react2.default.PropTypes.string,
    city: _react2.default.PropTypes.string,
    state: _react2.default.PropTypes.string,
    postalCode: _react2.default.PropTypes.string
  }),
  state: _react2.default.PropTypes.string,
  postalCode: _react2.default.PropTypes.string,
  addressLineOne: _react2.default.PropTypes.string,
  addressLineTwo: _react2.default.PropTypes.string,
  city: _react2.default.PropTypes.string,
  floatingLabels: _react2.default.PropTypes.bool
};

AddressFields.defaultProps = {
  tealeafIndex: 0,
  tealeafIds: {
    addressLineOne: "address-line-one",
    addressLineTwo: "address-line-two",
    city: "city",
    state: "state",
    postalCode: "postal-code"
  }
};

exports.default = AddressFields;