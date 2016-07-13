"use strict";

exports.__esModule = true;

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _automationUtils = require("@walmart/automation-utils");

var _wmreactImageUtils = require("@walmart/wmreact-image-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/prop-types: 0 */


var AUTOMATION_CONTEXT = "VariantItem";

/**
 A variant expander button
 @examples
 ```jsx
<Variants.Item index={0}>S</Variants.Item>
 ```

 But really this should be inside a variants block, like so:

 ```jsx
<Variants>
  <Variants.Item index={0}>S</Variants.Item>
  <Variants.Item index={1} selected={true}>M</Variants.Item>
  <Variants.Item index={2}>L</Variants.Item>
  <Variants.Item index={3} disabled={true}>XL</Variants.Item>
  <Variants.Item index={4} unavailable={true}>XXL</Variants.Item>
</Variants>
 ```
 @return {ReactElement} Element tree
 @param {object} props Props
 @component VariantItem
 @import {Variants}
 @references Variants
 @playground
 VariantItem
 ```
 <div className="variants">
  <Variants.Item index={0}>S</Variants.Item>
 </div>
 ```
 */
var VariantItem = function VariantItem(props) {
  var _getSwatchStyle = function _getSwatchStyle() {
    var isImageSwatch = props.isImageSwatch;
    var swatch = props.swatch;

    var style = {};
    var imageUrl = (0, _wmreactImageUtils.checkImageSrc)(swatch, 60, 60);
    if (isImageSwatch) {
      style.backgroundImage = "url('" + imageUrl + "')";
      style.backgroundSize = "100% 100%";
      return style;
    }
    style.background = swatch;
    return style;
  };

  var _getClasses = function _getClasses() {
    var selected = props.selected;
    var disabled = props.disabled;
    var unavailable = props.unavailable;

    return (0, _classnames2.default)(props.className, "variant", {
      selected: selected,
      disabled: disabled,
      "variant-unavailable": unavailable
    });
  };

  var _renderSwatch = function _renderSwatch() {
    var selected = props.selected;


    var classes = (0, _classnames2.default)(props.className, {
      "variant-swatch": true
    });

    return _react2.default.createElement(
      "span",
      (0, _extends3.default)({
        className: classes,
        style: _getSwatchStyle()
      }, (0, _automationUtils.getDataAutomationIdPair)("rest.index" + (selected ? "-selected" : ""), AUTOMATION_CONTEXT, process)),
      props.children
    );
  };

  var _renderInput = function _renderInput() {
    var children = props.children;
    var type = props.type;
    var displayName = props.displayName;
    var className = props.className;
    var rest = (0, _objectWithoutProperties3.default)(props, ["children", "type", "displayName", "className"]);

    var classes = (0, _classnames2.default)(className, "variant-container", {
      "variant-with-display-name": !!displayName
    });
    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({
        className: classes
      }, rest, (0, _automationUtils.getDataAutomationIdPair)("rest.index" + (rest.selected ? "-selected" : ""), AUTOMATION_CONTEXT, process)),
      _react2.default.createElement("input", { type: type, name: "variant-swatcher-item-" + rest.index }),
      _react2.default.createElement(
        "label",
        { className: _getClasses(),
          htmlFor: "variant-swatcher-item-" + rest.index },
        rest.swatch ? _renderSwatch() : children,
        displayName ? _react2.default.createElement(
          "div",
          { className: "variant-name" },
          displayName
        ) : null
      )
    );
  };

  var _renderButton = function _renderButton() {
    var children = props.children;
    var disabled = props.disabled;
    var rest = (0, _objectWithoutProperties3.default)(props, ["children", "disabled"]);

    return _react2.default.createElement(
      "button",
      (0, _extends3.default)({}, rest, {
        className: _getClasses() }),
      rest.swatch ? _renderSwatch() : children
    );
  };

  var type = props.type;

  return type === "radio" || type === "checkbox" ? _renderInput() : _renderButton();
};

VariantItem.displayName = "Variants.Item";

VariantItem.propTypes = {
  /**
   Boolean for displaying the variant name
   */
  displayName: _react2.default.PropTypes.bool,
  /**
   Index of the variant swatch
   */
  index: _react2.default.PropTypes.number.isRequired,
  /**
   Any child node.
   */
  children: _react2.default.PropTypes.node.isRequired,
  /**
   True if this variant is selected
   */
  selected: _react2.default.PropTypes.bool,
  /**
   True if this variant is disabled
   */
  disabled: _react2.default.PropTypes.bool,
  /**
   True if this variant is unavailable
   */
  unavailable: _react2.default.PropTypes.bool,
  /**
   Swatch property can be a image url or a hex
   color value.
   */
  swatch: _react2.default.PropTypes.string,
  /**
   When set to true, uses the swatch prop as a
   background image else expects swatch property
   to be a hex color value.
   */
  isImageSwatch: _react2.default.PropTypes.bool,
  /**
   The type of control to use for this variant.
   */
  type: _react2.default.PropTypes.oneOf(["button", "checkbox", "radio"]),
  /**
   Any additional style classes.
   */
  className: _react2.default.PropTypes.string
};

VariantItem.defaultProps = {
  displayName: "",
  selected: false,
  disabled: false,
  unavailable: false,
  swatch: "",
  isImageSwatch: false,
  className: "",
  type: "button"
};

exports.default = VariantItem;