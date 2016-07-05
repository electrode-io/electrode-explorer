import React, {PropTypes} from "react";
import {POVFrame} from "@walmart/wmreact-pov-frame";
import Carousel, { getCarouselDecorators } from "@walmart/wmreact-carousel";
import { moduleTypes as ModuleTypes, getTempoModuleAutomationId } from "@walmart/category-utils";

const DESKTOP_WIDTH = 1364;
const MOBILE_WIDTH = 878;

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

const MultiStory = (props) => {
  const { stories, zone, moduleType, isMobile, arrowColor } = props;
  const initialSlideWidth = isMobile ? MOBILE_WIDTH : DESKTOP_WIDTH;

  const decoratorParams = {
    isLarge: true,
    isDark: arrowColor === "dark",
    isLight: arrowColor === "white",
    dotsStyle: {
      bottom: 12
    }
  };

  return (
    <div
      className="MultiStory"
      data-zone={zone}
      {...getTempoModuleAutomationId(moduleType, process)}>
      <Carousel
        {...{initialSlideWidth}}
        decorators={getCarouselDecorators(decoratorParams)} >
        {stories.map((story, index) => (
          <POVFrame
            key={index}
            {...story}
            lazy={index > 0}
            isMobile={isMobile}
          />
      ))}
      </Carousel>
    </div>
  );
};

MultiStory.propTypes = {
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: PropTypes.string,
  /**
  POV Frame story
  */
  stories: PropTypes.array.isRequired,
  /**
  Zone configured in tempo
  */
  zone: PropTypes.string.isRequired,
  /**
   * Device type
   **/
  isMobile: PropTypes.bool,
  /**
   * arrow color dark or white?
   */
  arrowColor: PropTypes.oneOf(["white", "dark"])
};

MultiStory.defaultProps = {
  moduleType: ModuleTypes.MULTI_STORY_POV_RESPONSIVE,
  isMobile: false,
  arrowColor: "white"
};

export default MultiStory;
