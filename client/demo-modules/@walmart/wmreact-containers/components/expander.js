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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
An expandable/contractable container.
@examples
```jsx
<Expander expandText="Expand">
  <h1>Expanded!</h1>
</Expander>
```
@component Expander
@import {Expander}
@playground
Expander
```
<Expander expandText="Expand">
  <h1>Expanded!</h1>
</Expander>
```
*/

var Expander = function (_Component) {
  _inherits(Expander, _Component);

  function Expander(props) {
    _classCallCheck(this, Expander);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Expander).call(this, props));

    _this.state = {
      expanded: props.expanded || false
    };
    _this._onExpand = _this._onExpand.bind(_this);
    return _this;
  }

  _createClass(Expander, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.expanded) {
        this.setState({ expanded: nextProps.expanded });
      }
    }
  }, {
    key: "_onExpand",
    value: function _onExpand(e) {
      e.preventDefault();
      this.setState({ expanded: !this.state.expanded });
    }
  }, {
    key: "render",
    value: function render() {
      var extras = {
        "expanded": this.state.expanded
      };

      return _react2.default.createElement(
        "div",
        _extends({
          className: (0, _classnames2.default)("expander", extras, this.props.hidden ? "hide-content" : "", this.props.className)
        }, this.props),
        _react2.default.createElement(
          "a",
          { className: "expander-toggle", href: "#", onClick: this._onExpand },
          this.props.expandText
        ),
        _react2.default.createElement(
          "div",
          { className: "expander-content module" },
          this.props.children
        )
      );
    }
  }]);

  return Expander;
}(_react.Component);

Expander.displayName = "Expander";

Expander.propTypes = {
  /**
  True if the container is expanded
  */
  expanded: _react2.default.PropTypes.bool,
  /**
  The text for the expand control
  */
  expandText: _react2.default.PropTypes.node,
  className: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node,
  hidden: _react2.default.PropTypes.bool
};

Expander.defaultProps = {
  expanded: false
};

exports.default = Expander;