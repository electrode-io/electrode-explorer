import React from "react";
import classNames from "classnames";
import { SwatchSelector } from "@walmart/wmreact-product-card";

export default class ProductVariantSwatches extends React.Component {
  render(): ReactElement {
    const {swatches, onChange, gridView, lazyLoadingEnabled} = this.props;
    const classes = classNames(
      "search-result-variantswatches",
      {"listview": !gridView},
      {"gridview": gridView}
    );
    /* eslint-disable max-len */
    const lazyLoadImage = "//i5.walmartimages.com/dfw/63fd9f59-33e4/k2-_1255bd77-c218-4f2a-99ce-14731eeaa110.v1.gif";
    /* eslint-enable max-len */
    const numOfShownSwatches = gridView ? 4 : 11;
    const variantSwatches = swatches;
    for (let index = 0; index < variantSwatches.length; index++) {
      const swatch = variantSwatches[index];
      /* eslint-disable */
      swatch["display_name"] = swatch.name;
      swatch["swatch_image_url"] = lazyLoadingEnabled ? lazyLoadImage : swatch.imageUrl;
      swatch["product_image_url"] = swatch.productImageUrl;
      /* eslint-enable */
    }
    return (
      <div className={classes}>
        <SwatchSelector
          swatches={swatches}
          maxSwatchCount={numOfShownSwatches}
          onSwatchClick={this.onSwatchClick}
          onChange={onChange} />
      </div>
    );
  }

  onSwatchClick(swatchUrl: string): void {
    window.location.href = swatchUrl;
  }
}

ProductVariantSwatches.displayName = "ProductVariantSwatches";
ProductVariantSwatches.propTypes = {
  /**
  Defer loading/lazy loading boolean
  */
  lazyLoadingEnabled: React.PropTypes.bool,
  /**
  Swatches Info
  */
  swatches: React.PropTypes.array.isRequired,
  /**
  Default Product Image Url
  */
  defaultImageUrl: React.PropTypes.string,
  /**
  Function called when hover on swatch
  */
  onChange: React.PropTypes.func,
  /**
  A flag to determine whether the display mode is grid view
  */
  gridView: React.PropTypes.bool
};

ProductVariantSwatches.defaultProps = {
  swatches: [],
  gridView: false
};

export default ProductVariantSwatches;
