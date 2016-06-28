"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _field = require("@walmart/wmreact-stateless-fields/lib/components/field");

var _field2 = _interopRequireDefault(_field);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 The ZipCode search component.
 For example this is how we use this component.
 ```jsx
 <ZipCodeSearch
  zipCode="83713"
  className="prod-zipcode-search"
  onLocationUpdate={(event)=>{console.log(event)}}
 />
 ```
 */

var ZipCodeSearch = function (_Component) {
  (0, _inherits3.default)(ZipCodeSearch, _Component);

  function ZipCodeSearch(props) {
    (0, _classCallCheck3.default)(this, ZipCodeSearch);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.onSubmit = _this.onSubmit.bind(_this);
    _this.state = { zipCode: props.zipCode };
    return _this;
  }

  ZipCodeSearch.prototype.onSubmit = function onSubmit(event) {
    event.preventDefault();
    if (this.isValidZip(this.state.zipCode)) {
      if (this.props.onLocationUpdate) {
        this.props.onLocationUpdate(this.state.zipCode);
      }
    }
  };

  ZipCodeSearch.prototype.isValidZip = function isValidZip(val) {
    return (/(^\d{5}(\-\d{4})?$)/.test(val)
    );
  };

  ZipCodeSearch.prototype.render = function render() {
    var _this2 = this;

    var zipCode = this.state.zipCode;

    return _react2.default.createElement(
      "form",
      { className: this.props.className, onSubmit: this.onSubmit },
      _react2.default.createElement(_field2.default, {
        shouldDisplayError: function shouldDisplayError() {
          return !_this2.isValidZip(zipCode);
        },
        placeholder: "Enter ZIP code",
        defaultValue: zipCode,
        shouldDisplayValid: function shouldDisplayValid() {
          return _this2.isValidZip(zipCode);
        },
        error: "Please enter a valid zip code.",
        onChange: function onChange(event) {
          return _this2.setState({ zipCode: event.target.value });
        }
      }),
      _react2.default.createElement(
        _button2.default,
        { onClick: this.onSubmit },
        "Find"
      )
    );
  };

  return ZipCodeSearch;
}(_react.Component);

ZipCodeSearch.displayName = "ZipCodeSearch";

ZipCodeSearch.propTypes = {
  /**
   Current customer zipcode
   */
  zipCode: _react.PropTypes.string,
  /**
   class styling
   */
  className: _react.PropTypes.string,
  /**
   The callback handler for updating the customer zip
   */
  onLocationUpdate: _react.PropTypes.func.isRequired
};

ZipCodeSearch.defaultProps = {
  zipCode: "",
  className: "enter-zipcode",
  onLocationUpdate: function onLocationUpdate() {}
};

exports.default = ZipCodeSearch;