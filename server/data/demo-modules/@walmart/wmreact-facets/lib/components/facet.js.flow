import React from "react";
import {Options, Radio} from "@walmart/wmreact-forms";
import {Expander} from "@walmart/wmreact-containers";
import {Collapsable} from "@walmart/wmreact-layout";
import {Variants} from "@walmart/wmreact-product-variants";
import {PriceRange} from "./price-range";
import classNames from "classnames";
export default React.createClass({

  displayName: "Facet",

  propTypes: {
    facetData: React.PropTypes.shape({
      displayName: React.PropTypes.string,
      name: React.PropTypes.string,
      pluralName: React.PropTypes.string,
      values: React.PropTypes.array,
      seeMoreValues: React.PropTypes.array,
      expandOnPageLoad: React.PropTypes.bool,
      expandOnLoad: React.PropTypes.bool,
      type: React.PropTypes.string
    }),
    customText: React.PropTypes.func,
    originalUrl: React.PropTypes.string,
    onChange: React.PropTypes.func,
    onSwatchClick: React.PropTypes.func,
    selectedArray: React.PropTypes.array,
    refinedPrice: React.PropTypes.object
  },

  getDefaultProps() {
    return {
      originalUrl: "",
      facetData: {},
      onChange() {},
      onSwatchClick() {},
      selectedArray: [],
      refinedPrice: {}
    };
  },

  getInitialState() {
    return {
      expanded: !!this.props.facetData.expandOnLoad || !!this.props.facetData.expandOnPageLoad,
      showAll: false
    };
  },

  render() {
    const facetFns = {
      price: this._renderPriceFacet,
      radio: this._renderRadioButtons,
      color: this._renderVariants,
      size: this._renderVariants,
      "pickup_and_delivery": this._renderRadioButtons
    };

    return (
      <Expander
        expandText={this.props.facetData.displayName || this.props.facetData.name}
        expanded={!!this.state.expanded}
        >
        {(facetFns[this.props.facetData.type] || this._renderNoSwatches)()}
      </Expander>
    );
  },

  _variantComponent(props) {
    const multicolorClass = classNames({
      "multicolor-variant": props.name === "Multicolor"
    });

    return (
      <span key={props.key} onClick={ () => this.props.onSwatchClick({
        type: this.props.facetData.type,
        value: props.name
      }) }>
        <Variants.Item className={multicolorClass} {...props}>
          {props.name}
        </Variants.Item>
      </span>
    );
  },

  _renderVariantItems(data, isColor) {
    return data.map((item, index) => {
      const displayName = item.name === "Multicolor" ? "Multi" : item.name;
      const variantProps = {
        type: "checkbox",
        key: item.name + index,
        name: item.name,
        displayName: isColor ? displayName : "",
        index,
        swatch: isColor ? item.name : null,
        selected: item.isSelected
      };
      return this._variantComponent(variantProps);
    });
  },

  _renderVariants() {
    if (!this.props.facetData.values && this.props.facetData.values.length < 1) { return null; }
    const {type, seeMoreValues = [], values = []} = this.props.facetData;
    const isColor = type === "color";
    const alwaysShown = (
      <Variants swatches={isColor}>
        {this._renderVariantItems(values, isColor)}
      </Variants>
    );
    let sometimesShown;
    if (seeMoreValues.length) {
      if (type === "color") {
        const seeMoreColorValues = seeMoreValues.map((val) => {
          return {
            name: val.name,
            label: val.name,
            checked: val.isSelected,
            url: val.url,
            idName: val.idName
          };
        });
        sometimesShown = (
          <Options
            choices={seeMoreColorValues}
            onChange={ (_, idx) => this.props.onSwatchClick({
              type: this.props.facetData.type,
              value: typeof (seeMoreColorValues[idx].label) === "object" ?
                seeMoreColorValues[idx].name :
                seeMoreColorValues[idx].label
            })}
            />
        );
      } else {
        sometimesShown = (
          <Variants swatches={isColor}>
            {this._renderVariantItems(this.props.facetData.seeMoreValues, isColor)}
          </Variants>
        );
      }
    }

    return (
      <div className="general-variant-facet">
        {this._renderExpandable(this.props.facetData.pluralName, alwaysShown, sometimesShown)}
      </div>
    );
  },

  _renderRadioButtons() {
    let selectedRadioButton = 0;
    const radioButtons = this.props.facetData.values &&
      this.props.facetData.values.length > 0 &&
      this.props.facetData.values.map((val, index) => {
        if (val.isSelected) {
          selectedRadioButton = index;
        }
        return (
          <Radio.Button
            key={val.name + index}
            group="radio-button-facet"
            onChange={ () => {
              if (!val.isSelected) {
                this.props.onChange({
                  type: this.props.facetData.type,
                  value: val.name});
              }
            }
            }>
            {val.name}
          </Radio.Button>
        );
      });

    return (
      <div className="radio-button-facet">
        <Radio.Group selected={selectedRadioButton} name="radio-button-facet">
          {radioButtons}
        </Radio.Group>
      </div>
    );
  },

  _renderNoSwatches() {
    const alwaysChoices = this.props.facetData.values.map((val) => {
      return {
        name: val.name,
        label: this.props.customText ? this.props.customText(val.name) : val.name,
        checked: val.isSelected,
        url: val.url,
        idName: val.idName
      };
    });

    const moreChoices = this.props.facetData.seeMoreValues &&
      this.props.facetData.seeMoreValues.length > 0 &&
      this.props.facetData.seeMoreValues.map((val) => {
        return {
          label: this.props.customText ? this.props.customText(val.name) : val.name,
          checked: val.isSelected,
          url: val.url,
          idName: val.idName
        };
      });

    const alwaysShown = (
      <Options
        choices={alwaysChoices}
        onChange={ (_, idx) => this.props.onChange({
          type: this.props.facetData.type,
          value: typeof (alwaysChoices[idx].label) === "object" ?
            alwaysChoices[idx].name :
            alwaysChoices[idx].label
        })}
        />
    );

    const sometimesShown = moreChoices && (
      <Options
        choices={moreChoices}
        onChange={ (_, idx) => this.props.onChange({
          type: this.props.facetData.type,
          value: alwaysChoices[idx].label
        })}
        />
    );

    return this._renderExpandable(this.props.facetData.pluralName, alwaysShown, sometimesShown);
  },

  _renderPriceFacet() {
    return (
      <div>
        {this._renderPriceRange()}
        {this._renderPriceOptions()}
      </div>
    );
  },

  _renderPriceRange() {
    return (
      <PriceRange
        priceRange={{
          min: this.props.refinedPrice.minPrice,
          max: this.props.refinedPrice.maxPrice
        }}
        onChange={this.props.onChange}
        />
    );
  },

  _renderPriceOptions() {
    const choices = this.props.facetData.values.map((val) => {
      return {
        label: val.name,
        url: val.url,
        checked: val.isSelected,
        idName: val.idName
      };
    });

    if (!choices.length) {
      return "";
    }

    return (
      <Options
        choices={choices}
        onChange={ (_, idx) => this.props.onChange({
          type: this.props.facetData.type,
          value: choices[idx].label}) }
        />
    );
  },

  _renderExpandable(category, alwaysShown, sometimesShown) {
    const className = this.state.showAll ? "facet-see-more fewer" : "facet-see-more";
    return (
      <div className="facet-item-list">
        {alwaysShown}
        {sometimesShown ? (
          <Collapsable isOpen={this.state.showAll}>
            {sometimesShown}
          </Collapsable>
        ) : ""}
        {sometimesShown ? (
          /* eslint-disable no-script-url */
          <a href="javascript:void(0)" onClick={this.toggleShowAll} className={className}>
            See {this.state.showAll ? "fewer" : "more"} {category}
          </a>
          /* eslint-enable no-script-url */
        ) : ""}
      </div>
    );
  },

  toggleShowAll() {
    this.setState({ showAll: !this.state.showAll });
  }
});
