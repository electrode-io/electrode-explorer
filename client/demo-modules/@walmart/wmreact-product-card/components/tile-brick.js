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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@private
*/

var TileBrick = function (_Component) {
  (0, _inherits3.default)(TileBrick, _Component);

  function TileBrick() {
    (0, _classCallCheck3.default)(this, TileBrick);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  TileBrick.prototype._renderBrickTitle = function _renderBrickTitle() {
    return _react2.default.createElement(
      "p",
      { className: (0, _classnames2.default)("heading-d", "brick-heading") },
      this.props.title
    );
  };

  TileBrick.prototype._renderBrickFooter = function _renderBrickFooter() {
    var options = [];

    if (this.props.quantities) {
      this.props.quantities.forEach(function (quantity, index) {
        options.push(_react2.default.createElement(
          "option",
          { key: index },
          quantity
        ));
      });
    }

    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)("brick-footer", "form-inline") },
      _react2.default.createElement(
        "label",
        null,
        this.props.unitLabel
      ),
      _react2.default.createElement(
        "select",
        null,
        options
      ),
      _react2.default.createElement(
        "b",
        { className: "pull-right" },
        "$",
        this.props.price
      )
    );
  };

  TileBrick.prototype._renderBrickImage = function _renderBrickImage() {
    return _react2.default.createElement("img", { className: "product-image",
      src: this.props.imageSrc,
      alt: this.props.altText });
  };

  TileBrick.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: "brick" },
      _react2.default.createElement(
        "div",
        { className: "brick-primary" },
        this._renderBrickImage(),
        this._renderBrickTitle()
      ),
      this._renderBrickFooter()
    );
  };

  return TileBrick;
}(_react.Component);

exports.default = TileBrick;


TileBrick.displayName = "Tile.Brick";

TileBrick.propTypes = {
  title: _react2.default.PropTypes.string,
  quantities: _react2.default.PropTypes.array,
  unitLabel: _react2.default.PropTypes.string,
  price: _react2.default.PropTypes.number,
  imageSrc: _react2.default.PropTypes.string,
  altText: _react2.default.PropTypes.string
};