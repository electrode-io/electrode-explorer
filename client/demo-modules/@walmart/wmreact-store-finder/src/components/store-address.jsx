/* eslint comma-spacing:0 */
import React from "react";

/**
@private
*/
export default React.createClass({
  displayName: "StoreAddress",

  propTypes: {
    addressLine1: React.PropTypes.string.isRequired,
    addressLine2: React.PropTypes.string,
    city: React.PropTypes.string.isRequired,
    phoneNumber: React.PropTypes.string,
    postalCode: React.PropTypes.string.isRequired,
    state: React.PropTypes.string.isRequired,
    storeName: React.PropTypes.string.isRequired,
    storeNumber: React.PropTypes.number
  },

  renderTitle() {
    return this.props.storeNumber ?
      `${this.props.storeName} - ${this.props.storeNumber}` :
      this.props.storeName;
  },

  renderPhone() {
    return this.props.phoneNumber ?
      <div>{`Phone - ${this.props.phoneNumber}`}</div> : null;
  },

  renderCityStateZip() {
    return `${this.props.city}, ${this.props.state} ${this.props.postalCode}`;
  },

  render() {
    return (
      <div>
        <div className="heading-e">{this.renderTitle()}</div>
        <div>{this.props.addressLine1}</div>
        <div>{this.props.addressLine2}</div>
        <div>{this.renderCityStateZip()}</div>
        {this.renderPhone()}
      </div>
    );
  }
});
