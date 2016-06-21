import React from "react";
import PortalHeader from "./portal-header";
import PortalMenu from "./portal-menu";
import PortalFooter from "./portal-footer";
import Config from "@walmart/electrode-ui-config";

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

export default PortalBody;
