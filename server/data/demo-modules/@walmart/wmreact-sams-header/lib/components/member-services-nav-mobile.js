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

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

var _msnUidSwap = require("../utils/msn-uid-swap");

var _msnUidSwap2 = _interopRequireDefault(_msnUidSwap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MAIN_CLASS_NAME = "header-GlobalLefthandNavMobile";
var ENTRY_CLASS_NAME = "header-OffcanvasNav-entry";

var MemberServicesNavMobile = function (_Component) {
  (0, _inherits3.default)(MemberServicesNavMobile, _Component);

  function MemberServicesNavMobile(props) {
    (0, _classCallCheck3.default)(this, MemberServicesNavMobile);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      menuLinks: null,
      expanded: false, // render departments initially only for bots
      link: null,
      renderLinks: true,
      selected: false
    };

    _this._toggleExpanded = _this._toggleExpanded.bind(_this);
    _this._clearLinks = _this._clearLinks.bind(_this);

    return _this;
  }

  MemberServicesNavMobile.prototype._getClassNames = function _getClassNames(className, _ref) {
    var _classNames;

    var expanded = _ref.expanded;
    var menuLinks = _ref.menuLinks;
    var link = _ref.link;

    return (0, _classnames2.default)(MAIN_CLASS_NAME, className, (_classNames = {
      "is-collapsed": menuLinks === null && !expanded
    }, _classNames[MAIN_CLASS_NAME + "--menuLinksSelected"] = menuLinks !== null, _classNames[MAIN_CLASS_NAME + "--linkSelected"] = link !== null, _classNames));
  };

  MemberServicesNavMobile.prototype._getEntryClassName = function _getEntryClassName(depth, index, selected) {
    var _classNames2;

    return (0, _classnames2.default)(ENTRY_CLASS_NAME, (_classNames2 = {}, _classNames2[MAIN_CLASS_NAME + "-menuLinksSelected"] = depth === 0, _classNames2[MAIN_CLASS_NAME + "-linkSelected"] = depth === 1, _classNames2["is-selected"] = index !== null && index === selected, _classNames2));
  };

  MemberServicesNavMobile.prototype._getButtonClassName = function _getButtonClassName(depth) {
    var _classNames3;

    return (0, _classnames2.default)("header-OffcanvasNav-entry-gray", (_classNames3 = {}, _classNames3[MAIN_CLASS_NAME + "-superDept-account"] = depth === 0, _classNames3["is-selected"] = this.state.selected, _classNames3));
  };

  MemberServicesNavMobile.prototype._setLink = function _setLink(index) {
    if (this.state.link === null) {
      this.setState({
        link: index
      });
    }
  };

  MemberServicesNavMobile.prototype._toggleExpanded = function _toggleExpanded() {
    this.props.onMenuLinkClick();
    this.setState({
      expanded: !this.state.expanded,
      renderLinks: !this.state.renderLinks,
      selected: true
    });
  };

  MemberServicesNavMobile.prototype._clearLinks = function _clearLinks() {
    var _this2 = this;

    this.setState({ expanded: !this.state.expanded,
      renderLinks: !this.state.renderLinks,
      selected: false }, function () {
      _this2.props.onMenuLinkClick();
    });
  };

  MemberServicesNavMobile.prototype._renderLinks = function _renderLinks(link, _ref2) {
    var depth = _ref2.depth;
    var index = _ref2.index;
    var uid = link.uid;
    var title = link.title;
    var linkText = link.linkText;
    var value = link.clickThrough.value;

    return _react2.default.createElement(
      _link2.default,
      {
        key: index,
        className: this._getEntryClassName(depth, null, null),
        "data-uid": uid,
        alt: title,
        href: value
      },
      linkText
    );
  };

  MemberServicesNavMobile.prototype._renderMenuLinks = function _renderMenuLinks(menuLinks) {
    var _this3 = this;

    var expanded = this.state.expanded;

    if (expanded) {
      return menuLinks.map(function (link, index) {
        return _react2.default.createElement(
          "div",
          { key: index },
          _this3._renderLinks(link.link, { depth: 2, index: index })
        );
      });
    }
  };

  MemberServicesNavMobile.prototype._renderAllMenuLinks = function _renderAllMenuLinks(menuLinks, _ref3) {
    var renderLinks = _ref3.renderLinks;

    var index = 1;
    return _react2.default.createElement(
      "div",
      { key: index },
      this._renderBack(this.state),
      _react2.default.createElement(
        _button2.default,
        {
          fakelink: true,
          onClick: this._toggleExpanded,
          className: this._getButtonClassName(0, index, menuLinks) },
        "Member Services",
        renderLinks && _react2.default.createElement(_icon2.default, { className: "pull-right", name: "angle-right" })
      ),
      this._renderMenuLinks(menuLinks)
    );
  };

  MemberServicesNavMobile.prototype._renderBack = function _renderBack() {
    if (this.state.expanded === true) {
      return _react2.default.createElement(
        _button2.default,
        {
          className: ENTRY_CLASS_NAME + " " + ENTRY_CLASS_NAME + "--top",
          fakelink: true,
          onClick: this._clearLinks },
        _react2.default.createElement(_icon2.default, { className: "pull-left", name: "angle-left" }),
        "Back to main menu"
      );
    }
    return null;
  };

  MemberServicesNavMobile.prototype.render = function render() {
    var _props = this.props;
    var _props$moduleData = _props.moduleData;
    var type = _props$moduleData.type;
    var moduleId = _props$moduleData.moduleId;
    var configs = _props$moduleData.configs;
    var className = _props.className;

    var _generateMemberServic = (0, _msnUidSwap2.default)(configs);

    var menuLinks = _generateMemberServic.menuLinks;


    return _react2.default.createElement(
      _collectorContext2.default,
      { moduleId: moduleId },
      _react2.default.createElement(
        "div",
        {
          className: this._getClassNames(className, this.state),
          "data-module": type,
          "data-module-id": moduleId },
        _react2.default.createElement(
          "div",
          { className: MAIN_CLASS_NAME + "-menuLinks" },
          this._renderAllMenuLinks(menuLinks, this.state)
        )
      )
    );
  };

  return MemberServicesNavMobile;
}(_react.Component);

MemberServicesNavMobile.displayName = "MemberServicesNavMobile";

MemberServicesNavMobile.propTypes = {
  /**
  Data for configuring the component. Typically coming from Tempo. Contains department data.
  */
  moduleData: _react.PropTypes.shape({
    type: _react.PropTypes.string,
    moduleId: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      menuLinks: _react.PropTypes.array.isRequired
    }).isRequired
  }).isRequired,
  /**
  Callback to execute after a super department is clicked
  */
  onMenuLinkClick: _react.PropTypes.func,
  /**
  Callback to execute after back button is clicked
  */
  onBackClick: _react.PropTypes.func,
  /**
  Any additional classes for styling.
  */
  className: _react.PropTypes.string,
  /**
  Automation ID base string
  */
  dataAutomationId: _react.PropTypes.string,
  /**
  Check for web crawler bots.
  */
  isBot: _react.PropTypes.bool
};

MemberServicesNavMobile.defaultProps = {
  moduleData: {
    type: "",
    moduleId: "",
    configs: {}
  },
  onMenuLinkClick: function onMenuLinkClick() {},
  onBackClick: function onBackClick() {},
  className: "",
  dataAutomationId: "header-MemberServicesNavMobile",
  isBot: false
};

MemberServicesNavMobile.contextTypes = {
  analytics: _react.PropTypes.object
};

exports.default = MemberServicesNavMobile;