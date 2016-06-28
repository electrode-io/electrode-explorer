"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _automationUtils = require("@walmart/automation-utils");

var _textTruncate = require("@walmart/wmreact-product-typography/lib/components/text-truncate");

var _textTruncate2 = _interopRequireDefault(_textTruncate);

var _stars = require("@walmart/wmreact-product-descriptors/lib/components/stars");

var _stars2 = _interopRequireDefault(_stars);

var _productImage = require("./product-image");

var _productImage2 = _interopRequireDefault(_productImage);

var _flag = require("@walmart/wmreact-product-descriptors/lib/components/flag");

var _flag2 = _interopRequireDefault(_flag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
This component display basic product information on the marketplace page.
```jsx
  <ProductShortInfo
    title="Apple iPad mini 2 16GB Wifi"
    imageUrl="https://placehold.it/100X100"
    usItemId="1521"
    quantityIncluded={3}
    stars={{total: 5, average: 4, count: 37}}
    starsOnClick={(e)=>{e.preventDefault();console.log("Clicked Stars")}}
    flag={{text: "3 Included", type: "reduced"}}
    shortDescription="<em>Lorem ipsum</em> dolor sit amet,
                      consectetur adipiscing elit. Nulla
                      dapibus erat faucibus, gravida massa
                      et, congue massa. Cras hendrerit
                      odio orci, non blandit augue mattis
                      quis."
  />
*/

var AUTOMATION_CONTEXT = "ProductShortInfo";

var ProductShortInfo = function ProductShortInfo(props) {
  var title = props.title;
  var imageUrl = props.imageUrl;
  var imageSize = props.imageSize;
  var usItemId = props.usItemId;
  var className = props.className;
  var quantityIncluded = props.quantityIncluded;
  var stars = props.stars;
  var starsOnClick = props.starsOnClick;
  var shortDescription = props.shortDescription;
  var bottomLinkText = props.bottomLinkText;
  var bottomLinkOnClick = props.bottomLinkOnClick;

  var returnLink = "/ip/" + usItemId;

  var _getTitle = function _getTitle() {
    return quantityIncluded > 1 ? title + " - " + quantityIncluded + " included" : "" + title;
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
    _react2.default.createElement(_productImage2.default, { url: returnLink, size: imageSize, imageUrl: imageUrl }),
    _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)("ProductShortInfo-details Grid-col u-size-1-2") },
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
   The title of the product
   */
  title: _react.PropTypes.string.isRequired,
  /**
   The image url of the product
   */
  imageUrl: _react.PropTypes.string.isRequired,
  /**
   The size of the item preview image
   */
  imageSize: _react.PropTypes.number,
  /**
  The UsItemID of the product
  */
  usItemId: _react.PropTypes.string.isRequired,
  /**
   Any additonal style classes
   */
  className: _react.PropTypes.string,
  /**
   Any flags (i.e. Rollback)
   */
  flag: _react.PropTypes.object,
  /**
   Number of items in package
   */
  quantityIncluded: _react.PropTypes.number,
  /**
   Star rating information
   */
  stars: _react.PropTypes.object,
  /**
   Function to run when the number of ratings is clicked
   */
  starsOnClick: _react.PropTypes.function,
  /**
   Short description properties (maxLines, asHTML, text)
   */
  shortDescription: _react.PropTypes.object
};

ProductShortInfo.defaultProps = {
  imageSize: 100
};

exports.default = ProductShortInfo;