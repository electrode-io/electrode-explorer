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

var _wmreactChooser = require("@walmart/wmreact-chooser");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 The sort component flyout.
 For example this is how we use this component.
 ```jsx
 <Sort
  currentSortValue="price_high"
  options={options}
  onChange={(ev)=> {console.log(ev)}}
 />
 ```
 @import {Sort}
 @component Sort
 @playground
 Search-Util-Bar-Sort
 ```
 <Sort
  currentSortValue="price_high"
  options={options}
  onChange={(ev)=> {console.log(ev)}}
  />
 ```
 */

var Sort = function (_Component) {
  (0, _inherits3.default)(Sort, _Component);

  function Sort(props) {
    (0, _classCallCheck3.default)(this, Sort);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    var currentValue = props.options[0] && props.options[0].value;

    for (var i = 0; i < props.options.length; i++) {
      if (props.options[i].value === props.currentSortValue) {
        currentValue = props.options[i].value;
        break;
      }
    }

    _this.state = { currentValue: currentValue };
    return _this;
  }

  Sort.prototype._onChange = function _onChange(option) {
    // state of currentValue is what the previous value is
    var currentValue = this.state.currentValue;

    // Change event will be fired when previousValue is
    // differed to user selected value, otherwise omitted

    if (option !== currentValue) {
      var onChange = this.props.onChange;


      this.setState({ currentValue: option });
      onChange(option, currentValue);
    }
  };

  Sort.prototype.render = function render() {
    var options = this.props.options;
    var currentValue = this.state.currentValue;


    return _react2.default.createElement(
      "div",
      { className: "desktop-bar-sort" },
      _react2.default.createElement(
        _wmreactChooser.Chooser,
        {
          chooserName: "searchUtilBarSort",
          onChange: this._onChange.bind(this),
          defaultValue: currentValue,
          className: "chooser chooser-alt" },
        options.map(function (facet, index) {
          return _react2.default.createElement(
            _wmreactChooser.Chooser.Option,
            { key: index, value: facet.value },
            facet.name
          );
        })
      )
    );
  };

  return Sort;
}(_react.Component);

exports.default = Sort;


Sort.displayName = "SearchUtilBarSort";

Sort.propTypes = {
  currentSortValue: _react.PropTypes.string,
  options: _react.PropTypes.array.isRequired,
  onChange: _react.PropTypes.func
};