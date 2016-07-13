import React, { PropTypes } from "react";

import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import Link from "@walmart/wmreact-base/lib/components/link";
import Image from "@walmart/wmreact-base/lib/components/image";
import { checkImageSrc as torbitizeImage } from "@walmart/wmreact-image-utils";
import fireUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-ui-event";

import resizeImageMap from "../../helpers/resize-image-map";
import { findDOMNode } from "react-dom";
import { WidthWatcher } from "@walmart/wmreact-layout/lib/components/utils/width-watcher";

/**
An image link component which wraps a image inside a link.
Current use-case is to use inside POV story.
@param {Object} props React props for the component
@returns {ReactElement} Image link component
@examples
ClickThroughImageMap
```jsx
<ClickThroughImage
  lazy={lazy}
  image={povImage}
  imageSize={imageSize}
  dataAutomationId={dataAutomationId}
/>
```
*/

class ClickThroughImageMap extends React.Component {
  constructor(props) {
    super(props);

    if (props.image.clickThrough.type === "map") {
      const coords = props.image.clickThrough.value.map((area) => area.coords);
      this.state = { coords, originalCoords: coords };
    }

    this._setMapSize = this._setMapSize.bind(this);
    this.widthWatcher = new WidthWatcher();
  }

  componentDidMount() {
    this.widthWatcher.addSubscriber(this);
  }

  componentWillUnmount() {
    this.widthWatcher.removeSubscriber(this);
  }

  updateWidth() {
    if (this.props.image.clickThrough.type === "map") {
      this._setMapSize();
    }
  }

  _fireAnalyticsEvent(ev, uid, href) {
    fireUIEvent(this, ev, { extras: { uid, href }});
  }

  _findImageElement() {
    return findDOMNode(this.refs.image);
  }

  _setMapSize() {
    const naturalImageSize = {
      naturalWidth: this.props.image.width,
      naturalHeight: this.props.image.height
    };

    const coords =
      resizeImageMap(this._findImageElement(), this.state.originalCoords, naturalImageSize);
    this.setState({coords});
  }

  _renderMapAreas() {
    const {
      image: {
        clickThrough: {
          value
        },
        uid
      },
      dataAutomationId
    } = this.props;

    const mapArea = value.map((area, index) => {
      const { url: { value: href }, shape, title } = area;
      const coords = this.state.coords[index];
      const dataUid = `${uid}-${index}`;

      return (
        <area
          key={index}
          tabIndex="-1"
          title={title}
          href={href}
          coords={coords}
          shape={shape}
          data-uid={dataUid}
          onClick={(ev) => { this._fireAnalyticsEvent(ev, dataUid, href); }}
          {...getDataAutomationIdPair(
            `imageMap-area-${index}`,
            dataAutomationId
          )}
        />
      );
    });
    return mapArea;
  }

  _renderMapImage(imageProps, torbitizedSrc) {
    const {
      image: {
        clickThrough: { anchorUrl: { value } },
        title,
        height,
        width,
        uid
      },
      imageSize,
      dataAutomationId
    } = this.props;

    const mapName = `${dataAutomationId}-map`;
    return (
      <div>
        <Image
          ref="image"
          onLoad={this._setMapSize}
          className="img-hide-alt ClickThroughImage"
          height={height}
          width={width}
          src={torbitizedSrc}
          useMap={`#${mapName}`}
          {...imageProps}
        />
        <map name={mapName}>
          {this._renderMapAreas()}
          { value &&
            <area
              tabIndex="-1"
              title={title}
              href={value}
              coords={`0,0,${imageSize.width},${imageSize.height}`}
              shape="rect"
              data-uid={uid}
              onClick={(ev) => { this._fireAnalyticsEvent(ev, uid, value); }}
              {...getDataAutomationIdPair("imageMap-anchorArea", dataAutomationId)}
            />
          }
        </map>
      </div>
    );
  }

  _renderLinkImage(imageProps, torbitizedSrc) {
    const {
      image: {
        clickThrough: { value },
        title,
        uid
      },
      dataAutomationId
    } = this.props;

    return (
      <Link
        href={value}
        alt={title}
        data-uid={uid}
        {...getDataAutomationIdPair("link", dataAutomationId)}>
        <Image
          className="img-hide-alt ClickThroughImage"
          src={torbitizedSrc}
          {...imageProps} />
      </Link>
    );
  }

  render() {
    /**
    We can't used spread operator here, because passed `size` prop is # of bytes
    of image not the image dimensions. Image component has different
    expectations for size prop. Hence passing only the needed props to Image.
    */
    const {
      image: {
        alt,
        clickThrough: { type },
        title,
        src
      },
      imageSize: {
        height,
        width
      },
      lazy
    } = this.props;
    const torbitizedSrc = torbitizeImage(src, height, width);
    const imageProps = {alt, title, lazy};

    return type === "map" ?
      this._renderMapImage(imageProps, torbitizedSrc) :
      this._renderLinkImage(imageProps, torbitizedSrc);
  }
}

ClickThroughImageMap.displayName = "ClickThroughImageMap";

ClickThroughImageMap.contextTypes = {
  analytics: PropTypes.object
};

ClickThroughImageMap.propTypes = {
  /**
   Image object of POV
   */
  image: PropTypes.shape({
    alt: PropTypes.string,
    clickThrough: PropTypes.shape({
      value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.array
      ]),
      type: PropTypes.string
    }),
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    title: PropTypes.string,
    src: PropTypes.string
  }).isRequired,
  /**
  Image Height and width
  */
  imageSize: PropTypes.object,
  /**
   whether the pov Image should lazy load or not.
   */
  lazy: PropTypes.bool,
  /**
   Automation ID base string
   */
  dataAutomationId: PropTypes.string
};

ClickThroughImageMap.defaultProps = {
  imageSize: {},
  lazy: false,
  dataAutomationId: ""
};
export default ClickThroughImageMap;
