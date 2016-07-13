import React, { Component, PropTypes } from "react";
import classNames from "classnames";
import {Motion, spring} from "react-motion";
import SpinnerImage from "./spinner-image";
import PannableContainer from "./pannable-container";
import ZoomControlButtons from "./zoom-control-buttons";

/**
 A image component that can be zoomed in or out.
 ```jsx
 <ZoomableImage
 enableZoomControls={true}
 enableReset={true}
 viewportWidth={600}
 viewportHeight={600}
 maxWidth={2000}
 maxHeight={2000}
 initialWidth={600}
 initialHeight={600}
 zoomRatio={1000}
 src="http://i5.walmartimages.com/dfw/dce07b8c-3b27/k2-_afa12da1-f17a-4ace-a8ae-8820733e5e0d.v1.jpg"
 />
 ```
 @import {ZoomableImage}
 @flags noVisibleRender
 @component ZoomableImage
 @playground
 ZoomableImage
 ```
 <ZoomableImage
 enableZoomControls={true}
 enableReset={true}
 viewportWidth={600}
 viewportHeight={600}
 maxWidth={2000}
 maxHeight={2000}
 initialWidth={600}
 initialHeight={600}
 zoomRatio={1000}
 src="http://i5.walmartimages.com/dfw/dce07b8c-3b27/k2-_afa12da1-f17a-4ace-a8ae-8820733e5e0d.v1.jpg"
 />
 ```
 */

class ZoomableImage extends Component {
  constructor(props) {
    super(props);
    this._onZoomInClick = this._onZoomInClick.bind(this);
    this._onZoomOutClick = this._onZoomOutClick.bind(this);
    this._onResetClick = this._onResetClick.bind(this);
    this.state = this._getInitialStateObj(props);
  }

  _getInitialStateObj({initialWidth, initialHeight}) {
    return {
      currentWidth: initialWidth,
      currentHeight: initialHeight,
      previousWidth: initialWidth,
      previousHeight: initialHeight
    };
  }

  _onZoomInClick() {
    if (!this._isFullyZoomedIn(this.state, this.props)) {
      const { zoomRatio, maxWidth, maxHeight } = this.props;
      const { currentWidth, currentHeight } = this.state;
      const newWidth = currentWidth + zoomRatio;
      const newHeight = currentHeight + zoomRatio;
      this.setState({
        currentWidth: Math.min(newWidth, maxWidth),
        currentHeight: Math.min(newHeight, maxHeight),
        previousWidth: currentWidth,
        previousHeight: currentHeight
      });
    }
  }

  _onZoomOutClick() {
    if (!this._isFullyZoomedOut(this.state, this.props)) {
      const { zoomRatio, initialWidth, initialHeight } = this.props;
      const { currentWidth, currentHeight } = this.state;
      const newWidth = currentWidth - zoomRatio;
      const newHeight = currentHeight - zoomRatio;
      this.setState({
        currentWidth: Math.max(newWidth, initialWidth),
        currentHeight: Math.max(newHeight, initialHeight),
        previousWidth: currentWidth,
        previousHeight: currentHeight
      });
    }
  }

  _onResetClick() {
    if (!this._isFullyZoomedOut(this.state, this.props)) {
      this.setState(this._getInitialStateObj(this.props));
    }
  }

  _getImagePosition({currentWidth, currentHeight}, {viewportWidth, viewportHeight}) {
    // calculate the position to center the image
    const scrollLeft = ((currentWidth - viewportWidth) / 2);
    const scrollTop = ((currentHeight - viewportHeight) / 2);
    return {scrollLeft, scrollTop};
  }

  _isFullyZoomedIn({ currentWidth, currentHeight }, { maxWidth, maxHeight }) {
    return currentWidth === maxWidth
      && currentHeight === maxHeight;
  }

  _isFullyZoomedOut({ currentWidth, currentHeight }, { initialWidth, initialHeight}) {
    return currentWidth === initialWidth
      && currentHeight === initialHeight;
  }

  _getZoomControlButtonsComponent() {
    if (this.props.enableZoomControls) {
      return (<ZoomControlButtons
        fullyZoomedOut={this._isFullyZoomedOut(this.state, this.props)}
        fullyZoomedIn={this._isFullyZoomedIn(this.state, this.props)}
        enableReset={this.props.enableReset}
        zoomOutClick={this._onZoomOutClick}
        resetClick={this._onResetClick}
        zoomInClick={this._onZoomInClick}/>);
    }
  }

  _getZoomableImageClasses() {
    return classNames("ZoomableImage", this.props.className);
  }

  render() {
    const {viewportWidth, viewportHeight} = this.props;
    const {currentWidth, currentHeight, previousWidth, previousHeight} = this.state;
    const {scrollLeft, scrollTop} = this._getImagePosition(this.state, this.props);
    return (
      <div className={this._getZoomableImageClasses()}>
        {this._getZoomControlButtonsComponent()}
        <PannableContainer
          scrollContentOnUpdate={true}
          width={viewportWidth}
          height={viewportHeight}
          scrollLeft={scrollLeft}
          scrollTop={scrollTop}>
          <div style={{margin: "0 auto", width: currentWidth, height: currentHeight}}>
            <Motion
              defaultStyle={{
                width: previousWidth,
                height: previousHeight
              }}
              style={{
                width: spring(currentWidth),
                height: spring(currentHeight)
              }}>
                {(value) => {
                  return (<SpinnerImage
                    imageWidth={this.props.maxWidth}
                    imageHeight={this.props.maxHeight}
                    src={this.props.src}
                    style={{width: value.width, height: value.height}}
                  />);
                }}
            </Motion>
          </div>
        </PannableContainer>
      </div>
    );
  }
}

ZoomableImage.displayName = "ZoomableImage";

ZoomableImage.propTypes = {
  /**
   The viewport window width, used for panning the image
   */
  viewportWidth: PropTypes.number.isRequired,
  /**
   The viewport window height, used for panning the image
   */
  viewportHeight: PropTypes.number.isRequired,
  /**
   The src attribite of the image
   */
  src: PropTypes.string.isRequired,
  /**
   When set to true displays the zoom control buttons
   */
  enableZoomControls: PropTypes.bool,
  /**
   When set to true dispaly a reset button when zoom controls are enabled
   */
  enableReset: PropTypes.bool,
  /**
   The max width that an image can be zoomed in
   */
  maxWidth: PropTypes.number,
  /**
   The max height that an image can be zoomed in
   */
  maxHeight: PropTypes.number,
  /**
   Initial width of the image to be zoomed
   */
  initialWidth: PropTypes.number,
  /**
   Initial height of the image to be zoomed
   */
  initialHeight: PropTypes.number,
  /**
   The zoom in/ zoom out ratio.
   */
  zoomRatio: PropTypes.number,
  /**
   Additional css classNames passed into the component.
   */
  className: PropTypes.string
};

ZoomableImage.defaultProps = {
  enableZoomControls: true,
  enableReset: false,
  maxWidth: 2000,
  maxHeight: 2000,
  initialWidth: 450,
  initialHeight: 450,
  zoomRatio: 1000,
  className: ""
};

export default ZoomableImage;
