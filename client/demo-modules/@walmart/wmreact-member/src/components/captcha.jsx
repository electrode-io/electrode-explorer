import React, {PropTypes} from "react";

import SensorData from "./common/cyber-fend";
import ReCAPTCHA from "react-google-recaptcha";

export const CAPTCHA_STATES = {
  UNDETERMINED: undefined,
  CF_IS_BOT: 1,
  IS_BOT_API_ERR: 2,
  IS_BOT_API_SUCC: 3,
  IS_BOT_RESOLVED: 4
};

export class Captcha extends React.Component {

  _generateSensorData() {
    return this.refs.sensorData._generateSensorData();
  }
  _resetCaptcha() {
    if (this.refs.recaptcha) {
      this.refs.recaptcha.reset();
    }
  }
  render() {
    const {isBot, onReCaptchaResponse} = this.props;
    const {CF_IS_BOT, IS_BOT_RESOLVED} = CAPTCHA_STATES;
    const showCaptcha = (isBot === CF_IS_BOT || isBot === IS_BOT_RESOLVED);
    return (
      <div className="captcha">
        <SensorData ref="sensorData"
          beKey={this.props.beKey}
        />
        {showCaptcha &&
          <p className="bot-message">
              {this.props.isBotMssg}
          </p>
        }
        {showCaptcha &&
          <ReCAPTCHA
            className="reCaptcha"
            ref="recaptcha"
            sitekey={this.props.reCaptchaSiteKey}
            onChange={onReCaptchaResponse}
          />
        }
      </div>
    );
  }
}

Captcha.propTypes = {
  isBot: PropTypes.number,
  onReCaptchaResponse: PropTypes.func.isRequired,
  beKey: PropTypes.string.isRequired,
  reCaptchaSiteKey: PropTypes.string.isRequired,
  identifyConfirmMssg: PropTypes.string,
  isBotMssg: PropTypes.string
};

Captcha.defaultProps = {
  identifyConfirmMssg: `Thanks! Your identity has been confirmed.`,
  isBotMssg: `Help us keep your account safe by clicking
      on the checkbox below.`
};
