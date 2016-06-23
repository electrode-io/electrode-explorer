"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* global clearTimeout, setTimeout */


/**
Spinner component.
@examples
```jsx
var SpinnerExample = React.createClass({
  render() {
    return(
      <Flyout triggerText='Click' direction='top'>
        <div className='spinner-demo'>
          <Spinner loading={true} fixed={false}/>
        </div>
      </Flyout>)
  }
});

React.render(<SpinnerExample/>, mountNode);
```
@component Spinner
@import {Spinner}
@synonym loading
@playground
Spinner
!noRenderFalse!
```
var SpinnerExample = React.createClass({
  render() {
    return(
      <Flyout triggerText='Click' direction='top'>
        <div className='spinner-demo'>
          <Spinner loading={true} fixed={false}/>
        </div>
      </Flyout>)
  }
});

React.render(<SpinnerExample/>, mountNode);
```
*/

var Spinner = function (_React$Component) {
  _inherits(Spinner, _React$Component);

  function Spinner(props) {
    _classCallCheck(this, Spinner);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Spinner).call(this, props));

    _this.state = {
      loading: props.loading
    };
    _this.timeout = null;
    return _this;
  }

  _createClass(Spinner, [{
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      var self = this;
      if (nextProps.loading === true) {
        this.timeout = setTimeout(function () {
          self.setState({
            loading: true
          });
        }, self.props.timeout);
      } else {
        if (this.timeout) {
          clearTimeout(this.timeout);
        }

        this.setState({
          loading: false
        });
      }
    }
  }, {
    key: "_renderSpinner",
    value: function _renderSpinner() {
      var backdropClass = this.props.fixed ? "spinner-backdrop spinner-backdrop-fixed" : "spinner-backdrop";
      return _react2.default.createElement(
        "div",
        { className: backdropClass },
        _react2.default.createElement("div", { className: "spinner" })
      );
    }
  }, {
    key: "render",
    value: function render() {
      var markup = null;
      if (this.state.loading) {
        markup = this._renderSpinner();
      }
      return markup;
    }
  }]);

  return Spinner;
}(_react2.default.Component);

Spinner.propTypes = {
  /**
  True if we should show the spinner to indicate loading
  */
  loading: _react2.default.PropTypes.bool,
  /**
  Time in milliseconds before the spinner appears
  */
  timeout: _react2.default.PropTypes.number,
  /**
  True if the spinner should take the entire screen (display fixed)
  */
  fixed: _react2.default.PropTypes.bool
};

exports.default = Spinner;