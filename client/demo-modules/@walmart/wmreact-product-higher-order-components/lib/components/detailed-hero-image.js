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

var _layoutHelper = require("@walmart/wmreact-layout/lib/components/helpers/layout-helper");

var _layoutHelper2 = _interopRequireDefault(_layoutHelper);

var _productShortDescription = require("@walmart/wmreact-product-typography/lib/components/product-short-description");

var _productShortDescription2 = _interopRequireDefault(_productShortDescription);

var _productTitle = require("@walmart/wmreact-product-typography/lib/components/product-title");

var _productTitle2 = _interopRequireDefault(_productTitle);

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _imageUtils = require("@walmart/wmreact-image-utils/lib/utils/image-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = _react2.default.Component;
var PropTypes = _react2.default.PropTypes;


var DEFAULT_WIDTH = 450;
var DEFAULT_HEIGHT = 450;

var AUTOMATION_CONTEXT = "DetailedHeroImage";

/**
 A Hero image with a description.
 ```jsx
 <div>
   <DetailedHeroImage
     title="Here Is A Collection Item"
     description={`It is pretty cool and even describes itself
      <div>It can even take HTML</div>`}
     imageWidth={400}
     imageHeight={250}
     imageUrl="http://loremflickr.com/400/250/puppy"
   />
 </div>
 ```
 @import {DetailedHeroImage}
 @component DetailedHeroImage
 @playground
 DetailedHeroImage
 ```
 <div>
   <DetailedHeroImage
     title="Here Is A Collection Item"
     description={`It is pretty cool and even describes itself
      <div>It can even take HTML</div>`}
     imageWidth={400}
     imageHeight={250}
     imageUrl="http://loremflickr.com/400/250/puppy"
   />
 </div>
 ```
*/

var sizes = (0, _layoutHelper2.default)({
  "large-sizes": [6],
  "medium-sizes": [6],
  "small-sizes": [12]
}).join(" ");

var styles = {
  "DetailedHeroImage-Image": "DetailedHeroImage-Image",
  "DetailedHeroImage-Image-Container": "DetailedHeroImage-Image-Container " + sizes,
  "DetailedHeroImage-Separator": "DetailedHeroImage-Separator",
  "DetailedHeroImage-HeadingContainer": "DetailedHeroImage-HeadingContainer",
  "DetailedHeroImage-DescriptionContainer": "DetailedHeroImage-DescriptionContainer " + sizes + " hide-content-max-m",
  "DetailedHeroImage": "DetailedHeroImage"
};

var DetailedHeroImage = function (_Component) {
  (0, _inherits3.default)(DetailedHeroImage, _Component);

  function DetailedHeroImage() {
    (0, _classCallCheck3.default)(this, DetailedHeroImage);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  DetailedHeroImage.prototype._renderImage = function _renderImage(_ref) {
    var imageUrl = _ref.imageUrl;
    var title = _ref.title;
    var imageWidth = _ref.imageWidth;
    var imageHeight = _ref.imageHeight;

    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({
        className: styles["DetailedHeroImage-Image-Container"]
      }, (0, _automationIdUtils.getDataAutomationIdPair)(AUTOMATION_CONTEXT, "Image", process)),
      _react2.default.createElement(_image2.default, {
        width: imageWidth,
        height: imageHeight,
        alt: title,
        className: styles["DetailedHeroImage-Image"],
        src: (0, _imageUtils.checkImageSrc)(imageUrl, imageHeight, imageWidth) })
    );
  };

  DetailedHeroImage.prototype._renderDescription = function _renderDescription(title, description, onClick) {
    return _react2.default.createElement(
      "div",
      { className: styles["DetailedHeroImage-DescriptionContainer"] },
      _react2.default.createElement(
        "div",
        { className: styles["DetailedHeroImage-HeadingContainer"] },
        this._renderTitle(title)
      ),
      _react2.default.createElement("hr", { className: styles["DetailedHeroImage-Separator"] }),
      _react2.default.createElement(_productShortDescription2.default, (0, _extends3.default)({
        content: description,
        onClick: onClick,
        moreInfoLabel: "Read more…",
        big: true
      }, (0, _automationIdUtils.getDataAutomationIdPair)(AUTOMATION_CONTEXT, "Description", process)))
    );
  };

  DetailedHeroImage.prototype._renderTitle = function _renderTitle(title) {
    return _react2.default.createElement(_productTitle2.default, (0, _extends3.default)({
      title: title,
      big: true,
      maxLines: 2
    }, (0, _automationIdUtils.getDataAutomationIdPair)(AUTOMATION_CONTEXT, "Title", process)));
  };

  DetailedHeroImage.prototype.render = function render() {
    var _props = this.props;
    var title = _props.title;
    var description = _props.description;
    var onClick = _props.onClick;

    return _react2.default.createElement(
      "div",
      { className: "DetailedHeroImage-Container" },
      _react2.default.createElement(
        "div",
        { className: "hide-content-m" },
        this._renderTitle(title)
      ),
      _react2.default.createElement(
        "div",
        { className: "DetailedHeroImage Grid" },
        this._renderImage(this.props),
        this._renderDescription(title, description, onClick)
      )
    );
  };

  return DetailedHeroImage;
}(Component);

DetailedHeroImage.displayName = "DetailedHeroImage";

DetailedHeroImage.propTypes = {
  /**
  The title of the item or collection.
  */
  title: PropTypes.string.isRequired,
  /**
  The description of the item or collection.
  */
  description: PropTypes.string.isRequired,
  /**
  The width of the hero image.
  */
  imageWidth: PropTypes.number,
  /**
  The height of the hero image.
  */
  imageHeight: PropTypes.number,
  /**
  This is a URL of the hero image.
  */
  imageUrl: PropTypes.string.isRequired,
  /**
  Click handler for read more link
  */
  onClick: PropTypes.func
};

DetailedHeroImage.defaultProps = {
  imageWidth: DEFAULT_WIDTH,
  imageHeight: DEFAULT_HEIGHT,
  onClick: function onClick() {}
};

exports.default = DetailedHeroImage;