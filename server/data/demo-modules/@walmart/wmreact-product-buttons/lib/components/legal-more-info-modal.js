"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _slidepanel = require("@walmart/wmreact-containers/lib/components/slidepanel");

var _slidepanel2 = _interopRequireDefault(_slidepanel);

var _modal = require("@walmart/wmreact-containers/lib/components/modal");

var _modal2 = _interopRequireDefault(_modal);

var _heading = require("@walmart/wmreact-base/lib/components/heading");

var _heading2 = _interopRequireDefault(_heading);

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IMAGE_HOST = "//i5.walmartimages.com/dfw/63fd9f59-ecd8";
var IMAGE_SRC = IMAGE_HOST + "/k2-_2e2a8c94-42d1-4784-83d9-1a47292ee4d6.v11.png";

var MORE_INFO_CONTENT = _react2.default.createElement(
  "div",
  { className: "prod-MoreInfo-container" },
  _react2.default.createElement(
    "div",
    { className: "pull-left" },
    _react2.default.createElement(_image2.default, { src: IMAGE_SRC, size: 60 })
  ),
  _react2.default.createElement(
    "div",
    { className: "prod-MoreInfo-content" },
    _react2.default.createElement(
      "div",
      { className: "prod-MoreInfo-heading" },
      _react2.default.createElement(
        _heading2.default.H6,
        { className: "no-margin" },
        "Restricted"
      )
    ),
    _react2.default.createElement(
      "span",
      { className: "prod-MoreInfo-text" },
      "Some material may be inappropriate for viewers under 17. Requires the approval of a parent or adult guardian."
    )
  )
);

/**
This component renders more info modal on medium and above breakpoints
and renders the content as a slidepanel in smaller breakpoints.
Set the active prop to either show or hide this component

 For example this is how we use this component.

 ```jsx
 <MoreInfoModal active={true}/>
 ```

 @import {MoreInfoModal}
 @flags noVisibleRender
 @component MoreInfoModal
 @playground
 MoreInfoModal
 ```
 <MoreInfoModal active={true}/>
 ```
 @return {ReactElement} MoreInfoModal
 @param {object} props for the component
 */
var MoreInfoModal = function MoreInfoModal(props) {

  var _renderModal = function _renderModal(_ref) {
    var active = _ref.active;
    var onClose = _ref.onClose;

    return _react2.default.createElement(
      "div",
      { className: "hide-content-max-s" },
      _react2.default.createElement(
        _modal2.default,
        { active: active,
          padded: true,
          fixed: true,
          onClose: onClose,
          className: "prod-MoreInfo-modal" },
        MORE_INFO_CONTENT
      )
    );
  };

  var _renderSlidePanel = function _renderSlidePanel(_ref2) {
    var active = _ref2.active;
    var onClose = _ref2.onClose;

    return _react2.default.createElement(
      "div",
      { className: "hide-content-s" },
      _react2.default.createElement(
        _slidepanel2.default,
        { active: active,
          direction: "bottom",
          onClose: onClose,
          padded: true,
          className: "prod-MoreInfo-slidePanel" },
        MORE_INFO_CONTENT
      )
    );
  };

  return _react2.default.createElement(
    "div",
    { className: "prod-MoreInfo-panel" },
    _renderModal(props),
    _renderSlidePanel(props)
  );
};

MoreInfoModal.displayName = "MoreInfoModal";

MoreInfoModal.propTypes = {
  /**
  Prop used to open close modal
  */
  active: _react.PropTypes.bool,
  /**
  Callback executed when modal closed
  */
  onClose: _react.PropTypes.func
};

MoreInfoModal.defaultProps = {
  active: true,
  onClose: function onClose() {}
};

exports.default = MoreInfoModal;