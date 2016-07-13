import React, {PropTypes} from "react";
import {createAction} from "redux-actions";

import authConfig from "../../config";
import {Captcha, CAPTCHA_STATES} from "@walmart/wmreact-user/lib/components/captcha";

import createStore from "../../redux/configure-store";
import * as actionTypes from "../../actions/captcha-action-types";

const IS_BOT = "Unauthorized";
const onCaptchaResponse = createAction(actionTypes.CAPTCHA_RESPONDED);

export default (options) => (Component) => {
  const {invokeApiProp, ...opts} = options;
  class CaptchaEnabledComponent extends React.Component {
    constructor(props) {
      super(props);
      this._dispatch = props.dispatch || createStore().dispatch;
      this.state = {isBot: CAPTCHA_STATES.UNDETERMINED};
      this._onSubmit.bind(this);
    }

    _onSubmit(data = {}, apiProp) {
      const {CF_IS_BOT, IS_BOT_API_ERR,
        IS_BOT_RESOLVED, IS_BOT_API_SUCC} = CAPTCHA_STATES;
      const sensorData = this._sensorData
        = this.refs.captcha._generateSensorData();
      const reCaptcha = this._reCaptcha || undefined;
      if (reCaptcha === undefined) {
        this.refs.captcha._resetCaptcha();
        this._cfCorrelationId = undefined;
      }
      const correlationId = this._cfCorrelationId;
      const captcha = {sensorData, reCaptcha, correlationId};
      const submitHandler = apiProp;
      const bot = this.state.isBot;
      return submitHandler({...data, captcha})
        .then((response) => {
          this.setState({
            isBot: bot === CF_IS_BOT ? IS_BOT_RESOLVED : IS_BOT_API_SUCC
          });
          return response;
        })
        .catch((err) => {
          if (err.code === IS_BOT) {
            this._cfCorrelationId = err.correlationId;
            this.setState({isBot: CF_IS_BOT});
          } else {
            this.setState({isBot: IS_BOT_API_ERR});
          }
          throw err;
        });
    }

    componentWillUpdate(nextProps, nextState) {
      const {CF_IS_BOT} = CAPTCHA_STATES;
      if (this.state.isBot === CF_IS_BOT && nextState.isBot !== CF_IS_BOT) {
        this._reCaptcha = this._sensorData = undefined;
      }
    }

    render() {
      const wrapApiProp = (cbProp) => (data) =>
        this._onSubmit(data, this.props[cbProp]);

      const apiProps = Array.isArray(invokeApiProp) ? invokeApiProp : [invokeApiProp];
      const handler = apiProps.reduce(
        (prev, curr) => ({...prev, [curr]: wrapApiProp(curr)}),
        {}
      );
      const dispatch = this._dispatch;
      return (
        <Component {...this.props}
          captcha={this.state}
          {...handler}>
          <Captcha
            {...opts}
            {...this.state}
            onReCaptchaResponse={(value) => {
              authConfig.logger.log("reCaptcha responded",
                {event: "respond", form: "reCaptcha"});
              this._reCaptcha = value;
              dispatch(onCaptchaResponse({
                reCaptcha: this._reCaptcha,
                sensorData: this._sensorData
              }));
            }}
            ref="captcha"
          />
        </Component>
      );
    }
  }
  CaptchaEnabledComponent.propTypes = {
    dispatch: PropTypes.func
  };
  return CaptchaEnabledComponent;
};
