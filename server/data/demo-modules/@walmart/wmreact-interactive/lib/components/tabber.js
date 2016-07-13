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

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _tabberControl = require("./tabber-control");

var _tabberControl2 = _interopRequireDefault(_tabberControl);

var _tabberControls = require("./tabber-controls");

var _tabberControls2 = _interopRequireDefault(_tabberControls);

var _tabberContent = require("./tabber-content");

var _tabberContent2 = _interopRequireDefault(_tabberContent);

var _tabberSection = require("./tabber-section");

var _tabberSection2 = _interopRequireDefault(_tabberSection);

var _fireUiEvent = require("@walmart/wmreact-analytics/lib/helpers/fire-ui-event");

var _fireUiEvent2 = _interopRequireDefault(_fireUiEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Tabber component
@examples
```jsx
<Tabber activeTabClass="active" initialActiveTab={0}>
  <Tabber.Controls>
    <Tabber.Control>
      <Button badge={true} badgeAlt={true}>
        Tab 1
      </Button>
    </Tabber.Control>

    <Tabber.Control>
      <Button badge={true} badgeAlt={true} className="m-margin-left">
        Tab 2
      </Button>
    </Tabber.Control>
  </Tabber.Controls>

  <Tabber.Content className="m-margin-top" autoHeight>
    <Tabber.Section>
      <p>Tab 1 content</p>
    </Tabber.Section>

    <Tabber.Section>
      <p>Tab 2 other content</p>
    </Tabber.Section>
  </Tabber.Content>
</Tabber>
```
@component Tabber
@import {Tabber}
@references Tabber
@playground
Tabber
```
<Tabber activeTabClass="active" initialActiveTab={0}>
  <Tabber.Controls>
    <Tabber.Control>
      <Button badge={true} badgeAlt={true}>
        Tab 1
      </Button>
    </Tabber.Control>

    <Tabber.Control>
      <Button badge={true} badgeAlt={true} className="m-margin-left">
        Tab 2
      </Button>
    </Tabber.Control>
  </Tabber.Controls>

  <Tabber.Content className="m-margin-top" autoHeight>
    <Tabber.Section>
      <p>Tab 1 content</p>
    </Tabber.Section>

    <Tabber.Section>
      <p>Tab 2 other content</p>
    </Tabber.Section>
  </Tabber.Content>
</Tabber>
```
*/

var Tabber = function (_React$Component) {
  (0, _inherits3.default)(Tabber, _React$Component);

  function Tabber(props) {
    (0, _classCallCheck3.default)(this, Tabber);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = {
      activeTab: _this.props.initiallyClosed ? null : _this.props.initialActiveTab
    };

    _this._handleDocClick = _this._handleDocClick.bind(_this);
    _this.setActiveTab = _this.setActiveTab.bind(_this);
    _this._addActiveTab = _this._addActiveTab.bind(_this);
    _this._addDocClickListener = _this._addDocClickListener.bind(_this);
    _this._removeDocClickListener = _this._removeDocClickListener.bind(_this);
    _this._closeTabs = _this._closeTabs.bind(_this);
    return _this;
  }

  Tabber.prototype.componentWillUnmount = function componentWillUnmount() {
    this._removeDocClickListener();
  };

  Tabber.prototype._addDocClickListener = function _addDocClickListener() {
    document.addEventListener("click", this._handleDocClick); // eslint-disable-line no-undef
  };

  Tabber.prototype._removeDocClickListener = function _removeDocClickListener() {
    document.removeEventListener("click", this._handleDocClick); // eslint-disable-line no-undef
  };

  Tabber.prototype._handleDocClick = function _handleDocClick(ev) {
    var tabberEl = _reactDom2.default.findDOMNode(this);

    (0, _fireUiEvent2.default)(this, ev, { eventType: "closeAll" });

    if (!tabberEl.contains(ev.target)) {
      this._closeTabs();
    }
  };

  Tabber.prototype._closeTabs = function _closeTabs() {
    this.setState({
      activeTab: null
    });

    this._removeDocClickListener();
  };

  Tabber.prototype.setActiveTab = function setActiveTab(tabRef, event) {
    (0, _fireUiEvent2.default)(this, event, { eventType: "closeAll", state: this.state });

    if (this.state.activeTab !== tabRef) {
      this.setState({
        activeTab: tabRef
      });

      if (this.props.closeOnDocClick) {
        this._removeDocClickListener();
        this._addDocClickListener();
      }
    } else if (this.props.closeable) {
      this._closeTabs();
    }
  };

  Tabber.prototype._addActiveTab = function _addActiveTab(component) {
    var tabberProps = {
      activeTab: this.state.activeTab,
      setActiveTab: this.setActiveTab,
      activeTabClass: this.props.activeTabClass
    };
    return _react2.default.cloneElement(component, tabberProps);
  };

  Tabber.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: this.props.className },
      _react2.default.Children.map(this.props.children, this._addActiveTab)
    );
  };

  return Tabber;
}(_react2.default.Component);

exports.default = Tabber;


Tabber.propTypes = {
  /**
  The intially active tab
  */
  initialActiveTab: _react2.default.PropTypes.number.isRequired,
  /**
  The class to apply to the active tab
  */
  activeTabClass: _react2.default.PropTypes.string.isRequired,
  /**
  True if tabber starts out initially closed
  */
  initiallyClosed: _react2.default.PropTypes.bool.isRequired,
  /**
  True if the Tabber is closeable
  */
  closeable: _react2.default.PropTypes.bool.isRequired,
  /**
  True if we should close on a document click outside the tabber
  */
  closeOnDocClick: _react2.default.PropTypes.func,
  className: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node
};

Tabber.contextTypes = {
  analytics: _react2.default.PropTypes.object
};

Tabber.defaultProps = {
  initialActiveTab: 0,
  activeTabClass: "is-active",
  initiallyClosed: false,
  closeable: false
};

Tabber.Control = _tabberControl2.default;
Tabber.Controls = _tabberControls2.default;
Tabber.Content = _tabberContent2.default;
Tabber.Section = _tabberSection2.default;