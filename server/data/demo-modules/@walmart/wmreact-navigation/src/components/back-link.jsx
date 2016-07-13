/* @flow */
import React, {PropTypes} from "react";

import { getDataAutomationIdPair } from "@walmart/automation-utils";
import Link from "@walmart/wmreact-base/lib/components/link";

const AUTOMATION_CONTEXT = "BackLink";

const BackLink = (props) => {
  const {url, name} = props;
  return (
    <div className="back-link">
      <Link
        href={url}
        {...getDataAutomationIdPair("Link", AUTOMATION_CONTEXT, process)}
        className="arrow-link-before wmicon wmicon-angle-left"
      >
       <span></span>
      </Link>
      <Link
        href={url}
        {...getDataAutomationIdPair("LinkName", AUTOMATION_CONTEXT, process)}
        className="back-link-name"
      >
        {name}
      </Link>
    </div>
  );
};

BackLink.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

BackLink.defaultProps = {};

export default BackLink;
