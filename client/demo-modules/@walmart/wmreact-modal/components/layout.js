"use strict";

exports.__esModule = true;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _flow = require("lodash/flow");

var _flow2 = _interopRequireDefault(_flow);

var _getOr = require("lodash/fp/getOr");

var _getOr2 = _interopRequireDefault(_getOr);

var _invoke = require("lodash/fp/invoke");

var _invoke2 = _interopRequireDefault(_invoke);

var _throttle = require("lodash/throttle");

var _throttle2 = _interopRequireDefault(_throttle);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _exenv = require("exenv");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _widthWatcher = require("@walmart/wmreact-layout/lib/components/utils/width-watcher");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var widthWatcher = new _widthWatcher.WidthWatcher();

var RESIZE_THROTTLE_INTERVAL = 30;
var MODAL_MARGIN = 20;
var SHADOW_TRANSITION_RANGE = 100;
var SHADOW_OPACITY = 0.08;

var scope = "modal_layout";
var styles = {
  /* Element Classes */
  container: scope + "_container",
  headerContainer: scope + "_header-container",
  header: scope + "_header",
  headerActions: scope + "_header_actions",
  scroll: scope + "_scroll",
  bodyContainer: scope + "_body-container",
  body: scope + "_body",
  footerContainer: scope + "_footer-container",
  footer: scope + "_footer",
  footerActions: scope + "_footer_actions",

  /* Modifier Classes */
  border: "border",
  margin: "margin"
};

var shadowOpacity = function shadowOpacity(scroll) {
  return Math.min(scroll / SHADOW_TRANSITION_RANGE, 1) * SHADOW_OPACITY;
};

var getHeight = (0, _flow2.default)((0, _invoke2.default)("getBoundingClientRect"), (0, _getOr2.default)(0, "height"));

var isSmallWidth = function isSmallWidth(width) {
  return width === "x-small" || width === "small";
};

