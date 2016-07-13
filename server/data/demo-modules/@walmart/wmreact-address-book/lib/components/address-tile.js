"use strict";

exports.__esModule = true;

var _assign = require("babel-runtime/core-js/object/assign");

var _assign2 = _interopRequireDefault(_assign);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _i18n = require("../utils/i18n");

var _i18n2 = _interopRequireDefault(_i18n);

var _addressForm = require("./address-form");

var _addressForm2 = _interopRequireDefault(_addressForm);

var _addressBookUtils = require("../utils/address-book-utils");

var _find = require("lodash/find");

var _find2 = _interopRequireDefault(_find);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddressTile = _react2.default.createClass({
  displayName: "Common-AddressTile",

  propTypes: {
    actions: _react.PropTypes.object,
    address: _react.PropTypes.object,
    countries: _react.PropTypes.array.isRequired,
    defaultCountryCode: _react.PropTypes.string,
    hideCountry: _react.PropTypes.bool,
    showFormButtons: _react.PropTypes.bool,
    hideActionButtons: _react.PropTypes.bool,
    selectedTileMessage: _react.PropTypes.string,
    initialTileMessage: _react.PropTypes.string,
    selected: _react.PropTypes.bool,
    deleting: _react.PropTypes.bool,
    editing: _react.PropTypes.bool,
    loading: _react.PropTypes.bool,
    height: _react.PropTypes.number,
    index: _react.PropTypes.number,
    createAddressForm: _react.PropTypes.func.isRequired
  },

  tileDOMNode: function tileDOMNode() {
    return _reactDom2.default.findDOMNode(this.refs.addressTile);
  },
  address: function address() {
    return this.props.address;
  },
  onSelectClick: function onSelectClick() {
    var _props = this.props;
    var selected = _props.selected;
    var actions = _props.actions;
    var address = _props.address;


    if (!selected) {
      actions.cancelEdit();
      actions.unSelect();
      actions.select(address.id);
      var options = {
        bypassValidation: true,
        isGuest: false,
        OnContinue: false,
        isDefault: true
      };
      actions.submitEdit(address, options);
    }
  },
  checkBox: function checkBox() {
    return _react2.default.createElement("input", {
      "data-automation-id": "address-tile-select-address",
      type: "radio",
      name: "option-address-checkbox",
      checked: this.props.selected ? "checked" : "",
      onClick: function onClick(e) {
        return e.stopPropagation();
      }
    });
  },
  label: function label() {
    var _props2 = this.props;
    var selected = _props2.selected;
    var selectedTileMessage = _props2.selectedTileMessage;
    var initialTileMessage = _props2.initialTileMessage;

    var labelText = (0, _i18n2.default)(selected ? selectedTileMessage : initialTileMessage);
    if (this.props.deleting) {
      labelText = (0, _i18n2.default)("Are you sure you want to delete this address?");
    }
    return _react2.default.createElement(
      "label",
      null,
      labelText
    );
  },
  addressDetails: function addressDetails() {
    var addr = this.address();
    var _props3 = this.props;
    var countries = _props3.countries;
    var defaultCountryCode = _props3.defaultCountryCode;
    var selectedTileMessage = _props3.selectedTileMessage;
    var hideCountry = _props3.hideCountry;

    var country = ((0, _find2.default)(countries, function (_country) {
      return _country.value === addr.countryCode;
    }) || (0, _find2.default)(countries, function (_country) {
      return _country.value === defaultCountryCode;
    })).label;
    var prefAddress = "Preferred address";

    if (addr.registryId) {
      return _react2.default.createElement(
        "div",
        { className: "address-details" },
        _react2.default.createElement(
          "div",
          { className: "recipient-name" },
          (0, _i18n2.default)("Registry address for:")
        ),
        _react2.default.createElement(
          "div",
          null,
          addr.recipientName
        ),
        _react2.default.createElement(
          "div",
          null,
          addr.city,
          ", ",
          addr.state
        ),
        !hideCountry && _react2.default.createElement(
          "div",
          null,
          country
        )
      );
    }

    return _react2.default.createElement(
      "div",
      { className: "address-details" },
      _react2.default.createElement(
        "div",
        { className: "recipient-name " },
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
      !hideCountry && _react2.default.createElement(
        "div",
        null,
        country
      ),
      _react2.default.createElement(
        "div",
        { className: "complete-number " },
        (0, _addressBookUtils.formatPhone)(addr.phone)
      ),
      selectedTileMessage !== prefAddress && this.preferredAddress(addr)
    );
  },
  preferredAddress: function preferredAddress(address) {
    if (address.isDefault) {
      return _react2.default.createElement(
        "div",
        { className: "preferred-address" },
        (0, _i18n2.default)("Preferred Address")
      );
    }
  },
  tileActions: function tileActions() {
    if (this.address().registryId) {
      return null;
    }

    var actions = this.props.actions;
    var loading = this.props.loading;
    var id = this.props.address.id;

    return _react2.default.createElement(
      "div",
      { className: "shipping-address-footer" },
      _react2.default.createElement(
        _button2.default,
        {
          onClick: function onClick() {
            actions.cancelEdit();
            actions.requestDelete(id);
          },
          fakelink: true,
          disabled: loading,
          className: "delete-link" },
        (0, _i18n2.default)("Delete")
      ),
      _react2.default.createElement(
        _button2.default,
        {
          onClick: function onClick() {
            actions.cancelEdit();
            actions.cancelDelete();
            // Adding timeout to make sure old form is deleted before we initialize new form
            // https://gecgithub01.walmart.com/R-User/account/issues/35
            /* eslint-disable no-undef */
            setTimeout(function () {
              actions.requestEdit(id);
            }, 0);
            /* eslint-enable no-undef */
          },
          fakelink: true,
          disabled: loading,
          className: "edit-link" },
        (0, _i18n2.default)("Edit")
      ),
      _react2.default.createElement(
        _button2.default,
        { onClick: function onClick() {
            return actions.submitDelete(id);
          },
          mini: true,
          disabled: loading,
          className: "delete-button" },
        (0, _i18n2.default)("Delete")
      ),
      _react2.default.createElement(
        _button2.default,
        { onClick: function onClick() {
            return actions.cancelDelete();
          },
          fakelink: true,
          disabled: loading,
          className: "cancel-link" },
        (0, _i18n2.default)("Cancel")
      )
    );
  },
  formFlyout: function formFlyout() {
    var address = this.address();
    var _props4 = this.props;
    var countries = _props4.countries;
    var createAddressForm = _props4.createAddressForm;
    var editing = _props4.editing;
    var defaultCountryCode = _props4.defaultCountryCode;
    var hideCountry = _props4.hideCountry;
    var hideActionButtons = _props4.hideActionButtons;
    var showFormButtons = _props4.showFormButtons;


    if (!editing) {
      return null;
    }

    var StatefulAddressForm = createAddressForm({
      AddressFormComponent: _addressForm2.default,

      initialValues: (0, _assign2.default)(address, {
        countryCode: address.countryCode || defaultCountryCode
      }),

      countries: countries,
      hideCountry: hideCountry,
      hideActionButtons: hideActionButtons,
      showFormButtons: showFormButtons
    });

    return _react2.default.createElement(StatefulAddressForm, { actions: this.props.actions });
  },
  colRowClass: function colRowClass() {
    var ALPHA = "address-col-alpha";
    var BETA = "address-col-beta";
    var GAMMA = "address-col-gamma";
    if (this.props.index <= 3) {
      return ALPHA + " " + BETA + " " + GAMMA;
    }
    if (this.props.index <= 6) {
      return BETA + " " + GAMMA;
    }
    if (this.props.index <= 8) {
      return GAMMA;
    }
    return false;
  },
  nthChild: function nthChild(val1, val2) {
    val1 = parseFloat(val1);
    val2 = parseFloat(val2);
    return "nth-" + val1 + "np" + (val2 % val1 || val1);
  },
  render: function render() {
    var addr = this.address();
    var _props5 = this.props;
    var editing = _props5.editing;
    var deleting = _props5.deleting;
    var selected = _props5.selected;


    var tileClass = (0, _classnames2.default)("address-tile", {
      selected: selected,
      "delete-confirmation": deleting,
      "address-book-enabled-element": editing,
      "address-tile-preferred": addr.isDefault
    });

    var colClass = (0, _classnames2.default)(["Common-AddressTile", "address-col", this.nthChild(4, this.props.index), this.nthChild(3, this.props.index), this.nthChild(2, this.props.index), this.colRowClass()]);

    var _props6 = this.props;
    var height = _props6.height;
    var loading = _props6.loading;


    return _react2.default.createElement(
      "div",
      { className: colClass },
      _react2.default.createElement(
        "div",
        { className: "address-col-inner" },
        _react2.default.createElement(
          "div",
          { ref: "addressTile",
            className: tileClass,
            style: height ? { height: height } : null },
          _react2.default.createElement(
            "div",
            { className: "address-tile-clickable", onClick: this.onSelectClick },
            loading && selected && _react2.default.createElement(
              "div",
              { className: "spinner-backdrop" },
              _react2.default.createElement("div", { className: "spinner preferred-address-spinner" })
            ),
            _react2.default.createElement(
              "div",
              { className: "radio option-custom checkbox-container" },
              this.checkBox(),
              this.label()
            )
          ),
          this.addressDetails(),
          this.tileActions()
        )
      ),
      this.formFlyout()
    );
  }
});

AddressTile.defaultProps = {
  hideCountry: false
};

exports.default = AddressTile;