import React, { PropTypes } from "react";

import TempoTileCarousel from "../helper-components/tempo-tile-carousel";
import { generateMidasCarouselProps, renderMidasCarouselBeacons } from
  "../../helpers/midas-item-carousel-helpers";

const WMXOMPAdCarousel = (props) => {
  const { moduleData: { configs: { midasModuleData } } } = props;

  if (!midasModuleData) {
    return (
      <div></div>
    );
  }

  return (
    <TempoTileCarousel
      className="WMXOMPAdCarousel wpa-carousel-container"
      containerProps={generateMidasCarouselProps(midasModuleData)}
      otherChild={renderMidasCarouselBeacons(midasModuleData)}
      {...props}
    />
  );
};

WMXOMPAdCarousel.propTypes = {
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
      products: PropTypes.array.isRequired,
      midasModuleData: PropTypes.object.isRequired
    }).isRequired,
    moduleId: PropTypes.string,
    type: PropTypes.string
  }).isRequired,
  /**
  * Whether or not user is logged in. Used in tiles for submap logic.
  */
  userLoggedIn: PropTypes.bool,
  /**
  * Threshold at which to display the low quantity flag in item tiles.
  */
  lowQuantityThreshold: PropTypes.number,
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

WMXOMPAdCarousel.defaultProps = {
  userLoggedIn: false,
  lowQuantityThreshold: 7,
  isMobile: false,
  dataAutomationId: "",
  zoneId: 0
};

export default WMXOMPAdCarousel;
