import React, { PropTypes } from "react";
import Carousel from "@walmart/wmreact-carousel";
import Layout from "@walmart/wmreact-layout/lib/components/layout";
import MediaSelector from "@walmart/wmreact-layout/lib/components/media-selector";
import Image from "@walmart/wmreact-base/lib/components/image";
import ResponsiveSettings from "../util/product-image-settings";
import { AltImageCarousel } from "./alt-image-carousel";
import classNames from "classnames";

/**
 Displays a list of product images for a given product. See below for how this component renders
 at each breakpoint.
 - breakpoint-xs: Primary image as a carousel, no center mode, no alt images
 - breakpoint-s: Primary image as a carousel, center mode, no alt images
 - breakpoint-m: Single primary image, all alt images as horizontal carousel.
  Display up to 4 carousel images per page.
 - breakpoint-l and above:  Single primary image, all alt images as vertical carousel.
  Display up to 5 carousel images per page.


 For example this is how we use this component.

 ```jsx
 <ProductImage images={imageArray}/>
 ```

 @import {ProductImage}
 @flags noVisibleRender
 @component ProductImage
 @playground
 ProductImage
 ```
 <ProductImage images={[
    {
      thumb: "http://i5.walmartimages.com/dfw/dce07b8c-c448/" +
      "k2-_8f9cf353-40ac-44ad-9446-7f88f6ce6c53.v4.jpg",
      main: "http://i5.walmartimages.com/dfw/dce07b8c-1f75/" +
      "k2-_92d75473-2262-4b2d-92b0-ed2a4df937de.v4.jpg",
      alt: "Test Image"
    },
    {
      thumb: "http://i5.walmartimages.com/dfw/dce07b8c-5c41/" +
      "k2-_defcc89d-84e8-4dde-b7aa-03de2c6f1986.v1.jpg",
      main: "http://i5.walmartimages.com/dfw/dce07b8c-6f25/" +
      "k2-_091169c1-97a9-4afc-8b26-5d766c9a92f0.v1.jpg",
      alt: "Test Image"
    },
    {
      thumb: "http://i5.walmartimages.com/dfw/dce07b8c-c448" +
      "/k2-_8f9cf353-40ac-44ad-9446-7f88f6ce6c53.v4.jpg",
      main: "http://i5.walmartimages.com/dfw/dce07b8c-1f75/" +
      "k2-_92d75473-2262-4b2d-92b0-ed2a4df937de.v4.jpg",
      alt: "Test Image"
    },
    {
      thumb: "http://i5.walmartimages.com/dfw/dce07b8c-5c41/" +
      "k2-_defcc89d-84e8-4dde-b7aa-03de2c6f1986.v1.jpg",
      main: "http://i5.walmartimages.com/dfw/dce07b8c-6f25/" +
      "k2-_091169c1-97a9-4afc-8b26-5d766c9a92f0.v1.jpg",
      alt: "Test Image"
    },
    {
      thumb: "http://i5.walmartimages.com/dfw/dce07b8c-c448/" +
      "k2-_8f9cf353-40ac-44ad-9446-7f88f6ce6c53.v4.jpg",
      main: "http://i5.walmartimages.com/dfw/dce07b8c-1f75/" +
      "k2-_92d75473-2262-4b2d-92b0-ed2a4df937de.v4.jpg",
      alt: "Test Image"
    },
    {
      thumb: "http://i5.walmartimages.com/dfw/dce07b8c-5c41/" +
      "k2-_defcc89d-84e8-4dde-b7aa-03de2c6f1986.v1.jpg",
      main: "http://i5.walmartimages.com/dfw/dce07b8c-6f25/" +
      "k2-_091169c1-97a9-4afc-8b26-5d766c9a92f0.v1.jpg",
      alt: "Test Image"
    }
  ]}/>
 ```
 */

class ProductImage extends React.Component {
  constructor(props) {
    super(props);

    // set initial state
    this.state = {
      mounted: false
    };
    this._handleHeroImageClick = this._handleHeroImageClick.bind(this);
  }

