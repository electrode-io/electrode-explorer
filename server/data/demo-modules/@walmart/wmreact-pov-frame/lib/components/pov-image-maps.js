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

var _reactDom = require("react-dom");

var _reactDom2 = _interopRequireDefault(_reactDom);

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

var _debounce = require("lodash/debounce");

var _debounce2 = _interopRequireDefault(_debounce);

var _imageUtils = require("../helpers/image-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RESIZE_DEBOUNCE_TIME = 50;

var POVImageMaps = function (_Component) {
  (0, _inherits3.default)(POVImageMaps, _Component);

  function POVImageMaps(props) {
    (0, _classCallCheck3.default)(this, POVImageMaps);


    // Calculate and cache the original coordinates in correct format
    // for scaling calculation on resize. We only get the coordinates for full size.
    // Attached to `this` for caching the result as value is needed in resize handler.

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.originalCoordinates = props.clickThrough.value.map(function (iMap) {
      return iMap.coords.split(",").map(function (coordinate) {
        var intCoordinate = parseInt(coordinate, 10);
        return isNaN(intCoordinate) ? 0 : intCoordinate;
      });
    });

    _this.state = { imageMaps: _this.originalCoordinates };
    _this._refreshImageMaps = _this._refreshImageMaps.bind(_this);
    return _this;
  }

  POVImageMaps.prototype.componentDidMount = function componentDidMount() {
    var _this2 = this;

    // Cache the image node.
    this.imageNode = _reactDom2.default.findDOMNode(this.refs.povImage);
    this._debouncedResizeHandler = (0, _debounce2.default)(function () {
      _this2._refreshImageMaps();
    }, RESIZE_DEBOUNCE_TIME);

    window.addEventListener("resize", this._debouncedResizeHandler);
  };

  POVImageMaps.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("resize", this._debouncedResizeHandler);
  };

  /*
   * Re calculates the imagemaps coordinates.
   */


  POVImageMaps.prototype._refreshImageMaps = function _refreshImageMaps() {
    var _props = this.props;
    var height = _props.height;
    var width = _props.width;

    var currentWidth = this.imageNode.offsetWidth;
    var currentHeight = this.imageNode.offsetHeight;

    var actualImageWidth = parseInt(width, 10);
    var actualImageHeight = parseInt(height, 10);

    if (!actualImageWidth || !actualImageHeight) {
      return;
    }

    var xScalingFactor = currentWidth / actualImageWidth;
    var yScalingFactor = currentHeight / actualImageHeight;

    var newCoords = this.originalCoordinates.map(function (coordinateArr) {
      return coordinateArr.map(function (coordinate, index) {
        var scaleFactor = index % 2 === 0 ? xScalingFactor : yScalingFactor;
        return coordinate * scaleFactor;
      });
    });

    this.setState({
      imageMaps: newCoords
    });
  };

  POVImageMaps.prototype._renderImage = function _renderImage() {
    var _props2 = this.props;
    var alt = _props2.alt;
    var title = _props2.title;
    var src = _props2.src;
    var height = _props2.height;
    var width = _props2.width;
    var lazy = _props2.lazy;
    var isMobile = _props2.isMobile;
    var uid = _props2.uid;
    var assetId = _props2.assetId;

    var imageProps = { alt: alt, title: title, height: height, width: width, lazy: lazy, src: src };

    imageProps.src = (0, _imageUtils.getTorbitImage)(src, isMobile);

    imageProps.useMap = "#map-" + title + "-" + uid + "-" + assetId;
    imageProps.onLoad = this._refreshImageMaps;

    return _react2.default.createElement(_image2.default, (0, _extends3.default)({}, imageProps, { ref: "povImage" }));
  };

  POVImageMaps.prototype._renderImageMaps = function _renderImageMaps() {
    var _this3 = this;

    var _props3 = this.props;
    var clickThrough = _props3.clickThrough;
    var height = _props3.height;
    var width = _props3.width;
    var uid = _props3.uid;
    var assetId = _props3.assetId;


    var areas = clickThrough.value.map(function (iMap, index) {
      var title = iMap.title;
      var url = iMap.url;
      var shape = iMap.shape;

      var coords = _this3.state.imageMaps[index];
      return _react2.default.createElement("area", {
        key: index,
        tabIndex: "-1",
        title: title,
        href: url,
        coords: coords,
        shape: shape
      });
    });

    var _props4 = this.props;
    var title = _props4.title;
    var url = _props4.url;

    // If url exists. Make rest of the image clickable too.

    if (url) {
      var imageCoords = ["0", "0", width, height].join(", ");
      var imageClicker = _react2.default.createElement("area", {
        key: areas.length,
        tabIndex: "-1",
        title: title,
        href: url,
        coords: imageCoords,
        shape: "rect"
      });
      areas.push(imageClicker);
    }

    return _react2.default.createElement(
      "map",
      { name: "map-" + title + "-" + uid + "-" + assetId },
      areas
    );
  };

  POVImageMaps.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      null,
      this._renderImage(),
      this._renderImageMaps()
    );
  };

  return POVImageMaps;
}(_react.Component);

exports.default = POVImageMaps;


POVImageMaps.propTypes = {
  /**
  Alt text for image.
  */
  alt: _react.PropTypes.string,
  /**
  identifier used in analytics.
  */
  assetId: _react.PropTypes.string,
  /**
  An object with target url information in form of simple link or image maps.
  */
  clickThrough: _react.PropTypes.shape({
    type: _react.PropTypes.string.isRequired,
    value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array])
  }),
  /**
  Content Type of image file. To be used in module preview.
  */
  contentType: _react.PropTypes.string,
  /**
  Image height.
  */
  height: _react.PropTypes.string.isRequired,
  /**
  Size of image file in bytes. To be used in module preview.
  */
  size: _react.PropTypes.string,
  /**
  Image source.
  */
  src: _react.PropTypes.string.isRequired,
  /**
  Image title.
  */
  title: _react.PropTypes.string,
  /**
  identifier used in analytics.
  */
  uid: _react.PropTypes.string,
  /**
  Image width.
  */
  width: _react.PropTypes.string.isRequired,
  /**
  Target url for rest of the image in case of image maps.
  */
  url: _react.PropTypes.string,
  /**
   * lazy load image
   */
  lazy: _react.PropTypes.bool,
  /**
    * is mobile or desktop?
    */
  isMobile: _react.PropTypes.bool
};

POVImageMaps.defaultProps = {
  url: ""
};