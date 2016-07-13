"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _zoom = require("./zoom");

var _zoom2 = _interopRequireDefault(_zoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Zoom out component
@examples
```jsx
<Zoom.Out />
```
@return {ReactElement} Element tree
@component Zoom.Out
@import {Zoom}
@references Zoom
*/
var ZoomOut = function ZoomOut() {
  return _react2.default.createElement(
    _zoom2.default,
    { zoomOut: true, zoomIn: false },
    "Rollback"
  );
};

_zoom2.default.Out = ZoomOut;

exports.default = ZoomOut;