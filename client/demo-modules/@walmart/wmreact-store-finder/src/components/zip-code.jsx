/* eslint no-unused-vars:0 */
import React from "react";

import { Button } from "@walmart/wmreact-interactive";
import { ZipCode } from "@walmart/wmreact-forms";

import AltContainer from "alt/AltContainer";

import StoreFinderActions from "../actions/store-finder";
import StoreFinderStore from "../stores/store-finder";

/**
@private
*/
const ZipCodeFormInput = React.createClass({
  displayName: "ZipCodeFormInput",

  propTypes: {
    paddedForm: React.PropTypes.bool,
    changeZip: React.PropTypes.bool,
    stores: React.PropTypes.array,
    searchPending: React.PropTypes.bool,
    zipCode: React.PropTypes.string
  },

  getDefaultProps() {
    return {
      paddedForm: false
    };
  },

  toggleChangeZip() {
    StoreFinderActions.changeZip(!this.props.changeZip);
  },

  getLocalStores(ev) {
    ev.preventDefault();
    this.toggleChangeZip();
    StoreFinderActions.fetchStores(this.refs.zipCode.getValue());
  },

  renderForm() {
    const formClasses = [
      "form-inline",
      "zip-code-form",
      (this.props.paddedForm) ? "padded" : null
    ];

    return (
      <div
        className={(this.props.stores.length > 0) ? "zip-code-wrapper" : null}>
        <form className={formClasses.join(" ")} onSubmit={this.getLocalStores}>
          <div className="form-header">
            {
              (this.props.stores.length > 0) ?
                null : <div>Enter a location to find your local Pharmacy</div>
            }
          </div>
          <div className="form-content">
            <ZipCode ref="zipCode"
              isDisabled={this.props.searchPending}
              showLabel={false} />
            <Button onClick={this.getLocalStores}
              spinner={this.props.searchPending}
              disabled={this.props.searchPending}>
              Find
            </Button>
          </div>
        </form>
      </div>
    );
  },

  renderNoForm() {
    return (
      <div className="change-zip-wrapper padding-ends">
        <span className="change-zip">
          We found <b>{this.props.stores.length}</b> Walmart stores near
          <span className="font-semibold"> {this.props.zipCode} </span>
          <Button fakelink={true} onClick={this.toggleChangeZip}>Change</Button>
        </span>
      </div>
    );
  },

  render() {
    return (this.props.changeZip || this.props.searchPending) ?
      this.renderForm() : this.renderNoForm();
  }
});

/**
@private
*/
export default React.createClass({
  displayName: "ZipCodeForm",

  render() {
    return (
      <AltContainer store={StoreFinderStore}>
        <ZipCodeFormInput />
      </AltContainer>
    );
  }
});
