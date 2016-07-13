/* @flow */
import React, { PropTypes } from "react";
import classNames from "classnames";

/**
This component allows a user to select a certain "star" rating.
It is used on the "write a review" page

```jsx
<div style={{height: 100}}>
  <RatingSelector />
</div>
```

@import {RatingSelector}
@component RatingSelector
@playground
RatingSelector
```
<div style={{height: 100}}>
  <RatingSelector />
</div>

```
*/

class RatingSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRating: 0,
      hoverRating: 0
    };
    this._handleClick = this._handleClick.bind(this);
    this._handleMouseOver = this._handleMouseOver.bind(this);
    this._handleMouseOut = this._handleMouseOut.bind(this);
  }

  _handleClick(clickedRating) {
    const { handleClick } = this.props;
    this.setState({
      selectedRating: clickedRating,
      hoverRating: 0
    }, () => {
      handleClick(this.state.selectedRating);
    });
  }

  _handleMouseOver(selectedRating) {
    this.setState({
      hoverRating: selectedRating
    });
  }

  _handleMouseOut() {
    this.setState({
      hoverRating: 0
    });
  }

  _renderStarButtons(activeRating) {
    return [
      <button
        className={classNames("ratingButton",
          {
            "ratingButton--selected": activeRating >= 1,
            "ratingButton--unselected": activeRating < 1
          },
          "display-inline-block")}
        key={1}
        onClick={this._handleClick.bind(null, 1)}
        onMouseOver={this._handleMouseOver.bind(null, 1)}
        onMouseOut={this._handleMouseOut}>
      </button>,
      <button
        className={classNames("ratingButton",
          {
            "ratingButton--selected": activeRating >= 2,
            "ratingButton--unselected": activeRating < 2
          },
          "display-inline-block")}
        key={2}
        onClick={this._handleClick.bind(null, 2)}
        onMouseOver={this._handleMouseOver.bind(null, 2)}
        onMouseOut={this._handleMouseOut}>
      </button>,
      <button
        className={classNames("ratingButton",
          {
            "ratingButton--selected": activeRating >= 3,
            "ratingButton--unselected": activeRating < 3
          },
          "display-inline-block")}
        key={3}
        onClick={this._handleClick.bind(null, 3)}
        onMouseOver={this._handleMouseOver.bind(null, 3)}
        onMouseOut={this._handleMouseOut}>
      </button>,
      <button
        className={classNames("ratingButton",
          {
            "ratingButton--selected": activeRating >= 4,
            "ratingButton--unselected": activeRating < 4
          },
          "display-inline-block")}
        key={4}
        onClick={this._handleClick.bind(null, 4)}
        onMouseOver={this._handleMouseOver.bind(null, 4)}
        onMouseOut={this._handleMouseOut}>
      </button>,
      <button
        className={classNames("ratingButton",
          {
            "ratingButton--selected": activeRating >= 5,
            "ratingButton--unselected": activeRating < 5
          },
          "display-inline-block")}
        key={5}
        onClick={this._handleClick.bind(null, 5)}
        onMouseOver={this._handleMouseOver.bind(null, 5)}
        onMouseOut={this._handleMouseOut}>
      </button>
    ];
  }

  _renderRatingText(activeRating) {
    let ratingText;
    const ratingTextMap = {
      1: "Poor",
      2: "Fair",
      3: "Average",
      4: "Good",
      5: "Excellent"
    };
    ratingText = ratingTextMap[activeRating];
    const ratingTextClass = `ratingText--${ratingText}`;
    return (
      <span className={classNames(
        "ratingText",
        ratingTextClass,
        "display-inline-block",
        "font-semibold")}>{ratingText}</span>
    );
  }

  render() {
    let buttons;
    let activeRating;
    let ratingText;

    activeRating = !this.state.hoverRating ?
        this.state.selectedRating : this.state.hoverRating;

    buttons = this._renderStarButtons(activeRating);
    ratingText = this._renderRatingText(activeRating);

    return (
      <div>
        {buttons}
        {ratingText}
      </div>
    );
  }
}

RatingSelector.displayName = "RatingSelector";

RatingSelector.propTypes = {
  handleClick: PropTypes.func
};

RatingSelector.defaultProps = {
  handleClick: () => {}
};

export default RatingSelector;
