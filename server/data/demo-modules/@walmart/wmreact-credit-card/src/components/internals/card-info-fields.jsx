import React from "react";
import flow from "lodash/flow";
import defer from "lodash/defer";
import omit from "lodash/fp/omit";
import pickBy from "lodash/fp/pickBy";
import identity from "lodash/identity";
import {parseDateParts} from "./form/utils/dates";
import ExpirationDateChooser from "./form/expiration-date-chooser";
import {i18n} from "../../config";
import CreditCard from "@walmart/wmreact-validation/lib/credit-card";
import Heading from "@walmart/wmreact-base/lib/components/heading";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import tokens from "./form-tokens.json";
import Field from "./form/validated-field";
import Flyout from "@walmart/wmreact-containers/lib/components/flyout-magic";
import CreditCardIcons from "./form/credit-card-icons";
import Arrange from "@walmart/wmreact-layout/lib/components/arrange";
import classNames from "classnames";
import isStoreCard from "../../utils/is-store-card";
import isTemporaryCard from "../../utils/is-temporary-card";

class CVVHint extends React.Component {
  render() {
    const allHints = {
      "AMEX": {
        hint: i18n(tokens.cvv.hintAmex),
        helpImage: "amex",
        cardType: "AMEX"
      },
      default: {
        hint: i18n(tokens.cvv.hint)
      }
    };
    let hints = [allHints.default];

    if (!this.props.cardType) {
      hints = [allHints.default, allHints.AMEX];
    } else if (this.props.cardType === "AMEX") {
      hints = [allHints.AMEX];
    }

    const trigger = ({toggle}) => (
      <span
        onClick={(ev) => {
          ev.preventDefault();
          ev.stopPropagation();
          toggle();
        }}
        tealeafId={this.props.tealeafId}
        tabIndex="0"
        role="button"
        className="btn-fake-link"
        aria-label="cvv explanation">
        <Icon name="help" size={1}/>
      </span>
    );

    return (
      <Flyout
        trigger={trigger}
        direction="top"
      >
        <div>
          {hints.map(({helpImage, hint}, index) => (
            <Arrange.FitAll key={index} className={classNames({
              "s-margin-top": index === hints.length - 1
            })}>
              <div className={classNames("credit-card-cvv-help-image", helpImage)}/>
              <div className="s-margin-left">{hint}</div>
            </Arrange.FitAll>
          ))}
        </div>
      </Flyout>
    );
  }
}

CVVHint.propTypes = {
  cardType: React.PropTypes.string,
  tealeafId: React.PropTypes.string
};

