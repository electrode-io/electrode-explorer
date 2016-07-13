import React, { Component, PropTypes } from "react";

const getZoneModuleProps = (props, moduleData = {}) => {
  return {
    moduleData,
    moduleId: moduleData.module_id || -1,
    moduleType: moduleData.type || "emptyZone",
    moduleVersion: moduleData.version,
    ...props
  };
};

class TempoZone extends Component {
  render() {
    const zoneModuleTypeComponentMap = this.props.moduleTypeComponentMap || {};
    const wrapperModuleTypeComponentMap = this.context.getModuleTypeComponentMap();
    const moduleData = this.context.getTempoConfigByZone(this.props.zoneName);
    const type = moduleData && moduleData.type;
    const props = getZoneModuleProps(this.props, moduleData);
    const ComponentClass = zoneModuleTypeComponentMap[type] || wrapperModuleTypeComponentMap[type];

    return ComponentClass ? <ComponentClass {...props} /> : null;
  }
}

TempoZone.contextTypes = {
  getTempoConfigByZone: PropTypes.func,
  getModuleTypeComponentMap: PropTypes.func
};

TempoZone.propTypes = {
  zoneName: PropTypes.string.isRequired,
  moduleTypeComponentMap: PropTypes.objectOf(PropTypes.func)
};

export default TempoZone;
