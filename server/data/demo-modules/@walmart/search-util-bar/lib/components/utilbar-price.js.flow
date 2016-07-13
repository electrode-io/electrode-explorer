import React, {Component, PropTypes} from "react";

import {Flyout} from "@walmart/wmreact-containers";
import {Button} from "@walmart/wmreact-interactive";

const validatePrice = function (val) {
  if (!val) {
    return true;
  }
  return (/^\d*\.?\d*$/).test(val);
};

const getCurrencyChar = function (currency) {
  if (currency === "usd") {
    return "$";
  }
  throw new TypeError("Invalid currency type supplied.");
};

/**
 The price component flyout.
 For example this is how we use this component.
 ```jsx
 <Price
  onChange={(range)=> {console.log(range)}}
 />
 ```
 @import {Price}
 @component Price
 @playground
 Search-Util-Bar-Price
 ```
 <Price
  onChange={(range)=> {console.log(range)}}
  />
 ```
 */

export default class Price extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: this.props.min,
      max: this.props.max,
      isInvalidMinPrice: false,
      isInvalidMaxPrice: false
    };
  }

  // Event handlers
  _clearPriceRange() {
    this.setState({
      min: null,
      max: null
    });
  }

  _updatePriceRange() {
    const {min, max, isInvalidMinPrice, isInvalidMaxPrice} = this.state;
    const {onChange} = this.props;

    if ((min || max) && !isInvalidMinPrice && !isInvalidMaxPrice) {
      if (onChange) {
        onChange({min: +min, max: +max});
      }
    }
  }

  _onEnterKeyPressed(event) {
    if (event.key === "Enter") {
      this._updatePriceRange();
    }
  }

  _onInputChange(type) {
    const value = this.refs[type].value;
    const isValidPrice = validatePrice(value);
    const currentStates = {};

    currentStates[type] = value;

    if (type === "min") {
      currentStates.isInvalidMinPrice = !isValidPrice;
    } else {
      currentStates.isInvalidMaxPrice = !isValidPrice;
    }

    this.setState(currentStates);
  }

  render() {
    const {currency} = this.props;
    const {min, max, isInvalidMinPrice, isInvalidMaxPrice} = this.state;
    const currencyChar = getCurrencyChar(currency);

    return (
      <Flyout
        trigger={<Button dropdown={true}>Price</Button>}
        closeOnClickOut={true}
        direction="bottom"
        className="search-util-bar-flyout"
        size="fluid">
        <form className="desktop-bar-price">
          <div className="form-inline">
            <label className="currency">{currencyChar}</label>
            <input
              name="min"
              ref="min"
              className="form-control form-control-mini"
              type="text"
              value={min}
              placeholder="min"
              onKeyUp={this._onEnterKeyPressed.bind(this)}
              onChange={this._onInputChange.bind(this, "min")}
              autoFocus={isInvalidMinPrice}
            />
            <span>to</span>
            <label className="currency">{currencyChar}</label>
            <input
              name="max"
              ref="max"
              className="form-control form-control-mini"
              type="text"
              value={max}
              placeholder="max"
              onKeyUp={this._onEnterKeyPressed.bind(this)}
              onChange={this._onInputChange.bind(this, "max")}
              autoFocus={isInvalidMaxPrice}
            />
            <Button
              className="price-refine-btn"
              onClick={this._updatePriceRange.bind(this)}
              mini={true}>
              Go
            </Button>
          </div>

          {isInvalidMinPrice || isInvalidMaxPrice ?
            <div className="error-message float-to-left">
              Please enter a valid number.
            </div> : null}

          {(min || max) && !isInvalidMinPrice && !isInvalidMaxPrice ?
            <Button
              className="clear-range-btn"
              fakelink={true}
              onClick={this._clearPriceRange.bind(this)}>
              Clear Price Range
            </Button> : null}
        </form>
      </Flyout>
    );
  }
}

Price.displayName = "SearchUtilBarPrice";

Price.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  currency: PropTypes.string,
  onChange: PropTypes.func
};

Price.defaultProps = {
  min: null,
  max: null,
  currency: "usd"
};
