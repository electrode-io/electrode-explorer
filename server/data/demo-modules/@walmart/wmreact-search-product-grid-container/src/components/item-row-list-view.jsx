import React from "react";
import SearchProductImage from "./product-image";
import ProductFlag from "./product-flag";
import ProductPrice from "./product-price";
import ProductVariantSwatches from "./product-variant-swatches";
import SearchProductTitle from "./product-title";
import ProductRating from "./product-rating";
import ProductFulfillment from "./product-fulfillment";
import ProductDescription from "./product-description";
import SponsoredProduct from "./sponsored-product";
import SeeAllLink from "./see-all-link";
import classNames from "classnames";

export default class ItemRowListView extends React.Component {
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
    if (!(this.props.data)) {return null; }
    const item = this.props.data;
    const classes = classNames({
      "js-wpa-product": !!item.sponsoredUUID,
      "search-result-listview-item": true,
      "clearfix": true
    });
    let flagBadge = null;
    const seeAllCategory = {seeAllName: item.seeAllName, seeAllLink: item.seeAllLink};
    if (item.specialOfferBadge && item.specialOfferBadge) {
      flagBadge = [{text: item.specialOfferText, type: item.specialOfferBadge}];
    }
    return (
      <div className={classes}>
        <SearchProductImage
          lazyLoadingEnabled={this.props.lazyLoadingEnabled}
          itemId={item.usItemId}
          imageUrl={this.state.image}
          url={item.productPageUrl}
          productTitle={item.title}
          onClickImage={this.props.onClickImage}/>
        <SponsoredProduct
          sponsored={!!item.sponsoredUUID} />
        <SearchProductTitle
          title={item.title}
          itemId={item.usItemId}
          className={"search-result-product-title"}
          big={false}
          maxLines={3}
          productPageUrl={item.productPageUrl}
          onClickTitle={this.props.onClickTitle} />
        <div className="tile-content">
          <div className="tile-primary">
            <ProductPrice
              hidePriceFulfillmentDisplay={this.props.hidePriceFulfillmentDisplay}
              primaryOffer={item.primaryOffer}
              productType={item.productType}
              productPageUrl={item.productPageUrl}
              inventory={item.inventory}
              submapType={item.submapType}
              ppu={item.ppu}
              isLoggedIn={this.props.isLoggedIn} />
            {flagBadge ?
              <ProductFlag
                flags={flagBadge}
                seeAllCategory={seeAllCategory} /> : null}
            <ProductRating
              customerRating={item.customerRating}
              numReviews={item.numReviews}
              size="small"
              esrb={item.esrb}
              mediaRating={item.mediaRating} />
            <ProductVariantSwatches
              lazyLoadingEnabled={this.props.lazyLoadingEnabled}
              swatches={item.variantSwatches}
              defaultImageUrl={item.imageUrl}
              onChange={this._setImageSrc.bind(this)} />
            {item.seeAllFacet && item.seeAllFacetLink ?
              <SeeAllLink
                seeAllFacet={item.seeAllFacet}
                seeAllFacetLink={item.seeAllFacetLink}
                onClickLink={this.props.onClickLink}
              /> : null}
          </div>
          <div className="tile-aside">
            <ProductDescription
              item={item}
              description={item.description}
              department={item.department} />
            {item.fulfillment ?
              <ProductFulfillment
                hidePriceFulfillmentDisplay={this.props.hidePriceFulfillmentDisplay}
                inventory={item.inventory}
                fulfillment={item.fulfillment}
                cookieValue={this.props.cookieValue}
                shippingPassEligibale={item.shippingPassEligibale}
                preOrderAvailableDate={item.preOrderAvailableDate}
                sellerName={item.sellerName}
                prefStoreAddress={this.props.prefStoreAddress}
                isPutFilerSelected={this.props.isPutFilerSelected} /> : null}
          </div>
        </div>
      </div>
    );
  }
}


ItemRowListView.displayName = "ItemRowListView";
ItemRowListView.propTypes = {
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
  onClickImage: React.PropTypes.func,
  /**
   * Action triggered when clicking on see all link
   */
  onClickLink: React.PropTypes.func
};

ItemRowListView.defaultProps = {
  lazyLoadingEnabled: false,
  hidePriceFulfillmentDisplay: false,
  data: {},
  onClickTitle() {},
  onClickImage() {},
  onClickLink() {}
};
