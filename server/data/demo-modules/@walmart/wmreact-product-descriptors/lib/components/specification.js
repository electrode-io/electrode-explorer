"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _table = require("@walmart/wmreact-table/lib/components/table");

var _table2 = _interopRequireDefault(_table);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
This componet display the specification chart of an item.
```jsx
<Specification
  specifications={specsData}
/>
*/

var Specification = function Specification(props) {
  var specifications = props.specifications;
  var stripeStyle = props.stripeStyle;

  var specRows = specifications.map(function (specification, idx) {
    return _react2.default.createElement(
      _table2.default.Row,
      { key: "spec-" + idx },
      _react2.default.createElement(
        _table2.default.Cell,
        { className: "display-name" },
        specification.DisplayName
      ),
      _react2.default.createElement(
        _table2.default.Cell,
        { className: "value font-semibold" },
        specification.Value.reduce(function (previous, current) {
          return previous + ", " + current;
        })
      )
    );
  });
  return _react2.default.createElement(
    _table2.default,
    { striped: stripeStyle, className: "specification" },
    _react2.default.createElement(
      _table2.default.Body,
      null,
      specRows
    )
  );
};

Specification.propTypes = {
  /**
   specification data
  */
  specifications: _react2.default.PropTypes.arrayOf(_react2.default.PropTypes.shape({
    DisplayName: _react2.default.PropTypes.string.isRequired,
    Value: _react2.default.PropTypes.array.isRequired
  })).isRequired,
  /**
   style. Could be "odd", "even", "light-odd", "light-even"
  */
  stripeStyle: _react2.default.PropTypes.string
};

Specification.defaultProps = {
  stripeStyle: "odd"
};

exports.default = Specification;