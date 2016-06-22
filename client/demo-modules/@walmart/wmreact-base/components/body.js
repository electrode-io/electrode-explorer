"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/*eslint max-len: [2, 100, 4, { "ignorePattern": ".*i5.walmartimages.com.*" }]*/


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
  _inherits(Body, _React$Component);

  function Body() {
    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Body).apply(this, arguments));
  }

  _createClass(Body, [{
    key: "_renderHeader",
    value: function _renderHeader() {
      return _react2.default.createElement(
        _wmreactLayout.MediaSelector,
        null,
        _react2.default.createElement(_bodyDesktopHeader2.default, _extends({ visibleAtOrAbove: "large" }, this.props)),
        _react2.default.createElement(_bodyTabletHeader2.default, _extends({ visibleWidths: ["medium"] }, this.props)),
        _react2.default.createElement(_bodyMobileHeader2.default, _extends({ hiddenAbove: "small" }, this.props))
      );
    }
  }, {
    key: "_renderFooter",
    value: function _renderFooter() {
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
    }
  }, {
    key: "render",
    value: function render() {
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
    }
  }]);

  return Body;
}(_react2.default.Component);

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