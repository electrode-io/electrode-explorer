"use strict";

exports.__esModule = true;
exports.MobilePaginator = exports.TabletHairLineNext = exports.TabletHairLinePrev = exports.DesktopHairLineNext = exports.DesktopHairLinePrev = undefined;

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _paginator = require("@walmart/wmreact-interactive/lib/components/paginator");

var _paginator2 = _interopRequireDefault(_paginator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PrevPaginatorProps = {
  previousSlide: _react2.default.PropTypes.func,
  currentSlide: _react2.default.PropTypes.number
};

var NextPaginationProps = {
  nextSlide: _react2.default.PropTypes.func,
  currentSlide: _react2.default.PropTypes.number,
  slidesToScroll: _react2.default.PropTypes.number,
  slideCount: _react2.default.PropTypes.number
};

var DesktopHairLinePrev = exports.DesktopHairLinePrev = function (_React$Component) {
  (0, _inherits3.default)(DesktopHairLinePrev, _React$Component);

  function DesktopHairLinePrev() {
    (0, _classCallCheck3.default)(this, DesktopHairLinePrev);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  DesktopHairLinePrev.prototype.render = function render() {
    return _react2.default.createElement(_paginator2.default.Hairline, {
      direction: "up",
      onClick: this.props.previousSlide,
      disabled: this.props.currentSlide === 0 });
  };

  return DesktopHairLinePrev;
}(_react2.default.Component);

DesktopHairLinePrev.propTypes = PrevPaginatorProps;

var DesktopHairLineNext = exports.DesktopHairLineNext = function (_React$Component2) {
  (0, _inherits3.default)(DesktopHairLineNext, _React$Component2);

  function DesktopHairLineNext() {
    (0, _classCallCheck3.default)(this, DesktopHairLineNext);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component2.apply(this, arguments));
  }

  DesktopHairLineNext.prototype.render = function render() {
    return _react2.default.createElement(_paginator2.default.Hairline, {
      direction: "down",
      onClick: this.props.nextSlide,
      disabled: this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount });
  };

  return DesktopHairLineNext;
}(_react2.default.Component);

DesktopHairLineNext.propTypes = NextPaginationProps;

var TabletHairLinePrev = exports.TabletHairLinePrev = function (_React$Component3) {
  (0, _inherits3.default)(TabletHairLinePrev, _React$Component3);

  function TabletHairLinePrev() {
    (0, _classCallCheck3.default)(this, TabletHairLinePrev);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component3.apply(this, arguments));
  }

  TabletHairLinePrev.prototype.render = function render() {
    return _react2.default.createElement(_paginator2.default.Hairline, {
      direction: "prev",
      onClick: this.props.previousSlide,
      disabled: this.props.currentSlide === 0 });
  };

  return TabletHairLinePrev;
}(_react2.default.Component);

TabletHairLinePrev.propTypes = PrevPaginatorProps;

var TabletHairLineNext = exports.TabletHairLineNext = function (_React$Component4) {
  (0, _inherits3.default)(TabletHairLineNext, _React$Component4);

  function TabletHairLineNext() {
    (0, _classCallCheck3.default)(this, TabletHairLineNext);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component4.apply(this, arguments));
  }

  TabletHairLineNext.prototype.render = function render() {
    return _react2.default.createElement(_paginator2.default.Hairline, {
      direction: "next",
      onClick: this.props.nextSlide,
      disabled: this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount });
  };

  return TabletHairLineNext;
}(_react2.default.Component);

TabletHairLineNext.propTypes = NextPaginationProps;

var MobilePaginator = exports.MobilePaginator = function (_React$Component5) {
  (0, _inherits3.default)(MobilePaginator, _React$Component5);

  function MobilePaginator(props) {
    (0, _classCallCheck3.default)(this, MobilePaginator);

    var _this5 = (0, _possibleConstructorReturn3.default)(this, _React$Component5.call(this, props));

    _this5.getIndexes = _this5.getIndexes.bind(_this5);
    _this5.handleClick = _this5.handleClick.bind(_this5);
    return _this5;
  }

  MobilePaginator.prototype.getIndexes = function getIndexes(count, inc) {
    var arr = [];
    for (var i = 0; i < count; i += inc) {
      arr.push(i);
    }
    return arr;
  };

  MobilePaginator.prototype.handleClick = function handleClick(index) {
    this.props.goToSlide(index * this.props.slidesToScroll);
  };

  MobilePaginator.prototype.render = function render() {
    var indexes = this.getIndexes(this.props.slideCount, this.props.slidesToScroll);
    return _react2.default.createElement(_paginator2.default.Carousel, {
      current: Math.ceil(this.props.currentSlide / this.props.slidesToScroll),
      total: indexes.length,
      mini: true,
      onDotClick: this.handleClick });
  };

  return MobilePaginator;
}(_react2.default.Component);

MobilePaginator.propTypes = {
  currentSlide: _react2.default.PropTypes.number,
  slidesToScroll: _react2.default.PropTypes.number,
  slideCount: _react2.default.PropTypes.number,
  goToSlide: _react2.default.PropTypes.func
};

var Decorators = {
  desktop: [{
    component: DesktopHairLinePrev,
    position: "TopCenter",
    style: {
      top: -40
    }
  }, {
    component: DesktopHairLineNext,
    position: "BottomCenter",
    style: {
      bottom: -50
    }
  }],
  tablet: [{
    component: TabletHairLinePrev,
    position: "CenterLeft"
  }, {
    component: TabletHairLineNext,
    position: "CenterRight"
  }],
  mobile: [{
    component: MobilePaginator,
    style: {
      position: "static"
    }
  }]
};

var ResponsiveSettings = {
  mobile: {
    slidesToShow: 1,
    slidesToScroll: 1,
    decorators: Decorators.mobile,
    initialSlideWidth: 300,
    responsive: [{
      selectors: ["x-small", "small"]
    }]
  },
  tablet: {
    slidesToShow: 4,
    slidesToScroll: 4,
    framePadding: "20px 40px",
    decorators: Decorators.tablet,
    initialSlideWidth: 60
  },
  desktop: {
    vertical: true,
    dragging: false,
    slidesToShow: 5,
    slidesToScroll: 5,
    width: "90px",
    framePadding: "40px 0px",
    cellSpacing: 20,
    decorators: Decorators.desktop,
    initialSlideHeight: 61
  }
};

exports.default = ResponsiveSettings;