import React from "react";
import Config from "@walmart/electrode-ui-config";

const explorerHeader = () => {
  return (
    <div className="explorer-header">
      <h1 className="explorer-title">{Config.ui.meta.explorerLogo ?
        <img src={Config.ui.meta.explorerLogo}/> :
        Config.ui.meta.explorerName}
      </h1>
    </div>
  );
};

export default explorerHeader;
