"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _chunk = require("lodash/chunk");

var _chunk2 = _interopRequireDefault(_chunk);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A component for displaying a flyout of subcategory menu items in columns.

@examples
```jsx
<SideBarMenuModuleFlyout subMenuData={[
  {
    "title": "TVs",
    "imageAlt": "TVs",
    "imageUrl": "//i5.walmartimages.com/dfw/4ff9c6c9-5220/k2-_ace57524-f8e5-4fb9-8189.v1.jpg",
    "url": "http://www.walmart.com/#"
  },
  {
    "title": "Cell Phones",
    "imageAlt": "Cell Phones",
    "imageUrl": "//i5.walmartimages.com/dfw/4ff9c6c9-bc99/k2-_7607b6d6-d13b-4dbe-b29a.v1.jpg",
    "url": "http://www.walmart.com/#"
  }
]} maxItemPerColumn=10 active=false />
```
@component SideBarMenuModuleFlyout
@import {SideBarMenuModuleFlyout}
@playground
SideBarMenuModuleFlyout
```
<SideBarMenuModuleFlyout subMenuData={[
  {
    "title": "TVs",
    "alt": "TVs",
    "imageUrl": "//i5.walmartimages.com/dfw/4ff9c6c9-5220/k2-_ace57524-f8e5-4fb9-8189.v1.jpg",
    "url": "http://www.walmart.com/#",
    "catId": "3944_1060825_447913"
  },
  {
    "title": "Cell Phones",
    "alt": "Cell Phones",
    "imageUrl": "//i5.walmartimages.com/dfw/4ff9c6c9-bc99/k2-_7607b6d6-d13b-4dbe-b29a.v1.jpg",
    "url": "http://www.walmart.com/#",
    "catId": "1105910"
  }
]} maxItemPerColumn=10 active=false />
```
@Example output for a single subcategory with two columns
```
<div class="SideBarMenu-flyout"> <
  <div class="SideBarMenu-flyout-inner SideBarMenu-flyout-2col">
    <ul class="block-list pull-left">
      <li><a href="/cp/1229722" tabindex="-1">Apple Brand Experience</a></li>
      <li><a href="/cp/1229722" tabindex="-1">Apple Brand Experience</a></li>
    </ul>
    <ul class="block-list pull-left">
      <li><a href="/cp/1229722" tabindex="-1">Apple Brand Experience</a></li>
      <li><a href="/cp/1229722" tabindex="-1">Apple Brand Experience</a></li>
    </ul>
  </div>
</div>
```
*/

var SideBarMenuModuleFlyout = function (_Component) {
  (0, _inherits3.default)(SideBarMenuModuleFlyout, _Component);

  function SideBarMenuModuleFlyout() {
    (0, _classCallCheck3.default)(this, SideBarMenuModuleFlyout);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  SideBarMenuModuleFlyout.prototype.getNumberOfColumns = function getNumberOfColumns(subMenuData, maxItemPerColumn) {
    return Math.ceil(subMenuData.length / maxItemPerColumn);
  };

  SideBarMenuModuleFlyout.prototype.renderItem = function renderItem(data, index) {
    return _react2.default.createElement(
      "li",
      { key: index, __self: this
      },
      _react2.default.createElement(
        "a",
        { href: data.url, tabIndex: "-1", __self: this
        },
        data.title
      )
    );
  };

  SideBarMenuModuleFlyout.prototype.renderItems = function renderItems(menuItems) {
    var _this2 = this;

    return menuItems.map(function (item, index) {
      return _this2.renderItem(item, index);
    });
  };

  SideBarMenuModuleFlyout.prototype.renderColumn = function renderColumn(menuItems, index) {
    return _react2.default.createElement(
      "ul",
      { className: "block-list pull-left", key: index, __self: this
      },
      this.renderItems(menuItems)
    );
  };

  SideBarMenuModuleFlyout.prototype.renderColumns = function renderColumns(subMenuData, maxItemPerColumn) {
    var _this3 = this;

    return (0, _chunk2.default)(subMenuData, maxItemPerColumn).map(function (menuItems, index) {
      return _this3.renderColumn(menuItems, index);
    });
  };

  SideBarMenuModuleFlyout.prototype.render = function render() {
    var _props = this.props;
    var subMenuData = _props.subMenuData;
    var maxItemPerColumn = _props.maxItemPerColumn;
    var active = _props.active;


    if ((0, _isEmpty2.default)(subMenuData)) {
      return null;
    }

    var columns = this.renderColumns(subMenuData, maxItemPerColumn);

    var classes = (0, _classnames2.default)("SideBarMenu-flyout", {
      "is-active": active
    });

    var numberOfColumns = this.getNumberOfColumns(subMenuData, maxItemPerColumn);
    var innerClasses = "SideBarMenu-flyout-inner SideBarMenu-flyout-" + numberOfColumns + "col";

    return _react2.default.createElement(
      "div",
      { className: classes, __self: this
      },
      _react2.default.createElement(
        "div",
        { className: innerClasses, __self: this
        },
        columns
      )
    );
  };

  return SideBarMenuModuleFlyout;
}(_react.Component);

exports.default = SideBarMenuModuleFlyout;


SideBarMenuModuleFlyout.displayName = "SideBarMenuModule.Flyout";

SideBarMenuModuleFlyout.propTypes = {
  /**
  Array of tile data
  */
  subMenuData: _react.PropTypes.arrayOf(_react.PropTypes.object),
  /**
  Maximum number of items each column can have
  */
  maxItemPerColumn: _react.PropTypes.number,
  /**
  The flyout is display or not
  */
  active: _react.PropTypes.bool.isRequired
};

SideBarMenuModuleFlyout.defaultProps = {
  maxItemPerColumn: 6,
  subMenuData: []
};