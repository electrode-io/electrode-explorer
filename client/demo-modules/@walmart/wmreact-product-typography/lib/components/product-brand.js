"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint react/prop-types: 0 */


var REGEX = /\W/g;
var HYPHEN = "-";
var TOPIC = "/tp/";

/**
This component displays the product brand as a link. Clicking
on the brand link takes user to the topic page

```jsx
<ProductBrand name="samsung tv"/>
```

@return {ReactElement} Element tree
@param {object} props Props
@import {ProductBrand}
@flags noVisibleRender
@component ProductBrand
@playground
Brand
```
<ProductBrand name="samsung tv"/>
```
*/

exports.default = function (props) {
  var _getCanonicalTopicId = function _getCanonicalTopicId(brandName) {
    if (brandName) {
      return brandName.trim().replace(REGEX, HYPHEN);
    }
    return brandName;
  };

  var _getTopicUrl = function _getTopicUrl(brandName) {
    return TOPIC + _getCanonicalTopicId(brandName);
  };

  var _getBrandElClasses = function _getBrandElClasses() {
    return (0, _classnames2.default)("prod-BrandName", props.className);
  };

  var topicUrl = _getTopicUrl(props.name);
  return _react2.default.createElement(
    "a",
    { href: topicUrl, className: _getBrandElClasses() },
    _react2.default.createElement(
      "span",
      null,
      props.name
    )
  );
};