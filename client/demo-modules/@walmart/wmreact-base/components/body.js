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

var _wmreactLayout = require("@walmart/wmreact-layout");

var _bodyMobileHeader = require("./body-mobile-header");

var _bodyMobileHeader2 = _interopRequireDefault(_bodyMobileHeader);

var _bodyTabletHeader = require("./body-tablet-header");

var _bodyTabletHeader2 = _interopRequireDefault(_bodyTabletHeader);

var _bodyDesktopHeader = require("./body-desktop-header");

var _bodyDesktopHeader2 = _interopRequireDefault(_bodyDesktopHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Body container component.
@examples
```jsx
<Body>
  Foo
</Body>
```
@component Body
@property {object} props
@import {Body}
@playground
Body
```
<Body title="Test Title">
  <p>Body Copy!</p>
</Body>
```
*/

var Body = function (_React$Component) {
  (0, _inherits3.default)(Body, _React$Component);

  function Body() {
    (0, _classCallCheck3.default)(this, Body);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  Body.prototype._renderHeader = function _renderHeader() {
    return _react2.default.createElement(
      _wmreactLayout.MediaSelector,
      null,
      _react2.default.createElement(_bodyDesktopHeader2.default, (0, _extends3.default)({ visibleAtOrAbove: "large" }, this.props)),
      _react2.default.createElement(_bodyTabletHeader2.default, (0, _extends3.default)({ visibleWidths: ["medium"] }, this.props)),
      _react2.default.createElement(_bodyMobileHeader2.default, (0, _extends3.default)({ hiddenAbove: "small" }, this.props))
    );
  };

  Body.prototype._renderFooter = function _renderFooter() {
    return _react2.default.createElement(
      "div",
      { className: "clearfix zeus-footer" },
      _react2.default.createElement(
        _wmreactLayout.Layout,
        { small: 2, className: "zeus-footer-container" },
        _react2.default.createElement(
          "div",
          { className: "zeus-footer-left" },
          "© 2015–",
          new Date().getFullYear(),
          " Walmart Stores, Inc."
        ),
        _react2.default.createElement(
          "div",
          { className: "zeus-footer-right" },
          _react2.default.createElement(
            "div",
            { className: "zeus-footer-left-content" },
            this.props.footerLeft
          ),
          _react2.default.createElement(
            "div",
            { className: "zeus-footer-right-content" },
            this.props.footerRight
          )
        )
      )
    );
  };

  Body.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: "page-wrapper" },
      this.props.showHeader === true && this._renderHeader(),
      _react2.default.createElement(
        "div",
        { className: "body-wrapper" },
        this.props.children
      ),
      this.props.showFooter === true && this._renderFooter()
    );
  };

  return Body;
}(_react2.default.Component);
/*eslint max-len: [2, 100, 4, { "ignorePattern": ".*i5.walmartimages.com.*" }]*/


exports.default = Body;


Body.displayName = "Body";

Body.propTypes = {
  /**
  The logo image to use
  */
  logoImage: _react2.default.PropTypes.string,
  /**
  The page title
  */
  title: _react2.default.PropTypes.string,
  /**
  The navigation target
  */
  navTarget: _react2.default.PropTypes.string,
  /**
  The navigation text
  */
  navText: _react2.default.PropTypes.string,
  /**
  The short name for the nav
  */
  navShort: _react2.default.PropTypes.string,
  /**
  The navigation icon
  */
  navIcon: _react2.default.PropTypes.string,
  /**
  Extra content for the left of the footer
  */
  footerLeft: _react2.default.PropTypes.node,
  /**
  Extra content for the right of the footer
  */
  footerRight: _react2.default.PropTypes.node,
  /**
  True if the header should be shown
  */
  showHeader: _react2.default.PropTypes.bool,
  /**
  True if the footer should be shown
  */
  showFooter: _react2.default.PropTypes.bool,
  /**
  The link for the title on the header
  */
  headerHref: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node
};

Body.defaultProps = {
  logoImage: "//i5.walmartimages.com/dfw/63fd9f59-a546/k2-_47005cc8-29da-4fa9-ac2c-45e102a55bf5.v1.png",
  title: "",
  navTarget: "",
  navText: "",
  navShort: "",
  navIcon: "",
  footerLeft: null,
  footerRight: _react2.default.createElement(
    "a",
    { className: "js-footer-feedback-opinion-lab",
      href: "https://secure.opinionlab.com/ccc01/comment_card_d.asp" },
    "Leave feedback"
  ),
  showHeader: true,
  showFooter: true,
  headerHref: "/"
};