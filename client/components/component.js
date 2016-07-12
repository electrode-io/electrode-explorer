"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

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
          var demo = require("../demo-modules/" + meta.name + "/" + _electrodeUiConfig2.default.ui.demoPath);
          var _demoStyl = require("../demo-modules/" + meta.name + "/demo/demo.styl");
          _this2.setState({ demo: demo, demoStyl: _demoStyl });
        } catch (e) {
          console.log("Error require demo in " + meta.name);
          _this2.setState({ error: true });
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
                { href: meta.github },
                "View Repository on Github"
              )
            ),
            meta.name && _react2.default.createElement(
              _well2.default,
              { className: "code-well", padded: true },
              "npm i --save ",
              meta.name
            ),
            usage.length && _react2.default.createElement(
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
                            { href: detail.uri, className: "detail-uri" },
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
        typeof demoStyl !== "undefined" && demoStyl && demoStyl,
        typeof demo !== "undefined" && demo && _react2.default.createElement(demo.default, null),
        error && _react2.default.createElement(
          "b",
          null,
          "This component does not have demo or demo does not work properly."
        )
      );
    }
  }]);

  return Component;
}(_react2.default.Component);

exports.default = Component;