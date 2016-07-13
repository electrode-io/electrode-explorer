/* @flow */
import React from "react";
import Icon from "@walmart/wmreact-base/lib/components/icon";

const ClubLocatorPopUp = ({
  notificationText = "We've found a club near you",
  btnMessage = "Change club",
  clubName = null,
  clubAddress = null,
  onShowClubClick = () => {},
  close = () => {}
}) => {
  return (
    <div>
      <div className="sams-club-locator-popup">
        <Icon.Remove style={{"height": "12px", "width": "12px", "margin": "5px", "float": "right"}}
          onClick={close}/>
        <label className="notification">{notificationText}</label>
        <label className="clubDetails">
          <div className="clubName"> {clubName} </div>
          <div className="clubAddress"> {clubAddress} </div>
        </label>
        <a href="#" onClick={onShowClubClick}>
          <span className="change-club">{btnMessage}</span>
        </a>
      </div>
    </div>
  );
};

export default ClubLocatorPopUp;
