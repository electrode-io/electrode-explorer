/* @flow */
import React, { PropTypes } from "react";
import Arrange from "@walmart/wmreact-layout/lib/components/arrange";
import GlobalFooterItems from "@walmart/wmreact-footer/lib/components/global-footer-items";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";

const GlobalFooter = (props) => {
  const {
    isMobile,
    moduleData: {
      type,
      moduleId,
      configs: {
        membershipSection,
        aboutSection,
        ordersSection,
        helpSection
      }
    },
    autoId
  } = props;


  const _renderFooterSection = (sectionDetails, sectionName, index) => {
    const sectionId = index === undefined ? "" : `-${index}`;
    const suffix = `${sectionName}${sectionId}`;

    if (sectionDetails) {
      return (
        <GlobalFooterItems links={sectionDetails.subSections}
          name={sectionDetails.name} key={sectionDetails.uid}
          autoId={`${autoId}-${suffix}`}/>
      );
    }
  };

  const _renderFooterLinksLarge = (): ReactElement => {
    return (
      <div className="footer-GlobalFooter--large hide-content-max-m">
        <Arrange.FitAll>
            {_renderFooterSection(membershipSection, "membershipSection")}
            {_renderFooterSection(aboutSection, "aboutSection")}
            {_renderFooterSection(ordersSection, "ordersSection")}
            {_renderFooterSection(helpSection, "helpSection")}
        </Arrange.FitAll>
      </div>
    );
  };

  return (
    <CollectorContext moduleId={moduleId}>
      <div
        className="footer-GlobalFooter"
        data-module={type}
        data-module-id={moduleId}
        {...getDataAutomationIdPair(autoId, "")}>
          {!isMobile && _renderFooterLinksLarge()}
      </div>
    </CollectorContext>
  );
};

GlobalFooter.displayName = "GlobalFooter";

GlobalFooter.propTypes = {
  isMobile: PropTypes.bool,
  moduleData: PropTypes.shape({
    type: PropTypes.string,
    moduleId: PropTypes.string,
    configs: PropTypes.shape({
      membershipSection: PropTypes.object,
      aboutSection: PropTypes.object,
      ordersSection: PropTypes.array,
      helpSection: PropTypes.object
    }).isRequired
  }).isRequired,
  autoId: PropTypes.string,
  pathToAssets: PropTypes.string
};

GlobalFooter.defaultProps = {
  isMobile: false,
  moduleData: {
    type: "",
    moduleId: "",
    configs: {
      membershipSection: {},
      aboutSection: {},
      ordersSection: {},
      helpSection: {}
    }
  },
  autoId: "",
  pathToAssets: ""
};

export default GlobalFooter;
