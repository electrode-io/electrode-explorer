import React from "react";

import {Button} from "@walmart/wmreact-interactive";
import {input as Input} from "@walmart/wmreact-validation";

export const PriceRange = React.createClass({

  displayName: "PriceRange",

  propTypes: {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    currency: React.PropTypes.string,
    priceRange: React.PropTypes.shape({
      min: React.PropTypes.number,
      max: React.PropTypes.number
    }),
    onChange: React.PropTypes.func
  },
  // --------------------------------------------------------------------------
  // Lifecycle
  // --------------------------------------------------------------------------

  getDefaultProps() {
    return {
      min: null,
      max: null,
      currency: "usd",
      priceRange: {}
    };
  },

  getInitialState() {
    return {
      min: this.props.priceRange.min,
      max: this.props.priceRange.max
    };
  },

  componentDidMount() {
    if (this.props.priceRange.min) {
      this.refs.min.setValue(this.props.priceRange.min);
    }
    if (this.props.priceRange.max) {
      this.refs.max.setValue(this.props.priceRange.max);
    }
  },

  // --------------------------------------------------------------------------
  // Helpers
  // --------------------------------------------------------------------------

  _getCurrencyChar() {
    if (this.props.currency === "usd") {
      return "$";
    }
    throw new TypeError("Invalid currency type supplied.");
  },

  // --------------------------------------------------------------------------
  // Event handlers
  // --------------------------------------------------------------------------

  _clearPriceRange(e) {
    e.preventDefault();
    this.refs.min.setValue("");
    this.refs.max.setValue("");
    this.setState({
      min: null,
      max: null
    }, () => {
      if (this.props.onChange) { this.props.onChange(this.state); }
    });
  },

  _updatePriceRange(e) {
    e.preventDefault();
    const minVal = this.refs.min.getValue() || null;
    const maxVal = this.refs.max.getValue() || null;
    this.setState({
      min: minVal,
      max: maxVal
    }, () => {
      if (this.props.onChange) {
        this.props.onChange({
          "min_price": this.state.min,
          "max_price": this.state.max
        });
      }
    });
  },

  // --------------------------------------------------------------------------

  render() {
    const currencyChar = this._getCurrencyChar();
    return (
      <form className="refine-price-form" onSubmit={this._updatePriceRange}>
        <div className="form-inline">

          <span className="currency">{currencyChar}</span>
          <Input
            inputName="min"
            ref="min"
            className="price-input-field"
            validationType="numberpositive"
            inputType="number"
            isRequiredField={false}
            isMini={true}
            />

          <span className="price-range-between">to</span>

          <span className="currency">{currencyChar}</span>
          <Input
            inputName="max"
            ref="max"
            className="price-input-field"
            validationType="numberpositive"
            inputType="number"
            isRequiredField={false}
            isMini={true}
            />

          <Button
            onClick={this._updatePriceRange}
            mini={true}>
            Go
          </Button>

          <input type="submit" style={{position: "absolute", left: "-9999px"}} />
        </div>

        {this.state.min || this.state.max ?
          <Button
            className="clear-price-range"
            fakelink={true}
            onClick={this._clearPriceRange}>
            Clear Price Range
          </Button> : null
        }
      </form>
    );
  }
});
