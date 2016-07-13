import React, { PropTypes, Component } from "react";
import classNames from "classnames";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import Link from "@walmart/wmreact-base/lib/components/link";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import fireUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-ui-event";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";

const MAIN_CLASS_NAME = "header-GlobalLefthandNavMobile";
const ENTRY_CLASS_NAME = "header-OffcanvasNav-entry";

class BusinessToolsNavMobile extends Component {
  constructor(props: Object): void {
    super(props);

    this.state = {
      renderBusinessTools: false,
      superDept: null,
      renderDepts: props.isBot, // render departments initially only for bots
      dept: null,
      selected: false,
      showBlue: false
    };

    this.subDeptNavAnalyticsTracker = {};
    this._clearDepts = this._clearDepts.bind(this);
  }

  _getButtonClassName(depth: number): string {
    return classNames("header-OffcanvasNav-entry-gray", {
      [`${MAIN_CLASS_NAME}-superDept-account`]: depth === 0,
      "is-selected": this.state.selected,
      "blue": this.state.showBlue
    });
  }

  _getClassNames(className: string, { superDept, dept}): string {
    return classNames(MAIN_CLASS_NAME, className, {
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
        dept: null,
        selected: false,
        showBlue: true
      });
    } else if (this.state.superDept === null) {
      this.props.onSuperDeptClick();
      this.setState({
        superDept: index,
        renderDepts: true,
        selected: false,
        showBlue: true
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
      dept: index,
      selected: false
    });
  }

  _clearDepts(): void {
    this.props.onBackClick();
    this.setState({
      superDept: null,
      dept: null,
      renderBusinessTools: false,
      selected: false,
      showBlue: false
    });
  }

  _renderLink(link: Object, { depth, shopAll, index }, prefix: string): ReactElement {
    const {uid, title, linkText, clickThrough: {value}} = link;
    const text = shopAll ? `Shop all` : linkText;
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

  _renderBack({ renderBusinessTools }): ?ReactElement {
    if (renderBusinessTools !== false) {
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

  _renderBusinessToolsLinks(businessToolsLinks: Array<Object>): ?ReactElement {
    return businessToolsLinks.map((link, index) => {
      return (
        this._renderLink(link.link, {depth: 0, shopAll: false, index})
      );
    });
  }

  _renderBusinessToolsServices(businessServicesLinks: Array<Object>): ?ReactElement {
    return businessServicesLinks.map((link, index) => {
      return (
        this._renderLink(link.link, {depth: 0, shopAll: false, index})
      );
    });
  }
_setBusinessTools(): ?ReactElement {
  if (!this.state.selected && !this.state.showBlue) {
    this.setState({
      renderBusinessTools: !this.state.renderBusinessTools,
      selected: !this.state.selected
    });

    this.props.onBusinessToolsClick();
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
    const {renderBusinessTools, superDept} = this.state;
    return (
      <CollectorContext moduleId={moduleId}>
        <div
          className={this._getClassNames(className, this.state)}
          data-module={type}
          data-module-id={moduleId}
          {...getDataAutomationIdPair(dataAutomationId, "")}>
          {this._renderBack(this.state)}
          <div className={`${MAIN_CLASS_NAME}-departments`}>
          <Button
            fakelink={true}
            onClick={this._setBusinessTools.bind(this)}
            className={this._getButtonClassName(0)}>
            Business Tools {!renderBusinessTools &&
              <Icon className="pull-right" name="angle-right" />}
          </Button>
          {renderBusinessTools &&
            <div className={`${MAIN_CLASS_NAME}-departments`}>
            {this._renderBusinessToolsLinks(configs.businessToolsLinks)}
            {superDept === null &&
            <Button
              fakelink={true}
              className={this._getButtonClassName(0)}>
              Shop for Business
            </Button>
            }
            {this._renderSuperDepts(configs.departments, this.state)}
            {superDept === null &&
            <Button
              fakelink={true}
              className={this._getButtonClassName(0)}>
              Business Services
            </Button>
            }
            {this._renderBusinessToolsServices(configs.businessServicesLinks)}
            </div>
          }
          </div>

        </div>
      </CollectorContext>
    );
  }
}

BusinessToolsNavMobile.displayName = "BusinessToolsNavMobile";

BusinessToolsNavMobile.propTypes = {
  /**
  Data for configuring the component. Typically coming from Tempo. Contains department data.
  */
  moduleData: PropTypes.shape({
    type: PropTypes.string,
    moduleId: PropTypes.string,
    configs: PropTypes.shape({
      businessToolsLinks: PropTypes.array.isRequired,
      departments: PropTypes.array.isRequired,
      businessServicesLinks: PropTypes.array.isRequired
    }).isRequired
  }).isRequired,

  onBusinessToolsClick: PropTypes.func,
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

BusinessToolsNavMobile.defaultProps = {
  moduleData: {
    type: "",
    moduleId: "",
    configs: {}
  },
  onBusinessToolsClick: () => {},
  onSuperDeptClick: () => {},
  onBackClick: () => {},
  className: "",
  dataAutomationId: "header-BusinessToolsNavMobile",
  isBot: false
};

BusinessToolsNavMobile.contextTypes = {
  analytics: PropTypes.object
};

export default BusinessToolsNavMobile;
