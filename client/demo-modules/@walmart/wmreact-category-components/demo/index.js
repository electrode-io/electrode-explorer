"use strict";

exports.__esModule = true;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _componentPlayground = require("component-playground");

var _componentPlayground2 = _interopRequireDefault(_componentPlayground);

var _objectAssign = require("object-assign");

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _index = require("../bundle.min");

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = [{
  title: "Banner",
  examples: [{
    title: "Image Banner",
    type: "playground",
    code: require("raw!./examples/banner1.example"),
    noRender: true
  }, {
    title: "Message Banner",
    type: "playground",
    code: require("raw!./examples/banner2.example"),
    noRender: true
  }]
}, {
  title: "BreadCrumbs",
  examples: [{
    type: "playground",
    code: require("raw!./examples/breadcrumbs-single.example"),
    noRender: true
  }, {
    type: "playground",
    code: require("raw!./examples/breadcrumbs.example"),
    noRender: true
  }]
}, {
  title: "ExpandableHtmlText",
  examples: [{
    type: "playground",
    code: require("raw!./examples/expandable-html-text.example"),
    noRender: true
  }]
}, {
  title: "FacetTab",
  examples: [{
    type: "playground",
    code: require("raw!./examples/facet-tab.example"),
    noRender: true
  }]
}, {
  title: "InfiniteMenu",
  examples: [{
    type: "playground",
    code: require("raw!./examples/infinite-menu.example"),
    noRender: true
  }]
}, {
  title: "MinistoryStackable",
  examples: [{
    title: "Layout 1: [ [1/3, 1/3, 1/3], [1/3, 1/3, 1/3] ]",
    type: "playground",
    code: require("raw!./examples/mini-story-stackable1.example"),
    noRender: true
  }, {
    title: "Layout 2: [ [2/3, 1/3], [1/3, 2/3] ]",
    type: "playground",
    code: require("raw!./examples/mini-story-stackable2.example"),
    noRender: true
  }, {
    title: "Layout 3: [ [2/3, 1/3], [1/3, 1/3, 1/3] ]",
    type: "playground",
    code: require("raw!./examples/mini-story-stackable3.example"),
    noRender: true
  }, {
    title: "Layout 4: [ [2/3, 1/3], [1/3, 2/3], [1/3, 1/3, 1/3] ]",
    type: "playground",
    code: require("raw!./examples/mini-story-stackable4.example"),
    noRender: true
  }]
}, {
  title: "ModuleDrawer",
  examples: [{
    type: "playground",
    code: require("raw!./examples/module-drawer.example"),
    noRender: true
  }]
}, {
  title: "ModuleTitle",
  examples: [{
    type: "playground",
    code: require("raw!./examples/module-title.example"),
    noRender: true
  }, {
    type: "playground",
    code: require("raw!./examples/module-title-link.example"),
    noRender: true
  }]
}, {
  title: "Multi Story Module",
  examples: [{
    type: "playground",
    code: require("raw!./examples/multi-story.example"),
    noRender: true
  }]
}, {
  title: "PopularCategories",
  examples: [{
    type: "playground",
    code: require("raw!./examples/popular-categories.example"),
    noRender: true
  }, {
    type: "playground",
    code: require("raw!./examples/popular-categories-no-button.example"),
    noRender: true
  }]
}, {
  title: "ProductCarousel",
  examples: [{
    type: "playground",
    code: require("raw!./examples/product-carousel.example"),
    noRender: true
  }]
}, {
  title: "RedirectMessage",
  examples: [{
    type: "playground",
    code: require("raw!./examples/redirect-message.example"),
    noRender: true
  }]
}, {
  title: "Single Story Module",
  examples: [{
    type: "playground",
    code: require("raw!./examples/single-story.example"),
    noRender: true
  }]
}, {
  title: "Single Item Module",
  examples: [{
    type: "playground",
    code: require("raw!./examples/single-item-basic.example"),
    noRender: true
  }, {
    type: "playground",
    code: require("raw!./examples/single-item.example"),
    noRender: true
  }]
}, {
  title: "Sidebar Menu Module",
  examples: [{
    type: "playground",
    code: require("raw!./examples/sidebar-menu-module.example"),
    noRender: true
  }]
}, {
  title: "TabNavigation",
  examples: [{
    type: "playground",
    code: require("raw!./examples/tab-navigation.example"),
    noRender: true
  }]
}, {
  title: "Tabbed Product Carousel",
  examples: [{
    type: "playground",
    code: require("raw!./examples/tabbed-product-carousel.example"),
    noRender: true
  }]
}, {
  title: "Themed Tile",
  examples: [{
    title: "Themed tile with only background image",
    type: "playground",
    code: require("raw!./examples/themed-tile1.example"),
    noRender: true
  }, {
    title: "Themed tile with theme button",
    type: "playground",
    code: require("raw!./examples/themed-tile2.example"),
    noRender: true
  }]
}, {
  title: "TopBrands",
  examples: [{
    type: "playground",
    code: require("raw!./examples/top-brands.example"),
    noRender: true
  }]
}, {
  title: "CrossLinksModule",
  examples: [{
    type: "playground",
    code: require("raw!./examples/cross-links-module.example"),
    noRender: true
  }]
}];

exports.default = _react2.default.createClass({
  displayName: "demo",

  propTypes: {
    scope: _react2.default.PropTypes.object
  },

  getComponents: function getComponents() {
    var localScope = (0, _objectAssign2.default)({ React: _react2.default }, this.props.scope || {}, _index2.default);
    return components.map(function (component, index) {
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
            _react2.default.createElement(_componentPlayground2.default, {
              codeText: example.code,
              scope: localScope,
              noRender: example.noRender })
          );
        })
      );
    });
  },
  render: function render() {
    return _react2.default.createElement(
      "div",
      { className: "component-documentation" },
      this.getComponents()
    );
  }
});
