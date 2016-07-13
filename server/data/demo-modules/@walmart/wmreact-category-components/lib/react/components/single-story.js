"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _wmreactPovFrame = require("@walmart/wmreact-pov-frame");

var _categoryUtils = require("@walmart/category-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable max-len */
/**
@examples
```jsx
<SingleStory
  zone="contentZone4"
  moduleType="SingleStoryPOVResponsive"
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
  ]}
/>
```

@component SingleStory
@import {SingleStory}
@playground
Single Story
```
<SingleStory
  zone="contentZone4"
  moduleType="SingleStoryPOVResponsive"
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
  ]}
/>
```
*/
/*eslint-enable max-len */

var SingleStory = function SingleStory(_ref) {
  var stories = _ref.stories;
  var zone = _ref.zone;
  var moduleType = _ref.moduleType;
  var isMobile = _ref.isMobile;

  if (stories && stories.length === 1) {
    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({
        className: "SingleStory",
        "data-zone": zone
      }, (0, _categoryUtils.getTempoModuleAutomationId)(moduleType, process)),
      _react2.default.createElement(_wmreactPovFrame.POVFrame, (0, _extends3.default)({}, stories[0], { isMobile: isMobile }))
    );
  } else {
    return _react2.default.createElement("span", null);
  }
};

SingleStory.defaultName = "SingleStory";

SingleStory.propTypes = {
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: _react.PropTypes.string,
  /**
  POV Frame stories.
  */
  stories: _react.PropTypes.array.isRequired,
  /**
  Tempo zone value where module is configured
  */
  zone: _react.PropTypes.string.isRequired,
  /**
   * Is Mobile breakpoint or desktop breakpoint
   */
  isMobile: _react.PropTypes.bool
};

SingleStory.defaultProps = {
  moduleType: _categoryUtils.moduleTypes.SINGLE_STORY_POV_RESPONSIVE,
  isMobile: false
};

exports.default = SingleStory;