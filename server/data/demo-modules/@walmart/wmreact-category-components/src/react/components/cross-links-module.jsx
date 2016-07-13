import React, { Component, PropTypes } from "react";
import classNames from "classnames";
import { canUseDOM } from "exenv";
import { getTempoModuleAutomationId } from "@walmart/category-utils";

/**
A component for displaying subcategory as a flyout
@examples
```jsx
<CrossLinksModule data={
  "moduleTitle": "Popular Category",
  "data": [
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple"
    },
    {
      "uid": "WcaenllV1",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV2",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV3",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV4",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV5",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV6",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV7",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    }
  ]}/>
```
@component CrossLinksModule
@import {CrossLinksModule}
@playground
CrossLinksModule
```
<CrossLinksModule data={
  "moduleTitle": "Popular Category",
  "data": [
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple"
    },
    {
      "uid": "WcaenllV1",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV2",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV3",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV4",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV5",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV6",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV7",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    }
  ]
}/>
```
*/
export default class CrossLinksModule extends Component {
  constructor(props): void {
    super(props);

    this.state = {
      numColumns: this._findNumColumns(canUseDOM ?
        this._getWindow().innerWidth : 0, props.data)
    };
  }

  _getWindow(): Object {
    return window;
  }

  _findNumColumns(deviceWidth, data): Object {
    // By default xs screens should have 2 columns and s screens should have 4 columns.
    const numColumns = {xs: 2, s: 4};
    const pixelWidthPerCharacter = 10;

    if (data.some((item) => item.title.length * pixelWidthPerCharacter > deviceWidth / 2)) {
    // On s screen if any title string length takes more
    // than half of device width show only one column
      numColumns.s = 1;
      numColumns.xs = 1;
    } else if (data.some((item) => item.title.length * pixelWidthPerCharacter > deviceWidth / 3)) {
    // On s screen if any title string length takes more
    // than a third of device width show only two columns
      numColumns.s = 2;
    } else if (data.some((item) => item.title.length * pixelWidthPerCharacter > deviceWidth / 4)) {
    // On s screen if any title string length takes more
    // than a third of device width show only three columns
      numColumns.s = 3;
    }

    return numColumns;
  }

  _updateWindowSize(): void {
    this.setState({
      numColumns: this._findNumColumns(canUseDOM ?
        this._getWindow().innerWidth : 0, this.props.data)
    });
  }

  _renderTerm(item, index): ReactElement {
    const numColumns = this.state.numColumns;
    const maxIndexS = numColumns.s * this.props.maxRow - 1;
    const maxIndexXS = numColumns.xs * this.props.maxRow - 1;
    const classes = classNames("Grid-col menu-item", {
      "hide-content": index > maxIndexXS,
      "display-block": index <= maxIndexXS,
      "hide-content-xs": index > maxIndexS,
      "display-block-xs": index <= maxIndexS,
      "u-size-1-1": numColumns.xs === 1,
      "u-size-1-2": numColumns.xs === 2,
      "u-size-1-1-s": numColumns.s === 1,
      "u-size-1-2-s": numColumns.s === 2,
      "u-size-1-3-s": numColumns.s === 3,
      "u-size-1-4-s": numColumns.s === 4
    });
    return <a key={index} className={classes} href={item.url}>{item.title}</a>;
  }

  componentDidMount(): void {
    this._updateWindowSize();
  }

  render(): ReactElement {
    const { data, moduleTitle, moduleType } = this.props;
    if (data.length === 0) {
      return null;
    }
    const menuItems = data.map((item, i) => this._renderTerm(item, i));
    return (
      <div className="cross-links Grid clearfix"
        {...getTempoModuleAutomationId(moduleType, process)}>
        <h4 className="cross-links-title Grid-col">{moduleTitle}:</h4>
        {menuItems}
      </div>
    );
  }
}

CrossLinksModule.displayName = "CrossLinksModule";

CrossLinksModule.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    title: React.PropTypes.string,
    url: React.PropTypes.string
  })).isRequired,
  maxRow: PropTypes.number,
  moduleTitle: PropTypes.string.isRequired,
  moduleType: PropTypes.string
};

CrossLinksModule.defaultProps = {
  maxRow: 4,
  moduleType: "CrossLinksModule"
};
