"use strict";

exports.__esModule = true;

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _comparisonSmallSection = require("./comparison-small-section");

var _comparisonSmallSection2 = _interopRequireDefault(_comparisonSmallSection);

var _comparisonGetData = require("./comparison-get-data");

var _comparisonGetData2 = _interopRequireDefault(_comparisonGetData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Phone factor comparison table.
@examples
```jsx
<Comparison.Small productData={comparisonData}/>
```
@component Comparison.Small
@import {Comparison}
@playground
Comparison.Small
```
<Comparison.Small productData={comparisonData}/>
```
*/
var Small = _react2.default.createClass({
  displayName: "Comparison.Small",

  mixins: [_react2.default.PureRenderMixin],

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
    var _this = this;

    if (this.props.productData) {
      var _ret = function () {
        var prData = (0, _comparisonGetData2.default)(_this.props.productData);

        return {
          v: _react2.default.createElement(
            "div",
            null,
            prData.products.map(function (product, i) {
              return _react2.default.createElement(_comparisonSmallSection2.default, { prData: prData, product: product, key: i });
            })
          )
        };
      }();

      if ((typeof _ret === "undefined" ? "undefined" : (0, _typeof3.default)(_ret)) === "object") return _ret.v;
    }

    return null;
  }
});

exports.default = Small;