import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
        getModalInfo,
        getSubscriptionStatus,
        updateAutoRenew,
        updatePaymentPref
       } from "../redux/action-creators/shipping-pass";
import Message from "@walmart/wmreact-forms/lib/components/message";

import ShippingPassWell from "../components/shipping-pass-well";
import InfoWell from "../components/info-well";

import * as constants from "../redux/types/constants";

class ConnectedShippingPass extends React.Component {
  constructor(props) {
    super(props);
    props.getSubscriptionStatus();
  }

  _renderErrorMessage(errorMessage = constants.DEFAULT) {
    const messages = {
      [constants.DEFAULT]: "with your request",
      [constants.GET_SUBSCRIPTION_STATUS]: "retrieving your ShippingPass subscription information",
      [constants.UPDATE_AUTO_RENEW]: "updating your ShippingPass renewal preference",
      [constants.UPDATE_PAYMENT_PREF]: "updating your ShippingPass subscription payment method"
    };

    return (
      <Message.Error block>
        There was a problem {messages[errorMessage]}. Please try again later.
      </Message.Error>
    );
  }

  render() {
    const { errorMessage, successMessage } = this.props;

    return (
      <div className="shipping-pass-wrapper-container">
        {errorMessage
          ? this._renderErrorMessage(errorMessage)
          : successMessage && <Message.Success block>
                                Your subscription payment method has been successfully updated.
                              </Message.Success>
        }
        <div className="shipping-pass-background">
          <div className="well-background">
            <ShippingPassWell { ...this.props } />
          </div>
          <div className="well-background">
            <InfoWell { ...this.props } />
          </div>
        </div>
      </div>
    );
  }
}

ConnectedShippingPass.propTypes = {
  autoRenew: React.PropTypes.bool,
  errorMessage: React.PropTypes.any,
  getSubscriptionStatus: React.PropTypes.func,
  logo: React.PropTypes.any,
  renewalDate: React.PropTypes.string,
  successMessage: React.PropTypes.bool,
  url: React.PropTypes.string
};

ConnectedShippingPass.defaultProps = {
  logo: "https://ll-us-i5.wal.co/dfw/63fd9f59-7052/ \n" +
  "k2-_172e318e-3f2f-4ba6-9a9f-f533fb0341b3.v1.svg-70748dd17a5ac3fe08acc57256b45d83881d3337",
  url: "https://i5.walmartimages.com/ \n" +
  "dfw/9fa19e5c-82/k2-_ffadaccd-41be-44c9-be65-82825125cd17.v1.html"
};

const mapStateToProps = (state = {}) => ({ ...state.shippingPass });

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getModalInfo,
    getSubscriptionStatus,
    updateAutoRenew,
    updatePaymentPref
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedShippingPass);
