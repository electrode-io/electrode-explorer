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

var _componentPlayground = require("component-playground");

var _componentPlayground2 = _interopRequireDefault(_componentPlayground);

var _objectAssign = require("object-assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _creditCard = require("../src/components/credit-card");

var _creditCard2 = _interopRequireDefault(_creditCard);

var _creditCards = require("../src/components/credit-cards");

var _creditCards2 = _interopRequireDefault(_creditCards);

var _exampleForm = require("./example-form");

var _exampleForm2 = _interopRequireDefault(_exampleForm);

var _exampleActions = require("./example-actions");

var _exampleActions2 = _interopRequireDefault(_exampleActions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  Index.prototype.render = function render() {
    var localScope = (0, _objectAssign2.default)({ React: _react2.default, CreditCard: _creditCard2.default, CreditCards: _creditCards2.default, ExampleForm: _exampleForm2.default, ExampleActions: _exampleActions2.default }, this.props.scope || {});
    return _react2.default.createElement(
      "div",
      { className: "component-documentation" },
      Index.Components.map(function (component, index) {
        return _react2.default.createElement(
          "div",
          { key: index },
          _react2.default.createElement(
            "h3",
            { id: component.title },
            component.title
          ),
          component.examples.map(function (example, subindex) {
            return _react2.default.createElement(
              "div",
              { key: subindex },
              example.title ? _react2.default.createElement(
                "h4",
                null,
                example.title
              ) : null,
              _react2.default.createElement(_componentPlayground2.default, { codeText: example.code,
                scope: localScope,
                noRender: example.noRender })
            );
          })
        );
      })
    );
  };

  return Index;
}(_react2.default.Component);

exports.default = Index;

Index.propTypes = {
  scope: _react2.default.PropTypes.object
};

Index.Components = [{
  title: "Credit card",
  examples: [{
    type: "playground",
    code: require("raw!./examples/credit-card.example"),
    noRender: true
  }]
}, {
  title: "Loading credit card",
  examples: [{
    type: "playground",
    code: require("raw!./examples/loading-credit-card.example"),
    noRender: true
  }]
}, {
  title: "Deleting credit card",
  examples: [{
    type: "playground",
    code: require("raw!./examples/deleting-credit-card.example"),
    noRender: true
  }]
}, {
  title: "Loading credit cards",
  examples: [{
    type: "playground",
    code: require("raw!./examples/loading-credit-cards.example"),
    noRender: true
  }]
}, {
  title: "Credit cards",
  examples: [{
    type: "playground",
    code: require("raw!./examples/credit-cards.example"),
    noRender: true
  }]
}, {
  title: "Saving credit card",
  examples: [{
    type: "playground",
    code: require("raw!./examples/saving-edit-credit-cards.example"),
    noRender: true
  }]
}, {
  title: "Deleting credit card when editing",
  examples: [{
    type: "playground",
    code: require("raw!./examples/deleting-edit-credit-cards.example"),
    noRender: true
  }]
}, {
  title: "Saving Credit card avs",
  examples: [{
    type: "playground",
    code: require("raw!./examples/saving-credit-card-avs.example"),
    noRender: true
  }]
}, {
  title: "Error from save credit card",
  examples: [{
    type: "playground",
    code: require("raw!./examples/credit-card-error.example"),
    noRender: true
  }]
}, {
  title: "Override form",
  examples: [{
    type: "playground",
    code: require("raw!./examples/override-address-form.example"),
    noRender: true
  }]
}];