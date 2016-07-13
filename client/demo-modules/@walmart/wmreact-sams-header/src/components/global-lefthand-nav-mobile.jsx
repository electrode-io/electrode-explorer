/* @flow */
import React, { PropTypes, Component } from "react";
import classNames from "classnames";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import Link from "@walmart/wmreact-base/lib/components/link";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import fireUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-ui-event";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";
import generateLeftHandNavUids
from "@walmart/wmreact-tempo-analytics-utils/lib/utils/global-lhn-uid-swap";

/**
 The mobile version of the header left hand nav for use inside the offcanvas nav. A navigation menu
 for going to department and category pages.

 ```jsx
 <GlobalLefthandNavMobile moduleData={
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

 @import {GlobalLefthandNavMobile}
 @flags noVisibleRender
 @component GlobalLefthandNavMobile
 @playground
 GlobalLefthandNavMobile
 */

const MAIN_CLASS_NAME = "header-GlobalLefthandNavMobile";
const ENTRY_CLASS_NAME = "header-OffcanvasNav-entry";

class GlobalLefthandNavMobile extends Component {
  constructor(props: Object): void {
    super(props);

    this.state = {
      expanded: false,
      superDept: null,
      renderDepts: props.isBot, // render departments initially only for bots
      dept: null
    };

    this.subDeptNavAnalyticsTracker = {};

    this._toggleExpanded = this._toggleExpanded.bind(this);
    this._clearDepts = this._clearDepts.bind(this);
  }

  _getClassNames(className: string, { expanded, superDept, dept }): string {
    return classNames(MAIN_CLASS_NAME, className, {
      "is-collapsed": superDept === null && !expanded,
      [`${MAIN_CLASS_NAME}--superDeptSelected`]: superDept !== null,
      [`${MAIN_CLASS_NAME}--deptSelected`]: dept !== null
    });
  }

  _getEntryClassName(depth: number, index: ?number, selected: ?number): string {
    return classNames(depth === 1 ? null : ENTRY_CLASS_NAME, {
      [`${MAIN_CLASS_NAME}-superDept`]: depth === 0,
      [`${MAIN_CLASS_NAME}-dept`]: depth === 1,
      "is-selected": index !== null && index === selected
    });
  }

  _setSuperDept(selectedNavMenuItem: Object, ev: Object): void {
    const { index, uid, name } = selectedNavMenuItem;

    if (this.state.dept !== null) {
      this.setState({
        dept: null
      });
    } else if (this.state.superDept === null) {
      this.props.onSuperDeptClick();
      this.setState({
        superDept: index,
        renderDepts: true
      });
    }

    // Fire Analytics event
    if (index !== null && this.subDeptNavAnalyticsTracker[index] === undefined) {
      fireUIEvent(this, ev, { eventType: "openSubDeptNav", extras: { uid, name } });
      this.subDeptNavAnalyticsTracker[index] = true;
    }
  }

  _setDept(index: number): void {

    this.setState({
      dept: index
    });

  }

  _clearDepts(): void {
    this.props.onBackClick();
    this.setState({
      superDept: null,
      dept: null
    });
  }

  _toggleExpanded(): void {
    this.setState({
      expanded: !this.state.expanded
    });
  }

  _renderLink(link: Object, { depth, shopAll, index }, prefix: string): ReactElement {
    const {uid, title, linkText, clickThrough: {value}} = link;
    const text = linkText;
    return (
      <Link
        key={index}
        className={depth === 2 ? "header-GlobalLefthandNavMobile-dept-2" :
                    this._getEntryClassName(depth, null, null)}
        data-uid={uid}
        alt={title}
        href={value}
        {...getDataAutomationIdPair(index, prefix)}>
        {text}
      </Link>
    );
  }

  _renderSuperDepts(departments: Array<Object>, { superDept, dept, renderDepts }):
    Array<ReactElement> {
    return departments.map((department, index) => {
      const { name, uid } = department;
      const automationId = `${this.props.dataAutomationId}-superDept-${index}`;
      return (
        <div key={index}>
          <Button
            fakelink={true}
            data-uid={uid}
            onClick={this._setSuperDept.bind(this, { index, uid, name })}
            className={this._getEntryClassName(0, index, superDept)}
            {...getDataAutomationIdPair(automationId, "")}>
            {name}<Icon className="pull-right" name="angle-right" />
          </Button>
          {renderDepts &&
            <div className={`${MAIN_CLASS_NAME}-menu`}>
              {this._renderDepts(department.departments, dept, `${automationId}-dept`)}
            </div>
          }
        </div>
      );
    });
  }

