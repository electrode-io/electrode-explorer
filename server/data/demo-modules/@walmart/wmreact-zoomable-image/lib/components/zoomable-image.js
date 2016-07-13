"use strict";

exports.__esModule = true;

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

var _reactMotion = require("react-motion");

var _spinnerImage = require("./spinner-image");

var _spinnerImage2 = _interopRequireDefault(_spinnerImage);

var _pannableContainer = require("./pannable-container");

var _pannableContainer2 = _interopRequireDefault(_pannableContainer);

var _zoomControlButtons = require("./zoom-control-buttons");

var _zoomControlButtons2 = _interopRequireDefault(_zoomControlButtons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var ZoomableImage = function (_Component) {
  (0, _inherits3.default)(ZoomableImage, _Component);

  function ZoomableImage(props) {
    (0, _classCallCheck3.default)(this, ZoomableImage);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this._onZoomInClick = _this._onZoomInClick.bind(_this);
    _this._onZoomOutClick = _this._onZoomOutClick.bind(_this);
    _this._onResetClick = _this._onResetClick.bind(_this);
    _this.state = _this._getInitialStateObj(props);
    return _this;
  }

  ZoomableImage.prototype._getInitialStateObj = function _getInitialStateObj(_ref) {
    var initialWidth = _ref.initialWidth;
    var initialHeight = _ref.initialHeight;

    return {
      currentWidth: initialWidth,
      currentHeight: initialHeight,
      previousWidth: initialWidth,
      previousHeight: initialHeight
    };
  };

  ZoomableImage.prototype._onZoomInClick = function _onZoomInClick() {
    if (!this._isFullyZoomedIn(this.state, this.props)) {
      var _props = this.props;
      var zoomRatio = _props.zoomRatio;
      var maxWidth = _props.maxWidth;
      var maxHeight = _props.maxHeight;
      var _state = this.state;
      var currentWidth = _state.currentWidth;
      var currentHeight = _state.currentHeight;

      var newWidth = currentWidth + zoomRatio;
      var newHeight = currentHeight + zoomRatio;
      this.setState({
        currentWidth: Math.min(newWidth, maxWidth),
        currentHeight: Math.min(newHeight, maxHeight),
        previousWidth: currentWidth,
        previousHeight: currentHeight
      });
    }
  };

  ZoomableImage.prototype._onZoomOutClick = function _onZoomOutClick() {
    if (!this._isFullyZoomedOut(this.state, this.props)) {
      var _props2 = this.props;
      var zoomRatio = _props2.zoomRatio;
      var initialWidth = _props2.initialWidth;
      var initialHeight = _props2.initialHeight;
      var _state2 = this.state;
      var currentWidth = _state2.currentWidth;
      var currentHeight = _state2.currentHeight;

      var newWidth = currentWidth - zoomRatio;
      var newHeight = currentHeight - zoomRatio;
      this.setState({
        currentWidth: Math.max(newWidth, initialWidth),
        currentHeight: Math.max(newHeight, initialHeight),
        previousWidth: currentWidth,
        previousHeight: currentHeight
      });
    }
  };

  ZoomableImage.prototype._onResetClick = function _onResetClick() {
    if (!this._isFullyZoomedOut(this.state, this.props)) {
      this.setState(this._getInitialStateObj(this.props));
    }
  };

  ZoomableImage.prototype._getImagePosition = function _getImagePosition(_ref2, _ref3) {
    var currentWidth = _ref2.currentWidth;
    var currentHeight = _ref2.currentHeight;
    var viewportWidth = _ref3.viewportWidth;
    var viewportHeight = _ref3.viewportHeight;

    // calculate the position to center the image
    var scrollLeft = (currentWidth - viewportWidth) / 2;
    var scrollTop = (currentHeight - viewportHeight) / 2;
    return { scrollLeft: scrollLeft, scrollTop: scrollTop };
  };

  ZoomableImage.prototype._isFullyZoomedIn = function _isFullyZoomedIn(_ref4, _ref5) {
    var currentWidth = _ref4.currentWidth;
    var currentHeight = _ref4.currentHeight;
    var maxWidth = _ref5.maxWidth;
    var maxHeight = _ref5.maxHeight;

    return currentWidth === maxWidth && currentHeight === maxHeight;
  };

  ZoomableImage.prototype._isFullyZoomedOut = function _isFullyZoomedOut(_ref6, _ref7) {
    var currentWidth = _ref6.currentWidth;
    var currentHeight = _ref6.currentHeight;
    var initialWidth = _ref7.initialWidth;
    var initialHeight = _ref7.initialHeight;

    return currentWidth === initialWidth && currentHeight === initialHeight;
  };

  ZoomableImage.prototype._getZoomControlButtonsComponent = function _getZoomControlButtonsComponent() {
    if (this.props.enableZoomControls) {
      return _react2.default.createElement(_zoomControlButtons2.default, {
        fullyZoomedOut: this._isFullyZoomedOut(this.state, this.props),
        fullyZoomedIn: this._isFullyZoomedIn(this.state, this.props),
        enableReset: this.props.enableReset,
        zoomOutClick: this._onZoomOutClick,
        resetClick: this._onResetClick,
        zoomInClick: this._onZoomInClick });
    }
  };

  ZoomableImage.prototype._getZoomableImageClasses = function _getZoomableImageClasses() {
    return (0, _classnames2.default)("ZoomableImage", this.props.className);
  };

  ZoomableImage.prototype.render = function render() {
    var _this2 = this;

    var _props3 = this.props;
    var viewportWidth = _props3.viewportWidth;
    var viewportHeight = _props3.viewportHeight;
    var _state3 = this.state;
    var currentWidth = _state3.currentWidth;
    var currentHeight = _state3.currentHeight;
    var previousWidth = _state3.previousWidth;
    var previousHeight = _state3.previousHeight;

    var _getImagePosition2 = this._getImagePosition(this.state, this.props);

    var scrollLeft = _getImagePosition2.scrollLeft;
    var scrollTop = _getImagePosition2.scrollTop;

    return _react2.default.createElement(
      "div",
      { className: this._getZoomableImageClasses() },
      this._getZoomControlButtonsComponent(),
      _react2.default.createElement(
        _pannableContainer2.default,
        {
          scrollContentOnUpdate: true,
          width: viewportWidth,
          height: viewportHeight,
          scrollLeft: scrollLeft,
          scrollTop: scrollTop },
        _react2.default.createElement(
          "div",
          { style: { margin: "0 auto", width: currentWidth, height: currentHeight } },
          _react2.default.createElement(
            _reactMotion.Motion,
            {
              defaultStyle: {
                width: previousWidth,
                height: previousHeight
              },
              style: {
                width: (0, _reactMotion.spring)(currentWidth),
                height: (0, _reactMotion.spring)(currentHeight)
              } },
            function (value) {
              return _react2.default.createElement(_spinnerImage2.default, {
                imageWidth: _this2.props.maxWidth,
                imageHeight: _this2.props.maxHeight,
                src: _this2.props.src,
                style: { width: value.width, height: value.height }
              });
            }
          )
        )
      )
    );
  };

  return ZoomableImage;
}(_react.Component);

ZoomableImage.displayName = "ZoomableImage";

ZoomableImage.propTypes = {
  /**
   The viewport window width, used for panning the image
   */
  viewportWidth: _react.PropTypes.number.isRequired,
  /**
   The viewport window height, used for panning the image
   */
  viewportHeight: _react.PropTypes.number.isRequired,
  /**
   The src attribite of the image
   */
  src: _react.PropTypes.string.isRequired,
  /**
   When set to true displays the zoom control buttons
   */
  enableZoomControls: _react.PropTypes.bool,
  /**
   When set to true dispaly a reset button when zoom controls are enabled
   */
  enableReset: _react.PropTypes.bool,
  /**
   The max width that an image can be zoomed in
   */
  maxWidth: _react.PropTypes.number,
  /**
   The max height that an image can be zoomed in
   */
  maxHeight: _react.PropTypes.number,
  /**
   Initial width of the image to be zoomed
   */
  initialWidth: _react.PropTypes.number,
  /**
   Initial height of the image to be zoomed
   */
  initialHeight: _react.PropTypes.number,
  /**
   The zoom in/ zoom out ratio.
   */
  zoomRatio: _react.PropTypes.number,
  /**
   Additional css classNames passed into the component.
   */
  className: _react.PropTypes.string
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

exports.default = ZoomableImage;