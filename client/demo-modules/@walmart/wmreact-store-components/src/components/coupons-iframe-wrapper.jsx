/* @flow */
import React, { PropTypes } from "react";

import { getDataAutomationIdPair } from "@walmart/automation-utils";

const AUTOMATION_CONTEXT = "CouponsIframeWrapper";

export default class CouponsIframeWrapper extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};

    this._onIframeLoaded = this._getBoundMethod("_onIframeLoaded");
    this._resizeIframe = this._getBoundMethod("_resizeIframe");
  }

  componentDidMount() {
    this._getWindow().addEventListener("message", this._resizeIframe);
    this._getIframe().addEventListener("load", this._onIframeLoaded);
    this._configureIframe(this.props.couponsData);
  }

  // To facilitate test stubs
  _getIframe() {
    return this.refs.iframe;
  }

  // To facilitate test stubs
  _getWindow() {
    return window;
  }

  // Factored out for stub-ability
  _getBoundMethod(method) {
    return this[method].bind(this);
  }

  _resizeIframe(ev) {
    // Extracts height from cross-origin messaging and sets iframe height
    if (ev && ev.data && (typeof ev.data) === "string") {
      const [namespace, newHeight] = ev.data.split(":");

      if (namespace !== "[iFrameSizer]") {
        return;
      }

      this.setState({iframeHeight: `${newHeight}px`});
    }
  }

  _onIframeLoaded() {
    const msgParams = "[iFrameSizer]:8:false:false:32:true:true:null:" +
      "bodyOffset:null:null:0:false:parent:scroll";

    this.refs.iframe.contentWindow
      .postMessage(msgParams, this.props.couponsData.host);
  }

  _setIframeSrc(iframeURL) {
    this.setState({iframeSourceURL: iframeURL});
  }

  _configureIframe(couponsData) {
    if (couponsData) {
      const address = this.props.address;
      const couponsUrl = `${couponsData.couponsUrl}`;
      const pid = `?pid=${couponsData.pid}`;
      const nid = `&nid=${couponsData.nid}`;
      const zid = `&zid=${couponsData.zid}`;
      const zip = `&storezip=${address.postalCode}`;

      const iframeURL = `${couponsUrl}${pid}${nid}${zid}${zip}`;

      this._setIframeSrc(iframeURL);
    }
  }

  render() {
    return (
      <div {...getDataAutomationIdPair("CouponsIframeWrapper", AUTOMATION_CONTEXT, process)}
        className="coupons-iframe-wrapper">
        <iframe
          ref="iframe"
          src={this.state.iframeSourceURL}
          style={{height: `${this.state.iframeHeight}`}}
        />
      </div>
    );
  }
}

CouponsIframeWrapper.displayName = "CouponsIframeWrapper";

CouponsIframeWrapper.propTypes = {
  /**
   Address
  */
  address: PropTypes.shape({
    address1: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    postalCode: PropTypes.string
  }).isRequired,
  /**
   Coupons data
  */
  couponsData: PropTypes.shape({
    couponsUrl: PropTypes.string,
    host: PropTypes.string,
    pid: PropTypes.string,
    zid: PropTypes.string,
    nid: PropTypes.string,
    cid: PropTypes.string
  }).isRequired
};
