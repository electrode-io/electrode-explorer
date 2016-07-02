import React, {PropTypes} from "react";
import ExecutionEnvironment from "exenv";

import makeAsyncScriptLoader from "react-async-script";

//Need to investigate how to include be js as part of the build process.
//Probably has to be custom step in addtion to the webpack bundling
//until then using the cdn version to validate the functionality
/* eslint-disable max-len */
const URL = "https://i5.walmartimages.com/dfw/63fd9f59-e6da/k2-_9c753d01-f695-4c83-a753-455824bdb1fd.v11.js";
/* eslint-enable max-len */

const globalName = "cf";

class CyberFend extends React.Component {
  componentDidMount() {
    if (ExecutionEnvironment.canUseDOM && !window._cf) {
      const _cf = window._cf = window._cf || [];
      _cf.push(["_setJsPost", false]);
      _cf.push(["_setJavaScriptKey", this.props.beKey]);
      _cf.push(["_setInitTime", Date.now ? Date.now() : +new Date()]);
      _cf.push(["_setSDFieldNames", "sensor-data"]);
      _cf.push(["_setEnReadDocUrl", false]);
    }
  }
  _generateSensorData() {
    if (!this.props.cf) {
      return "";
    }
    this.props.cf.cfsubmit();
    return this.refs.SensorData.value;
  }
  render() {
    return (
      <input ref="SensorData" type="hidden" id="sensor-data"/>
    );
  }
}

CyberFend.propTypes = {
  beKey: PropTypes.string.isRequired,
  cf: PropTypes.shape({
    cfsubmit: PropTypes.func.isRequired
  })
};

export default makeAsyncScriptLoader(CyberFend, URL, {
  globalName,
  exposeFuncs: ["_generateSensorData"]
});
