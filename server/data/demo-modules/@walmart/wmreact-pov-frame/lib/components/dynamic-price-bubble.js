"use strict";

exports.__esModule = true;

var _isFinite = require("babel-runtime/core-js/number/is-finite");

var _isFinite2 = _interopRequireDefault(_isFinite);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _priceFormatter = require("@walmart/wmreact-formatters/lib/components/price-formatter");

var _priceFormatter2 = _interopRequireDefault(_priceFormatter);

var _classnames2 = require("classnames");

var _classnames3 = _interopRequireDefault(_classnames2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Button overlays on POVs
*/

var DynamicPriceBubble = function (_Component) {
  (0, _inherits3.default)(DynamicPriceBubble, _Component);

  function DynamicPriceBubble() {
    (0, _classCallCheck3.default)(this, DynamicPriceBubble);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  /**
  Split out the location into x/y co-ordinate as per the specs.
  @param {string} location  location of overlay button like "A10"
  @returns {object} corresponding x and y co-ordinates.
  */

  DynamicPriceBubble.prototype._splitLocation = function _splitLocation(location) {
    if (!location) {
      return {};
    }

    var CHAR_CODE_A = "A".charCodeAt(0);

    var locationX = parseInt(location.substring(1), 10) - 1;
    var locationY = location[0].charCodeAt(0) - CHAR_CODE_A;

    return { locationX: locationX, locationY: locationY };
  };

  /**
  Check for rollback. Used for custom styling in case of rollback.
  @param {string} priceDisplay texts for mobile
  @returns {boolean} whether it is rollback or not.
  */


  DynamicPriceBubble.prototype._isRollback = function _isRollback(priceDisplay) {
    return priceDisplay === "Rollback";
  };

  /**
  generates css classes for bubble container based on different params.
  @param {string} locationX  x co-ordinate of button.
  @param {string} locationY  y co-ordinate of button.
  @param {string} priceDisplay mobile text
  @returns {string} generated css classes
  */


  DynamicPriceBubble.prototype._getBubbleClasses = function _getBubbleClasses(locationX, locationY, priceDisplay) {
    var _classnames;

    return (0, _classnames3.default)((_classnames = {
      "dynamic-price-bubble": true,
      "dynamic-price-bubble-rollback": this._isRollback(priceDisplay)
    }, _classnames["dynamic-price-bubble-x-" + locationX] = true, _classnames["dynamic-price-bubble-y-" + locationY] = true, _classnames["u-borderRadiusFull"] = true, _classnames));
  };

  /**
  generates the jsx for desktop text
  @param {string} bubbleText messaging text for desktop.
  @returns {ReactElement} generated jsx
  */


  DynamicPriceBubble.prototype._renderDesktopText = function _renderDesktopText(bubbleText) {
    if (bubbleText) {
      var classes = (0, _classnames3.default)("dynamic-price-text", "dynamic-price-text-manual", "dynamic-price-text-small", "hide-content-max-m");

      return _react2.default.createElement(
        "span",
        { className: classes },
        bubbleText
      );
    }
  };

  /**
  Renders was price.
  @param {string} listPrice price to display in was price.
  @returns {ReactElement} generated was price jsx.
  */


  DynamicPriceBubble.prototype._renderWasPrice = function _renderWasPrice(listPrice) {
    var classes = (0, _classnames3.default)("dynamic-price-text dynamic-price-text-was", "dynamic-price-text-small hide-content-max-m");

    return _react2.default.createElement(
      "span",
      { className: classes },
      "was $",
      listPrice
    );
  };

  /**
  Check for props validity
  @param {string} locationX x co-ordinate of bubble.
  @param {string} locationY y co-ordinate of bubble.
  @param {string} currentPrice price to display on bubble.
  @returns {boolean} if props are valid.
  */


  DynamicPriceBubble.prototype._areValidProps = function _areValidProps(locationX, locationY, currentPrice) {
    if (!currentPrice) {
      return false;
    }

    return (0, _isFinite2.default)(locationX) && (0, _isFinite2.default)(locationY) && locationX >= 0 && locationY >= 0;
  };

  /**
  generates css classes for bubble text messaging.
  @param {string} priceDisplay mobile text
  @param {string} bubbleText desktop text
  @returns {string} generated css classes
  */


  DynamicPriceBubble.prototype._getBubbleTextClasses = function _getBubbleTextClasses(priceDisplay, bubbleText) {
    return (0, _classnames3.default)({
      "dynamic-price-text": true,
      "font-semibold": this._isRollback(priceDisplay),
      "hide-content-m": !!bubbleText
    });
  };

  DynamicPriceBubble.prototype.render = function render() {
    var _props = this.props;
    var currentPrice = _props.currentPrice;
    var listPrice = _props.listPrice;
    var location = _props.location;
    var defaultColor = _props.defaultColor;
    var hexCode = _props.hexCode;
    var priceDisplay = _props.priceDisplay;
    var bubbleText = _props.bubbleText;

    var _splitLocation2 = this._splitLocation(location);

    var locationX = _splitLocation2.locationX;
    var locationY = _splitLocation2.locationY;

    // bail out in cases of invalid props.

    if (!this._areValidProps(locationX, locationY, currentPrice)) {
      return null;
    }

    var bubbleClasses = this._getBubbleClasses(locationX, locationY, priceDisplay);
    var bubbleTextClasses = this._getBubbleTextClasses(priceDisplay, bubbleText);

    var btnStyle = {
      backgroundColor: hexCode,
      color: defaultColor
    };

    return _react2.default.createElement(
      "div",
      { className: bubbleClasses, style: btnStyle },
      _react2.default.createElement(
        "span",
        { className: bubbleTextClasses },
        priceDisplay
      ),
      this._renderDesktopText(bubbleText),
      _react2.default.createElement(
        "span",
        { className: "dynamic-price font-semibold" },
        _priceFormatter2.default.displayPrice(currentPrice, { pov: true })
      ),
      this._isRollback(priceDisplay) && listPrice && this._renderWasPrice(listPrice)
    );
  };

  return DynamicPriceBubble;
}(_react.Component);

exports.default = DynamicPriceBubble;


DynamicPriceBubble.displayName = "POVFrame.DynamicPriceBubble";

DynamicPriceBubble.propTypes = {
  /**
  Location string for positioning the button in grid.
  */
  location: _react.PropTypes.string.isRequired,
  /**
  Price to display. It can be from IRO response or manualPrice set in tempo.
  */
  currentPrice: _react.PropTypes.string,
  /**
  To Show was price incase of Rollback.
  */
  listPrice: _react.PropTypes.string,
  /**
  Text to display inside bubble for mobile breakpoint.
  */
  priceDisplay: _react.PropTypes.oneOf(["from", "just", "Rollback"]),
  /**
  Text to display inside bubble for desktop breakpoint.
  */
  bubbleText: _react.PropTypes.string,
  /**
  Text color for messages.
  */
  defaultColor: _react.PropTypes.string,
  /**
  Background color of buttons.
  */
  hexCode: _react.PropTypes.string,
  /**
  unique id to be used in analytics.
  */
  uid: _react.PropTypes.string.isRequired
};

DynamicPriceBubble.defaultProps = {
  hexCode: "",
  defaultColor: "",
  bubbleText: "",
  listPrice: ""
};