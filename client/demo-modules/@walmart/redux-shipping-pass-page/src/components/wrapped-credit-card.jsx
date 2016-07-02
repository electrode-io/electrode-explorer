import React from "react";

import RadioTile from "@walmart/wmreact-forms/lib/components/radio-tile";
import {CreditCard} from "@walmart/wmreact-credit-card/";

class WrappedCreditCard extends React.Component {
  render() {
    const { onSelected, checked, groupName } = this.props;

    return (
      <RadioTile.tile
        groupName={groupName}
        onClick={onSelected}
        checked={checked}
        footer={ <CreditCard {...this.props} /> }>
          {checked ? "Selected" : "Select"}
      </RadioTile.tile>
    );
  }
}

WrappedCreditCard.propTypes = {
  onSelected: React.PropTypes.func,
  checked: React.PropTypes.bool,
  groupName: React.PropTypes.string
};

export default WrappedCreditCard;
