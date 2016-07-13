import React, { PropTypes } from "react";
import Carousel from "@walmart/wmreact-carousel";
import ResponsiveSettings from "../util/product-image-settings";
import Image from "@walmart/wmreact-base/lib/components/image";

const { desktop, tablet } = ResponsiveSettings;
const VIDEO_MASK_IMG =
  "//i5.walmartimages.com/dfwrs/76316474-1f54/k2-_2b7f406f-d5a2-42ee-a13e-c26e877c5ec4.v1.png";

export const AltImageItem = ({
  img,
  isVideo,
  ...rest
}) => (
  <div {...rest}>
    <Image className="prod-AltImageCarousel-image" src={img.thumb}/>
    {isVideo && <Image src={VIDEO_MASK_IMG}
      className="prod-AltImageCarousel-image prod-AltImageCarousel-videoThumb"
    />}
  </div>
);

export const AltImageCarousel = ({
  handleHover,
  handleClick,
  activeIndex,
  lastIndex,
  images,
  hasVideo,
  videoThumb,
  handleVideoClick,
  onSlideChange
}) => {

  const responsive = [
    {
      selectors: ["large", "x-large"],
      settings: Object.assign({}, desktop, {
        slideIndex: lastIndex
      })
    },
    {
      selectors: ["medium"],
      settings: Object.assign({}, tablet, {
        slideIndex: lastIndex
      })
    }
  ];
  return (
    <div className="prod-AltImageWrapper">
      {hasVideo && <AltImageItem
        isVideo
        className="prod-AltImageCarousel prod-VideoItem"
        img={{thumb: videoThumb}}
        onClick={handleVideoClick}
      />}

      <Carousel {...{responsive}}
        afterSlide={onSlideChange}
      >
        {
          images.map((img, index) => {
            const classNameSuffix = activeIndex === index ? "--active" : "";
            const className = `prod-AltImageCarousel${classNameSuffix}`;
            return (
              <AltImageItem
                key={index}
                {...{className, img}}
                onMouseEnter={() => handleHover(true, index)}
                onMouseLeave={() => handleHover(false, index)}
                onClick={() => handleClick(index)}
              />
            );
          })
        }
      </Carousel>
    </div>
  );
};

AltImageCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  handleHover: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  activeIndex: PropTypes.number.isRequired,
  hasVideo: PropTypes.bool,
  videoThumb: PropTypes.string,
  handleVideoClick: PropTypes.func
};

AltImageCarousel.defaultProps = {
  hasVideo: false,
  videoThumb: "",
  handleVideoClick: () => {}
};

AltImageCarousel.displayName = "AltImageCarousel";
