"use strict";

exports.__esModule = true;
exports._renderLink = exports._generateLinkData = exports._isButtonLink = exports._isFeedbackLink = exports._generateIcon = exports._generateTarget = undefined;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _wmreactImageUtils = require("@walmart/wmreact-image-utils");

var _feedbackLink = require("./feedback-link");

var _feedbackLink2 = _interopRequireDefault(_feedbackLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FEEDBACK = "Feedback";
var BUTTON = "button";
/**
This component displays the GlobalFooterItem

@import {GlobalFooterItem}
@flags noVisibleRender
@component GlobalFooterItem
@playground
Global Footer Link Item
```
<GlobalFooterItem link={
  {
    "linkText": "Walmart MoneyCenter",
    "title": "Walmart MoneyCenter",
    "clickThrough": {
      "type": "url",
      "value": "http://www-e16.walmart.com/instantcredit"
    },
    "uid": "iyoJypI4"
  }
} />
```
Global Footer Link Icon
```
<GlobalFooterItem icon={true} link={
  {
    "linkText": "facebook",
    "title": "facebook",
    "clickThrough": {
      "type": "url",
      "value": "https://www.facebook.com/walmart"
    },
    "uid": "iyoJypI4"
  }
} />
```
Global Footer Image Item
```
<GlobalFooterItem link={
  {
    "linkText": "Walmart MoneyCenter",
    "title": "Walmart MoneyCenter",
    "clickThrough": {
      "type": "url",
      "value": "http:\/\/www-e16.walmart.com\/instantcredit"
    },
    "uid": "iyoJypI4"
  }
} image={
  {
    "assetName": "k2-_65ae56ce-e20a-4f67-8a4f-88fbc7f69cde.v1.jpg",
    "height": "66",
    "assetId": "2c35b6b0-481c-11e5-aa7b-3f9068f8e0a6",
    "src": "//i5.walmartimages.com/dfw/4ff9c6c9-9aee/k2-_704e0f82-62c6-4e1b-8382.v1.png",
    "width": "86",
    "size": "100",
    "contentType": "image/jpeg",
    "alt": "footer image",
    "title": "footer image",
    "uid": "9ZKpMSLd"
  }
} />
```
*/

var _generateTarget = exports._generateTarget = function _generateTarget(newTab) {
  if (newTab) {
    return "_blank";
  }
};

var _generateIcon = exports._generateIcon = function _generateIcon(linkText) {
  var MOBILE = "mobile";
  var linkValue = linkText.toLowerCase();
  if (linkValue === MOBILE) {
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(_icon2.default, { name: linkValue, size: 20 }),
      _react2.default.createElement(
        "span",
        { className: "footer-GlobalSocialIcons--mobileApps align-left" },
        "Mobile apps"
      )
    );
  } else {
    return _react2.default.createElement(_icon2.default, { name: linkValue, size: 20 });
  }
};

var _isFeedbackLink = exports._isFeedbackLink = function _isFeedbackLink(linkText, title) {
  return FEEDBACK === linkText || FEEDBACK === title;
};

var _isButtonLink = exports._isButtonLink = function _isButtonLink(linkType) {
  return linkType === BUTTON;
};

var _generateLinkData = exports._generateLinkData = function _generateLinkData(linkText, isIcon, imageData) {
  if (imageData && imageData.src) {
    return _react2.default.createElement(_image2.default, {
      className: "footer-GlobalFooterItem-img display-block",
      src: (0, _wmreactImageUtils.checkImageSrc)(imageData.src, imageData.height, imageData.width),
      alt: imageData.alt,
      height: imageData.height,
      width: imageData.width,
      title: imageData.title,
      "data-asset-id": imageData.assetId,
      "data-uid": imageData.uid
    });
  } else if (isIcon) {
    return _generateIcon(linkText);
  } else {
    return linkText;
  }
};

var _renderLink = exports._renderLink = function _renderLink(_ref) {
  var autoId = _ref.autoId;
  var className = _ref.className;
  var icon = _ref.icon;
  var newTab = _ref.newTab;
  var image = _ref.image;
  var link = _ref.link;
  var extras = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];
  var uid = link.uid;
  var title = link.title;
  var linkText = link.linkText;


  return _react2.default.createElement(
    _link2.default,
    (0, _extends3.default)({
      "data-uid": uid,
      alt: title
    }, { title: title, className: className }, (0, _automationIdUtils.getDataAutomationIdPair)(autoId, ""), extras),
    _generateLinkData(linkText, icon, image)
  );
};

var GlobalFooterItem = function GlobalFooterItem(props) {
  var _props$link = props.link;
  var uid = _props$link.uid;
  var title = _props$link.title;
  var linkText = _props$link.linkText;
  var linkType = _props$link.linkType;
  var onLinkClick = _props$link.onLinkClick;
  var clickThrough = _props$link.clickThrough;
  var newTab = props.newTab;
  var pathToAssets = props.pathToAssets;


  if (_isFeedbackLink(linkText, title)) {
    return _react2.default.createElement(_feedbackLink2.default, {
      uid: uid,
      title: title,
      pathToAssets: pathToAssets,
      linkText: linkText
    });
  } else if (_isButtonLink(linkType)) {
    return _renderLink(props, {
      onClick: function onClick() {
        return onLinkClick(clickThrough.value);
      }
    });
  } else {
    return _renderLink(props, {
      target: _generateTarget(newTab),
      href: clickThrough.value
    });
  }
};

GlobalFooterItem.displayName = "GlobalFooterItem";

GlobalFooterItem.propTypes = {
  /**
  True if we are showing icon
  */
  icon: _react.PropTypes.bool,
  /**
  True if we Open link in newTab
  */
  newTab: _react.PropTypes.bool,
  /**
  Link object
  */
  link: _react.PropTypes.shape({
    uid: _react.PropTypes.string,
    title: _react.PropTypes.string,
    linkText: _react.PropTypes.string.isRequired,
    linkType: _react.PropTypes.string,
    onLinkClick: _react.PropTypes.func,
    clickThrough: _react.PropTypes.shape({
      value: _react.PropTypes.string.isRequired
    })
  }),
  /**
  Image object
  */
  image: _react.PropTypes.shape({
    src: _react.PropTypes.string,
    alt: _react.PropTypes.string,
    uid: _react.PropTypes.string,
    title: _react.PropTypes.string,
    assetId: _react.PropTypes.string,
    height: _react.PropTypes.string,
    width: _react.PropTypes.string
  }),
  /**
  Any additional css classes that needs to be applied to the root element.
  */
  className: _react.PropTypes.string,
  /**
  Used for generating unique automation id's
  */
  autoId: _react.PropTypes.string,
  /**
  Path to opinion lab assets
  */
  pathToAssets: _react.PropTypes.string
};

GlobalFooterItem.defaultProps = {
  icon: false,
  newTab: false,
  link: {
    uid: "",
    title: "",
    linkText: "",
    linkType: "link",
    clickThrough: {
      value: ""
    }
  },
  image: {
    src: "",
    alt: "",
    uid: "",
    title: "",
    assetId: "",
    height: "",
    width: ""
  },
  className: "",
  autoId: "",
  pathToAssets: ""
};

exports.default = GlobalFooterItem;