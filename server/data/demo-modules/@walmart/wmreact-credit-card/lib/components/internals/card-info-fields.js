"use strict";

exports.__esModule = true;

var _extends3 = require("babel-runtime/helpers/extends");

var _extends4 = _interopRequireDefault(_extends3);

var _typeof2 = require("babel-runtime/helpers/typeof");

var _typeof3 = _interopRequireDefault(_typeof2);

var _keys = require("babel-runtime/core-js/object/keys");

var _keys2 = _interopRequireDefault(_keys);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _flow = require("lodash/flow");

var _flow2 = _interopRequireDefault(_flow);

var _defer = require("lodash/defer");

var _defer2 = _interopRequireDefault(_defer);

var _omit = require("lodash/fp/omit");

var _omit2 = _interopRequireDefault(_omit);

var _pickBy = require("lodash/fp/pickBy");

var _pickBy2 = _interopRequireDefault(_pickBy);

var _identity = require("lodash/identity");

var _identity2 = _interopRequireDefault(_identity);

var _dates = require("./form/utils/dates");

var _expirationDateChooser = require("./form/expiration-date-chooser");

var _expirationDateChooser2 = _interopRequireDefault(_expirationDateChooser);

var _config = require("../../config");

var _creditCard2 = require("@walmart/wmreact-validation/lib/credit-card");

var _creditCard3 = _interopRequireDefault(_creditCard2);

var _heading = require("@walmart/wmreact-base/lib/components/heading");

var _heading2 = _interopRequireDefault(_heading);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _formTokens = require("./form-tokens.json");

var _formTokens2 = _interopRequireDefault(_formTokens);

var _validatedField = require("./form/validated-field");

var _validatedField2 = _interopRequireDefault(_validatedField);

var _flyoutMagic = require("@walmart/wmreact-containers/lib/components/flyout-magic");

var _flyoutMagic2 = _interopRequireDefault(_flyoutMagic);

var _creditCardIcons = require("./form/credit-card-icons");

var _creditCardIcons2 = _interopRequireDefault(_creditCardIcons);

var _arrange = require("@walmart/wmreact-layout/lib/components/arrange");

var _arrange2 = _interopRequireDefault(_arrange);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _isStoreCard = require("../../utils/is-store-card");

var _isStoreCard2 = _interopRequireDefault(_isStoreCard);

var _isTemporaryCard = require("../../utils/is-temporary-card");

