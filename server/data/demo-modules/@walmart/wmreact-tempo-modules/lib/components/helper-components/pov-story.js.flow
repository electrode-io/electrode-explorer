import React, { PropTypes } from "react";
import classnames from "classnames";

import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import ClickThroughImage from "./click-through-image-map";
import ThemeButton from "./theme-button";
import DynamicPriceBubble from "./dynamic-price-bubble";
import PointerEventsNoneWrapper from "./pointer-events-none-wrapper";

/**
A Single pov in SingleStory and MultiStory POV modules.
@param {Object} props React props for the component
@returns {ReactElement} Image link component
@examples
Basic POV Story
```jsx
<POVStory {...povStoryData}/>
```
*/

const POVStory = (props) => {
  const {
    story: {
      image,
      overlays,
      themeButtonColor,
      buttonAlignment,
      themeButton,
      buttonTextColor,
      mobileImage
    },
    isMobile,
    lazy,
    dataAutomationId
  } = props;

  const isMobileImage = isMobile && mobileImage;

  const imageSize = ({
    height: isMobileImage ? "178" : "300",
    width: isMobileImage ? "809" : "1364"
  });

  const povImage = isMobileImage ? mobileImage : image;

  const classes = classnames(
    "btn hide-content-max-m display-inline-block-m PovThemeButton",
    `PovThemeButton-${buttonAlignment}`
  );

  return (
    <div
      className="PovStory"
      {...getDataAutomationIdPair("POV", dataAutomationId)}>
      {overlays && overlays.map((overlay, index) => (
        <PointerEventsNoneWrapper key={index}>
          <DynamicPriceBubble
            dataAutomationId={dataAutomationId}
            overlay={overlay}
            isMobileImage={isMobileImage}
          />
        </PointerEventsNoneWrapper>
      ))}
      <ClickThroughImage
        lazy={lazy}
        image={povImage}
        imageSize={imageSize}
        dataAutomationId={dataAutomationId}
      />
      {themeButton && <ThemeButton
        themeButtonColor={themeButtonColor}
        dataAutomationId={dataAutomationId}
        className={classes}
        buttonTextColor={buttonTextColor}

        {...themeButton} />}
    </div>
  );
};

POVStory.displayName = "POVStory";

POVStory.propTypes = {
  /**
  story object of POV
  */
  story: PropTypes.shape({
    image: PropTypes.shape({
      alt: PropTypes.string,
      clickThrough: PropTypes.shape({
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.array
        ]),
        type: PropTypes.string
      }),
      title: PropTypes.string,
      src: PropTypes.string
    }).isRequired,
    overlays: PropTypes.array,
    themeButtonColor: PropTypes.string,
    themeButton: PropTypes.object,
    buttonTextColor: PropTypes.string,
    mobileImage: PropTypes.shape({
      alt: PropTypes.string,
      clickThrough: PropTypes.shape({
        value: PropTypes.oneOfType([
          PropTypes.string,
          PropTypes.array
        ]),
        type: PropTypes.string
      }),
      title: PropTypes.string,
      src: PropTypes.string
    })
  }).isRequired,
  /**
   whether the pov Image should lazy load or not.
   */
  lazy: PropTypes.bool,
  /**
  if it is a mobile request
  */
  isMobile: PropTypes.bool,
  /**
  Automation ID base string
  */
  dataAutomationId: PropTypes.string
};

POVStory.defaultProps = {
  lazy: false,
  isMobile: false,
  dataAutomationId: ""
};

export default POVStory;
