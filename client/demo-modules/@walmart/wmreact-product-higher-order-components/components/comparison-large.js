"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _layout = require("@walmart/wmreact-layout/lib/components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _carousel = require("@walmart/wmreact-carousel/lib/components/carousel");

var _carousel2 = _interopRequireDefault(_carousel);

var _comparisonGetData = require("./comparison-get-data");

var _comparisonGetData2 = _interopRequireDefault(_comparisonGetData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Large factor comparison table.
@examples
```jsx
<Comparison.Large productData={comparisonData}/>
```
@component Comparison.Large
@import {Comparison}
@playground
Comparison.Large
```
<Comparison.Large productData={comparisonData}/>
```
*/
var Large = _react2.default.createClass({
  displayName: "Comparison.Large",

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
  _renderAttributeNames: function _renderAttributeNames(prData) {
    var attrRows = [];
    prData.attributes.forEach(function (attr, i) {
      attrRows.push(_react2.default.createElement(
        "tr",
        {
          key: "attr-row-" + i,
          className: "comparison-attribute-row comparison-attribute-header" },
        _react2.default.createElement(
          "th",
          { className: "ComparisonKey-cell ComparisonHeaderRow" },
          attr.category || "Features"
        )
      ));

      attr.value.forEach(function (name, j) {
        attrRows.push(_react2.default.createElement(
          "tr",
          { className: "comparison-value-row", key: attr.category + "-" + j },
          _react2.default.createElement(
            "td",
            { className: "ComparisonKey-cell" },
            _react2.default.createElement("span", { dangerouslySetInnerHTML: { __html: name } })
          )
        ));
      });
    });

    return attrRows;
  },
  _renderAttributesTable: function _renderAttributesTable(prData) {
    return _react2.default.createElement(
      "div",
      { className: "ComparisonKey" },
      _react2.default.createElement(
        "table",
        { className: "comparison-attributes table no-margin" },
        _react2.default.createElement(
          "tbody",
          null,
          _react2.default.createElement(
            "tr",
            { className: "comparison-attribute-row" },
            _react2.default.createElement(
              "th",
              null,
              _react2.default.createElement(
                "div",
                { className: "ComparisonHeader" },
                _react2.default.createElement("img", {
                  className: "ComparisonHeader-brandImage",
                  src: prData.brand
                })
              )
            )
          ),
          this._renderAttributeNames(prData)
        )
      )
    );
  },
  _renderFeatures: function _renderFeatures(attributes, features) {
    var featureRows = [];
    attributes.forEach(function (attr, i) {
      featureRows.push(_react2.default.createElement(
        "tr",
        {
          key: "feature-" + i,
          className: "comparison-value-row comparison-split-row" },
        _react2.default.createElement(
          "td",
          { className: "ComparisonKey-cell ComparisonHeaderRow" },
          " "
        )
      ));

      attr.value.forEach(function (name, j) {
        featureRows.push(_react2.default.createElement(
          "tr",
          { className: "comparison-attribute-row", key: attr.category + "-row-" + j },
          _react2.default.createElement(
            "td",
            { className: "ComparisonTable-cell" },
            _react2.default.createElement("span", { dangerouslySetInnerHTML: { __html: features[name] } })
          )
        ));
      });
    });

    return featureRows;
  },
  _renderProduct: function _renderProduct(prData, product) {
    return _react2.default.createElement(
      "table",
      { className: "comparison-values table no-margin" },
      _react2.default.createElement(
        "tbody",
        null,
        _react2.default.createElement(
          "tr",
          { className: "comparison-header-row" },
          _react2.default.createElement(
            "th",
            null,
            _react2.default.createElement(
              "a",
              { className: "ComparisonHeader", href: "/ip/" + product.id },
              _react2.default.createElement("img", { className: "ComparisonHeader-image", src: product.url }),
              _react2.default.createElement("span", {
                className: "ComparisonHeader-title",
                dangerouslySetInnerHTML: { __html: product.title }
              })
            )
          )
        ),
        this._renderFeatures(prData.attributes, product.features)
      )
    );
  },
  renderOriginal: function renderOriginal(prData) {
    return _react2.default.createElement(
      "div",
      { className: "ComparisonRoot" },
      _react2.default.createElement(
        "span",
        { className: "ComparisonRoot-marker font-weight-semibold" },
        "You are viewing"
      ),
      this._renderProduct(prData, prData.products[0])
    );
  },
  _renderComparisons: function _renderComparisons(prData) {
    var _this = this;

    var compares = prData.products.slice(1);
    return _react2.default.createElement(
      _carousel2.default,
      { slidesToShow: 2, slidesToScroll: 1 },
      compares.map(function (product, i) {
        return _react2.default.createElement(
          "div",
          { key: i },
          _this._renderProduct(prData, product)
        );
      })
    );
  },
  render: function render() {
    if (this.props.productData) {
      var prData = (0, _comparisonGetData2.default)(this.props.productData || []);
      return _react2.default.createElement(
        _layout2.default,
        { "small-sizes": [3, 3, 6], className: "ComparisonTable" },
        this._renderAttributesTable(prData),
        this.renderOriginal(prData),
        this._renderComparisons(prData)
      );
    }

    return null;
  }
});

exports.default = Large;