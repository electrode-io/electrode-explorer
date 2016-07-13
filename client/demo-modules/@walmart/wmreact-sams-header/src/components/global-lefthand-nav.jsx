import React from "react";
import classNames from "classnames";
import BaseGlobalLefthandNav from "@walmart/wmreact-header/lib/components/global-lefthand-nav";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import generateLeftHandNavUids
from "@walmart/wmreact-tempo-analytics-utils/lib/utils/global-lhn-uid-swap";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";
import Collapsable from "@walmart/wmreact-layout/lib/components/collapsable";
import MenuAimWrapper from "@walmart/wmreact-header/lib/utils/menu-aim-wrapper";

const LHN = "LHN";

class GlobalLefthandNav extends BaseGlobalLefthandNav {
  _renderToggles(open: boolean) {
    return ([
      <Button
        key={0}
        fakelink={true}
        data-uid={LHN}
        className={classNames("dropdown-link header-GlobalLefthandNav-toggle font-semibold", {
          "is-active": open
        })}
        {...getDataAutomationIdPair("toggle", this.props.dataAutomationId)}>
        {this.props.moduleData.name}
      </Button>,
      <Button
        key={1}
        fakelink={true}
        data-uid={LHN}
        className={classNames("header-GlobalLefthandNav-toggle--small", {
          "is-active": open
        })}
        {...getDataAutomationIdPair("smallToggle", this.props.dataAutomationId)}>
        <Icon name="menu" /> Menu
      </Button>
    ]);
  }
  _renderSuperDepts(superDepts, selectedIndex) {

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
          <Icon name="angle-right" className="pull-right"/>
        </Button>
      );
    });
  }
  render() {
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
              transitionDuration={0}
              isOpen={this.state.open}
              containerClassName="header-GlobalLefthandNav-dropdown">
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

GlobalLefthandNav.defaultProps = {
  moduleData: {
    name: "",
    type: "",
    moduleId: "",
    configs: {}
  },
  className: "",
  dataAutomationId: "header-GlobalLefthandNav",
  isBot: false
};

GlobalLefthandNav.displayName = "GlobalLefthandNav";

export default GlobalLefthandNav;
