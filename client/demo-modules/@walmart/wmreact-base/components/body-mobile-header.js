"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _wmreactLayout = require("@walmart/wmreact-layout");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
The mobile header
@private
*/

var MobileHeader = function (_React$Component) {
  _inherits(MobileHeader, _React$Component);

  function MobileHeader() {
    _classCallCheck(this, MobileHeader);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(MobileHeader).apply(this, arguments));
  }

  _createClass(MobileHeader, [{
    key: "render",
    value: function render() {
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
    }
  }]);

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