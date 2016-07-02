"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _submapFlyout = require("./submap-flyout");

var _submapFlyout2 = _interopRequireDefault(_submapFlyout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Submap Price component
 * Component will display the submap message.
 *
 * @class PriceSubmap
 * @component PriceSubmap
 * @exports PriceSubmap
 * @import {PriceSubmap}
 *
 * @param {string} message submap message to be shown instead of Price.
 * @param {boolean} outOfStock for toggling display classes.
 *
 * @example
 * ```jsx
 * <Price.Submap  message="See details in cart" outOfStock />
 * ```
 *
 * @playground
 * Submap
 * ```
 * <Price.Submap message="See details in cart" />
 *
 * @param {object} props object with following properties className, message,
 *  outOfStock.
 * @returns {ReactElement} A React Element
 */

var PriceSubmap = function PriceSubmap(props) {
  var className = props.className;
  var message = props.message;
  var outOfStock = props.outOfStock;
  var showFlyout = props.showFlyout;
  var checkoutFlyout = props.checkoutFlyout;
  var flyoutPosition = props.flyoutPosition;
  var buttonTrigger = props.buttonTrigger;
  var flyoutOnly = props.flyoutOnly;

  var classes = (0, _classnames2.default)("Price-submap", "display-inline-block", "arrange-fill", "font-semibold", outOfStock ? "u-textGray" : "u-textBlue", className);

  return _react2.default.createElement(
    "div",
    { className: classes },
    _react2.default.createElement(
      "span",
      { className: "Price-old-text" },
      message
    ),
    showFlyout && _react2.default.createElement(_submapFlyout2.default, {
      checkoutContent: checkoutFlyout,
      position: flyoutPosition,
      buttonTrigger: buttonTrigger,
      message: message,
      flyoutOnly: flyoutOnly
    })
  );
};

PriceSubmap.propTypes = {
  /**
   * Custom classes for customizing the Old Price component
   */
  className: _react.PropTypes.string,
  /*
   * Submap string
   */
  message: _react.PropTypes.string.isRequired,
  /*
   * Show out of stock treatment?
   */
  outOfStock: _react.PropTypes.bool,
  /**
   * Show submap flyout?
   */
  showFlyout: _react.PropTypes.bool,
  /**
   * only show flyout, no slide panel
   */
  flyoutOnly: _react.PropTypes.bool,
  /**
   * button that triggers the flyout
   */
  buttonTrigger: _react.PropTypes.element,
  /**
  * True to use checkout submap flyout content. Otherwise will use cart version.
  */
  checkoutFlyout: _react.PropTypes.bool,
  /**
  * Position of the submap flyout.
  */
  flyoutPosition: _react.PropTypes.oneOf(["left", "right", "top", "bottom"])
};

PriceSubmap.defaultProps = {
  className: "",
  outOfStock: false,
  showFlyout: false,
  checkoutFlyout: false,
  flyoutPosition: "right"
};

exports.default = PriceSubmap;