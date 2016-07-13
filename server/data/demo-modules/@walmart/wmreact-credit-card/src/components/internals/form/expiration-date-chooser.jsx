/* global navigator */
// note: this code is more or less @walmart/wmreact-credit-card-info
// should be merged in some way in the future

import React, { Component } from "react";

import Select from "@walmart/wmreact-stateless-fields/lib/components/select-field";
import Icon from "@walmart/wmreact-base/lib/components/icon";

import classNames from "classnames";
import {
  getMonthsRange, getNextTenYears, isCardExpired
} from "./utils/dates";

import { canUseDOM } from "exenv";
const isIE = canUseDOM && /MSIE 9/.test(navigator.appVersion);

class ExpirationDateChooser extends Component {
  constructor(props) {
    super(props);

    const {defaultValue: {expiryMonth, expiryYear} = {}} = props;
    this.state = {
      errors: !!(expiryMonth && expiryYear && isCardExpired(expiryMonth, expiryYear)),
      touched: true,
      ...props.defaultValue
    };
    this.validate = this.validate.bind(this);
  }

  resetErrors() {
    this.setState({errors: false});
  }

  getValue() {
    return {
      expiryMonth: this.state.expiryMonth,
      expiryYear: this.state.expiryYear
    };
  }

  validate(onlyWhenAllSet) {
    this.resetErrors();

    const { expiryMonth, expiryYear } = this.getValue();

    if (!expiryMonth || !expiryYear) {
      if (!onlyWhenAllSet) {
        this.setState({errors: true});
      }
      return false;
    }

    if (isCardExpired(expiryMonth, expiryYear, this.props.validationDate)) {
      this.setState({errors: true});
      return false;
    }

    return true;
  }

  renderOption(value, index, display) {
    return (
      <option key={index} value={value}>
        {display || value}
      </option>
    );
  }

  renderMonthOptions() {
    const months = getMonthsRange();
    const options = months.map((month, i) => this.renderOption(month, i));
    const defaultOption = <option key={"00"} value="" disabled>MM</option>;

    return [defaultOption].concat(options);
  }

  renderMonthChooser() {
    const {tealeafIndex, tealeafIds} = this.props;
    const options = this.renderMonthOptions();

    return (
      <span className={classNames({
        "select-date-month": true,
        "potato-ie-hackarino": isIE
      })}>
        <Select
          name="month-chooser"
          data-automation-id="expiryMonth-cc"
          autoComplete="section-payment cc-exp-month"
          data-tl-id={`${tealeafIds.expiryMonth}${tealeafIndex}`}
          onChange={({target: {value: expiryMonth}}) =>
            this.setState({
              expiryMonth,
              touched: true
            }, () => this.validate(true))
          }
          touched={this.state.touched}
          value={this.state.expiryMonth || ""}
          disabled={this.props.disabled}
          quiet
        >
          { options }
        </Select>
      </span>
    );
  }

  renderYearOptions() {
    const years = getNextTenYears();
    const options = years.map((year, i) => this.renderOption(year, i, year.substring(2, 4)));
    const defaultOption = <option key={"00"} value="" disabled>YY</option>;

    return [defaultOption].concat(options);
  }

  renderYearChooser() {
    const {tealeafIndex, tealeafIds} = this.props;
    const options = this.renderYearOptions();

    return (
      <span className={classNames({
        "select-date-year": true,
        "potato-ie-hackarino": isIE
      })}>
        <Select
          name="year-chooser"
          data-automation-id="expiryYear-cc"
          autoComplete="section-payment cc-exp-year"
          data-tl-id={`${tealeafIds.expiryYear}${tealeafIndex}`}
          onChange={({target: {value: expiryYear}}) =>
            this.setState({
              expiryYear,
              touched: true
            }, () => this.validate(true))
          }
          onBlur={() =>
            this.setState({
              touched: true
            }, () => this.validate(false))
          }
          touched={this.state.touched}
          value={this.state.expiryYear || ""}
          disabled={this.props.disabled}
          quiet
        >
          { options }
        </Select>
      </span>
    );
  }

  render() {
    const errorMarkup = this.state.errors ?
      <p className="error-label">
        {this.props.errorLabel || "Please enter a valid expiration date."}
      </p>
      : null;

    const monthChooser = this.renderMonthChooser();
    const yearChooser = this.renderYearChooser();

    return (
      <div className={classNames("expiration-date-chooser", {error: this.state.errors})}>
        <label className="form-label">
          <span>{this.props.labelText || "Expiration date"}</span>
        </label>
        { monthChooser }
        <span>&nbsp;/&nbsp;</span>
        { yearChooser }
        {this.state.errors && <Icon name="exclamation-circle" className="external-error-icon" />}
        { errorMarkup }
      </div>
    );
  }
}

ExpirationDateChooser.propTypes = {
  defaultValue: React.PropTypes.shape({
    expiryYear: React.PropTypes.string,
    expiryMonth: React.PropTypes.string
  }),
  tealeafIndex: React.PropTypes.number,
  tealeafIds: React.PropTypes.shape({
    expiryYear: React.PropTypes.string,
    expiryMonth: React.PropTypes.string
  }),
  validationDate: React.PropTypes.object,
  disabled: React.PropTypes.bool,
  errorLabel: React.PropTypes.string,
  labelText: React.PropTypes.string
};

ExpirationDateChooser.defaultProps = {
  tealeafIndex: 0,
  tealeafIds: {
    expiryYear: "expiry-year",
    expiryMonth: "expiry-month"
  }
};

export default ExpirationDateChooser;
