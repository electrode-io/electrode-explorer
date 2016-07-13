"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ClubLocatorPopUp = function ClubLocatorPopUp(_ref) {
  var _ref$notificationText = _ref.notificationText;
  var notificationText = _ref$notificationText === undefined ? "We've found a club near you" : _ref$notificationText;
  var _ref$btnMessage = _ref.btnMessage;
  var btnMessage = _ref$btnMessage === undefined ? "Change club" : _ref$btnMessage;
  var _ref$clubName = _ref.clubName;
  var clubName = _ref$clubName === undefined ? null : _ref$clubName;
  var _ref$clubAddress = _ref.clubAddress;
  var clubAddress = _ref$clubAddress === undefined ? null : _ref$clubAddress;
  var _ref$onShowClubClick = _ref.onShowClubClick;
  var onShowClubClick = _ref$onShowClubClick === undefined ? function () {} : _ref$onShowClubClick;
  var _ref$close = _ref.close;
  var close = _ref$close === undefined ? function () {} : _ref$close;

  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "div",
      { className: "sams-club-locator-popup" },
      _react2.default.createElement(_icon2.default.Remove, { style: { "height": "12px", "width": "12px", "margin": "5px", "float": "right" },
        onClick: close }),
      _react2.default.createElement(
        "label",
        { className: "notification" },
        notificationText
      ),
      _react2.default.createElement(
        "label",
        { className: "clubDetails" },
        _react2.default.createElement(
          "div",
          { className: "clubName" },
          " ",
          clubName,
          " "
        ),
        _react2.default.createElement(
          "div",
          { className: "clubAddress" },
          " ",
          clubAddress,
          " "
        )
      ),
      _react2.default.createElement(
        "a",
        { href: "#", onClick: onShowClubClick },
        _react2.default.createElement(
          "span",
          { className: "change-club" },
          btnMessage
        )
      )
    )
  );
};

exports.default = ClubLocatorPopUp;