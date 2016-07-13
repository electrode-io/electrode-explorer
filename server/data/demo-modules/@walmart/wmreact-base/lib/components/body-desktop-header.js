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

var _wmreactLayout = require("@walmart/wmreact-layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
The desktop header
@private
*/

var DesktopHeader = function (_React$Component) {
  (0, _inherits3.default)(DesktopHeader, _React$Component);

  function DesktopHeader() {
    (0, _classCallCheck3.default)(this, DesktopHeader);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  DesktopHeader.prototype.render = function render() {
    return _react2.default.createElement(
      "header",
      { className: "zeus-header" },
      _react2.default.createElement(
        _wmreactLayout.Layout,
        { "large-sizes": [6, 6], padded: true, vertical: "middle" },
        _react2.default.createElement(
          "a",
          { href: this.props.headerHref, className: "zeus-header-logo" },
          _react2.default.createElement("img", { alt: "Walmart. Save Money. Live Better.", src: this.props.logoImage }),
          _react2.default.createElement(
            "h1",
            null,
            this.props.title
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "text-right" },
          _react2.default.createElement(
            "a",
            { href: this.props.navTarget },
            " ",
            this.props.navText,
            " "
          )
        )
      )
    );
  };

  return DesktopHeader;
}(_react2.default.Component);

exports.default = DesktopHeader;


DesktopHeader.propTypes = {
  visibleWidths: _react2.default.PropTypes.array,
  logoImage: _react2.default.PropTypes.string,
  title: _react2.default.PropTypes.string,
  navTarget: _react2.default.PropTypes.string,
  navText: _react2.default.PropTypes.string,
  showHeader: _react2.default.PropTypes.bool,
  headerHref: _react2.default.PropTypes.string
};