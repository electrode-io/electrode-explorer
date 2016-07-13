"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _flyout = require("@walmart/wmreact-containers/lib/components/flyout");

var _flyout2 = _interopRequireDefault(_flyout);

var _addToListRegistryFlyoutContent = require("./add-to-list-registry-flyout-content");

var _addToListRegistryFlyoutContent2 = _interopRequireDefault(_addToListRegistryFlyoutContent);

var _slidepanel = require("@walmart/wmreact-containers/lib/components/slidepanel");

var _slidepanel2 = _interopRequireDefault(_slidepanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _renderATRButton = function _renderATRButton(onClick, spinner) {
  return _react2.default.createElement(
    _button2.default,
    {
      className: "AddToRegistry-button",
      inverse: true,
      spinner: spinner,
      block: true,
      onClick: onClick },
    "Add to Registry"
  );
};

var _renderFlyoutContent = function _renderFlyoutContent(props) {
  return _react2.default.createElement(_addToListRegistryFlyoutContent2.default, props);
};

var _renderFlyout = function _renderFlyout(_ref, content) {
  var onClick = _ref.onClick;
  var onPromptClose = _ref.onPromptClose;

  return _react2.default.createElement(
    _flyout2.default,
    { direction: "left",
      className: "AddToRegistry-flyout",
      onActiveChange: function onActiveChange(active) {
        if (!active) {
          onPromptClose();
        }
      },
      trigger: _renderATRButton(onClick, false),
      active: true },
    content
  );
};

var _renderSlidePanel = function _renderSlidePanel(_ref2, content) {
  var onPromptClose = _ref2.onPromptClose;

  return _react2.default.createElement(
    _slidepanel2.default,
    {
      className: "AddToRegistry-sildePanel",
      active: true, padded: true, onClose: onPromptClose, direction: "bottom" },
    content
  );
};

var _renderPrompt = function _renderPrompt(props) {
  var content = _renderFlyoutContent(props);
  return _react2.default.createElement(
    "div",
    { className: "AddToRegistry-prompt" },
    _react2.default.createElement(
      "div",
      { className: "hide-content-max-s" },
      _renderFlyout(props, content)
    ),
    _react2.default.createElement(
      "div",
      { className: "hide-content-s" },
      _renderSlidePanel(props, content)
    )
  );
};

var StatelessAddToRegistryButton = function StatelessAddToRegistryButton(props) {
  var status = props.status;
  var onClick = props.onClick;

  switch (status) {
    case "INITIALIZED":
      return _renderATRButton(onClick, false);
    case "LOADING":
      return _renderATRButton(null, true);
    case "PROMPT":
      return _renderPrompt(props);
  }
};

StatelessAddToRegistryButton.displayName = "StatelessAddToRegistryButton";

StatelessAddToRegistryButton.propTypes = {
  /**
  Prop that describes the current state of the button
  */
  status: _react.PropTypes.oneOf(["INITIALIZED", "LOADING", "PROMPT"]),
  /**
  List of items
  */
  listItems: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    /**
    Type of list or registry
    */
    type: _react.PropTypes.string.isRequired,
    /**
    Name of the list or registry
    */
    name: _react.PropTypes.string.isRequired
  })),
  /**
  Callback to handle list or registry selection
  */
  onListItemSelected: _react.PropTypes.func,
  /**
  Callback to handle onClick on Add to registry button
  */
  onClick: _react.PropTypes.func.isRequired,
  /**
  Callback to handle close of prompt
  */
  onPromptClose: _react.PropTypes.func
};

StatelessAddToRegistryButton.defaultProps = {
  status: "INITIALIZED",
  onPromptClose: function onPromptClose() {},
  onListItemSelected: function onListItemSelected() {}
};

exports.default = StatelessAddToRegistryButton;