  componentDidMount() {
    /* eslint-disable react/no-did-mount-set-state */
    this.setState({
      mounted: true
    });
    /* eslint-enable react/no-did-mount-set-state */
  }

  renderHeroImageCarousel({
    activeIndex, handleClick, images
  }) {
    return (
      <Carousel
        {... ResponsiveSettings.mobile}
        slideIndex={activeIndex}
        afterSlide={(slide) => handleClick(slide)}
      >
        {images.map(({ main }, index) => {
          return (
            <div key={index}>
              <Image
                onClick={this._handleHeroImageClick}
                className="prod-HeroImageCarousel-image"
                src={main}/>
            </div>
          );
        })}
      </Carousel>
    );
  }

  renderAltImageCarousel({
    images,
    handleHover,
    handleClick,
    activeIndex,
    lastIndex,
    onSlideChange,
    hasVideo,
    videoThumb
  }) {
    return (<AltImageCarousel
      {...{ images, handleHover, handleClick, activeIndex, lastIndex,
        onSlideChange, hasVideo, videoThumb }}
    />);
  }

  _hasImages(images) {
    return images && images.length > 0;
  }

  _hasMainImage(image) {
    return image && image.main && image.main !== "";
  }

  _getPrimaryImage({images, primaryImage, activeIndex}) {
    if (primaryImage && primaryImage !== "") {
      // if primaryImage property is set, always display it
      return primaryImage;
    } else if (this._hasImages(images) && this._hasMainImage(images[activeIndex])) {
      // else read the image from the activeIndex
      return images[activeIndex].main;
    } else {
      // if none of the images exists, return an empty string.
      // TODO: must return a static no image
      // JIRA: https://jira.walmart.com/browse/GPRDT-962
      return "";
    }
  }

  _handleHeroImageClick() {
    const { activeIndex, handleHeroImageClick } = this.props;
    handleHeroImageClick(activeIndex);
  }

  render() {
    const primaryImage = this._getPrimaryImage(this.props);

    const heroImage = (
      <div className="prod-HeroImage">
        <Image className="prod-HeroImage-image"
          onClick={this._handleHeroImageClick}
          src={primaryImage}/>
      </div>
    );

    const _classNames = classNames("prod-ProductImage", this.props.className);
    if (!this.state.mounted) {
      return (
        <div>
          <div className={classNames(_classNames, "prod-LoadingCarousel-m")}>
            {heroImage}
          </div>
          <div className="prod-ProductImage prod-LoadingCarousel-s">
            <Image
              className="prod-HeroImageCarousel-image"
              src={primaryImage}
            />
          </div>
        </div>
      );
    }

    return (
      <div className={_classNames}>
        <MediaSelector mode="delete">
          <Layout
            visibleWidths={["large", "x-large"]}
            large-sizes={[2, 10]}>
            {this.renderAltImageCarousel(this.props)}
            {heroImage}
          </Layout>
          <div visibleWidths={["medium"]}>
            {heroImage}
            {this.renderAltImageCarousel(this.props)}
          </div>
          <Layout
            visibleWidths={["x-small", "small"]}
            large-sizes={[12]}>
            {this.renderHeroImageCarousel(this.props)}
          </Layout>
        </MediaSelector>
      </div>
    );
  }
}

ProductImage.displayName = "ProductImage";

ProductImage.propTypes = {
  /**
   An array of product alt images.
   */
  images: PropTypes.array.isRequired,
  /**
   An array of product alt images.
   */
  primaryImage: PropTypes.string.isRequired,
  /**
   Any additional css classes that needs to be applied
   to the root element.
   */
  className: PropTypes.string,
  handleHover: PropTypes.func,
  handleClick: PropTypes.func,
  handleHeroImageClick: PropTypes.func,
  onSlideChange: PropTypes.func,
  activeIndex: PropTypes.number,
  lastIndex: PropTypes.number
};

ProductImage.defaultProps = {
  images: [],
  primaryImage: "",
  className: "",
  activeIndex: 0,
  lastIndex: 0,
  handleHover: () => {},
  handleClick: () => {},
  handleHeroImageClick: () => {},
  onSlideChange: () => {}
};

export default ProductImage;
