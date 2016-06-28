"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _i18n = require("../utils/i18n");

var _i18n2 = _interopRequireDefault(_i18n);

var _addressForm = require("./address-form");

var _addressForm2 = _interopRequireDefault(_addressForm);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddressTile = _react2.default.createClass({
  displayName: "Common-NewAddressTile",

  propTypes: {
    actions: _react.PropTypes.object,
    height: _react.PropTypes.number,
    adding: _react.PropTypes.bool,
    countries: _react.PropTypes.array,
    hideCountry: _react.PropTypes.bool,
    hideActionButtons: _react.PropTypes.bool,
    showFormButtons: _react.PropTypes.bool,
    createAddressForm: _react.PropTypes.func.isRequired
  },

  tileDOMNode: function tileDOMNode() {
    return _reactDom2.default.findDOMNode(this.refs.addressTile);
  },
  addressFormFlyout: function addressFormFlyout() {
    var _props = this.props;
    var createAddressForm = _props.createAddressForm;
    var countries = _props.countries;
    var hideCountry = _props.hideCountry;
    var hideActionButtons = _props.hideActionButtons;
    var showFormButtons = _props.showFormButtons;
    var actions = _props.actions;
    var adding = _props.adding;

    var StatefulAddressForm = createAddressForm({
      AddressFormComponent: _addressForm2.default,
      initialValues: {
        state: "AL"
      },
      countries: countries,
      hideCountry: hideCountry,
      hideActionButtons: hideActionButtons,
      showFormButtons: showFormButtons
    });

    return adding && _react2.default.createElement(StatefulAddressForm, { actions: actions });
  },
  cleanRequestEdit: function cleanRequestEdit() {
    this.props.actions.cancelEdit();
    this.props.actions.cancelDelete();
    this.props.actions.requestEdit();
  },
  render: function render() {
    var classes = (0, _classnames2.default)("address-col", "add-address-col", {
      "address-book-enabled-element": this.props.adding
    });

    return _react2.default.createElement(
      "div",
      { className: classes },
      _react2.default.createElement(
        "div",
        { className: "address-col-inner",
          onClick: this.cleanRequestEdit },
        _react2.default.createElement(
          "div",
          { ref: "addressTile",
            className: "add-address-tile address-tile"
          },
          _react2.default.createElement(
            "h3",
            null,
            _react2.default.createElement(
              _button2.default,
              {
                fakelink: true,
                "data-automation-id": "new-address-tile-add-new-address",
                tealeafId: "COAC2ShpAddrAddNewAddrLnk"
              },
              _react2.default.createElement(_icon2.default, { name: "add" }),
              (0, _i18n2.default)("Add new address")
            )
          )
        )
      ),
      this.addressFormFlyout()
    );
  }
});

exports.default = AddressTile;