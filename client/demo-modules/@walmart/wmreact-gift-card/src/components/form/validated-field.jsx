import React from "react";
import Field from "@walmart/wmreact-stateless-fields/lib/components/field";
import FloatingField from "@walmart/wmreact-stateless-fields/lib/components/floating-field";
import validators from "@walmart/wmreact-validation/lib/validators";
import isString from "lodash/isString";

export default class ValidatedField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      touched: !!props.value,
      ...this._error(props)
    };
  }

  _error({isRequiredField, validationType, value, validationParams}) {
    const validator = isString(validationType)
      ? validators[validationType]
      : validationType;
    if (!value) {
      return isRequiredField ? {
        error: "This information is required."
      } : {error: null};
    }

    if (!validator) {
      return {error: null};
    }
    return validator.validate(value, validationParams) ? {error: null} : {
      error: this.props.errorLabel || validator.message
    };
  }

  validate() {
    this.setState({
      touched: true
    });
    return !this.state.error;
  }

  componentWillReceiveProps(newProps) {
    this.setState(this._error(newProps));
  }

  clearValidation() {
    this.setState({touched: false});
  }

  _onBlur(ev) {
    if (this.props.value) {
      this.setState({
        touched: true
      });
    }
    this.props.onBlur(ev);
  }

  render() {
    const Component = this.props.floating ? FloatingField : Field;
    return (
      <Component
        touched={this.state.touched}
        error={this.state.error}
        {...this.props}
        onBlur={(ev) => this._onBlur(ev)}
      />
    );
  }
}
ValidatedField.propTypes = {
  errorLabel: React.PropTypes.string,
  onBlur: React.PropTypes.func,
  isRequiredField: React.PropTypes.bool,
  validationType: React.PropTypes.string,
  validationParams: React.PropTypes.any,
  floating: React.PropTypes.bool,
  value: React.PropTypes.string
};
ValidatedField.defaultProps = {
  isRequiredField: true,
  onBlur: () => {
  }
};
