import React from "react";
import Carousel, { getCarouselDecorators } from "@walmart/wmreact-carousel";
import Tile from "@walmart/wmreact-product-card/lib/components/tile";
import Image from "@walmart/wmreact-base/lib/components/image";
import { checkImageSrc } from "@walmart/wmreact-image-utils/lib/utils/image-utils";
import { getDefaultResponsiveProperty } from "../utils/wpa-utils";

const IMAGE_SIZE = 144;

export class WpaCarousel extends React.Component {
  constructor(props) {
    super(props);
  }

  _renderModuleTitle(moduleTitle, wpaProducts) {
    return moduleTitle && wpaProducts && wpaProducts.length > 0 ? (
      <div className="tempo-module-header">
        <h5 className="tempo-module-heading">{moduleTitle}</h5>
      </div>
    ) : null;
  }

  _renderImage(src, lazy) {
    const imageProps = {
      src: checkImageSrc(src, IMAGE_SIZE, IMAGE_SIZE),
      width: IMAGE_SIZE,
      height: IMAGE_SIZE,
      className: "Tile-img",
      lazy
    };

    return (<Image{...imageProps} />);
  }

  _renderTiles(wpaProducts) {
    return wpaProducts && wpaProducts.length > 0 ? (
      wpaProducts.map((product, index) => {
        return (<div className="wpa-product"
          key={index + 1}
          data-rel-rank={product.relRank}
          data-details={product.details}
          data-campaign-id={product.campaignId}
          data-ad-group-id={product.adGroupId}
          data-ad-type={product.adType}
          data-ad-uid={product.uuid}
          data-product-us-item-id={product.productId}
          data-product-id={product.productSKU}>
          <Tile
            image={this._renderImage(product.imageUrl, true)}
            {...product}
          />
          <img src="" data-triggered="0"
            data-beacon-src={product.impBeacon}
            className="js-ad-impression-beacon sponsored-products-imp-beacon hide-content"/>
        </div>);
      })
    ) : null;
  }

  _renderPageBeacons(pageBeacons) {
    return (<span className="wpa-beacons">
      {Object.keys(pageBeacons).map((key, index) => {
        return (<img key={index + 1} src="" data-triggered="0"
          className="js-ad-page-beacon sponsored-products-page-beacon hide-content"
          data-beacon-type={key} data-beacon-src={pageBeacons[key]} />
        );
      })}
    </span>);
  }

  _renderCarousel(wpaProducts) {
    return (wpaProducts && wpaProducts.length > 0 ? <Carousel className="product-carousel"
      decorators={getCarouselDecorators()}
      responsive={this.props.responsive}>
        {this._renderTiles(wpaProducts)}
    </Carousel> : null);
  }

  render() {
    const wpaData = this.props;
    const wpaProducts = this.props.products;
    return (<div className="wpa-carousel-container"
      data-bucket-id={wpaData.bucketId}
      data-details={wpaData.details}
      data-ad-module={wpaData.adModule}
      data-ad-uid={wpaData.uuid}
      data-rel-uuid={wpaData.relUuid}>
      {this._renderModuleTitle(wpaData.moduleTitle, wpaProducts)}
      {this._renderCarousel(wpaProducts)}
      {this._renderPageBeacons(wpaData.pageBeacons)}
    </div>);
  }
}

WpaCarousel.propTypes = {
  products: React.PropTypes.array,
  moduleTitle: React.PropTypes.string,
  responsive: React.PropTypes.array,
  pageBeacons: React.PropTypes.object,
  bucketId: React.PropTypes.string,
  details: React.PropTypes.string,
  adModule: React.PropTypes.string,
  uuid: React.PropTypes.string
};

WpaCarousel.defaultProps = {
  "responsive": getDefaultResponsiveProperty()
};

WpaCarousel.displayName = "WpaCarousel";

export default WpaCarousel;
