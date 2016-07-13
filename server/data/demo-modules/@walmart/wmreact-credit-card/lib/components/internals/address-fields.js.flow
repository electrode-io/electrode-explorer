import React from "react";
import tokens from "./form-tokens.json";
import Field from "./form/validated-field";
import StateChooser from "./form/state-chooser";
import config, {i18n} from "../../config";

class AddressFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      state: props.state || "AL",
      city: props.city,
      postalCode: props.postalCode,
      addressLineOne: props.addressLineOne,
      addressLineTwo: props.addressLineTwo
    };
  }

  validate() {
    return Object.keys(this.refs)
      .map((key) => this.refs[key].validate())
      .every((valid) => valid);
  }

  value() {
    return {...this.state};
  }

  updateWithAvs({responseCode, ...avsError}) {
    // Ah the hacks from not being stateless...
    if (!responseCode || responseCode.indexOf("MODIFIED") === -1) {
      return;
    }
    const fieldMap = {
      CITY_MODIFIED: {field: "city", key: "updatedCity"},
      STATE_MODIFIED: {field: "state", key: "updatedState"},
      POSTALCODE_MODIFIED: {field: "postalCode", key: "updatedPostalCode"}
    };
    const {field, key} = fieldMap[responseCode];
    this.setState({[field]: avsError[key]});
  }

  updateWithCorrected({city, state, postalCode, addressLineOne, addressLineTwo}) {
    this.setState({city, state, postalCode, addressLineOne, addressLineTwo});
  }

  _postalCodeType() {
    return config.config.defaultCountryCode === "GBR"
      ? "ukpostalcode"
      : "postalcode";
  }

  _postalMask() {
    return config.config.defaultCountryCode === "GBR"
      ? {}
      : {maxLength: 5};
  }
  render() {
    const {tealeafIds, tealeafIndex, floatingLabels} = this.props;

    return (
      <div>
        <Field
          ref="addressLineOne"
          name="addressLineOne"
          inputName="addressLineOne"
          autoComplete="section-shipping address-line1"
          data-automation-id="addressLineOne-cc"
          data-tl-id={`${tealeafIds.addressLineOne}${tealeafIndex}`}
          placeholder="Street address"
          floating={floatingLabels}
          showPlaceholder
          maxLength="50"
          validationType="address1"
          onChange={(ev) => this.setState({addressLineOne: ev.target.value})}
          value={this.state.addressLineOne}
          label={i18n(tokens.addressLineOne.label)}
          errorLabel={i18n(tokens.addressLineOne.error)}/>


        <Field
          ref="addressLineTwo"
          name="addressLineTwo"
          inputName="addressLineTwo"
          floating={floatingLabels}
          autoComplete="section-shipping address-line2"
          data-automation-id="addressLineTwo-cc"
          data-tl-id={`${tealeafIds.addressLineTwo}${tealeafIndex}`}
          placeholder="Apt, suite, bldg, c/o (optional)"
          maxLength="50"
          validationType="address2"
          isRequiredField={false}
          onChange={(ev) => this.setState({addressLineTwo: ev.target.value})}
          value={this.state.addressLineTwo}
          label={i18n(tokens.addressLineTwo.label)}
          instructions="(optional)"
          errorLabel={i18n(tokens.addressLineTwo.error)}/>

        <Field
          ref="city"
          name="city"
          inputName="city"
          floating={floatingLabels}
          autoComplete="section-shipping address-level2"
          data-automation-id="city-cc"
          data-tl-id={`${tealeafIds.city}${tealeafIndex}`}
          placeholder="City"
          validationType="city"
          maxLength="30"
          onChange={(ev) => this.setState({city: ev.target.value})}
          value={this.state.city}
          label={i18n(tokens.city.label)}
          errorLabel={i18n(tokens.city.error)}/>

        <div>
          {config.config.defaultCountryCode === "USA" && (
            <div style={{float: "left", maxWidth: "50%"}}>
              {<StateChooser
                ref="state"
                name="state"
                data-automation-id="state-cc"
                autoComplete="section-shipping region"
                value={this.state.state}
                onChange={(ev) => this.setState({state: ev.target.value})}
                data-tl-id={`${tealeafIds.state}${tealeafIndex}`}/>}
            </div>
          )}

          <div className="postal-code-wrapper">
            <Field
              ref="postalCode"
              name="postalCode"
              inputName="postalCode"
              autoComplete="section-shipping postal-code"
              pattern="[0-9]*"
              inputMode="numeric"
              floating={floatingLabels}
              data-automation-id="postalCode-cc"
              data-tl-id={`${tealeafIds.postalCode}${tealeafIndex}`}
              placeholder="ZIP Code"
              {...this._postalMask()}
              value={this.state.postalCode}
              onChange={(ev) => this.setState({postalCode: ev.target.value})}
              validationType={this._postalCodeType()}
              label={i18n(tokens.postalCode.label)}
              errorLabel={i18n(tokens.postalCode.error)}/>
          </div>
        </div>
      </div>
    );
  }
}

AddressFields.propTypes = {
  tealeafIndex: React.PropTypes.number,
  tealeafIds: React.PropTypes.shape({
    addressLineOne: React.PropTypes.string,
    addressLineTwo: React.PropTypes.string,
    city: React.PropTypes.string,
    state: React.PropTypes.string,
    postalCode: React.PropTypes.string
  }),
  state: React.PropTypes.string,
  postalCode: React.PropTypes.string,
  addressLineOne: React.PropTypes.string,
  addressLineTwo: React.PropTypes.string,
  city: React.PropTypes.string,
  floatingLabels: React.PropTypes.bool
};

AddressFields.defaultProps = {
  tealeafIndex: 0,
  tealeafIds: {
    addressLineOne: "address-line-one",
    addressLineTwo: "address-line-two",
    city: "city",
    state: "state",
    postalCode: "postal-code"
  }
};

export default AddressFields;
