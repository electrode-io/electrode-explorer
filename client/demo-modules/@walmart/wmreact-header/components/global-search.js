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

var _icon = require("@walmart/wmreact-base/lib/components/icon");

var _icon2 = _interopRequireDefault(_icon);

var _button = require("@walmart/wmreact-interactive/lib/components/button");

var _button2 = _interopRequireDefault(_button);

var _automationIdUtils = { getDataAutomationIdPair: function () { /* no-op */ } };

var _searchDropdown = require("./search-dropdown");

var _searchDropdown2 = _interopRequireDefault(_searchDropdown);

var _collectorContext = require("@walmart/wmreact-analytics/lib/backplane/collector-context");

var _collectorContext2 = _interopRequireDefault(_collectorContext);

var _get = require("lodash/get");

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 The Global Search component of the header. Passes moduleData down to the searchdropdown.

 ```jsx
 <GlobalSearch moduleData={
   {
     type: "GlobalSearch",
     configs: {
       options: [
         {
           label: "Auto & Tires",
           categoryId: "91083",
           uid: "KZ0ktkHH"
         },
         {
           label: "Baby",
           categoryId: "5427",
           uid: "fHCypgFG"
         },
         {
           label: "Beauty",
           categoryId: "1085666",
           uid: "whzlG8-N"
         },
         {
           label: "Books",
           categoryId: "3920",
           uid: "Prik5hH8"
         },
         {
           label: "Cell Phones",
           categoryId: "1105910",
           uid: "oJgACZdH"
         },
         {
           label: "Clothing",
           categoryId: "5438",
           uid: "IRVq4Xj2"
         },
         {
           label: "Electronics",
           categoryId: "3944",
           uid: "8ojrslW8"
         },
         {
           label: "Food",
           categoryId: "976759",
           uid: "88kAZA4B"
         }
       ]
     },
     module_id: "56074e92-06db-4890-b5cd-2f87dc7327c4"
   }
 } />
 ```

 @import {GlobalSearch}
 @flags noVisibleRender
 @component GlobalSearch
 @playground
 GlobalSearch
 */

