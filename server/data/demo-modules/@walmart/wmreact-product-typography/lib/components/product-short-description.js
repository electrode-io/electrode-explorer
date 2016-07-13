"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _isEmpty = require("lodash/isEmpty");

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  Display the short description an an anchor link to
 the long description.section

 For example this is how we use this component.

 ```jsx
 <ProductShortDescription
 moreInfoLabel="More about this item..."
 content={"<li>Plugs into your HDTV<li>Streams media from laptops, tablets and smartphones"}/>
 ```

 @return {ReactElement} Element tree
 @param {object} props Props
 @import {ProductShortDescription}
 @flags noVisibleRender
 @component ProductShortDescription
 @playground
 ProductShortDescription
 ```
 <ProductShortDescription
 moreInfoLabel="More about this item..."
 content={"<li>Plugs into your HDTV<li>Streams media from laptops, tablets and smartphones"} />
 ```
 */
var ProductShortDescription = function ProductShortDescription(props) {
  var _getContentComp = function _getContentComp(content) {
    // TODO: check with core team on this one.
    return _react2.default.createElement("div", {
      className: "prod-ProductShortDescription-content",
      dangerouslySetInnerHTML: { __html: content }
    });
  };

  var _getMoreInfoComp = function _getMoreInfoComp(onClick, moreInfoLabel) {
    return _react2.default.createElement(
      "div",
      { className: "prod-PositionedAbsolute prod-ProductShortDescription-info" },
      _react2.default.createElement(
        _button2.default,
        { fakelink: true, onClick: onClick },
        moreInfoLabel
      )
    );
  };

  var _getShortDescriptionElClasses = function _getShortDescriptionElClasses(className, big) {
    return (0, _classnames2.default)("prod-ProductShortDescription", "prod-PositionedRelative", { "copy-small": !big }, className);
  };

  var className = props.className;
  var content = props.content;
  var onClick = props.onClick;
  var moreInfoLabel = props.moreInfoLabel;
  var big = props.big;
  var removeMoreInfoLabel = props.removeMoreInfoLabel;
  var rest = (0, _objectWithoutProperties3.default)(props, ["className", "content", "onClick", "moreInfoLabel", "big", "removeMoreInfoLabel"]);


  if ((0, _isEmpty2.default)(content)) {
    return null;
  }

  return _react2.default.createElement(
    "div",
    (0, _extends3.default)({
      className: _getShortDescriptionElClasses(className, big)
    }, rest),
    _getContentComp(content),
    removeMoreInfoLabel ? null : _getMoreInfoComp(onClick, moreInfoLabel)
  );
};

ProductShortDescription.displayName = "ProductShortDescription";

ProductShortDescription.propTypes = {
  /**
   The content aka the short descrition of the product.
   */
  "content": _react2.default.PropTypes.string,
  /**
   Label for the long description link.
   */
  "moreInfoLabel": _react2.default.PropTypes.string,
  /**
   Additional css classes that can be applied to the element.
   */
  "className": _react2.default.PropTypes.string,
  /**
   Onclick handler for more info button.
  */
  "onClick": _react2.default.PropTypes.func,
  /**
   Use larger font size
  */
  "big": _react2.default.PropTypes.bool,
  /**
  A flag that determines if the more info label should be removed
  */
  "removeMoreInfoLabel": _react2.default.PropTypes.bool
};

ProductShortDescription.defaultProps = {
  "content": "",
  "moreInfoLabel": "More about this item...",
  "className": "",
  "onClick": function onClick() {},
  "big": false,
  "removeMoreInfoLabel": false
};

exports.default = ProductShortDescription;