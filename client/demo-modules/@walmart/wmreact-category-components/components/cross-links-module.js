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

var _exenv = require("exenv");

var _categoryUtils = require("@walmart/category-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
A component for displaying subcategory as a flyout
@examples
```jsx
<CrossLinksModule data={
  "moduleTitle": "Popular Category",
  "data": [
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple"
    },
    {
      "uid": "WcaenllV1",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV2",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV3",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV4",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV5",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV6",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV7",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    }
  ]}/>
```
@component CrossLinksModule
@import {CrossLinksModule}
@playground
CrossLinksModule
```
<CrossLinksModule data={
  "moduleTitle": "Popular Category",
  "data": [
    {
      "uid": "WcaenllV",
      "url": "/cp/1229722",
      "title": "Apple"
    },
    {
      "uid": "WcaenllV1",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV2",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV3",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV4",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV5",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV6",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    },
    {
      "uid": "WcaenllV7",
      "url": "/cp/1229722",
      "title": "Apple Brand Experience"
    }
  ]
}/>
```
*/

var CrossLinksModule = function (_Component) {
  (0, _inherits3.default)(CrossLinksModule, _Component);

  function CrossLinksModule(props) {
    (0, _classCallCheck3.default)(this, CrossLinksModule);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      numColumns: _this._findNumColumns(_exenv.canUseDOM ? _this._getWindow().innerWidth : 0, props.data)
    };
    return _this;
  }

  CrossLinksModule.prototype._getWindow = function _getWindow() {
    return window;
  };

  CrossLinksModule.prototype._findNumColumns = function _findNumColumns(deviceWidth, data) {
    // By default xs screens should have 2 columns and s screens should have 4 columns.
    var numColumns = { xs: 2, s: 4 };
    var pixelWidthPerCharacter = 10;

    if (data.some(function (item) {
      return item.title.length * pixelWidthPerCharacter > deviceWidth / 2;
    })) {
      // On s screen if any title string length takes more
      // than half of device width show only one column
      numColumns.s = 1;
      numColumns.xs = 1;
    } else if (data.some(function (item) {
      return item.title.length * pixelWidthPerCharacter > deviceWidth / 3;
    })) {
      // On s screen if any title string length takes more
      // than a third of device width show only two columns
      numColumns.s = 2;
    } else if (data.some(function (item) {
      return item.title.length * pixelWidthPerCharacter > deviceWidth / 4;
    })) {
      // On s screen if any title string length takes more
      // than a third of device width show only three columns
      numColumns.s = 3;
    }

    return numColumns;
  };

  CrossLinksModule.prototype._updateWindowSize = function _updateWindowSize() {
    this.setState({
      numColumns: this._findNumColumns(_exenv.canUseDOM ? this._getWindow().innerWidth : 0, this.props.data)
    });
  };

  CrossLinksModule.prototype._renderTerm = function _renderTerm(item, index) {
    var numColumns = this.state.numColumns;
    var maxIndexS = numColumns.s * this.props.maxRow - 1;
    var maxIndexXS = numColumns.xs * this.props.maxRow - 1;
    var classes = (0, _classnames2.default)("Grid-col menu-item", {
      "hide-content": index > maxIndexXS,
      "display-block": index <= maxIndexXS,
      "hide-content-xs": index > maxIndexS,
      "display-block-xs": index <= maxIndexS,
      "u-size-1-1": numColumns.xs === 1,
      "u-size-1-2": numColumns.xs === 2,
      "u-size-1-1-s": numColumns.s === 1,
      "u-size-1-2-s": numColumns.s === 2,
      "u-size-1-3-s": numColumns.s === 3,
      "u-size-1-4-s": numColumns.s === 4
    });
    return _react2.default.createElement(
      "a",
      { key: index, className: classes, href: item.url, __self: this
      },
      item.title
    );
  };

  CrossLinksModule.prototype.componentDidMount = function componentDidMount() {
    this._updateWindowSize();
  };

  CrossLinksModule.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props;
    var data = _props.data;
    var moduleTitle = _props.moduleTitle;
    var moduleType = _props.moduleType;

    if (data.length === 0) {
      return null;
    }
    var menuItems = data.map(function (item, i) {
      return _this2._renderTerm(item, i);
    });
    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({ className: "cross-links Grid clearfix"
      }, (0, _categoryUtils.getTempoModuleAutomationId)(moduleType, process), {
        __self: this
      }),
      _react2.default.createElement(
        "h4",
        { className: "cross-links-title Grid-col", __self: this
        },
        moduleTitle,
        ":"
      ),
      menuItems
    );
  };

  return CrossLinksModule;
}(_react.Component);

exports.default = CrossLinksModule;


CrossLinksModule.displayName = "CrossLinksModule";

CrossLinksModule.propTypes = {
  data: _react.PropTypes.arrayOf(_react.PropTypes.shape({
    title: _react2.default.PropTypes.string,
    url: _react2.default.PropTypes.string
  })).isRequired,
  maxRow: _react.PropTypes.number,
  moduleTitle: _react.PropTypes.string.isRequired,
  moduleType: _react.PropTypes.string
};

CrossLinksModule.defaultProps = {
  maxRow: 4,
  moduleType: "CrossLinksModule"
};