"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _automationUtils = require("@walmart/automation-utils");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _flag = require("@walmart/wmreact-product-descriptors/lib/components/flag");

var _flag2 = _interopRequireDefault(_flag);

var _productImage = require("./product-image");

var _productImage2 = _interopRequireDefault(_productImage);

var _stars = require("@walmart/wmreact-product-descriptors/lib/components/stars");

var _stars2 = _interopRequireDefault(_stars);

var _textTruncate = require("@walmart/wmreact-product-typography/lib/components/text-truncate");

var _textTruncate2 = _interopRequireDefault(_textTruncate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
This component display basic product information on the marketplace page.
```jsx
  <ProductShortInfo
    title="Apple iPad mini 2 16GB Wifi"
    imageUrl="https://placehold.it/150X150"
    imageOnClick={(e)=>{e.preventDefault();console.log("Clicked Image")}}
    quantityIncluded={3}
    stars={{
      total: 5,
      average: 4,
      count: 37
    }}
    starsOnClick={(e)=>{e.preventDefault();console.log("Clicked Stars")}}
    shortDescription={{
      maxLines: 8,
      asHTML: true,
      text: "<li>7.9&quot; Retina display</li><li>A7 chip with M7 motion coprocessor</li><li>Front
      and Back cameras</li><li>Lorem Ipsum is simply dummy text</li> Lorem Ipsum has been the
      industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
      of type and scrambled it to make a type specimen book."
    }}
    bottomLinkText="Quick Look"
    bottomLinkOnClick={(e)=>{e.preventDefault();console.log("Clicked Quicklook")}}
  />
*/

var AUTOMATION_CONTEXT = "ProductShortInfo";

var ProductShortInfo = function ProductShortInfo(props) {
  var bottomLinkOnClick = props.bottomLinkOnClick;
  var bottomLinkText = props.bottomLinkText;
  var className = props.className;
  var infoClassName = props.infoClassName;
  var imageClassName = props.imageClassName;
  var imageOnClick = props.imageOnClick;
  var imageSize = props.imageSize;
  var imageUrl = props.imageUrl;
  var quantityIncluded = props.quantityIncluded;
  var shortDescription = props.shortDescription;
  var stars = props.stars;
  var starsOnClick = props.starsOnClick;
  var title = props.title;


  var _getTitle = function _getTitle() {
    return quantityIncluded > 1 ? title + " - " + quantityIncluded + " included" : "" + title;
  };

  var _renderProductImage = function _renderProductImage() {
    var productImage = void 0;

    if (imageOnClick) {
      productImage = _react2.default.createElement(
        "button",
        (0, _extends3.default)({}, (0, _automationUtils.getDataAutomationIdPair)("imageButton", AUTOMATION_CONTEXT), {
          className: "ProductShortInfo-imageButton",
          onClick: imageOnClick
        }),
        _react2.default.createElement(_productImage2.default, { productTitle: title, size: imageSize, imageUrl: imageUrl })
      );
    } else {
      productImage = _react2.default.createElement(_productImage2.default, { productTitle: title, size: imageSize, imageUrl: imageUrl });
    }

    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)("ProductShortInfo-image", imageClassName) },
      productImage
    );
  };

  var _renderQuantityFlag = function _renderQuantityFlag() {
    return quantityIncluded > 1 ? _react2.default.createElement(
      "div",
      { className: "ProductShortInfo-quantityIncluded" },
      _react2.default.createElement(_flag2.default, { text: quantityIncluded + " included" })
    ) : null;
  };

  var _renderStars = function _renderStars() {
    var total = stars.total;
    var count = stars.count;
    var average = stars.average;


    return stars && total && count && average ? _react2.default.createElement(_stars2.default, (0, _extends3.default)({ size: "small" }, stars, { onCountClick: starsOnClick })) : null;
  };

  var _renderShortDescription = function _renderShortDescription() {
    var maxLines = shortDescription.maxLines;
    var asHTML = shortDescription.asHTML;
    var text = shortDescription.text;


    return text && text.length ? _react2.default.createElement(
      "div",
      { className: "ProductShortInfo-shortDescription" },
      _react2.default.createElement(_textTruncate2.default, {
        line: maxLines,
        doInsertHTMLTitle: asHTML,
        text: text })
    ) : null;
  };

  var _renderModalLink = function _renderModalLink(link) {
    return link && link.length ? _react2.default.createElement(
      "div",
      { className: "ProductShortInfo-bottomLink tile-controls tile-controls-dotted" },
      _react2.default.createElement(
        "a",
        { className: "dropdown-link", href: "#", onClick: bottomLinkOnClick },
        link
      )
    ) : null;
  };

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({}, (0, _automationUtils.getDataAutomationIdPair)("ProductShortInfo", AUTOMATION_CONTEXT, process), {
      className: (0, _classnames2.default)("ProductShortInfo", className)
    }),
    _renderProductImage(),
    _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)("ProductShortInfo-details", infoClassName) },
      _renderQuantityFlag(),
      _react2.default.createElement(
        "h4",
        (0, _extends3.default)({}, (0, _automationUtils.getDataAutomationIdPair)("Title", AUTOMATION_CONTEXT, process), {
          className: "product-title display-inline"
        }),
        _getTitle()
      ),
      _renderStars(),
      _renderShortDescription(),
      _renderModalLink(bottomLinkText)
    )
  );
};

ProductShortInfo.displayName = "ProductShortInfo";

ProductShortInfo.propTypes = {
  /**
   Bottom link handler
   */
  bottomLinkOnClick: _react.PropTypes.function,
  /**
   Bottom link text
   */
  bottomLinkText: _react.PropTypes.string,
  /**
   Any additonal component style classes
   */
  className: _react.PropTypes.string,
  /**
   Image container optional class
   */
  imageClassName: _react.PropTypes.string,
  /**
   Image button handler
   */
  imageOnClick: _react.PropTypes.function,
  /**
   The size of the item preview image
   */
  imageSize: _react.PropTypes.number,
  /**
   The image url of the product
   */
  imageUrl: _react.PropTypes.string.isRequired,
  /**
   Product info optional class
   */
  infoClassName: _react.PropTypes.string,
  /**
   Number of items in package
   */
  quantityIncluded: _react.PropTypes.number.isRequired,
  /**
   Short description properties (maxLines, asHTML, text)
   */
  shortDescription: _react.PropTypes.object.isRequired,
  /**
   Star rating information
   */
  stars: _react.PropTypes.object,
  /**
   Function to run when the number of ratings is clicked
   */
  starsOnClick: _react.PropTypes.function,
  /**
   The title of the product
   */
  title: _react.PropTypes.string.isRequired
};

ProductShortInfo.defaultProps = {
  bottomLinkOnClick: function bottomLinkOnClick() {},
  bottomLinkText: "",
  className: "",
  imageClassName: "Grid-col u-size-1-4-xs",
  imageOnClick: "",
  imageSize: 150,
  infoClassName: "Grid-col u-size-3-4-xs",
  stars: {},
  starsOnClick: function starsOnClick() {}
};

exports.default = ProductShortInfo;