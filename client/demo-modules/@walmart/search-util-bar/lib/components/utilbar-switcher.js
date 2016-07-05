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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 The Switcher component flyout.
 For example this is how we use this component.
 ```jsx
 <Switcher
   isGridView={false}
   onChange={(showGrid)=> {console.log(showGrid)}}
 />
 ```
 @import {Switcher}
 @component Switcher
 @playground
 Search-Util-Bar-Switcher
 ```
 <Switcher
   isGridView={false}
   onChange={(showGrid)=> {console.log(showGrid)}}
  />
 ```
 */

var Switcher = function (_Component) {
  (0, _inherits3.default)(Switcher, _Component);

  function Switcher(props) {
    (0, _classCallCheck3.default)(this, Switcher);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      showGridView: props.isGridView || false
    };
    return _this;
  }

  Switcher.prototype._handleViewSwitch = function _handleViewSwitch() {
    var onChange = this.props.onChange;
    var showGridView = this.state.showGridView;

    var state = { showGridView: !showGridView };

    this.setState(state, function () {
      return onChange(state);
    });
  };

  Switcher.prototype.render = function render() {
    var showGridView = this.state.showGridView;


    var gridClasses = (0, _classnames2.default)("switcher-grid", {
      "active": showGridView
    });

    var listClasses = (0, _classnames2.default)("switcher-list", {
      "active": !showGridView
    });

    return _react2.default.createElement(
      "div",
      { className: "desktop-bar-switcher" },
      _react2.default.createElement(
        "div",
        { className: gridClasses,
          onClick: showGridView ? null : this._handleViewSwitch.bind(this) },
        _react2.default.createElement("i", { className: "wmicon wmicon-grid" })
      ),
      _react2.default.createElement(
        "div",
        { className: listClasses,
          onClick: showGridView ? this._handleViewSwitch.bind(this) : null },
        _react2.default.createElement("i", { className: "wmicon wmicon-menu" })
      )
    );
  };

  return Switcher;
}(_react.Component);

exports.default = Switcher;


Switcher.displayName = "SearchUtilBarSwitcher";

Switcher.propTypes = {
  isGridView: _react.PropTypes.bool,
  onChange: _react.PropTypes.func
};