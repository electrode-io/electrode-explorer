import React from "react";
import classNames from "classnames";

export default class SponsoredProduct extends React.Component {
  render(): ReactElement {
    const {sponsored, gridView} = this.props;
    const classes = classNames(
      "search-result-sponsored-product",
      {"listview": !gridView},
      {"gridview": gridView}
    );
    return (
      <div className={classes}>
        {sponsored ? <p className="sponsored-product-search">Sponsored Product</p> : null}
      </div>
    );
  }
}

SponsoredProduct.displayName = "SponsoredProduct";
SponsoredProduct.propTypes = {
  /**
  A flag to indicate if this product is a sponsored product or not.
  */
  sponsored: React.PropTypes.bool,
  /**
  A flag to indicate if it's in grid view display mode
  */
  gridView: React.PropTypes.bool
};
