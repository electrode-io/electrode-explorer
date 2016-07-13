import React, {Component, PropTypes} from "react";

import classnames from "classnames";

/**
 The Switcher component flyout.
 For example this is how we use this component.
 ```jsx
 <Switcher
   isGridView={false}
   onChange={(showGrid)=> {console.log(showGrid)}}
 />
 ```
 @import {Switcher}
 @component Switcher
 @playground
 Search-Util-Bar-Switcher
 ```
 <Switcher
   isGridView={false}
   onChange={(showGrid)=> {console.log(showGrid)}}
  />
 ```
 */

export default class Switcher extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showGridView: props.isGridView || false
    };
  }

  _handleViewSwitch() {
    const {onChange} = this.props;
    const {showGridView} = this.state;
    const state = {showGridView: !showGridView};

    this.setState(state, () => onChange(state));
  }

  render() {
    const {showGridView} = this.state;

    const gridClasses = classnames("switcher-grid", {
      "active": showGridView
    });

    const listClasses = classnames("switcher-list", {
      "active": !showGridView
    });

    return (
      <div className="desktop-bar-switcher">
        <div className={gridClasses}
          onClick={showGridView ? null : this._handleViewSwitch.bind(this)}>
          <i className="wmicon wmicon-grid"></i>
        </div>
        <div className={listClasses}
          onClick={showGridView ? this._handleViewSwitch.bind(this) : null}>
          <i className="wmicon wmicon-menu"></i>
        </div>
      </div>
    );
  }
}

Switcher.displayName = "SearchUtilBarSwitcher";

Switcher.propTypes = {
  isGridView: PropTypes.bool,
  onChange: PropTypes.func
};
