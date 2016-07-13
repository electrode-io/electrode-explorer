import React, {PropTypes} from "react";
import {POVFrame} from "@walmart/wmreact-pov-frame";
import { moduleTypes as ModuleTypes, getTempoModuleAutomationId } from "@walmart/category-utils";

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

const SingleStory = ({stories, zone, moduleType, isMobile}) => {
  if (stories && stories.length === 1) {
    return (
      <div
        className="SingleStory"
        data-zone={zone}
        {...getTempoModuleAutomationId(moduleType, process)}>
        <POVFrame {...stories[0]} isMobile={isMobile} />
      </div>
    );
  } else {
    return <span />;
  }
};

SingleStory.defaultName = "SingleStory";

SingleStory.propTypes = {
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: PropTypes.string,
  /**
  POV Frame stories.
  */
  stories: PropTypes.array.isRequired,
  /**
  Tempo zone value where module is configured
  */
  zone: PropTypes.string.isRequired,
  /**
   * Is Mobile breakpoint or desktop breakpoint
   */
  isMobile: PropTypes.bool
};

SingleStory.defaultProps = {
  moduleType: ModuleTypes.SINGLE_STORY_POV_RESPONSIVE,
  isMobile: false
};

export default SingleStory;
