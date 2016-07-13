"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _selectField = require("@walmart/wmreact-stateless-fields/lib/components/select-field");

var _selectField2 = _interopRequireDefault(_selectField);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _dates = require("./utils/dates");

var _exenv = require("exenv");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* global navigator */
// note: this code is more or less @walmart/wmreact-credit-card-info
// should be merged in some way in the future

var isIE = _exenv.canUseDOM && /MSIE 9/.test(navigator.appVersion);

var ExpirationDateChooser = function (_Component) {
  (0, _inherits3.default)(ExpirationDateChooser, _Component);

  function ExpirationDateChooser(props) {
    (0, _classCallCheck3.default)(this, ExpirationDateChooser);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    var _props$defaultValue = props.defaultValue;
    _props$defaultValue = _props$defaultValue === undefined ? {} : _props$defaultValue;
    var expiryMonth = _props$defaultValue.expiryMonth;
    var expiryYear = _props$defaultValue.expiryYear;

    _this.state = (0, _extends3.default)({
      errors: !!(expiryMonth && expiryYear && (0, _dates.isCardExpired)(expiryMonth, expiryYear)),
      touched: true
    }, props.defaultValue);
    _this.validate = _this.validate.bind(_this);
    return _this;
  }

  ExpirationDateChooser.prototype.resetErrors = function resetErrors() {
    this.setState({ errors: false });
  };

  ExpirationDateChooser.prototype.getValue = function getValue() {
    return {
      expiryMonth: this.state.expiryMonth,
      expiryYear: this.state.expiryYear
    };
  };

  ExpirationDateChooser.prototype.validate = function validate(onlyWhenAllSet) {
    this.resetErrors();

    var _getValue = this.getValue();

    var expiryMonth = _getValue.expiryMonth;
    var expiryYear = _getValue.expiryYear;


    if (!expiryMonth || !expiryYear) {
      if (!onlyWhenAllSet) {
        this.setState({ errors: true });
      }
      return false;
    }

    if ((0, _dates.isCardExpired)(expiryMonth, expiryYear, this.props.validationDate)) {
      this.setState({ errors: true });
      return false;
    }

    return true;
  };

  ExpirationDateChooser.prototype.renderOption = function renderOption(value, index, display) {
    return _react2.default.createElement(
      "option",
      { key: index, value: value },
      display || value
    );
  };

  ExpirationDateChooser.prototype.renderMonthOptions = function renderMonthOptions() {
    var _this2 = this;

    var months = (0, _dates.getMonthsRange)();
    var options = months.map(function (month, i) {
      return _this2.renderOption(month, i);
    });
    var defaultOption = _react2.default.createElement(
      "option",
      { key: "00", value: "", disabled: true },
      "MM"
    );

    return [defaultOption].concat(options);
  };

  ExpirationDateChooser.prototype.renderMonthChooser = function renderMonthChooser() {
    var _this3 = this;

    var _props = this.props;
    var tealeafIndex = _props.tealeafIndex;
    var tealeafIds = _props.tealeafIds;

    var options = this.renderMonthOptions();

    return _react2.default.createElement(
      "span",
      { className: (0, _classnames2.default)({
          "select-date-month": true,
          "potato-ie-hackarino": isIE
        }) },
      _react2.default.createElement(
        _selectField2.default,
        {
          name: "month-chooser",
          "data-automation-id": "expiryMonth-cc",
          autoComplete: "section-payment cc-exp-month",
          "data-tl-id": "" + tealeafIds.expiryMonth + tealeafIndex,
          onChange: function onChange(_ref) {
            var expiryMonth = _ref.target.value;
            return _this3.setState({
              expiryMonth: expiryMonth,
              touched: true
            }, function () {
              return _this3.validate(true);
            });
          },
          touched: this.state.touched,
          value: this.state.expiryMonth || "",
          disabled: this.props.disabled,
          quiet: true
        },
        options
      )
    );
  };

  ExpirationDateChooser.prototype.renderYearOptions = function renderYearOptions() {
    var _this4 = this;

    var years = (0, _dates.getNextTenYears)();
    var options = years.map(function (year, i) {
      return _this4.renderOption(year, i, year.substring(2, 4));
    });
    var defaultOption = _react2.default.createElement(
      "option",
      { key: "00", value: "", disabled: true },
      "YY"
    );

    return [defaultOption].concat(options);
  };

  ExpirationDateChooser.prototype.renderYearChooser = function renderYearChooser() {
    var _this5 = this;

    var _props2 = this.props;
    var tealeafIndex = _props2.tealeafIndex;
    var tealeafIds = _props2.tealeafIds;

    var options = this.renderYearOptions();

    return _react2.default.createElement(
      "span",
      { className: (0, _classnames2.default)({
          "select-date-year": true,
          "potato-ie-hackarino": isIE
        }) },
      _react2.default.createElement(
        _selectField2.default,
        {
          name: "year-chooser",
          "data-automation-id": "expiryYear-cc",
          autoComplete: "section-payment cc-exp-year",
          "data-tl-id": "" + tealeafIds.expiryYear + tealeafIndex,
          onChange: function onChange(_ref2) {
            var expiryYear = _ref2.target.value;
            return _this5.setState({
              expiryYear: expiryYear,
              touched: true
            }, function () {
              return _this5.validate(true);
            });
          },
          onBlur: function onBlur() {
            return _this5.setState({
              touched: true
            }, function () {
              return _this5.validate(false);
            });
          },
          touched: this.state.touched,
          value: this.state.expiryYear || "",
          disabled: this.props.disabled,
          quiet: true
        },
        options
      )
    );
  };

  ExpirationDateChooser.prototype.render = function render() {
    var errorMarkup = this.state.errors ? _react2.default.createElement(
      "p",
      { className: "error-label" },
      this.props.errorLabel || "Please enter a valid expiration date."
    ) : null;

    var monthChooser = this.renderMonthChooser();
    var yearChooser = this.renderYearChooser();

    return _react2.default.createElement(
      "div",
      { className: (0, _classnames2.default)("expiration-date-chooser", { error: this.state.errors }) },
      _react2.default.createElement(
        "label",
        { className: "form-label" },
        _react2.default.createElement(
          "span",
          null,
          this.props.labelText || "Expiration date"
        )
      ),
      monthChooser,
      _react2.default.createElement(
        "span",
        null,
        " / "
      ),
      yearChooser,
      this.state.errors && _react2.default.createElement(_icon2.default, { name: "exclamation-circle", className: "external-error-icon" }),
      errorMarkup
    );
  };

  return ExpirationDateChooser;
}(_react.Component);

ExpirationDateChooser.propTypes = {
  defaultValue: _react2.default.PropTypes.shape({
    expiryYear: _react2.default.PropTypes.string,
    expiryMonth: _react2.default.PropTypes.string
  }),
  tealeafIndex: _react2.default.PropTypes.number,
  tealeafIds: _react2.default.PropTypes.shape({
    expiryYear: _react2.default.PropTypes.string,
    expiryMonth: _react2.default.PropTypes.string
  }),
  validationDate: _react2.default.PropTypes.object,
  disabled: _react2.default.PropTypes.bool,
  errorLabel: _react2.default.PropTypes.string,
  labelText: _react2.default.PropTypes.string
};

ExpirationDateChooser.defaultProps = {
  tealeafIndex: 0,
  tealeafIds: {
    expiryYear: "expiry-year",
    expiryMonth: "expiry-month"
  }
};

exports.default = ExpirationDateChooser;