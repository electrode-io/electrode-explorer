import React from "react";
import PortalHeader from "./portal-header";
import PortalFooter from "./portal-footer";

const PortalBody = (props) => {

  return (
    <div className="portal">
      <PortalHeader/>
      <div className="portal-body">
      {props.children}
      </div>
      <PortalFooter/>
    </div>
  );
};

export default PortalBody;