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

var _flyout = require("@walmart/wmreact-containers/lib/components/flyout");

var _flyout2 = _interopRequireDefault(_flyout);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _automationIdUtils = require("@walmart/automation-utils/lib/utils/automation-id-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 The search dropdown component. Has a dropdown to select a category used when searching.

 ```jsx
 <SearchDropdown options={
   [
     {
       label: "Auto & Tires",
       categoryId: "91083"
     },
     {
       label: "Baby",
       categoryId: "5427"
     },
     {
       label: "Beauty",
       categoryId: "1085666"
     },
     {
       label: "Books",
       categoryId: "3920"
     },
     {
       label: "Cell Phones",
       categoryId: "1105910"
     },
     {
       label: "Clothing",
       categoryId: "5438"
     },
     {
       label: "Electronics",
       categoryId: "3944"
     },
     {
       label: "Food",
       categoryId: "976759"
     }
   ]
 } />
 ```

 @import {SearchDropdown}
 @flags noVisibleRender
 @component SearchDropdown
 @playground
 SearchDropdown
 */

var SearchDropdown = function (_Component) {
  (0, _inherits3.default)(SearchDropdown, _Component);

  function SearchDropdown(props) {
    (0, _classCallCheck3.default)(this, SearchDropdown);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this._initializeCategories(props);

    _this.state = {
      selected: props.selectedCategory,
      open: false
    };

    _this._setOpen = _this._setOpen.bind(_this);
    return _this;
  }

  SearchDropdown.prototype._getClassNames = function _getClassNames(className, open) {
    return (0, _classnames2.default)(className, "header-SearchDropdown", {
      "is-open": open
    });
  };

  SearchDropdown.prototype._initializeCategories = function _initializeCategories(_ref) {
    var _this2 = this;

    var options = _ref.options;
    var columnLength = _ref.columnLength;

    var allDepts = {
      categoryId: "0",
      label: "All Departments"
    };

    this.idLabelMap = {}; // object to efficiently get category name from ID
    this.columns = []; // column structure for rendering
    var currentColumn = -1;

    [allDepts].concat(options).forEach(function (option, index) {
      if (index % columnLength === 0) {
        _this2.columns.push([]);
        currentColumn++;
      }

      _this2.idLabelMap[option.categoryId] = option.label;
      _this2.columns[currentColumn].push(option);
    });
  };

  SearchDropdown.prototype._displayCategory = function _displayCategory() {
    return this.idLabelMap[this.state.selected] || "All";
  };

  SearchDropdown.prototype._setCategory = function _setCategory(categoryId) {
    this.setState({
      selected: categoryId,
      open: false
    });

    /*eslint-disable no-undef*/
    // hook into the typeahead that is pure JS
    if (window.typeaheadResult && typeof window.typeaheadResult.setCatId === "function") {
      window.typeaheadResult.setCatId(categoryId);
    }
    /*eslint-enable no-undef*/
  };

  SearchDropdown.prototype._renderButton = function _renderButton() {
    return _react2.default.createElement(
      _button2.default,
      (0, _extends3.default)({
        className: "header-SearchDropdown-toggle",
        dropdown: true
      }, (0, _automationIdUtils.getDataAutomationIdPair)("toggle", this.props.dataAutomationId)),
      this._displayCategory()
    );
  };

  SearchDropdown.prototype._renderOptions = function _renderOptions(options, column) {
    var _this3 = this;

    return options.map(function (option, index) {
      return _react2.default.createElement(
        _button2.default,
        (0, _extends3.default)({
          key: index,
          className: "font-semibold header-SearchDropdown-option",
          fakelink: true,
          onClick: _this3._setCategory.bind(_this3, option.categoryId)
        }, (0, _automationIdUtils.getDataAutomationIdPair)("column-" + column + "-option-" + index, _this3.props.dataAutomationId)),
        option.label
      );
    });
  };

  SearchDropdown.prototype._renderColumns = function _renderColumns(columns) {
    var _this4 = this;

    return columns.map(function (options, index) {
      return _react2.default.createElement(
        "div",
        { key: index, className: "Grid-col u-size-1-" + _this4.columns.length },
        _this4._renderOptions(options, index)
      );
    });
  };

  SearchDropdown.prototype._setOpen = function _setOpen(open) {
    this.setState({ open: open });
  };

  SearchDropdown.prototype.render = function render() {
    var _props = this.props;
    var className = _props.className;
    var dataAutomationId = _props.dataAutomationId;
    var open = this.state.open;


    return _react2.default.createElement(
      _flyout2.default,
      (0, _extends3.default)({
        className: this._getClassNames(className, open),
        direction: "bottom",
        size: "extrawide",
        active: open,
        trigger: this._renderButton(),
        onActiveChange: this._setOpen
      }, (0, _automationIdUtils.getDataAutomationIdPair)(dataAutomationId, "")),
      _react2.default.createElement(
        "div",
        { className: "Grid" },
        this._renderColumns(this.columns),
        _react2.default.createElement("input", { type: "hidden", name: "cat_id", value: this.state.selected })
      )
    );
  };

  return SearchDropdown;
}(_react.Component);

SearchDropdown.displayName = "SearchDropdown";

SearchDropdown.propTypes = {
  /**
  Category ID's and labels to be used in the dropdown.
  */
  options: _react.PropTypes.array.isRequired,
  /**
  Category ID to be initially selected
  */
  selectedCategory: _react.PropTypes.string,
  /**
  Number of categories in each column.
  */
  columnLength: _react.PropTypes.number,
  /**
  Any additional style classes
  */
  className: _react.PropTypes.string,
  /**
  Automation ID base string
  */
  dataAutomationId: _react.PropTypes.string
};

SearchDropdown.defaultProps = {
  selectedCategory: null,
  columnLength: 9,
  className: "",
  dataAutomationId: "header-SearchDropdown"
};

exports.default = SearchDropdown;