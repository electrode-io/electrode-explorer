/* @flow */
import React, { PropTypes, Component } from "react";
import classNames from "classnames";
import Flyout from "@walmart/wmreact-containers/lib/components/flyout";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";

/**
 The search dropdown component. Has a dropdown to select a category used when searching.

 ```jsx
 <SearchDropdown options={
   [
     {
       label: "Auto & Tires",
       categoryId: "91083"
     },
     {
       label: "Baby",
       categoryId: "5427"
     },
     {
       label: "Beauty",
       categoryId: "1085666"
     },
     {
       label: "Books",
       categoryId: "3920"
     },
     {
       label: "Cell Phones",
       categoryId: "1105910"
     },
     {
       label: "Clothing",
       categoryId: "5438"
     },
     {
       label: "Electronics",
       categoryId: "3944"
     },
     {
       label: "Food",
       categoryId: "976759"
     }
   ]
 } />
 ```

 @import {SearchDropdown}
 @flags noVisibleRender
 @component SearchDropdown
 @playground
 SearchDropdown
 */

class SearchDropdown extends Component {
  constructor(props: Object) {
    super(props);

    this._initializeCategories(props);

    this.state = {
      selected: props.selectedCategory,
      open: false
    };

    this._setOpen = this._setOpen.bind(this);
  }

  _getClassNames(className: string, open: boolean): string {
    return classNames(className, "header-SearchDropdown", {
      "is-open": open
    });
  }

  _initializeCategories({ options, columnLength }): void {
    const allDepts = {
      categoryId: "0",
      label: "All Departments"
    };

    this.idLabelMap = {}; // object to efficiently get category name from ID
    this.columns = []; // column structure for rendering
    let currentColumn = -1;

    [allDepts, ...options].forEach((option, index) => {
      if (index % columnLength === 0) {
        this.columns.push([]);
        currentColumn++;
      }

      this.idLabelMap[option.categoryId] = option.label;
      this.columns[currentColumn].push(option);
    });
  }

  _displayCategory(): string {
    return this.idLabelMap[this.state.selected] || "All";
  }

  _setCategory(categoryId: string): void {
    this.setState({
      selected: categoryId,
      open: false
    });

    /*eslint-disable no-undef*/
    // hook into the typeahead that is pure JS
    if (window.typeaheadResult &&
      typeof window.typeaheadResult.setCatId === "function") {
      window.typeaheadResult.setCatId(categoryId);
    }
    /*eslint-enable no-undef*/
  }

  _renderButton(): ReactElement {
    return (
      <Button
        className="header-SearchDropdown-toggle"
        dropdown={true}
        {...getDataAutomationIdPair("toggle", this.props.dataAutomationId)}>
        {this._displayCategory()}
      </Button>
    );
  }

  _renderOptions(options: Array<Object>, column: number): Array<ReactElement> {
    return options.map((option, index) => {
      return (
        <Button
          key={index}
          className="font-semibold header-SearchDropdown-option"
          fakelink={true}
          onClick={this._setCategory.bind(this, option.categoryId)}
          {...getDataAutomationIdPair(`column-${column}-option-${index}`,
            this.props.dataAutomationId)}>
          {option.label}
        </Button>
      );
    });
  }

  _renderColumns(columns: Array<Array<Object>>): Array<Object> {
    return columns.map((options, index) => {
      return (
        <div key={index} className={`Grid-col u-size-1-${this.columns.length}`}>
          {this._renderOptions(options, index)}
        </div>
      );
    });
  }

  _setOpen(open: boolean): void {
    this.setState({open});
  }

  render(): ReactElement {
    const { className, dataAutomationId } = this.props;
    const { open } = this.state;

    return (
      <Flyout
        className={this._getClassNames(className, open)}
        direction="bottom"
        size="extrawide"
        active={open}
        trigger={this._renderButton()}
        onActiveChange={this._setOpen}
        {...getDataAutomationIdPair(dataAutomationId, "")}>
        <div className="Grid">
          {this._renderColumns(this.columns)}
          <input type="hidden" name="cat_id" value={this.state.selected} />
        </div>
      </Flyout>
    );
  }
}

SearchDropdown.displayName = "SearchDropdown";

SearchDropdown.propTypes = {
  /**
  Category ID's and labels to be used in the dropdown.
  */
  options: PropTypes.array.isRequired,
  /**
  Category ID to be initially selected
  */
  selectedCategory: PropTypes.string,
  /**
  Number of categories in each column.
  */
  columnLength: PropTypes.number,
  /**
  Any additional style classes
  */
  className: PropTypes.string,
  /**
  Automation ID base string
  */
  dataAutomationId: PropTypes.string
};

SearchDropdown.defaultProps = {
  selectedCategory: null,
  columnLength: 9,
  className: "",
  dataAutomationId: "header-SearchDropdown"
};

export default SearchDropdown;
