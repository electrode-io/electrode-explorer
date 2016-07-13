import React from "react";
import classNames from "classnames";
import { Link } from "@walmart/wmreact-base";
import { ProductCardFlagList } from "@walmart/wmreact-product-card";

export default class ProductFlag extends React.Component {

  _renderFlagLink(flags, seeAllCategory, gridView): ReactElement {
    if (flags && flags[0]) {
      if (flags[0].type === "bestseller" && !gridView) {
        return (
          <div className="flag-link">
            in &nbsp;
            <Link className="js-flag-link"
              href={seeAllCategory.seeAllLink}>
              {seeAllCategory.seeAllName}
            </Link>
          </div>
        );
      }
    }
  }

  render(): ReactElement {
    const {flags, seeAllCategory, gridView} = this.props;
    const classes = classNames(
      "search-result-flag",
      {"listview": !gridView},
      {"gridview": gridView}
    );
    return (
      <div className={classes}>
        <ProductCardFlagList
          flags={flags}
          seeAllCategory={seeAllCategory} />
        {this._renderFlagLink(flags, seeAllCategory, gridView)}
      </div>
    );
  }
}

ProductFlag.displayName = "ProductFlag";
ProductFlag.propTypes = {
  /**
  Flags info
  */
  "flags": React.PropTypes.array,
  /**
    Additional class names
  */
  "className": React.PropTypes.string,
  /**
    Category name and link for best seller
  */
  "seeAllCategory": React.PropTypes.object,
  /**
    A flag to indicate grid view display mode on search page
  */
  "gridView": React.PropTypes.bool
};

ProductFlag.defaultProps = {
  "flags": [],
  "seeAllCategory": "",
  "gridView": false
};

export default ProductFlag;
