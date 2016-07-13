import React, { Component, PropTypes } from "react";

class TempoWrapper extends Component {
  getChildContext() {
    return {
      getTempoConfigByZone: (zone) => {
        const {zoneNameModuleMap} = this.props;

        return zoneNameModuleMap && zoneNameModuleMap[zone];
      },
      getModuleTypeComponentMap: () => {
        return this.props.moduleTypeComponentMap;
      },
      allModules: this.props.zoneNameModuleMap
    };
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}

TempoWrapper.childContextTypes = {
  getTempoConfigByZone: PropTypes.func,
  getModuleTypeComponentMap: PropTypes.func,
  allModules: PropTypes.object
};

TempoWrapper.propTypes = {
  moduleTypeComponentMap: PropTypes.objectOf(PropTypes.func).isRequired,
  zoneNameModuleMap: PropTypes.object,
  children: PropTypes.any
};

export default TempoWrapper;
