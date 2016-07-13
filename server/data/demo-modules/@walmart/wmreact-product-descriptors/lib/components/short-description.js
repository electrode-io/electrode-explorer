"use strict";

exports.__esModule = true;
exports.rawMarkup = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var rawMarkup = exports.rawMarkup = function rawMarkup(shortDescriptionMarkup) {
  return { __html: shortDescriptionMarkup };
};

var ShortDescription = function ShortDescription(props) {
  var shortDescriptionMarkup = props.shortDescriptionMarkup;
  var className = props.className;


  return _react2.default.createElement(
    "div",
    { className: (0, _classnames2.default)("ProductPage-short-description", className) },
    _react2.default.createElement(
      "div",
      { className: "ProductPage-short-description-header" },
      "About this item"
    ),
    _react2.default.createElement("div", { className: "ProductPage-short-description-body",
      dangerouslySetInnerHTML: rawMarkup(shortDescriptionMarkup) }),
    _react2.default.createElement(
      "a",
      { href: "#about", className: "ProductPage-read-more-link" },
      " Read more.... "
    )
  );
};

ShortDescription.displayName = "ShortDescription";

ShortDescription.propTypes = {

  /**
   * Short description markup
   */
  shortDescriptionMarkup: _react.PropTypes.string,
  className: _react.PropTypes.string
};

exports.default = ShortDescription;