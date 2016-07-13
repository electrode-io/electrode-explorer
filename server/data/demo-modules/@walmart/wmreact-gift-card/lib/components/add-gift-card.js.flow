import React from "react";
import classNames from "classnames";

import Icon from "@walmart/wmreact-base/lib/components/icon";
import Button from "@walmart/wmreact-interactive/lib/components/button";

class AddGiftCard extends React.Component {
  render() {
    const {tealeafId} = this.props;

    return (
      <Button
        fakelink
        className={classNames("gift-card", "add-gift-card", this.props.className)}
        onClick={this.props.onClick}
        automationId="payment-add-new-gift-card"
        tealeafId={tealeafId}
        >
        <Icon
          name="add"
          size={1}/>
        <span> Add new gift card</span>
      </Button>
    );
  }
}

AddGiftCard.propTypes = {
  className: React.PropTypes.string,
  onClick: React.PropTypes.func,
  tealeafId: React.PropTypes.string
};

AddGiftCard.defaultProps = {
  tealeafId: "add-card"
};

export default AddGiftCard;
