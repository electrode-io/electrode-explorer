/* @flow */
import React from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";

/**
This component displays the mobile version of typeahead

@import {TypeaheadMobile}
@playground
TypeaheadMobile
```
<TypeaheadMobile  />
/>
```
*/

const TypeaheadMobile = () => {
  return (
    <div className="mweb-Typeahead hide-content">
      <form className="mweb-Typeahead-form" name="typeahead"
        action="/search/" method="get" role="search">
        <div className="mweb-Typeahead-searchbar arrange u-bgBlue">
          <div className="arrange-fill pos-relative">
            <input className="mweb-Typeahead-input"
              type="text" name="query" placeholder="Search" autoComplete="off"
              autoCorrect="off" autoCapitalize="off" accessKey="s"
              role="combobox" aria-haspopup="true" />
            <Button className="mweb-Typeahead-clear btn-link absolute-center-v"
              type="reset"
              {...getDataAutomationIdPair("mweb-typeahead-clear", "")}>
              <Icon name="add" />
              <span className="visuallyhidden">Clear search field</span>
            </Button>
          </div>
          <div className="arrange-fit">
            <Button
              className="mweb-Typeahead-submit"
              type="submit"
              {...getDataAutomationIdPair("mweb-typeahead-submit", "")}>
              <Icon name="search" />
              <span className="visuallyhidden">Search</span>
            </Button>
          </div>
          <div className="arrange-fit">
            <Button className="mweb-Typeahead-cancel btn-fake-link u-textWhite"
              type="button"
              {...getDataAutomationIdPair("mweb-typeahead-cancel", "")}>
              Cancel
            </Button>
          </div>
        </div>
        <div className="mweb-Typeahead-list">
          <div className="hide-content mweb-Typeahead-recent">
            <h6 className="mweb-Typeahead-listHead font-normal no-margin">
              Recent searches
              <span className="mweb-Typeahead-recentClear pull-right u-textBlue">
                Clear All
              </span>
            </h6>
            <div className="mweb-Typeahead-listHolder"></div>
          </div>
          <div className="hide-content mweb-Typeahead-trend">
            <h6 className="mweb-Typeahead-listHead font-normal no-margin">Trending searches</h6>
            <div className="mweb-Typeahead-listHolder"></div>
          </div>
          <ul className="mweb-Typeahead-suggest block-list"></ul>
        </div>
      </form>
    </div>
  );
};

TypeaheadMobile.displayName = "TypeaheadMobile";

export default TypeaheadMobile;
