"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _object = require("lodash/object");

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

var _wmreactImageUtils = require("@walmart/wmreact-image-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var SpinnerImage = function (_Component) {
  (0, _inherits3.default)(SpinnerImage, _Component);

  function SpinnerImage(props) {
    (0, _classCallCheck3.default)(this, SpinnerImage);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = { showSpinner: true };
    _this._onImageLoad = _this._onImageLoad.bind(_this);
    return _this;
  }

  SpinnerImage.prototype._onImageLoad = function _onImageLoad() {
    // When the image loading finishes, hide the spinner
    this.setState({
      showSpinner: false
    });
  };

  SpinnerImage.prototype._getContainerClasses = function _getContainerClasses() {
    return (0, _classnames2.default)("SpinnerImage-container", this.props.className);
  };

  SpinnerImage.prototype._getMainImageClasses = function _getMainImageClasses() {
    return (0, _classnames2.default)("SpinnerImage-mainimage", {
      "hide-content": this.state.showSpinner
    });
  };

  SpinnerImage.prototype._getSpinnerComponent = function _getSpinnerComponent(_ref) {
    var showSpinner = _ref.showSpinner;

    if (showSpinner) {
      return _react2.default.createElement("div", { className: (0, _classnames2.default)("SpinnerImage-spinner", "spinner") });
    }
  };

  SpinnerImage.prototype._getContainerStyleObject = function _getContainerStyleObject() {
    var minWidth = (0, _object.get)(this, "props.style.width", "inherit");
    var minHeight = (0, _object.get)(this, "props.style.height", "inherit");
    return (0, _extends3.default)({ minWidth: minWidth, minHeight: minHeight }, this.props.style, { "display": "block", "margin": "0 auto", "maxWidth": "inherit" });
  };

  SpinnerImage.prototype._getImageStyleObject = function _getImageStyleObject() {
    return {
      "width": "inherit",
      "height": "inherit"
    };
  };

  SpinnerImage.prototype._getMainImageComponent = function _getMainImageComponent() {
    var _props = this.props;
    var src = _props.src;
    var imageWidth = _props.imageWidth;
    var imageHeight = _props.imageHeight;

    return _react2.default.createElement(_image2.default, { lazy: true, onLoad: this._onImageLoad,
      style: this._getImageStyleObject(),
      className: this._getMainImageClasses(),
      src: (0, _wmreactImageUtils.checkImageSrc)(src, imageWidth, imageHeight) });
  };

  SpinnerImage.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { style: this._getContainerStyleObject(),
        className: this._getContainerClasses() },
      this._getSpinnerComponent(this.state),
      this._getMainImageComponent()
    );
  };

  return SpinnerImage;
}(_react.Component);

SpinnerImage.displayName = "SpinnerImage";
SpinnerImage.propTypes = {
  /**
    The style object. Usually used to set
    the width and height of the SpinnerImage.
  */
  style: _react.PropTypes.object,
  /**
    The image width.
  */
  imageWidth: _react.PropTypes.number,
  /**
    The image height.
  */
  imageHeight: _react.PropTypes.number,
  /**
    Additional css classNames passed into the component.
  */
  className: _react.PropTypes.string,
  /**
    The image source.
  */
  src: _react.PropTypes.string.isRequired
};

SpinnerImage.defaultProps = {
  style: {},
  imageWidth: 450,
  imageHeight: 450,
  className: ""
};

exports.default = SpinnerImage;