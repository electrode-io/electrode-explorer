"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MESSAGE_404 = "The page you are looking for could not be found.";
var MESSAGE_500 = "We're having technical difficulties and are looking into the problem now.";

/**
This component displays the ErrorPage for use when errors occur in an app.
@import {ErrorPage}
@flags noVisibleRender
@component ErrorPage
@playground
ErrorPage
```
<ErrorPage statusCode={500} />
```
*/

var ErrorPage = function (_Component) {
  (0, _inherits3.default)(ErrorPage, _Component);

  function ErrorPage() {
    (0, _classCallCheck3.default)(this, ErrorPage);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  ErrorPage.prototype._renderCopy = function _renderCopy(is500) {
    return is500 ? MESSAGE_500 : MESSAGE_404;
  };

  ErrorPage.prototype._renderLinks = function _renderLinks(is500) {
    var linkClassName = "error-ErrorPage-link";

    return _react2.default.createElement(
      "div",
      { className: "error-ErrorPage-links" },
      is500 && _react2.default.createElement(
        _link2.default,
        (0, _extends3.default)({
          className: linkClassName + " btn",
          href: true
        }, (0, _automationIdUtils.getDataAutomationIdPair)("reload", linkClassName, process)),
        "Try again"
      ),
      is500 && _react2.default.createElement(
        "span",
        { className: "error-ErrorPage-links-separator" },
        "or"
      ),
      _react2.default.createElement(
        _link2.default,
        (0, _extends3.default)({
          className: linkClassName + " btn",
          href: "/"
        }, (0, _automationIdUtils.getDataAutomationIdPair)("home", linkClassName, process)),
        "Go to our homepage"
      )
    );
  };

  ErrorPage.prototype.render = function render() {
    var is500 = this.props.statusCode >= 500;

    return _react2.default.createElement(
      "div",
      { className: "error-ErrorPage" },
      _react2.default.createElement(
        "div",
        { className: "error-ErrorPage-content ResponsiveContainer text-center" },
        _react2.default.createElement(_icon2.default, { className: "error-ErrorPage-spark", name: "spark" }),
        _react2.default.createElement(
          "h1",
          { className: "error-ErrorPage-heading display-inline font-semibold" },
          "Sorry..."
        ),
        _react2.default.createElement(
          "p",
          { className: "error-ErrorPage-copy" },
          this._renderCopy(is500)
        ),
        this._renderLinks(is500)
      )
    );
  };

  return ErrorPage;
}(_react.Component);

exports.default = ErrorPage;


ErrorPage.displayName = "ErrorPage";

ErrorPage.propTypes = {
  /**
  HTTP Status code
  */
  statusCode: _react.PropTypes.number.isRequired
};