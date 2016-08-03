import React from "react";
import PortalHeader from "./portal-header";
import PortalMenu from "./portal-menu";
import PortalFooter from "./portal-footer";

const PortalBody = (props) => {
  return (
    <div className="portal">
      <PortalHeader/>
      <PortalMenu/>
      <div className="portal-body">
        {props.children}
      </div>
      <PortalFooter/>
    </div>
  );
};

PortalBody.propTypes = {
  children: React.PropTypes.node
};

export default PortalBody;
