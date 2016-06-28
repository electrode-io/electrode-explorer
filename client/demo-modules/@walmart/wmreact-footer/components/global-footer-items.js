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

var _heading = require("@walmart/wmreact-base/lib/components/heading");

var _heading2 = _interopRequireDefault(_heading);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _collapsable = require("@walmart/wmreact-layout/lib/components/collapsable");

var _collapsable2 = _interopRequireDefault(_collapsable);

var _globalFooterItem = require("./global-footer-item");

var _globalFooterItem2 = _interopRequireDefault(_globalFooterItem);

var _automationIdUtils = { getDataAutomationIdPair: function () { /* no-op */ } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
This component displays the GlobalFooterItems

@import {GlobalFooterItems}
@flags noVisibleRender
@component GlobalFooterItems
@playground
Global Footer Items
```
<GlobalFooterItems name="Walmart.com" links={
  [
    {
      "link": {
        "linkText": "About Walmart.com",
        "title": "Walmart credit card",
        "clickThrough": {
          "type": "url",
          "value": "http:\/\/help.walmart.com\/app\/answers\/detail\/a_id\/6"
        },
        "uid": "XfEg85uC"
      },
      "uid": "5uh7ZTD-"
    },
    {
      "link": {
        "linkText": "Terms of Use",
        "title": "Terms of use",
        "clickThrough": {
          "type": "url",
          "value": "http:\/\/help.walmart.com\/app\/answers\/detail\/a_id\/8"
        },
        "uid": "dKmHgWxk"
      },
      "image": {
        "assetName": "k2-_65ae56ce-e20a-4f67-8a4f-88fbc7f69cde.v1.jpg",
        "height": "66",
        "assetId": "2c35b6b0-481c-11e5-aa7b-3f9068f8e0a6",
        "src": "//i5.walmartimages.com/dfw/4ff9c6c9-9aee/k2-_704e0f82-62c6.v1.png",
        "width": "86",
        "size": "100",
        "contentType": "image/jpeg",
        "alt": "footer image",
        "title": "footer image",
        "uid": "9ZKpMSLd"
      },
      "uid": "erj58MVs"
    }
  ]
} />
```
Global Footer Items Inline
```
<GlobalFooterItems block={false} links={
  [
    {
      "link": {
        "linkText": "About Walmart.com",
        "title": "Walmart credit card",
        "clickThrough": {
          "type": "url",
          "value": "http:\/\/help.walmart.com\/app\/answers\/detail\/a_id\/6"
        },
        "uid": "XfEg85uC"
      },
      "uid": "5uh7ZTD-"
    },
    {
      "link": {
        "linkText": "Terms of Use",
        "title": "Terms of use",
        "clickThrough": {
          "type": "url",
          "value": "http:\/\/help.walmart.com\/app\/answers\/detail\/a_id\/8"
        },
        "uid": "dKmHgWxk"
      }
  ]
} />
```
*/

var GlobalFooterItems = function (_Component) {
  (0, _inherits3.default)(GlobalFooterItems, _Component);

  function GlobalFooterItems(props) {
    (0, _classCallCheck3.default)(this, GlobalFooterItems);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = { open: null };
    _this._items = _this._items.bind(_this);
    _this._links = _this._links.bind(_this);
    return _this;
  }

  GlobalFooterItems.prototype._isOpen = function _isOpen(key) {
    return this.state.open === key;
  };

  GlobalFooterItems.prototype._getClassName = function _getClassName(key) {
    return this._isOpen(key) ? "footer-GlobalFooterItems-expander--expand" : "footer-GlobalFooterItems-expander--collapse";
  };

  GlobalFooterItems.prototype._expandToggle = function _expandToggle(key) {
    this.setState({
      open: this._isOpen(key) ? null : key
    });
  };

  GlobalFooterItems.prototype._generateToggleText = function _generateToggleText(key) {
    return this._isOpen(key) ? "Collapse" : "Expand";
  };

  GlobalFooterItems.prototype._generateHeading = function _generateHeading(headingName) {
    return headingName && _react2.default.createElement(
      _heading2.default.H6,
      { className: "footer-GlobalFooterItems-heading" },
      headingName
    );
  };

  GlobalFooterItems.prototype._items = function _items(linkDetails, index) {
    var link = linkDetails.link;
    var image = linkDetails.image;
    var autoId = this.props.autoId;

    var childData = linkDetails.children || [];
    var linkSuffix = "link-" + index;
    var buttonSuffix = "button-" + index;
    var subItemSuffix = "link-" + index + "-subItem";
    if (childData.length > 0) {
      return _react2.default.createElement(
        "li",
        { key: index },
        _react2.default.createElement(
          _button2.default,
          (0, _extends3.default)({ fakelink: true, className: this._getClassName(index),
            onClick: this._expandToggle.bind(this, index)
          }, (0, _automationIdUtils.getDataAutomationIdPair)(buttonSuffix, autoId)),
          _react2.default.createElement(
            "span",
            { className: "visuallyhidden" },
            this._generateToggleText(index)
          )
        ),
        _react2.default.createElement(_globalFooterItem2.default, { link: link, image: image,
          autoId: autoId + "-" + linkSuffix }),
        _react2.default.createElement(
          _collapsable2.default,
          { className: "footer-GlobalFooterItems-subItems", isOpen: this._isOpen(index) },
          _react2.default.createElement(GlobalFooterItems, { links: childData, name: childData.name, key: childData.uid,
            autoId: autoId + "-" + subItemSuffix })
        )
      );
    } else {
      return _react2.default.createElement(
        "li",
        { key: index },
        _react2.default.createElement(_globalFooterItem2.default, { link: link, image: image,
          autoId: autoId + "-" + linkSuffix })
      );
    }
  };

  GlobalFooterItems.prototype._links = function _links(linkDetails, index) {
    var link = linkDetails.link;
    var _props = this.props;
    var autoId = _props.autoId;
    var pathToAssets = _props.pathToAssets;

    var linkSuffix = "link-" + index;
    return _react2.default.createElement(_globalFooterItem2.default, { link: link, className: "display-inline-block",
      key: index, autoId: autoId + "-" + linkSuffix, pathToAssets: pathToAssets });
  };

  GlobalFooterItems.prototype.render = function render() {
    var _props2 = this.props;
    var links = _props2.links;
    var block = _props2.block;
    var name = _props2.name;

    if (block) {
      return _react2.default.createElement(
        "div",
        { className: "footer-GlobalFooterItems" },
        this._generateHeading(name),
        _react2.default.createElement(
          "ul",
          { className: "footer-GlobalFooterItems--blockList" },
          links.map(this._items)
        )
      );
    } else {
      return _react2.default.createElement(
        "div",
        { className: "footer-GlobalFooterItems--list" },
        links.map(this._links)
      );
    }
  };

  return GlobalFooterItems;
}(_react.Component);

GlobalFooterItems.displayName = "GlobalFooterItems";

GlobalFooterItems.propTypes = {
  /**
  True if we are applying the `footer-block-list` class
  */
  block: _react.PropTypes.bool,
  /**
  The list of links
  */
  links: _react.PropTypes.array.isRequired,
  /**
  The name of list
  */
  name: _react.PropTypes.string,
  /**
  Used for generating unique automation id's
  */
  autoId: _react.PropTypes.string,
  /**
  Path to opinion lab assets
  */
  pathToAssets: _react2.default.PropTypes.string
};

GlobalFooterItems.defaultProps = {
  block: true,
  links: [],
  name: "",
  autoId: "",
  pathToAssets: ""
};

exports.default = GlobalFooterItems;