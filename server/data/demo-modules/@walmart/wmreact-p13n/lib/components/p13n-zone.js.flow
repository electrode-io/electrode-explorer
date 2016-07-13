import React, { PropTypes, Component } from "react";
import { connect } from "react-redux";
import { default as P13NRecommendation } from "./p13n-recommendation";
import { P13NRecommendationRvi } from "./p13n-rvi";
import { default as P13NRecommendationRviNoRec } from "./p13n-rvi-no-rec";
import { default as P13NZoneAdapter } from "../adapters/p13nzone-adapter";
import { p13nTileClicked } from "../actions/index";

export class P13NZone extends Component {
  constructor(props) {
    super(props);
  }

  _renderP13NModules(props) {
    switch (props.irsData.htmlTemplateId) {
    case "P13NRecommendation":
      return (
        <P13NRecommendation {...props} />
      );
    case "P13NRecommendationRvi":
      return (
        <P13NRecommendationRvi {...props} />
      );
    case "P13NRecommendationRviNoRec":
      return (
        <P13NRecommendationRviNoRec {...props} />
      );
    }
  }

  render() {
    return (
      <div>
        {this._renderP13NModules(this.props)}
      </div>
    );
  }
}

P13NZone.contextTypes = {
  getTempoConfigByZone: PropTypes.func,
  getModuleTypeComponentMap: PropTypes.func,
  allModules: PropTypes.object,
  getIrsDataByPlacement: PropTypes.func,
  irsDataMap: PropTypes.object
};

P13NZone.propTypes = {
  page: PropTypes.string,
  isMobile: PropTypes.bool,
  placementId: PropTypes.string,
  irsData: PropTypes.object,
  products: PropTypes.array
};

P13NZone.defaultProps = {};

P13NZone.displayName = "P13NZone";

export const mapStateToProps = (state, ownProps) => {
  const p13NZoneAdapter = new P13NZoneAdapter(state, ownProps);
  return p13NZoneAdapter.adapt();
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onDataFetchComplete: () => { /*no-op*/},
    handleClick: () => {
      dispatch(p13nTileClicked());
    }
  };
};


const StatefulP13NZone = connect(mapStateToProps, mapDispatchToProps)(P13NZone);

export default StatefulP13NZone;
