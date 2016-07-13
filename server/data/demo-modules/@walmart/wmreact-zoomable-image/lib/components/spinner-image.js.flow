import React, { Component, PropTypes} from "react";
import classNames from "classnames";
import { get } from "lodash/object";
import Image from "@walmart/wmreact-base/lib/components/image";
import { checkImageSrc } from "@walmart/wmreact-image-utils";

/**
An image component that displays a loading spinner while the image is loading.
```jsx
<SpinnerImage style={{
  width:300,
  height:300
}} src="http://i5.walmartimages.com/dfw/dce07b8c-3b27/
k2-_afa12da1-f17a-4ace-a8ae-8820733e5e0d.v1.jpg"/>
```
@import {SpinnerImage}
@flags noVisibleRender
@component SpinnerImage
@playground
SpinnerImage
```
<SpinnerImage style={{
  width:300,
  height:300
}} src="http://i5.walmartimages.com/dfw/dce07b8c-3b27/
k2-_afa12da1-f17a-4ace-a8ae-8820733e5e0d.v1.jpg"/>
```
*/

class SpinnerImage extends Component {
  constructor(props) {
    super(props);
    this.state = {showSpinner: true};
    this._onImageLoad = this._onImageLoad.bind(this);
  }

  _onImageLoad() {
    // When the image loading finishes, hide the spinner
    this.setState({
      showSpinner: false
    });
  }

  _getContainerClasses() {
    return classNames("SpinnerImage-container",
     this.props.className);
  }

  _getMainImageClasses() {
    return classNames("SpinnerImage-mainimage", {
      "hide-content": this.state.showSpinner
    });
  }

  _getSpinnerComponent({showSpinner}) {
    if (showSpinner) {
      return (<div className={classNames("SpinnerImage-spinner", "spinner")}></div>);
    }
  }

  _getContainerStyleObject() {
    const minWidth = get(this, "props.style.width", "inherit");
    const minHeight = get(this, "props.style.height", "inherit");
    return {
      ...{minWidth, minHeight},
      ...this.props.style,
      ...{ "display": "block", "margin": "0 auto", "maxWidth": "inherit"}
    };
  }

  _getImageStyleObject() {
    return {
      "width": "inherit",
      "height": "inherit"
    };
  }

  _getMainImageComponent() {
    const {src, imageWidth, imageHeight} = this.props;
    return (<Image lazy onLoad={this._onImageLoad}
      style={this._getImageStyleObject()}
      className={this._getMainImageClasses()}
      src={checkImageSrc(src, imageWidth, imageHeight)}/>);
  }

  render() {
    return (
      <div style={this._getContainerStyleObject()}
        className={this._getContainerClasses()}>
        {this._getSpinnerComponent(this.state)}
        {this._getMainImageComponent()}
      </div>);
  }
}

SpinnerImage.displayName = "SpinnerImage";
SpinnerImage.propTypes = {
  /**
    The style object. Usually used to set
    the width and height of the SpinnerImage.
  */
  style: PropTypes.object,
  /**
    The image width.
  */
  imageWidth: PropTypes.number,
  /**
    The image height.
  */
  imageHeight: PropTypes.number,
  /**
    Additional css classNames passed into the component.
  */
  className: PropTypes.string,
  /**
    The image source.
  */
  src: PropTypes.string.isRequired
};

SpinnerImage.defaultProps = {
  style: {},
  imageWidth: 450,
  imageHeight: 450,
  className: ""
};

export default SpinnerImage;
