import React, { PropTypes } from "react";

const renderTitleBT = () => (
  <div className="BtvTitle-text">Better Together</div>
);

const renderTitleBTV = () => (
  <div className="BtvTitle-text">Buy Together
    <strong className="BtvTitle-andSave font-bold">
      <span className="BtvTitle-ampersand display-inline-block"> &</span> Save
    </strong>
  </div>
);

const BuyTogether = (props) => (
  <div className="Btv ResponsiveContainer">
    <div className="Grid Grid--gutters Btv-module">
      <div className="Grid-col u-size-2-12-l">
        <div className="BtvTitle display-block">
         {props.hasSavings ? renderTitleBTV() : renderTitleBT()}
        </div>
      </div>
    </div>
  </div>
);

BuyTogether.displayName = "BuyTogether";

BuyTogether.propTypes = {
  "hasSavings": PropTypes.bool
};

BuyTogether.defaultProps = {
  hasSavings: false
};

export default BuyTogether;
