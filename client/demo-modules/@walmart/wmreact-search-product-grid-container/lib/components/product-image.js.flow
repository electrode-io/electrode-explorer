import React from "react";
import classNames from "classnames";
import { ProductImage } from "@walmart/wmreact-product-card";

export default class SearchProductImage extends React.Component {
  render(): ReactElement {
    const {imageUrl, url, productTitle, gridView, lazyLoadingEnabled} = this.props;
    const classes = classNames(
      "search-result-productimage",
      {"listview": !gridView},
      {"gridview": gridView}
    );
    return (
      <div className={classes}
        onClick={() => this.props.onClickImage(this.props.itemId)} >
        <ProductImage
          isLazy={lazyLoadingEnabled}
          imageUrl={imageUrl}
          url={url}
          productTitle={productTitle}
          shouldRenderFlags={false}
          isTileImage={true} />
      </div>
    );
  }
}

SearchProductImage.displayName = "SearchProductImage";
SearchProductImage.propTypes = {
  /**
  Defer loading/lazy loading boolean
  */
  lazyLoadingEnabled: React.PropTypes.bool,
  /**
  Product Image Url
  */
  imageUrl: React.PropTypes.string,
  /**
  Product Page Url
  */
  url: React.PropTypes.string,
  /**
  Product Title
  */
  productTitle: React.PropTypes.string,
  /**
  A flag to determine whether the display mode is grid view
  */
  gridView: React.PropTypes.bool,
  /**
  item Id
  */
  itemId: React.PropTypes.string,
  /**
  Action triggered when clicking on image
  */
  onClickImage: React.PropTypes.func
};

SearchProductImage.defaultProps = {
  "productTitle": "",
  "gridView": false,
  onClickImage() {}
};

export default SearchProductImage;
