import React from "react";

import {Button} from "@walmart/wmreact-interactive";

import classNames from "classnames";

/**
@private
*/
export default class VoteButton extends React.Component {
  _renderCount() {
    if (!this.props.count) {
      return null;
    }

    return (
      <span className="btn-vote-count xxs-margin-left">
        ({this.props.count})
      </span>
    );
  }

  render() {
    const buttonText = this.props.kind === "up" ? "Yes" : "No";

    const { className } = this.props;

    return (
      <span className="btn-vote-section">
        <Button
          className={classNames(
            "btn-vote",
            className
          )}
        >
          <i
            className={classNames({
              "btn-vote-up": this.props.kind === "up",
              "btn-vote-down": this.props.kind === "down"
            })}
          />
          <span className="xxs-margin-left">
            {buttonText}
          </span>
        </Button>

        {this._renderCount()}
      </span>
    );
  }
}

VoteButton.displayName = "VoteButton";

VoteButton.propTypes = {
  count: React.PropTypes.number,
  kind: React.PropTypes.oneOf(["up", "down"]),
  className: React.PropTypes.string
};