var GlobalSearch = function (_Component) {
  (0, _inherits3.default)(GlobalSearch, _Component);

  function GlobalSearch(props) {
    (0, _classCallCheck3.default)(this, GlobalSearch);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this._handleEmptyInput = _this._handleEmptyInput.bind(_this);
    _this._getSearchInput = _this._getSearchInput.bind(_this);
    return _this;
  }

  GlobalSearch.prototype.componentDidMount = function componentDidMount() {
    /*eslint-disable no-undef*/
    // if something cause a re-mount, we should be vigilant
    // React can wipe out the original dom and replace it with
    // identical doms but they are not the same as we have to rebind etc
    if (typeof window.typeaheadResult === "function") {
      // recalculate the elements
      typeaheadResult.init();
      typeaheadResult.reRenderLastState();
    }

    var mwebTypeaheadObject = (0, _get2.default)(window, "_wml.MWEB_TYPEAHEAD");
    if (mwebTypeaheadObject && typeof mwebTypeaheadObject.Typeahead === "function") {
      mwebTypeaheadObject.init();
    }
    /*eslint-enable no-undef*/
  };

  GlobalSearch.prototype._getClassNames = function _getClassNames(className) {
    return (0, _classnames2.default)(className, "header-GlobalSearch width-full");
  };

  GlobalSearch.prototype._renderDropdown = function _renderDropdown(selectedCategory, options) {
    var dropdownProps = { selectedCategory: selectedCategory, options: options };
    return _react2.default.createElement(_searchDropdown2.default, dropdownProps);
  };

  GlobalSearch.prototype._renderInput = function _renderInput() {
    return _react2.default.createElement("input", {
      name: "query",
      ref: "globalSearchInput",
      "data-automation-id": "header-search-input",
      className: "header-GlobalSearch-input",
      placeholder: "Search",
      id: "global-search-input",
      autoComplete: "off",
      autoCapitalize: "off",
      autoCorrect: "off"
    });
  };

  GlobalSearch.prototype._renderTypeaheadDropdown = function _renderTypeaheadDropdown() {
    return _react2.default.createElement("div", { className: "header-Typeahead-dropdown hide-content", id: "global-search-dropdown" });
  };

  GlobalSearch.prototype._renderClearInput = function _renderClearInput() {
    // @TODO use <SimpleButton> instead of button when it's out
    return _react2.default.createElement(
      "button",
      {
        type: "reset",
        className: "header-Typeahead-clear hide-content",
        id: "global-search-clear"
      },
      _react2.default.createElement("i", { className: "wmicon wmicon-remove" }),
      _react2.default.createElement(
        "span",
        { className: "hide-content" },
        "Clear search field"
      )
    );
  };

  GlobalSearch.prototype._renderSubmit = function _renderSubmit() {
    return _react2.default.createElement(
      _button2.default,
      (0, _extends3.default)({
        type: "submit",
        className: "header-GlobalSearch-submit"
      }, (0, _automationIdUtils.getDataAutomationIdPair)("submit", this.props.dataAutomationId)),
      _react2.default.createElement(_icon2.default, { name: "search" }),
      _react2.default.createElement(
        "span",
        { className: "visuallyhidden" },
        "Search"
      )
    );
  };

  GlobalSearch.prototype._getSearchInput = function _getSearchInput() {
    return this.refs.globalSearchInput.value;
  };

  GlobalSearch.prototype._handleEmptyInput = function _handleEmptyInput(ev) {
    var searchValue = this._getSearchInput();
    // string is empty and has whitespace
    if (!/\S/.test(searchValue)) {
      ev.preventDefault();
    }
  };

  GlobalSearch.prototype.render = function render() {
    var _props = this.props;
    var _props$moduleData = _props.moduleData;
    var moduleId = _props$moduleData.moduleId;
    var type = _props$moduleData.type;
    var options = _props$moduleData.configs.options;
    var className = _props.className;
    var selectedCategory = _props.selectedCategory;
    var dataAutomationId = _props.dataAutomationId;
    var isMobile = _props.isMobile;


    return _react2.default.createElement(
      _collectorContext2.default,
      { moduleId: moduleId },
      _react2.default.createElement(
        "form",
        (0, _extends3.default)({
          onSubmit: this._handleEmptyInput,
          action: "/search/",
          method: "get",
          role: "search",
          "data-third-party": "false",
          "data-module": type,
          "data-module-id": moduleId,
          id: "global-search-form"
        }, (0, _automationIdUtils.getDataAutomationIdPair)(dataAutomationId, "")),
        _react2.default.createElement(
          _arrange2.default,
          { className: this._getClassNames(className) },
          !isMobile && _react2.default.createElement(
            _arrange2.default.Fit,
            null,
            this._renderDropdown(selectedCategory, options)
          ),
          _react2.default.createElement(
            _arrange2.default.Fill,
            null,
            _react2.default.createElement(
              "div",
              { className: "header-Typeahead" },
              _react2.default.createElement(
                "label",
                null,
                _react2.default.createElement(
                  "span",
                  { className: "visuallyhidden" },
                  "Search"
                ),
                this._renderInput(),
                this._renderTypeaheadDropdown(),
                this._renderClearInput()
              )
            )
          ),
          _react2.default.createElement(
            _arrange2.default.Fit,
            null,
            this._renderSubmit()
          )
        )
      )
    );
  };

  return GlobalSearch;
}(_react.Component);

GlobalSearch.displayName = "GlobalSearch";

GlobalSearch.propTypes = {
  /**
  check mobile device
  */
  isMobile: _react.PropTypes.bool,
  /**
  Data for configuring the component. Typically coming from Tempo. Contains on the category ID's
  and labels to be used in the dropdown.
  */
  moduleData: _react.PropTypes.shape({
    type: _react.PropTypes.string,
    moduleId: _react.PropTypes.string,
    configs: _react.PropTypes.shape({
      options: _react.PropTypes.array.isRequired
    }).isRequired
  }).isRequired,
  /**
  Category ID to be initially selected
  */
  selectedCategory: _react.PropTypes.string,
  /**
  Any additional style class.
  */
  className: _react.PropTypes.string,
  /**
  Automation ID base string
  */
  dataAutomationId: _react.PropTypes.string
};

GlobalSearch.defaultProps = {
  isMobile: false,
  selectedCategory: null,
  className: "",
  dataAutomationId: "header-GlobalSearch"
};

exports.default = GlobalSearch;