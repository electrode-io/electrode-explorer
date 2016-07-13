"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Themable button for POVs.
@param {Object} props React props for the component
@returns {ReactElement} Image link component
*/
var ThemeButton = function ThemeButton(_ref) {
  var themeButtonColor = _ref.themeButtonColor;
  var buttonAlignment = _ref.buttonAlignment;
  var buttonTextColor = _ref.buttonTextColor;
  var linkText = _ref.linkText;
  var clickThrough = _ref.clickThrough;


  if (!linkText) {
    return _react2.default.createElement("span", null);
  }

  var classes = (0, _classnames2.default)("btn hide-content-max-m display-inline-block-m pov-theme-button", "pov-theme-button-" + buttonAlignment);

  var style = {
    backgroundColor: themeButtonColor,
    color: buttonTextColor
  };

  return _react2.default.createElement(
    _link2.default,
    {
      className: classes,
      href: clickThrough.value,
      style: style
    },
    linkText
  );
};

ThemeButton.displayName = "POVFrame.ThemeButton";

ThemeButton.propTypes = {
  /**
  Button Alignment wrt POV Container. (left, center, right)
  */
  buttonAlignment: _react.PropTypes.oneOf(["left", "center", "right"]),
  /**
  Text to show on Button.
  */
  linkText: _react.PropTypes.string.isRequired,
  /**
  Target url link.
  */
  clickThrough: _react.PropTypes.shape({
    type: _react.PropTypes.string.isRequired,
    value: _react.PropTypes.string.isRequired
  }),
  /**
  Button Text color.
  */
  buttonTextColor: _react.PropTypes.string,
  /**
  Button background color.
  */
  themeButtonColor: _react.PropTypes.string,
  /**
  identifier used in analytics.
  */
  uid: _react.PropTypes.string,
  /**
  identifier used in analytics.
  */
  assetId: _react.PropTypes.string
};

ThemeButton.defaultProps = {
  buttonAlignment: "",
  themeButtonColor: "",
  buttonTextColor: ""
};

exports.default = ThemeButton;