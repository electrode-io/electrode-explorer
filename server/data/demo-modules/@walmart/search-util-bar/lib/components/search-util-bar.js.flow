import React, {Component, PropTypes} from "react";

import Brand from "./utilbar-brand";
import Price from "./utilbar-price";
import Sort from "./utilbar-sort";
import Switcher from "./utilbar-switcher";
import Store from "./utilbar-store-availability";

export default class SearchUtilBar extends Component {
  render() {
    const {
      min,
      max,
      currency,
      onChangePrice,

      brandChoices,
      onChangeBrand,

      location,
      selectedStores,
      nearbyStores,
      onFetchStores,
      onFetchPreso,

      currentSortValue,
      sortOptions,
      onChangeSort,

      isGridView,
      onChangeSwitcher
    } = this.props;

    return (
      <div className="desktop-util-bar">
        <div className="desktop-bar-left">
          <div><p className="desktop-bar-heading">Refine</p></div>
          <Price min={min} max={max} currency={currency} onChange={onChangePrice} />
          <Brand choices={brandChoices} onChange={onChangeBrand} />
          <Store nearbyStores={nearbyStores} selectedStores={selectedStores}
            onFetchStores={onFetchStores} location={location} onFetchPreso={onFetchPreso} />
        </div>

        <div className="desktop-bar-right">
          <div><p className="desktop-bar-heading">Sort</p></div>
          <Sort currentSortValue={currentSortValue} options={sortOptions} onChange={onChangeSort} />
          <Switcher isGridView={isGridView} onChange={onChangeSwitcher} />
        </div>
      </div>
    );
  }
}

SearchUtilBar.displayName = "SearchUtilBar";

SearchUtilBar.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  currency: PropTypes.string,
  onChangePrice: PropTypes.func,

  brandChoices: PropTypes.array,
  onChangeBrand: PropTypes.func,

  location: PropTypes.any,
  selectedStores: PropTypes.array,
  nearbyStores: PropTypes.array,
  onFetchStores: PropTypes.func,
  onFetchPreso: PropTypes.func,

  currentSortValue: PropTypes.string,
  sortOptions: PropTypes.array,
  onChangeSort: PropTypes.func,

  isGridView: PropTypes.bool,
  onChangeSwitcher: PropTypes.func
};

SearchUtilBar.defaultProps = {
  isGridView: false
};
