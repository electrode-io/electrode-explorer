"use strict";

exports.__esModule = true;

var _react = require("react");

var StoreProp = {
  /**
  Store id
  */
  id: _react.PropTypes.number.isRequired,
  /**
  Store name displayed on in the list
  */
  name: _react.PropTypes.string.isRequired,
  /**
  Store address
  */
  address: _react.PropTypes.string.isRequired,
  /**
  Distance to the store from your location
  */
  distance: _react.PropTypes.string.isRequired,
  /**
  Is true if this store is a preferred store
  */
  preferred: _react.PropTypes.bool,
  /**
  Automation id used for testing
  */
  dataAutomationId: _react.PropTypes.string
};
exports.default = StoreProp;