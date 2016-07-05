import React, { PropTypes, Component } from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { canUseDOM } from "exenv";
import WpaModule from "./wpa-module";
import AdsReducer from "../reducer/index";
const WpaConfig = require("../config/wpa-config");

let scriptsLoaded = 0;

const showAds = (ads) => {
  if (!(window._wml && window._wml.midasContext)) {
    return;
  }

  const store = applyMiddleware(thunk)(createStore)(AdsReducer);

  const callbacks = [function (props) {
    props = props || {};
    props.store = store;
    ReactDOM.render(
      <WpaModule {...props} />,
      /* eslint-disable no-undef */
      document.getElementById(props.el)
    );
  }];

  const data = window._wml.midasContext || ads;
  if (!window._MIDAS) {
    window._MIDAS = {
      showAdsCalled: true,
      showDisplayAdsCalled: true,
      showAds: () => {},
      showDisplayAds: () => {},
      data,
      callbacks
    };
  } else {
    window._MIDAS.showAds(data, callbacks);
    window._MIDAS.showDisplayAds();
  }
};


class Ads extends Component {
  componentWillReceiveProps(nextProps): void {
    const {ads} = this.props;
    if (ads.loading && !nextProps.ads.loading && canUseDOM) {
      showAds(nextProps.ads);
    }
  }
  render(): ReactElement {
    let element = (<div {...this.props} />);
    if (this.props.isMobile && !scriptsLoaded) {
      scriptsLoaded++;
      const wpaConfig = WpaConfig.getWpaConfig(this.props);

      element = (<div>
        <script src="//www.googletagservices.com/tag/js/gpt.js" async="true"></script>
        <script src="//www.google.com/adsense/search/ads.js" async="true"></script>
        <script src={wpaConfig.MIDAS_DISPLAY_SCRIPT_URL} async="true"></script>
        <script src={wpaConfig.MIDAS_CORE_SCRIPT_URL} async="true"></script>
        <div {...this.props} />
      </div>);
    }

    return element;
  }
}
Ads.propTypes = {
  id: PropTypes.string.isRequired,
  ads: PropTypes.object,
  isMobile: PropTypes.boolean
};

export default Ads;
