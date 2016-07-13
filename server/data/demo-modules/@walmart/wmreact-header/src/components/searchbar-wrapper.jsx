/* @flow */
import React, { Component, PropTypes } from "react";
import classNames from "classnames";

import Arrange from "@walmart/wmreact-layout/lib/components/arrange";

import { TempoZone } from "../tempo-core";

/**
  An intermediate component for the header for rendering and managing the state of the
  search bar at mobile breakpoints. Should be used inside a TempoWrapper so all modules are
  populated.
  @examples
  ```jsx
  <SearchbarWrapper searchExposed={true} />
  ```
  @component SearchbarWrapper
  @import {SearchbarWrapper}
  @references SearchbarWrapper
  @playground
  SearchbarWrapper
 */

class SearchbarWrapper extends Component {
  constructor(props: Object): void {
    super(props);

    this.state = {
      open: props.searchExposed
    };
  }

  _getClassName(open: boolean): string {
    return classNames("header-SearchbarWrapper", {
      "hide-content-max-l": !open
    });
  }

  toggle(): void {
    this.setState({
      open: !this.state.open
    });
  }

  render(): ReactElement {
    const { open } = this.state;

    return (
      <Arrange.Fill className={this._getClassName(open)}>
        <TempoZone
          zoneName="headerZone2"
          {...this.props} />
      </Arrange.Fill>
    );
  }
}

SearchbarWrapper.displayName = "SearchbarWrapper";

SearchbarWrapper.propTypes = {
  /**
  check mobile device
  */
  isMobile: PropTypes.bool,
  /**
  True if search should be exposed by default at smaller screen widths.
  */
  searchExposed: PropTypes.bool,
  /**
  Category ID to be initially selected
  */
  selectedCategory: PropTypes.string,
  /**
  Url to fetch recomendations in searchbar
  */
  typeAheadUrl: PropTypes.string
};

SearchbarWrapper.defaultProps = {
  isMobile: false,
  searchExposed: true,
  selectedCategory: null,
  typeAheadUrl: ""
};

export default SearchbarWrapper;
