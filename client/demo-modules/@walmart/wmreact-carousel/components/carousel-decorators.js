"use strict";

exports.__esModule = true;
exports.getCarouselDecorators = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _wmreactInteractive = require("@walmart/wmreact-interactive");

var _wmreactAnalytics = require("@walmart/wmreact-analytics");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var leftArrow = function leftArrow(externalProps) {
  return {
    component: _react2.default.createClass({
      displayName: "component",

      propTypes: {
        previousSlide: _react.PropTypes.func.isRequired,
        nextSlide: _react.PropTypes.func.isRequired,
        currentSlide: _react.PropTypes.number.isRequired
      },

      contextTypes: {
        analytics: _react.PropTypes.object
      },

      _onClick: function _onClick(event) {
        (0, _wmreactAnalytics.fireUIEvent)(this, event, { eventType: "previousSlide" });
        var previousSlide = this.props.previousSlide;


        if (previousSlide) {
          previousSlide(event);
        }
      },
      render: function render() {
        var currentSlide = this.props.currentSlide;
        var isLarge = externalProps.isLarge;
        var isDark = externalProps.isDark;
        var isLight = externalProps.isLight;
        var isNoHover = externalProps.isNoHover;
        var dataAutomationId = externalProps.dataAutomationId;

        return _react2.default.createElement(_wmreactInteractive.Paginator.Hairline, {
          direction: "prev",
          large: !!isLarge,
          dark: !!isDark,
          light: !!isLight,
          noHover: !!isNoHover,
          dataAutomationId: dataAutomationId + "-leftArrow",
          onClick: this._onClick,
          disabled: currentSlide === 0 });
      }
    }),
    position: "CenterLeft",
    style: externalProps.leftBtnStyle
  };
};

var rightArrow = function rightArrow(externalProps) {
  return {
    component: _react2.default.createClass({
      displayName: "component",

      propTypes: {
        slidesToScroll: _react.PropTypes.number.isRequired,
        slideCount: _react.PropTypes.number.isRequired,
        currentSlide: _react.PropTypes.number.isRequired,
        nextSlide: _react.PropTypes.func.isRequired
      },

      contextTypes: {
        analytics: _react.PropTypes.object
      },

      _onClick: function _onClick(event) {
        (0, _wmreactAnalytics.fireUIEvent)(this, event, { eventType: "nextSlide" });
        var nextSlide = this.props.nextSlide;


        if (nextSlide) {
          nextSlide(event);
        }
      },
      render: function render() {
        var _props = this.props;
        var currentSlide = _props.currentSlide;
        var slidesToScroll = _props.slidesToScroll;
        var slideCount = _props.slideCount;
        var isLarge = externalProps.isLarge;
        var isDark = externalProps.isDark;
        var isLight = externalProps.isLight;
        var isNoHover = externalProps.isNoHover;
        var dataAutomationId = externalProps.dataAutomationId;

        var slidesOffset = Math.ceil(currentSlide + slidesToScroll);

        return _react2.default.createElement(_wmreactInteractive.Paginator.Hairline, {
          direction: "next",
          large: !!isLarge,
          dark: !!isDark,
          light: !!isLight,
          noHover: !!isNoHover,
          dataAutomationId: dataAutomationId + "-rightArrow",
          onClick: this._onClick,
          disabled: slidesOffset >= slideCount });
      }
    }),
    position: "CenterRight",
    style: externalProps.rightBtnStyle
  };
};

var paginatorButtons = function paginatorButtons(externalProps) {
  return {
    component: _react2.default.createClass({
      displayName: "component",

      propTypes: {
        slidesToScroll: _react.PropTypes.number.isRequired,
        slideCount: _react.PropTypes.number.isRequired,
        currentSlide: _react.PropTypes.number.isRequired,
        goToSlide: _react.PropTypes.func.isRequired
      },

      contextTypes: {
        analytics: _react.PropTypes.object
      },

      getIndexes: function getIndexes(count, inc) {
        var arr = [];
        for (var i = 0; i < count; i += inc) {
          arr.push(i);
        }
        return arr;
      },
      handleClick: function handleClick(index, event) {
        var _props2 = this.props;
        var goToSlide = _props2.goToSlide;
        var slidesToScroll = _props2.slidesToScroll;


        goToSlide(index * slidesToScroll);

        (0, _wmreactAnalytics.fireUIEvent)(this, event, {
          eventType: "goToSlide",
          extras: {
            index: index * slidesToScroll
          }
        });
      },
      render: function render() {
        var _props3 = this.props;
        var slideCount = _props3.slideCount;
        var slidesToScroll = _props3.slidesToScroll;
        var currentSlide = _props3.currentSlide;
        var dataAutomationId = externalProps.dataAutomationId;

        var indexes = this.getIndexes(slideCount, slidesToScroll);

        if (slideCount <= slidesToScroll) {
          return null;
        }

        return _react2.default.createElement(_wmreactInteractive.Paginator.Carousel, {
          dataAutomationId: dataAutomationId + "-paginatorButton",
          current: Math.ceil(currentSlide / slidesToScroll),
          total: indexes.length,
          mini: true,
          onDotClick: this.handleClick });
      }
    }),
    position: "BottomCenter",
    style: externalProps.dotsStyle || { bottom: -20 }
  };
};

var getCarouselDecorators = exports.getCarouselDecorators = function getCarouselDecorators() {
  var externalProps = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  return [leftArrow(externalProps), rightArrow(externalProps), paginatorButtons(externalProps)];
};

exports.default = getCarouselDecorators();