"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _povImage = require("./pov-image");

var _povImage2 = _interopRequireDefault(_povImage);

var _themeButton = require("./theme-button");

var _themeButton2 = _interopRequireDefault(_themeButton);

var _dynamicPriceBubble = require("./dynamic-price-bubble");

var _dynamicPriceBubble2 = _interopRequireDefault(_dynamicPriceBubble);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable max-len*/
/**
A Single frame in SingleStory and MultiStory POV modules.

@param {Object} props React props for the component
@returns {ReactElement} Image link component
@examples
Basic POV Frame
```jsx
<POVFrame
  image={{
    "alt": "pov1",
    "assetId": "3ed12cc0-ffef-11e4-a7e0-4925ffc4aa1b",
    "assetName": "pov-beauty.png",
    "clickThrough": {
      "type":"url",
      "value":"http://www.walmart.com/browse/home/beds/4044_103150_102547_91837"
    },
    "height": "388",
    "src":"http://i5.walmartimages.com/dfwrs/4ff4222f-cadc/k2-_288b2829-b678-4014-9b77-3b9ac61d25c6.v1.png",
    "title":"pov1",
    "width":"1364",
    "size":217814,
    "contentType":"image/png",
    "uid":"pxNz71rX"
  }}
/>
```

POV Frame with theme button

```jsx
<POVFrame
  image={{
    "alt": "pov1",
    "assetId": "3ed12cc0-ffef-11e4-a7e0-4925ffc4aa1b",
    "assetName": "pov-beauty.png",
    "clickThrough": {
      "type":"url",
      "value":"http://www.walmart.com/browse/home/beds/4044_103150_102547_91837"
    },
    "height": "388",
    "src":"http://i5.walmartimages.com/dfwrs/4ff4222f-cadc/k2-_288b2829-b678-4014-9b77-3b9ac61d25c6.v1.png",
    "title":"pov1",
    "width":"1364",
    "size":217814,
    "contentType":"image/png",
    "uid":"pxNz71rX"
  }}
  themeButton= {{
    buttonAlignment: "right",
    themeButtonColor: "#8b67a5",
    buttonTextColor: "#fff",
    linkText: "Shop Pantene Pro-V",
    title: "Shop Pantene Pro-V",
    clickThrough: {
      type: "url",
      value: "http://www-e16.walmart.com/cp/103150"
    },
    uid: "ca6b4pJ9",
    assetId: "dadas13112"
  }}
/>
```

POVFrame with Overlay buttons
```jsx
<POVFrame
  image={{
    "alt": "pov1",
    "assetId": "3ed12cc0-ffef-11e4-a7e0-4925ffc4aa1b",
    "assetName": "pov-beauty.png",
    "clickThrough": {
      "type":"url",
      "value":"http://www.walmart.com/browse/home/beds/4044_103150_102547_91837"
    },
    "height": "388",
    "src":"http://i5.walmartimages.com/dfwrs/4ff4222f-cadc/k2-_288b2829-b678-4014-9b77-3b9ac61d25c6.v1.png",
    "title":"pov1",
    "width":"1364",
    "size":217814,
    "contentType":"image/png",
    "uid":"pxNz71rX"
  }}
  overlays= {[
    {
      "location":"A1",
      "currentPrice":"73.49",
      "listPrice": "85.12",
      "defaultColor":"#FFFFFF",
      "hexCode":"#543736",
      "priceDisplay":"Rollback",
      "bubbleText": "Test Message",
      "uid":"J-zT8l7U"
    }
   ]}
/>
```
@import {POVFrame}
@component POVFrame
@playground
POV Frame
```
<POVFrame
  image={{
    "alt": "pov1",
    "assetId": "3ed12cc0-ffef-11e4-a7e0-4925ffc4aa1b",
    "assetName": "pov-beauty.png",
    "clickThrough": {
      "type":"url",
      "value":"http://www.walmart.com/browse/home/beds/4044_103150_102547_91837"
    },
    "height": "388",
    "src":"http://i5.walmartimages.com/dfwrs/4ff4222f-cadc/k2-_288b2829-b678-4014-9b77-3b9ac61d25c6.v1.png",
    "title":"pov1",
    "width":"1364",
    "size":217814,
    "contentType":"image/png",
    "uid":"pxNz71rX"
  }}
  themeButton= {{
    buttonAlignment: "right",
    themeButtonColor: "#8b67a5",
    buttonTextColor: "#fff",
    linkText: "Shop Pantene Pro-V",
    title: "Shop Pantene Pro-V",
    clickThrough: {
      type: "url",
      value: "http://www-e16.walmart.com/cp/103150"
    },
    uid: "ca6b4pJ9",
    assetId: "dadas13112"
  }}
  overlays= {[
    {
      "location":"A1",
      "currentPrice":"73.49",
      "listPrice": "85.12",
      "defaultColor":"#FFFFFF",
      "hexCode":"#543736",
      "priceDisplay":"Rollback",
      "bubbleText": "Test Message",
      "uid":"J-zT8l7U"
    }
   ]}
/>
```
*/
/*eslint-enable max-len*/
var POVFrame = function POVFrame(_ref) {
  var lazy = _ref.lazy;
  var image = _ref.image;
  var overlays = _ref.overlays;
  var themeButton = _ref.themeButton;
  var isMobile = _ref.isMobile;
  return _react2.default.createElement(
    "div",
    { className: "shorter-pov-frame" },
    _react2.default.createElement(POVFrame.Image, (0, _extends3.default)({}, image, { lazy: lazy, isMobile: isMobile })),
    themeButton && _react2.default.createElement(POVFrame.ThemeButton, themeButton),
    overlays.map(function (overlay, index) {
      return _react2.default.createElement(POVFrame.DynamicPriceBubble, (0, _extends3.default)({ key: index }, overlay));
    })
  );
};

POVFrame.displayName = "POVFrame";

POVFrame.propTypes = {
  themeButton: _react.PropTypes.object,
  overlays: _react.PropTypes.array,
  image: _react.PropTypes.object.isRequired,
  lazy: _react.PropTypes.bool,
  isMobile: _react.PropTypes.bool
};

POVFrame.defaultProps = {
  lazy: false,
  overlays: [],
  themeButton: null,
  isMobile: false
};

POVFrame.Image = _povImage2.default;
POVFrame.ThemeButton = _themeButton2.default;
POVFrame.DynamicPriceBubble = _dynamicPriceBubble2.default;

exports.default = POVFrame;