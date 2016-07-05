"use strict";

exports.__esModule = true;

var _isEmpty2 = require("lodash/isEmpty");

var _isEmpty3 = _interopRequireDefault(_isEmpty2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

var _eyebrowUidSwap = require("../utils/eyebrow-uid-swap");

var _eyebrowUidSwap2 = _interopRequireDefault(_eyebrowUidSwap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENTRY_CLASS_NAME = "header-OffcanvasNav-entry";

var GlobalEyebrowNavMobile = function GlobalEyebrowNavMobile(_ref) {
  var _ref$moduleData = _ref.moduleData;
  var type = _ref$moduleData.type;
  var moduleId = _ref$moduleData.moduleId;
  var configs = _ref$moduleData.configs;
  var className = _ref.className;
  var userName = _ref.userName;

  var _getClassNames = function _getClassNames(cn) {
    return (0, _classnames2.default)("header-GlobalEyebrowNavMobile", cn);
  };

  var _renderLinks = function _renderLinks(element) {
    var title = element.title;
    var hideIfLoggedIn = element.hideIfLoggedIn;
    var _element$link = element.link;
    var uid = _element$link.uid;
    var value = _element$link.clickThrough.value;


    if (!(0, _isEmpty3.default)(userName) && hideIfLoggedIn === "true") {
      return null;
    }

    return _react2.default.createElement(
      _link2.default,
      {
        className: ENTRY_CLASS_NAME,
        "data-uid": uid,
        alt: title,
        href: value },
      title
    );
  };

  var _renderElements = function _renderElements(elements) {
    return elements.map(function (element) {
      return _react2.default.createElement(
        "div",
        { key: element.uid },
        _renderLinks(element)
      );
    });
  };

  var _generateEyeBrowNavUi = (0, _eyebrowUidSwap2.default)(configs);

  var elements = _generateEyeBrowNavUi.elements;


  return _react2.default.createElement(
    _collectorContext2.default,
    { moduleId: moduleId },
    _react2.default.createElement(
      "div",
      {
        className: _getClassNames(className),
        "data-module": type,
        "data-module-id": moduleId },
      _renderElements(elements)
    )
  );
};

GlobalEyebrowNavMobile.displayName = "GlobalEyebrowNavMobile";

GlobalEyebrowNavMobile.propTypes = {
  moduleData: _react.PropTypes.shape({
    type: _react.PropTypes.string,
    moduleId: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      elements: _react.PropTypes.array.isRequired
    }).isRequired
  }).isRequired,
  className: _react.PropTypes.string,
  dataAutomationId: _react.PropTypes.string,
  userName: _react.PropTypes.string
};

GlobalEyebrowNavMobile.defaultProps = {
  moduleData: {
    type: "",
    moduleId: ""
  },
  className: "",
  dataAutomationId: "header-GlobalEyebrowNavMobile"
};

GlobalEyebrowNavMobile.contextTypes = {
  analytics: _react.PropTypes.object
};

exports.default = GlobalEyebrowNavMobile;