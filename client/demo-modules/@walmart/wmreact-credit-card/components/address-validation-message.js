"use strict";

exports.__esModule = true;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _omit = require("lodash/omit");

var _omit2 = _interopRequireDefault(_omit);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// TODO: reconciliation needed. Simply slimmed down from:
// https://gecgithub01.walmart.com/react/address-book/blob/
// master/src/enums/address-validation-status.js
var MULTIPLE_MATCHES = "MULTIPLE_MATCHES";

// TODO: dumd stub for i18n until this is moved into its own component
// then would be a good time to react-intl this
// TODO: Make this its own reusable component
// to be shared across address-book and credit-card widget
var i18n = function i18n(str) {
  return str;
};

exports.default = _react2.default.createClass({
  displayName: "Customer-AddressValidationMessage",
  propTypes: {
    // Actions and callbacks
    actions: _react.PropTypes.object,
    onContinue: _react.PropTypes.func,

    // Essential address data
    address: _react.PropTypes.object,

    // State properties
    embedded: _react.PropTypes.bool,
    loading: _react.PropTypes.bool,
    primary: _react.PropTypes.bool,

    // Errors
    alert: _react.PropTypes.object,
    invalidAddressError: _react.PropTypes.object.isRequired
  },

  onUseAddressClick: function onUseAddressClick(addr) {
    this.props.actions.submitEdit((0, _assign2.default)({}, this.props.address, addr), {
      bypassValidation: true,
      onContinue: this.props.embedded ? this.props.onContinue : null
    });
  },
  closeButton: function closeButton(text) {
    return _react2.default.createElement(
      _button2.default,
      { fakelink: true,
        disabled: this.props.loading,
        className: "edit-address-validation",
        onClick: this.props.actions.clearErrors },
      text
    );
  },
  address: function address(addr, noSelect) {
    var _this = this;

    var button = !noSelect ? _react2.default.createElement(
      _button2.default,
      { onClick: function onClick() {
          return _this.onUseAddressClick((0, _omit2.default)(addr, "extendedPostalCode", "stateOrProvinceCode"));
        } },
      i18n("Select")
    ) : null;

    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "div",
        { className: "recipient-name" },
        addr.firstName,
        " ",
        addr.lastName
      ),
      _react2.default.createElement(
        "div",
        null,
        addr.addressLineOne
      ),
      _react2.default.createElement(
        "div",
        null,
        addr.addressLineTwo
      ),
      _react2.default.createElement(
        "div",
        null,
        addr.city,
        ", ",
        addr.state,
        " ",
        addr.postalCode
      ),
      _react2.default.createElement("br", null),
      button
    );
  },
  unmatched: function unmatched() {
    var _this2 = this;

    var _props = this.props;
    var loading = _props.loading;
    var address = _props.address;
    var primary = _props.primary;

    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "b",
          null,
          i18n("You entered:")
        )
      ),
      _react2.default.createElement("br", null),
      this.address(address, true),
      _react2.default.createElement(
        _button2.default,
        { primary: primary,
          compact: true,
          spinner: loading,
          disabled: loading,
          className: "button-save-address",
          onClick: function onClick() {
            return _this2.props.onContinue();
          } },
        i18n("Save Address")
      ),
      this.closeButton(i18n("Edit"))
    );
  },
  multipleMatches: function multipleMatches(addresses) {
    var _this3 = this;

    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "ul",
        { className: "multiple-addresses" },
        addresses.map(function (addr, index) {
          return _react2.default.createElement(
            "li",
            { className: "multiple-address-block", key: index },
            _this3.address(addr)
          );
        })
      ),
      _react2.default.createElement("br", null),
      this.closeButton(i18n("Cancel"))
    );
  },
  render: function render() {
    var _props$invalidAddress = this.props.invalidAddressError.serverResponse;
    var addresses = _props$invalidAddress.addresses;
    var postalCodeStatus = _props$invalidAddress.postalCodeStatus;

    var isMultiple = postalCodeStatus === MULTIPLE_MATCHES && addresses && addresses.length;

    var message = i18n(isMultiple ? "We identified multiple validated addresses. Please choose from the list below." : "We can't verify this address. Want to save it anyway?");

    return _react2.default.createElement(
      "div",
      { className: "grid address-validation" },
      this.props.alert,
      _react2.default.createElement(
        "div",
        { className: "validation-wrap" },
        _react2.default.createElement(
          "div",
          null,
          message
        ),
        _react2.default.createElement("br", null),
        isMultiple ? this.multipleMatches(addresses) : this.unmatched()
      )
    );
  }
});