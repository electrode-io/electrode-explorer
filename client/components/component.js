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

var _electrodeFetch = require("@walmart/electrode-fetch");

var _exenv = require("exenv");

var _exenv2 = _interopRequireDefault(_exenv);

var _electrodeUiConfig = require("@walmart/electrode-ui-config");

var _electrodeUiConfig2 = _interopRequireDefault(_electrodeUiConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = function (_React$Component) {
  (0, _inherits3.default)(Component, _React$Component);

  function Component(props) {
    (0, _classCallCheck3.default)(this, Component);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this.state = {
      meta: {},
      usage: [],
      demo: null,
      error: null
    };
    return _this;
  }

  Component.prototype.componentWillMount = function componentWillMount() {
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
        var demo = require("../demo-modules/" + meta.name + "/" + _electrodeUiConfig2.default.ui.demoPath);
        _this2.setState({ demo: demo });
      } catch (e) {
        console.log("Error require demo in " + meta.name);
        _this2.setState({ error: true });
      }
    });
  };

  Component.prototype.render = function render() {
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
          usage.length > 0 && _react2.default.createElement(
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
      typeof demo !== "undefined" && demo && _react2.default.createElement(demo.default, null),
      error && _react2.default.createElement(
        "b",
        null,
        "This component does not have demo or demo does not work properly."
      )
    );
  };

  return Component;
}(_react2.default.Component);

exports.default = Component;
;