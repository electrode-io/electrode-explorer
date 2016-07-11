"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _electrodeFetch = require("@walmart/electrode-fetch");

var _exenv = require("exenv");

var _exenv2 = _interopRequireDefault(_exenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Component = function (_React$Component) {
  _inherits(Component, _React$Component);

  function Component(props) {
    _classCallCheck(this, Component);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Component).call(this, props));

    _this.state = {
      meta: {},
      usage: [],
      demo: null,
      demoStyl: null,
      error: null
    };
    return _this;
  }

  _createClass(Component, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      if (!_exenv2.default.canUseDOM) {
        return;
      }

      var _props$params = this.props.params;
      var org = _props$params.org;
      var repo = _props$params.repo;

      var host = window.location.origin;
      var url = host + "/portal/data/" + org + "/" + repo + ".json";
      return (0, _electrodeFetch.fetchJSON)(url).then(function (res) {
        var meta = res.meta || {};
        var usage = res.usage || [];
        _this2.setState({ meta: meta, usage: usage });

        try {
          var demo = require("../demo-modules/" + meta.name + "/demo/demo.jsx");
          var _demoStyl = require("../demo-modules/" + meta.name + "/demo/demo.styl");
          _this2.setState({ demo: demo, demoStyl: _demoStyl });
        } catch (e) {
          console.log("Error require demo in " + meta.name);
          _this2.setState({ error: _react2.default.createElement(
              "div",
              null,
              "This component does not have demo."
            ) });
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _state = this.state;
      var meta = _state.meta;
      var usage = _state.usage;
      var demo = _state.demo;
      var error = _state.error;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h2",
          { className: "portal-title" },
          meta.title,
          _react2.default.createElement(
            "span",
            { className: "component-info" },
            meta.github && _react2.default.createElement(
              "div",
              null,
              "Github: ",
              _react2.default.createElement(
                "a",
                { href: meta.github },
                meta.github
              )
            ),
            meta.version && "v" + meta.version,
            usage.length && _react2.default.createElement(
              "div",
              null,
              "This component is used in ",
              usage.length,
              " modules / apps.",
              usage.map(function (url) {
                return _react2.default.createElement(
                  "div",
                  null,
                  _react2.default.createElement(
                    "a",
                    { href: url },
                    url
                  )
                );
              })
            )
          )
        ),
        typeof demoStyl !== "undefined" && demoStyl && demoStyl,
        typeof demo !== "undefined" && demo && _react2.default.createElement(demo.default, null),
        error && _react2.default.createElement("error", null)
      );
    }
  }]);

  return Component;
}(_react2.default.Component);

exports.default = Component;
