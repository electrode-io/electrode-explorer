"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _descriptionTerm = require("./description-term");

var _descriptionTerm2 = _interopRequireDefault(_descriptionTerm);

var _descriptionDescription = require("./description-description");

var _descriptionDescription2 = _interopRequireDefault(_descriptionDescription);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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
  _inherits(Descriptions, _React$Component);

  function Descriptions() {
    _classCallCheck(this, Descriptions);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Descriptions).apply(this, arguments));
  }

  _createClass(Descriptions, [{
    key: "render",
    value: function render() {
      var extras = {
        "copy-mini": this.props.copyMini,
        "copy-small": this.props.copySmall,
        "dl-horizontal": this.props.horizontal,
        "dl-emphasize": this.props.emphasize
      };
      return _react2.default.createElement(
        "dl",
        _extends({
          className: (0, _classnames2.default)(extras, this.props.className, this.props.hidden ? "hide-content" : "")
        }, this.props),
        this.props.children
      );
    }
  }]);

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