/* @flow */
/* eslint react/prop-types: 0 */
import React, { PropTypes } from "react";
import GlobalSocialIcons from "@walmart/wmreact-footer/lib/components/global-social-icons";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";

/**
This component displays the GlobalSocialIcons with a
Higher Order Function wrapped around it called Copyright.
*/

const Copyright = (props) => {
  const {
    moduleData: {
      type,
      moduleId,
      configs
    }
  } = props;

  return (
    <CollectorContext moduleTypep={type}>
      <div className="sams-copyright-socialIcons-wrapper">
        <div className="text-copyright" data-module={type} data-module-id={moduleId}>
          {configs.copyrightText}
        </div>
        <GlobalSocialIcons {...props}/>
      </div>
    </CollectorContext>
  );
};

Copyright.displayName = "Copyright";

Copyright.propTypes = {
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
      icons: PropTypes.array.isRequired,
      copyrightText: PropTypes.string
    }).isRequired
  }).isRequired,
  /**
  Used for generating unique automation id's
  */
  autoId: PropTypes.string
};

Copyright.defaultProps = {
  isMobile: false,
  moduleData: {
    type: "",
    moduleId: "",
    configs: {
      icons: [],
      copyrightText: ""
    }
  },
  autoId: ""
};

export default Copyright;
