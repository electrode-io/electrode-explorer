import React, { PropTypes, Component } from "react";
import ReactDOM from "react-dom";
import map from "lodash/map";
import get from "lodash/get";
import { connect } from "react-redux";
import { default as P13NZone } from "./p13n-zone";
import {
  ajaxRequest,
  receiveIrsDataMap,
  invalidateRecommendation
} from "../actions/index";

import {
  ajaxRenderComponent
} from "../utils/p13n-utils";

const placementOrder = ["t1", "t2", "t3", "m1", "m2", "m3", "b1", "b2", "b3"];

/**
 P13N container sends single request to p13n web service and retrieves
 all placements data for the page in one shot and stored in
 irsDataMap prop. Each P13N zone get its irs data by placementId.
 Note that this module needs to be as children of TempoWrapper.
 ```
 <P13NContainer
 page="Homepage",
 parentItemId="1234"
 />
 ```
 */
export class P13NContainer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (ajaxRenderComponent(this.props)) {
      this._renderSpinner();
      this.props.onAjaxRender(this.props.page, this.props.parentItemId, this.props.queryParams);
    }
  }

  _renderSpinner() {
    /* eslint-disable no-undef */
    const spinnerContainer = document.querySelector(".spinner-container");
    ReactDOM.render((
      <div className="spinner-backdrop js-p13n-spinner-backdrop">
        <div className="spinner"></div>
      </div>
    ), spinnerContainer);
  }

  _renderP13NZones() {
    const { irsDataMap, page } = this.props;
    return map(placementOrder, (placementId) => {
      if (irsDataMap && irsDataMap.hasOwnProperty(placementId)) {
        const irsData = get(irsDataMap, placementId);
        return (
          <div>
            <P13NZone key={placementId} page={page} placementId={placementId} irsData={irsData} />
          </div>
        );
      }
    });
  }

  render() {
    return (
      <div
        className="module-p13n-recommendations js-module-p13n-recommendations"
        data-automation-id={this.props.dataAutomationId}
      >
        <div className="spinner-container"></div>
        {this._renderP13NZones()}
      </div>
    );
  }
}

// Tempo wrapper context
P13NContainer.contextTypes = {
  getTempoConfigByZone: PropTypes.func,
  getModuleTypeComponentMap: PropTypes.func,
  allModules: PropTypes.object
};


P13NContainer.childContextTypes = {
  getIrsDataByPlacement: PropTypes.func,
  irsDataMap: PropTypes.object
};


P13NContainer.propTypes = {
  page: PropTypes.string,
  parentItemId: PropTypes.string,
  irsDataMap: PropTypes.object,
  resultDetail: PropTypes.object,
  visitorId: PropTypes.string,
  tempoModules: PropTypes.object,
  isMobile: PropTypes.bool,
  placementIds: PropTypes.arrayOf(PropTypes.string),
  queryParams: PropTypes.object,
  onAjaxRender: PropTypes.func,
  onDataFetchComplete: PropTypes.func,
  onDataFetchFailed: PropTypes.func,
  dataAutomationId: PropTypes.string
};

P13NContainer.defaultProps = {
  isMobile: false,
  dataAutomationId: ""
};

export const mapStateToProps = (state) => {
  const irsDataMap = get(state, "recommendationMap.irsDataMap", {});
  const resultDetail = get(state, "recommendationMap.resultDetail", {});
  const visitorId = get(state, "recommendationMap.visitorId", "");
  const tempoModules = get(state, "quimbyData.collections", {});
  const isMobile = get(state, "isMobile", false);
  return {
    irsDataMap,
    resultDetail,
    visitorId,
    tempoModules,
    isMobile
  };
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onAjaxRender: (page, parentItemId, options) => {
      dispatch(ajaxRequest(page, parentItemId, options));
    },
    onDataFetchComplete: (data) => {
      dispatch(receiveIrsDataMap(data));
    },
    onDataFetchFailed: (err) => {
      dispatch(invalidateRecommendation(err));
    }
  };
};

const StatefulP13NContainer = connect(mapStateToProps, mapDispatchToProps)(P13NContainer);

export default StatefulP13NContainer;
