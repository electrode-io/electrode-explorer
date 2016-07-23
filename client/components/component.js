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

var _reactResolver = require("react-resolver");

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
      var usage = res.usage.sort(function compare(a, b) {
        if (a.displayName < b.displayName) {
          return -1;
        }
        if (a.displayName > b.displayName) {
          return 1;
        }
        return 0;
      }) || [];

      _this2.setState({ meta: meta, usage: usage });

      var scriptUrl = host + "/portal/data/demo-modules/" + meta.name + "/bundle.min.js";
      var script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;

      document.getElementById("placeholder").appendChild(script);
      var x = setInterval(function () {
        if (typeof _COMPONENTS !== "undefined" && _COMPONENTS[meta.name]) {
          _this2.setState({ demo: _COMPONENTS[meta.name] });
          clearInterval(x);
        }
      }, 500);
    });
  };

  Component.prototype._renderDemo = function _renderDemo() {
    var _state = this.state;
    var demo = _state.demo;
    var error = _state.error;

    if (!demo && !error) {
      return _react2.default.createElement(
        "div",
        null,
        "Loading, please wait."
      );
    }

    return _react2.default.createElement(demo);
  };

  Component.prototype.render = function render() {
    var _state2 = this.state;
    var meta = _state2.meta;
    var usage = _state2.usage;
    var error = _state2.error;

    var host = undefined;

    if (_exenv2.default.canUseDOM) {
      host = window.location.origin;
    }

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
                          { className: "version-status-" + (detail.version && detail.version.status) },
                          detail.version && detail.version.str
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
      _react2.default.createElement("div", { id: "placeholder" }),
      this._renderDemo(),
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