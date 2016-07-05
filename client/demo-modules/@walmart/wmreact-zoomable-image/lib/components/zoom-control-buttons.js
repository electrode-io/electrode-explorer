"use strict";

exports.__esModule = true;
exports._getZoomControlsClasses = exports._getResetButtonClasses = exports._getZoomOutButtonClasses = exports._getZoomInButtonClasses = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 A controller component for zooming. Contains a zoom in,
 zoom out, an optional reset button.
 ```jsx
 <div style={{position:"relative", height: 200}}>
 <ZoomControlButtons
 fullyZoomedOut={true}
 fullyZoomedIn={false}
 enableReset={true}/>
 </div>
 ```
 @import {ZoomControlButtons}
 @flags noVisibleRender
 @component ZoomControlButtons
 @playground
 ZoomControlButtons
 ```
 <div style={{position:"relative", height: 200}}>
 <ZoomControlButtons
 fullyZoomedOut={true}
 fullyZoomedIn={false}
 enableReset={true}/>
 </div>
 ```
 */

var _getZoomInButtonClasses = exports._getZoomInButtonClasses = function _getZoomInButtonClasses(fullyZoomedIn) {
  return (0, _classnames2.default)("ZoomControlButtons-zoomin", { "disabled": fullyZoomedIn });
};

var _getZoomOutButtonClasses = exports._getZoomOutButtonClasses = function _getZoomOutButtonClasses(fullyZoomedOut) {
  return (0, _classnames2.default)("ZoomControlButtons-zoomout", { "disabled": fullyZoomedOut });
};

var _getResetButtonClasses = exports._getResetButtonClasses = function _getResetButtonClasses(fullyZoomedOut, enableReset) {
  return (0, _classnames2.default)("ZoomControlButtons-reset", {
    "disabled": fullyZoomedOut,
    "hide-content": !enableReset
  });
};

var _getZoomControlsClasses = exports._getZoomControlsClasses = function _getZoomControlsClasses(enableReset, className) {
  return (0, _classnames2.default)("ZoomControlButtons-container", {
    "ZoomControlButtons--resetenabled": enableReset
  }, className);
};

var ZoomControlButtons = function ZoomControlButtons(props) {
  // deconstruct props with default values
  var _props$zoomInClick = props.zoomInClick;
  var zoomInClick = _props$zoomInClick === undefined ? function () {} : _props$zoomInClick;
  var _props$zoomOutClick = props.zoomOutClick;
  var zoomOutClick = _props$zoomOutClick === undefined ? function () {} : _props$zoomOutClick;
  var _props$resetClick = props.resetClick;
  var resetClick = _props$resetClick === undefined ? function () {} : _props$resetClick;
  var _props$fullyZoomedOut = props.fullyZoomedOut;
  var fullyZoomedOut = _props$fullyZoomedOut === undefined ? true : _props$fullyZoomedOut;
  var _props$fullyZoomedIn = props.fullyZoomedIn;
  var fullyZoomedIn = _props$fullyZoomedIn === undefined ? false : _props$fullyZoomedIn;
  var _props$enableReset = props.enableReset;
  var enableReset = _props$enableReset === undefined ? false : _props$enableReset;
  var _props$resetButtonLab = props.resetButtonLabel;
  var resetButtonLabel = _props$resetButtonLab === undefined ? "Reset" : _props$resetButtonLab;
  var _props$className = props.className;
  var className = _props$className === undefined ? "" : _props$className;


  return _react2.default.createElement(
    "div",
    { className: _getZoomControlsClasses(enableReset, className) },
    _react2.default.createElement(
      _button2.default,
      { inverse: true, onClick: zoomInClick,
        className: _getZoomInButtonClasses(fullyZoomedIn) },
      _react2.default.createElement(_icon2.default, { name: "zoom", size: 1 })
    ),
    _react2.default.createElement(
      _button2.default,
      { inverse: true,
        onClick: zoomOutClick,
        className: _getZoomOutButtonClasses(fullyZoomedOut) },
      _react2.default.createElement(_icon2.default, { name: "zoom-out", size: 1 })
    ),
    _react2.default.createElement(
      _button2.default,
      { inverse: true,
        onClick: resetClick,
        className: _getResetButtonClasses(fullyZoomedOut, enableReset) },
      resetButtonLabel
    )
  );
};

ZoomControlButtons.propTypes = {
  /**
   Callback handler for zoomIn button click event
   */
  "zoomInClick": _react.PropTypes.func,
  /**
   Callback handler for zoomOut button click event
   */
  "zoomOutClick": _react.PropTypes.func,
  /**
   Callback handler for reset button click event
   */
  "resetClick": _react.PropTypes.func,
  /**
   Boolean indicating if a component is fullyZoomedIn
   */
  "fullyZoomedOut": _react.PropTypes.bool,
  /**
   Boolean indicating if a component is fullyZoomedIn
   */
  "fullyZoomedIn": _react.PropTypes.bool,
  /**
   When set to true, display a reset button
   */
  "enableReset": _react.PropTypes.bool,
  /**
   Label for the optional reset button.
   */
  "resetButtonLabel": _react.PropTypes.string,
  /**
   Additional css classNames passed into the component.
   */
  "className": _react.PropTypes.string
};

exports.default = ZoomControlButtons;