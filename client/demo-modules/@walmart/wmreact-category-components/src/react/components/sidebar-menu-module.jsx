import React, {PropTypes, Component} from "react";
import Expander from "@walmart/wmreact-containers/lib/components/expander";
import { moduleTypes as ModuleTypes, getTempoModuleAutomationId } from "@walmart/category-utils";

import classnames from "classnames";

import SideBarMenuModuleItem from "./sidebar-menu-module-item";
import AnalyticsDispatcher from "./analytics-dispatcher";

/**
A component for displaying a group of sidebar menu items
@examples
```jsx
const data = {
  "zone": "leftNavZone1",
  "moduleType": "ShopByCategory",
  "title": "side bar menu module",
  "moduleTitle": "Shop By Category",
  "data": [
    {
      uid: "WcaenllV",
      url: "/cp/1229722",
      title: "Apple"
    },
    {
      uid: "WcaenllV",
      url: "/cp/1229722",
      title: "Apple Brand Experience"
    }
  ]
};

React.render(<SideBarMenuModule {...data} />, mountNode);
```
@component SideBarMenuModule
@import {SideBarMenuModule}
@playground
SideBarMenuModule
```
const data = {
  "zone": "leftNavZone1",
  "moduleType": "ShopByCategory",
  "title": "side bar menu module",
  "moduleTitle": "Shop By Category",
  "data": [
    {
      uid: "WcaenllV",
      url: "/cp/1229722",
      title: "Apple"
    },
    {
      uid: "WcaenllV",
      url: "/cp/1229722",
      title: "Apple Brand Experience"
    }
  ]
};

React.render(<SideBarMenuModule {...data} />, mountNode);
```
**/

export default class SideBarMenuModule extends Component {
  constructor(props: Object): void {
    super(props);

    this._onClick = this._onClick.bind(this);
    this.state = {
      isSeeMoreOpen: false
    };
  }

  _onClick(): void {
    this.setState({
      isSeeMoreOpen: !this.state.isSeeMoreOpen
    });
  }

  _renderSideBarMenuItems(data): ReactElement {
    return data.filter((item) => {
      // expandOnLoad will not be present for other LHN modules except Shop ByCategory.
      if (item.expandOnLoad === undefined) {
        item.expandOnLoad = true;
      }

      return this.state.isSeeMoreOpen || item.expandOnLoad;
    })
    .map((item, i) => <SideBarMenuModule.Item key={i} {...item} />);
  }

  _renderSeeMoreCategories(): ReactElement {
    const classes = classnames("see-more expander", {
      "expanded": this.state.isSeeMoreOpen
    });

    return (
      <div className={classes}>
          <a className="expander-toggle display-inline-block"
            role="button"
            onClick={this._onClick} >
            See {this.state.isSeeMoreOpen ? "fewer" : "more"} categories
          </a>
      </div>
    );
  }

  render(): ReactElement {
    const { moduleType, data, moduleTitle, isExpanded, zone } = this.props;
    const menuItems = this._renderSideBarMenuItems(data);
    const showMore = (moduleType === ModuleTypes.SHOP_BY_CATEGORY &&
        (data.length > menuItems.length)) || this.state.isSeeMoreOpen;

    return (
      <AnalyticsDispatcher {...this.props}>
        <div
          className="SideBarMenuModule"
          data-zone={zone}
          {...getTempoModuleAutomationId(moduleType, process)}>
          <Expander expanded={isExpanded} expandText={moduleTitle}>
            <ul className="block-list module pull-left">
              {menuItems}
            </ul>
            {showMore && this._renderSeeMoreCategories()}
          </Expander>
        </div>
      </AnalyticsDispatcher>
    );
  }
}

SideBarMenuModule.displayName = "SideBarMenuModule";

SideBarMenuModule.Item = SideBarMenuModuleItem;

SideBarMenuModule.propTypes = {
  /**
  Array of items data
  */
  data: PropTypes.array.isRequired,
  /**
  Expander open or not
  */
  isExpanded: PropTypes.bool,
  /**
    component title
  */
  moduleTitle: PropTypes.string.isRequired,
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: PropTypes.string,
  /**
  Zone configured in tempo.
  */
  zone: PropTypes.string.isRequired
};

SideBarMenuModule.defaultProps = {
  isExpanded: true,
  moduleType: ModuleTypes.SHOP_BY_CATEGORY
};
