import React from "react";
import {ProductTitle} from "@walmart/wmreact-product-typography";
import classNames from "classnames";

export default class SearchProductTitle extends React.Component {
  render(): ReactElement {
    const classes = classNames(
      this.props.className,
      {"listview": !this.props.gridView},
      {"gridview": this.props.gridView}
    );
    return (
      <div className={classes}>
        <a className="line-clamp line-clamp-3" href={this.props.productPageUrl}
          onClick={() => this.props.onClickTitle(this.props.itemId)}>
          <ProductTitle
            title={this.props.title}
            big={false}
            maxLines={3}
            doInsertHTMLTitle={true} />
        </a>
      </div>
    );
  }
}

SearchProductTitle.displayName = "SearchProductTitle";
SearchProductTitle.propTypes = {
  /**
    The name or title of the product.
    */
  "title": React.PropTypes.string.isRequired,
  /**
    Item Id
   */
  "itemId": React.PropTypes.string,
  /**
   Any additional css classes that needs to be applied
   to the root element.
   */
  "className": React.PropTypes.string,
  /**
   Use larger font size
  */
  "big": React.PropTypes.bool,
  /**
  Max number of lines to show before truncating
  */
  "maxLines": React.PropTypes.number,
  /**
  Product Page Url
  */
  "productPageUrl": React.PropTypes.string,
  /**
  A flag to enable grid view
  */
  "gridView": React.PropTypes.bool,
  /**
  On click title handler
  */
  "onClickTitle": React.PropTypes.func
};

SearchProductTitle.defaultProps = {
  "className": "",
  "big": false,
  onClickTitle() {}
};

export default SearchProductTitle;
