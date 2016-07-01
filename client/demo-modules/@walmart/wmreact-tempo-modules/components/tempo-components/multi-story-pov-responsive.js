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

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

var _fireDataEvent = require("@walmart/wmreact-analytics/lib/helpers/fire-data-event");

var _fireDataEvent2 = _interopRequireDefault(_fireDataEvent);

var _automationIdUtils = { getDataAutomationIdPair: function () { /* no-op */ } };

var _carousel = require("@walmart/wmreact-carousel/lib/components/carousel");

var _carousel2 = _interopRequireDefault(_carousel);

var _carouselDecorators = require("@walmart/wmreact-carousel/lib/components/carousel-decorators");

var _povStory = require("../helper-components/pov-story");

var _povStory2 = _interopRequireDefault(_povStory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**

The MiltiStory POV component has links, Images, Theme Button, dynamic pricing and theme buttons.
 * Provides link to the special Categories
 * Offers scaling and cropping on with safe zone on defined breakpoints

```jsx
<MultiStoryPOVResponsive
  isMobile={true}
  moduleData={multiStoryPOVData}/>
```
@import {MultiStoryPOVResponsive}
@component MultiStoryPOVResponsive
@playground
MultiStoryPOVResponsive
*/

var MultiStoryPOVResponsive = function (_Component) {
  (0, _inherits3.default)(MultiStoryPOVResponsive, _Component);

  function MultiStoryPOVResponsive(props) {
    (0, _classCallCheck3.default)(this, MultiStoryPOVResponsive);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      lazyLoadIndex: 1
    };

    _this.moduleViewFired = [];
    _this._loadStories = _this._loadStories.bind(_this);
    _this._fireModuleView = _this._fireModuleView.bind(_this);
    return _this;
  }

  MultiStoryPOVResponsive.prototype.componentDidMount = function componentDidMount() {
    this._fireModuleView(0);
  };

  MultiStoryPOVResponsive.prototype._isVisible = function _isVisible() {
    var carouselNode = _reactDom2.default.findDOMNode(this.refs.carousel);
    return carouselNode.getBoundingClientRect().top >= 0;
  };

  // used to stub fireDataEvent in tests


  MultiStoryPOVResponsive.prototype._fireDataEventWrapper = function _fireDataEventWrapper(data) {
    return (0, _fireDataEvent2.default)(this, "module_view", data);
  };

  MultiStoryPOVResponsive.prototype._fireModuleView = function _fireModuleView(index) {
    if (!this._isVisible()) {
      return;
    }

    // only fire event for slide that hasn't been seen yet
    if (this.moduleViewFired[index]) {
      return;
    }
    this.moduleViewFired[index] = true;

    var _props$moduleData = this.props.moduleData;
    var moduleId = _props$moduleData.moduleId;
    var story = _props$moduleData.configs.story;
    var _story$index$image = story[index].image;
    var uid = _story$index$image.uid;
    var _story$index$image$cl = _story$index$image.clickThrough;
    var type = _story$index$image$cl.type;
    var value = _story$index$image$cl.value;

    var uids = [uid];
    if (type === "map") {
      value.forEach(function (map, mapIndex) {
        uids.push(uid + "-" + mapIndex);
      });
    }

    this._fireDataEventWrapper({ moduleId: moduleId, uids: uids });
  };

  MultiStoryPOVResponsive.prototype._loadStories = function _loadStories() {
    if (this.state.lazyLoadIndex !== null) {
      this.setState({ lazyLoadIndex: null });
    }
  };

  MultiStoryPOVResponsive.prototype._renderPOVStories = function _renderPOVStories(_ref) {
    var story = _ref.story;
    var automationId = _ref.automationId;
    var isMobile = _ref.isMobile;
    var lazyLoadIndex = _ref.lazyLoadIndex;


    var stories = [];
    var renderedStoryIndex = stories.length;

    story.forEach(function (frame) {
      if (lazyLoadIndex !== null && renderedStoryIndex >= lazyLoadIndex) {
        stories.push(null);
      } else {
        stories.push(_react2.default.createElement(_povStory2.default, {
          isMobile: isMobile,
          key: renderedStoryIndex,
          story: frame,
          dataAutomationId: automationId + "-" + renderedStoryIndex
        }));
      }
      renderedStoryIndex++;
    });

    return stories;
  };

  MultiStoryPOVResponsive.prototype.render = function render() {
    var _props = this.props;
    var _props$moduleData2 = _props.moduleData;
    var moduleId = _props$moduleData2.moduleId;
    var type = _props$moduleData2.type;
    var _props$moduleData2$co = _props$moduleData2.configs;
    var autoRotation = _props$moduleData2$co.autoRotation;
    var arrowColor = _props$moduleData2$co.arrowColor;
    var story = _props$moduleData2$co.story;
    var isMobile = _props.isMobile;
    var dataAutomationId = _props.dataAutomationId;
    var zoneId = _props.zoneId;


    var initialSlideWidth = isMobile ? 878 : 1364;
    var automationId = dataAutomationId + "-MultiStoryPOVResponsive";

    var decoratorParams = {
      dataAutomationId: automationId,
      isLarge: true,
      isDark: arrowColor === "dark",
      isLight: arrowColor === "white",
      isNoHover: true,
      alwaysShow: true,
      dotsStyle: {
        bottom: 12
      }
    };
    var lazyLoadIndex = this.state.lazyLoadIndex;

    var RenderPOVProps = {
      story: story,
      automationId: automationId,
      isMobile: isMobile,
      lazyLoadIndex: lazyLoadIndex
    };
    var autoPlay = autoRotation === "on";

    return _react2.default.createElement(
      _collectorContext2.default,
      { moduleId: moduleId, zoneId: zoneId },
      _react2.default.createElement(
        "div",
        (0, _extends3.default)({
          className: "MultiStoryPOVResponsive",
          "data-module": type,
          "data-module-id": moduleId
        }, (0, _automationIdUtils.getDataAutomationIdPair)(automationId, "")),
        _react2.default.createElement(
          _carousel2.default,
          (0, _extends3.default)({
            ref: "carousel",
            autoplay: autoPlay,
            wrapAround: true,
            autoplayInterval: 5000
          }, { initialSlideWidth: initialSlideWidth }, {
            decorators: (0, _carouselDecorators.getCarouselDecorators)(decoratorParams),
            beforeSlide: this._loadStories,
            afterSlide: this._fireModuleView }),
          this._renderPOVStories(RenderPOVProps)
        )
      )
    );
  };

  return MultiStoryPOVResponsive;
}(_react.Component);

MultiStoryPOVResponsive.displayName = "MultiStoryPOVResponsive";

MultiStoryPOVResponsive.propTypes = {
  /**
   * Data for configuring the component. Typically coming from Tempo.
   * Contains information on the URL, link text, and colors to use for the links.
   */
  moduleData: _react.PropTypes.shape({
    moduleId: _react.PropTypes.string,
    type: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      autoRotation: _react.PropTypes.string,
      arrowColor: _react.PropTypes.string,
      story: _react.PropTypes.array
    }).isRequired
  }).isRequired,
  /**
  To add proper torbit params (width and height)
  */
  isMobile: _react.PropTypes.bool,
  /**
  Tempo module type for analytics and automation testing
  */
  dataAutomationId: _react.PropTypes.string,
  /**
  * Zone ID for analytics
  */
  zoneId: _react.PropTypes.number
};

MultiStoryPOVResponsive.defaultProps = {
  isMobile: false,
  dataAutomationId: "",
  zoneId: 0
};

MultiStoryPOVResponsive.contextTypes = {
  analytics: _react.PropTypes.object
};

exports.default = MultiStoryPOVResponsive;