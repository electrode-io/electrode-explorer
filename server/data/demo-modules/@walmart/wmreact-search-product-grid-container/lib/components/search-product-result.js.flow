import React from "react";

import ItemRowGridView from "./item-row-grid-view";
import ItemRowListView from "./item-row-list-view";
import ZeroResultsFilter from "./zero-results-filter";
import ZeroResultsNoMatch from "./zero-results-no-match";

export default class SearchProductResult extends React.Component {
  componentDidMount() {
    if (this.props.initialIROCall) {
      const dataObject = {
        items: this.props.items,
        requestContext: this.props.requestContext
      };
      this.props.initialIROCall(dataObject);
    }
  }

  render() {
    if (this.props.items.length) {
      return (
        <div className="search-product-result">
          {(!!this.props.zeroResultsPrice || !!this.props.zeroResultsStore) &&
            <ZeroResultsFilter
              searchQuery={this.props.isBrowse ? false : this.props.query}
              priceFilter={!!this.props.zeroResultsPrice}
              storeFilter={!!this.props.zeroResultsStore} />
          }
          {this.props.gridView ? (
            <ul className="search-result-gridview-items">
              {this.props.items.map((item, index) =>
                <li className="search-result-grid-unit">
                  <ItemRowGridView
                    lazyLoadingEnabled={this.props.lazyLoadingEnabled && index > 2 ? true : false}
                    hidePriceFulfillmentDisplay={this.props.hidePriceFulfillmentDisplay}
                    data={item}
                    cookieValue={this.props.cookieValue}
                    prefStoreAddress={this.props.prefStoreAddress}
                    isPutFilterSelected={this.props.isPutFilterSelected}
                    isLoggedIn={false}
                    onClickTitle={this.props.onClickTitle}
                    onClickImage={this.props.onClickImage} />
                </li>
              )}
            </ul>
          ) : (
            <div className="search-result-listview-items">
              {this.props.items.map((item, index) =>
                <ItemRowListView
                  lazyLoadingEnabled={this.props.lazyLoadingEnabled && index > 2 ? true : false}
                  hidePriceFulfillmentDisplay={this.props.hidePriceFulfillmentDisplay}
                  data={item}
                  cookieValue={this.props.cookieValue}
                  prefStoreAddress={this.props.prefStoreAddress}
                  isPutFilterSelected={this.props.isPutFilterSelected}
                  isLoggedIn={false}
                  onClickTitle={this.props.onClickTitle}
                  onClickImage={this.props.onClickImage}
                  onClickLink={this.props.onClickLink} />
              )}
            </div>
          )}
        </div>
      );
    } else {
      return (
        <ZeroResultsNoMatch searchQuery={this.props.query} postalCode={this.props.postalCode} />
      );
    }
  }
}

SearchProductResult.displayName = "SearchProductResult";

SearchProductResult.propTypes = {
  /**
  Function specific for IRO fetch call on initial load
  */
  initialIROCall: React.PropTypes.func,
  /**
  Defer loading/lazy loading boolean
  */
  lazyLoadingEnabled: React.PropTypes.bool,
  requestContext: React.PropTypes.object,
  cookieValue: React.PropTypes.string,
  gridView: React.PropTypes.bool,
  prefStoreAddress: React.PropTypes.string,
  isPutFilterSelected: React.PropTypes.bool,
  items: React.PropTypes.array,
  query: React.PropTypes.string,
  postalCode: React.PropTypes.string,
  isBrowse: React.PropTypes.bool,
  zeroResultsPrice: React.PropTypes.bool,
  zeroResultsStore: React.PropTypes.bool,
  onGetNewSearchResult: React.PropTypes.func,
  onClickTitle: React.PropTypes.func,
  onClickImage: React.PropTypes.func,
  onClickLink: React.PropTypes.func,
  hidePriceFulfillmentDisplay: React.PropTypes.bool
};

SearchProductResult.defaultProps = {
  lazyLoadingEnabled: false,
  hidePriceFulfillmentDisplay: false,
  items: [],
  cookieValue: "",
  prefStoreAddress: "",
  isPutFilterSelected: false,
  query: "",
  postalCode: "",
  isBrowse: false,
  zeroResultsPrice: false,
  zeroResultsStore: false,
  onGetNewSearchResult() {},
  onClickTitle() {},
  onClickImage() {},
  onClickLink() {}
};
