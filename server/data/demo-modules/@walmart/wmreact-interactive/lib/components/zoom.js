"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _button = require("./button");

var _button2 = _interopRequireDefault(_button);

var _fireStatelessUiEvent = require("@walmart/wmreact-analytics/lib/helpers/fire-stateless-ui-event");

var _fireStatelessUiEvent2 = _interopRequireDefault(_fireStatelessUiEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Zoom component
@examples
```jsx
<Zoom zoomIn={true}/>
```

Or:

```jsx
<Zoom zoomOut={true}/>
```

`onClick` is passed through so you can:

```jsx
<Zoom zoomOut={true} onClick={this.zoomOut}/>
```
@return {ReactElement} Element tree
@param {object} props Props
@param {object} context Context
@component Zoom
@import {Zoom}
@references Zoom
@playground
Zoom
```
<div>
  <Zoom zoomIn={true}/>
  <Zoom zoomOut={true}/>
</div>
```
*/

/* eslint react/prop-types: 0 */
var Zoom = function Zoom(props, context) {
  var _onClick = function _onClick(event) {
    (0, _fireStatelessUiEvent2.default)(props, context, event);
    if (props.onClick) {
      props.onClick(event);
    }
  };
  var extras = {
    "wmicon-zoom": props.zoomIn,
    "wmicon-zoom-out": props.zoomOut
  };
  var hiddenText = props.zoomIn ? "Zoom In" : "Zoom Out";
  return _react2.default.createElement(
    _button2.default,
    (0, _extends3.default)({}, props, {
      onClick: function onClick(e) {
        return _onClick(e);
      },
      className: (0, _classnames2.default)(extras, "zoom wmicon", props.className) }),
    _react2.default.createElement(
      "span",
      { className: "visuallyhidden" },
      hiddenText
    )
  );
};

Zoom.contextTypes = {
  analytics: _react2.default.PropTypes.object
};

exports.default = Zoom;