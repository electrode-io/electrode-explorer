"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _themeButton = require("./theme-button");

var _themeButton2 = _interopRequireDefault(_themeButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CarouselFirstTile = function CarouselFirstTile(props) {
  var alt = props.alt;
  var src = props.src;
  var value = props.clickThrough.value;
  var title = props.title;
  var uid = props.uid;
  var themeButton = props.themeButton;
  var dataAutomationId = props.dataAutomationId;
  var className = props.className;


  var style = src ? { backgroundImage: "url(" + src + ")" } : null;

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({
      className: (0, _classnames2.default)("CarouselFirstTile text-center", className),
      style: style,
      title: alt
    }, (0, _automationIdUtils.getDataAutomationIdPair)(dataAutomationId, "")),
    _react2.default.createElement(_link2.default, (0, _extends3.default)({
      className: "CarouselFirstTile-link",
      title: title,
      "data-uid": uid,
      href: value
    }, (0, _automationIdUtils.getDataAutomationIdPair)("link", dataAutomationId))),
    themeButton && themeButton.linkText && _react2.default.createElement(_themeButton2.default, (0, _extends3.default)({
      className: "CarouselFirstTile-themeButton font-semibold display-inline-block",
      dataAutomationId: dataAutomationId
    }, themeButton))
  );
};

CarouselFirstTile.displayName = "CarouselFirstTile";

CarouselFirstTile.propTypes = {
  alt: _react.PropTypes.string,
  src: _react.PropTypes.string.isRequired,
  clickThrough: _react.PropTypes.shape({
    value: _react.PropTypes.string.isRequired
  }),
  title: _react.PropTypes.string,
  uid: _react.PropTypes.string,
  themeButton: _react.PropTypes.object,
  dataAutomationId: _react.PropTypes.string,
  className: _react.PropTypes.string
};

CarouselFirstTile.defaultProps = {
  alt: "",
  title: "",
  uid: "",
  themeButton: null,
  dataAutomationId: "",
  className: ""
};

exports.default = CarouselFirstTile;