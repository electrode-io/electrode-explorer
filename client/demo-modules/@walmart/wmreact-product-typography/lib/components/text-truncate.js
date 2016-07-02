"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactTextTruncate = require("react-text-truncate");

var _reactTextTruncate2 = _interopRequireDefault(_reactTextTruncate);

var _exenv = require("exenv");

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 Isomorphic text truncation. Uses `react-text-truncate` when doing a client-side
 render, otherwise visually truncates using CSS `max-height`.
 */
var _getMaxHeight = function _getMaxHeight(lineHeight, maxLines) {
  if (typeof maxLines !== "number") {
    return "none";
  }
  if (typeof lineHeight === "number") {
    return lineHeight * maxLines + "em";
  }
  var match = lineHeight.match(/([-\d.]+)(.*)/);
  if (match) {
    var number = parseFloat(match[1]);
    var units = match[2] || "em";
    return "" + number * maxLines + units;
  }
  // Let the browser try to deal with it.
  return "calc(" + lineHeight + " * " + maxLines + ")";
}; /* eslint valid-jsdoc: 0 */


var TextTruncate = function TextTruncate(props) {
  var serverLineHeight = props.serverLineHeight;
  var maxLines = props.line;
  var doInsertHTMLTitle = props.doInsertHTMLTitle;
  var rest = (0, _objectWithoutProperties3.default)(props, ["serverLineHeight", "line", "doInsertHTMLTitle"]);

  var maxHeight = _getMaxHeight(serverLineHeight, maxLines);
  var style = { maxHeight: maxHeight, overflow: "hidden" };
  if (_exenv2.default.canUseDOM) {
    if (doInsertHTMLTitle) {
      return _react2.default.createElement("div", { style: style, dangerouslySetInnerHTML: { __html: props.text } });
    } else {
      return _react2.default.createElement(_reactTextTruncate2.default, (0, _extends3.default)({ line: maxLines }, rest));
    }
  }
  return _react2.default.createElement("div", { style: style, dangerouslySetInnerHTML: { __html: props.text } });
};

TextTruncate.propTypes = {
  /**
   The CSS `line-height` to use when visually truncating text in a
   server-side render.
   */
  serverLineHeight: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  /**
   The text to (potentially) truncate; passed along to `react-text-truncate`.
   */
  text: _react2.default.PropTypes.string,
  /**
   The maximum number of lines to render; passed along to `react-text-truncate`.
   */
  line: _react2.default.PropTypes.number,
  /**
  A flag to enable title inserted as HTML
  */
  doInsertHTMLTitle: _react2.default.PropTypes.bool
};

TextTruncate.defaultProps = {
  serverLineHeight: 1.5 // Default for many Walmart titles
};
TextTruncate._getMaxHeight = _getMaxHeight;

exports.default = TextTruncate;