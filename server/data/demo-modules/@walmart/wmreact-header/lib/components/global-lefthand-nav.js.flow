/* @flow */
import React, { PropTypes, Component } from "react";
import Link from "@walmart/wmreact-base/lib/components/link";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Collapsable from "@walmart/wmreact-layout/lib/components/collapsable";
import classNames from "classnames";
import LefthandNavPanel from "./lefthand-nav-panel";
import MenuAimWrapper from "../utils/menu-aim-wrapper";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import fireUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-ui-event";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";
import generateLeftHandNavUids
from "@walmart/wmreact-tempo-analytics-utils/lib/utils/global-lhn-uid-swap";

const LHN = "LHN";

/**
 The header left hand nav. A navigation menu for going to department and category pages.

 ```jsx
 <GlobalLefthandNav moduleData={
   {
     type: "GlobalLefthandNav",
     configs: {
     campaignDepartment: {
       link: {
         linkText: "Daily Savings Center",
         title: "Daily Savings Center",
         clickThrough: {
           type: "url",
           value: "http://www.walmart.com/Daily-Savings-Center"
         },
         uid: "QRVQ4o9Q"
       },
       textColor: "#f42121",
       uid: "HlRFhIjQ"
     },
     departments: [{
       name: "Electronics & Office",
       link: {
         alt: "Electronics & Office",
         assetId: "3781758",
         assetName: "35023-119032-01_INT_86995_Electronics_Flyout_207x460_1219_V1.png",
         clickThrough: {
           type: "url",
           value: "/browse/electronics/laptops/3944_3951_1089430?cat_id=3944_3951_1089430"
         },
         height: "460",
         src: "http://i5.walmartimages.com/dfw/4ff9c6c9-8c13/k2-_b6e99a03-22d2-4d5e-8a0f.v1.png",
         title: "Electronics & Office",
         width: "207",
         size: "67492",
         contentType: "image/png",
         uid: "qGxDjh9C"
       },
       departments: [],
       uid: "-QBPPMxd"
     }, {
       name: "Movies, Music & Books",
       link: {
         alt: "Star Wars",
         assetId: "3785082",
         assetName: "35373-123898_StarWars_FO_207x460_03_V1.png",
         clickThrough: {
           type: "url",
           value: "/browse/movies-tv/star-wars-movies/4096_1229475"
         },
         height: "460",
         src: "http://i5.walmartimages.com/dfw/4ff9c6c9-ed89/k2-_f7f94c1b-7778-4605-9b77.v1.png",
         title: "Star Wars",
         width: "207",
         size: "136693",
         contentType: "image/png",
         uid: "Rtp0RJyz"
       },
       departments: [],
       uid: "GEEpibG6"
     }],
     optionalDepartment: {
       link: {
         linkText: "See All Departments",
         title: "See All Departments",
         clickThrough: {
           type: "url",
           value: "http://www.walmart.com/all-departments"
         },
         uid: "mYLWJn6V"
       },
       uid: "1MwO8I83"
     },
   },
   module_id: "29b9c6f0-28b9-470c-9e65-1b3f09f64083"
   }
 }/>
 ```

 @import {GlobalLefthandNav}
 @flags noVisibleRender
 @component GlobalLefthandNav
 @playground
 GlobalLefthandNav
 */

class GlobalLefthandNav extends Component {
  constructor(props: Object): void {
    super(props);

    this.opened = false;

    this.state = {
      open: false,
      selectedIndex: null,
      renderDepts: props.isBot // render departments initially only for bots
    };

    this.subDeptNavAnalyticsTracker = {};

    this._setOpen = this._setOpen.bind(this);
    this._setClosed = this._setClosed.bind(this);
    this._setSelectedIndex = this._setSelectedIndex.bind(this);
  }

  _getClassNames(className: string): string {
    return classNames("header-GlobalLefthandNav", className);
  }

  _renderToggles(open: boolean): ReactElement {
    return ([
      <Button
        key={0}
        fakelink={true}
        data-uid={LHN}
        className={classNames("dropdown-link header-GlobalLefthandNav-toggle font-semibold", {
          "is-active": open
        })}
        {...getDataAutomationIdPair("toggle", this.props.dataAutomationId)}>
        All Departments
      </Button>,
      <Button
        key={1}
        fakelink={true}
        data-uid={LHN}
        className={classNames("dropdown-link header-GlobalLefthandNav-toggle--small", {
          "is-active": open
        })}
        {...getDataAutomationIdPair("smallToggle", this.props.dataAutomationId)}>
        <Icon name="menu" />
      </Button>
    ]);
  }

  _renderSuperDepts(superDepts: Array<Object>, selectedIndex: number): Array<ReactElement> {
    return superDepts.map((department, index) => {
      const { name, uid } = department;
      return (
        <Button
          key={index}
          className={classNames("header-GlobalLefthandNav-dropdown-list-item", {
            "is-selected": index === selectedIndex
          })}
          fakelink={true}
          data-uid={uid}
          onMouseEnter={this._handleSelectSuperDept.bind(this, { index, uid, name })}
          {...getDataAutomationIdPair(`superDept-${index}`, this.props.dataAutomationId)}>
          {name}
        </Button>
      );
    });
  }