var ModalLayout = function (_Component) {
  (0, _inherits3.default)(ModalLayout, _Component);

  function ModalLayout(state, props) {
    (0, _classCallCheck3.default)(this, ModalLayout);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, state, props));

    _this.state = {
      windowHeight: 0,
      fillScreen: isSmallWidth(widthWatcher.width),
      headerHeight: 0,
      footerHeight: 0,
      bodyHeight: 0,
      scrollTop: 0,
      mounted: false
    };

    _this.layout = function () {
      _this.setState({
        windowHeight: window.innerHeight,
        headerHeight: getHeight(_this.refs.header),
        footerHeight: getHeight(_this.refs.footer),
        bodyHeight: getHeight(_this.refs.body),
        scrollTop: (0, _getOr2.default)(0, "scrollTop", _this.refs.scroll),
        mounted: true
      });
    };

    _this.updateWidth = function (width) {
      _this.setState({ fillScreen: isSmallWidth(width) });
    };

    _this.handleLayout = (0, _throttle2.default)(_this.layout, RESIZE_THROTTLE_INTERVAL);
    return _this;
  }

  ModalLayout.prototype.componentDidMount = function componentDidMount() {
    if (_exenv.canUseDOM) {
      this.handleLayout();
      window.addEventListener("resize", this.handleLayout);
      widthWatcher.addSubscriber(this);
    }
  };

  ModalLayout.prototype.componentWillUnmount = function componentWillUnmount() {
    if (_exenv.canUseDOM) {
      window.removeEventListener("resize", this.handleLayout);

      // Call `cancel` on the throttled handler to prevent it from executing
      // after the component unmounts.
      this.handleLayout.cancel();
      widthWatcher.removeSubscriber(this);
    }
  };

  ModalLayout.prototype.calculateLayout = function calculateLayout() {
    var _props = this.props;
    var _props$maxHeight = _props.maxHeight;
    var maxHeight = _props$maxHeight === undefined ? Infinity : _props$maxHeight;
    var _props$minHeight = _props.minHeight;
    var minHeight = _props$minHeight === undefined ? 0 : _props$minHeight;
    var _props$minBodyHeight = _props.minBodyHeight;
    var minBodyHeight = _props$minBodyHeight === undefined ? 50 : _props$minBodyHeight;
    var _state = this.state;
    var windowHeight = _state.windowHeight;
    var headerHeight = _state.headerHeight;
    var footerHeight = _state.footerHeight;
    var bodyHeight = _state.bodyHeight;
    var scrollTop = _state.scrollTop;
    var fillScreen = _state.fillScreen;


    var margins = fillScreen ? 0 : MODAL_MARGIN * 2;

    var modalHeight = headerHeight + bodyHeight + footerHeight + margins;
    var scrollAmount = Math.max(modalHeight - windowHeight, 0);
    var scrollContainerHeight = fillScreen ? windowHeight - headerHeight - footerHeight : Math.max(Math.max(Math.min(bodyHeight - scrollAmount, maxHeight - headerHeight - footerHeight), minHeight - headerHeight - footerHeight), minBodyHeight);
    var scrollBottom = bodyHeight - scrollContainerHeight - scrollTop;

    return {
      scrollContainerHeight: scrollContainerHeight,
      scrollBottom: scrollBottom,
      scrollTop: scrollTop
    };
  };

  ModalLayout.prototype.render = function render() {
    var _classNames, _classNames2, _classNames3, _classNames4, _classNames5;

    var _props2 = this.props;
    var header = _props2.header;
    var body = _props2.body;
    var footer = _props2.footer;
    var actions = _props2.actions;
    var divided = _props2.divided;
    var shadows = _props2.shadows;
    var margins = _props2.margins;
    var _state2 = this.state;
    var mounted = _state2.mounted;
    var fillScreen = _state2.fillScreen;

    var _calculateLayout = this.calculateLayout();

    var scrollContainerHeight = _calculateLayout.scrollContainerHeight;
    var scrollBottom = _calculateLayout.scrollBottom;
    var scrollTop = _calculateLayout.scrollTop;


    var containerStyle = { visibility: mounted ? "visible" : "hidden" };
    var scrollContainerStyle = { height: scrollContainerHeight };

    var headerActionsVisible = actions && fillScreen;
    var footerActionsVisible = actions && !fillScreen;

    var headerVisible = header || headerActionsVisible;
    var footerVisible = footer || footerActionsVisible;

    var topShadow = headerVisible && shadows ? {
      boxShadow: "0 0 6px 3px rgba(0,0,0," + shadowOpacity(scrollTop) + ")"
    } : {};
    var bottomShadow = footerVisible && shadows ? {
      boxShadow: "0 0 6px 3px rgba(0,0,0," + shadowOpacity(scrollBottom) + ")"
    } : {};

    return _react2.default.createElement(
      "div",
      { className: styles.container, style: containerStyle },
      _react2.default.createElement(
        "div",
        {
          ref: "header",
          style: topShadow,
          className: (0, _classnames2.default)((_classNames = {}, _classNames[styles.headerContainer] = true, _classNames[styles.border] = divided && headerVisible, _classNames))
        },
        headerVisible && _react2.default.createElement(
          "div",
          null,
          headerActionsVisible && _react2.default.createElement(
            "div",
            { className: styles.headerActions },
            actions
          ),
          !!header && _react2.default.createElement(
            "div",
            {
              className: (0, _classnames2.default)((_classNames2 = {}, _classNames2[styles.header] = true, _classNames2[styles.margin] = margins, _classNames2))
            },
            header
          )
        )
      ),
      _react2.default.createElement(
        "div",
        {
          ref: "scroll",
          className: styles.scroll,
          style: scrollContainerStyle,
          onScroll: this.handleLayout
        },
        _react2.default.createElement(
          "div",
          { ref: "body", className: styles.bodyContainer },
          _react2.default.createElement(
            "div",
            { className: (0, _classnames2.default)((_classNames3 = {}, _classNames3[styles.body] = true, _classNames3[styles.margin] = margins, _classNames3)) },
            body
          )
        )
      ),
      _react2.default.createElement(
        "div",
        {
          ref: "footer",
          style: bottomShadow,
          className: (0, _classnames2.default)((_classNames4 = {}, _classNames4[styles.footerContainer] = true, _classNames4[styles.border] = divided && footerVisible, _classNames4))
        },
        footerVisible && _react2.default.createElement(
          "div",
          {
            className: (0, _classnames2.default)((_classNames5 = {}, _classNames5[styles.footer] = true, _classNames5[styles.margin] = margins, _classNames5))
          },
          footer,
          footerActionsVisible && _react2.default.createElement(
            "div",
            { className: styles.footerActions },
            actions
          )
        )
      )
    );
  };

  return ModalLayout;
}(_react.Component);

ModalLayout.propTypes = {
  body: _react.PropTypes.node,
  header: _react.PropTypes.node,
  footer: _react.PropTypes.node,
  actions: _react.PropTypes.node,
  maxHeight: _react.PropTypes.number,
  minHeight: _react.PropTypes.number,
  minBodyHeight: _react.PropTypes.number,
  divided: _react.PropTypes.bool,
  shadows: _react.PropTypes.bool,
  margins: _react.PropTypes.bool
};

exports.default = ModalLayout;