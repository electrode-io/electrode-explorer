import React, {Component, PropTypes} from "react";
import PriceFormatter from "@walmart/wmreact-formatters/lib/components/price-formatter";
import classnames from "classnames";

/**
Button overlays on POVs
*/
export default class DynamicPriceBubble extends Component {

  /**
  Split out the location into x/y co-ordinate as per the specs.
  @param {string} location  location of overlay button like "A10"
  @returns {object} corresponding x and y co-ordinates.
  */
  _splitLocation(location) {
    if (!location) { return {}; }

    const CHAR_CODE_A = "A".charCodeAt(0);

    const locationX = parseInt(location.substring(1), 10) - 1;
    const locationY = location[0].charCodeAt(0) - CHAR_CODE_A;

    return {locationX, locationY};
  }

  /**
  Check for rollback. Used for custom styling in case of rollback.
  @param {string} priceDisplay texts for mobile
  @returns {boolean} whether it is rollback or not.
  */
  _isRollback(priceDisplay) {
    return priceDisplay === "Rollback";
  }

  /**
  generates css classes for bubble container based on different params.
  @param {string} locationX  x co-ordinate of button.
  @param {string} locationY  y co-ordinate of button.
  @param {string} priceDisplay mobile text
  @returns {string} generated css classes
  */
  _getBubbleClasses(locationX, locationY, priceDisplay) {
    return classnames({
      "dynamic-price-bubble": true,
      "dynamic-price-bubble-rollback": this._isRollback(priceDisplay),
      [`dynamic-price-bubble-x-${locationX}`]: true,
      [`dynamic-price-bubble-y-${locationY}`]: true,
      "u-borderRadiusFull": true
    });
  }

  /**
  generates the jsx for desktop text
  @param {string} bubbleText messaging text for desktop.
  @returns {ReactElement} generated jsx
  */
  _renderDesktopText(bubbleText) {
    if (bubbleText) {
      const classes = classnames(
        "dynamic-price-text",
        "dynamic-price-text-manual",
        "dynamic-price-text-small",
        "hide-content-max-m"
      );

      return <span className={classes}>{bubbleText}</span>;
    }
  }

  /**
  Renders was price.
  @param {string} listPrice price to display in was price.
  @returns {ReactElement} generated was price jsx.
  */
  _renderWasPrice(listPrice) {
    const classes = classnames(
      "dynamic-price-text dynamic-price-text-was",
      "dynamic-price-text-small hide-content-max-m"
    );

    return (<span className={classes}>was ${listPrice}</span>);
  }

  /**
  Check for props validity
  @param {string} locationX x co-ordinate of bubble.
  @param {string} locationY y co-ordinate of bubble.
  @param {string} currentPrice price to display on bubble.
  @returns {boolean} if props are valid.
  */
  _areValidProps(locationX, locationY, currentPrice) {
    if (!currentPrice) { return false; }

    return Number.isFinite(locationX)
      && Number.isFinite(locationY)
      && locationX >= 0
      && locationY >= 0;
  }

  /**
  generates css classes for bubble text messaging.
  @param {string} priceDisplay mobile text
  @param {string} bubbleText desktop text
  @returns {string} generated css classes
  */
  _getBubbleTextClasses(priceDisplay, bubbleText) {
    return classnames({
      "dynamic-price-text": true,
      "font-semibold": this._isRollback(priceDisplay),
      "hide-content-m": !!bubbleText
    });
  }

  render() {
    const {
      currentPrice,
      listPrice,
      location,
      defaultColor,
      hexCode,
      priceDisplay,
      bubbleText
    } = this.props;

    const {locationX, locationY} = this._splitLocation(location);

    // bail out in cases of invalid props.
    if (!this._areValidProps(locationX, locationY, currentPrice)) {
      return null;
    }

    const bubbleClasses = this._getBubbleClasses(locationX, locationY, priceDisplay);
    const bubbleTextClasses = this._getBubbleTextClasses(priceDisplay, bubbleText);

    const btnStyle = {
      backgroundColor: hexCode,
      color: defaultColor
    };

    return (
      <div className={bubbleClasses} style={btnStyle}>
        <span className={bubbleTextClasses}>{priceDisplay}</span>
        {this._renderDesktopText(bubbleText)}
        <span className="dynamic-price font-semibold">
          {PriceFormatter.displayPrice(currentPrice, {pov: true})}
        </span>
        {this._isRollback(priceDisplay) && listPrice && this._renderWasPrice(listPrice)}
      </div>
    );
  }
}

DynamicPriceBubble.displayName = "POVFrame.DynamicPriceBubble";

DynamicPriceBubble.propTypes = {
  /**
  Location string for positioning the button in grid.
  */
  location: PropTypes.string.isRequired,
  /**
  Price to display. It can be from IRO response or manualPrice set in tempo.
  */
  currentPrice: PropTypes.string,
  /**
  To Show was price incase of Rollback.
  */
  listPrice: PropTypes.string,
  /**
  Text to display inside bubble for mobile breakpoint.
  */
  priceDisplay: PropTypes.oneOf(["from", "just", "Rollback"]),
  /**
  Text to display inside bubble for desktop breakpoint.
  */
  bubbleText: PropTypes.string,
  /**
  Text color for messages.
  */
  defaultColor: PropTypes.string,
  /**
  Background color of buttons.
  */
  hexCode: PropTypes.string,
  /**
  unique id to be used in analytics.
  */
  uid: PropTypes.string.isRequired
};

DynamicPriceBubble.defaultProps = {
  hexCode: "",
  defaultColor: "",
  bubbleText: "",
  listPrice: ""
};
