/* @flow */
import React, { PropTypes, Component } from "react";
import classNames from "classnames";

import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";
import WaypointCollector from "@walmart/wmreact-analytics/lib/collectors/waypoint-collector";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import TempoCategoryTile from "../helper-components/tempo-category-tile";
import ModuleHeader from "../helper-components/module-header";
import validCategoryTile from "../../helpers/category-tile-helpers";

/**
Featured Categories Curated Module
@examples
@component FeaturedCategoriesCurated
@import {FeaturedCategoriesCurated}
@playground
FeaturedCategoriesCurated
```
<FeaturedCategoriesCurated
  moduleData={FeaturedCategoriesCuratedData}
/>
```
*/

class FeaturedCategoriesCurated extends Component {
  constructor(props: Object): void {
    super(props);

    this.state = {
      expanded: false
    };

    this._toggleExpanded = this._toggleExpanded.bind(this);
  }

  _toggleExpanded(): void {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  _renderFeaturedCategoryTiles(categories: Object, automationId: string, verticalZonesCount: number, // eslint-disable-line max-params, max-len
    isMobile: boolean): ReactElement { // eslint-disable-line max-params
    const gridColClasses = classNames(
      "Grid-col u-size-1-3 u-size-1-4-s",
      `u-size-1-${5 - verticalZonesCount}-m`,
      `u-size-1-${6 - verticalZonesCount}-l`,
      `u-size-1-${7 - verticalZonesCount}-xl`
    );

    const tiles = [];
    let renderedTileIndex = 0;

    categories.forEach((category) => {
      if (validCategoryTile(category)) {
        tiles.push(
          <TempoCategoryTile
            className={gridColClasses}
            key={renderedTileIndex}
            category={category}
            dataAutomationId={`${automationId}-categoryTile-${renderedTileIndex}`}
            isMobile={isMobile}
            mobileImageSize={90}
          />
        );
        renderedTileIndex++;
      }
    });

    return tiles;
  }

  _getButtonClasses(categoryLength: number): Object {
    let hideButtonClass = "";

    if (categoryLength <= 9) {
      hideButtonClass = "hide-content";
    } else if (categoryLength <= 10) {
      hideButtonClass = "hide-content-s";
    } else if (categoryLength <= 12) {
      hideButtonClass = "hide-button-s-l";
    } else if (categoryLength <= 14) {
      hideButtonClass = "hide-content-xl";
    }

    return (classNames(
      "caret",
      "caret-blue",
      "font-semibold",
      "copy-mini",
      "btn",
      "btn-inverse",
      hideButtonClass,
      { "active": this.state.expanded }
    ));
  }

  _renderFeaturedCategories(automationId: string): ReactElement {
    const {
      moduleData: {
        configs: {
          categories,
          displayMode
        }
      },
      verticalZonesCount,
      isMobile
    } = this.props;

    if (displayMode === "standard") {
      return (
        <div className="FeaturedCategoriesCurated-gutters">
          <div
            className={
              classNames(
                "FeaturedCategoriesCurated-expander",
                { "is-open": this.state.expanded }
              )
            }>
            <div className="clearfix">
              {this._renderFeaturedCategoryTiles(categories, automationId, verticalZonesCount,
                isMobile)}
            </div>
          </div>
          <div className="FeaturedCategoriesCurated-button text-center">
            <Button
              className={this._getButtonClasses(categories.length)}
              onClick={this._toggleExpanded}
              {...getDataAutomationIdPair("expander", automationId)}>
              View {this.state.expanded ? "less" : "more"}
            </Button>
          </div>
        </div>
      );
    } else {
      return (
        <div className="FeaturedCategoriesCurated-gutters">
          {this._renderFeaturedCategoryTiles(categories, automationId, verticalZonesCount,
            isMobile)}
        </div>
      );
    }
  }

  render() {
    const {
      moduleData: {
        type,
        configs: {
          title,
          titleColor,
          themeColor,
          themeImage
        },
        moduleId
      },
      dataAutomationId
    } = this.props;

    const style = {
      backgroundColor: themeColor
    };

    if (themeImage) {
      style.backgroundImage = `url('${themeImage.src}')`;
    }

    const automationId = `${dataAutomationId}-FeaturedCategoriesCurated`;

    return (
      <CollectorContext moduleId={moduleId}>
        {/* 200 px is a good comporomise for one row between desktop and mobile */}
        <WaypointCollector eventType="module_view" bottomOffset={200}>
        <div
          data-module={type}
          data-module-id={moduleId}
          className="FeaturedCategoriesCurated"
          style={style}
          {...getDataAutomationIdPair(automationId, "")}>
          {title &&
            <ModuleHeader
              headerTitle={title}
              headerTitleColor={titleColor}
              dataAutomationId={automationId}
            />
          }
          {this._renderFeaturedCategories(automationId)}
        </div>
        </WaypointCollector>
      </CollectorContext>
    );
  }
}

FeaturedCategoriesCurated.displayName = "FeaturedCategoriesCurated";

FeaturedCategoriesCurated.propTypes = {
  /**
   * Data for configuring the component. Typically coming from Tempo.
   * Contains information on the URL detail, image detail and header data.
   */
  moduleData: PropTypes.shape({
    type: PropTypes.string,
    configs: PropTypes.shape({
      title: PropTypes.string,
      titleColor: PropTypes.string,
      themeColor: PropTypes.string,
      themeImage: PropTypes.object,
      displayMode: PropTypes.string,
      categories: PropTypes.array
    }).isRequired,
    moduleId: PropTypes.string
  }).isRequired,
  /**
  * Tempo module type for analytics and automation testing.
  */
  dataAutomationId: PropTypes.string,
  /**
  * Vertical Zones on the sides. Used to change the Grid column structure.
  */
  verticalZonesCount: PropTypes.number,
  /**
  * True on mobile devices
  */
  isMobile: PropTypes.bool
};

FeaturedCategoriesCurated.defaultProps = {
  dataAutomationId: "",
  verticalZonesCount: 0,
  isMobile: false
};

export default FeaturedCategoriesCurated;
