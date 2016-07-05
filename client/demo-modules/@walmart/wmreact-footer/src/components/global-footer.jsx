/* @flow */
import React, { PropTypes } from "react";
import Arrange from "@walmart/wmreact-layout/lib/components/arrange";
import GlobalFooterItems from "./global-footer-items";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";

/**
This component displays the GlobalFooter

@import {GlobalFooter}
@flags noVisibleRender
@component GlobalFooter
@playground
Global Footer
moduleData is too long please check examples
```
<GlobalFooter moduleData={{please check examples}}/>
```
@return {ReactElement} Element tree
@param {object} props Props
*/

const GlobalFooter = (props) => {
  const {
    isMobile,
    pathToAssets,
    moduleData: {
      type,
      moduleId,
      configs: {
        mobileSection,
        creditCardSection,
        financeSection,
        corporateSections,
        spotlightSection
      }
    },
    autoId
  } = props;


  const _renderFooterLinksSmall = (): ReactElement => {
    const suffix = "mobile";
    return (
      <div className="footer-GlobalFooter--small text-center hide-content-m">
        <GlobalFooterItems links={mobileSection} block={false}
          autoId={`${autoId}-${suffix}`} pathToAssets={pathToAssets}/>
      </div>
    );
  };

  const _renderFooterSection = (sectionDetails: Object, sectionName: string,
    index: number): ReactElement => {
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
    const sectionName = "corporateSection";
    let i = 0;
    return (
      <div className="footer-GlobalFooter--large hide-content-max-m">
        <Arrange.FitAll>
          <div>
            {_renderFooterSection(creditCardSection, "creditCardSection")}
            {_renderFooterSection(financeSection, "financeSection")}
          </div>
          {corporateSections.map((sectionDetails) =>
            _renderFooterSection(sectionDetails, sectionName, i++))}
          {_renderFooterSection(spotlightSection, "spotlightSection")}
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
          {_renderFooterLinksSmall()}
          {!isMobile && _renderFooterLinksLarge()}
      </div>
    </CollectorContext>
  );
};

GlobalFooter.displayName = "GlobalFooter";

GlobalFooter.propTypes = {
  /**
   check mobile device
   */
  isMobile: PropTypes.bool,
  /**
   Tempo module Data
   */
  moduleData: PropTypes.shape({
    type: PropTypes.string,
    moduleId: PropTypes.string,
    configs: PropTypes.shape({
      creditCardSection: PropTypes.object,
      financeSection: PropTypes.object,
      corporateSections: PropTypes.array,
      spotlightSection: PropTypes.object,
      mobileSection: PropTypes.array
    }).isRequired
  }).isRequired,
  /**
  Used for generating unique automation id's
  */
  autoId: PropTypes.string,
  /**
  Path to opinion lab assets
  */
  pathToAssets: PropTypes.string
};

GlobalFooter.defaultProps = {
  isMobile: false,
  moduleData: {
    type: "",
    moduleId: "",
    configs: {
      creditCardSection: {},
      financeSection: {},
      corporateSections: [],
      spotlightSection: {},
      mobileSection: []
    }
  },
  autoId: "",
  pathToAssets: ""
};

export default GlobalFooter;