  _renderDepts(departments: Array<Object>, selected: number, prefix: string): Array<ReactElement> {
    return departments.map((dept, index) => {
      const {categories, department} = dept;
      if (categories && categories.length) {
        return (
          <div key={index}>
            <Button
              fakelink={true}
              data-uid={department.uid}
              onClick={this._setDept.bind(this, index)}
              className={this._getEntryClassName(1, index, selected)}
              {...getDataAutomationIdPair(index, prefix)}>
              {department.linkText}<Icon className="downward-arrow" name="angle-right" />
            </Button>
            <div className={`${MAIN_CLASS_NAME}-menu`}>
              {this._renderLink(department, {depth: 2, shopAll: true, index: 0},
                `${prefix}-${index}-shopAll`)}
              {this._renderCategories(categories, `${prefix}-${index}-cat`)}
            </div>
          </div>
        );
      } else {
        return this._renderLink(department, {depth: 1, shopAll: false, index}, prefix);
      }
    });
  }

  _renderCategories(categories: Array<Object>, prefix: string): Array<ReactElement> {
    return categories.map((cat, index) => {
      return this._renderLink(cat.category, {depth: 2, shopAll: false, index}, prefix);
    });
  }

  _renderOptionalDept(department: Object, index: number): ?ReactElement {
    if (department) {
      const departmentId = index === 0 ? "campaignDept" : "optionalDept";
      return this._renderLink(department.link, {depth: 0, shopAll: false, index},
        `${this.props.dataAutomationId}-${departmentId}`);
    }
  }

  _renderBack({ superDept }): ?ReactElement {
    if (superDept !== null) {
      return (
        <Button
          className={`${ENTRY_CLASS_NAME} ${ENTRY_CLASS_NAME}--top`}
          fakelink={true}
          onClick={this._clearDepts}
          {...getDataAutomationIdPair("back", this.props.dataAutomationId)}>
          <Icon className="pull-left" name="angle-left" />Back to main menu
        </Button>
      );
    }
  }

  _renderExpander({ superDept, expanded }) {
    if (superDept === null) {
      return (
        <Button
          className={`${ENTRY_CLASS_NAME} ${MAIN_CLASS_NAME}-expander`}
          fakelink={true}
          onClick={this._toggleExpanded}
          {...getDataAutomationIdPair("expander", this.props.dataAutomationId)}>
          See {expanded ? "less" : "more"}
        </Button>
      );
    }
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
      campaignDepartment, departments, optionalDepartment
    } = generateLeftHandNavUids(configs);

    return (
      <CollectorContext moduleId={moduleId}>
        <div
          className={this._getClassNames(className, this.state)}
          data-module={type}
          data-module-id={moduleId}
          {...getDataAutomationIdPair(dataAutomationId, "")}>
          {this._renderBack(this.state)}
          <div className={`${MAIN_CLASS_NAME}-departments`}>
            {this._renderOptionalDept(campaignDepartment, 0)}
            {this._renderSuperDepts(departments, this.state)}
            {this._renderOptionalDept(optionalDepartment, 1)}
          </div>
          {this._renderExpander(this.state)}
        </div>
      </CollectorContext>
    );
  }
}

GlobalLefthandNavMobile.displayName = "GlobalLefthandNavMobile";

GlobalLefthandNavMobile.propTypes = {
  /**
  Data for configuring the component. Typically coming from Tempo. Contains department data.
  */
  moduleData: PropTypes.shape({
    type: PropTypes.string,
    moduleId: PropTypes.string,
    configs: PropTypes.shape({
      departments: PropTypes.array.isRequired
    }).isRequired
  }).isRequired,
  /**
  Callback to execute after a super department is clicked
  */
  onSuperDeptClick: PropTypes.func,
  /**
  Callback to execute after back button is clicked
  */
  onBackClick: PropTypes.func,
  /**
  Any additional classes for styling.
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

GlobalLefthandNavMobile.defaultProps = {
  moduleData: {
    type: "",
    moduleId: "",
    configs: {}
  },
  onSuperDeptClick: () => {},
  onBackClick: () => {},
  className: "",
  dataAutomationId: "header-GlobalLefthandNavMobile",
  isBot: false
};

GlobalLefthandNavMobile.contextTypes = {
  analytics: PropTypes.object
};

export default GlobalLefthandNavMobile;
