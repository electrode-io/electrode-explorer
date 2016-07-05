"use strict";

exports.__esModule = true;

var _react = require("react");

var _storesProp = require("./stores-prop");

var _storesProp2 = _interopRequireDefault(_storesProp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var StoresProp = {
  /**
  List of preferred stores
  */
  preferredStores: _react.PropTypes.arrayOf(_react.PropTypes.shape(_storesProp2.default)),

  /**
  List of near by stores
  */
  nearbyStores: _react.PropTypes.arrayOf(_react.PropTypes.shape(_storesProp2.default)),

  /**
  User location
  */
  location: _react.PropTypes.string.isRequired,
  /**
  Automation id for testing
  */
  dataAutomationId: _react.PropTypes.string,
  /**
  Additional classes
  */
  className: _react.PropTypes.string
};

exports.default = StoresProp;