"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _themeButton = require("../helper-components/theme-button");

var _themeButton2 = _interopRequireDefault(_themeButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

The banner message component has links costomisable by text, color, url font
weight and height.

```jsx
  <BannerMessage moduleData={
    {
      "type": "BannerMessage",
      "configs": {
        "height": "small",
        "themeColor": null,
        "headerText1": "Daily",
        "headerColor1": "#A1D7F8",
        "headerFontWeight1": "bold",
        "headerText2": "Center",
        "headerColor2": "#F07330",
        "headerFontWeight2": "bold",
        "headerText3": "Savings",
        "headerColor3": "#A1D7F8",
        "headerFontWeight3": "bold",
        "secondaryText1": "Your Hottest values for |date|.",
        "secondaryColor1": "#FFFFFF",
        "secondaryFontWeight1": "regular",
        "secondaryText2": null,
        "secondaryColor2": null,
        "secondaryFontWeight2": null,
        "secondaryText3": null,
        "secondaryColor3": null,
        "secondaryFontWeight3": null,
        "themeButton": {
          "linkText": "Shop All",
          "title": "Shop All",
          "clickThrough": {
            "type": "url",
            "value": "http://www.walmart.com/browse/3944_1078524_1231200"
          },
          "uid": "CLAM4z1m"
        },
        "themeButtonColor": null,
        "buttonTextColor": "#007dc6",
        "image": null,
        "mobileImage": null,
        "athenaEnabled": "true",
        "filterType": null,
        "moduleList": [],
        "useListForAll": null
      },
      "moduleId": "84c9fa92-2122-443a-89fe-b4a21c75d0d2"
    }
  } />
```
@import {BannerMessage}
@component BannerMessage
@playground
BannerMessage
*/

var BannerMessage = function (_Component) {
  (0, _inherits3.default)(BannerMessage, _Component);

  function BannerMessage() {
    (0, _classCallCheck3.default)(this, BannerMessage);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  BannerMessage.prototype._renderIcon = function _renderIcon(linkText) {
    var iconClass = (0, _classnames2.default)("display-inline-block", "BannerMessage-subHeader-linkArrow");

    if (linkText) {
      return _react2.default.createElement("i", { className: iconClass });
    }
  };

  BannerMessage.prototype._getClassNames = function _getClassNames(height) {
    var bannerClass = "BannerMessage BannerMessage--" + height;
    return (0, _classnames2.default)(bannerClass);
  };

  BannerMessage.prototype._isEmpty = function _isEmpty(text) {
    return text === "" || text === undefined || text === null;
  };

  BannerMessage.prototype._renderThemeButton = function _renderThemeButton(themeButton, dataAutomationId) {
    if (themeButton) {
      return _react2.default.createElement(_themeButton2.default, (0, _extends3.default)({}, themeButton, {
        showLinkText: false,
        className: "BannerMessage-button",
        dataAutomationId: dataAutomationId }));
    }
  };

  BannerMessage.prototype._processTextDate = function _processTextDate(text) {
    var date = new Date();
    var currentDate = date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
    var processedText = text.replace("\|date\|", currentDate);

    return processedText;
  };

  BannerMessage.prototype._renderMessageSegment = function _renderMessageSegment(segmentType, segmentIndex, configs) {
    var text = configs[segmentType + "Text" + segmentIndex];
    var textColor = configs[segmentType + "Color" + segmentIndex];
    var fontWeight = configs[segmentType + "FontWeight" + segmentIndex];

    var classes = (0, _classnames2.default)({ "font-bold": fontWeight === "bold" }, { "font-semibold": fontWeight === "semibold" }, { "font-normal": fontWeight === "regular" });

    if (!this._isEmpty(text)) {
      return _react2.default.createElement(
        "span",
        { className: classes, style: { color: textColor }, key: segmentIndex },
        " ",
        this._processTextDate(text)
      );
    }
  };

  BannerMessage.prototype._renderBannerMessageHeader = function _renderBannerMessageHeader(configs) {
    var _this2 = this;

    var height = configs.height;
    var headerText1 = configs.headerText1;
    var secondaryText1 = configs.secondaryText1;


    var classes = (0, _classnames2.default)("BannerMessage-headerText", { "display-block": height === "small" && !this._isEmpty(headerText1) && !this._isEmpty(secondaryText1)
    }, { "display-inline-block-m": height === "small" && !this._isEmpty(headerText1) && this._isEmpty(secondaryText1)
    }, { "display-inline-block-m font-semibold": height !== "small" });

    return _react2.default.createElement(
      "div",
      { className: classes },
      [1, 2, 3].map(function (value) {
        return _this2._renderMessageSegment("header", value, configs);
      })
    );
  };

  BannerMessage.prototype._renderSubText = function _renderSubText(configs) {
    var _this3 = this;

    var height = configs.height;
    var headerText1 = configs.headerText1;
    var themeButton = configs.themeButton;


    var classes = (0, _classnames2.default)("BannerMessage-subHeader", { "display-inline-block": height === "small" }, { "display-inline-block-m": height !== "small" }, { "BannerMessage-subHeaderOnly": height === "small" && this._isEmpty(headerText1) });

    return _react2.default.createElement(
      "div",
      { className: classes },
      [1, 2, 3].map(function (value) {
        return _this3._renderMessageSegment("secondary", value, configs);
      }),
      themeButton && this._renderLink(configs)
    );
  };

  BannerMessage.prototype._renderLink = function _renderLink(configs) {
    var height = configs.height;
    var buttonTextColor = configs.buttonTextColor;
    var linkText = configs.themeButton.linkText;

    var spanClasses = (0, _classnames2.default)({ "display-inline-block": height === "small" }, { "display-inline-block-m": height !== "small" });

    return _react2.default.createElement(
      "span",
      { className: spanClasses, style: { color: buttonTextColor } },
      " ",
      linkText,
      this._renderIcon(linkText)
    );
  };

  BannerMessage.prototype.render = function render() {
    var _props = this.props;
    var _props$moduleData = _props.moduleData;
    var moduleId = _props$moduleData.moduleId;
    var type = _props$moduleData.type;
    var configs = _props$moduleData.configs;
    var dataAutomationId = _props.dataAutomationId;

    var automationId = dataAutomationId + "-BannerMessage";

    return _react2.default.createElement(
      _collectorContext2.default,
      { moduleId: moduleId },
      _react2.default.createElement(
        "div",
        (0, _extends3.default)({
          style: { "backgroundColor": configs.themeColor },
          className: this._getClassNames(configs.height),
          "data-module": type,
          "data-module-id": moduleId
        }, (0, _automationIdUtils.getDataAutomationIdPair)(automationId, "")),
        this._renderThemeButton(configs.themeButton, automationId),
        this._renderBannerMessageHeader(configs),
        this._renderSubText(configs)
      )
    );
  };

  return BannerMessage;
}(_react.Component);

BannerMessage.displayName = "BannerMessage";

BannerMessage.propTypes = {
  /**
   * Data for configuring the component. Typically coming from Tempo.
   * Contains information on the URL, link text, and colors to use for the links.
   */
  moduleData: _react.PropTypes.shape({
    moduleId: _react.PropTypes.string,
    type: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      themeColor: _react.PropTypes.string,
      themeButton: _react.PropTypes.shape({
        clickThrough: _react.PropTypes.object
      })
    })
  }).isRequired,
  /**
   Automation ID base string
   */
  dataAutomationId: _react.PropTypes.string
};

BannerMessage.defaultProps = {
  moduleData: {
    configs: {
      themeColor: "#222",
      themeButton: {
        clickThrough: {}
      }
    }
  },
  dataAutomationId: "homepage-zone1"
};

exports.default = BannerMessage;