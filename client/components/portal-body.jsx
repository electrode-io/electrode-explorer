import React from "react";
import PortalHeader from "./portal-header";
import PortalFooter from "./portal-footer";
import Config from "@walmart/electrode-ui-config";

const PortalBody = (props) => {
  return (
    <div className="portal">

      <PortalHeader>
        <div className="portal-body">
          {props.children}
        </div>
      </PortalHeader>

      <PortalFooter/>
    </div>
  );
};

export default PortalBody;
