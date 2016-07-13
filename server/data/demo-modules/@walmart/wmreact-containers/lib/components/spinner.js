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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
  (0, _inherits3.default)(Spinner, _React$Component);

  function Spinner(props) {
    (0, _classCallCheck3.default)(this, Spinner);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = {
      loading: props.loading
    };
    _this.timeout = null;
    return _this;
  }

  Spinner.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
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
  };

  Spinner.prototype._renderSpinner = function _renderSpinner() {
    var backdropClass = this.props.fixed ? "spinner-backdrop spinner-backdrop-fixed" : "spinner-backdrop";
    return _react2.default.createElement(
      "div",
      { className: backdropClass },
      _react2.default.createElement("div", { className: "spinner" })
    );
  };

  Spinner.prototype.render = function render() {
    var markup = null;
    if (this.state.loading) {
      markup = this._renderSpinner();
    }
    return markup;
  };

  return Spinner;
}(_react2.default.Component); /* global clearTimeout, setTimeout */


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