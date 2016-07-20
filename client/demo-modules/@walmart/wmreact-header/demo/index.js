"use strict";

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

var _data = require("./data");

var _header = require("raw!./examples/header.example");

var _header2 = _interopRequireDefault(_header);

var _globalEyebrowNav = require("raw!./examples/global-eyebrow-nav.example");

var _globalEyebrowNav2 = _interopRequireDefault(_globalEyebrowNav);

var _globalEyebrowNavMobile = require("raw!./examples/global-eyebrow-nav-mobile.example");

var _globalEyebrowNavMobile2 = _interopRequireDefault(_globalEyebrowNavMobile);

var _storefinderLink = require("raw!./examples/storefinder-link.example");

var _storefinderLink2 = _interopRequireDefault(_storefinderLink);

var _storeListItem = require("raw!./examples/store-list-item.example");

var _storeListItem2 = _interopRequireDefault(_storeListItem);

var _storeList = require("raw!./examples/store-list.example");

var _storeList2 = _interopRequireDefault(_storeList);

var _storeFinderField = require("raw!./examples/store-finder-field.example");

var _storeFinderField2 = _interopRequireDefault(_storeFinderField);

var _storeFinderPanel = require("raw!./examples/store-finder-panel.example");

var _storeFinderPanel2 = _interopRequireDefault(_storeFinderPanel);

var _headerLogo = require("raw!./examples/header-logo.example");

var _headerLogo2 = _interopRequireDefault(_headerLogo);

var _globalSearch = require("raw!./examples/global-search.example");

var _globalSearch2 = _interopRequireDefault(_globalSearch);

var _searchDropdown = require("raw!./examples/search-dropdown.example");

var _searchDropdown2 = _interopRequireDefault(_searchDropdown);

var _headerButtonToggle = require("raw!./examples/header-button-toggle.example");

var _headerButtonToggle2 = _interopRequireDefault(_headerButtonToggle);

var _globalAccountFlyout = require("raw!./examples/global-account-flyout.example");

var _globalAccountFlyout2 = _interopRequireDefault(_globalAccountFlyout);

var _headerCartCount = require("raw!./examples/header-cart-count.example");

var _headerCartCount2 = _interopRequireDefault(_headerCartCount);

var _headerCart = require("raw!./examples/header-cart.example");

var _headerCart2 = _interopRequireDefault(_headerCart);

var _lefthandNavPanel = require("raw!./examples/lefthand-nav-panel.example");

var _lefthandNavPanel2 = _interopRequireDefault(_lefthandNavPanel);

var _globalLefthandNav = require("raw!./examples/global-lefthand-nav.example");

var _globalLefthandNav2 = _interopRequireDefault(_globalLefthandNav);

var _globalLefthandNavMobile = require("raw!./examples/global-lefthand-nav-mobile.example");

var _globalLefthandNavMobile2 = _interopRequireDefault(_globalLefthandNavMobile);

var _globalSecondaryNav = require("raw!./examples/global-secondary-nav.example");

var _globalSecondaryNav2 = _interopRequireDefault(_globalSecondaryNav);

var _globalMarketingMessages = require("raw!./examples/global-marketing-messages.example");

var _globalMarketingMessages2 = _interopRequireDefault(_globalMarketingMessages);

var _fader = require("raw!./examples/fader.example");

var _fader2 = _interopRequireDefault(_fader);

var _appbanner = require("raw!./examples/appbanner.example");

var _appbanner2 = _interopRequireDefault(_appbanner);

var _index = require("../bundle.min");

var libraryScope = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Index = function (_React$Component) {
  (0, _inherits3.default)(Index, _React$Component);

  function Index() {
    (0, _classCallCheck3.default)(this, Index);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  Index.prototype.render = function render() {
    var localScope = (0, _objectAssign2.default)({ React: _react2.default }, this.props.scope || {}, libraryScope);
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
                scope: (0, _objectAssign2.default)(localScope, example.extraScope || {}),
                noRender: example.noRender })
            );
          })
        );
      })
    );
  };

  return Index;
}(_react2.default.Component);

Index.propTypes = {
  scope: _react2.default.PropTypes.object
};

