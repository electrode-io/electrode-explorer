import React from "react";

import Body from "./body";

export const Page = (props) => {
  return (
    <Body>
      {props.children}
    </Body>
  );
};

Page.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ])
};
