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

var _wmreactProductDescriptors = require("@walmart/wmreact-product-descriptors");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductRating = function (_React$Component) {
  (0, _inherits3.default)(ProductRating, _React$Component);

  function ProductRating() {
    (0, _classCallCheck3.default)(this, ProductRating);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  ProductRating.prototype.render = function render() {
    var starClasses = (0, _classnames2.default)("stars", "stars-" + this.props.size);
    var ratingClasses = (0, _classnames2.default)("search-result-product-rating", { "rating-longer-text": this.props.mediaRating && this.props.mediaRating.length > 6 || this.props.esrb && this.props.esrb.length > 6 });

    return _react2.default.createElement(
      "div",
      { className: ratingClasses },
      _react2.default.createElement(
        "div",
        { className: starClasses },
        this.props.customerRating && this.props.numReviews ? _react2.default.createElement(_wmreactProductDescriptors.Stars, {
          size: this.props.size,
          average: this.props.customerRating,
          total: 5,
          count: this.props.numReviews }) : null
      )
    );
  };

  return ProductRating;
}(_react2.default.Component);

exports.default = ProductRating;


ProductRating.displayName = "ProductRating";
ProductRating.propTypes = {
  /**
  Customer Rating Value
  */
  customerRating: _react2.default.PropTypes.number.isRequired,
  /**
  Number of reviews
  */
  numReviews: _react2.default.PropTypes.number.isRequired,
  /**
  Media Rating Value
  */
  mediaRating: _react2.default.PropTypes.string,
  /**
  Size of rating stars
  */
  size: _react2.default.PropTypes.string,
  /**
  esrb value
  */
  esrb: _react2.default.PropTypes.string
};

ProductRating.defaultProps = {
  customerRating: 0,
  numReviews: 0
};

exports.default = ProductRating;