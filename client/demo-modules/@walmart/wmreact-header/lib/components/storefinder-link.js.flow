/* @flow */
import ExecutionEnvironment from "exenv";
import React, { PropTypes, Component } from "react";
import Link from "@walmart/wmreact-base/lib/components/link";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import { Geolocate } from "@walmart/geolocate";

const STORE_FINDER_URL = "/store/finder";

/**
 * Store Finder Link component
 * Component is used in mobile header and tries to get the location from the Browser using the
 * Geolocate library from @walmart/geolocate when clicked on it
 *
 * On resolution of the Promise, component would redirect the browser to:
 * - /store/finder?latitude=xxx&longitude=xxx - If we are able to retrieve the geolocation
 * - /store/finder - If we are not able to retrieve the geolocation
 *
 * @class StorefinderLink
 * @component StorefinderLink
 * @exports StorefinderLink
 * @import {StorefinderLink}
 *
 * @example
 * ```jsx
 * <StorefinderLink />
 * ```
 *
 * @playground
 * StorefinderLink
 * ```jsx
 * <StorefinderLink />
 * ```
 */

export default class StorefinderLink extends Component {
  _getWindow(): ?Object {
    return ExecutionEnvironment.canUseDOM ? window : undefined;
  }

  _navigateToUrl(url: string) {
    const WINDOW = this._getWindow();

    if (WINDOW) {
      WINDOW.location = url;
    }
  }

  _getGeolocatorInstance(): Object {
    return new Geolocate();
  }

  _goToStoreFinder(e): Promise {
    e.preventDefault();

    const geolocation = this._getGeolocatorInstance();

    return geolocation.getCurrentLocation().then((location) => {
      if (!location.coords && (!location.coords.latitude || !location.coords.longitude)) {
        this._navigateToUrl(STORE_FINDER_URL);
      }

      const { latitude, longitude } = location.coords;

      this._navigateToUrl(`${STORE_FINDER_URL}?latitude=${latitude}&longitude=${longitude}`);
    }, () => {
      this._navigateToUrl(STORE_FINDER_URL);
    });
  }

  render(): ReactElement {
    const { className, dataAutomationId } = this.props;

    return (
      <Link
        className={className}
        href={STORE_FINDER_URL}
        onClick={this._goToStoreFinder.bind(this)}
        {...getDataAutomationIdPair(dataAutomationId, "")}>
        <Icon className="header-HeaderPrimary-icon" name="pin" />
      </Link>
    );
  }
}

StorefinderLink.displayName = "StorefinderLink";

StorefinderLink.propTypes = {
  /**
  Any additional CSS classes that need to be applied
  to the root element.
  */
  className: PropTypes.string,
  /**
  Automation ID base string
  */
  dataAutomationId: PropTypes.string
};

StorefinderLink.defaultProps = {
  className: "",
  dataAutomationId: "header-StorefinderLink"
};
