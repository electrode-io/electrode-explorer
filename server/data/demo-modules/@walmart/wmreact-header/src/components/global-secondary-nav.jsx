/* @flow */
import React, { PropTypes } from "react";
import classNames from "classnames";
import Link from "@walmart/wmreact-base/lib/components/link";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";

/**
 The header secondary nav component. Has links customizable by text, url, color, and hover color.

 ```jsx
 <GlobalSecondaryNav moduleData={
   {
     type: "GlobalGlobalSecondaryNav",
     configs: {
       elements: [
         {
           title: "Online Specials",
           link: {
             clickThrough: {
               type: "url",
               value: "http://www.walmart.com/browse/online-specials-all"
             },
             uid: "GaN0sH8Z"
           },
           linkColor: "#000000",
           linkHoverColor: "#FEBB0C",
           uid: "qh7t6KcK"
         },
         {
           title: "My Local Store",
           link: {
             clickThrough: {
               type: "url",
               value: "/store"
             },
             uid: "MsLz_Buu"
           },
           uid: "2s91mPlO",
           linkColor: null,
           linkHoverColor: null
         }
       ],
     },
     moduleId: "eb9c3011-c90d-467e-b8d5-3fbdcb128874"
   }
 } />
 ```

 @import {GlobalSecondaryNav}
 @flags noVisibleRender
 @component GlobalSecondaryNav
 @playground
 GlobalSecondaryNav
 */

export const _getClassNames = (className: string): string => {
  return classNames("header-GlobalSecondaryNav", className);
};

export const _getLinkProps = (link: Object): Object => {
  return {
    "data-uid": link.link.uid,
    alt: link.title,
    href: link.link.clickThrough.value
  };
};

// :hover is not supported by inline style so create a style tag for any custom link colors
export const _generateStyleTag = (inlineStyleHtml: Array<string>): ?ReactElement => {
  if (inlineStyleHtml.length) {
    return <style dangerouslySetInnerHTML={{__html: inlineStyleHtml.join("")}}></style>;
  }
};

// Return custom link styles.
export const _generateLinkColor = (linkClass: string, linkColor: string): string => {
  if (linkColor) {
    return `.${linkClass}{color:${linkColor};}`;
  }
};

export const _generateLinkHoverColor = (linkClass: string, linkHoverColor: string): string => {
  if (linkHoverColor) {
    return `.${linkClass}:hover{color:${linkHoverColor};}`;
  }
};

const GlobalSecondaryNav = (props: Object): ReactElement => {
  const {
    moduleData: {
      moduleId,
      type,
      configs: {
        elements
      }
    },
    className,
    inOffcanvasNav,
    dataAutomationId
  } = props;
  const styleHtml = [];

  const _generateLinks = (): Array<ReactElement> => {
    return elements.map((link, index) => {
      let linkClassName;
      if (inOffcanvasNav) {
        linkClassName = `header-OffcanvasNav-entry`;
      } else {
        linkClassName = `header-GlobalSecondaryNav-link-${index}`;
        styleHtml.push(_generateLinkColor(linkClassName, link.linkColor));
        styleHtml.push(_generateLinkHoverColor(linkClassName, link.linkHoverColor));
        linkClassName = `${linkClassName} m-margin-left`;
      }

      const linkProps = _getLinkProps(link);

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
      <div
        className={_getClassNames(className)}
        data-module={type}
        data-module-id={moduleId}
        {...getDataAutomationIdPair(dataAutomationId, "")}>
        {_generateLinks()}
        {_generateStyleTag(styleHtml)}
      </div>
    </CollectorContext>
  );
};

GlobalSecondaryNav.displayName = "GlobalSecondaryNav";

GlobalSecondaryNav.propTypes = {
  /**
  Data for configuring the component. Typically coming from Tempo. Contains information on the URL,
  link text, and colors to use for the links.
  */
  moduleData: PropTypes.shape({
    type: PropTypes.string,
    moduleId: PropTypes.string,
    configs: PropTypes.shape({
      elements: PropTypes.array.isRequired
    }).isRequired
  }).isRequired,
  /**
  Any additional CSS classes that need to be applied
  to the root element.
  */
  className: PropTypes.string,
  /**
  True when used in the offcanvas nav at lower breakpoints.
  */
  inOffcanvasNav: PropTypes.bool,
  /**
  Automation ID base string
  */
  dataAutomationId: PropTypes.string
};

GlobalSecondaryNav.defaultProps = {
  className: "",
  inOffcanvasNav: false,
  dataAutomationId: "header-GlobalSecondaryNav"
};

export default GlobalSecondaryNav;
