import React from "react";
import DemoSmartApp from "./demo-smart-app";
import { authConfig } from "../src/index";

authConfig.setLogger({
  log: () => {}
});

export default () => {

  return (
    <div>
      <DemoSmartApp />
    </div>
  );
};
