"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

var _clickThroughImageMap = require("./click-through-image-map");

var _clickThroughImageMap2 = _interopRequireDefault(_clickThroughImageMap);

var _themeButton = require("./theme-button");

var _themeButton2 = _interopRequireDefault(_themeButton);

var _dynamicPriceBubble = require("./dynamic-price-bubble");

var _dynamicPriceBubble2 = _interopRequireDefault(_dynamicPriceBubble);

var _pointerEventsNoneWrapper = require("./pointer-events-none-wrapper");

var _pointerEventsNoneWrapper2 = _interopRequireDefault(_pointerEventsNoneWrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A Single pov in SingleStory and MultiStory POV modules.
@param {Object} props React props for the component
@returns {ReactElement} Image link component
@examples
Basic POV Story
```jsx
<POVStory {...povStoryData}/>
```
*/

var POVStory = function POVStory(props) {
  var _props$story = props.story;
  var image = _props$story.image;
  var overlays = _props$story.overlays;
  var themeButtonColor = _props$story.themeButtonColor;
  var buttonAlignment = _props$story.buttonAlignment;
  var themeButton = _props$story.themeButton;
  var buttonTextColor = _props$story.buttonTextColor;
  var mobileImage = _props$story.mobileImage;
  var isMobile = props.isMobile;
  var lazy = props.lazy;
  var dataAutomationId = props.dataAutomationId;


  var isMobileImage = isMobile && mobileImage;

  var imageSize = {
    height: isMobileImage ? "178" : "300",
    width: isMobileImage ? "809" : "1364"
  };

  var povImage = isMobileImage ? mobileImage : image;

  var classes = (0, _classnames2.default)("btn hide-content-max-m display-inline-block-m PovThemeButton", "PovThemeButton-" + buttonAlignment);

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({
      className: "PovStory"
    }, (0, _automationIdUtils.getDataAutomationIdPair)("POV", dataAutomationId)),
    overlays && overlays.map(function (overlay, index) {
      return _react2.default.createElement(
        _pointerEventsNoneWrapper2.default,
        { key: index },
        _react2.default.createElement(_dynamicPriceBubble2.default, {
          dataAutomationId: dataAutomationId,
          overlay: overlay,
          isMobileImage: isMobileImage
        })
      );
    }),
    _react2.default.createElement(_clickThroughImageMap2.default, {
      lazy: lazy,
      image: povImage,
      imageSize: imageSize,
      dataAutomationId: dataAutomationId
    }),
    themeButton && _react2.default.createElement(_themeButton2.default, (0, _extends3.default)({
      themeButtonColor: themeButtonColor,
      dataAutomationId: dataAutomationId,
      className: classes,
      buttonTextColor: buttonTextColor

    }, themeButton))
  );
};

POVStory.displayName = "POVStory";

POVStory.propTypes = {
  /**
  story object of POV
  */
  story: _react.PropTypes.shape({
    image: _react.PropTypes.shape({
      alt: _react.PropTypes.string,
      clickThrough: _react.PropTypes.shape({
        value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
        type: _react.PropTypes.string
      }),
      title: _react.PropTypes.string,
      src: _react.PropTypes.string
    }).isRequired,
    overlays: _react.PropTypes.array,
    themeButtonColor: _react.PropTypes.string,
    themeButton: _react.PropTypes.object,
    buttonTextColor: _react.PropTypes.string,
    mobileImage: _react.PropTypes.shape({
      alt: _react.PropTypes.string,
      clickThrough: _react.PropTypes.shape({
        value: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.array]),
        type: _react.PropTypes.string
      }),
      title: _react.PropTypes.string,
      src: _react.PropTypes.string
    })
  }).isRequired,
  /**
   whether the pov Image should lazy load or not.
   */
  lazy: _react.PropTypes.bool,
  /**
  if it is a mobile request
  */
  isMobile: _react.PropTypes.bool,
  /**
  Automation ID base string
  */
  dataAutomationId: _react.PropTypes.string
};

POVStory.defaultProps = {
  lazy: false,
  isMobile: false,
  dataAutomationId: ""
};

exports.default = POVStory;