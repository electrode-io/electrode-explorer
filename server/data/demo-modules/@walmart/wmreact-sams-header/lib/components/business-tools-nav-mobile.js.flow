import React, { PropTypes } from "react";
import classNames from "classnames";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import Link from "@walmart/wmreact-base/lib/components/link";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";

const MAIN_CLASS_NAME = "header-GlobalLefthandNavMobile";
const ENTRY_CLASS_NAME = "header-OffcanvasNav-entry";

const BusinessToolsNavMobile = (props) => {
  const _getClassNames = (className: string, { superDeptIndex, deptIndex, btoolsIndex }) => {
    return classNames(MAIN_CLASS_NAME, className, {
      [`${MAIN_CLASS_NAME}--superDeptSelected`]: btoolsIndex !== null,
      [`${MAIN_CLASS_NAME}--superDeptSelected`]: superDeptIndex !== null,
      [`${MAIN_CLASS_NAME}--deptSelected`]: deptIndex !== null
    });
  };
  const _getEntryClassName = (depth: number, index: ?number, selected: ?number) => {
    return classNames(ENTRY_CLASS_NAME, {
      [`${MAIN_CLASS_NAME}-superDept`]: depth === 0,
      [`${MAIN_CLASS_NAME}-dept`]: depth === 1,
      "is-selected": index !== null && index === selected
    });
  };
  const _setSuperDept = (selectedNavMenuItem: Object) => {
    const { index } = selectedNavMenuItem;

    if (props.bizToolsMob.deptIndex !== null) {
      props.indexDeptMobile(null);
    } else if (props.bizToolsMob.superDeptIndex === null) {
      props.onSuperDeptClick();
      props.indexSuperDeptMobile(index);
      props.renderDeptMobile(true);
    }
  };
  const _setDept = (index: number) => {
    if (props.bizToolsMob.deptIndex === null) {
      props.indexDeptMobile(index);
    }
  };
  const _clearDepts = () => {
    props.onBackClick();
    props.indexSuperDeptMobile(null);
    props.indexDeptMobile(null);
    props.renderBizToolsMobile(false);
  };
  const _renderLink = (link: Object, { depth, shopAll, index }, prefix: string) => {
    const {uid, title, linkText, clickThrough: {value}} = link;

    return (
        <Link
          key={index}
          className={_getEntryClassName(depth, null, null)}
          data-uid={uid}
          alt={title}
          href={value}
          {...getDataAutomationIdPair(index, prefix)}>
          {linkText}
        </Link>
      );
  };
  const _renderCategories = (categories: Array<Object>, prefix: string) => {
    return categories.map((cat, index) => {
      return _renderLink(cat.category, {depth: 2, shopAll: false, index}, prefix);
    });
  };
  const _renderDepts = (departments: Array<Object>, selected: number, prefix: string) => {
    return departments.map((dept, index) => {
      const {categories, department} = dept;
      if (categories && categories.length) {
        return (
          <div key={index}>
            <Button
              fakelink={true}
              data-uid={department.uid}
              onClick={_setDept.bind(null, index)}
              className={_getEntryClassName(1, index, selected)}
              {...getDataAutomationIdPair(index, prefix)}>
              {department.linkText}<Icon className="pull-right" name="angle-right" />
            </Button>
            <div className={`${MAIN_CLASS_NAME}-menu`}>
              {_renderLink(department, {depth: 2, shopAll: true, index: 0},
                `${prefix}-${index}-shopAll`)}
              {_renderCategories(categories, `${prefix}-${index}-cat`)}
            </div>
          </div>
        );
      } else {
        return _renderLink(department, {depth: 1, shopAll: false, index}, prefix);
      }
    });
  };
  const _renderSuperDepts = (departments: Array<Object>,
    { superDeptIndex, deptIndex, renderDept }) => {
    return departments.map((department, index) => {
      const { name, uid } = department;
      const automationId = `${props.dataAutomationId}-superDept-${index}`;
      return (
        <div key={index}>
          <Button
            fakelink={true}
            data-uid={uid}
            onClick={_setSuperDept.bind(null, { index, uid, name })}
            className={_getEntryClassName(0, index, superDeptIndex)}
            {...getDataAutomationIdPair(automationId, "")}>
            {name}<Icon className="pull-right" name="angle-right" />
          </Button>
          {renderDept &&
            <div className={`${MAIN_CLASS_NAME}-menu`}>
              {_renderDepts(department.departments, deptIndex, `${automationId}-dept`)}
            </div>
          }
        </div>
      );
    });
  };
  const _renderBack = ({ renderBusinessTools }) => {
    if (renderBusinessTools) {
      const automationId = props.dataAutomationId;
      return (
        <Button
          className={`${ENTRY_CLASS_NAME} ${ENTRY_CLASS_NAME}--top`}
          fakelink={true}
          onClick={_clearDepts}
          {...getDataAutomationIdPair("back", automationId)}>
          <Icon className="pull-left" name="angle-left" />Main Menu
        </Button>
      );
    }
  };
  const _renderBusinessToolsLinks = (businessToolsLinks: Array<Object>) => {
    return businessToolsLinks.map((link, index) => {
      return (
        _renderLink(link.link, {depth: 0, shopAll: false, index})
      );
    });
  };
  const _renderBusinessToolsServices = (businessServicesLinks: Array<Object>) => {
    return businessServicesLinks.map((link, index) => {
      return (
        _renderLink(link.link, {depth: 0, shopAll: false, index})
      );
    });
  };
  const _setBusinessTools = () => {
    props.renderBizToolsMobile(!props.bizToolsMob.renderBusinessTools);
    props.btoolsIndexMobile(0);
    props.onBusinessToolsClick();
  };
  const { moduleData: { type, moduleId, configs }, className, dataAutomationId,
    bizToolsMob: {btoolsIndex, renderBusinessTools, superDeptIndex} } = props;

  return (
      <CollectorContext>
        <div className={_getClassNames(className, props.bizToolsMob)} data-module={type}
          data-module-id={moduleId}
          {...getDataAutomationIdPair(dataAutomationId, "")}>
          {_renderBack(props.bizToolsMob)}
          <div className={`${MAIN_CLASS_NAME}-departments`}>
            <Button fakelink={true} onClick={_setBusinessTools}
              className={_getEntryClassName(0, btoolsIndex, btoolsIndex)}>
              BusinessTools {!renderBusinessTools &&
                <Icon className="pull-right" name="angle-right" />}
            </Button>
            {renderBusinessTools &&
              <div className={`${MAIN_CLASS_NAME}-departments`}>
                {_renderBusinessToolsLinks(configs.businessToolsLinks)}
                {superDeptIndex === null &&
                  <Button fakelink={true}
                    className={_getEntryClassName(0, btoolsIndex, btoolsIndex)} >
                    Shop for Business
                  </Button>}
                {_renderSuperDepts(configs.departments, props.bizToolsMob)}
                {superDeptIndex === null &&
                  <Button fakelink={true}
                    className={_getEntryClassName(0, btoolsIndex, btoolsIndex)} >
                    Member services
                  </Button>}
                {_renderBusinessToolsServices(configs.businessServicesLinks)}
              </div>
            }
          </div>
        </div>
      </CollectorContext>
    );
};

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
  isBot: PropTypes.bool,

  bizToolsMob: React.PropTypes.object.isRequired,
  renderBizToolsMobile: React.PropTypes.func.isRequired,
  indexSuperDeptMobile: React.PropTypes.func.isRequired,
  renderDeptMobile: React.PropTypes.func.isRequired,
  indexDeptMobile: React.PropTypes.func.isRequired,
  btoolsIndexMobile: React.PropTypes.func.isRequired
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
