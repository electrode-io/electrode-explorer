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

var _well = require("@walmart/wmreact-containers/lib/components/well");

var _well2 = _interopRequireDefault(_well);

var _table = require("@walmart/wmreact-table/lib/components/table");

var _table2 = _interopRequireDefault(_table);

var _revealer = require("@walmart/wmreact-interactive/lib/components/revealer");

var _revealer2 = _interopRequireDefault(_revealer);

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
      demoStyl: null,
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
        var _demoStyl = require("../demo-modules/" + meta.name + "/demo/demo.styl");
        _this2.setState({ demo: demo, demoStyl: _demoStyl });
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

    if (!meta.title) {
      meta.title = this.props.params.repo || "[ Missing Title ]";
    }

    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "h2",
        { className: "portal-title" },
        meta.title,
        " ",
        meta.version && _react2.default.createElement(
          "span",
          { className: "component-version" },
          " v" + meta.version
        ),
        meta.description && _react2.default.createElement(
          "span",
          { className: "component-description" },
          meta.description
        ),
        _react2.default.createElement(
          "span",
          { className: "component-info" },
          meta.github && _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "a",
              { href: meta.github, target: "_blank" },
              "View Repository on Github"
            )
          ),
          meta.name && _react2.default.createElement(
            _well2.default,
            { className: "code-well", padded: true },
            "npm i --save ",
            meta.name
          ),
          usage.length > 0 && _react2.default.createElement(
            _revealer2.default,
            {
              baseHeight: 50,
              buttonClosedText: "View Usage",
              buttonOpenText: "Hide Usage",
              defaultOpen: false,
              disableClose: false,
              inverse: true,
              fakeLink: false,
              border: false },
            _react2.default.createElement(
              "div",
              { className: "component-usage" },
              "This component is used in ",
              usage.length,
              " modules / apps.",
              _react2.default.createElement(
                _table2.default,
                null,
                _react2.default.createElement(
                  _table2.default.Body,
                  null,
                  usage.map(function (detail) {
                    return _react2.default.createElement(
                      _table2.default.Row,
                      null,
                      _react2.default.createElement(
                        _table2.default.Cell,
                        null,
                        _react2.default.createElement(
                          "a",
                          { href: detail.uri, target: "_blank", className: "detail-uri" },
                          detail.displayName
                        )
                      ),
                      _react2.default.createElement(
                        _table2.default.Cell,
                        { className: "detail-version" },
                        _react2.default.createElement(
                          "span",
                          { className: "version-status-" + detail.version.status },
                          detail.version.str
                        )
                      ),
                      _react2.default.createElement(
                        _table2.default.Cell,
                        { className: "detail-description" },
                        detail.description
                      )
                    );
                  })
                )
              )
            )
          )
        )
      ),
      typeof demoStyl !== "undefined" && demoStyl,
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