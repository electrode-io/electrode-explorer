/* @flow */
/* eslint react/no-did-mount-set-state: 0, no-unused-vars: 0 */
import React from "react";

const cloneElement = React.cloneElement;

/**
A radio group compnent.
@examples
```jsx
<Radio.Group name="test">
  <Radio.Button group="demo">
    Radio 1
  </Radio.Button>
  <Radio.Button group="demo">
    Radio 2
  </Radio.Button>
</Radio.Group>
```
@component Radio.Group
@import {Radio}
@playground
Radio.Group
```
<Radio.Group name="test">
  <Radio.Button group="demo">
    Radio 1
  </Radio.Button>
  <Radio.Button group="demo">
    Radio 2
  </Radio.Button>
</Radio.Group>
```
*/
export default React.createClass({

  propTypes: {
    name: React.PropTypes.string.isRequired,
    onChange: React.PropTypes.func,
    selected: React.PropTypes.number,
    children: React.PropTypes.node,
    automationId: React.PropTypes.string,
    hidden: React.PropTypes.bool,
    tealeafId: React.PropTypes.string
  },

  getDefaultProps(): {
    onChange: (index: number) => void,
    automationId: string,
    tealeafId: string
  } {
    return {
      onChange(index: number) {},
      automationId: "radio-group",
      tealeafId: "radio-group"
    };
  },

  getInitialState(): {
    selected: ?number
  } {
    return {
      selected: null
    };
  },

  componentDidMount(): void {
    if (this.state.selected === null) {
      this.setState({selected: this.props.selected});
    }
  },

  componentWillReceiveProps(nextProps: Object): void {
    if (nextProps.selected !== undefined) {
      this.setState({
        selected: nextProps.selected
      });
    }
  },

  _onClick(index: number): void {
    this.setState({selected: index});
    if (this.props.onChange) {
      this.props.onChange(index);
    }
  },

  renderRadio(child: ReactElement, index: number): void {
    const automationId = `${this.props.automationId}-option-${index}`;
    const tealeafId = `${this.props.tealeafId}-option-${index}`;

    return cloneElement(child, {
      automationId,
      tealeafId,
      group: this.props.name,
      onClick: this._onClick.bind(this, index, null),
      checked: this.state.selected === index,
      key: index
    });
  },

  render(): ReactElement {
    return (
      <div className={
        this.props.hidden ? "hide-content" : ""
      }>
        {React.Children.map(this.props.children, this.renderRadio)}
      </div>
    );
  }
});
