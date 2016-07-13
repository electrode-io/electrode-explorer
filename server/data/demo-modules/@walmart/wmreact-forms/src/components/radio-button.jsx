/* @flow */
/* eslint react/no-did-mount-set-state: 0 */
import React from "react";
import classNames from "classnames";

let __incrId = 0;

/**
A radio compnent.
@examples
```jsx
<Radio.Button group="demo">
  Radio 1
</Radio.Button>
```
@component Radio.Button
@import {Radio}
*/
export default React.createClass({
  displayName: "Radio",
  mixins: [React.PureRenderMixin],

  propTypes: {
    /**
    True if this is in alt style
    */
    alt: React.PropTypes.bool,
    /**
    The id of the control
    */
    id: React.PropTypes.string,
    /**
    The group name
    */
    group: React.PropTypes.string.isRequired,
    /**
    The change callback
    */
    onChange: React.PropTypes.func,
    /**
    The click handler
    */
    onClick: React.PropTypes.func,
    /**
    True if the input is checked
    */
    checked: React.PropTypes.bool,
    children: React.PropTypes.node,
    /**
    The optional automation ID
    */
    automationId: React.PropTypes.string,
    hidden: React.PropTypes.bool,
    /**
    The optional TeaLeaf ID
    */
    tealeafId: React.PropTypes.string
  },

  getDefaultProps(): {
    alt: boolean;
    id: string;
    onChange: () => void;
    onClick: () => void;
  } {
    return {
      alt: false,
      id: "",
      onChange() {},
      onClick() {
        const isChecked = !this.props.checked;
        this.setState({
          checked: isChecked
        });
      },
      checked: false,
      automationId: "radio-button",
      tealeafId: "radio-button"
    };
  },

  getInitialState(): {
    checked: boolean,
    id: string
  } {
    return {
      checked: this.props.checked || false,
      id: `radio-${(__incrId++)}`
    };
  },

  componentWillReceiveProps(nextProps: Object): void {
    if (nextProps.checked !== undefined) {
      this.setState({
        checked: nextProps.checked
      });
    }
  },

  render(): ReactElement {
    const extras = {
      "radio-alt": this.props.alt
    };
    return (
      <div className={classNames(
        "radio",
        extras,
        this.props.hidden ? "hide-content" : ""
        )}
        data-automation-id={this.props.automationId}
        data-tl-id={this.props.tealeafId}>
        <input
          type="radio"
          name={this.props.group}
          id={this.state.id}
          onChange={this.props.onChange}
          onClick={this.props.onClick}
          checked={this.state.checked}/>
        <label htmlFor={this.state.id}>{this.props.children}</label>
      </div>
    );
  }
});
