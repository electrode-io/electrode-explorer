import React from "react";

import ZeroResults from "./zero-results";
import Link from "@walmart/wmreact-base/lib/components/link";

const ZeroResultsNoMatch = ({searchQuery, postalCode}) => (
  <ZeroResults>
    <strong>Sorry, no products matched "{searchQuery}"</strong>
    <ul>
      <li>Check your spelling</li>
      <li>Use different keywords and try again</li>
      <li>
        <Link href={`/store/finder?location=${postalCode}`}>
          Contact your local store
        </Link>
      </li>
    </ul>
  </ZeroResults>
);

ZeroResultsNoMatch.displayName = "ZeroResults.NoMatch";

ZeroResultsNoMatch.propTypes = {
  searchQuery: React.PropTypes.string.isRequired,
  postalCode: React.PropTypes.string
};

ZeroResultsNoMatch.defaultProps = {
  searchQuery: "",
  postalCode: ""
};

export default ZeroResultsNoMatch;
