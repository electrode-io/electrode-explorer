"use strict";

exports.__esModule = true;

var _keys2 = require("lodash/keys");

var _keys3 = _interopRequireDefault(_keys2);

var _join2 = require("lodash/fp/join");

var _join3 = _interopRequireDefault(_join2);

var _map2 = require("lodash/fp/map");

var _map3 = _interopRequireDefault(_map2);

var _isSymbol2 = require("lodash/isSymbol");

var _isSymbol3 = _interopRequireDefault(_isSymbol2);

var _filter2 = require("lodash/fp/filter");

var _filter3 = _interopRequireDefault(_filter2);

var _flow2 = require("lodash/fp/flow");

var _flow3 = _interopRequireDefault(_flow2);

var _isPlainObject2 = require("lodash/isPlainObject");

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

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

var _index = require("../bundle.min");

var _redux = require("redux");

var _reactRedux = require("react-redux");

var _reactImageloader = require("react-imageloader");

var _reactImageloader2 = _interopRequireDefault(_reactImageloader);

var _canary = require("./canary");

var _canary2 = _interopRequireDefault(_canary);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint no-console: 0, no-undef: 0 */

var counter = function counter() {
  var state = arguments.length <= 0 || arguments[0] === undefined ? { count: 0 } : arguments[0];
  var action = arguments[1];

  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

var SimpleButton = function (_React$Component) {
  (0, _inherits3.default)(SimpleButton, _React$Component);

  function SimpleButton() {
    (0, _classCallCheck3.default)(this, SimpleButton);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  SimpleButton.prototype.render = function render() {
    return _react2.default.createElement(
      "button",
      (0, _extends3.default)({}, this.props, { className: "btn", style: { margin: 5 } }),
      this.props.children
    );
  };

  return SimpleButton;
}(_react2.default.Component);

SimpleButton.propTypes = {
  children: _react2.default.PropTypes.node
};

var SelfWrappingButton = (0, _index.collectorWrapper)({ onClick: { type: "Button" } })(SimpleButton);

var SelfInstrumentedButton = function (_React$Component2) {
  (0, _inherits3.default)(SelfInstrumentedButton, _React$Component2);

  function SelfInstrumentedButton(props) {
    (0, _classCallCheck3.default)(this, SelfInstrumentedButton);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, _React$Component2.call(this, props));

    _this2._onClick = _this2._onClick.bind(_this2);
    return _this2;
  }

  SelfInstrumentedButton.prototype._onClick = function _onClick(event) {
    (0, _index.fireUIEvent)(this, event);
  };

  SelfInstrumentedButton.prototype.render = function render() {
    return _react2.default.createElement(
      "button",
      { onClick: this._onClick, className: "btn", style: { margin: 5 } },
      this.props.children
    );
  };

  return SelfInstrumentedButton;
}(_react2.default.Component);

SelfInstrumentedButton.propTypes = {
  children: _react2.default.PropTypes.node
};
SelfInstrumentedButton.contextTypes = {
  analytics: _react2.default.PropTypes.object
};

var CounterDisplay = (0, _reactRedux.connect)(function (state) {
  return state;
})(function (props) {
  return _react2.default.createElement(
    "span",
    null,
    props.count
  );
});

var InstrumentedImageLoader = function (_React$Component3) {
  (0, _inherits3.default)(InstrumentedImageLoader, _React$Component3);

  function InstrumentedImageLoader() {
    (0, _classCallCheck3.default)(this, InstrumentedImageLoader);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component3.apply(this, arguments));
  }

  InstrumentedImageLoader.prototype.render = function render() {
    var _this4 = this;

    var props = {};
    props.onError = function (evt) {
      if (_this4.props.onError) {
        _this4.props.onError(evt);
      }
      _this4.context.analytics.callback({
        _type: "image-loader-error",
        event: evt,
        props: _this4.props
      });
    };
    return _react2.default.createElement(_reactImageloader2.default, (0, _extends3.default)({}, this.props, props));
  };

  return InstrumentedImageLoader;
}(_react2.default.Component);