Index.Components = [{
  title: "Header",
  examples: [{
    type: "playground",
    code: _header2.default,
    noRender: true,
    extraScope: {
      quimbyData: _data.quimbyData,
      storeFinderResponse: _data.storeFinderResponse
    }
  }]
}, {
  title: "Global Eyebrow Nav",
  examples: [{
    type: "playground",
    code: _globalEyebrowNav2.default,
    noRender: true,
    extraScope: {
      quimbyData: _data.quimbyData,
      storeFinderResponse: _data.storeFinderResponse
    }
  }]
}, {
  title: "Global Eyebrow Nav Mobile",
  examples: [{
    type: "playground",
    code: _globalEyebrowNavMobile2.default,
    noRender: true,
    extraScope: {
      quimbyData: _data.quimbyData
    }
  }]
}, {
  title: "Store Finder Link",
  examples: [{
    type: "playground",
    code: _storefinderLink2.default,
    noRender: true
  }]
}, {
  title: "Store List Item",
  examples: [{
    type: "playground",
    code: _storeListItem2.default,
    noRender: true
  }]
}, {
  title: "Store List",
  examples: [{
    type: "playground",
    code: _storeList2.default,
    noRender: true
  }]
}, {
  title: "Store Finder Field",
  examples: [{
    type: "playground",
    code: _storeFinderField2.default,
    noRender: true
  }]
}, {
  title: "Store Finder Panel",
  examples: [{
    type: "playground",
    code: _storeFinderPanel2.default,
    noRender: true,
    extraScope: {
      preferredStores: _data.preferredStores,
      nearbyStores: _data.nearbyStores
    }
  }]
}, {
  title: "Header Logo",
  examples: [{
    type: "playground",
    code: _headerLogo2.default,
    noRender: true
  }]
}, {
  title: "Global Search",
  examples: [{
    type: "playground",
    code: _globalSearch2.default,
    noRender: true,
    extraScope: {
      quimbyData: _data.quimbyData
    }
  }]
}, {
  title: "Search Dropdown",
  examples: [{
    type: "playground",
    code: _searchDropdown2.default,
    noRender: true,
    extraScope: {
      quimbyData: _data.quimbyData
    }
  }]
}, {
  title: "Header Icon Toggle",
  examples: [{
    type: "playground",
    code: _headerButtonToggle2.default,
    noRender: true
  }]
}, {
  title: "Global Account Flyout",
  examples: [{
    type: "playground",
    code: _globalAccountFlyout2.default,
    noRender: true,
    extraScope: {
      quimbyData: _data.quimbyData
    }
  }]
}, {
  title: "Header Cart Count",
  examples: [{
    type: "playground",
    code: _headerCartCount2.default,
    noRender: true
  }]
}, {
  title: "Header Cart",
  examples: [{
    type: "playground",
    code: _headerCart2.default,
    noRender: true
  }]
}, {
  title: "Lefthand Nav Panel",
  examples: [{
    type: "playground",
    code: _lefthandNavPanel2.default,
    noRender: true,
    extraScope: {
      quimbyData: _data.quimbyData
    }
  }]
}, {
  title: "Global Lefthand Nav",
  examples: [{
    type: "playground",
    code: _globalLefthandNav2.default,
    noRender: true,
    extraScope: {
      quimbyData: _data.quimbyData
    }
  }]
}, {
  title: "Global Lefthand Nav Mobile",
  examples: [{
    type: "playground",
    code: _globalLefthandNavMobile2.default,
    noRender: true,
    extraScope: {
      quimbyData: _data.quimbyData
    }
  }]
}, {
  title: "Global Secondary Nav",
  examples: [{
    type: "playground",
    code: _globalSecondaryNav2.default,
    noRender: true,
    extraScope: {
      quimbyData: _data.quimbyData
    }
  }]
}, {
  title: "Global Marketing Messages",
  examples: [{
    type: "playground",
    code: _globalMarketingMessages2.default,
    noRender: true,
    extraScope: {
      quimbyData: _data.quimbyData
    }
  }]
}, {
  title: "Fader Util",
  examples: [{
    type: "playground",
    code: _fader2.default,
    noRender: true
  }]
}, {
  title: "App Banner",
  examples: [{
    type: "playground",
    code: _appbanner2.default,
    noRender: true
  }]
}];

module.exports = Index;
