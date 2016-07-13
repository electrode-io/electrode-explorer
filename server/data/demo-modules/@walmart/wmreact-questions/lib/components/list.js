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

var _walmartWmreactInteractive = require("@walmart/wmreact-interactive");

var _walmartWmreactLayout = require("@walmart/wmreact-layout");

var _question = require("./question");

var _question2 = _interopRequireDefault(_question);

/**
@private
*/

var List = (function (_React$Component) {
  _inherits(List, _React$Component);

  function List() {
    _classCallCheck(this, List);

    _get(Object.getPrototypeOf(List.prototype), "constructor", this).apply(this, arguments);
  }

  _createClass(List, [{
    key: "_renderQuestions",
    value: function _renderQuestions() {
      return this.props.questions.length ? this.props.questions.map(function (question, index) {
        return _react2["default"].createElement(_question2["default"], { key: index, question: question });
      }) : null;
    }
  }, {
    key: "_renderListFooter",
    value: function _renderListFooter() {
      return _react2["default"].createElement(
        "div",
        { className: "qa-list-footer" },
        _react2["default"].createElement(
          _walmartWmreactLayout.Layout,
          { large: 2 },
          _react2["default"].createElement(_walmartWmreactInteractive.Paginator.PaginatorList, { total: this.props.pagination.total, current: 0 }),
          _react2["default"].createElement(
            _walmartWmreactLayout.MediaSelector,
            null,
            _react2["default"].createElement(
              "div",
              { hiddenBelow: "medium", className: "text-right" },
              _react2["default"].createElement(
                "p",
                { className: "copy-mini no-margin" },
                this.props.pagination.currentSpan,
                " of ",
                this.props.pagination.total,
                " questions"
              )
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
        { className: "qa-list" },
        this._renderQuestions(),
        this._renderListFooter()
      );
    }
  }]);

  return List;
})(_react2["default"].Component);

exports["default"] = List;

List.propTypes = {
  questions: _react2["default"].PropTypes.array,
  pagination: _react2["default"].PropTypes.object
};

List.defaultProps = {
  questions: [],
  pagination: {}
};

List.displayName = "QuestionList";
module.exports = exports["default"];