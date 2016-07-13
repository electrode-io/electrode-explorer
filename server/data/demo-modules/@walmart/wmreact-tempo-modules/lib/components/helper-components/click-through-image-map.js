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

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

var _wmreactImageUtils = require("@walmart/wmreact-image-utils");

var _fireUiEvent = require("@walmart/wmreact-analytics/lib/helpers/fire-ui-event");

var _fireUiEvent2 = _interopRequireDefault(_fireUiEvent);

var _resizeImageMap = require("../../helpers/resize-image-map");

var _resizeImageMap2 = _interopRequireDefault(_resizeImageMap);

var _reactDom = require("react-dom");

var _widthWatcher = require("@walmart/wmreact-layout/lib/components/utils/width-watcher");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var ClickThroughImageMap = function (_React$Component) {
  (0, _inherits3.default)(ClickThroughImageMap, _React$Component);

  function ClickThroughImageMap(props) {
    (0, _classCallCheck3.default)(this, ClickThroughImageMap);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    if (props.image.clickThrough.type === "map") {
      var coords = props.image.clickThrough.value.map(function (area) {
        return area.coords;
      });
      _this.state = { coords: coords, originalCoords: coords };
    }

    _this._setMapSize = _this._setMapSize.bind(_this);
    _this.widthWatcher = new _widthWatcher.WidthWatcher();
    return _this;
  }

  ClickThroughImageMap.prototype.componentDidMount = function componentDidMount() {
    this.widthWatcher.addSubscriber(this);
  };

  ClickThroughImageMap.prototype.componentWillUnmount = function componentWillUnmount() {
    this.widthWatcher.removeSubscriber(this);
  };

  ClickThroughImageMap.prototype.updateWidth = function updateWidth() {
    if (this.props.image.clickThrough.type === "map") {
      this._setMapSize();
    }
  };

  ClickThroughImageMap.prototype._fireAnalyticsEvent = function _fireAnalyticsEvent(ev, uid, href) {
    (0, _fireUiEvent2.default)(this, ev, { extras: { uid: uid, href: href } });
  };

  ClickThroughImageMap.prototype._findImageElement = function _findImageElement() {
    return (0, _reactDom.findDOMNode)(this.refs.image);
  };

  ClickThroughImageMap.prototype._setMapSize = function _setMapSize() {
    var naturalImageSize = {
      naturalWidth: this.props.image.width,
      naturalHeight: this.props.image.height
    };

    var coords = (0, _resizeImageMap2.default)(this._findImageElement(), this.state.originalCoords, naturalImageSize);
    this.setState({ coords: coords });
  };

  ClickThroughImageMap.prototype._renderMapAreas = function _renderMapAreas() {
    var _this2 = this;

    var _props = this.props;
    var _props$image = _props.image;
    var value = _props$image.clickThrough.value;
    var uid = _props$image.uid;
    var dataAutomationId = _props.dataAutomationId;


    var mapArea = value.map(function (area, index) {
      var href = area.url.value;
      var shape = area.shape;
      var title = area.title;

      var coords = _this2.state.coords[index];
      var dataUid = uid + "-" + index;

      return _react2.default.createElement("area", (0, _extends3.default)({
        key: index,
        tabIndex: "-1",
        title: title,
        href: href,
        coords: coords,
        shape: shape,
        "data-uid": dataUid,
        onClick: function onClick(ev) {
          _this2._fireAnalyticsEvent(ev, dataUid, href);
        }
      }, (0, _automationIdUtils.getDataAutomationIdPair)("imageMap-area-" + index, dataAutomationId)));
    });
    return mapArea;
  };

  ClickThroughImageMap.prototype._renderMapImage = function _renderMapImage(imageProps, torbitizedSrc) {
    var _this3 = this;

    var _props2 = this.props;
    var _props2$image = _props2.image;
    var value = _props2$image.clickThrough.anchorUrl.value;
    var title = _props2$image.title;
    var height = _props2$image.height;
    var width = _props2$image.width;
    var uid = _props2$image.uid;
    var imageSize = _props2.imageSize;
    var dataAutomationId = _props2.dataAutomationId;


    var mapName = dataAutomationId + "-map";
    return _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(_image2.default, (0, _extends3.default)({
        ref: "image",
        onLoad: this._setMapSize,
        className: "img-hide-alt ClickThroughImage",
        height: height,
        width: width,
        src: torbitizedSrc,
        useMap: "#" + mapName
      }, imageProps)),
      _react2.default.createElement(
        "map",
        { name: mapName },
        this._renderMapAreas(),
        value && _react2.default.createElement("area", (0, _extends3.default)({
          tabIndex: "-1",
          title: title,
          href: value,
          coords: "0,0," + imageSize.width + "," + imageSize.height,
          shape: "rect",
          "data-uid": uid,
          onClick: function onClick(ev) {
            _this3._fireAnalyticsEvent(ev, uid, value);
          }
        }, (0, _automationIdUtils.getDataAutomationIdPair)("imageMap-anchorArea", dataAutomationId)))
      )
    );
  };

  ClickThroughImageMap.prototype._renderLinkImage = function _renderLinkImage(imageProps, torbitizedSrc) {
    var _props3 = this.props;
    var _props3$image = _props3.image;
    var value = _props3$image.clickThrough.value;
    var title = _props3$image.title;
    var uid = _props3$image.uid;
    var dataAutomationId = _props3.dataAutomationId;


    return _react2.default.createElement(
      _link2.default,
      (0, _extends3.default)({
        href: value,
        alt: title,
        "data-uid": uid
      }, (0, _automationIdUtils.getDataAutomationIdPair)("link", dataAutomationId)),
      _react2.default.createElement(_image2.default, (0, _extends3.default)({
        className: "img-hide-alt ClickThroughImage",
        src: torbitizedSrc
      }, imageProps))
    );
  };

  ClickThroughImageMap.prototype.render = function render() {
    /**
    We can't used spread operator here, because passed `size` prop is # of bytes
    of image not the image dimensions. Image component has different
    expectations for size prop. Hence passing only the needed props to Image.
    */
    var _props4 = this.props;
    var _props4$image = _props4.image;
    var alt = _props4$image.alt;
    var type = _props4$image.clickThrough.type;
    var title = _props4$image.title;
    var src = _props4$image.src;
    var _props4$imageSize = _props4.imageSize;
    var height = _props4$imageSize.height;
    var width = _props4$imageSize.width;
    var lazy = _props4.lazy;

    var torbitizedSrc = (0, _wmreactImageUtils.checkImageSrc)(src, height, width);
    var imageProps = { alt: alt, title: title, lazy: lazy };

    return type === "map" ? this._renderMapImage(imageProps, torbitizedSrc) : this._renderLinkImage(imageProps, torbitizedSrc);
  };

  return ClickThroughImageMap;
}(_react2.default.Component);

ClickThroughImageMap.displayName = "ClickThroughImageMap";

ClickThroughImageMap.contextTypes = {
  analytics: _react.PropTypes.object
};

ClickThroughImageMap.propTypes = {
  /**
   Image object of POV
   */
  image: _react.PropTypes.shape({
    alt: _react.PropTypes.string,
    clickThrough: _react.PropTypes.shape({
      value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
      type: _react.PropTypes.string
    }),
    height: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    width: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.number]),
    title: _react.PropTypes.string,
    src: _react.PropTypes.string
  }).isRequired,
  /**
  Image Height and width
  */
  imageSize: _react.PropTypes.object,
  /**
   whether the pov Image should lazy load or not.
   */
  lazy: _react.PropTypes.bool,
  /**
   Automation ID base string
   */
  dataAutomationId: _react.PropTypes.string
};

ClickThroughImageMap.defaultProps = {
  imageSize: {},
  lazy: false,
  dataAutomationId: ""
};
exports.default = ClickThroughImageMap;