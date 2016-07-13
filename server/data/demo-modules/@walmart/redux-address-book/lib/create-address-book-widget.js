"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _addressBookActions = require("./actions/address-book-actions");

var _addressBookActions2 = _interopRequireDefault(_addressBookActions);

var _addressApi = require("./api/address-api");

var _addressApi2 = _interopRequireDefault(_addressApi);

var _configureAddressFormCreator = require("./configure-address-form-creator");

var _configureAddressFormCreator2 = _interopRequireDefault(_configureAddressFormCreator);

var _addressValidationApi = require("./api/address-validation-api");

var _addressValidationApi2 = _interopRequireDefault(_addressValidationApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Creates and configures an address book component and connects it to the provided app store
 *
 * @param {Component} AddressBookComponent a presentational Address Book component
 * @param {Object} store a store to maintain the address book state
 *   NOTE: address book expects `addressBook` attribute on the state object provided by a store
 * @param {Object} options an address book options, including API endpoint urls, etc.
 *
 * @return {Object} an Address Book Container component
 */

exports.default = function (AddressBookComponent, store) {
  var options = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

  var configuredActions = (0, _addressBookActions2.default)({
    onLoading: options.onLoading,

    addressApi: options.addressApi || (0, _addressApi2.default)({
      addressApiUrlPrefix: options.addressApiUrlPrefix
    }),

    addressValidationApi: options.avsApi || (0, _addressValidationApi2.default)({
      avsApiUrlPrefix: options.avsApiUrlPrefix
    })
  });
  var createAddressForm = (0, _configureAddressFormCreator2.default)();

  var mapActions = function mapActions(dispatch) {
    return { actions: (0, _redux.bindActionCreators)(configuredActions, dispatch) };
  };
  var mapState = function mapState(state) {
    return state.addressBook || {};
  };

  var ConnectedAddressBook = (0, _reactRedux.connect)(mapState, mapActions)(AddressBookComponent);

  return {
    AddressBookContainer: function (_Component) {
      _inherits(AddressBookContainer, _Component);

      function AddressBookContainer() {
        _classCallCheck(this, AddressBookContainer);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(AddressBookContainer).apply(this, arguments));
      }

      _createClass(AddressBookContainer, [{
        key: "render",
        value: function render() {
          return _react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(ConnectedAddressBook, _extends({}, this.props, {
              createAddressForm: createAddressForm
            }))
          );
        }
      }]);

      return AddressBookContainer;
    }(_react.Component),

    addressBookActions: configuredActions
  };
};