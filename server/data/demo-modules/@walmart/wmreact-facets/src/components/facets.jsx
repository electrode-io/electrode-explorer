/* eslint no-unused-vars: 0 */
import React from "react";

import {Expander} from "@walmart/wmreact-containers";
import Facet from "./facet";

export default React.createClass({

  displayName: "Facets",

  propTypes: {
    priceRange: React.PropTypes.shape({
      min: React.PropTypes.min,
      max: React.PropTypes.max
    }),
    stores: React.PropTypes.object,
    brands: React.PropTypes.array,
    facet: React.PropTypes.object,
    onChange: React.PropTypes.func,
    onSwatchClick: React.PropTypes.func,
    originalUrl: React.PropTypes.string,
    selectedArray: React.PropTypes.array,
    customText: React.PropTypes.func,
    refinedPrice: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      originalUrl: "",
      facet: {},
      onChange() {},
      onSwatchClick() {},
      selectedArray: [],
      refinedPrice: {}
    };
  },

  getInitialState() {
    return {
      brands: this.props.brands,
      priceRange: this.props.priceRange,
      stores: this.props.stores
    };
  },

  _onChange(newUrl) {
    this.props.onChange(newUrl);
  },

  _onSwatchClick(item) {
    this.props.onSwatchClick(item);
  },

  render() {
    return (
      <div className="facets-bar">
        <Facet
          refinedPrice={this.props.refinedPrice}
          customText={this.props.customText}
          originalUrl={this.props.originalUrl}
          facetData={this.props.facet}
          onChange={this._onChange}
          onSwatchClick={this._onSwatchClick}
          selectedArray={this.props.selectedArray}
          />
      </div>
    );
  }
});
