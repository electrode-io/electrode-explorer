import React from "react";

import ZeroResults from "./zero-results";

const renderFilterMessage = (priceFilter, storeFilter) => {
  let message = "";
  /* eslint-disable no-lonely-if */
  if (priceFilter && storeFilter) {
    message = "Price and Store Filter";
  } else {
    if (priceFilter) {
      message = "Price Filter";
    } else if (storeFilter) {
      message = "Store Filter";
    }
  }
  /* eslint-enable no-lonely-if */
  return message;
};

const ZeroResultsFilter = ({searchQuery, priceFilter, storeFilter}) => {
  const filterMessage = renderFilterMessage(priceFilter, storeFilter);

  return (
    <ZeroResults>
      <span>
        {`We didn't find any results `}
        {searchQuery &&
          `for <strong> "${searchQuery}" </strong> `
        }
        with the {`${filterMessage} `}
        you selected. Showing results without the
        <strong> {filterMessage}.</strong>
      </span>
    </ZeroResults>
  );
};

ZeroResultsFilter.displayName = "ZeroResults.Filter";

ZeroResultsFilter.propTypes = {
  searchQuery: React.PropTypes.string.isRequired,
  priceFilter: React.PropTypes.bool,
  storeFilter: React.PropTypes.bool
};

ZeroResultsFilter.defaultProps = {
  searchQuery: "",
  priceFilter: false,
  storeFilter: false
};

export default ZeroResultsFilter;
