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

var _reactElementPan = require("react-element-pan");

var _reactElementPan2 = _interopRequireDefault(_reactElementPan);

var _object = require("lodash/object");

var _lang = require("lodash/lang");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A component for allowing panning of DOM-elements too large for their container.
This component is just a wrapper around the react-element-pan component.
This component just adds a componentDidUpdate method to adjust the, scrollLeft
and scrollTop position.
```jsx
<PannableContainer
  width={300}
  height={300}>
  <SpinnerImage
    style={{display:"block", width:500, height:500, maxWidth:"inherit"}}
    src="http://i5.walmartimages.com/dfw/dce07b8c-3b27/
k2-_afa12da1-f17a-4ace-a8ae-8820733e5e0d.v1.jpg"/>
</PannableContainer>
```
@import {PannableContainer}
@flags noVisibleRender
@component PannableContainer
@playground
PannableContainer
```
<PannableContainer
  width={300}
  height={300}>
  <SpinnerImage
    style={{display:"block", width:500, height:500, maxWidth:"inherit"}}
    src="http://i5.walmartimages.com/dfw/dce07b8c-3b27/
k2-_afa12da1-f17a-4ace-a8ae-8820733e5e0d.v1.jpg"/>
</PannableContainer>
```
*/

var PannableContainer = function (_ElementPan) {
  (0, _inherits3.default)(PannableContainer, _ElementPan);

  function PannableContainer() {
    (0, _classCallCheck3.default)(this, PannableContainer);
    return (0, _possibleConstructorReturn3.default)(this, _ElementPan.apply(this, arguments));
  }

  // TODO: intentionally overriding the ElementPan
  // componentDidMount function. to add a null check
  // condition at the first if block. I will open
  // a PR soon on the main repo
  // JIRA: https://jira.walmart.com/browse/GPRDT-638

  PannableContainer.prototype.componentDidMount = function componentDidMount() {
    // Cached for faster lookup
    this.el = this.refs.container;

    // Old versions of React doesn't return the raw DOM node
    if (!(this.el instanceof window.Node) && this.el) {
      this.el = this.el.getDOMNode();
    }

    if (this.props.startX) {
      this.el.scrollLeft = this.props.startX;
    }

    if (this.props.startY) {
      this.el.scrollTop = this.props.startY;
    }
  };

  PannableContainer.prototype.componentDidUpdate = function componentDidUpdate() {
    // When the component updates, reset
    // the scrollLeft and scrollTop such that
    // the children are positioned at the specified scrolling position
    // of the containers viewport (usually needed for centering content).
    var _props = this.props;
    var scrollLeft = _props.scrollLeft;
    var scrollTop = _props.scrollTop;
    var scrollContentOnUpdate = _props.scrollContentOnUpdate;

    var container = (0, _object.get)(this, "_viewport.refs.container", {});
    if (!(0, _lang.isEmpty)(container) && scrollContentOnUpdate) {
      container.scrollLeft = scrollLeft;
      container.scrollTop = scrollTop;
    }
  };

  PannableContainer.prototype.getScrollTop = function getScrollTop() {
    var container = (0, _object.get)(this, "_viewport.refs.container", {});
    if (!(0, _lang.isEmpty)(container)) {
      return container.scrollTop;
    }
    return 0;
  };

  PannableContainer.prototype.getScrollLeft = function getScrollLeft() {
    var container = (0, _object.get)(this, "_viewport.refs.container", {});
    if (!(0, _lang.isEmpty)(container)) {
      return container.scrollLeft;
    }
    return 0;
  };

  PannableContainer.prototype._getElementPanClasses = function _getElementPanClasses() {
    return (0, _classnames2.default)("PannableContainer-viewport", this.props.className);
  };

  PannableContainer.prototype.render = function render() {
    var _this2 = this;

    return _react2.default.createElement(
      _reactElementPan2.default,
      {
        ref: function ref(viewport) {
          return _this2._viewport = viewport;
        },
        className: this._getElementPanClasses(),
        width: this.props.width,
        height: this.props.height },
      this.props.children
    );
  };

  return PannableContainer;
}(_reactElementPan2.default);

PannableContainer.displayName = "PannableContainer";

PannableContainer.propTypes = {
  /**
    The children elements within the pannable container
  */
  "children": _react.PropTypes.element.isRequired,
  /**
    The width of the container.
  */
  "width": _react.PropTypes.number.isRequired,
  /**
    The height of the container.
  */
  "height": _react.PropTypes.number.isRequired,
  /**
    scrollLeft position of the container
  */
  "scrollLeft": _react.PropTypes.number,
  /**
    scrollTop position of the container
  */
  "scrollTop": _react.PropTypes.number,
  /**
    When set to true, scroll the children to the specified
    scrollLeft and scrollTop upon component update.
  */
  "scrollContentOnUpdate": _react.PropTypes.bool,
  /**
    Additional css classNames passed into the component.
  */
  "className": _react.PropTypes.string
};

PannableContainer.defaultProps = {
  "scrollLeft": 0,
  "scrollTop": 0,
  "scrollContentOnUpdate": false,
  "className": ""
};
exports.default = PannableContainer;