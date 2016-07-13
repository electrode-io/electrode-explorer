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

var _walmartWmreactContainers = require("@walmart/wmreact-containers");

var _walmartWmreactLayout = require("@walmart/wmreact-layout");

var _answer = require("./answer");

var _answer2 = _interopRequireDefault(_answer);

/**
@private
*/

var Question = (function (_React$Component) {
  _inherits(Question, _React$Component);

  function Question() {
    _classCallCheck(this, Question);

    _get(Object.getPrototypeOf(Question.prototype), "constructor", this).call(this);
    this._answerToggle = this._answerToggle.bind(this);
    this.state = {
      active: false
    };
  }

  _createClass(Question, [{
    key: "_answerToggle",
    value: function _answerToggle() {
      this.setState({
        active: this.state.active ? false : true
      });
    }
  }, {
    key: "_renderQuestionColumn",
    value: function _renderQuestionColumn() {
      return _react2["default"].createElement(
        "div",
        { className: "qa-question-column" },
        _react2["default"].createElement(
          _walmartWmreactInteractive.Button,
          { fakelink: true, onClick: this._answerToggle },
          _react2["default"].createElement(
            "h3",
            null,
            this.props.question.questionSummary,
            this.state.active ? _react2["default"].createElement(_walmartWmreactBase.Icon, { name: "caret-up", size: 1 }) : _react2["default"].createElement(_walmartWmreactBase.Icon, { name: "caret-down", size: 1 })
          )
        ),
        _react2["default"].createElement(
          _walmartWmreactLayout.Collapsable,
          { isOpen: this.state.active },
          _react2["default"].createElement(
            "div",
            { className: "qa-question-data" },
            _react2["default"].createElement(
              _walmartWmreactBase.Copy.Small,
              null,
              "by",
              _react2["default"].createElement(
                "strong",
                { className: "answer-user" },
                this.props.question.userNickname
              ),
              _react2["default"].createElement(
                "span",
                { className: "answer-date" },
                this.props.question.submissionDate
              )
            ),
            _react2["default"].createElement(
              "div",
              { className: "qa-answers" },
              _react2["default"].createElement(
                "ul",
                null,
                this.props.question.answers.map(function (answer, index) {
                  return _react2["default"].createElement(_answer2["default"], { answer: answer, key: index });
                })
              )
            )
          )
        )
      );
    }
  }, {
    key: "_renderDataColumn",
    value: function _renderDataColumn() {
      return _react2["default"].createElement(
        "div",
        { className: "qa-data-column" },
        _react2["default"].createElement(
          _walmartWmreactInteractive.Button,
          { fakelink: true, onClick: this._answerToggle },
          this.props.question.totalAnswersCount,
          " answers"
        ),
        _react2["default"].createElement(
          "p",
          { className: "copy-small no-margin muted" },
          "Last answer: ",
          this.props.question.lastAnswerDate
        ),
        _react2["default"].createElement(
          _walmartWmreactLayout.Collapsable,
          { isOpen: this.state.active },
          _react2["default"].createElement(
            "div",
            null,
            _react2["default"].createElement(
              _walmartWmreactInteractive.Button,
              { inverse: true },
              "Answer this question"
            )
          )
        )
      );
    }
  }, {
    key: "render",
    value: function render() {
      return _react2["default"].createElement(
        "div",
        { className: "qa-question" },
        _react2["default"].createElement(
          _walmartWmreactLayout.Layout,
          { "large-sizes": [8, 4], padded: true },
          this._renderQuestionColumn(),
          this._renderDataColumn()
        ),
        _react2["default"].createElement(_walmartWmreactContainers.Separator, null)
      );
    }
  }]);

  return Question;
})(_react2["default"].Component);

exports["default"] = Question;

Question.propTypes = {
  question: _react2["default"].PropTypes.object
};

Question.defaultProps = {
  question: {}
};

Question.displayName = "Question";
module.exports = exports["default"];