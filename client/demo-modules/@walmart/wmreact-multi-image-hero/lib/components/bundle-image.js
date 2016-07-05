"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getComponentsHeader = function getComponentsHeader(decorate, showDetails, details) {
  return decorate && showDetails ? _react2.default.createElement(
    "div",
    { className: "details" },
    details
  ) : null;
};

/**
Hero image of a bundle component.
@param {object} props - React properties
@returns {ReactElement} The rendered component
@examples
```jsx
<BundleImage
  imageUrl="test.png"
  title="Item Title"
  numberComponents={5}
  decorate={true}
  showHeader={false}
  />
```
@component BundleImage
@import {BundleImage}
@playground
BundleImage
```
<BundleImage
  imageUrl="test.png"
  title="Item Title"
  numberComponents={5}
  decorate={true}
  showHeader={false}
  />
```
*/
var BundleImage = function BundleImage(props) {
  var decorate = props.decorate;
  var showDetails = props.showDetails;
  var details = props.details;
  var imageUrl = props.imageUrl;
  var title = props.title;
  var rest = (0, _objectWithoutProperties3.default)(props, ["decorate", "showDetails", "details", "imageUrl", "title"]);


  var outerClass = decorate ? "decorated-item" : "";

  return _react2.default.createElement(
    "div",
    { className: "bundle-image display-inline-block" },
    _react2.default.createElement(
      "div",
      { className: outerClass },
      getComponentsHeader(decorate, showDetails, details),
      _react2.default.createElement(_image2.default, (0, _extends3.default)({ src: imageUrl }, rest))
    ),
    _react2.default.createElement(
      "div",
      { className: "item-title" },
      _react2.default.createElement(
        "h3",
        null,
        title
      )
    )
  );
};

BundleImage.propTypes = {
  decorate: _react.PropTypes.bool,
  showHeader: _react.PropTypes.bool,
  details: _react.PropTypes.string,
  imageUrl: _react.PropTypes.string,
  title: _react.PropTypes.string
};

BundleImage.defaultProps = {
  decorate: false,
  showHeader: false,
  numberComponents: 1,
  imageUrl: "http://i5.walmartimages.com/no-image.png",
  title: ""
};

exports.default = BundleImage;