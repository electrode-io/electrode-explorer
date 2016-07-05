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

var SeeAllLink = function (_React$Component) {
  (0, _inherits3.default)(SeeAllLink, _React$Component);

  function SeeAllLink() {
    (0, _classCallCheck3.default)(this, SeeAllLink);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  SeeAllLink.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props;
    var seeAllFacetLink = _props.seeAllFacetLink;
    var seeAllFacet = _props.seeAllFacet;

    return _react2.default.createElement(
      "div",
      { className: "see-all-link" },
      _react2.default.createElement(
        "a",
        { className: "link", href: "?" + seeAllFacetLink,
          onClick: function onClick() {
            return _this2.props.onClickLink("seeAll");
          } },
        "Show only ",
        seeAllFacet,
        " items"
      )
    );
  };

  return SeeAllLink;
}(_react2.default.Component);

exports.default = SeeAllLink;


SeeAllLink.displayName = "SeeAllLink";
SeeAllLink.propTypes = {
  /**
  See all facet link name
  */
  seeAllFacet: _react2.default.PropTypes.string,
  /**
  See all facet link
  */
  seeAllFacetLink: _react2.default.PropTypes.string,
  /**
  Action triggered when clicking on the see all link
  */
  onClickLink: _react2.default.PropTypes.string
};

SeeAllLink.defaultProps = {
  seeAllFacet: "",
  seeAllFacetLink: "",
  onClickLink: function onClickLink() {}
};

exports.default = SeeAllLink;