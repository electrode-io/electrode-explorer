"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _heading = require("@walmart/wmreact-base/lib/components/heading");

var _heading2 = _interopRequireDefault(_heading);

var _textTruncate = require("./text-truncate");

var _textTruncate2 = _interopRequireDefault(_textTruncate);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
The product title or name for a give product.
Per UX spec, this title has a font-size of 18px by default, 20px on breakpoint-s
and 25px font-size on breakpoint-m or above.

For example this is how we use this component.

```jsx
<ProductTitle title="MagLite 4 D-Cell Flashlight"/>
```

@return {ReactElement} Element tree
@param {object} props Props
@import {ProductTitle}
@flags noVisibleRender
@component ProductTitle
@playground
ProductTitle
```
<ProductTitle title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Curabitur volutpat efficitur nisi. Mauris sodales, elit quis varius tincidunt,
elit justo." maxLines={2}/>
```
*/

var ProductTitle = function ProductTitle(props) {
  var _getTitleElClasses = function _getTitleElClasses(className) {
    var truncated = props.maxLines ? "truncated" : "";
    return (0, _classnames2.default)("prod-ProductTitle", "no-margin", truncated, className);
  };

  var _getTitle = function _getTitle(title, maxLines, doInsertHTMLTitle) {
    return maxLines > 0 ? _react2.default.createElement(_textTruncate2.default, {
      line: maxLines,
      text: title,
      doInsertHTMLTitle: doInsertHTMLTitle }) : _react2.default.createElement("div", { dangerouslySetInnerHTML: { __html: title } });
  };

  var title = props.title;
  var className = props.className;
  var big = props.big;
  var maxLines = props.maxLines;
  var doInsertHTMLTitle = props.doInsertHTMLTitle;
  var rest = (0, _objectWithoutProperties3.default)(props, ["title", "className", "big", "maxLines", "doInsertHTMLTitle"]);

  var TitleHeading = big ? _heading2.default.H1 : _heading2.default.H2;
  return _react2.default.createElement(
    TitleHeading,
    (0, _extends3.default)({
      className: _getTitleElClasses(className)
    }, rest),
    _getTitle(title, maxLines, doInsertHTMLTitle)
  );
};

ProductTitle.displayName = "ProductTitle";

ProductTitle.propTypes = {
  /**
    The name or title of the product.
    */
  "title": _react2.default.PropTypes.string.isRequired,
  /**
   Any additional css classes that needs to be applied
   to the root element.
   */
  "className": _react2.default.PropTypes.string,
  /**
   Use larger font size
  */
  "big": _react2.default.PropTypes.bool,
  /**
  Max number of lines to show before truncating
  */
  "maxLines": _react2.default.PropTypes.number,
  /**
  A flag to enable title rendering using inner html
  */
  "doInsertHTMLTitle": _react2.default.PropTypes.bool
};

ProductTitle.defaultProps = {
  "className": "",
  "big": false,
  "doInsertHTMLTitle": false
};

exports.default = ProductTitle;