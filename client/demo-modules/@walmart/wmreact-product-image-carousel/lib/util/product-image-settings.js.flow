import React from "react";
import Paginator from "@walmart/wmreact-interactive/lib/components/paginator";

const PrevPaginatorProps = {
  previousSlide: React.PropTypes.func,
  currentSlide: React.PropTypes.number
};

const NextPaginationProps = {
  nextSlide: React.PropTypes.func,
  currentSlide: React.PropTypes.number,
  slidesToScroll: React.PropTypes.number,
  slideCount: React.PropTypes.number
};

export class DesktopHairLinePrev extends React.Component {
  render() {
    return (
      <Paginator.Hairline
        direction="up"
        onClick={this.props.previousSlide}
        disabled={this.props.currentSlide === 0}/>
    );
  }
}

DesktopHairLinePrev.propTypes = PrevPaginatorProps;

export class DesktopHairLineNext extends React.Component {
  render() {
    return (
      <Paginator.Hairline
        direction="down"
        onClick={this.props.nextSlide}
        disabled={this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount}/>
    );
  }
}

DesktopHairLineNext.propTypes = NextPaginationProps;

export class TabletHairLinePrev extends React.Component {
  render() {
    return (
      <Paginator.Hairline
        direction="prev"
        onClick={this.props.previousSlide}
        disabled={this.props.currentSlide === 0}/>
    );
  }
}

TabletHairLinePrev.propTypes = PrevPaginatorProps;

export class TabletHairLineNext extends React.Component {
  render() {
    return (
      <Paginator.Hairline
        direction="next"
        onClick={this.props.nextSlide}
        disabled={this.props.currentSlide + this.props.slidesToScroll >= this.props.slideCount}/>
    );
  }
}

TabletHairLineNext.propTypes = NextPaginationProps;

export class MobilePaginator extends React.Component {
  constructor(props) {
    super(props);
    this.getIndexes = this.getIndexes.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  getIndexes(count, inc) {
    const arr = [];
    for (let i = 0; i < count; i += inc) {
      arr.push(i);
    }
    return arr;
  }

  handleClick(index) {
    this.props.goToSlide(index * this.props.slidesToScroll);
  }

  render() {
    const indexes = this.getIndexes(this.props.slideCount, this.props.slidesToScroll);
    return (
      <Paginator.Carousel
        current={Math.ceil(this.props.currentSlide / this.props.slidesToScroll)}
        total={indexes.length}
        mini={true}
        onDotClick={this.handleClick}/>
    );
  }
}

MobilePaginator.propTypes = {
  currentSlide: React.PropTypes.number,
  slidesToScroll: React.PropTypes.number,
  slideCount: React.PropTypes.number,
  goToSlide: React.PropTypes.func
};

const Decorators = {
  desktop: [
    {
      component: DesktopHairLinePrev,
      position: "TopCenter",
      style: {
        top: -40
      }
    },
    {
      component: DesktopHairLineNext,
      position: "BottomCenter",
      style: {
        bottom: -50
      }
    }
  ],
  tablet: [
    {
      component: TabletHairLinePrev,
      position: "CenterLeft"
    },
    {
      component: TabletHairLineNext,
      position: "CenterRight"
    }
  ],
  mobile: [
    {
      component: MobilePaginator,
      style: {
        position: "static"
      }
    }
  ]
};

const ResponsiveSettings = {
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

export default ResponsiveSettings;
