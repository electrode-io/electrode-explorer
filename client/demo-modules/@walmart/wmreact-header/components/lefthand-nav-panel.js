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

var _image = require("@walmart/wmreact-base/lib/components/image");

var _image2 = _interopRequireDefault(_image);

var _link = require("@walmart/wmreact-base/lib/components/link");

var _link2 = _interopRequireDefault(_link);

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _automationIdUtils = { getDataAutomationIdPair: function () { /* no-op */ } };

var _fader = require("../utils/fader");

var _fader2 = _interopRequireDefault(_fader);

var _wmreactImageUtils = require("@walmart/wmreact-image-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PLACEHOLDER_IMAGE = "//i5.walmartimages.com/dfw/63fd9f59-ebd7/k2-_c26840ed-0ac3-478d-9173-398eaa1faef2.v1.png";

/**
 The submenu panel subcomponent for the header left hand nav. Has links for departments and
 and categories as well as a lazy loaded promo image for the given super department.

 ```jsx
 <LefthandNavPanel show={true} superDept={
   {
     name: "Electronics & Office",
     link: {
       alt: "Electronics & Office",
       assetId: "3781758",
       assetName: "35023-119032-01_INT_86995_Electronics_Flyout_207x460_1219_V1.png",
       clickThrough: {
         type: "url",
         value: "/browse/electronics/laptops/3944_3951_1089430?cat_id=3944_3951_1089430
       },
       height: "460",
       src: "http://i5.walmartimages.com/dfw/4ff9c6c9-8c13/k2-_b6e99a03-22d2-4d5e-8a0f.png",
       title: "Electronics & Office",
       width: "207",
       size: "67492",
       contentType: "image/png",
       uid: "qGxDjh9C"
     },
     departments: [{
       department: {
         linkText: "Shop Electronics",
         title: "Shop Electronics",
         clickThrough: {
           type: "url",
           value: "/cp/Electronics/3944"
         },
         uid: "p1jc5fJq"
       },
       colNum: "1",
       uid: "7LhTgYRR",
       categories: []
     }, {
       department: {
         linkText: "TV & Video",
         title: "TV & Video",
         clickThrough: {
           type: "url",
           value: "/cp/televisions-video/1060825"
         },
         uid: "pXHzlEyi"
       },
       colNum: "1",
       categories: [{
         category: {
           linkText: "TVs",
           title: "TVs",
           clickThrough: {
             type: "url",
             value: "/browse/electronics/tvs/3944_1060825_447913"
           },
           uid: "IwLIj6qT"
         },
         uid: "OAraUC3y"
       }, {
         category: {
           linkText: "DVD & Blu-ray Players ",
           title: "DVD & Blu-ray Players ",
           clickThrough: {
             type: "url",
             value: "/browse/electronics/dvd-blu-ray-players/3944_1060825_95987"
           },
           uid: "F6F3Droh"
         },
         uid: "0TMGv5cD"
       }, {
         category: {
           linkText: "Home Audio & Theater ",
           title: "Home Audio & Theater ",
           clickThrough: {
             type: "url",
             value: "/cp/Home-Audio-Theater/77622"
           },
           uid: "mQER_pBQ"
         },
         uid: "x76Q43t6"
       }],
       uid: "P_Qsh1oB"
     }, {
       department: {
         linkText: "Portable Audio",
         title: "iPod & Portable Audio",
         clickThrough: {
           type: "url",
           value: "/cp/ipods-mp3-players/96469"
         },
         uid: "gSQgXeD8"
       },
       colNum: "2",
       categories: [],
       uid: "Hp-IHs5A"
     }, {
       department: {
         linkText: "Tips & Advice",
         title: "Tips & Advice",
         uid: "2HNCL1LP",
         clickThrough: {
           type: "url",
           value: "http://wm15.walmart.com/electronics-resource-center/"
         }
       },
       colNum: "3",
       categories: [],
       uid: "-ko6h6mz"
     }],
     uid: "-QBPPMxd"
   }
 }/>

 ```

 @import {LefthandNavPanel}
 @flags noVisibleRender
 @component LefthandNavPanel
 @playground
 LefthandNavPanel
 */

var LefthandNavPanel = function (_Component) {
  (0, _inherits3.default)(LefthandNavPanel, _Component);

  function LefthandNavPanel(props) {
    (0, _classCallCheck3.default)(this, LefthandNavPanel);

    var _this = (0, _possibleConstructorReturn3.default)(this, _Component.call(this, props));

    _this.state = {
      imageLoaded: props.show
    };
    return _this;
  }

  LefthandNavPanel.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    if (nextProps.show && !this.state.imageLoaded) {
      this.setState({
        imageLoaded: true
      });
    }
  };

  LefthandNavPanel.prototype._getClassNames = function _getClassNames(className, show) {
    return (0, _classnames2.default)("header-GlobalLefthandNav-panel", className, { "hide-content": !show });
  };

  LefthandNavPanel.prototype._renderCategories = function _renderCategories(categories, prefix) {
    var linkClassName = "header-GlobalLefthandNav-panel-link " + "header-GlobalLefthandNav-panel-link--small display-inline-block";

    if (categories) {
      return categories.map(function (cat, index) {
        var _cat$category = cat.category;
        var uid = _cat$category.uid;
        var linkText = _cat$category.linkText;
        var _cat$category$clickTh = _cat$category.clickThrough;
        var value = _cat$category$clickTh.value;
        var title = _cat$category$clickTh.title;

        return _react2.default.createElement(
          _link2.default,
          (0, _extends3.default)({
            key: index,
            alt: title,
            className: linkClassName,
            "data-uid": uid,
            href: value
          }, (0, _automationIdUtils.getDataAutomationIdPair)("cat-" + index, prefix)),
          linkText
        );
      });
    }
  };

  LefthandNavPanel.prototype._getColumns = function _getColumns(departments) {
    var _this2 = this;

    var linkClassName = "header-GlobalLefthandNav-panel-link " + "header-GlobalLefthandNav-panel-link--large arrow-link display-inline-block";

    // Columns for rendering
    // 4th column is present so there won't be errors if there a merchant accidently pubishes
    // something there. That column won't actually be displayed though.
    var columns = { "1": [], "2": [], "3": [], "4": [] };

    departments.forEach(function (dept, index) {
      var _dept$department = dept.department;
      var uid = _dept$department.uid;
      var linkText = _dept$department.linkText;
      var _dept$department$clic = _dept$department.clickThrough;
      var value = _dept$department$clic.value;
      var title = _dept$department$clic.title;

      var automationId = _this2.props.dataAutomationId + "-dept-" + index;
      columns[dept.colNum].push(_react2.default.createElement(
        "div",
        { className: "header-GlobalLefthandNav-panel-column-linkGroup", key: index },
        _react2.default.createElement(
          _link2.default,
          (0, _extends3.default)({
            arrow: true,
            alt: title,
            className: linkClassName,
            "data-uid": uid,
            href: value
          }, (0, _automationIdUtils.getDataAutomationIdPair)(automationId, "")),
          linkText
        ),
        _this2._renderCategories(dept.categories, automationId)
      ));
    });

    return columns;
  };

  LefthandNavPanel.prototype._renderColumns = function _renderColumns(departments, columnClassName) {
    var columns = this._getColumns(departments);

    return ["1", "2", "3"].map(function (colNum, index) {
      return _react2.default.createElement(
        "div",
        { className: columnClassName, key: index },
        columns[colNum]
      );
    });
  };

  LefthandNavPanel.prototype._getFaderProps = function _getFaderProps(show) {
    return {
      type: show ? "fadeIn" : "fadeOut",
      duration: show ? 300 : 0
    };
  };

  LefthandNavPanel.prototype._getImageSrc = function _getImageSrc(_ref, loaded) {
    var src = _ref.src;
    var height = _ref.height;
    var width = _ref.width;

    return loaded ? (0, _wmreactImageUtils.checkImageSrc)(src, height, width) : PLACEHOLDER_IMAGE;
  };

  // Corner Image which is lazy loaded and faded in


  LefthandNavPanel.prototype._renderImage = function _renderImage(link, show, loaded) {
    if (link) {
      var value = link.clickThrough.value;
      var title = link.title;
      var uid = link.uid;
      var assetId = link.assetId;
      var width = link.width;
      var height = link.height;
      var alt = link.alt;
      var src = link.src;


      return _react2.default.createElement(
        _fader2.default,
        this._getFaderProps(show),
        _react2.default.createElement(
          "div",
          { className: "header-GlobalLefthandNav-panel-image" },
          _react2.default.createElement(
            _link2.default,
            (0, _extends3.default)({
              href: value,
              alt: title,
              "data-uid": uid,
              "data-asset-id": assetId
            }, (0, _automationIdUtils.getDataAutomationIdPair)("image", this.props.dataAutomationId)),
            _react2.default.createElement(_image2.default, {
              className: "display-block",
              width: width,
              height: height,
              alt: alt,
              src: this._getImageSrc({ src: src, height: height, width: width }, loaded)
            })
          )
        )
      );
    }
  };

  LefthandNavPanel.prototype.render = function render() {
    var _props = this.props;
    var _props$superDept = _props.superDept;
    var departments = _props$superDept.departments;
    var link = _props$superDept.link;
    var show = _props.show;
    var className = _props.className;
    var dataAutomationId = _props.dataAutomationId;

    var columnClassName = "header-GlobalLefthandNav-panel-column pull-left";

    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({
        className: this._getClassNames(className, show)
      }, (0, _automationIdUtils.getDataAutomationIdPair)(dataAutomationId, "")),
      this._renderColumns(departments, columnClassName),
      _react2.default.createElement(
        "div",
        { className: columnClassName },
        this._renderImage(link, show, this.state.imageLoaded)
      )
    );
  };

  return LefthandNavPanel;
}(_react.Component);

LefthandNavPanel.displayName = "LefthandNavPanel";

LefthandNavPanel.propTypes = {
  /**
  Super department data.
  */
  superDept: _react.PropTypes.shape({
    link: _react.PropTypes.object.isRequired,
    departments: _react.PropTypes.array.isRequired
  }),
  /**
  Toggle to show component.
  */
  show: _react.PropTypes.bool,
  /**
  Additional classes for styling.
  */
  className: _react.PropTypes.string,
  /**
  Automation ID base string
  */
  dataAutomationId: _react.PropTypes.string
};

LefthandNavPanel.defaultProps = {
  show: false,
  className: "",
  dataAutomationId: "header-GlobalLeftHandNav-panel"
};

exports.default = LefthandNavPanel;