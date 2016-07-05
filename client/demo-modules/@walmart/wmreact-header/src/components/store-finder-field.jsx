/* @flow */
import React, { PropTypes, Component } from "react";
import Field from "@walmart/wmreact-forms/lib/components/field";
import Arrange from "@walmart/wmreact-layout/lib/components/arrange";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import { getStoreFinderUrl } from "../utils/store-finder-utils";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";

type StoreFinderFieldPropTypes = {
  dataAutomationId: ?string,
  className: ?string
};

type StoreFinderFieldDefaultProps = {
  dataAutomationId: string,
  className: string
}

const VALIDATION_MESSAGE = "Please enter a valid city, state or zip code";

/**
This component is used to find stores near your specified location

@import {StoreFinderField}
@flags noVisibleRender
@component StoreFinderField
@playground
StoreFinderField
```
<StoreFinderField />
```
*/
export default class StoreFinderField extends
Component<StoreFinderFieldPropTypes, StoreFinderFieldDefaultProps> {

  constructor(props): void {
    super(props);
    this._handleLocationSubmit = this._handleLocationSubmit.bind(this);
  }

  _renderLocationField(dataAutomationId): ReactElement {
    return (
      <Field
        className="header-StoreFinderField-location"
        inputName="storeFinder"
        isRequiredField={false}
        ref="storeFinderInputField"
        validationType="userLocation"
        placeholderText="Enter city, state or zip code"
        labelText="Enter city, state or zip code"
        showLabel
        {...getDataAutomationIdPair("locationText", dataAutomationId)}
      />
    );
  }

  _renderFindButton(dataAutomationId): ReactElement {
    return (
      <div
        className="header-StoreFinderField-button"
        {...getDataAutomationIdPair("findStoreButton", dataAutomationId)}>
        <Button type="submit" compact>
          Find
        </Button>
      </div>
    );
  }

  _getWindow(): Object {
    return window;
  }

  _handleLocationSubmit(ev: Object): void {
    ev.preventDefault();
    const {storeFinderInputField} = this.refs;
    const location = storeFinderInputField.getValue();
    const currentWindow = this._getWindow();
    const isValid = storeFinderInputField.isValid();
    if (location && isValid) {
      currentWindow.location.href = getStoreFinderUrl(location);
    } else {
      this._invalidateField(storeFinderInputField);
    }
  }

  _invalidateField(field) {
    field.invalidate(VALIDATION_MESSAGE);
  }

  render(): ReactElement {
    const { dataAutomationId, className } = this.props;
    return (
      <div className={className}>
        <p>Find another store </p>
        <div className="header-StoreFinderField-form">
          <form onSubmit={this._handleLocationSubmit}>
            <Arrange>
              <Arrange.Fill>
                {this._renderLocationField(dataAutomationId)}
              </Arrange.Fill>
              <Arrange.Fit>
                {this._renderFindButton(dataAutomationId)}
              </Arrange.Fit>
            </Arrange>
          </form>
        </div>
      </div>
    );
  }
}

StoreFinderField.displayName = "StoreFinderField";

StoreFinderField.propTypes = {
  /**
  Automation id for testing
  */
  dataAutomationId: PropTypes.string,
  /**
  Additional class names
  */
  className: PropTypes.string
};

StoreFinderField.defaultProps = {
  dataAutomationId: "storeFinderField",
  className: ""
};
