/* @flow */
import React, { PropTypes } from "react";

import { Paginator } from "@walmart/wmreact-interactive";

import { fireUIEvent } from "@walmart/wmreact-analytics";

const leftArrow = (externalProps) => ({
  component: React.createClass({
    propTypes: {
      previousSlide: PropTypes.func.isRequired,
      nextSlide: PropTypes.func.isRequired,
      currentSlide: PropTypes.number.isRequired
    },

    contextTypes: {
      analytics: PropTypes.object
    },

    _onClick(event: Object) {
      fireUIEvent(this, event, {eventType: "previousSlide"});
      const { previousSlide } = this.props;

      if (previousSlide) {
        previousSlide(event);
      }
    },

    render(): ReactElement {
      const { currentSlide } = this.props;
      const { isLarge, isDark, isLight, isNoHover, dataAutomationId, alwaysShow } = externalProps;
      return (
        <Paginator.Hairline
          direction="prev"
          large={!!isLarge}
          dark={!!isDark}
          light={!!isLight}
          noHover={!!isNoHover}
          dataAutomationId={`${dataAutomationId}-leftArrow`}
          onClick={this._onClick}
          disabled={!alwaysShow && currentSlide === 0}/>
      );
    }
  }),
  position: "CenterLeft",
  style: externalProps.leftBtnStyle
});

const rightArrow = (externalProps) => ({
  component: React.createClass({
    propTypes: {
      slidesToScroll: PropTypes.number.isRequired,
      slideCount: PropTypes.number.isRequired,
      currentSlide: PropTypes.number.isRequired,
      nextSlide: PropTypes.func.isRequired
    },

    contextTypes: {
      analytics: PropTypes.object
    },

    _onClick(event: Object) {
      fireUIEvent(this, event, {eventType: "nextSlide"});
      const { nextSlide } = this.props;

      if (nextSlide) {
        nextSlide(event);
      }
    },

    render(): ReactElement {
      const { currentSlide, slidesToScroll, slideCount } = this.props;
      const { isLarge, isDark, isLight, isNoHover, dataAutomationId, alwaysShow } = externalProps;
      const slidesOffset = Math.ceil(currentSlide + slidesToScroll);

      return (
        <Paginator.Hairline
          direction="next"
          large={!!isLarge}
          dark={!!isDark}
          light={!!isLight}
          noHover={!!isNoHover}
          dataAutomationId={`${dataAutomationId}-rightArrow`}
          onClick={this._onClick}
          disabled={!alwaysShow && slidesOffset >= slideCount}/>
      );
    }
  }),
  position: "CenterRight",
  style: externalProps.rightBtnStyle
});

const upArrow = (externalProps) => ({
  component: React.createClass({
    propTypes: {
      previousSlide: PropTypes.func.isRequired,
      nextSlide: PropTypes.func.isRequired,
      currentSlide: PropTypes.number.isRequired
    },

    defaultProps: {
      vertical: false
    },

    contextTypes: {
      analytics: PropTypes.object
    },

    _onClick(event: Object) {
      fireUIEvent(this, event, {eventType: "previousSlide"});
      const { previousSlide } = this.props;

      if (previousSlide) {
        previousSlide(event);
      }
    },

    render(): ReactElement {
      const { currentSlide } = this.props;
      const { isLarge, isDark, isLight, isNoHover, dataAutomationId, alwaysShow } = externalProps;
      return (
        <Paginator.Hairline
          direction="up"
          large={!!isLarge}
          dark={!!isDark}
          light={!!isLight}
          noHover={!!isNoHover}
          dataAutomationId={`${dataAutomationId}-upArrow`}
          onClick={this._onClick}
          disabled={!alwaysShow && currentSlide === 0}/>
      );
    }
  }),
  position: "TopCenter",
  style: externalProps.topBtnStyle
});

const downArrow = (externalProps) => ({
  component: React.createClass({
    propTypes: {
      slidesToScroll: PropTypes.number.isRequired,
      slideCount: PropTypes.number.isRequired,
      currentSlide: PropTypes.number.isRequired,
      nextSlide: PropTypes.func.isRequired
    },

    contextTypes: {
      analytics: PropTypes.object
    },

    _onClick(event: Object) {
      fireUIEvent(this, event, {eventType: "nextSlide"});
      const { nextSlide } = this.props;

      if (nextSlide) {
        nextSlide(event);
      }
    },

    render(): ReactElement {
      const { currentSlide, slidesToScroll, slideCount } = this.props;
      const { isLarge, isDark, isLight, isNoHover, dataAutomationId, alwaysShow } = externalProps;
      const slidesOffset = Math.ceil(currentSlide + slidesToScroll);

      return (
        <Paginator.Hairline
          direction="down"
          large={!!isLarge}
          dark={!!isDark}
          light={!!isLight}
          noHover={!!isNoHover}
          dataAutomationId={`${dataAutomationId}-downArrow`}
          onClick={this._onClick}
          disabled={!alwaysShow && slidesOffset >= slideCount}/>
      );
    }
  }),
  position: "BottomCenter",
  style: externalProps.rightBtnStyle
});

const paginatorButtons = (externalProps) => ({
  component: React.createClass({
    propTypes: {
      slidesToScroll: PropTypes.number.isRequired,
      slideCount: PropTypes.number.isRequired,
      currentSlide: PropTypes.number.isRequired,
      goToSlide: PropTypes.func.isRequired
    },

    contextTypes: {
      analytics: PropTypes.object
    },

    getIndexes(count: number, inc: number): Array<number> {
      const arr = [];
      for (let i = 0; i < count; i += inc) {
        arr.push(i);
      }
      return arr;
    },

    handleClick(index: number, event: Object): void {
      const { goToSlide, slidesToScroll } = this.props;

      goToSlide(index * slidesToScroll);

      fireUIEvent(this, event, {
        eventType: "goToSlide",
        extras: {
          index: index * slidesToScroll
        }
      });
    },

    render(): ReactElement {
      const { slideCount, slidesToScroll, currentSlide } = this.props;
      const { dataAutomationId } = externalProps;
      const indexes = this.getIndexes(slideCount, slidesToScroll);

      if (slideCount <= slidesToScroll) { return null; }

      return (
        <Paginator.Carousel
          dataAutomationId={`${dataAutomationId}-paginatorButton`}
          current={Math.ceil(currentSlide / slidesToScroll)}
          total={indexes.length}
          mini={true}
          onDotClick={this.handleClick}/>
      );
    }
  }),
  position: "BottomCenter",
  style: externalProps.dotsStyle || { bottom: -20, width: "100%" }
});

export const getHorizontalCarouselDecorators = (externalProps = {}) => ([
  leftArrow(externalProps),
  rightArrow(externalProps),
  paginatorButtons(externalProps)
]);

export const getVerticalCarouselDecorators = (externalProps = {}) => ([
  upArrow(externalProps),
  downArrow(externalProps)
]);

export const getCarouselDecorators = (externalProps = {}) => {
  if (externalProps.vertical) {
    return getVerticalCarouselDecorators(externalProps);
  } else {
    return getHorizontalCarouselDecorators(externalProps);
  }
};

export default getCarouselDecorators();
