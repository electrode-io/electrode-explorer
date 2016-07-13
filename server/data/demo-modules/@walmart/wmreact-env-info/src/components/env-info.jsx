/* @flow */
import React from "react";

import Config from "@walmart/electrode-ui-config";

/**
 The EnvironmentInfo component is used to
 display enviorment configuration settings to frontend.

 ```
 <EnvironmentInfo />
 ```

 @import {EnvironmentInfo}
 @flags noVisibleRender
 @component EnvironmentInfo
 @playground
 EnvironmentInfo
 */

class EnvironmentInfo extends React.Component {
  render():ReactElement {
    const { node, cloud, oneOpsEnv, profile, applicationVersion, applicationSha } = Config.ui || {};
    return (
      <div className="env-info ResponsiveContainer">
        Electrode,
        Comp-{node},
        DC-{cloud},
        ENV-{oneOpsEnv},
        PROF-{profile},
        VER-{applicationVersion},
        SHA-{applicationSha}
      </div>
    );
  }
}

EnvironmentInfo.displayName = "EnvironmentInfo";

export default EnvironmentInfo;
