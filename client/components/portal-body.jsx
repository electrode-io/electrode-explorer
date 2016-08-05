import React from "react";
import PortalHeader from "./portal-header";
import PortalSearchBar from "./portal-search-bar";
import PortalMenu from "./portal-menu";
import PortalFooter from "./portal-footer";

const PortalBody = (props) => {
  return (
    <div className="portal">
      <PortalHeader/>
      <PortalSearchBar/>
      <PortalMenu/>
      <div className="portal-body">
        {props.children}
      </div>
    </div>
  );
};

export default PortalBody;
