"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _wmreactPovFrame = require("@walmart/wmreact-pov-frame");

var _wmreactCarousel = require("@walmart/wmreact-carousel");

var _wmreactCarousel2 = _interopRequireDefault(_wmreactCarousel);

var _categoryUtils = require("@walmart/category-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DESKTOP_WIDTH = 1364;
var MOBILE_WIDTH = 878;

/*eslint-disable max-len */
/**
@examples
```jsx
<MultiStory
  zone="contentZone6"
  moduleType="MultiStoryPOVResponsive"
  stories={[
  {
    image: {
      "alt": "baby",
      "assetId": "b4631310-642b-11e3-b237-c7cdeaa7b88b",
      "assetName": "HP POV Game Time jpg",
      "clickThrough": {
        "type": "url",
        "value": "/cp/5427"
      },
      "height": "300",
      "src": "http://i5.walmartimages.com/dfwrs/4ff4222f-9463/k2-_df02acf2-9ea8-4834-82d1-73a6a832d26a.v1.jpg",
      "title": "Baby",
      "width": "1364",
      "contentType": "image/jpg",
      "uid": "F3iC4BLR"
    },
    themeButton: {
      "buttonAlignment": "right",
      "linkText": "CTA text",
      "title": "CTA text",
      "themeButtonColor": "FFFFFF",
      "buttonTextColor": "000000",
      "uid": "jxcPumkq",
      "assetId": "dasdasdsa",
      "clickThrough": {
        "type": "url",
        "value": "/"
      }
    },
    "overlays": [
      {
      "location":"A10",
      "currentPrice":"13.49",
      "listPrice": "25.12",
      "defaultColor":"#FFFFFF",
      "hexCode":"#543736",
      "priceDisplay":"Just",
      "bubbleText": "Test Message",
      "uid":"J-zT8l7U"
      }
    ]
  }
    ,{
      image: {
        "alt": "pov1",
        "assetId": "3ed12cc0-ffef-11e4-a7e0-4925ffc4aa1b",
        "assetName": "pov-beauty.png",
        "clickThrough": {
          "type":"url",
          "value":"http://www.walmart.com/browse/home/beds/4044_103150_102547_91837"
        },
        "height": "300",
        "src":"//i5.walmartimages.com/dfwrs/4ff4222f-1e5e/k2-_bb7d2f18-ee6c-4fd4-bcd4-ada4ce955c3d.v1.jpg",
        "title":"pov1",
        "width":"1364",
        "size":"217814",
        "contentType":"image/png",
        "uid":"pxNz71rX"
      },
      themeButton: {
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
      },
      overlays: [
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
      ]
    }
  ]}
/>
```

@component MultiStory
@import {MultiStory}
@playground
Multi Story
```
<MultiStory
  zone="contentZone6"
  moduleType="MultiStoryPOVResponsive"
  arrowColor="light",
  stories={[
  {
    image: {
      "alt": "baby",
      "assetId": "b4631310-642b-11e3-b237-c7cdeaa7b88b",
      "assetName": "HP POV Game Time jpg",
      "clickThrough": {
        "type": "url",
        "value": "/cp/5427"
      },
      "height": "300",
      "src": "http://i5.walmartimages.com/dfwrs/4ff4222f-9463/k2-_df02acf2-9ea8-4834-82d1-73a6a832d26a.v1.jpg",
      "title": "Baby",
      "width": "1364",
      "contentType": "image/jpg",
      "uid": "F3iC4BLR"
    },
    themeButton: {
      "buttonAlignment": "right",
      "linkText": "CTA text",
      "title": "CTA text",
      "themeButtonColor": "FFFFFF",
      "buttonTextColor": "000000",
      "uid": "jxcPumkq",
      "assetId": "dasdasdsa",
      "clickThrough": {
        "type": "url",
        "value": "/"
      }
    },
    "overlays": [
      {
      "location":"A10",
      "currentPrice":"13.49",
      "listPrice": "25.12",
      "defaultColor":"#FFFFFF",
      "hexCode":"#543736",
      "priceDisplay":"Just",
      "bubbleText": "Test Message",
      "uid":"J-zT8l7U"
      }
    ]
  }
    ,{
      image: {
        "alt": "pov1",
        "assetId": "3ed12cc0-ffef-11e4-a7e0-4925ffc4aa1b",
        "assetName": "pov-beauty.png",
        "clickThrough": {
          "type":"url",
          "value":"http://www.walmart.com/browse/home/beds/4044_103150_102547_91837"
        },
        "height": "300",
        "src":"//i5.walmartimages.com/dfwrs/4ff4222f-1e5e/k2-_bb7d2f18-ee6c-4fd4-bcd4-ada4ce955c3d.v1.jpg",
        "title":"pov1",
        "width":"1364",
        "size":"217814",
        "contentType":"image/png",
        "uid":"pxNz71rX"
      },
      themeButton: {
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
      },
      overlays: [
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
      ]
    }
  ]}
/>
```
*/
/*eslint-enable max-len */

var MultiStory = function MultiStory(props) {
  var stories = props.stories;
  var zone = props.zone;
  var moduleType = props.moduleType;
  var isMobile = props.isMobile;
  var arrowColor = props.arrowColor;

  var initialSlideWidth = isMobile ? MOBILE_WIDTH : DESKTOP_WIDTH;

  var decoratorParams = {
    isLarge: true,
    isDark: arrowColor === "dark",
    isLight: arrowColor === "white",
    dotsStyle: {
      bottom: 12
    }
  };

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({
      className: "MultiStory",
      "data-zone": zone
    }, (0, _categoryUtils.getTempoModuleAutomationId)(moduleType, process)),
    _react2.default.createElement(
      _wmreactCarousel2.default,
      (0, _extends3.default)({ initialSlideWidth: initialSlideWidth }, {
        decorators: (0, _wmreactCarousel.getCarouselDecorators)(decoratorParams) }),
      stories.map(function (story, index) {
        return _react2.default.createElement(_wmreactPovFrame.POVFrame, (0, _extends3.default)({
          key: index
        }, story, {
          lazy: index > 0,
          isMobile: isMobile
        }));
      })
    )
  );
};

MultiStory.propTypes = {
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: _react.PropTypes.string,
  /**
  POV Frame story
  */
  stories: _react.PropTypes.array.isRequired,
  /**
  Zone configured in tempo
  */
  zone: _react.PropTypes.string.isRequired,
  /**
   * Device type
   **/
  isMobile: _react.PropTypes.bool,
  /**
   * arrow color dark or white?
   */
  arrowColor: _react.PropTypes.oneOf(["white", "dark"])
};

MultiStory.defaultProps = {
  moduleType: _categoryUtils.moduleTypes.MULTI_STORY_POV_RESPONSIVE,
  isMobile: false,
  arrowColor: "white"
};

exports.default = MultiStory;