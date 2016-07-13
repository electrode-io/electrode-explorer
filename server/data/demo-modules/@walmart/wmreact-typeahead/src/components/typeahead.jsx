import React from "react";
import RadonTypeahead from "radon-typeahead";
import fieldValidationMixin from "@walmart/wmreact-validation/lib/mixins/field-validation";
import Field from "@walmart/wmreact-forms/lib/components/field";
import TypeaheadListItem from "./typeahead-list-item";
import fireDataEvent from "@walmart/wmreact-analytics/lib/helpers/fire-data-event";

export default React.createClass({
  displayName: "TypeaheadField",

  mixins: [fieldValidationMixin(["typeaheadField"])],

  propTypes: {
    onSelectOption: React.PropTypes.func,
    onResetVal: React.PropTypes.func,
    onArrowNavigation: React.PropTypes.func,
    onChange: React.PropTypes.func,
    list: React.PropTypes.array,
    manualMode: React.PropTypes.bool,
    hidden: React.PropTypes.bool
  },

  contextTypes: {
    analytics: React.PropTypes.object
  },

  _onSelectOption(value) {
    fireDataEvent(this, "onSelectOption", {value});

    this.refs.typeaheadField.clearValidation();
    this.refs.typeaheadField.setValue(value);

    if (this.props.onSelectOption) {
      this.props.onSelectOption(value);
    }
  },

  _onArrowNavigation(value) {
    fireDataEvent(this, "onArrowNavigation", {value});

    this.refs.typeaheadField.clearValidation();
    this.refs.typeaheadField.setValue(value);

    if (this.props.onArrowNavigation) {
      this.props.onArrowNavigation(value);
    }
  },

  _onResetVal(value) {
    fireDataEvent(this, "onResetVal", {value});

    this.refs.typeaheadField.clearValidation();
    this.refs.typeaheadField.setValue(value);

    if (this.props.onResetVal) {
      this.props.onResetVal(value);
    }
  },

  render() {
    const {
      list,
      manualMode,
      onChange,
      onSelectOption,
      onArrowNavigation,
      onResetVal, ...restOfProps} = this.props;

    return (
      <span className={this.props.hidden ? "hide-content" : ""}>
        <RadonTypeahead
          list={this.props.list}
          manualMode={this.props.manualMode}
          onChange={this.props.onChange}
          onArrowNavigation={this._onArrowNavigation}
          onResetVal={this._onResetVal}
          onSelectOption={this._onSelectOption}
          mainStyle={{
            position: "relative"
          }}
          listClassName={"tt-dropdown-menu"}
          listStyle={{
            position: "absolute",
            top: "100%",
            left: 0,
            zIndex: 100,
            width: "auto",
            minWidth: "100%",
            margin: "0 0 0 2px",
            padding: "5px 0",
            display: "block"
          }}
          listItemComponent={<TypeaheadListItem />}
          inputComponent={
            <Field
              autoComplete="off"
              ref="typeaheadField"
              {...restOfProps}
               />
          } />
      </span>
    );
  }
});
