import Carousel from "@walmart/wmreact-carousel/lib/components/carousel";
import classnames from "classnames";
import Collapsable from "@walmart/wmreact-layout/lib/components/collapsable";
import Decorators from "@walmart/wmreact-carousel/lib/components/carousel-decorators";
import Link from "@walmart/wmreact-base/lib/components/link";
import React, { Component, PropTypes } from "react";
import Spinner from "@walmart/wmreact-containers/lib/components/spinner";

import { noop } from "../common/utils";
import StoreTile from "./store-tile";
import ZipFinder from "./zip-finder";

export default class StoreFinderCarousel extends Component {

  componentDidMount() {
    const { onMount } = this.props;
    onMount();
  }

  // --------------------------------------------------------------------------

  _renderZip() {
    const { zip, isSearchingForZip, onZipChange, toggleSearching } = this.props;
    return zip ? (<ZipFinder
      zip={zip}
      isSearching={isSearchingForZip}
      onSearch={onZipChange}
      toggleSearching={toggleSearching}
    />) : null;
  }

  _renderShowOrHideLink() {
    const { isVisible, toggleVisibility } = this.props;
    const linkClasses = classnames("StoreCarousel-toggleVisibility pull-right", {
      "show-arrow": !isVisible
    });

    return (
      <Link.More className={linkClasses} onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"}
      </Link.More>
    );
  }

  _renderCarousel() {
    const {
      carouselConfig,
      currentStore,
      filterDecorators,
      isVisible,
      myStore,
      stores,
      onChange
    } = this.props;
    const decorators = filterDecorators ? Decorators.filter(filterDecorators) : Decorators;

    return (
      <Collapsable isOpen={isVisible}>
        <Carousel decorators={decorators} {...carouselConfig} >
          {stores.map((store) => {
            const { id } = store;
            return (
              <StoreTile
                key={id}
                store={store}
                shouldLink={id !== currentStore}
                isMyStore={id === myStore}
                onClick={onChange}
              />
            );
          })}
        </Carousel>
      </Collapsable>
    );
  }

  render() {
    const { className, loading } = this.props;
    const classes = classnames("StoreCarousel", className);

    return (
      <div className={classes}>
        {loading ?
          <Spinner loading={true} fixed={false} /> :
          <div>
            {this._renderZip()}
            {this._renderShowOrHideLink()}
            {this._renderCarousel()}
          </div>
        }
      </div>
    );
  }
}

StoreFinderCarousel.propTypes = {

  /**
   * The array of stores to loop over. It's expected that these arrive in the shape
   * returned by the GSF endpoint: https://confluence.walmart.com/display/PGGSF/Response+Json
   */
  stores: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    address: PropTypes.shape({
      city: PropTypes.string,
      address1: PropTypes.string
    })
  })),

  /**
   * Callback to be fired when user selects a store. It's passed the ID of the new store.
   */
  onChange: PropTypes.func,

  /**
   * Callback to be fired when user enters a new zip to search near. It's passed the new zip.
   */
  onZipChange: PropTypes.func,

  /**
   * Callback to restrict what navigation UI is shown: hairline arrows, dots, etc.
   * By default, the carousel shows all the "decorators" (UI elements) present in
   * gecgithub01.walmart.com/react/carousel/blob/master/src/components/carousel-decorators.jsx,
   * but consumers can pick and choose decorators by providing this arbitrary filtering function.
   */
  filterDecorators: PropTypes.func,

  /**
   * Callback to handle showing/hiding carousel; see `props.isVisible`.
   */
  toggleVisibility: PropTypes.func,

  /**
   * Callback to alert parent container when mounted (e.g., for data fetching)
   */
  onMount: PropTypes.func,

  /**
   * Callback to alert parent container to toggle between zip display/search mode.
   */
  toggleSearching: PropTypes.func,

  /**
   * Governs whether to show spinner or not. If `loading` is true, no carousel will
   * be rendered, even if `stores` contains store objects.
   */
  loading: PropTypes.bool,

  /**
   * Governs 1.) whether carousel will be visible and 2.) whether UI text will read
   * "Show" or "Hide."
   */
  isVisible: PropTypes.bool,

  /**
   * Governs whether zip UI will show search box/button or current zip.
   */
  isSearchingForZip: PropTypes.bool,

  /**
   * Zip code to be displayed in the upper left in the format, "Stores near {zip}."
   * If no zip is provided, no zip-related UI will appear.
   */
  zip: PropTypes.string,

  /**
   * Store ID to treat as "current." Current stores aren't hyperlinked or clickable.
   */
  currentStore: PropTypes.number,

  /**
   * Store ID to highlight as "My Store" with a gold star.
   */
  myStore: PropTypes.number,

  /**
   * Class name to apply to outermost wrapper element.
   */
  className: PropTypes.string,

  /**
   * All values namespaced under `carouselConfig` are passed through to the underlying `Carousel`:
   * https://gecgithub01.walmart.com/react/carousel/blob/master/src/components/carousel.jsx
   *
   * `propTypes` left intentionally vague (no `shape`) because that's Carousel's decision.
   */
  carouselConfig: PropTypes.object
};

StoreFinderCarousel.defaultProps = {
  // `currentStore` and `myStore` don't have any defaults because they're 1.) strictly
  // user-determined (e.g., no way to guess a default `myStore`) and 2.) not required.
  stores: [],
  isSearchingForZip: false,
  onChange: noop(),
  onZipChange: noop(),
  toggleSearching: noop(),
  toggleVisibility: noop(),
  onMount: noop(),
  filterDecorators: () => true,
  loading: false,
  isVisible: true,
  className: "",
  zip: "",
  carouselConfig: {
    framePadding: "35",
    responsive: [{
      selectors: ["x-small", "small", "medium", "large", "x-large", "xx-large"],
      settings: { slidesToShow: 7, slidesToScroll: 6 }
    }]
  }
};