class CardInfoFields extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.fields = {};
    this.state = {
      cardType: props.cardType,
      editingCardNumber: !props.lastFour,
      errorLabelToken: "error",
      cvv: "",
      creditCard: this.defaultCreditCardValue(props) || "",
      phone: props.phone || "",
      firstName: props.firstName || "",
      lastName: props.lastName || "",
      afterLoad: false
    };
  }

  componentDidMount() {
    // Hack! In order for chrome to respect the different auto complete sections
    // we need to modify one of the fields after the initial render
    /* eslint-disable */
    setTimeout(()=> {
      this.setState({afterLoad: true});
    }, 0);
    /* eslint-enable */
  }
  defaultCreditCardValue({lastFour, cardType}) {
    const prefix = cardType === "AMEX"
      ? "****-******-*"
      : "****-****-****-";

    return lastFour && `${prefix}${lastFour}`;
  }

  editingCreditCardValue() {
    const {lastFour} = this.props;
    const {cardType} = this.state;

    return lastFour && `${cardType === "AMEX" ? "" : "*"}************${lastFour}`;
  }

  creditCardValueIsDefaultOrEmpty(value) {
    return value === this.editingCreditCardValue()
      || value === this.defaultCreditCardValue(this.props)
      || value === "";
  }

  activeFields() {
    const {editingCardNumber} = this.state;

    return flow(
      // Remove card number from fields if not editing.
      editingCardNumber ? identity : omit("creditCard"),
      // Remove disabled fields.
      pickBy((field) => field && !field.props.disabled)
    )(this.fields);
  }

  validate() {
    return Object.keys(this.activeFields())
      .map((key) => this.fields[key])
      .map((field) => field.validate())
      .every((valid) => valid);
  }

  value() {
    return Object.keys(this.activeFields())
      .map((key) => this.fields[key])
      .filter((field) => !!field)
      .reduce((sum, field) => {
        const value = this.state[field.props.name] === undefined
          ? field.getValue()
          : this.state[field.props.name];

        return (typeof value) === "object"
          ? {...sum, ...value}
          : {...sum, [field.props.name]: value};
      }, {});
  }

  _getCardType(cardNumber) {
    const creditCard = new CreditCard(cardNumber);
    return creditCard.getIssuingNetwork();
  }

  _isEditable() {
    return !isTemporaryCard(this.props);
  }

  _hasExpiryDate() {
    // Mustn't check for this.props.cardExpiryDate here because for new cards they wont have
    // cardExpiryDate at all but in that case we still want to show the expiry date fields.
    return !isStoreCard(this.state) || isTemporaryCard(this.props);
  }

  _hasCVV() {
    return !isTemporaryCard(this.props);
  }

  _creditCard() {
    const {
      tealeafIds,
      tealeafIndex,
      lastFour,
      cardNumberEditable,
      cardType,
      floatingLabels
      } = this.props;
    const {errorLabelToken, editingCardNumber} = this.state;

    const validate = (value) => {
      // HACK: When editingCardNumber is false, this field value is ignored so
      // we don't want to validate it on change or blur. Since there no way to
      // toggle blur validation on a wmreact-validation Field component, save
      // for setting the `isDisabled` state, we will provide it with a
      // short-circuited validation function that returns a constant `true`
      // to "disable" validation.
      if (!editingCardNumber) {
        return true;
      }

      if (/^6032202[05]\d*/.test(value)) {
        if (this.state.errorLabelToken !== "notAccepted") {
          this.setState({errorLabelToken: "notAccepted"});
        }
        return false;
      }

      if (!new CreditCard(value).isValid()) {
        if (this.state.errorLabelToken !== "error") {
          this.setState({errorLabelToken: "error"});
        }
        return false;
      }

      return true;
    };

    const handleChange = (ev) => {
      const newValue = ev.target.value;
      this.setState({creditCard: newValue, cardType: this._getCardType(newValue)});

      if (lastFour && cardNumberEditable) {
        if (this.creditCardValueIsDefaultOrEmpty(newValue)) {
          if (editingCardNumber) {
            // Defer calling validate until the new value is rendered. This will
            // clear the inline validation error message.
            this.setState({
              // Revert to the original card type.
              cardType,
              editingCardNumber: false
            });
          }
        } else if (!editingCardNumber) {
          this.setState({editingCardNumber: true});
        }
      }
    };

    // handleFocus removes the dashes from the field value to ensure that the
    // field value falls within the max length and selects the entire field
    // range.
    const handleFocus = (event) => {
      const input = event.target;

      if (lastFour) {
        if (this.creditCardValueIsDefaultOrEmpty(this.state.creditCard)) {
          this.setState({creditCard: this.editingCreditCardValue()});
          // Defer setting selection range until the new value is rendered.
          defer(() => input.setSelectionRange(0, input.value.length));
        }
      }
    };

    // handleBlur sets the field value back to the default value (last four
    // digits formatted with asterisks and dashes) when the value has not been
    // changed.
    const handleBlur = () => {
      const field = this.fields.creditCard.refs["credit-card-number-field"];
      if (lastFour) {
        if (this.creditCardValueIsDefaultOrEmpty(this.state.creditCard)) {
          this.setState({creditCard: this.defaultCreditCardValue(this.props)});
          defer(() => field && field.clearValidation());
        }
      }
    };

    return (<Field
      value={this.state.creditCard}
      onChange={handleChange}
      disabled={!cardNumberEditable && !!this.props.lastFour}
      label={i18n(tokens.cardNumber.label)}
      placeholder="Card number"
      showPlaceholder
      pattern="[0-9]*"
      inputMode="numeric"
      floating={floatingLabels}
      ref={(elem) => this.fields.creditCard = elem}
      name="creditCard"
      autoComplete="section-payment cc-number"
      maxLength={this.state.cardType === "AMEX" ? 15 : 16}
      data-automation-id="cardNumber-cc"
      data-tl-id={`${tealeafIds.number}${tealeafIndex}`}
      onFocus={handleFocus}
      onBlur={handleBlur}
      errorLabel={i18n(tokens.cardNumber[errorLabelToken])}
      validationType={{validate, message: "Please enter a valid credit card number."}}
    />);
  }

  _cvvHint() {
    const {tealeafIds, tealeafIndex} = this.props;
    return (
      <CVVHint
        tealeafId={`${tealeafIds.cvvLink}${tealeafIndex}`}
        cardType={this.state.cardType}
      />
    );
  }

  _cvv() {
    if (!this._hasCVV()) {
      return null;
    }

    const {tealeafIds, tealeafIndex} = this.props;
    const cvvLength = this.state.cardType === "AMEX" ? 4 : 3;
    const placeholder = this.state.cardType ? `${cvvLength} digits` : "";
    const style = {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      width: "100%",
      height: "100%"
    };

    return (
      <div className="cvv-field" style={{position: "relative"}}>
        <Flyout
          className="cvv-notification-flyout"
          style={style}
          ref={(elem) => this.cvvFlyout = elem}
          trigger={() => <div style={style}/>}
          initialActive={!!this.props.lastFour}
          size="narrow"
          direction="bottom">
          For security reasons, please reenter your card's security code.
        </Flyout>
        <Field
          type="password"
          name="cvv"
          ref={(cvv) => this.fields.cvv = cvv}
          onChange={(ev) => this.setState({cvv: ev.target.value})}
          value={this.state.cvv}
          autoComplete={this.state.afterLoad ? "section-payment cc-csc" : "off"}
          maxLength={cvvLength}
          pattern="[0-9]*"
          inputMode="numeric"
          data-automation-id="cvv-verify-cc"
          data-tl-id={`${tealeafIds.cvv}${tealeafIndex}`}
          placeholder={placeholder}
          label={<span>{i18n(tokens.cvv.label)} {this._cvvHint()}</span>}
          errorLabel={i18n(tokens.cvv.error)}
          validationParams={cvvLength}
          validationType="cvv"
          onClick={() => this.cvvFlyout && this.cvvFlyout.close()}
        />
      </div>
    );
  }

  render() {
    const {tealeafIds, tealeafIndex, floatingLabels} = this.props;
    const dateParts = this.props.cardExpiryDate && parseDateParts(this.props.cardExpiryDate);
    const expiryValue = dateParts && {expiryYear: dateParts.year, expiryMonth: dateParts.month};

    return (
      <div>
        {this.editingCardNumber && <span>Editing</span>}
        <Heading.H3>{i18n(tokens.cardInformation)}</Heading.H3>
        <Field
          value={this.state.firstName}
          ref={(elem) => this.fields.firstName = elem}
          name="firstName"
          autoComplete="section-shipping given-name"
          onChange={(ev) => this.setState({firstName: ev.target.value})}
          maxLength="25"
          validationType="firstname"
          floating={floatingLabels}
          placeholder={i18n(tokens.firstName.label)}
          data-automation-id="firstName-cc"
          data-tl-id={`${tealeafIds.firstName}${tealeafIndex}`}
          errorLabel={i18n(tokens.firstName.error)}
          label={i18n(tokens.firstName.label)}/>

        <Field
          value={this.state.lastName}
          onChange={(ev) => this.setState({lastName: ev.target.value})}
          ref={(elem) => this.fields.lastName = elem}
          name="lastName"
          autoComplete="section-shipping family-name"
          maxLength="25"
          validationType="lastname"
          data-automation-id="lastName-cc"
          floating={floatingLabels}
          placeholder={i18n(tokens.lastName.label)}
          data-tl-id={`${tealeafIds.lastName}${tealeafIndex}`}
          errorLabel={i18n(tokens.lastName.error)}
          label={i18n(tokens.lastName.label)}/>

        {this._creditCard()}
        <CreditCardIcons cardType={this.state.cardType}/>

        <Arrange>
          <Arrange.Fit>
            <ExpirationDateChooser
              tealeafIndex={tealeafIndex}
              tealeafIds={tealeafIds.expiryChooser}
              defaultValue={expiryValue}
              ref={(elem) => this.fields.expirationDate = elem}
              disabled={!this._hasExpiryDate()}
              validationDate={this.props.validationDate}
              errorLabel={i18n(tokens.expirationDate.error)}
              labelText={i18n(tokens.expirationDate.label)}/>
          </Arrange.Fit>
          <Arrange.Fit style={{ width: "40%"}}>
            <input type="text" name="brwsrAutofillText" className="visuallyhidden"/>
            <input type="password" name="brwsrAutofillPassword" className="visuallyhidden"/>
            {this._cvv()}
          </Arrange.Fit>
        </Arrange>
        <Field
          value={this.state.phone}
          onChange={(ev) => this.setState({phone: ev.target.value})}
          ref={(elem) => this.fields.phone = elem}
          name="phone"
          validationType="phone"
          type="tel"
          autoComplete="section-shipping tel"
          instructions="Ex: (415) 444 - 5555"
          placeholder="Phone Ex: (555) 555 - 5555"
          maxLength="14"
          data-automation-id="phone-cc"
          validationType="phone"
          floating={floatingLabels}
          data-tl-id={`${tealeafIds.phone}${tealeafIndex}`}
          errorLabel={i18n(tokens.phone.error)}
          label={i18n(tokens.phone.label)}/>
      </div>
    );
  }
}

CardInfoFields.propTypes = {
  cardNumberEditable: React.PropTypes.bool,
  tealeafIndex: React.PropTypes.number,
  tealeafIds: React.PropTypes.shape({
    firstName: React.PropTypes.string,
    lastName: React.PropTypes.string,
    number: React.PropTypes.string,
    expiryChooser: React.PropTypes.object,
    cvv: React.PropTypes.string,
    cvvLink: React.PropTypes.string,
    phone: React.PropTypes.string
  }),
  cardType: React.PropTypes.string,
  isTemp: React.PropTypes.bool,
  lastFour: React.PropTypes.string,
  cardExpiryDate: React.PropTypes.string,
  validationDate: React.PropTypes.object,
  firstName: React.PropTypes.string,
  lastName: React.PropTypes.string,
  phone: React.PropTypes.string,
  floatingLabels: React.PropTypes.bool
};

CardInfoFields.defaultProps = {
  tealeafIndex: 0,
  tealeafIds: {
    firstName: "first-name",
    lastName: "last-name",
    number: "number",
    cvv: "cvv",
    cvvLink: "cvv-link",
    phone: "phone"
  }
};

export default CardInfoFields;
