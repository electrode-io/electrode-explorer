"use strict";

exports.__esModule = true;
exports.default = ModalButtonGroup;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scope = "modal_button-group"; /* eslint-disable func-style */


var styles = {
  container: scope + "_container",
  arrange: scope + "_arrange",
  arrangeFill: scope + "_arrange-fill"
};

function ModalButtonGroup(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    "div",
    { className: styles.container },
    _react2.default.createElement(
      "div",
      { className: styles.arrange },
      _react.Children.toArray(children).map(function (button, i) {
        return _react2.default.createElement(
          "div",
          { className: styles.arrangeFill, key: i },
          button
        );
      })
    )
  );
}

ModalButtonGroup.propTypes = {
  children: _react.PropTypes.node
};