"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _categoryUtils = require("@walmart/category-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Themed tile Component to be used along with product tiles in product carousels
@examples
```jsx
<ThemedTile
  url: "//www.walmart.com",
  imageUrl: "//some-background-image.png"
/>

<ThemedTile
  url: "//www.walamrt.com",
  imageUrl: "//some-background-image.png",
  button: {
    textColor: "#f2f2f2",
    color: "#333",
    text: "Shop Now"
  }
/>
```
@component ThemedTile
@import {ThemedTile}
@playground
ThemedTile
```
<ThemedTile
  url="//www.walamrt.com"
  imageUrl="//some-background-image.png"
/>

<ThemedTile
  url="//www.walmart.com"
  imageUrl="//some-background-image.png"
  button={{
    textColor: "#f2f2f2",
    bolor: "#333",
    text: "Shop Now"
  }}
/>
```
*/

var ThemedTile = function (_Component) {
  (0, _inherits3.default)(ThemedTile, _Component);

  function ThemedTile() {
    (0, _classCallCheck3.default)(this, ThemedTile);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  /**
    * Renders the button
    * @param {String} url target clickthrough url
    * @param {Object} button  button configuration
    * @returns {ReactElement} button ReactElement
    */

  ThemedTile.prototype._renderButton = function _renderButton(url, button) {
    if (!button) {
      return null;
    }

    var color = button.color;
    var textColor = button.textColor;
    var text = button.text;


    var inlineStyle = {
      backgroundColor: color,
      color: textColor
    };

    return _react2.default.createElement(
      "div",
      { className: "button-wrapper" },
      _react2.default.createElement(
        "a",
        {
          href: url,
          className: "btn btn-primary",
          type: "button",
          style: inlineStyle
        },
        text
      )
    );
  };

  /**
    * Renders the overlay link for the tile.
    * @param {String} url target clickthrough url
    * @returns {ReactElement} overlay link ReactElement
    */


  ThemedTile.prototype._renderOverlayLink = function _renderOverlayLink(url) {
    return _react2.default.createElement("a", {
      className: "Tile-linkOverlay",
      href: url,
      tabIndex: "-1",
      "aria-hidden": "true"
    });
  };

  ThemedTile.prototype.render = function render() {
    var _props = this.props;
    var imageUrl = _props.imageUrl;
    var url = _props.url;
    var button = _props.button;
    var moduleType = _props.moduleType;

    var inlineStyle = {};

    if (imageUrl) {
      inlineStyle.backgroundImage = "url(" + imageUrl + ")";
    }

    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({ className: "Tile Tile-themed",
        style: inlineStyle
      }, (0, _categoryUtils.getTempoModuleAutomationId)(moduleType, process)),
      this._renderOverlayLink(url),
      this._renderButton(url, button)
    );
  };

  return ThemedTile;
}(_react.Component);

exports.default = ThemedTile;


ThemedTile.displayName = "ThemedTile";

ThemedTile.propTypes = {
  /**
  Background image source for the tile.
  */
  imageUrl: _react.PropTypes.string,
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: _react.PropTypes.string,
  /**
  target clickThrough url
  */
  url: _react.PropTypes.string.isRequired,
  /**
  Theme Button with custom background and text color
  */
  button: _react.PropTypes.shape({
    /**
    Theme button background color
    */
    color: _react.PropTypes.string.isRequired,
    /**
    Theme Button text color
    */
    textColor: _react.PropTypes.string.isRequired,
    /**
    Button text
    */
    text: _react.PropTypes.string.isRequired
  })
};

ThemedTile.defaultProps = {
  moduleType: "ThemedTile"
};