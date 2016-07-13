"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _buttonProgressSpinner = require("./button-progress-spinner");

var _buttonProgressSpinner2 = _interopRequireDefault(_buttonProgressSpinner);

var _fireStatelessUiEvent = require("@walmart/wmreact-analytics/lib/helpers/fire-stateless-ui-event");

var _fireStatelessUiEvent2 = _interopRequireDefault(_fireStatelessUiEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A button wrapper
@examples
```jsx
<Button>
  Foo
</Button>
```

A mini button:

```jsx
<Button mini={true}>Mini Button</Button>
```

A fake link button:

```jsx
<Button fakelink={true}>Fake Link Button</Button>
```

A dropdown button:

```jsx
<Button dropdown={true}>Dropdown-Style Button</Button>
```

A disabled button:

```jsx
<Button disabled={true}>Disabled Button</Button>
```

A button that extends across the entire block:

```jsx
<Button block={true}>Block Button</Button>
```

A primary button:

```jsx
<Button primary={true}>Primary Button</Button>
```

A badge button:

```jsx
<Button badge={true}>Badge Button</Button>
```

An inverse button:

```jsx
<Button inverse={true}>Inverse Button</Button>
```

A button with an arrow link:

```jsx
<Button arrowlink={true}>Arrow Link Button</Button>
```

A remove button with an icon:

```jsx
<Button icon='remove' remove={true} />
```

Custom styled button:

```jsx
<Button style={{
  backgroundColor: "#8b67a5",
  color: "#fff"
}}>Custom Styled Button</Button>
```

@component Button
@return {ReactElement} Element tree
@param {object} props Props
@param {object} context Context
@import {Button}
@playground
```
<div>
  <div><Button>Base Button</Button></div><br/>
  <div><Button mini={true}>Mini Button</Button></div><br/>
  <div><Button disabled={true}>Disabled Button</Button></div><br/>
  <div><Button block={true}>Block Button</Button></div><br/>
  <div><Button primary={true}>Primary Button</Button></div><br/>
  <div><Button inverse={true}>Inverse Button</Button></div><br />
  <div>
    <Button style={{
      backgroundColor: "#8b67a5",
      color: "#fff"
      }}
    >Custom Styled Button</Button>
  </div>
</div>
```
@playground
Fake link
```
<Button fakelink={true}>Fake Link Button</Button>
```
@playground
Drop down
```
<Button dropdown={true}>Dropdown-Style Button</Button>
```
@playground
Badge
```
<Button badge={true}>Badge Button</Button>
```
@playground
Arrow link
```
<Button arrowlink={true}>Arrow Link Button</Button>
```
*/
var Button = function Button(props, context) {
  var active = props.active;
  var arrowlink = props.arrowlink;
  var badge = props.badge;
  var badgeAlt = props.badgeAlt;
  var block = props.block;
  var children = props.children;
  var className = props.className;
  var compact = props.compact;
  var disabled = props.disabled;
  var dropdown = props.dropdown;
  var fakelink = props.fakelink;
  var flat = props.flat;
  var icon = props.icon;
  var inverse = props.inverse;
  var mini = props.mini;
  var onClick = props.onClick;
  var primary = props.primary;
  var remove = props.remove;
  var spinner = props.spinner;
  var textIcon = props.textIcon;
  var type = props.type;
  var vote = props.vote;
  var automationId = props.automationId;
  var tealeafId = props.tealeafId;
  var extraProps = (0, _objectWithoutProperties3.default)(props, ["active", "arrowlink", "badge", "badgeAlt", "block", "children", "className", "compact", "disabled", "dropdown", "fakelink", "flat", "icon", "inverse", "mini", "onClick", "primary", "remove", "spinner", "textIcon", "type", "vote", "automationId", "tealeafId"]);


  var extras = {
    "arrow-link": arrowlink,
    "btn-flat": flat,
    "btn-fake-link": fakelink || arrowlink,
    "btn-inverse": inverse,
    "btn-primary": primary,
    dropdown: dropdown,
    "btn-compact": compact,
    "btn-mini": mini,
    "btn-block": block,
    "btn-vote": vote,
    "btn-delete": remove,
    "btn-badge": badge,
    "btn-badge-alt": badgeAlt,
    active: active,
    "btn-progress": spinner
  };

  var _onClick = function _onClick(e) {
    (0, _fireStatelessUiEvent2.default)(props, context, e);

    if (props.disabled) {
      return;
    }

    if (props.onClick) {
      props.onClick(e);
    }
  };

  var baseName = fakelink || arrowlink ? "" : "btn";
  if (spinner) {
    return _react2.default.createElement(
      "button",
      (0, _extends3.default)({
        type: type,
        "aria-disabled": disabled,
        disabled: disabled,
        className: (0, _classnames2.default)(className, baseName, extras, props.hidden ? "hide-content" : ""),
        "data-automation-id": automationId,
        "data-tl-id": tealeafId
      }, extraProps, {
        onClick: function onClick(e) {
          return _onClick(e);
        } }),
      props.children,
      _react2.default.createElement(_buttonProgressSpinner2.default, null)
    );
  } else if (icon) {

    var classes = (0, _classnames2.default)("no-wrap btn-double", className, props.hidden ? "hide-content" : "");

    return _react2.default.createElement(
      "div",
      { className: classes, "data-automation-id": automationId, "data-tl-id": tealeafId },
      _react2.default.createElement(
        "button",
        {
          type: type,
          "aria-disabled": disabled,
          disabled: disabled,
          className: (0, _classnames2.default)("btn", extras),
          onClick: function onClick(e) {
            return _onClick(e);
          } },
        _react2.default.createElement(_icon2.default, { name: icon })
      ),
      _react2.default.createElement(
        "button",
        (0, _extends3.default)({
          type: type,
          "aria-disabled": disabled,
          disabled: disabled,
          className: (0, _classnames2.default)("btn-fake-link")
        }, extraProps, {
          onClick: function onClick(e) {
            return _onClick(e);
          } }),
        props.children
      )
    );
  } else if (textIcon) {
    return _react2.default.createElement(
      "button",
      (0, _extends3.default)({
        type: type,
        "aria-disabled": disabled,
        disabled: disabled,
        className: (0, _classnames2.default)(className, baseName, extras, props.hidden ? "hide-content" : ""),
        "data-automation-id": automationId,
        "data-tl-id": tealeafId
      }, extraProps, {
        onClick: function onClick(e) {
          return _onClick(e);
        } }),
      _react2.default.createElement("i", { className: (0, _classnames2.default)("wmicon", "wmicon-" + textIcon) }),
      props.children
    );
  } else {
    return _react2.default.createElement(
      "button",
      (0, _extends3.default)({
        type: type,
        "aria-disabled": disabled,
        disabled: disabled,
        className: (0, _classnames2.default)(className, baseName, extras, props.hidden ? "hide-content" : ""),
        "data-automation-id": automationId,
        "data-tl-id": tealeafId
      }, extraProps, {
        onClick: function onClick(e) {
          return _onClick(e);
        } }),
      props.children
    );
  }
};
/* eslint react/prop-types: 0 */


Button.displayName = "Button";

Button.propTypes = {
  /**
  True if this is an arrow link
  */
  arrowlink: _react.PropTypes.bool,
  /**
  True if this is an fake link
  */
  fakelink: _react.PropTypes.bool,
  /**
  True if this is a compact button
  */
  compact: _react.PropTypes.bool,
  /**
  True if this is disabled
  */
  disabled: _react.PropTypes.bool,
  /**
  True if this should be inverse
  */
  inverse: _react.PropTypes.bool,
  /**
  True if this is a mini button
  */
  mini: _react.PropTypes.bool,
  /**
  True if this is a block button
  */
  block: _react.PropTypes.bool,
  /**
  True if this is an primary button
  */
  primary: _react.PropTypes.bool,
  /**
  True if this is an badge button
  */
  badge: _react.PropTypes.bool,
  /**
  True if this is an altbadge button
  */
  badgeAlt: _react.PropTypes.bool,
  /**
  True if this is actve
  */
  active: _react.PropTypes.bool,
  /**
  True if this is a vote button
  */
  vote: _react.PropTypes.bool,
  /**
  True if this should show a spinner
  */
  spinner: _react.PropTypes.bool,
  /**
  True if this is an remove button
  */
  remove: _react.PropTypes.bool,
  /**
  The icon to show in the button
  */
  icon: _react.PropTypes.string,
  /**
  The text icon to show in the button
  */
  textIcon: _react.PropTypes.string,
  /**
  The button type
  */
  type: _react.PropTypes.string,
  /**
  The click handler
  */
  onClick: _react.PropTypes.func,
  /*
  Automation id for testing
  */
  automationId: _react.PropTypes.string,
  /*
  Tealeaf id for tracking
  */
  tealeafId: _react.PropTypes.string,
  /**
  True if this is a dropdown button
  */
  dropdown: _react.PropTypes.bool,
  className: _react.PropTypes.string,
  children: _react.PropTypes.node,
  hidden: _react.PropTypes.bool
};

Button.defaultProps = {
  arrowlink: false,
  fakelink: false,
  compact: false,
  disabled: false,
  inverse: false,
  mini: false,
  block: false,
  primary: false,
  remove: false,
  badge: false,
  badgeAlt: false,
  vote: false,
  active: false,
  type: "button",
  automationId: "button",
  tealeafId: "button",
  spinner: false,
  onClick: function onClick() {}
};

Button.contextTypes = {
  analytics: _react.PropTypes.object
};

Button.ProgressSpinner = _buttonProgressSpinner2.default;

exports.default = Button;