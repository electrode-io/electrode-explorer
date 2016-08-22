import React from "react";
import Config from "electrode-ui-config";

const explorerHeader = () => {
  return (
    <div className="explorer-header">
      <h1 className="explorer-title">{Config.ui.meta.logo ?
        <img src={Config.ui.meta.logo}/> :
        Config.ui.meta.name}
      </h1>
    </div>
  );
};

export default explorerHeader;
