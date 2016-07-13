import React from "react";
import get from "lodash/get";
import isFunction from "lodash/isFunction";
import { WpaCarousel } from "./wpa-carousel";
import { adapt } from "../adapters/wpa-adapter";
import { connect } from "react-redux";
import { ajaxRender, wpaRendered } from "../actions/index";
import { ajaxRenderComponent, getDefaultResponsiveProperty } from "../utils/wpa-utils";

export class WpaModule extends React.Component {
  componentDidMount() {
    if (ajaxRenderComponent(this.props)) {
      this.props.onAjaxRender(this.props);
    }
  }

  _renderWpaModule(props) {
    const queryString = typeof window === "undefined" ? "" : window.location.search;
    const onRenderParams = {
      queryString,
      adaptedData: props.adaptedData,
      wpaData: props.wpaData
    };

    props.onRendered(onRenderParams);

    if (isFunction(props.onRenderCallback)) {
      props.onRenderCallback.apply(null, [onRenderParams]);
    }

    return (
      <div className="slick-module ResponsiveContainer
        module-sponsored-products">
        <WpaCarousel
          responsive={props.responsive}
          moduleTitle={props.adaptedData.moduleTitle}
          products={props.adaptedData.adUnits}
          pageBeacons={props.adaptedData.pageBeacons}
          bucketId={props.adaptedData.bucketId}
          details={props.adaptedData.details}
          adModule={props.adaptedData.adModule}
          uuid={props.adaptedData.uuid}
          relUuid={props.adaptedData.relUuid}
        />
      </div>
    );
  }

  render() {
    return (this.props.adaptedData.hasOwnProperty("adUnits")) ? (
      <div className="module-wpa">
        {this._renderWpaModule(this.props)}
      </div>
    ) : null;
  }
}

WpaModule.propTypes = {
  responsive: React.PropTypes.array,
  adaptedData: React.PropTypes.object.isRequired,
  onRendered: React.PropTypes.func,
  onAjaxRender: React.PropTypes.func,
  onRenderCallback: React.PropTypes.func
};

WpaModule.defaultProps = {
  "responsive": getDefaultResponsiveProperty()
};

WpaModule.displayName = "WpaModule";

export const mapStateToProps = (state) => {
  const results = get(state, "result", null);
  return adapt(results);
};

export const mapDispatchToProps = (dispatch) => {
  return {
    onAjaxRender: (props) => {
      dispatch(ajaxRender(props));
    },
    onRendered: (onRenderParams) => {
      dispatch(wpaRendered(onRenderParams));
    }
  };
};

const StatefulWpaModule = connect(mapStateToProps, mapDispatchToProps)(WpaModule);

export default StatefulWpaModule;
