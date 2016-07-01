"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _jsMediaSelector = require("./js-media-selector");

var _jsMediaSelector2 = _interopRequireDefault(_jsMediaSelector);

var _cssMediaSelector = require("./css-media-selector");

var _cssMediaSelector2 = _interopRequireDefault(_cssMediaSelector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Media selector is a component that wraps a group of children.
Those children can have a `visibleWidths` prop that defines
when they should be visible. For example, if the child has
`visibleWidths` set to `['small','medium']` then it will only
be visible in small and medium screen widths.

Here is a simple example, where the first child is shown when the
media size is `medium` or above, and the second child is shown only
when the media size is below `medium`.

propTypes:
  - children:
    Type: node
    Description: Children to render in the container
  - onChange:
    Type:.func
    Description: An event fired when the media width changes
  - mode:
    Type:oneOf(["css", "hide", "delete"])
    Description: Selects between either `hide`ing the childrens on not displaying
    them (i.e. `delete`)
  - default:
    Type: React.PropTypes.string
    Description: Sets the default media width for server rendering

```jsx
<MediaSelector>
  <div visibleAtOrAbove="medium">Shown in medium</div>
  <div visibleBelow="medium">Shown below medium</div>
</MediaSelector>
```
@component MediaSelector
@synonym responsive
@import {MediaSelector}
@playground
MediaSelector
```
<MediaSelector mode="hide">
  <div visibleWidths={['small']}>Currently in small</div>
  <div visibleWidths={['medium']}>Currently in medium</div>
  <div visibleWidths={['large']}>Currently in large</div>
  <div visibleWidths={['x-large']}>Currently in x-large</div>
  <div visibleWidths={['xx-large']}>Currently in xx-large</div>
  <hr/>

  <div visibleAbove='small'>visibleAbove: Visible in Medium and above</div>
  <div visibleAbove='medium'>visibleAbove: Visible in Large and above</div>
  <hr/>

  <div visibleAtOrAbove='medium'>visibleAtOrAbove: Visible in Medium and above</div>
  <div visibleAtOrAbove='large'>visibleAtOrAbove: Visible in Large and above</div>
  <hr/>

  <div visibleBelow='medium'>visibleBelow: Visible in Small</div>
  <div visibleBelow='large'>visibleBelow: Visible in Small and Medium</div>
  <hr/>

  <div visibleAtOrBelow='small'>visibleAtOrBelow: Visible in Small</div>
  <div visibleAtOrBelow='medium'>visibleAtOrBelow: Visible in Small and Medium</div>
  <hr/>

  <div hiddenAbove='small'>hiddenAbove: Visible in Small</div>
  <div hiddenAbove='medium'>hiddenAbove: Visible in Small and Medium</div>
  <hr/>

  <div hiddenAtOrAbove='medium'>hiddenAtOrAbove: Visible in Small</div>
  <div hiddenAtOrAbove='large'>hiddenAtOrAbove: Visible in Small and Medium</div>
  <hr/>

  <div hiddenBelow='medium'>hiddenBelow: Visible above Small</div>
  <div hiddenBelow='large'>hiddenBelow: Visible above Medium</div>
  <hr/>

  <div hiddenAtOrBelow='medium'>hiddenAtOrAbove: Visible in Large</div>
  <div hiddenAtOrBelow='large'>hiddenAtOrAbove: Visible above Large</div>
</MediaSelector>
```
@param {object} props object with following properties children, onChange, mode, default.
@returns {ReactElement} The JSMediaSelector or CSSMediaSelector component.
*/
var MediaSelector = function MediaSelector(props) {
  var mode = props.mode || "delete";
  if (mode === "css") {
    return _react2.default.createElement(_cssMediaSelector2.default, props);
  } else {
    return _react2.default.createElement(_jsMediaSelector2.default, props);
  }
};

exports.default = MediaSelector;