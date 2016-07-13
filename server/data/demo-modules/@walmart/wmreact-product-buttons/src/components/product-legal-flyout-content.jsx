/* @flow */
import React, { Component, PropTypes } from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import classNames from "classnames";

const YES = "Yes";
const NO = "No";
const MORE_INFO = "More info";
const LEGAL_CONTENT = (
  <div>
    <strong className="prod-LegalContent-contentHeader display-inline-block">
        We need just one more thing before we add this to your cart:
    </strong>
    <div className="prod-LegalContent-content">
        By ordering this items, you are certifying that you are at least 17 years of age.
    </div>
  </div>
);

const CTA_HEADING = (
  <strong className="prod-LegalContent-ctaHeader">
    Are you 17 years of age or older?
  </strong>
);

const DECLINE_CONTENT = (
  <div className="prod-LegalContent-declineContainer">
      <strong className="prod-LegalContent-declineHeading
        prod-LegalContent-contentHeader display-inline-block">
        This item could not be added to your card.
      </strong>
      <p className="prod-LegalContent-declineContent">
        Please review the rating warning displayed on the page and try again.
      </p>
  </div>
);
/**
This component renders the content inside legal flyout.
The component also handles the case when the legal warning is declined.

 For example this is how we use this component.

 ```jsx
 <LegalFlyoutContent onAcceptClicked={() => {console.log("accept clicked")}}/>
 ```

 @import {LegalFlyoutContent}
 @flags noVisibleRender
 @component LegalFlyoutContent
 @playground
 LegalFlyoutContent
 ```
 <LegalFlyoutContent onAcceptClicked={() => {console.log("accept clicked")}}/>
 ```
 */
class LegalFlyoutContent extends Component {

  _renderDeclineContent(): ReactElement {
    return DECLINE_CONTENT;
  }

  _onDecline(): void {
    this.setState({decline: true});
  }

  _renderAcceptButton(onAcceptClicked): ReactElement {
    return (
      <div className="Grid-col u-size-6-12 u-size-3-12-m">
        <Button
          className="prod-LegalContent-accept"
          onClick={onAcceptClicked}>
            {YES}
        </Button>
      </div>
    );
  }

  _renderDeclineButton(onDeclineClicked): ReactElement {
    return (
      <div className="Grid-col u-size-6-12 u-size-3-12-m">
        <Button inverse={true}
          className="prod-LegalContent-decline"
          onClick={onDeclineClicked}>
          {NO}
        </Button>
      </div>
    );
  }

  _renderMoreInfoButton(onMoreInfoClicked): ReactElement {
    return (
      <div className="Grid-col u-size-6-12-m">
        <Button
          fakelink={true}
          className="prod-LegalContent-moreInfo-button"
          onClick={onMoreInfoClicked}>
          <p className="copy-small prod-LegalContent-moreInfo-text">
            {MORE_INFO}
          </p>
        </Button>
      </div>
    );
  }

  _renderCTASection({onAcceptClicked, onMoreInfoClicked, onDeclineClicked}): ReactElement {
    return (
      <div>
        {CTA_HEADING}
        <div className="prod-LegalContent-cta Grid Grid--gutters">
          {this._renderAcceptButton(onAcceptClicked)}
          {this._renderDeclineButton(onDeclineClicked)}
          {this._renderMoreInfoButton(onMoreInfoClicked)}
        </div>
      </div>
    );
  }

  _getContentClassNames(className): string {
    return classNames(className, "prod-LegalContent-Container");
  }

  _renderLegalContent({className,
      onAcceptClicked,
      onMoreInfoClicked,
      onDeclineClicked
    }): ReactElement {
    return (
      <div className={this._getContentClassNames(className)}>
        {LEGAL_CONTENT}
        {this._renderCTASection({onAcceptClicked, onMoreInfoClicked, onDeclineClicked})}
      </div>
    );
  }

  render(): ReactElement {
    if (this.props.decline) {
      return this._renderDeclineContent();
    }
    return this._renderLegalContent(this.props);
  }
}

LegalFlyoutContent.displayName = "LegalFlyoutContent";

LegalFlyoutContent.propTypes = {
  /**
  Additional class names applied to the component
  */
  className: PropTypes.string,
  /**
  Prop that decides whether to render decline content or not
  */
  decline: PropTypes.bool,
  /**
  Callback when yes button is clicked
  */
  onAcceptClicked: PropTypes.func,
  /**
  Callback when more info is clicked
  */
  onMoreInfoClicked: PropTypes.func,
  /**
  Callback when no button is clicked
  */
  onDeclineClicked: PropTypes.func
};

LegalFlyoutContent.defaultProps = {
  className: "",
  decline: false,
  onAcceptClicked: () => {},
  onMoreInfoClicked: () => {},
  onDeclineClicked: () => {}
};

export default LegalFlyoutContent;
