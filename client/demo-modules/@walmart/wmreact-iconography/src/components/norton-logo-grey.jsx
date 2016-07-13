import React, { PropTypes } from "react";
import classnames from "classnames";
import NortonLogoImg from "../../src/images/norton.png";

const _getWindow = () => window;
/* eslint-disable no-script-url, max-len */
const _onClick = (ev) => {
  ev.preventDefault();
  _getWindow().open(
    "https://trustsealinfo.verisign.com/splash?form_file=fdf/splash.fdf&dn=www.walmart.com&lang=en",
    "VRSN_Splash",
    "location=yes,status=yes,resizable=yes,scrollbars=yes,width=560,height=500"
  );
};
const NortonLogo = (props) => {
  const {grey = true} = props;
  return (
    <div>
      <div className="norton-logo">
        <a tabIndex="-1"
          className={classnames("display-block logo", {grey})}
          onClick={_onClick}
          href="javascript:void(0);"
        >
          <span className="visuallyhidden">
            Walmart. Save Money. Live Better.
          </span>
          <img
            src={NortonLogoImg}
            alt="Click to Verify - This site has chosen an SSL Certificate to improve Web site security"
          />
        </a>
      </div>
    </div>
  );
};
/* eslint-enable no-script-url, max-len */

NortonLogo.propTypes = {
  grey: PropTypes.bool
};

export default NortonLogo;
