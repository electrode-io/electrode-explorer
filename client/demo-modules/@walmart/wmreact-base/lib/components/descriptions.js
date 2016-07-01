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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _descriptionTerm = require("./description-term");

var _descriptionTerm2 = _interopRequireDefault(_descriptionTerm);

var _descriptionDescription = require("./description-description");

var _descriptionDescription2 = _interopRequireDefault(_descriptionDescription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Descriptions components family
@examples
```jsx
<Descriptions>
  <Descriptions.Term>Term</Descriptions.Term>
  <Descriptions.Description>Description</Descriptions.Description>
</Descriptions>
```
@component Descriptions
@import {Descriptions}
@playground
Descriptions
```
<Descriptions>
  <Descriptions.Term>Term</Descriptions.Term>
  <Descriptions.Description>Description</Descriptions.Description>
</Descriptions>
```
*/

var Descriptions = function (_React$Component) {
  (0, _inherits3.default)(Descriptions, _React$Component);

  function Descriptions() {
    (0, _classCallCheck3.default)(this, Descriptions);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  Descriptions.prototype.render = function render() {
    var extras = {
      "copy-mini": this.props.copyMini,
      "copy-small": this.props.copySmall,
      "dl-horizontal": this.props.horizontal,
      "dl-emphasize": this.props.emphasize
    };
    return _react2.default.createElement(
      "dl",
      (0, _extends3.default)({
        className: (0, _classnames2.default)(extras, this.props.className, this.props.hidden ? "hide-content" : "")
      }, this.props),
      this.props.children
    );
  };

  return Descriptions;
}(_react2.default.Component);

exports.default = Descriptions;


Descriptions.displayName = "Descriptions";

Descriptions.propTypes = {
  /**
  True if it should apply `dl-emphasize`
  */
  emphasize: _react2.default.PropTypes.bool,
  /**
  True if it should apply `dl-horizontal`
  */
  horizontal: _react2.default.PropTypes.bool,
  /**
  True if it should apply `copy-small`
  */
  copySmall: _react2.default.PropTypes.bool,
  /**
  True if it should apply `copy-mini`
  */
  copyMini: _react2.default.PropTypes.bool,
  className: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node,
  hidden: _react2.default.PropTypes.bool
};

Descriptions.defaultProps = {
  emphasize: false,
  horizontal: false,
  copySmall: false,
  copyMini: false
};

Descriptions.Term = _descriptionTerm2.default;
Descriptions.Description = _descriptionDescription2.default;