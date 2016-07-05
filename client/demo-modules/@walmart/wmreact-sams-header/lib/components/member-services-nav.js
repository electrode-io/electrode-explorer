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

var _flyout = require("@walmart/wmreact-containers/lib/components/flyout");

var _flyout2 = _interopRequireDefault(_flyout);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";

var MemberServicesNav = function (_Component) {
  (0, _inherits3.default)(MemberServicesNav, _Component);

  function MemberServicesNav(props) {
    (0, _classCallCheck3.default)(this, MemberServicesNav);
    return (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));
  }

  MemberServicesNav.prototype._getClassNames = function _getClassNames(className, dropdown) {
    return (0, _classnames2.default)("header-GlobalAccountFlyout-link", className, {
      "dropdown-link": dropdown
    });
  };

  MemberServicesNav.prototype._renderLink = function _renderLink(_ref, id, className) {
    var link = _ref.link;
    var dropdown = _ref.dropdown;
    var uid = link.uid;
    var title = link.title;
    var linkText = link.linkText;
    var value = link.clickThrough.value;

    return _react2.default.createElement(
      _link2.default,
      {
        className: this._getClassNames(className, dropdown),
        "data-uid": uid,
        href: value,
        alt: title,
        key: uid },
      linkText
    );
  };

  MemberServicesNav.prototype._renderFlyoutLink = function _renderFlyoutLink(linkDetails, index) {
    var linkId = "flyout-link-" + index;
    var link = linkDetails.link;

    var linkClass = "display-block";
    return _react2.default.createElement(
      "div",
      { key: index },
      this._renderLink({ link: link, dropdown: false }, linkId, linkClass)
    );
  };

  MemberServicesNav.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement(
      "div",
      { className: "header-member-services-nav" },
      _react2.default.createElement(
        _flyout2.default,
        { className: "flyout-trigger dropdown-link",
          triggerText: this.props.moduleData.name, direction: "bottom",
          hover: true, size: "narrow" },
        this.props.moduleData.configs.menuLinks.map(function (link, index) {
          return _this2._renderFlyoutLink(link, index);
        })
      )
    );
  };

  return MemberServicesNav;
}(_react.Component);

MemberServicesNav.displayName = "MemberServicesNav";
MemberServicesNav.propTypes = {
  moduleData: _react.PropTypes.shape({
    name: _react.PropTypes.string,
    type: _react.PropTypes.string,
    moduleId: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      menuLinks: _react.PropTypes.array.isRequired
    }).isRequired
  }).isRequired,
  className: _react.PropTypes.string
};
MemberServicesNav.defaultProps = {
  moduleData: {
    name: "",
    type: "",
    moduleId: "",
    configs: {}
  },
  className: ""
};
MemberServicesNav.displayName = "MemberServicesNav";
exports.default = MemberServicesNav;