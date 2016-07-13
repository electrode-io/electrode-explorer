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

var _separator = require("@walmart/wmreact-containers/lib/components/separator");

var _separator2 = _interopRequireDefault(_separator);

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MAIN_CLASS_NAME = "header-GlobalLefthandNavMobile"; /*
                                                         eslint-disable
                                                        */

var ENTRY_CLASS_NAME = "header-OffcanvasNav-entry";

var GlobalAccountNavMobile = function (_Component) {
  (0, _inherits3.default)(GlobalAccountNavMobile, _Component);

  function GlobalAccountNavMobile(props) {
    (0, _classCallCheck3.default)(this, GlobalAccountNavMobile);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      expanded: false,
      renderLinks: true,
      selected: false

    };
    _this._toggleExpanded = _this._toggleExpanded.bind(_this);
    _this._clearLinks = _this._clearLinks.bind(_this);
    return _this;
  }

  GlobalAccountNavMobile.prototype._getClassNames = function _getClassNames(className) {
    return (0, _classnames2.default)(MAIN_CLASS_NAME, className);
  };

  GlobalAccountNavMobile.prototype._getEntryClassName = function _getEntryClassName(depth, index, selected) {
    var _classNames;

    return (0, _classnames2.default)(ENTRY_CLASS_NAME, (_classNames = {}, _classNames[MAIN_CLASS_NAME + "-superDept"] = depth === 0, _classNames["is-selected"] = index !== null && index === selected, _classNames));
  };

  GlobalAccountNavMobile.prototype._getButtonClassName = function _getButtonClassName(depth) {
    var _classNames2;

    return (0, _classnames2.default)("header-OffcanvasNav-entry-gray", (_classNames2 = {}, _classNames2[MAIN_CLASS_NAME + "-superDept-account"] = depth === 0, _classNames2["is-selected"] = this.state.selected, _classNames2));
  };

  GlobalAccountNavMobile.prototype._clearLinks = function _clearLinks() {
    var _this2 = this;

    this.setState({
      expanded: !this.state.expanded,
      renderLinks: !this.state.renderLinks,
      selected: false
    }, function () {
      _this2.props.onAccountLinkClick();
    });
  };

  GlobalAccountNavMobile.prototype._toggleExpanded = function _toggleExpanded() {
    this.props.onAccountLinkClick();
    this.setState({
      expanded: !this.state.expanded,
      renderLinks: !this.state.renderLinks,
      selected: !this.state.selected
    });
  };

  GlobalAccountNavMobile.prototype._renderBack = function _renderBack() {
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
  };

  GlobalAccountNavMobile.prototype._renderLink = function _renderLink(link, _ref) {
    var depth = _ref.depth;
    var index = _ref.index;
    var title = link.title;
    var value = link.clickThrough.value;

    return _react2.default.createElement(
      _link2.default,
      {
        key: index,
        className: this._getEntryClassName(depth, 0, 0),
        alt: title,
        href: value },
      title
    );
  };

  GlobalAccountNavMobile.prototype._renderMenuItems = function _renderMenuItems(section) {
    var _this3 = this;

    if (this.state.expanded === true) {
      return section.map(function (sectionItem, index) {
        return _react2.default.createElement(
          "div",
          { key: index },
          _this3._renderLink(sectionItem.menu, { depth: 0, index: index })
        );
      });
    }
  };

  GlobalAccountNavMobile.prototype._renderSeperator = function _renderSeperator() {
    if (this.state.expanded === true) {
      return _react2.default.createElement(_separator2.default, null);
    }
  };

  GlobalAccountNavMobile.prototype.render = function render() {
    var _props = this.props;
    var _props$moduleData = _props.moduleData;
    var type = _props$moduleData.type;
    var moduleId = _props$moduleData.moduleId;
    var _props$moduleData$con = _props$moduleData.configs;
    var sectionOne = _props$moduleData$con.sectionOne;
    var sectionTwo = _props$moduleData$con.sectionTwo;
    var sectionThree = _props$moduleData$con.sectionThree;
    var className = _props.className;
    var _state = this.state;
    var renderLinks = _state.renderLinks;
    var expanded = _state.expanded;

    return _react2.default.createElement(
      _collectorContext2.default,
      { moduleId: moduleId },
      _react2.default.createElement(
        "div",
        {
          className: this._getClassNames(className),
          "data-module": type,
          "data-module-id": moduleId },
        _react2.default.createElement(
          "div",
          null,
          this._renderBack(this.state),
          _react2.default.createElement(
            _button2.default,
            {
              fakelink: true,
              onClick: this._toggleExpanded,
              className: this._getButtonClassName(0) },
            "Your Account",
            renderLinks && _react2.default.createElement(_icon2.default, { className: "pull-right", name: "angle-right" })
          ),
          this._renderMenuItems(sectionOne),
          this._renderSeperator(expanded),
          this._renderMenuItems(sectionTwo),
          this._renderSeperator(expanded),
          this._renderMenuItems(sectionThree)
        )
      )
    );
  };

  return GlobalAccountNavMobile;
}(_react.Component);

GlobalAccountNavMobile.displayName = "GlobalAccountNavMobile";

GlobalAccountNavMobile.propTypes = {
  moduleData: _react.PropTypes.shape({
    type: _react.PropTypes.string,
    moduleId: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      sectionOne: _react.PropTypes.array,
      sectionTwo: _react.PropTypes.array,
      sectionThree: _react.PropTypes.array
    }).isRequired
  }).isRequired,
  onAccountLinkClick: _react.PropTypes.func,
  onBackClick: _react.PropTypes.func,
  className: _react.PropTypes.string
};

GlobalAccountNavMobile.defaultProps = {
  moduleData: {
    type: "",
    moduleId: "",
    configs: {
      sectionOne: [],
      sectionTwo: [],
      sectionThree: []
    }
  },
  onAccountLinkClick: function onAccountLinkClick() {},
  onBackClick: function onBackClick() {},
  className: ""
};

GlobalAccountNavMobile.contextTypes = {
  analytics: _react.PropTypes.object
};

exports.default = GlobalAccountNavMobile;