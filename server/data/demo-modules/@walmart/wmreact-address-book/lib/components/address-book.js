"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _map = require("lodash/map");

var _map2 = _interopRequireDefault(_map);

var _values = require("lodash/values");

var _values2 = _interopRequireDefault(_values);

var _keys3 = require("lodash/keys");

var _keys4 = _interopRequireDefault(_keys3);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _alert = require("@walmart/wmreact-forms/lib/components/alert");

var _alert2 = _interopRequireDefault(_alert);

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _i18n = require("../utils/i18n");

var _i18n2 = _interopRequireDefault(_i18n);

var _addressTile = require("./address-tile");

var _addressTile2 = _interopRequireDefault(_addressTile);

var _addressForm = require("./address-form");

var _addressForm2 = _interopRequireDefault(_addressForm);

var _addressBookActionButtons = require("./address-book-action-buttons");

var _addressBookActionButtons2 = _interopRequireDefault(_addressBookActionButtons);

var _newAddressTile = require("./new-address-tile");

var _newAddressTile2 = _interopRequireDefault(_newAddressTile);

var _addressBookUtils = require("../utils/address-book-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global window */


var AddressBook = _react2.default.createClass({
  displayName: "Common-AddressBook",

  propTypes: {
    // Actions and callbacks
    actions: _react.PropTypes.object,
    onCancel: _react.PropTypes.func,
    onContinue: _react.PropTypes.func,

    // Address Book data
    addresses: _react.PropTypes.object,
    countries: _react.PropTypes.array.isRequired,
    defaultCountryCode: _react.PropTypes.string,
    hideCountry: _react.PropTypes.bool,
    hideAddressBookOverlay: _react.PropTypes.bool,
    hideActionButtons: _react.PropTypes.bool,
    showFormButtons: _react.PropTypes.bool,

    // Address Book look and feel
    initialTileMessage: _react.PropTypes.node,
    selectedTileMessage: _react.PropTypes.node,

    // Address Book alerts and errors
    alert: _react.PropTypes.object,
    invalidAddressError: _react.PropTypes.object,

    // Address Book state properties
    loading: _react.PropTypes.bool,
    adding: _react.PropTypes.bool,
    editing: _react.PropTypes.string,
    deleting: _react.PropTypes.string,
    deleteConfirmed: _react.PropTypes.bool,
    selected: _react.PropTypes.string,

    // Address Book behavior properties
    showFormWhenEmpty: _react.PropTypes.bool,

    createAddressForm: _react.PropTypes.func.isRequired
  },

  getInitialState: function getInitialState() {
    return { tileHeights: [] };
  },
  onContinue: function onContinue() {
    var _props = this.props;
    var addresses = _props.addresses;
    var selected = _props.selected;


    this.props.onContinue(addresses[selected]);
  },
  componentDidUpdate: function componentDidUpdate(prevProps) {
    var oldAddressCount = (0, _keys2.default)(prevProps.addresses || {}).length;
    var newAddressCount = (0, _keys2.default)(this.props.addresses || {}).length;

    if (oldAddressCount !== newAddressCount) {
      this.recalculateTileHeights();
    }
  },
  shouldComponentUpdate: function shouldComponentUpdate(newProps) {
    var _props2 = this.props;
    var editing = _props2.editing;
    var adding = _props2.adding;
    var willEdit = newProps.editing;
    var willAdd = newProps.adding;

    // Do not re-render entire address book when in adding/editing mode

    return !(editing && willEdit === editing || adding && willAdd === adding);
  },
  componentDidMount: function componentDidMount() {
    (0, _addressBookUtils.addEvent)(window, "resize", this.recalculateTileHeights);
    this.recalculateTileHeights();
  },
  componentWillMount: function componentWillMount() {
    var _props3 = this.props;
    var createAddressForm = _props3.createAddressForm;
    var countries = _props3.countries;
    var hideCountry = _props3.hideCountry;
    var showFormButtons = _props3.showFormButtons;
    var hideActionButtons = _props3.hideActionButtons;


    this.StatefulAddressForm = createAddressForm({
      AddressFormComponent: _addressForm2.default,
      initialValues: {
        isDefault: true,
        state: "AL"
      },
      countries: countries,
      hideCountry: hideCountry,
      showFormButtons: showFormButtons,
      hideCancelButton: true,
      hideActionButtons: hideActionButtons
    });
  },
  componentWillUnmount: function componentWillUnmount() {
    (0, _addressBookUtils.removeEvent)(window, "resize", this.recalculateTileHeights);
  },
  findRowsTiles: function findRowsTiles() {
    var rows = {};
    var tiles = [];

    // Identify the rows of tiles in the address book
    for (var i = 0; i <= (0, _keys2.default)(this.props.addresses).length; i++) {
      var tile = this.refs["tile" + i];
      var tileDOMNode = tile.tileDOMNode();

      // Reset heights in order to see browser calculated heights
      tileDOMNode.style.height = "";

      var top = _reactDom2.default.findDOMNode(tile).offsetTop;
      rows[top] = rows[top] || [];
      rows[top].push(tile);

      tiles.push({ node: tileDOMNode, row: (0, _keys4.default)(rows).length - 1 });
    }

    return { rows: rows, tiles: tiles };
  },
  recalculateTileHeights: function recalculateTileHeights() {
    var _props4 = this.props;
    var adding = _props4.adding;
    var editing = _props4.editing;


    if ((0, _isEmpty2.default)(this.refs) || adding || editing) {
      return;
    }

    var rowsTiles = this.findRowsTiles();

    // Get max height for each tile row
    var heights = (0, _map2.default)(rowsTiles.rows, function (row) {
      return Math.max.apply(Math, (0, _map2.default)(row, function (tile) {
        return tile.tileDOMNode().offsetHeight;
      }));
    });

    if (heights.length === rowsTiles.tiles.length) {
      // If all tiles are stacked - let browser calculate height
      rowsTiles.tiles.forEach(function (tile) {
        return tile.node.style.height = "";
      });
    } else {
      rowsTiles.tiles.forEach(function (tile) {
        return tile.node.style.height = heights[tile.row] + "px";
      });
    }
  },
  getTileHeight: function getTileHeight(index) {
    return this.state.tileHeights[index] || null;
  },
  seeAllSavedAddress: function seeAllSavedAddress() {
    return _react2.default.createElement(
      "div",
      { className: "address-col-full address-col-inner expand-addresses-wrapper",
        style: { display: "none" } },
      _react2.default.createElement(
        "button",
        { className: "btn btn-link" },
        (0, _i18n2.default)("See all saved addresses")
      )
    );
  },
  addressBookOverlay: function addressBookOverlay() {
    var _this = this;

    var _props5 = this.props;
    var adding = _props5.adding;
    var editing = _props5.editing;
    var loading = _props5.loading;

    var className = (0, _classnames2.default)("address-book-overlay", { "active": adding || editing });

    return(
      // Make the overlay clickable so tapping outside of the form would cancel the form
      // unless address book is in the loading state.
      _react2.default.createElement("div", { className: className,
        onClick: function onClick() {
          if (!loading) {
            _this.props.actions.cancelEdit();
          }
        } })
    );
  },
  addressBookAlert: function addressBookAlert() {
    var _props6 = this.props;
    var adding = _props6.adding;
    var editing = _props6.editing;
    var alert = _props6.alert;

    // Show an alert above the address book when alert exists and user has *no* address form open

    return alert && !adding && !editing ? _react2.default.createElement(_alert2.default, (0, _extends3.default)({}, alert, { isBlock: true, isAboveForm: true })) : null;
  },
  addressTiles: function addressTiles() {
    var _this2 = this;

    var _props7 = this.props;
    var selected = _props7.selected;
    var editing = _props7.editing;
    var deleting = _props7.deleting;
    var deleteConfirmed = _props7.deleteConfirmed;
    var createAddressForm = _props7.createAddressForm;


    return (0, _values2.default)(this.props.addresses).filter(function (address) {
      return address.id !== deleteConfirmed;
    }).map(function (address, index) {
      return _react2.default.createElement(_addressTile2.default, (0, _extends3.default)({}, _this2.props, {
        deleting: deleting === address.id,
        selected: selected === address.id,
        editing: editing === address.id,
        height: _this2.getTileHeight(index),
        createAddressForm: createAddressForm,
        address: address,
        index: index + 1,
        ref: "tile" + index,
        key: index }));
    });
  },
  render: function render() {
    // Don't render the address book until initial addresses loading is complete
    if (!this.props.addresses) {
      return null;
    }

    if (this.props.showFormWhenEmpty && (0, _isEmpty2.default)(this.props.addresses)) {
      var StatefulAddressForm = this.StatefulAddressForm;
      var actions = this.props.actions;

      if (!StatefulAddressForm) {
        return null;
      }
      return _react2.default.createElement(StatefulAddressForm, { actions: actions, embedded: true });
    }

    var index = (0, _keys2.default)(this.props.addresses).length;

    return _react2.default.createElement(
      "div",
      { className: "shipping-addresses grid accordion-form show-all Common-AddressBook" },
      this.addressBookAlert(),
      _react2.default.createElement(
        "div",
        { className: "address-grid" },
        this.addressTiles(),
        this.seeAllSavedAddress(),
        _react2.default.createElement(_newAddressTile2.default, (0, _extends3.default)({}, this.props, {
          height: this.getTileHeight(index),
          ref: "tile" + index }))
      ),
      !this.props.hideAddressBookOverlay && this.addressBookOverlay,
      this.props.hideActionButtons ? null : _react2.default.createElement(_addressBookActionButtons2.default, { onCancel: this.props.onCancel, onContinue: this.onContinue })
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

exports.default = AddressBook;