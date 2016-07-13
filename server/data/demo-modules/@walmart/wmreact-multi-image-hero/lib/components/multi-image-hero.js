"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _bundleImage = require("./bundle-image");

var _bundleImage2 = _interopRequireDefault(_bundleImage);

var _carouselList = require("./carousel-list");

var _carouselList2 = _interopRequireDefault(_carouselList);

var _imageList = require("./image-list");

var _imageList2 = _interopRequireDefault(_imageList);

var _some = require("lodash/some");

var _some2 = _interopRequireDefault(_some);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Number of sections in the bundle where we show carousel at lower breakpoints
var CAROUSEL_CUTOFF = 2;

var getDetails = function getDetails(section) {
  return section.type === "STANDARD" || section.numberComponents < 2 ? "Standard item" : section.numberComponents + " options";
};

var getCarousel = function getCarousel(children) {
  return children.length <= CAROUSEL_CUTOFF ? null : _react2.default.createElement(
    "div",
    { className: "hide-content-l" },
    _react2.default.createElement(
      _carouselList2.default,
      null,
      children
    )
  );
};

var getImageList = function getImageList(children) {
  var responsiveClass = children.length <= CAROUSEL_CUTOFF ? null : "hide-content display-block-l";
  return _react2.default.createElement(
    "div",
    { className: responsiveClass },
    _react2.default.createElement(
      _imageList2.default,
      null,
      children
    )
  );
};

var getHeroBracket = function getHeroBracket(numberSections) {
  return numberSections <= 1 ? null : _react2.default.createElement(
    "div",
    { className: "heading-hero" },
    _react2.default.createElement(
      "div",
      { className: "hero-bracket" },
      _react2.default.createElement(
        "div",
        { className: "hero-text-wrapper text-center" },
        _react2.default.createElement(
          "div",
          { className: "hero-text display-inline-block text-center font-semibold" },
          "Bundle Includes"
        )
      )
    )
  );
};

/**
Hero component for a bundle containing one or several items
@param {object} props - React properties
@returns {ReactElement} The rendered component
@examples
```jsx
<MultiImageHero bundleData={{
  bundleType: "CHOICE_BUNDLE",
  sections: [{
    type: "STANDARD",
    numberComponents: 1,
    title: "Thing 1",
    imageUrl: "image.png"
  },
  {
    type: "REQUIRED",
    numberComponents: 2,
    title: "Thing 2",
    imageUrl: "image.png"
  }]
}} />

```
@component MultiImageHero
@import {MultiImageHero}
@playground
MultiImageHero
```jsx
<MultiImageHero bundleData={{
  bundleType: "CHOICE_BUNDLE",
  sections: [{
    type: "STANDARD",
    numberComponents: 1,
    title: "Thing 1",
    imageUrl: "image.png"
  },
  {
    type: "REQUIRED",
    numberComponents: 2,
    title: "Thing 2",
    imageUrl: "image.png"
  }]
}} />
```
*/
var MultiImageHero = function MultiImageHero(props) {
  var bundleData = props.bundleData;


  var shouldDecorate = bundleData.bundleType === "CHOICE_BUNDLE";
  var shouldShowDetails = (0, _some2.default)(bundleData.sections, function (section) {
    return section.numberComponents > 1;
  });

  var images = bundleData.sections.map(function (section) {
    return _react2.default.createElement(_bundleImage2.default, {
      title: section.title,
      imageUrl: section.imageUrl,
      details: getDetails(section),
      decorate: shouldDecorate,
      showDetails: shouldShowDetails
    });
  });

  return _react2.default.createElement(
    "div",
    { className: "multi-image-hero" },
    getHeroBracket(images.length),
    getImageList(images),
    getCarousel(images)
  );
};

MultiImageHero.propTypes = {
  bundleData: _react.PropTypes.shape({
    bundleType: _react.PropTypes.oneOf(["CHOICE_BUNDLE", "NON_CONFIG"]).isRequired,
    sections: _react.PropTypes.arrayOf(_react.PropTypes.shape({
      title: _react.PropTypes.string.isRequired,
      numberComponents: _react.PropTypes.number.isRequired,
      type: _react.PropTypes.oneOf(["STANDARD", "REQUIRED"]).isRequired,
      imageUrl: _react.PropTypes.string.isRequired
    })).isRequired
  }).isRequired
};

exports.default = MultiImageHero;