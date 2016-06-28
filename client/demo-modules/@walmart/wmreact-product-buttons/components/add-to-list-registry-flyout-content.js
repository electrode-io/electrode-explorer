"use strict";

exports.__esModule = true;

var _objectWithoutProperties2 = require("babel-runtime/helpers/objectWithoutProperties");

var _objectWithoutProperties3 = _interopRequireDefault(_objectWithoutProperties2);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 A component that renders the registry or wish lists of a user.

 An example usage:

 ```jsx
 <AddToListRegistryFlyoutContent heading="Add to:"
  onListItemSelected={(type) => console.log(type)}
  listItems={[{name: "Baby registry", type: "BR"},
  {name: "Wedding registry", type: "WR"}]}/>
 ```

 @import {AddToListRegistryFlyoutContent}
 @flags noVisibleRender
 @component AddToListRegistryFlyoutContent
 @playground
 AddToListRegistryFlyoutContent
 ```
 <AddToListRegistryFlyoutContent heading="Add to:"
  onListItemSelected={(type) => console.log(type)}
  listItems={[{name: "Baby registry", type: "BR"},
  {name: "Wedding registry", type: "WR"}]}/>
 ```
 */

var _renderList = function _renderList(_ref) {
  var listItems = _ref.listItems;
  var onListItemSelected = _ref.onListItemSelected;

  if (listItems) {
    return listItems.map(function (listItem, index) {
      var autoId = "addToListOrRegistry-" + index;
      return _react2.default.createElement(
        "li",
        { className: "AddToListOrRegistry-listItem", key: autoId },
        _react2.default.createElement(
          _button2.default,
          { fakelink: true,
            onClick: function onClick() {
              onListItemSelected(listItem.type);
            },
            automationId: autoId },
          listItem.name
        )
      );
    });
  }
};

var _renderHeading = function _renderHeading(heading) {
  return _react2.default.createElement(
    "h5",
    { className: "AddToListOrRegistry-heading heading-e no-margin" },
    heading
  );
};

var AddToListRegistryFlyoutContent = function AddToListRegistryFlyoutContent(props) {
  var heading = props.heading;
  var rest = (0, _objectWithoutProperties3.default)(props, ["heading"]);

  return _react2.default.createElement(
    "div",
    { className: "AddToListOrRegistry-container" },
    _renderHeading(heading),
    _react2.default.createElement(
      "div",
      null,
      _react2.default.createElement(
        "ul",
        { className: "AddToListOrRegistry-list no-margin block-list" },
        _renderList(rest)
      )
    )
  );
};

AddToListRegistryFlyoutContent.displayName = "AddToRegistryFlyoutContent";

AddToListRegistryFlyoutContent.propTypes = {
  /**
  Title for the container
  */
  heading: _react.PropTypes.string,
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
  })).isRequired,
  /**
  Callback to handle list or registry selection
  */
  onListItemSelected: _react.PropTypes.func.isRequired
};

AddToListRegistryFlyoutContent.defaultProps = {
  heading: "Add item to:"
};

exports.default = AddToListRegistryFlyoutContent;