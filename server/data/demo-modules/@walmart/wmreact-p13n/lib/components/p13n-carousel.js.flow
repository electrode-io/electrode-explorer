import React, { PropTypes, Component } from "react";
import Carousel from "@walmart/wmreact-carousel";
import { default as P13NTile } from "./p13n-tile";

export class P13NCarousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlide: 0
    };

    this._setCurrentSlide = this._setCurrentSlide.bind(this);
  }

  _setCurrentSlide(currentSlide) {
    this.setState({
      currentSlide
    });
  }

  _renderModuleTitle(moduleTitle) {
    return moduleTitle ? (
      <div className="tempo-module-header u-paddedRow">
        <h5 className="tempo-module-heading">{moduleTitle}</h5>
      </div>
    ) : null;
  }

  render() {
    const p13nProducts = this.props.products;
    const {
      moduleTitle,
      isRVI,
      isTrending,
      handleClick,
      responsive
    } = this.props;
    return p13nProducts && p13nProducts.length > 0 ? (
      <div className="p13n-carousel-container">
        {this._renderModuleTitle(moduleTitle)}
        <div className="js-carousel-n-up carousel-n-up-responsive
        carousel-hotspot carousel-loading carousel carousel-p13n">
        <Carousel className="p13n-carousel"
          initialSlideWidth={200}
          slideIndex={this.state.currentSlide}
          afterSlide={this._setCurrentSlide}
          responsive={responsive}>
          {p13nProducts.map((product, index) => {
            const boundClick = handleClick ? handleClick.bind(this) : null;
            return (
              <div>
                <P13NTile
                  index={index}
                  product={product}
                  onClick={boundClick}
                  isRVI={isRVI}
                  isTrending={isTrending}
                />
              </div>
            );
          })}
        </Carousel>
        </div>
      </div>
    ) : null;
  }
}

P13NCarousel.propTypes = {
  "products": PropTypes.array,
  "moduleTitle": PropTypes.string,
  "responsive": PropTypes.array,
  "handleClick": PropTypes.func,
  "isRVI": PropTypes.bool,
  "isTrending": PropTypes.bool
};

P13NCarousel.defaultProps = {
  "isRVI": false,
  "isTrending": false,
  "responsive":
  [
    {
      selectors: ["x-small"],
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        cellSpacing: 8
      }
    },
    {
      selectors: ["small"],
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        cellSpacing: 8
      }
    },
    {
      selectors: ["medium"],
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        cellSpacing: 8
      }
    },
    {
      selectors: ["large"],
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        cellSpacing: 8
      }
    },
    {
      selectors: ["x-large"],
      settings: {
        slidesToShow: 7,
        slidesToScroll: 7,
        cellSpacing: 12,
        initialSlideWidth: 280
      }
    },
    {
      selectors: ["xx-large"],
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        cellSpacing: 20
      }
    }
  ]
};

P13NCarousel.displayName = "P13NCarousel";

export default P13NCarousel;
