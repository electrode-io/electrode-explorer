"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _wmreactHideable = require("@walmart/wmreact-hideable");

var _wmreactHideable2 = _interopRequireDefault(_wmreactHideable);

var _mediaSelector = require("@walmart/wmreact-layout/lib/components/media-selector");

var _mediaSelector2 = _interopRequireDefault(_mediaSelector);

var _comparisonSmallSection = require("./comparison-small-section");

var _comparisonSmallSection2 = _interopRequireDefault(_comparisonSmallSection);

var _comparisonSmall = require("./comparison-small");

var _comparisonSmall2 = _interopRequireDefault(_comparisonSmall);

var _comparisonLarge = require("./comparison-large");

var _comparisonLarge2 = _interopRequireDefault(_comparisonLarge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Comparison table that switch from small to large based on size.
@examples
```jsx
<Comparison productData={comparisonData}/>
```
@component Comparison
@import {Comparison}
@playground
Comparison.Large
```
<Comparison productData={comparisonData}/>
```
*/
var Comparison = _react2.default.createClass({
  displayName: "Comparison",

  mixins: [(0, _wmreactHideable2.default)()],

  propTypes: {
    /**
    The product data
    */
    productData: _react2.default.PropTypes.array
  },

  getDefaultProps: function getDefaultProps() {
    return {
      productData: []
    };
  },
  render: function render() {
    return _react2.default.createElement(
      _mediaSelector2.default,
      null,
      _react2.default.createElement(_comparisonSmall2.default, {
        visibleWidths: ["small"],
        productData: this.props.productData
      }),
      _react2.default.createElement(_comparisonLarge2.default, {
        visibleWidths: ["medium", "large", "x-large"],
        productData: this.props.productData
      })
    );
  }
});

Comparison.Small = _comparisonSmall2.default;
Comparison.Large = _comparisonLarge2.default;
Comparison.SmallSection = _comparisonSmallSection2.default;

exports.default = Comparison;