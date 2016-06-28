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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
Media selector is a component that wraps a group of children.
Those children can have a `visibleWidths` prop that defines
when they should be visible. For example, if the child has
`visibleWidths` set to `['small','medium']` then it will only
be visible in small and medium screen widths.

Here is a simple example, where the first child is shown when the
media size is `medium` or above, and the second child is shown only
when the media size is below `medium`.

```jsx
<CSSMediaSelector>
  <div visibleAtOrAbove="medium">Shown in medium</div>
  <div visibleBelow="medium">Shown below medium</div>
</CSSMediaSelector>
```
@component CSSMediaSelector
@synonym responsive
@import {CSSMediaSelector}
@playground
CSSMediaSelector
```
<CSSMediaSelector mode="hide">
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
</CSSMediaSelector>
```
*/

var CSSMediaSelector = function (_React$Component) {
  (0, _inherits3.default)(CSSMediaSelector, _React$Component);

  function CSSMediaSelector(props) {
    (0, _classCallCheck3.default)(this, CSSMediaSelector);

    var _this = (0, _possibleConstructorReturn3.default)(this, _React$Component.call(this, props));

    _this._addClasses = _this._addClasses.bind(_this);
    return _this;
  }

  CSSMediaSelector.prototype._mapHiddens = function _mapHiddens(visible, props, sizeToIndex) {
    if (props.hiddenAtOrBelow) {
      visible = visible.map(function (v, index) {
        return index > sizeToIndex[props.hiddenAtOrBelow];
      });
    }
    if (props.hiddenBelow) {
      visible = visible.map(function (v, index) {
        return index >= sizeToIndex[props.hiddenBelow];
      });
    }
    if (props.hiddenAtOrAbove) {
      visible = visible.map(function (v, index) {
        return index < sizeToIndex[props.hiddenAtOrAbove];
      });
    }
    if (props.hiddenAbove) {
      visible = visible.map(function (v, index) {
        return index <= sizeToIndex[props.hiddenAbove];
      });
    }
    return visible;
  };

  CSSMediaSelector.prototype._mapVisibles = function _mapVisibles(visible, props, sizeToIndex) {
    if (props.visibleAtOrBelow) {
      visible = visible.map(function (v, index) {
        return index <= sizeToIndex[props.visibleAtOrBelow];
      });
    }
    if (props.visibleBelow) {
      visible = visible.map(function (v, index) {
        return index < sizeToIndex[props.visibleBelow];
      });
    }
    if (props.visibleAtOrAbove) {
      visible = visible.map(function (v, index) {
        return index >= sizeToIndex[props.visibleAtOrAbove];
      });
    }
    if (props.visibleAbove) {
      visible = visible.map(function (v, index) {
        return index > sizeToIndex[props.visibleAbove];
      });
    }
    return visible;
  };

  CSSMediaSelector.prototype._buildVisibilityMaps = function _buildVisibilityMaps(child, breakpoints) {
    var sizeToIndex = {};
    var sizes = [];
    breakpoints.forEach(function (breakpoint, index) {
      sizes.push(breakpoint.name);
      sizeToIndex[breakpoint.name] = index;
    });

    var visible = sizes.map(function () {
      return true;
    });

    visible = this._mapHiddens(visible, child.props, sizeToIndex);
    visible = this._mapVisibles(visible, child.props, sizeToIndex);

    if (child.props.visibleWidths) {
      visible = sizes.map(function () {
        return false;
      });
      child.props.visibleWidths.forEach(function (width) {
        visible[sizeToIndex[width]] = true;
      });
    }

    return visible;
  };

  CSSMediaSelector.prototype._findTransitions = function _findTransitions(visible) {
    var state = false;
    var transitions = [];
    visible.forEach(function (v, index) {
      if (state !== v) {
        transitions.push(index);
        state = v;
      }
    });
    return transitions;
  };

  CSSMediaSelector.prototype._addClasses = function _addClasses(child, key) {
    var _this2 = this;

    var visible = this._buildVisibilityMaps(child, this.props.breakpoints);
    var transitions = this._findTransitions(visible);

    var additionalClasses = [];

    if (transitions.length === 0) {
      additionalClasses.push(this.props.formatAll());
    } else if (transitions.length === 1) {
      if (transitions[0] > 0) {
        additionalClasses.push(this.props.formatBelow(this.props.breakpoints[transitions[0]]));
      }
    } else if (transitions.length === 2) {
      if (transitions[0] > 0) {
        additionalClasses.push(this.props.formatBelow(this.props.breakpoints[transitions[0]]));
      }
      additionalClasses.push(this.props.formatAbove(this.props.breakpoints[transitions[1]]));
    } else {
      visible.forEach(function (v, index) {
        if (v === false) {
          additionalClasses.push(_this2.props.formatAt(_this2.props.breakpoints[index]));
        }
      });
    }

    var className = (0, _classnames2.default)(additionalClasses, child.props.className);

    return _react2.default.cloneElement(child, {
      key: key,
      className: className
    });
  };

  CSSMediaSelector.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var children = _props.children;

    return _react2.default.createElement(
      "span",
      { className: className },
      _react2.default.Children.map(children, this._addClasses)
    );
  };

  return CSSMediaSelector;
}(_react2.default.Component);

exports.default = CSSMediaSelector;


CSSMediaSelector.propTypes = {
  /**
  Formats hidden below classnames
  */
  formatBelow: _react2.default.PropTypes.func,
  /**
  Formats hidden above classnames
  */
  formatAbove: _react2.default.PropTypes.func,
  /**
  Formats hidden at classnames
  */
  formatAt: _react2.default.PropTypes.func,
  /**
  Formats hidden at all breakpoints classname
  */
  formatAll: _react2.default.PropTypes.func,
  /**
  The available breakpoints from the CSS framework
  */
  breakpoints: _react2.default.PropTypes.array,
  className: _react2.default.PropTypes.string,
  children: _react2.default.PropTypes.node
};

CSSMediaSelector.defaultProps = {
  formatBelow: function formatBelow(breakpoint) {
    return breakpoint.hideBelow;
  },
  formatAbove: function formatAbove(breakpoint) {
    return breakpoint.hideAbove;
  },
  formatAt: function formatAt(breakpoint) {
    return breakpoint.hideAt;
  },
  formatAll: function formatAll() {
    return "hide-content";
  },
  breakpoints: [{
    name: "x-small",
    hideBelow: "hide-content-max-xs",
    hideAbove: "hide-content-xs",
    hideAt: "hide-content-max-xs"
  }, {
    name: "small",
    hideBelow: "hide-content-max-s",
    hideAbove: "hide-content-s",
    hideAt: "hide-content-xs hide-content-max-m"
  }, {
    name: "medium",
    hideBelow: "hide-content-max-m",
    hideAbove: "hide-content-m",
    hideAt: "hide-content-max-s hide-content-m"
  }, {
    name: "large",
    hideBelow: "hide-content-max-l",
    hideAbove: "hide-content-l",
    hideAt: "hide-content-max-m hide-content-xl"
  }, {
    name: "x-large",
    hideBelow: "hide-content-max-xl",
    hideAbove: "hide-content-xl",
    hideAt: "hide-content-xl"
  }]
};