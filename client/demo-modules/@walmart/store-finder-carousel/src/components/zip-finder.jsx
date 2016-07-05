import Button from "@walmart/wmreact-interactive/lib/components/button";
import Field from "@walmart/wmreact-forms/lib/components/field";
import React, { PropTypes } from "react";

import { noop } from "../common/utils";

const ZipFinder = ({ zip, onSearch, toggleSearching, isSearching }) => {
  let zipInputNode;

  const _onSearch = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    const newZip = zipInputNode.getValue();
    onSearch(newZip);
  };

  // --------------------------------------------------------------------------

  const _renderZip = () => (
    <Button
      fakelink={true}
      onClick={toggleSearching}
      className="StoreCarousel-toggleZipSearch"
    >
      {zip}
    </Button>
  );

  const _renderSearchUI = () => (
    <form onSubmit={_onSearch}>
      <Field
        showLabel={false}
        ref={(input) => { zipInputNode = input; }}
        defaultValue={zip}
      />
      <Button
        className="StoreCarousel-searchZip"
        onClick={_onSearch}
      >
        Find
      </Button>
    </form>
  );

  // --------------------------------------------------------------------------

  return (
    <div className="StoreCarousel-zipControls pull-left">
      Stores near {isSearching ? _renderSearchUI() : _renderZip()}
    </div>
  );
};

ZipFinder.propTypes = {
  toggleSearching: PropTypes.func,
  isSearching: PropTypes.bool,
  zip: PropTypes.string,
  onSearch: PropTypes.func
};

ZipFinder.defaultProps = {
  toggleSearching: noop(),
  isSearching: false,
  zip: "",
  onSearch: noop()
};

export default ZipFinder;
