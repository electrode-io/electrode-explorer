"use strict";

exports.__esModule = true;

var _react = require("react");

var _addToCartProptype = require("./add-to-cart-proptype");

var _addToCartProptype2 = _interopRequireDefault(_addToCartProptype);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LegalPromptProptype = {
  /**
  Determines this component's state.
  */
  legalPromptStatus: _react.PropTypes.oneOf(["ACCEPTED", "PROMPT", "DECLINE", "NOT_YET_ACCEPTED", "MORE_INFO"]),
  /**
  Callback for when add to cart button is clicked
  */
  onClick: _react.PropTypes.func,
  /**
  Callback when more info is clicked
  */
  onMoreInfoClicked: _react.PropTypes.func,
  /**
  Callback when more info modal is closed
  */
  onMoreInfoClosed: _react.PropTypes.func,
  /**
  Callback when legal prompt is accpeted
  */
  onAcceptClicked: _react.PropTypes.func,
  /**
  Callback when legal prompt is declined
  */
  onDeclineClicked: _react.PropTypes.func,
  /**
  Callback when legal prompt flyout is closed
  */
  onFlyoutClosed: _react.PropTypes.func,
  /**
  props for add to cart
  */
  addToCartProps: _react.PropTypes.shape(_addToCartProptype2.default).isRequired
};

exports.default = LegalPromptProptype;