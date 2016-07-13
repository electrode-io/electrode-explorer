/* @flow */
import React from "react";
import classNames from "classnames";
import GlobalLefthandNav from "@walmart/wmreact-header/lib/components/global-lefthand-nav";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import generateLeftHandNavUids
from "@walmart/wmreact-tempo-analytics-utils/lib/utils/global-lhn-uid-swap";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";
import Collapsable from "@walmart/wmreact-layout/lib/components/collapsable";
import MenuAimWrapper from "@walmart/wmreact-header/lib/utils/menu-aim-wrapper";
import Link from "@walmart/wmreact-base/lib/components/link";
import Icon from "@walmart/wmreact-base/lib/components/icon";


class BusinessToolsNav extends GlobalLefthandNav {
  constructor(props) {
    super(props);

    this.DATA_UID = "BUSINESS_TOOLS_NAV";
    this.navigationClassName = "header-business-tools-nav";
    this.buttonClassName = "button-business-tools";
    this.buttonAutomationIdKey = "button-business-tools-toggle";
  }
  _getClassNames(className) {
    return classNames(this.navigationClassName, className);
  }
  _renderToggles(open) {
    const buttonClassNames = `${this.buttonClassName} dropdown-link ` +
      "header-GlobalLefthandNav-toggle";
    return ([
      <Button
        key={0}
        fakelink={true}
        data-uid={this.DATA_UID}
        className={classNames(buttonClassNames, {
          "is-active": open
        })}
        {...getDataAutomationIdPair(this.buttonAutomationIdKey, this.props.dataAutomationId)}>
        {this.props.moduleData.name}
      </Button>

    ]);
  }
  _handleSelectSuperDept(selectedNavMenuItem: Object, ev: Object): void {
    const { index, uid, name } = selectedNavMenuItem;

    this.refs.menuAim.handleMouseEnterRow({ ev, index, uid, name }, this._setSelectedIndex);
  }
  _renderLink(deptLink: Object): ?ReactElement {
    if (deptLink) {
      const {
        link: {
          title,
          linkText,
          clickThrough: {
            value
          }
        },
        textColor
      } = deptLink;
      return (
        <Link
          className="header-GlobalLefthandNav-dropdown-list-item display-block"
          data-uid={deptLink.uid}
          key={deptLink.uid}
          alt={title}
          href={value}
          style={textColor && {color: textColor}}
          >
          {linkText}
        </Link>
      );
    }
  }

  _renderLinks(Links) {
    if (Links) {
      return Links.map((linkObj) => {
        return this._renderLink(linkObj);
      });
    }
  }

_renderDeptHeading(heading) {
  return (
    <Button
      className= {
        classNames(
          "header-GlobalLefthandNav-dropdown-list-heading font-semibold"
        )
      }
      fakelink={true}>
      {heading}
    </Button>
  );
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
      departments
    } = generateLeftHandNavUids(configs);
    const {businessToolsLinks, businessServicesLinks} = configs;
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
                  <div className="header-GlobalLefthandNav-dropdown-tools-links">
                    {this._renderLinks(businessToolsLinks)}
                  </div>
                  {this._renderDeptHeading("Shop for Business")}
                  {this._renderSuperDepts(departments, selectedIndex)}
                  {this._renderDeptHeading("Business Services")}
                  {this._renderLinks(businessServicesLinks)}
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

BusinessToolsNav.defaultProps = {
  moduleData: {
    name: "",
    type: "",
    moduleId: "",
    configs: {}
  },
  className: "",
  dataAutomationId: "header-BusinessToolsNav",
  isBot: false
};

BusinessToolsNav.displayName = "BusinessToolsNav";

export default BusinessToolsNav;
