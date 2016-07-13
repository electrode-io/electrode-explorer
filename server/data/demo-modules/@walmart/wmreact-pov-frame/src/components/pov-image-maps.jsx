import React, { PropTypes, Component } from "react";
import ReactDOM from "react-dom";
import Image from "@walmart/wmreact-base/lib/components/image";
import debounce from "lodash/debounce";

import { getTorbitImage } from "../helpers/image-utils";

const RESIZE_DEBOUNCE_TIME = 50;

export default class POVImageMaps extends Component {

  constructor(props) {
    super(props);

    // Calculate and cache the original coordinates in correct format
    // for scaling calculation on resize. We only get the coordinates for full size.
    // Attached to `this` for caching the result as value is needed in resize handler.
    this.originalCoordinates = props.clickThrough.value
      .map((iMap) => iMap.coords.split(",").map((coordinate) => {
        const intCoordinate = parseInt(coordinate, 10);
        return isNaN(intCoordinate) ? 0 : intCoordinate;
      }));

    this.state = { imageMaps: this.originalCoordinates };
    this._refreshImageMaps = this._refreshImageMaps.bind(this);
  }

  componentDidMount() {
    // Cache the image node.
    this.imageNode = ReactDOM.findDOMNode(this.refs.povImage);
    this._debouncedResizeHandler = debounce(() => {
      this._refreshImageMaps();
    }, RESIZE_DEBOUNCE_TIME);

    window.addEventListener("resize", this._debouncedResizeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this._debouncedResizeHandler);
  }

  /*
   * Re calculates the imagemaps coordinates.
   */
  _refreshImageMaps() {
    const { height, width } = this.props;
    const currentWidth = this.imageNode.offsetWidth;
    const currentHeight = this.imageNode.offsetHeight;

    const actualImageWidth = parseInt(width, 10);
    const actualImageHeight = parseInt(height, 10);

    if (!actualImageWidth || !actualImageHeight) { return; }

    const xScalingFactor = currentWidth / actualImageWidth;
    const yScalingFactor = currentHeight / actualImageHeight;

    const newCoords = this.originalCoordinates
      .map((coordinateArr) => coordinateArr.map((coordinate, index) => {
        const scaleFactor = (index % 2 === 0) ? xScalingFactor : yScalingFactor;
        return coordinate * scaleFactor;
      }));

    this.setState({
      imageMaps: newCoords
    });
  }

  _renderImage() {
    const { alt, title, src, height, width, lazy, isMobile, uid, assetId } = this.props;
    const imageProps = { alt, title, height, width, lazy, src };

    imageProps.src = getTorbitImage(src, isMobile);

    imageProps.useMap = `#map-${title}-${uid}-${assetId}`;
    imageProps.onLoad = this._refreshImageMaps;

    return <Image {...imageProps} ref="povImage" />;
  }

  _renderImageMaps() {
    const { clickThrough, height, width, uid, assetId } = this.props;

    const areas = clickThrough.value.map((iMap, index) => {
      const { title, url, shape } = iMap;
      const coords = this.state.imageMaps[index];
      return (
        <area
          key={index}
          tabIndex="-1"
          title={title}
          href={url}
          coords={coords}
          shape={shape}
        />
      );
    });

    const { title, url } = this.props;

    // If url exists. Make rest of the image clickable too.
    if (url) {
      const imageCoords = ["0", "0", width, height].join(", ");
      const imageClicker = (
        <area
          key={areas.length}
          tabIndex="-1"
          title={title}
          href={url}
          coords={imageCoords}
          shape="rect"
        />
      );
      areas.push(imageClicker);
    }

    return (
      <map name={`map-${title}-${uid}-${assetId}`}>
        {areas}
      </map>
    );
  }

  render() {
    return (
      <div>
        {this._renderImage()}
        {this._renderImageMaps()}
      </div>
    );
  }
}

POVImageMaps.propTypes = {
  /**
  Alt text for image.
  */
  alt: PropTypes.string,
  /**
  identifier used in analytics.
  */
  assetId: PropTypes.string,
  /**
  An object with target url information in form of simple link or image maps.
  */
  clickThrough: PropTypes.shape({
    type: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
  }),
  /**
  Content Type of image file. To be used in module preview.
  */
  contentType: PropTypes.string,
  /**
  Image height.
  */
  height: PropTypes.string.isRequired,
  /**
  Size of image file in bytes. To be used in module preview.
  */
  size: PropTypes.string,
  /**
  Image source.
  */
  src: PropTypes.string.isRequired,
  /**
  Image title.
  */
  title: PropTypes.string,
  /**
  identifier used in analytics.
  */
  uid: PropTypes.string,
  /**
  Image width.
  */
  width: PropTypes.string.isRequired,
  /**
  Target url for rest of the image in case of image maps.
  */
  url: PropTypes.string,
  /**
   * lazy load image
   */
  lazy: PropTypes.bool,
  /**
    * is mobile or desktop?
    */
  isMobile: PropTypes.bool
};

POVImageMaps.defaultProps = {
  url: ""
};