InstrumentedImageLoader.propTypes = {
  onError: _react2.default.PropTypes.func
};

InstrumentedImageLoader.contextTypes = {
  analytics: _react2.default.PropTypes.object
};

var ReduxSmartComponent = function (_React$Component4) {
  (0, _inherits3.default)(ReduxSmartComponent, _React$Component4);

  function ReduxSmartComponent(props) {
    (0, _classCallCheck3.default)(this, ReduxSmartComponent);

    var _this5 = (0, _possibleConstructorReturn3.default)(this, _React$Component4.call(this, props));

    _this5.analyticsWrapper = (0, _index.reduxCollector)(counter);
    _this5.store = (0, _redux.createStore)(_this5.analyticsWrapper);
    return _this5;
  }

  ReduxSmartComponent.prototype.componentDidMount = function componentDidMount() {
    this.analyticsWrapper.analytics = this.context.analytics;
  };

  ReduxSmartComponent.prototype.render = function render() {
    var _this6 = this;

    return _react2.default.createElement(
      _reactRedux.Provider,
      { store: this.store },
      _react2.default.createElement(
        "span",
        null,
        _react2.default.createElement(
          SimpleButton,
          { onClick: function onClick() {
              return _this6.store.dispatch({ type: "INCREMENT" });
            } },
          "Increment"
        ),
        _react2.default.createElement(CounterDisplay, null)
      )
    );
  };

  return ReduxSmartComponent;
}(_react2.default.Component);

ReduxSmartComponent.contextTypes = {
  analytics: _react2.default.PropTypes.object
};

