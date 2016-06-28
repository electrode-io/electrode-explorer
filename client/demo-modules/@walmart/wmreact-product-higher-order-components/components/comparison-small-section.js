"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _collapsable = require("@walmart/wmreact-layout/lib/components/collapsable");

var _collapsable2 = _interopRequireDefault(_collapsable);

var _arrange = require("@walmart/wmreact-layout/lib/components/arrange");

var _arrange2 = _interopRequireDefault(_arrange);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
@private
*/
var SmallSection = _react2.default.createClass({
  displayName: "Comparison.SmallSection",

  propTypes: {
    product: _react2.default.PropTypes.shape({
      url: _react2.default.PropTypes.string,
      title: _react2.default.PropTypes.string
    }),
    prData: _react2.default.PropTypes.object
  },

  getInitialState: function getInitialState() {
    return {
      open: false
    };
  },
  _expandToggle: function _expandToggle() {
    this.setState({
      open: !this.state.open
    });
  },
  _renderComparisonTable: function _renderComparisonTable(prData, product) {
    var attrRows = [];
    prData.attributes.forEach(function (attr) {
      attr.value.forEach(function (name, j) {
        attrRows.push(_react2.default.createElement(
          "tr",
          { key: attr.category + "-" + j },
          _react2.default.createElement("td", { dangerouslySetInnerHTML: { __html: name } }),
          _react2.default.createElement("td", { dangerouslySetInnerHTML: { __html: product.features[name] } })
        ));
      });
    });

    return _react2.default.createElement(
      "div",
      { className: "MiniComparisonContent" },
      _react2.default.createElement(
        "table",
        { className: "no-margin table table-first-col-font-alt font-semibold" },
        _react2.default.createElement(
          "tbody",
          null,
          attrRows
        )
      ),
      _react2.default.createElement(
        "div",
        { className: "text-center" },
        _react2.default.createElement(
          "a",
          {
            className: "MiniComparisonLink font-semibold",
            href: "/ip/" + product.id
          },
          "See more details"
        )
      )
    );
  },
  render: function render() {
    return _react2.default.createElement(
      "div",
      { className: "MiniComparison" },
      _react2.default.createElement(
        _button2.default,
        {
          onClick: this._expandToggle,
          fakelink: true,
          className: "MiniComparisonBtn"
        },
        _react2.default.createElement(
          _arrange2.default,
          { middle: true },
          _react2.default.createElement(
            _arrange2.default.Fit,
            { className: "text-center" },
            _react2.default.createElement("img", {
              className: "MiniComparison-image",
              src: this.props.product ? this.props.product.url : "",
              alt: ""
            })
          ),
          _react2.default.createElement(
            _arrange2.default.Fill,
            null,
            _react2.default.createElement("p", {
              className: "MiniComparison-title font-semibold",
              dangerouslySetInnerHTML: { __html: this.props.product ? this.props.product.title : "" }
            })
          ),
          _react2.default.createElement(
            _arrange2.default.Fit,
            null,
            _react2.default.createElement("i", { className: (0, _classnames2.default)("caret", "caret-yellow", { "active": this.state.open }) })
          )
        )
      ),
      _react2.default.createElement(
        _collapsable2.default,
        { isOpen: this.state.open },
        this._renderComparisonTable(this.props.prData || {}, this.props.product || {})
      )
    );
  }
});

exports.default = SmallSection;