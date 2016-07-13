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

var _wmreactProductTypography = require("@walmart/wmreact-product-typography");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SearchProductTitle = function (_React$Component) {
  (0, _inherits3.default)(SearchProductTitle, _React$Component);

  function SearchProductTitle() {
    (0, _classCallCheck3.default)(this, SearchProductTitle);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  SearchProductTitle.prototype.render = function render() {
    var _this2 = this;

    var classes = (0, _classnames2.default)(this.props.className, { "listview": !this.props.gridView }, { "gridview": this.props.gridView });
    return _react2.default.createElement(
      "div",
      { className: classes },
      _react2.default.createElement(
        "a",
        { className: "line-clamp line-clamp-3", href: this.props.productPageUrl,
          onClick: function onClick() {
            return _this2.props.onClickTitle(_this2.props.itemId);
          } },
        _react2.default.createElement(_wmreactProductTypography.ProductTitle, {
          title: this.props.title,
          big: false,
          maxLines: 3,
          doInsertHTMLTitle: true })
      )
    );
  };

  return SearchProductTitle;
}(_react2.default.Component);

exports.default = SearchProductTitle;


SearchProductTitle.displayName = "SearchProductTitle";
SearchProductTitle.propTypes = {
  /**
    The name or title of the product.
    */
  "title": _react2.default.PropTypes.string.isRequired,
  /**
    Item Id
   */
  "itemId": _react2.default.PropTypes.string,
  /**
   Any additional css classes that needs to be applied
   to the root element.
   */
  "className": _react2.default.PropTypes.string,
  /**
   Use larger font size
  */
  "big": _react2.default.PropTypes.bool,
  /**
  Max number of lines to show before truncating
  */
  "maxLines": _react2.default.PropTypes.number,
  /**
  Product Page Url
  */
  "productPageUrl": _react2.default.PropTypes.string,
  /**
  A flag to enable grid view
  */
  "gridView": _react2.default.PropTypes.bool,
  /**
  On click title handler
  */
  "onClickTitle": _react2.default.PropTypes.func
};

SearchProductTitle.defaultProps = {
  "className": "",
  "big": false,
  onClickTitle: function onClickTitle() {}
};

exports.default = SearchProductTitle;