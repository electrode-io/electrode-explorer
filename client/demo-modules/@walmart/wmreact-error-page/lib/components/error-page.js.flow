/* @flow */
import React, { Component, PropTypes } from "react";
import Link from "@walmart/wmreact-base/lib/components/link";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";

const MESSAGE_404 = "The page you are looking for could not be found.";
const MESSAGE_500 = "We're having technical difficulties and are looking into the problem now.";

/**
This component displays the ErrorPage for use when errors occur in an app.
@import {ErrorPage}
@flags noVisibleRender
@component ErrorPage
@playground
ErrorPage
```
<ErrorPage statusCode={500} />
```
*/

export default class ErrorPage extends Component {
  _renderCopy(is500: boolean): string {
    return is500 ? MESSAGE_500 : MESSAGE_404;
  }

  _renderLinks(is500: boolean): string {
    const linkClassName = "error-ErrorPage-link";

    return (
      <div className="error-ErrorPage-links">
        {is500 &&
          <Link
            className={`${linkClassName} btn`}
            href
            {...getDataAutomationIdPair("reload", linkClassName, process)}>
            Try again
          </Link>}
        {is500 && <span className="error-ErrorPage-links-separator">or</span>}
        <Link
          className={`${linkClassName} btn`}
          href="/"
          {...getDataAutomationIdPair("home", linkClassName, process)}>
          Go to our homepage
        </Link>
      </div>
    );
  }

  render(): ReactElement {
    const is500 = this.props.statusCode >= 500;

    return (
      <div className="error-ErrorPage">
        <div className="error-ErrorPage-content ResponsiveContainer text-center">
          <Icon className="error-ErrorPage-spark" name="spark" />
          <h1 className="error-ErrorPage-heading display-inline font-semibold">Sorry...</h1>
          <p className="error-ErrorPage-copy">{this._renderCopy(is500)}</p>
          {this._renderLinks(is500)}
        </div>
      </div>
    );
  }
}

ErrorPage.displayName = "ErrorPage";

ErrorPage.propTypes = {
  /**
  HTTP Status code
  */
  statusCode: PropTypes.number.isRequired
};
