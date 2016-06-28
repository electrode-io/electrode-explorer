"use strict";

exports.__esModule = true;

var _getIterator2 = require("babel-runtime/core-js/get-iterator");

var _getIterator3 = _interopRequireDefault(_getIterator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _exenv = require("exenv");

var _widthWatcher2 = require("./utils/width-watcher");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint max-statements: 0, complexity: 0 */
/*
If you use this component be sure to shim matchMedia for IE8/IE9 compatibility:

https://github.com/paulirish/matchMedia.js/
*/

var cloneElement = _react2.default.cloneElement;


var _sizeValues = {
  "x-small": 1,
  "small": 2,
  "medium": 3,
  "large": 4,
  "x-large": 5
};

var _widthWatcher = null;

/**
Media selector is a component that wraps a group of children.
Those children can have a `visibleWidths` prop that defines
when they should be visible. For example, if the child has
`visibleWidths` set to `['small','medium']` then it will only
be visible in small and medium screen widths.

Here is a simple example, where the first child is shown when the
media size is `medium` or above, and the second child is shown only
when the media size is below `medium`.

This components gets updates on the current responsive width
of the screen. We can set the `visibleWidths` prop
to the component and give it an
array of responsive sizes where the component should be seen.
For example `visibleWidths={['small','medium']}` says that this
component should only be visible in small and medium sizes.

In the render method we can use `this.showAtVisibleWidth()`
which will return `true` if the component should be visible at
the current size. Or your can use `this.mediaSelectorStyles()` to
get a styles object that you can apply to the style property on
your top tag.

If you define `onMediaChange` you will get an update any time
the screen size changes.

```jsx
<JSMediaSelector>
  <div visibleAtOrAbove="medium">Shown in medium</div>
  <div visibleBelow="medium">Shown below medium</div>
</JSMediaSelector>
```
@component JSMediaSelector
@synonym responsive
@import {JSMediaSelector}
@playground
JSMediaSelector
```
<JSMediaSelector mode="hide">
  <div visibleWidths={['small']}>Currently in small</div>
  <div visibleWidths={['medium']}>Currently in medium</div>
  <div visibleWidths={['large']}>Currently in large</div>
  <div visibleWidths={['x-large']}>Currently in x-large</div>
  <div visibleWidths={['xx-large']}>Currently in xx-large</div>
  <hr/>

  <div visibleAbove='small'>visibleAbove: Visible in Medium and above</div>
  <div visibleAbove='medium'>visibleAbove: Visible in Large and above</div>
  <hr/>

  <div visibleAtOrAbove='medium'>visibleAtOrAbove: Visible in Medium and above</div>
  <div visibleAtOrAbove='large'>visibleAtOrAbove: Visible in Large and above</div>
  <hr/>

  <div visibleBelow='medium'>visibleBelow: Visible in Small</div>
  <div visibleBelow='large'>visibleBelow: Visible in Small and Medium</div>
  <hr/>

  <div visibleAtOrBelow='small'>visibleAtOrBelow: Visible in Small</div>
  <div visibleAtOrBelow='medium'>visibleAtOrBelow: Visible in Small and Medium</div>
  <hr/>

  <div hiddenAbove='small'>hiddenAbove: Visible in Small</div>
  <div hiddenAbove='medium'>hiddenAbove: Visible in Small and Medium</div>
  <hr/>

  <div hiddenAtOrAbove='medium'>hiddenAtOrAbove: Visible in Small</div>
  <div hiddenAtOrAbove='large'>hiddenAtOrAbove: Visible in Small and Medium</div>
  <hr/>

  <div hiddenBelow='medium'>hiddenBelow: Visible above Small</div>
  <div hiddenBelow='large'>hiddenBelow: Visible above Medium</div>
  <hr/>

  <div hiddenAtOrBelow='medium'>hiddenAtOrAbove: Visible in Large</div>
  <div hiddenAtOrBelow='large'>hiddenAtOrAbove: Visible above Large</div>
</JSMediaSelector>
```
*/

var JSMediaSelector = function (_Component) {
  (0, _inherits3.default)(JSMediaSelector, _Component);

  function JSMediaSelector(props, context) {
    (0, _classCallCheck3.default)(this, JSMediaSelector);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props, context));

    if (_widthWatcher === null) {
      _widthWatcher = new _widthWatcher2.WidthWatcher();
    }

    var width = _exenv.canUseDOM ? _widthWatcher.width : _this._getWidthFromProps(props, context);

    _this.state = { width: width };
    return _this;
  }

  JSMediaSelector.prototype._getWidthFromProps = function _getWidthFromProps(props, context) {
    if (context.serverWidth) {
      return this._checkServerWidth(context.serverWidth);
    } else if (props.serverWidth) {
      return this._checkServerWidth(props.serverWidth);
    } else {
      return "x-large";
    }
  };

  JSMediaSelector.prototype.componentDidMount = function componentDidMount() {
    if (_widthWatcher && _exenv.canUseDOM) {
      _widthWatcher.addSubscriber(this);
    }
  };

  JSMediaSelector.prototype.componentWillUnmount = function componentWillUnmount() {
    if (_widthWatcher && _exenv.canUseDOM) {
      _widthWatcher.removeSubscriber(this);
    }
  };

  JSMediaSelector.prototype.updateWidth = function updateWidth(width) {
    this.setState({ width: width });
    if (this.onMediaChange) {
      this.onMediaChange();
    }
  };

  JSMediaSelector.prototype.showAtVisibleWidth = function showAtVisibleWidth() {
    var show = true;
    if (this.props.visibleWidths) {
      show = false;
      for (var s in this.props.visibleWidths) {
        if (this.props.visibleWidths[s] === this.state.width) {
          show = true;
        }
      }
    }
    return show;
  };

  JSMediaSelector.prototype.mediaSelectorStyles = function mediaSelectorStyles() {
    return this.showAtVisibleWidth() ? {} : { display: "none" };
  };

  JSMediaSelector.prototype._checkServerWidth = function _checkServerWidth(width) {
    var name = "x-small";
    var checkOrder = ["small", "medium", "large", "x-large"];
    var serverSizeMap = {
      "small": 480,
      "medium": 768,
      "large": 1024,
      "x-large": 1364
    };
    for (var _iterator = checkOrder, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : (0, _getIterator3.default)(_iterator);;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var c = _ref;

      if (parseInt(width) >= serverSizeMap[c]) {
        name = c;
      }
    }
    return name;
  };

  JSMediaSelector.prototype.onMediaChange = function onMediaChange() {
    if (this.props.onChange) {
      this.props.onChange();
    }
  };

  JSMediaSelector.prototype._renderByMedia = function _renderByMedia(child) {
    var hide = false;
    var curWidth = this.state.width || this.props.default;
    if (child.props.visibleWidths) {
      hide = true;
      for (var s in child.props.visibleWidths) {
        if (child.props.visibleWidths[s] === curWidth) {
          hide = false;
        }
      }
    }

    var wi = _sizeValues[curWidth];
    if (child.props.visibleAbove) {
      hide = wi <= _sizeValues[child.props.visibleAbove];
    }
    if (child.props.visibleAtOrAbove) {
      hide = wi < _sizeValues[child.props.visibleAtOrAbove];
    }

    if (child.props.visibleBelow) {
      hide = wi >= _sizeValues[child.props.visibleBelow];
    }
    if (child.props.visibleAtOrBelow) {
      hide = wi > _sizeValues[child.props.visibleAtOrBelow];
    }

    if (child.props.hiddenAbove) {
      hide = wi > _sizeValues[child.props.hiddenAbove];
    }
    if (child.props.hiddenAtOrAbove) {
      hide = wi >= _sizeValues[child.props.hiddenAtOrAbove];
    }

    if (child.props.hiddenBelow) {
      hide = wi < _sizeValues[child.props.hiddenBelow];
    }
    if (child.props.hiddenAtOrBelow) {
      hide = wi <= _sizeValues[child.props.hiddenAtOrBelow];
    }

    if (this.props.mode === "delete") {
      return hide ? null : child;
    } else {
      var attrs = {};
      if (hide) {
        attrs.style = { display: "none" };
      }
      return cloneElement(child, attrs);
    }
  };

  JSMediaSelector.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      { className: this.props.hidden ? "hide-content" : "" },
      _react2.default.Children.map(this.props.children, this._renderByMedia.bind(this))
    );
  };

  return JSMediaSelector;
}(_react.Component);

JSMediaSelector.displayName = "JSMediaSelector";

JSMediaSelector.defaultProps = {
  onChange: function onChange() {},
  mode: "delete",
  "default": "small"
};

JSMediaSelector.contextTypes = {
  serverWidth: _react.PropTypes.string
};

JSMediaSelector.propTypes = {
  /**
   * Children to render in the container
   */
  children: _react.PropTypes.node,
  /**
   An event fired when the media width changes
   */
  onChange: _react.PropTypes.func,
  /**
   Selects between either `hide`ing the childrens on not displaying them (i.e. `delete`)
   */
  mode: _react.PropTypes.oneOf(["hide", "delete"]),
  /**
   Array of widths strings
   */
  visibleWidths: _react.PropTypes.arrayOf(_react.PropTypes.oneOf(["x-small", "small", "medium", "large", "x-large", "xx-large"])),
  hidden: _react.PropTypes.bool,
  serverWidth: _react.PropTypes.string,
  /**
   Sets the default media width for server rendering
   */
  "default": _react.PropTypes.string
};

exports.default = JSMediaSelector;