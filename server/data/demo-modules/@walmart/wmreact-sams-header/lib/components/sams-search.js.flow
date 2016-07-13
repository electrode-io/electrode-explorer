/* @flow */
import React from "react";
import SearchbarWrapper from "@walmart/wmreact-header/lib/components/searchbar-wrapper";
import Arrange from "@walmart/wmreact-layout/lib/components/arrange";
import { TempoZone } from "@walmart/wmreact-header/lib/tempo-core";

class SamsSearch extends SearchbarWrapper {
  constructor(props) {
    super(props);
  }

  render() {
    const { open } = this.state;

    return (
      <Arrange.Fill className={this._getClassName(open)}>
        <TempoZone
          zoneName="search_zone"
          {...this.props} />
      </Arrange.Fill>
    );
  }
}

export default SamsSearch;
