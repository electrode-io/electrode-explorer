/* @flow */
import React from "react";

import RadonSelect from "radon-select";
import fireDataEvent from "@walmart/wmreact-analytics/lib/helpers/fire-data-event";

import Option from "./chooser-option";

/**
Chooser component, this component is a shim or proxy component around `RadonSelect`
@examples
Here is a simple example:

```jsx
<Chooser
  placeholderText="Select an option">
  <Chooser.Option value="Demo1">Demo 1</Chooser.Option>
  <Chooser.Option value="Demo2">Demo 2</Chooser.Option>
</Chooser>
```
@import Chooser
@component Chooser
@synonym dropdown
@synonym drop-down
@synonym select
@playground
Chooser
```
<div>
  <h4>Simple chooser</h4>
  <Chooser chooserName="chooser1"
    placeholderText="Select an option">
    <Chooser.Option value="Demo1">Demo 1</Chooser.Option>
    <Chooser.Option value="Demo2">Demo 2</Chooser.Option>
  </Chooser>
  <h4>Chooser with React element as children</h4>
  <Chooser chooserName="chooser2"
    placeholderText="Select an option">
    <Chooser.Option value="Demo1"><h1 style={{margin:"0px"}}>Demo1</h1></Chooser.Option>
    <Chooser.Option value="Demo2"><h1 style={{margin:"0px"}}>Demo 2</h1></Chooser.Option>
  </Chooser>
</div>
```
*/
const Chooser = React.createClass({
  displayName: "Chooser",

  propTypes: {
    children(props, propName) {
      if (!props[propName] || !Array.isArray(props[propName])) {
        return new Error("children must be an array of Chooser.Option");
      }

      for (const child in props[propName]) {
        if (!props[propName][child]
          || props[propName][child].type.displayName !== "Chooser.Option") {
          return new Error("children must be an array of Chooser.Option");
        }
      }
    },
    /**
    Name of the chooser
    */
    chooserName: React.PropTypes.string.isRequired,
    /**
    The default value
    */
    defaultValue: React.PropTypes.string,
    /**
    The text that shows up when no items are selected.
    */
    placeholderText: React.PropTypes.string,
    /**
    Passed though to RadonSelect, time in MS before the typeahead appears. Default 1000
    */
    typeaheadDelay: React.PropTypes.number,
    /**
    Style property, adds chooser-fixed-width class to component.
    */
    fixedWidth: React.PropTypes.string,
    /**
    Style property, adds chooser-alt class to component.
    */
    isAlt: React.PropTypes.bool,
    /**
    Style property, adds chooser-block class to component.
    */
    isBlock: React.PropTypes.bool,
    /**
    Style property, adds chooser-rounded class to component.
    */
    isRounded: React.PropTypes.bool,
    /**
    Style property, adds chooser-rounded and chooser-rounded-mini class to component.
    */
    isMini: React.PropTypes.bool,
    /**
    Whether or not the component is enabled.
    */
    disabled: React.PropTypes.bool,
    /**
    Called on a change.
    */
    onChange: React.PropTypes.func,
    /**
    Called on focus.
    */
    onBlur: React.PropTypes.func,
    className: React.PropTypes.string,
    /**
    An automation ID for magellan
    */
    automationId: React.PropTypes.string,
    hidden: React.PropTypes.bool,
    /**
    An ID for TeaLeaf
    */
    tealeafId: React.PropTypes.string
  },

  contextTypes: {
    analytics: React.PropTypes.object
  },

  getValue(): any {
    return this.refs.radonSelect.getValue();
  },

  setValue(val: any): void {
    this.refs.radonSelect.setValue(val);
  },

  _onChange(value: any): void {
    fireDataEvent(this, "onChange", {value});
    if (this.props.onChange) {
      this.props.onChange(value);
    }
  },

  _onBlur(): void {
    fireDataEvent(this, "onBlur", {});
    if (this.props.onBlur) {
      this.props.onBlur();
    }
  },

  /* eslint max-statements:0 */
  render(): ReactElement {
    const chooserStyle = {};
    const currentOptionStyle: {
      border: string,
      height: string,
      borderRadius?: string
    } = {
      border: "1px solid #c2cfd6",
      height: "30px"
    };
    // borderRadius: any
    const chooserClassNames = [this.props.className, "chooser"];

    if (this.props.fixedWidth) {
      chooserClassNames.push("chooser-fixed-width");
      chooserStyle.width = this.props.fixedWidth;
    }

    if (this.props.isAlt) {
      chooserClassNames.push("chooser-alt");
    }

    if (this.props.isBlock) {
      chooserClassNames.push("chooser-block");
    }

    if (this.props.isRounded) {
      currentOptionStyle.height = "38px";
      currentOptionStyle.borderRadius = "4px";
      chooserClassNames.push("chooser-rounded");
    }

    if (this.props.isMini) {
      chooserClassNames.push("chooser-rounded chooser-rounded-mini");
      currentOptionStyle.height = "26px";
      currentOptionStyle.borderRadius = "4px";
    }

    const {
      onChange, onBlur, automationId, tealeafId, ...otherProps
    } = this.props;

    return (
      <span className={this.hidden ? "hide-content" : ""}
        data-automation-id={automationId}
        data-tl-id={tealeafId}>
        <RadonSelect
          {...otherProps}
          onChange={this._onChange}
          onBlur={this._onBlur}
          ref="radonSelect"
          className={chooserClassNames.join(" ")}
          openClassName="active"
          focusClassName="focused"
          disabledClassName="disabled"
          listClassName="chooser-option-list rendered"
          currentOptionClassName="chooser-option-current"
          hiddenSelectClassName="visuallyhidden"
          style={chooserStyle}
          currentOptionStyle={currentOptionStyle}
          selectName={`${this.props.chooserName}_select`}
        >
          {this.props.children}
        </RadonSelect>
      </span>
    );
  }
});

Chooser.Option = Option;

export default Chooser;
