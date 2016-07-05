/* @flow */
import React, { PropTypes } from "react";
import classNames from "classnames";
import Link from "@walmart/wmreact-base/lib/components/link";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";
import cookie from "react-cookie";

/**
 This component displays the EyebrowNav in header.
 It contains links, icons and flyouts in the header.
 @import {GlobalEyebrowNav}
 @flags noVisibleRender
 @component GlobalEyebrowNav
 @playground
 GlobalEyeBrowNav
 moduleData is too long please check examples
 ```
 <GlobalEyebrowNav moduleData={{please check examples under demo}}/>
 ```
 */

export const _getClassNames = (className: string): string => {
  return classNames("header-GlobalEyebrowNav", className);
};

export const _getLinkProps = (link: Object): Object => {
  return {
    "data-uid": link.link.uid,
    alt: link.title,
    href: link.link.clickThrough.value
  };
};

export const _generateStyleTag = (inlineStyleHtml: Array<string>):ReactElement => {
  if (inlineStyleHtml.length) {
    return <style dangerouslySetInnerHTML={{__html: inlineStyleHtml.join("")}}></style>;
  }
};

export const _generateLinkColor = (linkClass, linkColor) => {
  if (linkColor) {
    return `.${linkClass}{color:${linkColor};}`;
  }
};

export const _generateLinkHoverColor = (linkClass, linkHoverColor) => {
  if (linkHoverColor) {
    return `.${linkClass}:hover{color:${linkHoverColor};}`;
  }
};

const GlobalEyebrowNav = (props: Object): ReactElement => {
  const {
    moduleData: {
      type,
      moduleId,
      configs: {
        elements
      }
    },
    inOffcanvasNav,
    dataAutomationId
  } = props;
  const styleHtml = [];

  const _renderLinks = (): Array<ReactElement> => {
    return elements.map((link, index) => {
      let linkClassName;
      if (inOffcanvasNav) {
        linkClassName = "header-OffcanvasNav-entry";
      } else {
        linkClassName = "header-GlobalEyebrowNav-link-${index}";
        styleHtml.push(_generateLinkColor(linkClassName, link.linkColor));
        styleHtml.push(_generateLinkHoverColor(linkClassName, link.linkHoverColor));
        linkClassName = `${linkClassName} m-margin-left`;
      }

      const linkProps = _getLinkProps(link);

      const cookieVal = cookie.load("customer");

      if (cookieVal && cookieVal.firstName && link.hideIfLoggedIn === "true") {
        return null;
      }

      return (
        <Link
          className={linkClassName}
          key={index}
          {...linkProps}
          {...getDataAutomationIdPair(`link-${index}`, dataAutomationId)}>
          {link.title}
        </Link>
      );
    });
  };

  return (
    <CollectorContext moduleId={moduleId}>
      <div className="header-GlobalEyebrowNav font-semibold"
        data-module={type}
        data-module-id={moduleId}
        {...getDataAutomationIdPair(dataAutomationId, "")}>
        {_renderLinks()}
        {_generateStyleTag(styleHtml)}
      </div>
    </CollectorContext>
  );
};

GlobalEyebrowNav.displayName = "GlobalEyebrowNav";

GlobalEyebrowNav.propTypes = {
  /**
   Data for configuring the component. Typically coming from Tempo.
   Contains information on the URL, link text, and colors to use for the links.
   */
  moduleData: PropTypes.shape({
    type: PropTypes.string,
    moduleId: PropTypes.string,
    configs: PropTypes.shape({
      elements: PropTypes.array.isRequired
    }).isRequired
  }).isRequired,

  className: PropTypes.string,

  inOffcanvasNav: PropTypes.bool,

  dataAutomationId: PropTypes.string
};

GlobalEyebrowNav.defaultProps = {
  className: "",
  moduleData: {
    type: "",
    moduleId: ""
  },
  inOffcanvasNav: false,
  dataAutomationId: "header-GlobalEyebrowNav"
};

export default GlobalEyebrowNav;
