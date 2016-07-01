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
The mobile header
@private
*/

var MobileHeader = function (_React$Component) {
  (0, _inherits3.default)(MobileHeader, _React$Component);

  function MobileHeader() {
    (0, _classCallCheck3.default)(this, MobileHeader);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  MobileHeader.prototype.render = function render() {
    return _react2.default.createElement(
      "header",
      { className: "zeus-header" },
      _react2.default.createElement(
        _wmreactLayout.Layout,
        { "x-small-sizes": [2, 8], padded: true, vertical: "middle" },
        _react2.default.createElement(
          "a",
          { href: this.props.navTarget },
          _react2.default.createElement("i", { className: "wmicon wmicon-16 wmicon-angle-left" }),
          _react2.default.createElement("i", { className: "wmicon wmicon-20 " + this.props.navIcon })
        ),
        _react2.default.createElement(
          "div",
          { className: "text-center" },
          _react2.default.createElement(
            "a",
            { href: this.props.headerHref, className: "zeus-header-logo" },
            _react2.default.createElement("i", { title: "Walmart. Save Money. Live Better.",
              className: "valign-middle wmicon wmicon-spark wmicon-32" }),
            _react2.default.createElement(
              "h1",
              null,
              this.props.title
            )
          )
        )
      )
    );
  };

  return MobileHeader;
}(_react2.default.Component);

exports.default = MobileHeader;


MobileHeader.propTypes = {
  visibleWidths: _react2.default.PropTypes.array,
  logoImage: _react2.default.PropTypes.string,
  title: _react2.default.PropTypes.string,
  navTarget: _react2.default.PropTypes.string,
  navIcon: _react2.default.PropTypes.string,
  showHeader: _react2.default.PropTypes.bool,
  headerHref: _react2.default.PropTypes.string
};