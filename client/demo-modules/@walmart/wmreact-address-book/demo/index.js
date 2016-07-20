"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _redux = require("redux");

var _reduxThunk = require("redux-thunk");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = require("redux-logger");

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

var _reduxAddressBook = require("@walmart/redux-address-book");

var _addressBookOptions = require("./address-book-options");

var _regionCodes = require("../src/locale/region-codes");

var _index = require("../bundle.min");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create a store
var finalCreateStore = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxLogger2.default)()))(_redux.createStore);

// Import Address Book presentational components

var store = finalCreateStore((0, _redux.combineReducers)({
  // place all your other reducers here:
  // ...
  addressBook: _reduxAddressBook.addressBookReducer,
  addressBookForm: _reduxAddressBook.addressBookFormReducer
}));

var UsAddressBookWidget = (0, _reduxAddressBook.createAddressBookWidget)(_index.AddressBook, store, _addressBookOptions.usOptions);

// Bind AddressBook action creators to store dispatch method
var configuredUsAddressBookActions = (0, _redux.bindActionCreators)(UsAddressBookWidget.addressBookActions, store.dispatch);

// Drop the created container component where you need it

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    configuredUsAddressBookActions.loadAddresses();

    _this.state = {
      countries: [{ value: _regionCodes.regionCodes.US.value, label: _regionCodes.regionCodes.US.name }],
      defaultCountryCode: _regionCodes.regionCodes.US.value
    };
    return _this;
  }

  App.prototype.render = function render() {
    // Create a high-order AddressBook component bound to the store
    var AddressBookContainer = UsAddressBookWidget.AddressBookContainer;

    return _react2.default.createElement(
      "div",
      { className: "component-documentation demo checkout-address-book" },
      _react2.default.createElement(AddressBookContainer, {
        countries: this.state.countries,
        defaultCountryCode: this.state.defaultCountryCode,
        isGuest: false,
        isVisible: true,
        onCancel: function onCancel() {},
        onContinue: function onContinue() {},
        showFormWhenEmpty: true })
    );
  };

  return App;
}(_react.Component);

exports.default = App;
