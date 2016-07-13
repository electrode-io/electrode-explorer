import React, {PropTypes} from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import i18n from "../utils/i18n";
import AddressForm from "./address-form";

const AddressTile = React.createClass({
  displayName: "Common-NewAddressTile",

  propTypes: {
    actions: PropTypes.object,
    height: PropTypes.number,
    adding: PropTypes.bool,
    countries: PropTypes.array,
    hideCountry: PropTypes.bool,
    hideActionButtons: PropTypes.bool,
    showFormButtons: PropTypes.bool,
    createAddressForm: PropTypes.func.isRequired
  },

  tileDOMNode() {
    return ReactDOM.findDOMNode(this.refs.addressTile);
  },

  addressFormFlyout() {
    const {
      createAddressForm,
      countries,
      hideCountry,
      hideActionButtons,
      showFormButtons,
      actions,
      adding
    } = this.props;
    const StatefulAddressForm = createAddressForm({
      AddressFormComponent: AddressForm,
      initialValues: {
        state: "AL"
      },
      countries,
      hideCountry,
      hideActionButtons,
      showFormButtons
    });

    return adding && <StatefulAddressForm actions={actions}/>;
  },

  cleanRequestEdit() {
    this.props.actions.cancelEdit();
    this.props.actions.cancelDelete();
    this.props.actions.requestEdit();
  },

  render() {
    const classes = classNames("address-col", "add-address-col", {
      "address-book-enabled-element": this.props.adding
    });

    return (
      <div className={classes}>
        <div className="address-col-inner"
          onClick={this.cleanRequestEdit}>
          <div ref="addressTile"
            className="add-address-tile address-tile"
          >
            <h3>
              <Button
                fakelink
                data-automation-id="new-address-tile-add-new-address"
                tealeafId="COAC2ShpAddrAddNewAddrLnk"
              >
                <Icon name="add"/>
                {i18n("Add new address")}
              </Button>
            </h3>
          </div>
        </div>
        {this.addressFormFlyout()}
      </div>
    );
  }
});

export default AddressTile;
