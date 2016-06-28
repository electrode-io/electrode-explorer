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

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _stickyNavRow = require("./sticky-nav-row");

var _stickyNavRow2 = _interopRequireDefault(_stickyNavRow);

var _fixie = require("@walmart/wmreact-layout/lib/components/fixie");

var _fixie2 = _interopRequireDefault(_fixie);

var _clientWidth = require("@walmart/wmreact-layout/lib/components/helpers/client-width");

var _clientWidth2 = _interopRequireDefault(_clientWidth);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Basic Structure for Sticky Nav
<div>
  <StickyNav selected={0} minScreen="large">
    <StickNav.Row title="Foo" link="foo">content</StickyNav.Row>
    <StickNav.Row title="Bar" link="bar">content</StickyNav.Row>
    <StickNav.Row title="Baz" link="baz">content</StickyNav.Row>
  </StickyNav>
</div>
**/

var StickyNav = function (_Component) {
  (0, _inherits3.default)(StickyNav, _Component);

  function StickyNav(props) {
    (0, _classCallCheck3.default)(this, StickyNav);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      selected: props.selected,
      initYOffset: 44,
      tabAnchors: []
    };
    _this.requestAnimeId = null;
    _this.pending = false;
    _this.isSticky = false;
    if (!props.minScreen || props.minScreen && !_clientWidth2.default.isBelowBreakPoint(props.minScreen)) {
      _this.isSticky = true;
    }
    _this._checkTabInView = _this._checkTabInView.bind(_this);
    _this.onScroll = _this.onScroll.bind(_this);
    return _this;
  }

  StickyNav.prototype.onScroll = function onScroll() {
    var _this2 = this;

    if (this.pending) {
      return;
    }
    this.pending = true;
    this.requestAnimeId = window.requestAnimationFrame(function () {
      _this2.pending = false;
      _this2._checkTabInView();
    });
  };

  StickyNav.prototype._checkTabInView = function _checkTabInView() {
    var _this3 = this;

    var tabAnchors = this.state.tabAnchors;
    var pageYOffset = window.pageYOffset + this.state.initYOffset;

    if (!tabAnchors) {
      return;
    }

    tabAnchors.forEach(function (tabAnchor, index) {
      var tab = _reactDom2.default.findDOMNode(_this3.refs.stickyNav.children[index]);
      if (tab) {
        if (tab.offsetTop < pageYOffset && pageYOffset < tab.offsetTop + tab.offsetHeight) {
          _this3.setState({
            selected: index
          });
        }
      }
    });
  };

  StickyNav.prototype.componentDidMount = function componentDidMount() {
    if (this.isSticky) {
      this.onScroll();
      window.addEventListener("scroll", this.onScroll);
    }
  };

  StickyNav.prototype.componentWillUnmount = function componentWillUnmount() {
    window.cancelAnimationFrame(this.requestAnimeId);
    window.removeEventListener("scroll", this.onScroll);
  };

  StickyNav.prototype._clickTab = function _clickTab(index) {
    this.setState({
      selected: index
    });
  };

  StickyNav.prototype._renderLabels = function _renderLabels(child, index) {
    var classes = ["StickyNav-head-list-item", "display-block", "text-center", "font-semibold"];
    var tabAnchors = this.state.tabAnchors;

    if (this.state.selected === index) {
      classes.push("active");
    }

    tabAnchors.push(child.props.link);

    return _react2.default.createElement(
      "div",
      { key: index,
        className: "Grid-col u-size-1 u-size-3-12-m" },
      _react2.default.createElement(
        _link2.default,
        { href: "#" + child.props.link, className: (0, _classnames2.default)(classes),
          onClick: this._clickTab.bind(this, index) },
        child.props.title
      )
    );
  };

  StickyNav.prototype._renderTabs = function _renderTabs() {
    return _react2.default.createElement(
      "div",
      { className: "Grid" },
      this.props.children.map(this._renderLabels.bind(this))
    );
  };

  StickyNav.prototype._renderFixie = function _renderFixie() {
    if (this.isSticky) {
      return _react2.default.createElement(
        _fixie2.default,
        null,
        this._renderTabs()
      );
    }
  };

  StickyNav.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: "StickyNav" },
      _react2.default.createElement(
        "div",
        { className: "StickyNav-tabs" },
        this._renderFixie()
      ),
      _react2.default.createElement(
        "div",
        { ref: "stickyNav" },
        this.props.children
      )
    );
  };

  return StickyNav;
}(_react.Component);

StickyNav.propTypes = {
  /**
  *Children to render in container
  */
  children: _react2.default.PropTypes.node,

  tabs: _react2.default.PropTypes.array,

  selected: _react2.default.PropTypes.number,

  initYOffset: _react2.default.PropTypes.number,

  minScreen: _react2.default.PropTypes.string
};

StickyNav.Row = _stickyNavRow2.default;

exports.default = StickyNav;