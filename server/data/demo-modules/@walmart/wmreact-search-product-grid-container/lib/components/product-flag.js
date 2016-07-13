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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _wmreactBase = require("@walmart/wmreact-base");

var _wmreactProductCard = require("@walmart/wmreact-product-card");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductFlag = function (_React$Component) {
  (0, _inherits3.default)(ProductFlag, _React$Component);

  function ProductFlag() {
    (0, _classCallCheck3.default)(this, ProductFlag);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  ProductFlag.prototype._renderFlagLink = function _renderFlagLink(flags, seeAllCategory, gridView) {
    if (flags && flags[0]) {
      if (flags[0].type === "bestseller" && !gridView) {
        return _react2.default.createElement(
          "div",
          { className: "flag-link" },
          "in  ",
          _react2.default.createElement(
            _wmreactBase.Link,
            { className: "js-flag-link",
              href: seeAllCategory.seeAllLink },
            seeAllCategory.seeAllName
          )
        );
      }
    }
  };

  ProductFlag.prototype.render = function render() {
    var _props = this.props;
    var flags = _props.flags;
    var seeAllCategory = _props.seeAllCategory;
    var gridView = _props.gridView;

    var classes = (0, _classnames2.default)("search-result-flag", { "listview": !gridView }, { "gridview": gridView });
    return _react2.default.createElement(
      "div",
      { className: classes },
      _react2.default.createElement(_wmreactProductCard.ProductCardFlagList, {
        flags: flags,
        seeAllCategory: seeAllCategory }),
      this._renderFlagLink(flags, seeAllCategory, gridView)
    );
  };

  return ProductFlag;
}(_react2.default.Component);

exports.default = ProductFlag;


ProductFlag.displayName = "ProductFlag";
ProductFlag.propTypes = {
  /**
  Flags info
  */
  "flags": _react2.default.PropTypes.array,
  /**
    Additional class names
  */
  "className": _react2.default.PropTypes.string,
  /**
    Category name and link for best seller
  */
  "seeAllCategory": _react2.default.PropTypes.object,
  /**
    A flag to indicate grid view display mode on search page
  */
  "gridView": _react2.default.PropTypes.bool
};

ProductFlag.defaultProps = {
  "flags": [],
  "seeAllCategory": "",
  "gridView": false
};

exports.default = ProductFlag;