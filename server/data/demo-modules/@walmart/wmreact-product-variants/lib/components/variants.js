"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _variantExpander = require("./variant-expander");

var _variantExpander2 = _interopRequireDefault(_variantExpander);

var _variantItem = require("./variant-item");

var _variantItem2 = _interopRequireDefault(_variantItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 Variants container
 @examples
 ```jsx
 <div>
  <Variants>
    <Variants.Item>S</Variants.Item>
    <Variants.Item selected={true}>M</Variants.Item>
    <Variants.Item>L</Variants.Item>
    <Variants.Item disabled={true}>XL</Variants.Item>
    <Variants.Item unavailable={true}>XXL</Variants.Item>
  </Variants>
  <Variants small={true} swatches={true}>
    <Variants.Item type='checkbox' disabled={true} swatch='#fead41'>Yellow</Variants.Item>
    <Variants.Item type='checkbox' selected={true} swatch='#d40b23'>Red</Variants.Item>
    <Variants.Item type='checkbox' unavailable={true} swatch='#47d9bf'>Teal</Variants.Item>
    <Variants.Expander />
  </Variants>
  <Variants swatches={true}>
    <Variants.Item type='radio' selected={true} swatch='#fead41'>Yellow</Variants.Item>
    <Variants.Item type='radio' disabled={true} swatch='#d40b23'>Red</Variants.Item>
    <Variants.Item type='radio' unavailable={true} swatch='#47d9bf'>Teal</Variants.Item>
    <Variants.Item index={2} type='radio' isImageSwatch={true}
      swatch='http://placekitten.com/g/1024/1024'>
      Kitten
    </Variants.Item>
    <Variants.Expander active={true} less={true} />
  </Variants>
 </div>
 ```
 @return {ReactElement} Element tree
 @param {object} props Props
 @component Variants
 @import {Variants}
 @references Variants
 @playground
 Variants
 ```
 <div>
  <h4>Variants as buttons</h4>
  <Variants>
    <Variants.Item index={0}>S</Variants.Item>
    <Variants.Item index={1} selected={true}>M</Variants.Item>
    <Variants.Item index={2}>L</Variants.Item>
    <Variants.Item index={3} disabled={true}>XL</Variants.Item>
    <Variants.Item index={4} unavailable={true}>XXL</Variants.Item>
  </Variants>
 <h4>Small variants</h4>
  <Variants small={true} swatches={true}>
    <Variants.Item index={0} type='checkbox' disabled={true} swatch='#fead41'>
      Yellow
    </Variants.Item>
    <Variants.Item index={1} type='checkbox' selected={true} swatch='#d40b23'>
      Red
    </Variants.Item>
    <Variants.Item index={2} type='checkbox' unavailable={true} swatch='#47d9bf'>
      Teal
    </Variants.Item>
    <Variants.Expander />
  </Variants>
 <h4>Large variants</h4>
  <Variants swatches={true}>
    <Variants.Item index={0} type='radio' selected={true} swatch='#fead41'>
      Yellow
    </Variants.Item>
    <Variants.Item index={1} type='radio' disabled={true} swatch='#d40b23'>
      Red
    </Variants.Item>
    <Variants.Item index={2} type='radio' unavailable={true} swatch='#47d9bf'>
      Teal
    </Variants.Item>
    <Variants.Item index={2} type='radio' isImageSwatch={true}
      swatch='http://placekitten.com/g/1024/1024'>
      Kitten
    </Variants.Item>
    <Variants.Expander active={true} less={true} />
  </Variants>
 </div>
 ```
 */
var Variants = function Variants(props) {
  var _getClasses = function _getClasses(_ref) {
    var small = _ref.small;
    var swatches = _ref.swatches;
    var className = _ref.className;

    return (0, _classnames2.default)("variants", {
      "variants-small": small === undefined ? false : small,
      "variants-swatches": swatches === undefined ? false : swatches
    }, className);
  };

  return _react2.default.createElement(
    "div",
    { className: _getClasses(props) },
    props.children
  );
};

Variants.displayName = "Variants";

Variants.propTypes = {
  /**
   Child nodes, usually an instance of Variant.Item or Variant.Expander
   */
  children: _react2.default.PropTypes.node.isRequired,
  /**
   True if the variants are small
   */
  small: _react2.default.PropTypes.bool,
  /**
   True if the variants are swatches
   */
  swatches: _react2.default.PropTypes.bool,
  /**
   Any additional style classes
   */
  className: _react2.default.PropTypes.string
};

Variants.defaultProps = {
  small: false,
  swatches: false,
  className: ""
};

Variants.Item = _variantItem2.default;
Variants.Expander = _variantExpander2.default;

exports.default = Variants;