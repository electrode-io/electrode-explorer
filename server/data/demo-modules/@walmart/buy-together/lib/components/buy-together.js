"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BuyTogether = function BuyTogether(props) {
  return _react2.default.createElement(
    "div",
    { className: "buyTogether" },
    "Hello ",
    props.name,
    "!"
  );
};

BuyTogether.displayName = "BuyTogether";

BuyTogether.propTypes = {
  "name": _react2.default.PropTypes.string
};

BuyTogether.defaultProps = {
  name: "React"
};

exports.default = BuyTogether;