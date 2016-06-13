import React from "react";

import PortalBody from "./portal-body";

export const Page = (props) => {
  return (
    <PortalBody>
      {props.children}
    </PortalBody>
  );
};

Page.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
};
