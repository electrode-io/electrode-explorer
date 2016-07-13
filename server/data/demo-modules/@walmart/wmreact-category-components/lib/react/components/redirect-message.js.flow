import React, {PropTypes} from "react";
import { getTempoModuleAutomationId } from "@walmart/category-utils";

const _buildRedirectUrl = (searchQuery) => {
  const encodedQuery = encodeURIComponent(searchQuery);
  return `/search/?query=${encodedQuery}&redirect=false`;
};

/**
A component that displays a message based on a query string.
@examples
```jsx
<RedirectMessage query="Sample Query" />
```
@component RedirectMessage
@import {RedirectMessage}
@playground
```
<RedirectMessage searchQuery="Sample Query" />
```
*/

const RedirectMessage = ({linkText, message, moduleType, searchQuery}) => {
  return (
    <div className="RedirectMessage"
      {...getTempoModuleAutomationId(moduleType, process)}>
      <span className="RedirectMessage-message">{message}</span>&nbsp;
      <a className="RedirectMessage-link" href={_buildRedirectUrl(searchQuery)}>
        {linkText}&nbsp;{searchQuery}
      </a>
    </div>
  );
};

RedirectMessage.propTypes = {
  /**
  Text appearing in link before search query
  */
  linkText: PropTypes.string,
  /**
  Module title link text
  */
  message: PropTypes.string,
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: PropTypes.string,
  /**
  Search query
  */
  searchQuery: PropTypes.string.isRequired
};

RedirectMessage.defaultProps = {
  linkText: "See all",
  message: "Here are some items based on your search.",
  moduleType: "RedirectMessage"
};

export default RedirectMessage;