var Index = function (_React$Component5) {
  (0, _inherits3.default)(Index, _React$Component5);

  function Index(props) {
    (0, _classCallCheck3.default)(this, Index);

    var _this7 = (0, _possibleConstructorReturn3.default)(this, _React$Component5.call(this, props));

    _this7.state = {
      events: []
    };
    _this7.processEvent = _this7.processEvent.bind(_this7);
    return _this7;
  }

  Index.prototype.processEvent = function processEvent(evt) {
    (0, _canary2.default)(evt);

    var _formatKeys = function _formatKeys(obj) {
      var depth = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];

      return (0, _isPlainObject3.default)(obj) && depth < 2 ? (0, _flow3.default)((0, _filter3.default)(function (k) {
        return !(0, _isSymbol3.default)(obj[k]);
      }), (0, _map3.default)(function (k) {
        return k + "=" + _formatKeys(obj[k], depth + 1);
      }), (0, _join3.default)(", "))((0, _keys3.default)(obj)) : obj;
    };

    this.state.events.push(_formatKeys(evt));
    this.setState({
      events: this.state.events
    });
  };

  Index.prototype.render = function render() {
    return _react2.default.createElement(
      _index.AnalyticsProvider,
      { onEvent: this.processEvent },
      _react2.default.createElement(
        _index.ExceptionCollector,
        null,
        _react2.default.createElement(
          _index.RawEventCollector,
          { onClick: { foo: "bar" } },
          _react2.default.createElement(
            "div",
            { className: "component-documentation" },
            _react2.default.createElement(InstrumentedImageLoader, { src: "/foobar.jpg" }),
            _react2.default.createElement(
              SimpleButton,
              { onClick: function onClick(evt) {
                  return console.log(evt);
                } },
              "Standard button"
            ),
            _react2.default.createElement(
              _index.EventCollector,
              { onClick: true },
              _react2.default.createElement(
                "span",
                null,
                _react2.default.createElement(
                  "span",
                  null,
                  _react2.default.createElement(
                    "span",
                    null,
                    _react2.default.createElement(
                      SimpleButton,
                      { alex: 1, onClick: function onClick(evt) {
                          console.log(evt);
                        }, page: 1 },
                      "React event collection - 1"
                    ),
                    _react2.default.createElement(
                      SimpleButton,
                      { alex: 2, onClick: function onClick(evt) {
                          console.log(evt);
                        }, page: 1 },
                      "React event collection - 2"
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              _index.EventCollector,
              { onClick: { pid: 2 } },
              _react2.default.createElement(
                SimpleButton,
                { onClick: function onClick(evt) {
                    console.log(evt);
                  }, page: 2 },
                "Additional context with an object"
              )
            ),
            _react2.default.createElement(
              _index.EventCollector,
              { onClick: function onClick(ctx) {
                  return (0, _extends3.default)({}, ctx, {
                    coolStuff: 5
                  });
                } },
              _react2.default.createElement(
                SimpleButton,
                { onClick: function onClick(evt) {
                    console.log(evt);
                  }, page: 2 },
                "Additional context with a function"
              )
            ),
            _react2.default.createElement(
              _index.CollectorContext,
              { productTitle: "Rabbit" },
              _react2.default.createElement(
                _index.EventCollector,
                { onClick: true },
                _react2.default.createElement(
                  SimpleButton,
                  { onClick: function onClick(evt) {
                      console.log(evt);
                    }, page: 1 },
                  "Simple CollectorContext"
                )
              )
            ),
            _react2.default.createElement(
              _index.CollectorContext,
              { productTitle: "Rabbit" },
              _react2.default.createElement(
                _index.CollectorContext,
                { productDescription: "Small fluffy woodland creature" },
                _react2.default.createElement(
                  _index.EventCollector,
                  { onClick: true },
                  _react2.default.createElement(
                    SimpleButton,
                    { onClick: function onClick(evt) {
                        console.log(evt);
                      }, page: 1 },
                    "Nested CollectorContext"
                  )
                )
              )
            ),
            _react2.default.createElement(
              SelfWrappingButton,
              { onClick: function onClick(evt) {
                  console.log(evt);
                }, whatever: 54 },
              "Self wrapping button"
            ),
            _react2.default.createElement(
              SimpleButton,
              { onClick: function onClick() {
                  return a / foobaz;
                }, page: 1 },
              "Error Handling"
            ),
            _react2.default.createElement(
              _index.CollectorContext,
              { "in-redux": true },
              _react2.default.createElement(ReduxSmartComponent, null)
            ),
            _react2.default.createElement(
              SelfInstrumentedButton,
              null,
              "Self instrumented"
            ),
            _react2.default.createElement(
              _index.CollectorContext,
              { randomAttribute: "Hello" },
              _react2.default.createElement(
                "div",
                { style: { overflow: "scroll", height: "200px", width: "50%", border: "2px solid red" } },
                _react2.default.createElement(
                  "strong",
                  null,
                  "Scroll down to fire a waypoint event"
                ),
                _react2.default.createElement("div", { style: { height: "500px" } }),
                _react2.default.createElement(
                  _index.WaypointCollector,
                  null,
                  _react2.default.createElement(
                    "div",
                    null,
                    "Waypoint event fired!"
                  )
                ),
                _react2.default.createElement("div", { style: { height: "200px" } }),
                _react2.default.createElement(
                  _index.WaypointCollector,
                  { topOffset: 100, bottomOffset: 100 },
                  "An event will fire in 100px"
                ),
                _react2.default.createElement("div", { style: { height: "200px" } })
              )
            ),
            _react2.default.createElement(
              "h4",
              null,
              "Events"
            ),
            this.state.events.map(function (evt, index) {
              return _react2.default.createElement(
                "pre",
                { key: index, style: {
                    paddingTop: 5,
                    margin: 0,
                    borderBottom: "1px solid #777"
                  } },
                evt
              );
            })
          )
        )
      )
    );
  };

  return Index;
}(_react2.default.Component);

exports.default = Index;
