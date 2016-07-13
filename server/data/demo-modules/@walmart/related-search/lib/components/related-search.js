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

var _layout = require("@walmart/wmreact-layout/lib/components/layout");

var _layout2 = _interopRequireDefault(_layout);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RelatedSearch = function (_Component) {
  (0, _inherits3.default)(RelatedSearch, _Component);

  function RelatedSearch() {
    (0, _classCallCheck3.default)(this, RelatedSearch);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  RelatedSearch.prototype._handleClick = function _handleClick(suggestedUrl, event) {
    event.preventDefault();
    this.props.onClick(suggestedUrl);
  };

  RelatedSearch.prototype.render = function render() {
    var _this2 = this;

    return this.props.relatedQueries.length ? _react2.default.createElement(
      "section",
      { className: "related-search-container" },
      _react2.default.createElement(
        "h1",
        { className: "heading-f related-search-title" },
        "Related Searches"
      ),
      _react2.default.createElement(
        _layout2.default,
        { "x-small": 4, padded: true },
        this.props.relatedQueries.map(function (query, index) {
          return _react2.default.createElement(
            _link2.default,
            {
              className: "related-search-link",
              onClick: function onClick(event) {
                return _this2._handleClick(query.searchQuery, event);
              },
              key: index },
            query.searchText
          );
        })
      )
    ) : null;
  };

  return RelatedSearch;
}(_react.Component);

exports.default = RelatedSearch;


RelatedSearch.displayName = "RelatedSearch";

RelatedSearch.propTypes = {
  relatedQueries: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    searchText: _react.PropTypes.string.isRequired,
    searchQuery: _react.PropTypes.object.isRequired
  })),
  onClick: _react.PropTypes.func
};

RelatedSearch.defaultProps = {
  relatedQueries: [],
  onClick: function onClick() {}
};