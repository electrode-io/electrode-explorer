import React from "react";
import classNames from "classnames";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import tokens from "./form-tokens.json";
import {i18n} from "../../config";

class AddCreditCard extends React.Component {
  render() {
    const {tealeafId} = this.props;
    return (
      <Button
        tealeafId={tealeafId}
        className={classNames("credit-card", "add-credit-card", this.props.className)}
        onClick={this.props.onAdd}>

        <Icon name="add" size={1}/> {i18n(tokens.addNewCard)}
      </Button>
    );
  }
}

AddCreditCard.propTypes = {
  className: React.PropTypes.string,
  tealeafId: React.PropTypes.string,
  onAdd: React.PropTypes.func.isRequired
};

AddCreditCard.defaultProps = {
  tealeafId: "add-card"
};

export default AddCreditCard;
