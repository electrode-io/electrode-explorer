"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _collapsable = require("@walmart/wmreact-layout/lib/components/collapsable");

var _collapsable2 = _interopRequireDefault(_collapsable);

var _layout = require("@walmart/wmreact-layout/lib/components/layout");

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
/* eslint valid-jsdoc:0 */

/**
Tray container component.
@examples
```jsx
var TrayExample = React.createClass({
  showTray() {
    this.refs.tray.openTray();
  },
  render() {
  return (
      <div>
        <Tray ref="tray"
          isOpen={false}>
          <h1>Hi!</h1>
        </Tray>
        <a href="javascript:void(0)" onClick={this.showTray}>
          Show Tray
        </a>
      </div>
    )
  }
});

React.render(<TrayExample/>, mountNode);
```
@component Tray
@import {Tray}
@playground
Tray
!noRenderFalse!
```
var TrayExample = React.createClass({
  showTray() {
    this.refs.tray.openTray();
  },
  render() {
  return (
      <div>
        <Tray ref="tray"
          isOpen={false}>
          <h1>Hi!</h1>
        </Tray>
        <a href="javascript:void(0)" onClick={this.showTray}>
          Show Tray
        </a>
      </div>
    )
  }
});

React.render(<TrayExample/>, mountNode);
```
*/

var Tray = function (_Component) {
  _inherits(Tray, _Component);

  function Tray(props) {
    _classCallCheck(this, Tray);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Tray).call(this, props));

    _this.state = {
      isOpen: _this.props.isOpen
    };

    _this.renderButtons = _this.renderButtons.bind(_this);
    _this.openTray = _this.openTray.bind(_this);
    _this.closeTray = _this.closeTray.bind(_this);
    return _this;
  }

  /**
  Opens the tray
  */


  _createClass(Tray, [{
    key: "openTray",
    value: function openTray() {
      this.setState({
        isOpen: true
      });
    }

    /**
    Closes the tray
    */

  }, {
    key: "closeTray",
    value: function closeTray() {
      this.setState({
        isOpen: false
      });
    }
  }, {
    key: "componentWillReceiveProps",
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.isOpen && nextProps.isOpen !== this.props.isOpen) {
        this.setState({
          isOpen: nextProps.isOpen
        });
      }
    }
  }, {
    key: "renderButtons",
    value: function renderButtons() {
      var onCancel = this.props.onCancel ? this.props.onCancel : this.closeTray;
      var onDone = this.props.onDone ? this.props.onDone : this.closeTray;

      var cancelButtonClasses = ["tray-button", "width-full", this.props.cancelButtonClass];

      var doneButtonClasses = ["tray-button", "width-full", this.props.hideCancelButton ? "" : "x-small-margin-top", this.props.doneButtonClass];

      var cancelButton = _react2.default.createElement(
        _button2.default,
        { className: cancelButtonClasses.join(" "), onClick: onCancel, inverse: true },
        this.props.cancelButtonText
      );

      var doneButton = _react2.default.createElement(
        _button2.default,
        { className: doneButtonClasses.join(" "), onClick: onDone, primary: true },
        this.props.doneButtonText
      );

      var buttonsHidden = this.props.hideDoneButton && this.props.hideCancelButton;

      var buttonColumns = this.props.hideDoneButton || this.props.hideCancelButton ? 1 : 2;

      return this.props.hideButtons || buttonsHidden ? null : _react2.default.createElement(
        _layout2.default,
        { small: buttonColumns, padded: true },
        this.props.hideCancelButton ? null : cancelButton,
        this.props.hideDoneButton ? null : doneButton
      );
    }
  }, {
    key: "render",
    value: function render() {
      var style = this.props.scrollable ? {
        overflow: "scroll"
      } : null;

      var trayHeaderClasses = ["tray-header", this.props.trayHeaderClass];

      var trayContentClasses = ["tray-content-wrapper", this.props.trayContentClass];

      var header = this.props.header ? _react2.default.createElement(
        "div",
        { className: trayHeaderClasses.join(" ") },
        this.props.header
      ) : null;

      return _react2.default.createElement(
        _collapsable2.default,
        { className: "tray-wrapper", isOpen: this.state.isOpen, hidden: !!this.props.hidden },
        _react2.default.createElement(
          "div",
          { className: trayContentClasses.join(" ") },
          this.renderButtons(),
          header,
          _react2.default.createElement(
            "div",
            { style: style },
            this.props.children
          )
        )
      );
    }
  }]);

  return Tray;
}(_react.Component);

Tray.displayName = "Tray";

Tray.propTypes = {
  /**
    This is required, and is what triggers the tray showing and hidding
  */
  isOpen: _react.PropTypes.bool.isRequired,
  /**
    Optional text for "Cancel" button (or left button)
  */
  cancelButtonText: _react.PropTypes.string,
  /**
    CSS class for the cancel button
  */
  cancelButtonClass: _react.PropTypes.string,
  /**
    Optional text for "Done" button (or right button)
  */
  doneButtonText: _react.PropTypes.string,
  /**
    CSS class for the done button
  */
  doneButtonClass: _react.PropTypes.string,
  /**
    CSS class for the tray header
  */
  trayHeaderClass: _react.PropTypes.string,
  /**
    CSS class for the tray content
  */
  trayContentClass: _react.PropTypes.string,
  /**
    The header node
  */
  header: _react.PropTypes.node,
  /**
    True if we should hide both buttons
  */
  hideButtons: _react.PropTypes.bool,
  /**
    True if we should hide the done button
  */
  hideDoneButton: _react.PropTypes.bool,
  /**
    True if we should hide the cancel button
  */
  hideCancelButton: _react.PropTypes.bool,
  /**
    True if this is scrollable
  */
  scrollable: _react.PropTypes.bool,
  /**
    Optional function that "Cancel" button will call
  */
  onCancel: _react.PropTypes.func,
  /**
    Optional function that "Done" button will call
  */
  onDone: _react.PropTypes.func,
  /**
    True if the tray is hidden
  */
  hidden: _react.PropTypes.bool,
  children: _react.PropTypes.node
};

Tray.defaultProps = {
  cancelButtonText: "Cancel",
  cancelButtonClass: "",
  doneButtonText: "Done",
  doneButtonClass: "",
  trayHeaderClass: "",
  trayContentClass: "",
  header: null,
  hideButtons: false,
  hideDoneButton: false,
  hideCancelButton: false,
  scrollable: false
};

exports.default = Tray;