import React from "react";
import SearchProductImage from "./product-image";
import ProductFlag from "./product-flag";
import ProductVariantSwatches from "./product-variant-swatches";
import ProductPrice from "./product-price";
import SearchProductTitle from "./product-title";
import ProductRating from "./product-rating";
import ProductFulfillment from "./product-fulfillment";
import SponsoredProduct from "./sponsored-product";
import classNames from "classnames";

export default class ItemRowGridView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: props.data.imageUrl
    };
  }
  _setImageSrc(imageSrc: string): void {
    this.setState({
      image: imageSrc
    });
  }

  render(): ReactElement {
    if (!(this.props.data)) {return null;}
    const item = this.props.data;
    const classes = classNames({
      "js-wpa-product": !!item.sponsoredUUID,
      "search-result-gridview-item": true,
      "clearfix": true
    });
    let flagBadge = null;
    const seeAllCategory = {seeAllName: item.seeAllName, seeAllLink: item.seeAllLink};
    if (item.specialOfferBadge && item.specialOfferBadge) {
      flagBadge = [{text: item.specialOfferText, type: item.specialOfferBadge}];
    }
    return (
      <div className={classes}>
        <ProductFlag
          flags={flagBadge}
          seeAllCategory={seeAllCategory}
          gridView={true} />
        <SearchProductImage
          lazyLoadingEnabled={this.props.lazyLoadingEnabled}
          imageUrl={this.state.image}
          itemId={item.usItemId}
          url={item.productPageUrl}
          productTitle={item.title}
          gridView={true}
          onClickImage={this.props.onClickImage}/>
        <ProductVariantSwatches
          lazyLoadingEnabled={this.props.lazyLoadingEnabled}
          swatches={item.variantSwatches}
          defaultImageUrl={item.imageUrl}
          onChange={this._setImageSrc.bind(this)}
          gridView={true} />
        <SponsoredProduct
          sponsored={!!item.sponsoredUUID} />
        <ProductPrice
          hidePriceFulfillmentDisplay={this.props.hidePriceFulfillmentDisplay}
          primaryOffer={item.primaryOffer}
          productType={item.productType}
          productPageUrl={item.productPageUrl}
          inventory={item.inventory}
          submapType={item.submapType}
          ppu={item.ppu}
          isLoggedIn={this.props.isLoggedIn}
          gridView={true} />
        <SearchProductTitle
          title={item.title}
          itemId={item.usItemId}
          className={"search-result-product-title"}
          big={false}
          maxLines={3}
          productPageUrl={item.productPageUrl}
          gridView={true}
          onClickTitle={this.props.onClickTitle} />
        <ProductRating
          customerRating={item.customerRating}
          numReviews={item.numReviews}
          size="small"
          esrb={item.esrb}
          mediaRating={item.mediaRating} />
        <ProductFulfillment
          hidePriceFulfillmentDisplay={this.props.hidePriceFulfillmentDisplay}
          inventory={item.inventory}
          fulfillment={item.fulfillment}
          cookieValue={this.props.cookieValue}
          shippingPassEligibale={item.shippingPassEligibale}
          preOrderAvailableDate={item.preOrderAvailableDate}
          sellerName={item.sellerName}
          prefStoreAddress={this.props.prefStoreAddress}
          isPutFilerSelected={this.props.isPutFilerSelected}
          gridView={true} />
      </div>
    );
  }
}

ItemRowGridView.displayName = "ItemRowGridView";
ItemRowGridView.propTypes = {
  /**
  Defer loading/lazy loading boolean
  */
  lazyLoadingEnabled: React.PropTypes.bool,
  /**
   * Boolean for hiding renderables
   */
  hidePriceFulfillmentDisplay: React.PropTypes.bool.isRequired,
  /**
   * Item Data
   */
  data: React.PropTypes.object.isRequired,
  /**
   * Cookie Value
   */
  cookieValue: React.PropTypes.any,
  /**
   * Store Address
   */
  prefStoreAddress: React.PropTypes.object,
  /**
   * A flag to indicate if a put filter is selected
   */
  isPutFilerSelected: React.PropTypes.bool,
  /**
   * A flag to indicate whether user is logged in
   */
  isLoggedIn: React.PropTypes.bool,
  /**
   * Action triggered when clicking on title
   */
  onClickTitle: React.PropTypes.func,
  /**
   * Action triggered when clicking on image
   */
  onClickImage: React.PropTypes.func
};

ItemRowGridView.defaultProps = {
  hidePriceFulfillmentDisplay: false,
  data: {},
  onClickTitle() {},
  onClickImage() {}
};