var _isTemporaryCard2 = _interopRequireDefault(_isTemporaryCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CVVHint = function (_React$Component) {
  (0, _inherits3.default)(CVVHint, _React$Component);

  function CVVHint() {
    (0, _classCallCheck3.default)(this, CVVHint);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  CVVHint.prototype.render = function render() {
    var _this2 = this;

    var allHints = {
      "AMEX": {
        hint: (0, _config.i18n)(_formTokens2.default.cvv.hintAmex),
        helpImage: "amex",
        cardType: "AMEX"
      },
      default: {
        hint: (0, _config.i18n)(_formTokens2.default.cvv.hint)
      }
    };
    var hints = [allHints.default];

    if (!this.props.cardType) {
      hints = [allHints.default, allHints.AMEX];
    } else if (this.props.cardType === "AMEX") {
      hints = [allHints.AMEX];
    }

    var trigger = function trigger(_ref) {
      var toggle = _ref.toggle;
      return _react2.default.createElement(
        "span",
        {
          onClick: function onClick(ev) {
            ev.preventDefault();
            ev.stopPropagation();
            toggle();
          },
          tealeafId: _this2.props.tealeafId,
          tabIndex: "0",
          role: "button",
          className: "btn-fake-link",
          "aria-label": "cvv explanation" },
        _react2.default.createElement(_icon2.default, { name: "help", size: 1 })
      );
    };

    return _react2.default.createElement(
      _flyoutMagic2.default,
      {
        trigger: trigger,
        direction: "top"
      },
      _react2.default.createElement(
        "div",
        null,
        hints.map(function (_ref2, index) {
          var helpImage = _ref2.helpImage;
          var hint = _ref2.hint;
          return _react2.default.createElement(
            _arrange2.default.FitAll,
            { key: index, className: (0, _classnames2.default)({
                "s-margin-top": index === hints.length - 1
              }) },
            _react2.default.createElement("div", { className: (0, _classnames2.default)("credit-card-cvv-help-image", helpImage) }),
            _react2.default.createElement(
              "div",
              { className: "s-margin-left" },
              hint
            )
          );
        })
      )
    );
  };

  return CVVHint;
}(_react2.default.Component);

CVVHint.propTypes = {
  cardType: _react2.default.PropTypes.string,
  tealeafId: _react2.default.PropTypes.string
};

var CardInfoFields = function (_React$Component2) {
  (0, _inherits3.default)(CardInfoFields, _React$Component2);

  function CardInfoFields(props, context) {
    (0, _classCallCheck3.default)(this, CardInfoFields);

    var _this3 = (0, _possibleConstructorReturn3.default)(this, _React$Component2.call(this, props, context));

    _this3.fields = {};
    _this3.state = {
      cardType: props.cardType,
      editingCardNumber: !props.lastFour,
      errorLabelToken: "error",
      cvv: "",
      creditCard: _this3.defaultCreditCardValue(props) || "",
      phone: props.phone || "",
      firstName: props.firstName || "",
      lastName: props.lastName || "",
      afterLoad: false
    };
    return _this3;
  }

  CardInfoFields.prototype.componentDidMount = function componentDidMount() {
    var _this4 = this;

    // Hack! In order for chrome to respect the different auto complete sections
    // we need to modify one of the fields after the initial render
    /* eslint-disable */
    setTimeout(function () {
      _this4.setState({ afterLoad: true });
    }, 0);
    /* eslint-enable */
  };

  CardInfoFields.prototype.defaultCreditCardValue = function defaultCreditCardValue(_ref3) {
    var lastFour = _ref3.lastFour;
    var cardType = _ref3.cardType;

    var prefix = cardType === "AMEX" ? "****-******-*" : "****-****-****-";

    return lastFour && "" + prefix + lastFour;
  };

  CardInfoFields.prototype.editingCreditCardValue = function editingCreditCardValue() {
    var lastFour = this.props.lastFour;
    var cardType = this.state.cardType;


    return lastFour && (cardType === "AMEX" ? "" : "*") + "************" + lastFour;
  };

  CardInfoFields.prototype.creditCardValueIsDefaultOrEmpty = function creditCardValueIsDefaultOrEmpty(value) {
    return value === this.editingCreditCardValue() || value === this.defaultCreditCardValue(this.props) || value === "";
  };

  CardInfoFields.prototype.activeFields = function activeFields() {
    var editingCardNumber = this.state.editingCardNumber;


    return (0, _flow2.default)(
    // Remove card number from fields if not editing.
    editingCardNumber ? _identity2.default : (0, _omit2.default)("creditCard"),
    // Remove disabled fields.
    (0, _pickBy2.default)(function (field) {
      return field && !field.props.disabled;
    }))(this.fields);
  };

  CardInfoFields.prototype.validate = function validate() {
    var _this5 = this;

    return (0, _keys2.default)(this.activeFields()).map(function (key) {
      return _this5.fields[key];
    }).map(function (field) {
      return field.validate();
    }).every(function (valid) {
      return valid;
    });
  };

  CardInfoFields.prototype.value = function value() {
    var _this6 = this;

    return (0, _keys2.default)(this.activeFields()).map(function (key) {
      return _this6.fields[key];
    }).filter(function (field) {
      return !!field;
    }).reduce(function (sum, field) {
      var _extends2;

      var value = _this6.state[field.props.name] === undefined ? field.getValue() : _this6.state[field.props.name];

      return (typeof value === "undefined" ? "undefined" : (0, _typeof3.default)(value)) === "object" ? (0, _extends4.default)({}, sum, value) : (0, _extends4.default)({}, sum, (_extends2 = {}, _extends2[field.props.name] = value, _extends2));
    }, {});
  };

  CardInfoFields.prototype._getCardType = function _getCardType(cardNumber) {
    var creditCard = new _creditCard3.default(cardNumber);
    return creditCard.getIssuingNetwork();
  };

  CardInfoFields.prototype._isEditable = function _isEditable() {
    return !(0, _isTemporaryCard2.default)(this.props);
  };

  CardInfoFields.prototype._hasExpiryDate = function _hasExpiryDate() {
    // Mustn't check for this.props.cardExpiryDate here because for new cards they wont have
    // cardExpiryDate at all but in that case we still want to show the expiry date fields.
    return !(0, _isStoreCard2.default)(this.state) || (0, _isTemporaryCard2.default)(this.props);
  };

  CardInfoFields.prototype._hasCVV = function _hasCVV() {
    return !(0, _isTemporaryCard2.default)(this.props);
  };

  CardInfoFields.prototype._creditCard = function _creditCard() {
    var _this7 = this;

    var _props = this.props;
    var tealeafIds = _props.tealeafIds;
    var tealeafIndex = _props.tealeafIndex;
    var lastFour = _props.lastFour;
    var cardNumberEditable = _props.cardNumberEditable;
    var cardType = _props.cardType;
    var floatingLabels = _props.floatingLabels;
    var _state = this.state;
    var errorLabelToken = _state.errorLabelToken;
    var editingCardNumber = _state.editingCardNumber;


    var validate = function validate(value) {
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
        if (_this7.state.errorLabelToken !== "notAccepted") {
          _this7.setState({ errorLabelToken: "notAccepted" });
        }
        return false;
      }

      if (!new _creditCard3.default(value).isValid()) {
        if (_this7.state.errorLabelToken !== "error") {
          _this7.setState({ errorLabelToken: "error" });
        }
        return false;
      }

      return true;
    };

    var handleChange = function handleChange(ev) {
      var newValue = ev.target.value;
      _this7.setState({ creditCard: newValue, cardType: _this7._getCardType(newValue) });

      if (lastFour && cardNumberEditable) {
        if (_this7.creditCardValueIsDefaultOrEmpty(newValue)) {
          if (editingCardNumber) {
            // Defer calling validate until the new value is rendered. This will
            // clear the inline validation error message.
            _this7.setState({
              // Revert to the original card type.
              cardType: cardType,
              editingCardNumber: false
            });
          }
        } else if (!editingCardNumber) {
          _this7.setState({ editingCardNumber: true });
        }
      }
    };

    // handleFocus removes the dashes from the field value to ensure that the
    // field value falls within the max length and selects the entire field
    // range.
    var handleFocus = function handleFocus(event) {
      var input = event.target;

      if (lastFour) {
        if (_this7.creditCardValueIsDefaultOrEmpty(_this7.state.creditCard)) {
          _this7.setState({ creditCard: _this7.editingCreditCardValue() });
          // Defer setting selection range until the new value is rendered.
          (0, _defer2.default)(function () {
            return input.setSelectionRange(0, input.value.length);
          });
        }
      }
    };

    // handleBlur sets the field value back to the default value (last four
    // digits formatted with asterisks and dashes) when the value has not been
    // changed.
    var handleBlur = function handleBlur() {
      var field = _this7.fields.creditCard.refs["credit-card-number-field"];
      if (lastFour) {
        if (_this7.creditCardValueIsDefaultOrEmpty(_this7.state.creditCard)) {
          _this7.setState({ creditCard: _this7.defaultCreditCardValue(_this7.props) });
          (0, _defer2.default)(function () {
            return field && field.clearValidation();
          });
        }
      }
    };

    return _react2.default.createElement(_validatedField2.default, {
      value: this.state.creditCard,
      onChange: handleChange,
      disabled: !cardNumberEditable && !!this.props.lastFour,
      label: (0, _config.i18n)(_formTokens2.default.cardNumber.label),
      placeholder: "Card number",
      showPlaceholder: true,
      pattern: "[0-9]*",
      inputMode: "numeric",
      floating: floatingLabels,
      ref: function ref(elem) {
        return _this7.fields.creditCard = elem;
      },
      name: "creditCard",
      autoComplete: "section-payment cc-number",
      maxLength: this.state.cardType === "AMEX" ? 15 : 16,
      "data-automation-id": "cardNumber-cc",
      "data-tl-id": "" + tealeafIds.number + tealeafIndex,
      onFocus: handleFocus,
      onBlur: handleBlur,
      errorLabel: (0, _config.i18n)(_formTokens2.default.cardNumber[errorLabelToken]),
      validationType: { validate: validate, message: "Please enter a valid credit card number." }
    });
  };

  CardInfoFields.prototype._cvvHint = function _cvvHint() {
    var _props2 = this.props;
    var tealeafIds = _props2.tealeafIds;
    var tealeafIndex = _props2.tealeafIndex;

    return _react2.default.createElement(CVVHint, {
      tealeafId: "" + tealeafIds.cvvLink + tealeafIndex,
      cardType: this.state.cardType
    });
  };

  CardInfoFields.prototype._cvv = function _cvv() {
    var _this8 = this;

    if (!this._hasCVV()) {
      return null;
    }

    var _props3 = this.props;
    var tealeafIds = _props3.tealeafIds;
    var tealeafIndex = _props3.tealeafIndex;

    var cvvLength = this.state.cardType === "AMEX" ? 4 : 3;
    var placeholder = this.state.cardType ? cvvLength + " digits" : "";
    var style = {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      left: 0,
      width: "100%",
      height: "100%"
    };

    return _react2.default.createElement(
      "div",
      { className: "cvv-field", style: { position: "relative" } },
      _react2.default.createElement(
        _flyoutMagic2.default,
        {
          className: "cvv-notification-flyout",
          style: style,
          ref: function ref(elem) {
            return _this8.cvvFlyout = elem;
          },
          trigger: function trigger() {
            return _react2.default.createElement("div", { style: style });
          },
          initialActive: !!this.props.lastFour,
          size: "narrow",
          direction: "bottom" },
        "For security reasons, please reenter your card's security code."
      ),
      _react2.default.createElement(_validatedField2.default, {
        type: "password",
        name: "cvv",
        ref: function ref(cvv) {
          return _this8.fields.cvv = cvv;
        },
        onChange: function onChange(ev) {
          return _this8.setState({ cvv: ev.target.value });
        },
        value: this.state.cvv,
        autoComplete: this.state.afterLoad ? "section-payment cc-csc" : "off",
        maxLength: cvvLength,
        pattern: "[0-9]*",
        inputMode: "numeric",
        "data-automation-id": "cvv-verify-cc",
        "data-tl-id": "" + tealeafIds.cvv + tealeafIndex,
        placeholder: placeholder,
        label: _react2.default.createElement(
          "span",
          null,
          (0, _config.i18n)(_formTokens2.default.cvv.label),
          " ",
          this._cvvHint()
        ),
        errorLabel: (0, _config.i18n)(_formTokens2.default.cvv.error),
        validationParams: cvvLength,
        validationType: "cvv",
        onClick: function onClick() {
          return _this8.cvvFlyout && _this8.cvvFlyout.close();
        }
      })
    );
  };

  CardInfoFields.prototype.render = function render() {
    var _this9 = this,
        _React$createElement;

    var _props4 = this.props;
    var tealeafIds = _props4.tealeafIds;
    var tealeafIndex = _props4.tealeafIndex;
    var floatingLabels = _props4.floatingLabels;

    var dateParts = this.props.cardExpiryDate && (0, _dates.parseDateParts)(this.props.cardExpiryDate);
    var expiryValue = dateParts && { expiryYear: dateParts.year, expiryMonth: dateParts.month };

    return _react2.default.createElement(
      "div",
      null,
      this.editingCardNumber && _react2.default.createElement(
        "span",
        null,
        "Editing"
      ),
      _react2.default.createElement(
        _heading2.default.H3,
        null,
        (0, _config.i18n)(_formTokens2.default.cardInformation)
      ),
      _react2.default.createElement(_validatedField2.default, {
        value: this.state.firstName,
        ref: function ref(elem) {
          return _this9.fields.firstName = elem;
        },
        name: "firstName",
        autoComplete: "section-shipping given-name",
        onChange: function onChange(ev) {
          return _this9.setState({ firstName: ev.target.value });
        },
        maxLength: "25",
        validationType: "firstname",
        floating: floatingLabels,
        placeholder: (0, _config.i18n)(_formTokens2.default.firstName.label),
        "data-automation-id": "firstName-cc",
        "data-tl-id": "" + tealeafIds.firstName + tealeafIndex,
        errorLabel: (0, _config.i18n)(_formTokens2.default.firstName.error),
        label: (0, _config.i18n)(_formTokens2.default.firstName.label) }),
      _react2.default.createElement(_validatedField2.default, {
        value: this.state.lastName,
        onChange: function onChange(ev) {
          return _this9.setState({ lastName: ev.target.value });
        },
        ref: function ref(elem) {
          return _this9.fields.lastName = elem;
        },
        name: "lastName",
        autoComplete: "section-shipping family-name",
        maxLength: "25",
        validationType: "lastname",
        "data-automation-id": "lastName-cc",
        floating: floatingLabels,
        placeholder: (0, _config.i18n)(_formTokens2.default.lastName.label),
        "data-tl-id": "" + tealeafIds.lastName + tealeafIndex,
        errorLabel: (0, _config.i18n)(_formTokens2.default.lastName.error),
        label: (0, _config.i18n)(_formTokens2.default.lastName.label) }),
      this._creditCard(),
      _react2.default.createElement(_creditCardIcons2.default, { cardType: this.state.cardType }),
      _react2.default.createElement(
        _arrange2.default,
        null,
        _react2.default.createElement(
          _arrange2.default.Fit,
          null,
          _react2.default.createElement(_expirationDateChooser2.default, {
            tealeafIndex: tealeafIndex,
            tealeafIds: tealeafIds.expiryChooser,
            defaultValue: expiryValue,
            ref: function ref(elem) {
              return _this9.fields.expirationDate = elem;
            },
            disabled: !this._hasExpiryDate(),
            validationDate: this.props.validationDate,
            errorLabel: (0, _config.i18n)(_formTokens2.default.expirationDate.error),
            labelText: (0, _config.i18n)(_formTokens2.default.expirationDate.label) })
        ),
        _react2.default.createElement(
          _arrange2.default.Fit,
          { style: { width: "40%" } },
          _react2.default.createElement("input", { type: "text", name: "brwsrAutofillText", className: "visuallyhidden" }),
          _react2.default.createElement("input", { type: "password", name: "brwsrAutofillPassword", className: "visuallyhidden" }),
          this._cvv()
        )
      ),
      _react2.default.createElement(_validatedField2.default, (_React$createElement = {
        value: this.state.phone,
        onChange: function onChange(ev) {
          return _this9.setState({ phone: ev.target.value });
        },
        ref: function ref(elem) {
          return _this9.fields.phone = elem;
        },
        name: "phone",
        validationType: "phone",
        type: "tel",
        autoComplete: "section-shipping tel",
        instructions: "Ex: (415) 444 - 5555",
        placeholder: "Phone Ex: (555) 555 - 5555",
        maxLength: "14",
        "data-automation-id": "phone-cc"
      }, _React$createElement["validationType"] = "phone", _React$createElement.floating = floatingLabels, _React$createElement["data-tl-id"] = "" + tealeafIds.phone + tealeafIndex, _React$createElement.errorLabel = (0, _config.i18n)(_formTokens2.default.phone.error), _React$createElement.label = (0, _config.i18n)(_formTokens2.default.phone.label), _React$createElement))
    );
  };

  return CardInfoFields;
}(_react2.default.Component);

CardInfoFields.propTypes = {
  cardNumberEditable: _react2.default.PropTypes.bool,
  tealeafIndex: _react2.default.PropTypes.number,
  tealeafIds: _react2.default.PropTypes.shape({
    firstName: _react2.default.PropTypes.string,
    lastName: _react2.default.PropTypes.string,
    number: _react2.default.PropTypes.string,
    expiryChooser: _react2.default.PropTypes.object,
    cvv: _react2.default.PropTypes.string,
    cvvLink: _react2.default.PropTypes.string,
    phone: _react2.default.PropTypes.string
  }),
  cardType: _react2.default.PropTypes.string,
  isTemp: _react2.default.PropTypes.bool,
  lastFour: _react2.default.PropTypes.string,
  cardExpiryDate: _react2.default.PropTypes.string,
  validationDate: _react2.default.PropTypes.object,
  firstName: _react2.default.PropTypes.string,
  lastName: _react2.default.PropTypes.string,
  phone: _react2.default.PropTypes.string,
  floatingLabels: _react2.default.PropTypes.bool
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

exports.default = CardInfoFields;