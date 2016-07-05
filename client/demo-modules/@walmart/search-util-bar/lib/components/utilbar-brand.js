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

var _wmreactLayout = require("@walmart/wmreact-layout");

var _wmreactForms = require("@walmart/wmreact-forms");

var _wmreactContainers = require("@walmart/wmreact-containers");

var _wmreactInteractive = require("@walmart/wmreact-interactive");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 The brand component flyout.
 For example this is how we use this component.
 ```jsx
 <Brand
 onChange={(ev)=>{console.log(ev)}}
 choices={[
   {
      "name":"Samsung",
      "url":"cat_id=0&prg=desktop&facet=brand:Samsung",
      "itemCount":4862,
      "expandOnLoad":true
   },
   {
      "name":"Apple",
      "url":"cat_id=0&prg=desktop&facet=brand:Apple",
      "itemCount":494,
      "expandOnLoad":true,
      "isSelected": true
   },
   {
      "name":"Better Homes and Gardens",
      "url":"cat_id=0&prg=desktop&facet=brand:Better%20Homes%20and%20Gardens",
      "itemCount":2962,
      "expandOnLoad":true
   }
  ]}/>
 ```
 @import {Brand}
 @component Brand
 @playground
 Search-Util-Bar-Brand
 ```
 <Brand
 onChange={(ev)=>{console.log(ev)}}
 choices={[
   {
      "name":"Samsung",
      "url":"cat_id=0&prg=desktop&facet=brand:Samsung",
      "itemCount":4862,
      "expandOnLoad":true
   },
   {
      "name":"Apple",
      "url":"cat_id=0&prg=desktop&facet=brand:Apple",
      "itemCount":494,
      "expandOnLoad":true,
      "isSelected": true
   },
   {
      "name":"Better Homes and Gardens",
      "url":"cat_id=0&prg=desktop&facet=brand:Better%20Homes%20and%20Gardens",
      "itemCount":2962,
      "expandOnLoad":true
   }
  ]}/>
 ```
 */

var Brand = function (_Component) {
  (0, _inherits3.default)(Brand, _Component);

  function Brand() {
    (0, _classCallCheck3.default)(this, Brand);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  Brand.prototype.buildChoices = function buildChoices() {
    var choices = this.props.choices;

    var _choices = [];

    for (var i = 0, l = choices.length; i < l; i++) {
      if (choices[i].expandOnLoad) {
        _choices.push({
          checked: choices[i].isSelected || false,
          label: choices[i].name,
          url: choices[i].url,
          idName: choices[i].idName
        });
      }
    }

    return _choices;
  };

  Brand.prototype._onChange = function _onChange(ev, i) {
    var onChange = this.props.onChange;

    onChange(ev[i], i, ev);
  };

  Brand.prototype.render = function render() {
    var _choices = this.buildChoices();

    return _react2.default.createElement(
      _wmreactContainers.Flyout,
      {
        trigger: _react2.default.createElement(
          _wmreactInteractive.Button,
          { dropdown: true },
          "Top brands"
        ),
        closeOnClickOut: true,
        direction: "bottom",
        active: false,
        size: "narrow" },
      _react2.default.createElement(
        _wmreactLayout.Layout,
        { padded: true, className: "desktop-bar-brand" },
        _react2.default.createElement(_wmreactForms.Options, {
          choices: _choices,
          onChange: this._onChange.bind(this),
          closeOnClickOut: true
        })
      )
    );
  };

  return Brand;
}(_react.Component);

exports.default = Brand;


Brand.displayName = "SearchUtilBarBrand";

Brand.propTypes = {
  choices: _react.PropTypes.array,
  onChange: _react.PropTypes.func
};

Brand.defaultProps = {
  choices: []
};