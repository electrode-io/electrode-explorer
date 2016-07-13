/* @flow */
import React, { PropTypes, Component } from "react";

import Icon from "@walmart/wmreact-base/lib/components/icon";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Spinner from "@walmart/wmreact-containers/lib/components/spinner";
import Flyout from "@walmart/wmreact-containers/lib/components/flyout";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import StoreFinderPanel from "./store-finder-panel";
import StoresProp from "../props/stores-prop";
import isEqual from "lodash/isEqual";

/**
This component is the StoreFinderFlyout. This has three states.
1) On initial render, it renders as a Link
2) On hover and during loading in renders a loading Flyout
3) On service response it renders the flyout with stores near you

@import {StoreFinderFlyout}
@flags noVisibleRender
@component StoreFinderFlyout
@playground
StoreFinderFlyout
```
<StoreFinderFlyout
  storeFinderResponse={check examples}
  linkData={check examples}
  iconName="pin"
  index: 1
  linkId="id"
/>
```
*/
export default class StoreFinderFlyout extends Component {
  constructor(props) {
    super(props);
    this._onStoreFinderButtonMouseEnter = this._onStoreFinderButtonMouseEnter.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    // do not rerender store finder flyout if the props haven't changed
    return !isEqual(nextProps.storeFinderResponse, this.props.storeFinderResponse);
  }

  _renderStoreFinderFlyout(props: Object): ReactElement {
    const { storeFinderResponse, ...rest } = props;
    const { index } = rest;
    const { loading, stores } = storeFinderResponse;
    return (
      <Flyout className="header-GlobalEyebrowNav-flyout text-left"
        direction="bottom"
        size="fluid"
        key={index}
        hover
        active
        trigger={this._renderStoreFinderButton(rest)}>
          {this._renderStoreFinderPanel(loading, stores)}
      </Flyout>
    );
  }

  _renderStoreFinderPanel(loading, stores): ReactElement {
    return loading
      ? this._renderLoadingComponent()
      : (<StoreFinderPanel {...stores}/>);
  }

  _renderLoadingComponent(): ReactElement {
    return (
      <div className="header-StoreFinderPanel-spinner">
        <Spinner loading={true}/>
      </div>
    );
  }

  _renderStoreFinderButton({
    linkData,
    iconName,
    index,
    onStoreFinderActive,
    dataAutomationId },
    hover: boolean): ReactElement {
    const {
      linkText
    } = linkData;
    return (
      <Button
        className="header-GlobalEyebrowNav-button dropdown-link"
        fakelink
        {...getDataAutomationIdPair(`link-${index}`, dataAutomationId)}
        onMouseEnter={() => { this._onStoreFinderButtonMouseEnter(hover, onStoreFinderActive); }}
      >
        <Icon name={iconName} />
        {linkText}
      </Button>
    );
  }

  _onStoreFinderButtonMouseEnter(hover: boolean, onStoreFinderActive): void {
    if (hover) {
      onStoreFinderActive();
    }
  }

  _shouldShowFlyout(response: Object): boolean {
    return this._isLoading(response)
      || this._hasStores(response)
      || this._serviceError(response);
  }

  _isLoading(response: Object): boolean {
    return response && response.loading;
  }

  _hasStores(response: Object): boolean {
    return response && response.stores && (response.stores.nearbyStores
        || response.stores.preferredStores);
  }

  _serviceError(response: Object): boolean {
    return response && response.didInvalidate;
  }

  render(): ReactElement {
    const { storeFinderResponse } = this.props;
    if (this._shouldShowFlyout(storeFinderResponse)) {
      return this._renderStoreFinderFlyout(this.props);
    }
    return this._renderStoreFinderButton(this.props, true);
  }
}

StoreFinderFlyout.displayName = "StoreFinderFlyout";

StoreFinderFlyout.propTypes = {
  /**
  Data used to render storefinder panel.
  This includes the loading and error states and stores data
  */
  storeFinderResponse: PropTypes.shape({
    loading: PropTypes.bool,
    didInvalidate: PropTypes.bool,
    stores: PropTypes.shape(StoresProp)
  }).isRequired,
  /**
  Data for configuring the component. Typically coming from Tempo.
  Contains information on the URL, link text, and colors to use for the links.
  */
  linkData: PropTypes.object.isRequired,
  iconName: PropTypes.string,
  index: PropTypes.number,
  /**
  Callback that is triggered when storefinder flyout is open
  */
  onStoreFinderActive: PropTypes.func,
  /**
  automation id for tests
  */
  dataAutomationId: PropTypes.string
};

StoreFinderFlyout.defaultProps = {
  iconName: "pin",
  index: 0,
  onStoreFinderActive: () => {},
  dataAutomationId: "storeFinderFlyout"
};
