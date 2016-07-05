/* @flow */
import React, { Component, PropTypes } from "react";
import classNames from "classnames";
import Arrange from "@walmart/wmreact-layout/lib/components/arrange";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import SearchDropdown from "./search-dropdown";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";
import get from "lodash/get";

/**
 The Global Search component of the header. Passes moduleData down to the searchdropdown.

 ```jsx
 <GlobalSearch moduleData={
   {
     type: "GlobalSearch",
     configs: {
       options: [
         {
           label: "Auto & Tires",
           categoryId: "91083",
           uid: "KZ0ktkHH"
         },
         {
           label: "Baby",
           categoryId: "5427",
           uid: "fHCypgFG"
         },
         {
           label: "Beauty",
           categoryId: "1085666",
           uid: "whzlG8-N"
         },
         {
           label: "Books",
           categoryId: "3920",
           uid: "Prik5hH8"
         },
         {
           label: "Cell Phones",
           categoryId: "1105910",
           uid: "oJgACZdH"
         },
         {
           label: "Clothing",
           categoryId: "5438",
           uid: "IRVq4Xj2"
         },
         {
           label: "Electronics",
           categoryId: "3944",
           uid: "8ojrslW8"
         },
         {
           label: "Food",
           categoryId: "976759",
           uid: "88kAZA4B"
         }
       ]
     },
     module_id: "56074e92-06db-4890-b5cd-2f87dc7327c4"
   }
 } />
 ```

 @import {GlobalSearch}
 @flags noVisibleRender
 @component GlobalSearch
 @playground
 GlobalSearch
 */

class GlobalSearch extends Component {
  constructor(props: Object): void {
    super(props);
    this._handleEmptyInput = this._handleEmptyInput.bind(this);
    this._getSearchInput = this._getSearchInput.bind(this);
  }

  componentDidMount(): void {
    /*eslint-disable no-undef*/
    // if something cause a re-mount, we should be vigilant
    // React can wipe out the original dom and replace it with
    // identical doms but they are not the same as we have to rebind etc
    if (typeof window.typeaheadResult === "function") {
      // recalculate the elements
      typeaheadResult.init();
      typeaheadResult.reRenderLastState();
    }

    const mwebTypeaheadObject = get(window, "_wml.MWEB_TYPEAHEAD");
    if (mwebTypeaheadObject && typeof mwebTypeaheadObject.Typeahead === "function") {
      mwebTypeaheadObject.init();
    }
    /*eslint-enable no-undef*/
  }

  _getClassNames(className: string): string {
    return classNames(className, "header-GlobalSearch width-full");
  }

  _renderDropdown(selectedCategory: string, options: Array<Object>): ReactElement {
    const dropdownProps = { selectedCategory, options };
    return <SearchDropdown {...dropdownProps} />;
  }

  _renderInput(): ReactElement {
    return (
      <input
        name="query"
        ref="globalSearchInput"
        data-automation-id="header-search-input"
        className="header-GlobalSearch-input"
        placeholder="Search"
        id="global-search-input"
        autoComplete="off"
        autoCapitalize="off"
        autoCorrect="off"
      />
    );
  }

  _renderTypeaheadDropdown(): ReactElement {
    return <div className="header-Typeahead-dropdown hide-content" id="global-search-dropdown" />;
  }

  _renderClearInput(): ReactElement {
    // @TODO use <SimpleButton> instead of button when it's out
    return (
      <button
        type="reset"
        className="header-Typeahead-clear hide-content"
        id="global-search-clear"
      >
        <i className="wmicon wmicon-remove"></i>
        <span className="hide-content">Clear search field</span>
      </button>
    );
  }

  _renderSubmit(): ReactElement {
    return (
      <Button
        type="submit"
        className="header-GlobalSearch-submit"
        {...getDataAutomationIdPair("submit", this.props.dataAutomationId)}>
        <Icon name="search" />
        <span className="visuallyhidden">Search</span>
      </Button>
    );
  }

  _getSearchInput(): string {
    return this.refs.globalSearchInput.value;
  }

  _handleEmptyInput(ev: Object): void {
    const searchValue = this._getSearchInput();
    // string is empty and has whitespace
    if (!(/\S/.test(searchValue))) {
      ev.preventDefault();
    }
  }

  render(): ReactElement {
    const {
      moduleData: {
        moduleId,
        type,
        configs: {
          options
        }
      },
      className,
      selectedCategory,
      dataAutomationId,
      isMobile
    } = this.props;

    return (
      <CollectorContext moduleId={moduleId}>
        <form
          onSubmit={this._handleEmptyInput}
          action="/search/"
          method="get"
          role="search"
          data-third-party="false"
          data-module={type}
          data-module-id={moduleId}
          id="global-search-form"
          {...getDataAutomationIdPair(dataAutomationId, "")}>
          <Arrange className={this._getClassNames(className)}>
            {!isMobile &&
              <Arrange.Fit>
                {this._renderDropdown(selectedCategory, options)}
              </Arrange.Fit>}
            <Arrange.Fill>
              <div className="header-Typeahead">
                <label>
                  <span className="visuallyhidden">Search</span>
                  {this._renderInput()}
                  {this._renderTypeaheadDropdown()}
                  {this._renderClearInput()}
                </label>
              </div>
            </Arrange.Fill>
            <Arrange.Fit>
              {this._renderSubmit()}
            </Arrange.Fit>
          </Arrange>
        </form>
      </CollectorContext>
    );
  }
}

GlobalSearch.displayName = "GlobalSearch";

GlobalSearch.propTypes = {
  /**
  check mobile device
  */
  isMobile: PropTypes.bool,
  /**
  Data for configuring the component. Typically coming from Tempo. Contains on the category ID's
  and labels to be used in the dropdown.
  */
  moduleData: PropTypes.shape({
    type: PropTypes.string,
    moduleId: PropTypes.string,
    configs: PropTypes.shape({
      options: PropTypes.array.isRequired
    }).isRequired
  }).isRequired,
  /**
  Category ID to be initially selected
  */
  selectedCategory: PropTypes.string,
  /**
  Any additional style class.
  */
  className: PropTypes.string,
  /**
  Automation ID base string
  */
  dataAutomationId: PropTypes.string
};

GlobalSearch.defaultProps = {
  isMobile: false,
  selectedCategory: null,
  className: "",
  dataAutomationId: "header-GlobalSearch"
};

export default GlobalSearch;
