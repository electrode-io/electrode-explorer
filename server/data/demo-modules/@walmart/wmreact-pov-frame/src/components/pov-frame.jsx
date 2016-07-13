import React, {PropTypes} from "react";
import POVImage from "./pov-image";
import ThemeButton from "./theme-button";
import DynamicPriceBubble from "./dynamic-price-bubble";

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
const POVFrame = ({ lazy, image, overlays, themeButton, isMobile }) => (
  <div className="shorter-pov-frame">
    <POVFrame.Image {...image} {...{lazy, isMobile}} />
    {themeButton && <POVFrame.ThemeButton {...themeButton} />}
    {overlays.map((overlay, index) => (
      <POVFrame.DynamicPriceBubble key={index} {...overlay} />
    ))}
  </div>
);

POVFrame.displayName = "POVFrame";

POVFrame.propTypes = {
  themeButton: PropTypes.object,
  overlays: PropTypes.array,
  image: PropTypes.object.isRequired,
  lazy: PropTypes.bool,
  isMobile: PropTypes.bool
};

POVFrame.defaultProps = {
  lazy: false,
  overlays: [],
  themeButton: null,
  isMobile: false
};

POVFrame.Image = POVImage;
POVFrame.ThemeButton = ThemeButton;
POVFrame.DynamicPriceBubble = DynamicPriceBubble;

export default POVFrame;
