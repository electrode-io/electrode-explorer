/* @flow */
import React, { PropTypes } from "react";
import classNames from "classnames";
import Link from "@walmart/wmreact-base/lib/components/link";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";
import generateEyeBrowNavUids from "../utils/eyebrow-uid-swap";
import _ from "lodash";

const ENTRY_CLASS_NAME = "header-OffcanvasNav-entry";

const GlobalEyebrowNavMobile = ({ moduleData: {type, moduleId, configs}, className, userName}) => {
  const _getClassNames = (cn: string) => {
    return classNames("header-GlobalEyebrowNavMobile", cn);
  };

  const _renderLinks = (element: Object) => {
    const {title, hideIfLoggedIn} = element;
    const {uid, clickThrough: { value }} = element.link;

    if (!_.isEmpty(userName) && hideIfLoggedIn === "true") {
      return null;
    }

    return (
      <Link
        className={ENTRY_CLASS_NAME}
        data-uid={uid}
        alt={title}
        href={value}>
        {title}
      </Link>
    );
  };

  const _renderElements = (elements: Array<Object>) => {
    return elements.map((element) => {
      return (
        <div key={element.uid}>
          {_renderLinks(element)}
        </div>
      );
    });
  };

  const { elements } = generateEyeBrowNavUids(configs);

  return (
      <CollectorContext moduleId={moduleId}>
        <div
          className={_getClassNames(className)}
          data-module={type}
          data-module-id={moduleId}>
            {_renderElements(elements)}
        </div>
      </CollectorContext>
    );
};

GlobalEyebrowNavMobile.displayName = "GlobalEyebrowNavMobile";

GlobalEyebrowNavMobile.propTypes = {
  moduleData: PropTypes.shape({
    type: PropTypes.string,
    moduleId: PropTypes.string,
    configs: PropTypes.shape({
      elements: PropTypes.array.isRequired
    }).isRequired
  }).isRequired,
  className: PropTypes.string,
  dataAutomationId: PropTypes.string,
  userName: PropTypes.string
};

GlobalEyebrowNavMobile.defaultProps = {
  moduleData: {
    type: "",
    moduleId: ""
  },
  className: "",
  dataAutomationId: "header-GlobalEyebrowNavMobile"
};

GlobalEyebrowNavMobile.contextTypes = {
  analytics: PropTypes.object
};

export default GlobalEyebrowNavMobile;
