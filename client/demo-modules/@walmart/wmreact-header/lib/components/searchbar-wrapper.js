"use strict";

exports.__esModule = true;

var _extends2 = require("babel-runtime/helpers/extends");

var _extends3 = _interopRequireDefault(_extends2);

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

var _arrange = require("@walmart/wmreact-layout/lib/components/arrange");

var _arrange2 = _interopRequireDefault(_arrange);

var _tempoCore = require("../tempo-core");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
  An intermediate component for the header for rendering and managing the state of the
  search bar at mobile breakpoints. Should be used inside a TempoWrapper so all modules are
  populated.
  @examples
  ```jsx
  <SearchbarWrapper searchExposed={true} />
  ```
  @component SearchbarWrapper
  @import {SearchbarWrapper}
  @references SearchbarWrapper
  @playground
  SearchbarWrapper
 */

var SearchbarWrapper = function (_Component) {
  (0, _inherits3.default)(SearchbarWrapper, _Component);

  function SearchbarWrapper(props) {
    (0, _classCallCheck3.default)(this, SearchbarWrapper);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      open: props.searchExposed
    };
    return _this;
  }

  SearchbarWrapper.prototype._getClassName = function _getClassName(open) {
    return (0, _classnames2.default)("header-SearchbarWrapper", {
      "hide-content-max-l": !open
    });
  };

  SearchbarWrapper.prototype.toggle = function toggle() {
    this.setState({
      open: !this.state.open
    });
  };

  SearchbarWrapper.prototype.render = function render() {
    var open = this.state.open;


    return _react2.default.createElement(
      _arrange2.default.Fill,
      { className: this._getClassName(open) },
      _react2.default.createElement(_tempoCore.TempoZone, (0, _extends3.default)({
        zoneName: "headerZone2"
      }, this.props))
    );
  };

  return SearchbarWrapper;
}(_react.Component);

SearchbarWrapper.displayName = "SearchbarWrapper";

SearchbarWrapper.propTypes = {
  /**
  check mobile device
  */
  isMobile: _react.PropTypes.bool,
  /**
  True if search should be exposed by default at smaller screen widths.
  */
  searchExposed: _react.PropTypes.bool,
  /**
  Category ID to be initially selected
  */
  selectedCategory: _react.PropTypes.string,
  /**
  Url to fetch recomendations in searchbar
  */
  typeAheadUrl: _react.PropTypes.string
};

SearchbarWrapper.defaultProps = {
  isMobile: false,
  searchExposed: true,
  selectedCategory: null,
  typeAheadUrl: ""
};

exports.default = SearchbarWrapper;