  _renderLink(deptLink: Object, index: number): ?ReactElement {
    if (deptLink) {
      const { link: { uid, title, linkText, clickThrough: { value } }, textColor } = deptLink;
      const departmentId = index === 0 ? "campaignDept" : "optionalDept";

      return (
        <Link
          className="header-GlobalLefthandNav-dropdown-list-item"
          data-uid={uid}
          alt={title}
          href={value}
          style={textColor && {color: textColor}}
          onMouseEnter={this._handleSelectSuperDept.bind(this, {
            index: null,
            uid,
            name: linkText
          })}
          {...getDataAutomationIdPair(departmentId, this.props.dataAutomationId)}>
          {linkText}
        </Link>
      );
    }
  }

  _renderPanels(departments: Array<Object>, selectedIndex: number, renderDepts):
    Array<ReactElement> {
    if (renderDepts) {
      return departments.map((superDept, index) => {
        return (
          <LefthandNavPanel
            className="pull-left"
            key={index}
            superDept={superDept}
            show={index === selectedIndex}
            dataAutomationId={`header-GlobalLeftHandNav-panel-${index}`} />
        );
      });
    }
  }

  _handleSelectSuperDept(selectedNavMenuItem: Object, ev: Object): void {
    const { index, uid, name } = selectedNavMenuItem;

    this.refs.menuAim.handleMouseEnterRow({ ev, index, uid, name }, this._setSelectedIndex);
  }

  _setSelectedIndex(selectedNavMenuItem: Object): void {
    const { ev, index, uid, name } = selectedNavMenuItem;

    this.setState({selectedIndex: index});

    // Fire Analytics event
    if (index !== null && this.subDeptNavAnalyticsTracker[index] === undefined) {
      fireUIEvent(this, ev, { eventType: "openSubDeptNav", extras: { uid, name }});
      this.subDeptNavAnalyticsTracker[index] = true;
    }
  }

  _setOpen(ev: Object): void {
    if (!this.opened) {
      fireUIEvent(this, ev, { eventType: "openDeptNav" });
      this.opened = true;
    }

    this.setState({
      open: true,
      renderDepts: true
    });
  }

  _setClosed(): void {
    this.setState({
      open: false,
      selectedIndex: null
    });
  }

  render(): ReactElement {
    const {
      moduleData: {
        type, moduleId, configs
      },
      className,
      dataAutomationId
    } = this.props;
    const {
      selectedIndex,
      open,
      renderDepts
    } = this.state;
    const {
      campaignDepartment, departments, optionalDepartment
    } = generateLeftHandNavUids(configs);

    return (
      <CollectorContext moduleId={moduleId}>
        <nav
          className={this._getClassNames(className)}
          data-module={type}
          data-module-id={moduleId}
          onMouseEnter={this._setOpen}
          onMouseLeave={this._setClosed}
          {...getDataAutomationIdPair(dataAutomationId, "")}>
          {this._renderToggles(open)}
          <div className="header-GlobalLefthandNav-wrapper">
            <Collapsable
              transitionDuration={100}
              isOpen={this.state.open}
              containerClassName="header-GlobalLefthandNav-dropdown font-semibold">
              <MenuAimWrapper className="pull-left" ref="menuAim">
                <div className="header-GlobalLefthandNav-dropdown-list">
                  {this._renderLink(campaignDepartment, 0)}
                  {this._renderSuperDepts(departments, selectedIndex)}
                  {this._renderLink(optionalDepartment, 1)}
                </div>
              </MenuAimWrapper>
              {this._renderPanels(departments, selectedIndex, renderDepts)}
            </Collapsable>
          </div>
        </nav>
      </CollectorContext>
    );
  }
}

GlobalLefthandNav.displayName = "GlobalLefthandNav";

GlobalLefthandNav.propTypes = {
  /**
  Data for configuring the component. Typically coming from Tempo. Contains department data.
  */
  moduleData: PropTypes.shape({
    type: PropTypes.string,
    moduleId: PropTypes.string,
    configs: PropTypes.shape({
      departments: PropTypes.array.isRequired
    })
  }),
  /**
  Additional classes for styling.
  */
  className: PropTypes.string,
  /**
  Automation ID base string
  */
  dataAutomationId: PropTypes.string,
  /**
  Check for web crawler bots.
  */
  isBot: PropTypes.bool
};

GlobalLefthandNav.defaultProps = {
  moduleData: {
    type: "",
    moduleId: "",
    configs: {}
  },
  className: "",
  dataAutomationId: "header-GlobalLefthandNav",
  isBot: false
};

GlobalLefthandNav.contextTypes = {
  analytics: PropTypes.object
};

export default GlobalLefthandNav;
