import React, { PropTypes } from "react";

import TempoTileCarousel from "../helper-components/tempo-tile-carousel";

const VerticalCategoryCarouselCurated = (props) => (
  <TempoTileCarousel className="VerticalCategoryCarouselCurated" {...props} vertical={true}/>
);

VerticalCategoryCarouselCurated.propTypes = {
  /**
  * Data coming from Tempo and IRO via Quimby to apply to the Module
  */
  moduleData: PropTypes.shape({
    configs: PropTypes.shape({
      title: PropTypes.string,
      titleColor: PropTypes.string,
      themeColor: PropTypes.string,
      themeImage: PropTypes.object,
      firstTile: PropTypes.object,
      themeButton: PropTypes.object,
      themeButtonColor: PropTypes.string,
      themeTextColor: PropTypes.string,
      seeAllLink: PropTypes.object,
      seeAllLinkHexCode: PropTypes.string,
      tileOptions: PropTypes.object,
      tiles: PropTypes.array.isRequired
    }).isRequired,
    moduleId: PropTypes.string,
    type: PropTypes.string
  }).isRequired,
  /**
  * Whether or not the device has type mobile.
  */
  isMobile: PropTypes.bool,
  /**
  * ID used to identify the component in automation tests.
  */
  dataAutomationId: PropTypes.string,
  /**
  * Zone ID for analytics
  */
  zoneId: PropTypes.number
};

VerticalCategoryCarouselCurated.defaultProps = {
  isMobile: false,
  dataAutomationId: "",
  zoneId: 0
};

export default VerticalCategoryCarouselCurated;
