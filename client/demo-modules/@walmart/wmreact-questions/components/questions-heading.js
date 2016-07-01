"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _walmartWmreactBase = require("@walmart/wmreact-base");

var _walmartWmreactInteractive = require("@walmart/wmreact-interactive");

var _walmartWmreactLayout = require("@walmart/wmreact-layout");

var _sortChooser = require("./sort-chooser");

var _sortChooser2 = _interopRequireDefault(_sortChooser);

/**
@private
*/

var QuestionsHeading = (function (_React$Component) {
  _inherits(QuestionsHeading, _React$Component);

  function QuestionsHeading() {
    _classCallCheck(this, QuestionsHeading);

    _get(Object.getPrototypeOf(QuestionsHeading.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(QuestionsHeading, [{
    key: "_renderQuestionButton",
    value: function _renderQuestionButton() {
      return _react2["default"].createElement(
        _walmartWmreactInteractive.Button,
        null,
        "Ask A Question"
      );
    }
  }, {
    key: "_renderSortChooser",
    value: function _renderSortChooser() {
      var options = [{ id: "totalAnswerCount", title: "Number of answers" }, { id: "mostRecentQuestions", title: "Most recent questions" }, { id: "mostRecentAnswers", title: "Most recent answers" }];

      return _react2["default"].createElement(_sortChooser2["default"], { options: options, className: "qa-sortby" });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "qa-header" },
        _react2["default"].createElement(
          _walmartWmreactLayout.MediaSelector,
          null,
          _react2["default"].createElement(
            _walmartWmreactLayout.Layout,
            { large: 2, visibleAbove: "medium" },
            _react2["default"].createElement(
              "div",
              null,
              _react2["default"].createElement(
                "h3",
                { className: "heading-a no-margin" },
                "Customer Q&A"
              ),
              _react2["default"].createElement(
                _walmartWmreactBase.Copy,
                null,
                "Get specific details about this product from customers who own it."
              )
            ),
            _react2["default"].createElement(
              "div",
              { className: "text-right" },
              this._renderQuestionButton(),
              this._renderSortChooser()
            )
          ),
          _react2["default"].createElement(
            _walmartWmreactLayout.Layout,
            { small: 1, hiddenAbove: "medium" },
            _react2["default"].createElement(
              "div",
              null,
              this._renderQuestionButton()
            ),
            _react2["default"].createElement(
              "div",
              null,
              this._renderSortChooser()
            )
          )
        )
      );
    }
  }]);

  return QuestionsHeading;
})(_react2["default"].Component);

exports["default"] = QuestionsHeading;

QuestionsHeading.displayName = "QuestionsHeading";
module.exports = exports["default"];