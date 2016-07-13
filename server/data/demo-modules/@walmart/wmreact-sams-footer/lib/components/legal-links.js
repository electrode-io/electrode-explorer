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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LegalLinks = function (_Component) {
  (0, _inherits3.default)(LegalLinks, _Component);

  function LegalLinks(props) {
    (0, _classCallCheck3.default)(this, LegalLinks);
    return (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));
  }

  LegalLinks.prototype.render = function render() {
    var legalLinks = this.props.moduleData.configs.legalLinks;
    return _react2.default.createElement(
      "div",
      { className: "legal-links" },
      _react2.default.createElement("div", { className: "links-divider hide-content-l" }),
      _react2.default.createElement(
        "ul",
        { className: "legal-link-list" },
        legalLinks.map(function (item) {
          return _react2.default.createElement(
            "li",
            { key: item.link.uid, className: "legal-link-item" },
            _react2.default.createElement(
              "a",
              { href: item.link.clickThrough.value },
              item.link.linkText
            )
          );
        })
      ),
      _react2.default.createElement("div", { className: "links-divider hide-content-l" })
    );
  };

  return LegalLinks;
}(_react.Component);

LegalLinks.propTypes = {
  moduleData: _react.PropTypes.shape({
    type: _react.PropTypes.string,
    moduleId: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      legalLinks: _react.PropTypes.array
    }).isRequired
  }).isRequired
};

exports.default = LegalLinks;