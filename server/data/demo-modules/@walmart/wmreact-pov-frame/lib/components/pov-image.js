"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

var _imageUtils = require("../helpers/image-utils");

var _povImageMaps = require("./pov-image-maps");

var _povImageMaps2 = _interopRequireDefault(_povImageMaps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _renderClickThroughImage = function _renderClickThroughImage(props) {
  var alt = props.alt;
  var clickThrough = props.clickThrough;
  var title = props.title;
  var src = props.src;
  var height = props.height;
  var width = props.width;
  var lazy = props.lazy;
  var isMobile = props.isMobile;

  var imageProps = { alt: alt, title: title, height: height, width: width, lazy: lazy };

  imageProps.src = (0, _imageUtils.getTorbitImage)(src, isMobile);
  return _react2.default.createElement(
    _link2.default,
    { href: clickThrough.value },
    _react2.default.createElement(_image2.default, imageProps)
  );
};

/*eslint-disable max-len*/
/**
An image link component which wraps a image inside a link.
Current use-case is to use inside POVSlide frame.

@param {Object} props React props for the component
@returns {ReactElement} Image link component
@examples
ImageLink
```jsx
<ImageLink
  url="http://www.walmart.com",
  image= {{
    src: "http://i5.walmartimages.com/dfwrs/4ff4222f-c72c/k2-_3d50319d-d056-44d6-9f03-465511812f77.v1.jpg",
    alt: "Chrome cast audio",
    width: 1364,
    height: 300
  }}
/>
```

@import {POVFrame.Image}
@component POVFrame.Image
@playground
POVFrame.Image
```
<POVFrame.Image
  url="http://www.walmart.com",
  image= {{
    src: "http://i5.walmartimages.com/dfwrs/4ff4222f-c72c/k2-_3d50319d-d056-44d6-9f03-465511812f77.v1.jpg",
    alt: "Chrome cast audio",
    width: 1364,
    height: 300
  }}
  />
```
*/
/*eslint-disable max-len*/
var POVImage = function POVImage(props) {
  var type = props.clickThrough.type;


  if (type === "url") {
    return _renderClickThroughImage(props);
  } else if (type === "map") {
    return _react2.default.createElement(POVImage.Maps, props);
  }

  return _react2.default.createElement("span", null);
};

POVImage.displayName = "POVFrame.Image";

POVImage.Maps = _povImageMaps2.default;

POVImage.propTypes = {
  /**
  Alt text for image.
  */
  alt: _react.PropTypes.string,
  /**
  identifier used in analytics.
  */
  assetId: _react.PropTypes.string,
  /**
  An object with target url information in form of simple link or image maps.
  */
  clickThrough: _react.PropTypes.object.isRequired,
  /**
  Content Type of image file. To be used in module preview.
  */
  contentType: _react.PropTypes.string,
  /**
  Image height.
  */
  height: _react.PropTypes.string.isRequired,
  /**
  Size of image file in bytes. To be used in module preview.
  */
  size: _react.PropTypes.string,
  /**
  Image source.
  */
  src: _react.PropTypes.string.isRequired,
  /**
  Image title.
  */
  title: _react.PropTypes.string,
  /**
  identifier used in analytics.
  */
  uid: _react.PropTypes.string,
  /**
  Image width.
  */
  width: _react.PropTypes.string.isRequired,
  /**
   * lazy load image
   */
  lazy: _react.PropTypes.bool,
  /**
    * is mobile or desktop?
    */
  isMobile: _react.PropTypes.bool
};

exports.default = POVImage;