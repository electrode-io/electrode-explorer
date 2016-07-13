import React, {Component, PropTypes} from "react";

import {Chooser} from "@walmart/wmreact-chooser";

/**
 The sort component flyout.
 For example this is how we use this component.
 ```jsx
 <Sort
  currentSortValue="price_high"
  options={options}
  onChange={(ev)=> {console.log(ev)}}
 />
 ```
 @import {Sort}
 @component Sort
 @playground
 Search-Util-Bar-Sort
 ```
 <Sort
  currentSortValue="price_high"
  options={options}
  onChange={(ev)=> {console.log(ev)}}
  />
 ```
 */

export default class Sort extends Component {
  constructor(props) {
    super(props);

    let currentValue = props.options[0] && props.options[0].value;

    for (let i = 0; i < props.options.length; i++) {
      if (props.options[i].value === props.currentSortValue) {
        currentValue = props.options[i].value;
        break;
      }
    }

    this.state = {currentValue};
  }

  _onChange(option) {
    // state of currentValue is what the previous value is
    const {currentValue} = this.state;

    // Change event will be fired when previousValue is
    // differed to user selected value, otherwise omitted
    if (option !== currentValue) {
      const {onChange} = this.props;

      this.setState({currentValue: option});
      onChange(option, currentValue);
    }
  }

  render() {
    const {options} = this.props;
    const {currentValue} = this.state;

    return (
      <div className="desktop-bar-sort">
        <Chooser
          chooserName="searchUtilBarSort"
          onChange={this._onChange.bind(this)}
          defaultValue={currentValue}
          className="chooser chooser-alt">
          {options.map((facet, index) => {
            return (
              <Chooser.Option key={index} value={facet.value}>
                {facet.name}
              </Chooser.Option>
            );
          })}
        </Chooser>
      </div>
    );
  }
}

Sort.displayName = "SearchUtilBarSort";

Sort.propTypes = {
  currentSortValue: PropTypes.string,
  options: PropTypes.array.isRequired,
  onChange: PropTypes.func
};
