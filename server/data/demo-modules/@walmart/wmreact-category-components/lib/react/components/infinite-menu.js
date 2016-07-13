"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _stringify = require("babel-runtime/core-js/json/stringify");

var _stringify2 = _interopRequireDefault(_stringify);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require("babel-runtime/helpers/possibleConstructorReturn");

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require("babel-runtime/helpers/inherits");

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactDom = require("react-dom");

var _categoryUtils = require("@walmart/category-utils");

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _debounce = require("lodash/debounce");

var _debounce2 = _interopRequireDefault(_debounce);

var _vendorPrefix = require("../../utils/vendor-prefix");

var _vendorPrefix2 = _interopRequireDefault(_vendorPrefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 Expandable HTML and text
 @examples
 ```jsx
 const response = {
  data: [
    {
      "linkText": "All Deals",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Electronics",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Home",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Clothing",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Baby",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Toys",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Sports & Outdoors",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Home Improvement",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    }
  ]
};

 React.render(<InfiniteMenu {...response} />, mountNode);

 ```
 @component ExpandableHtmlText
 @import {ExpandableHtmlText}
 @playground
 ```
 const response = {
  data: [
    {
      "linkText": "All Deals",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Electronics",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Home",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Clothing",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Baby",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Toys",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Sports & Outdoors",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Home Improvement",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    }
  ]
};

 React.render(<InfiniteMenu {...response} />, mountNode);

 ```
 */

// small module, see source and talk to @ktan7 if you have concerns

var InfiniteMenu = function (_Component) {
  (0, _inherits3.default)(InfiniteMenu, _Component);

  function InfiniteMenu(props) {
    (0, _classCallCheck3.default)(this, InfiniteMenu);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this._onTouchStart = _this._onTouchStart.bind(_this);
    _this._onTouchMove = _this._onTouchMove.bind(_this);
    _this._onTouchEnd = _this._onTouchEnd.bind(_this);
    _this._normalizeInitialOffset = _this._normalizeInitialOffset.bind(_this);
    _this._debouncedInitialOffset = (0, _debounce2.default)(_this._normalizeInitialOffset, _this.props.resizeThrottle);

    var active = props.data.filter(function (item) {
      return props.pageId === _this._getCatIdFromPath(item.url);
    });

    var activeIndex = active.pop() || 0;

    // transient stuff
    _this.state = {
      minLeft: props.initialLeftMargin, // maximum left margin
      horizontalOffset: props.initialLeftMargin, // current left margin
      startMarginLeft: props.initialLeftMargin, // the margin onTouchStart
      startX: null, // the touch position onTouchStart
      startTime: null, // start time in miliseconds
      transition: null, // the transition css style
      activeIndex: activeIndex
    };
    return _this;
  }

  /* istanbul ignore next */


  InfiniteMenu.prototype.componentDidMount = function componentDidMount() {
    this._normalizeInitialOffset();
    // we need this._debouncedInitialOffset so that it can be unbound
    window.addEventListener("resize", this._debouncedInitialOffset);
  };

  InfiniteMenu.prototype.componentWillUnmount = function componentWillUnmount() {
    window.removeEventListener("resize", this._debouncedInitialOffset);
  };

  InfiniteMenu.prototype._normalizeInitialOffset = function _normalizeInitialOffset() {
    // note: actual dimensions can only be calculated after mounting
    var $menuList = (0, _reactDom.findDOMNode)(this.refs.menuList);
    var menuWidth = $menuList.scrollWidth;
    var rootWidth = (0, _reactDom.findDOMNode)(this).offsetWidth;

    var horizontalOffset = this.props.initialLeftMargin;
    for (var i = 0; i < this.state.activeIndex; i++) {
      horizontalOffset -= $menuList.children[i].clientWidth;
    }

    this._setRestrictions(menuWidth, rootWidth, horizontalOffset);
  };

  // only update when animation happens
  // or if menu selection changed in SPA mode


  InfiniteMenu.prototype.shouldComponentUpdate = function shouldComponentUpdate(nextProps, nextState) {
    return nextState.horizontalOffset !== this.state.horizontalOffset || nextProps.pageId !== this.props.pageId || (0, _stringify2.default)(this.state.transition) !== (0, _stringify2.default)(nextState.transition);
  };

  InfiniteMenu.prototype._setRestrictions = function _setRestrictions(menuWidth, rootWidth, horizontalOffset) {
    // is it swipe-able
    var minLeft = menuWidth <= rootWidth ? this.props.initialLeftMargin : -1 * menuWidth + rootWidth;

    this.setState({
      rootWidth: rootWidth, // container width
      menuWidth: menuWidth, // menu width
      horizontalOffset: horizontalOffset, // current margin left offset
      minLeft: minLeft // maximum margin left offset
    });
  };

  InfiniteMenu.prototype._isEdgeHit = function _isEdgeHit() {
    var leftLimit = this.props.edgeThreshold;
    var rightLimit = -1 * (this.state.menuWidth + this.props.edgeThreshold - this.state.rootWidth);
    return rightLimit < this.state.horizontalOffset && this.state.horizontalOffset < leftLimit;
  };

  InfiniteMenu.prototype._isStatic = function _isStatic() {
    // non swipe-able
    return this.state.minLeft === this.props.initialLeftMargin;
  };

  InfiniteMenu.prototype._onTouchStart = function _onTouchStart(ev) {
    if (this._isStatic()) {
      return;
    }
    // handle the tap
    if (ev.nativeEvent.target.tagName !== "A") {
      ev.preventDefault();
    }

    // multi-touch does not count
    if (ev.touches.length > 1) {
      return;
    }

    var transition = (0, _vendorPrefix2.default)("transitionDuration", 0);

    this.setState({
      startX: ev.touches[0].clientX,
      startHorizontalOffset: this.state.horizontalOffset,
      startTime: Date.now(),
      transition: transition
    });
  };

  InfiniteMenu.prototype._onTouchMove = function _onTouchMove(ev) {
    if (this._isStatic()) {
      return;
    }

    ev.preventDefault();
    if (ev.touches.length > 1 || !this._isEdgeHit()) {
      return;
    }

    var delta = ev.changedTouches[0].clientX - this.state.startX;
    var horizontalOffset = this.state.startHorizontalOffset + delta < this.state.minLeft ? this.state.minLeft : this.state.startHorizontalOffset + delta;

    this.setState({
      horizontalOffset: horizontalOffset
    });
  };

  InfiniteMenu.prototype._onTouchEnd = function _onTouchEnd(ev) {
    if (this._isStatic()) {
      return;
    }
    // Calculate the velocity for autoscroll
    var elapsed = Date.now() - this.state.startTime;
    var delta = ev.changedTouches[0].clientX - this.state.startX;
    var velocity = delta / (1 + elapsed);
    var horizontalOffset = this.state.horizontalOffset + velocity * 500;

    if (horizontalOffset > this.props.initialLeftMargin) {
      horizontalOffset = this.props.initialLeftMargin;
    } else if (horizontalOffset < this.state.minLeft) {
      horizontalOffset = this.state.minLeft;
    }

    var transition = (0, _vendorPrefix2.default)("transitionDuration", "1000ms");

    this.setState({
      horizontalOffset: horizontalOffset,
      startX: null,
      startTime: null,
      transition: transition
    });
  };

  InfiniteMenu.prototype._getCatIdFromPath = function _getCatIdFromPath(url) {
    return parseInt((url || "").split("/").pop(), 10) || NaN;
  };

  InfiniteMenu.prototype._renderLink = function _renderLink(item, index, linkId) {
    var classNames = (0, _classnames2.default)("InfiniteMenu-Item", { "active": linkId === this.props.pageId });
    return _react2.default.createElement(
      "li",
      { key: index, className: classNames },
      _react2.default.createElement(
        "a",
        { href: item.url, title: item.linkText },
        item.linkText
      )
    );
  };

  InfiniteMenu.prototype._renderMenu = function _renderMenu() {
    var _this2 = this;

    var style = (0, _extends3.default)({}, this.state.transition, { marginLeft: this.state.horizontalOffset });

    return _react2.default.createElement(
      "ul",
      { className: "InfiniteMenu-List", ref: "menuList", style: style },
      this.props.data.map(function (item, index) {
        return _this2._renderLink(item, index, _this2._getCatIdFromPath(item.url));
      })
    );
  };

  InfiniteMenu.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({
        className: "InfiniteMenu",
        onTouchStart: this._onTouchStart,
        onTouchMove: this._onTouchMove,
        onTouchCancel: this._onTouchEnd,
        onTouchEnd: this._onTouchEnd
      }, (0, _categoryUtils.getTempoModuleAutomationId)(this.props.moduleType, process)),
      this._renderMenu()
    );
  };

  return InfiniteMenu;
}(_react.Component);

exports.default = InfiniteMenu;


InfiniteMenu.propTypes = {
  data: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    linkText: _react.PropTypes.string,
    url: _react.PropTypes.string
  })),
  edgeThreshold: _react.PropTypes.number,
  initialLeftMargin: _react.PropTypes.number,
  moduleType: _react.PropTypes.string,
  pageId: _react.PropTypes.number,
  resizeThrottle: _react.PropTypes.number
};

InfiniteMenu.defaultProps = {
  data: [],
  edgeThreshold: 50,
  initialLeftMargin: 10,
  moduleType: _categoryUtils.moduleTypes.CATEGORY_NAV,
  pageId: 0,
  resizeThrottle: 100
};