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

var _miniStoryTile = require("./mini-story-tile");

var _miniStoryTile2 = _interopRequireDefault(_miniStoryTile);

var _categoryUtils = require("@walmart/category-utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*eslint-disable max-len */
/**
Ministory Banner Spotlights module
@examples
```jsx
<MinistoryStackable
  rows={[
    {
      "spots": [
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        }
      ]
    },
    {
      "spots": [
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        }
      ]
    },
    {
      "spots": [
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        }
      ]
    }
  ]}
/>

<MinistoryStackable
  rows={[
    {
      "spots": [
        {
          "uid": "OLfWjrVU",
          "assetId": "3737852",
          "url": "http://www.walmart.com/cp/1071204",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-c85c/k2-_9b690929-ae0a-43ea-b465-63be19463ce9.v1.jpg",
          "width": 878,
          "alt": "BTS"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        }
      ]
    },
    {
      "spots": [
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "OLfWjrVU",
          "assetId": "3737852",
          "url": "http://www.walmart.com/cp/1071204",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-c85c/k2-_9b690929-ae0a-43ea-b465-63be19463ce9.v1.jpg",
          "width": 878,
          "alt": "BTS"
        }
      ]
    }
  ]}
/>
```
@component MinistoryStackable
@import {MinistoryStackable}
@playground
```

<MinistoryStackable
  rows={[
    {
      "spots": [
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        }
      ]
    },
    {
      "spots": [
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        }
      ]
    },
    {
      "spots": [
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        }
      ]
    }
  ]}
/>

<MinistoryStackable
  rows={[
    {
      "spots": [
        {
          "uid": "OLfWjrVU",
          "assetId": "3737852",
          "url": "http://www.walmart.com/cp/1071204",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-c85c/k2-_9b690929-ae0a-43ea-b465-63be19463ce9.v1.jpg",
          "width": 878,
          "alt": "BTS"
        },
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        }
      ]
    },
    {
      "spots": [
        {
          "uid": "JC7k1RuY",
          "assetId": "3201753",
          "url": "http://www.walmart.com/browse/windows-10-qualified-upgrade-shelf/0/0/?_refineresult=true&_be_shelf_id=2650&search_sort=100&facet=shelf_id:2650",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-90cb/k2-_fd8cc893-3a3d-4004-9b6e-a6b79173eafd.v1.jpg",
          "width": 433,
          "alt": "Windows 10"
        },
        {
          "uid": "OLfWjrVU",
          "assetId": "3737852",
          "url": "http://www.walmart.com/cp/1071204",
          "imageUrl": "http://ll-us-i5.wal.co/dfw/4ff9c6c9-c85c/k2-_9b690929-ae0a-43ea-b465-63be19463ce9.v1.jpg",
          "width": 878,
          "alt": "BTS"
        }
      ]
    }
  ]}
/>
```
*/
/*eslint-enable max-len */

var MinistoryStackable = function (_Component) {
  (0, _inherits3.default)(MinistoryStackable, _Component);

  function MinistoryStackable() {
    (0, _classCallCheck3.default)(this, MinistoryStackable);
    return (0, _possibleConstructorReturn3.default)(this, _Component.apply(this, arguments));
  }

  MinistoryStackable.prototype._getSpots = function _getSpots() {
    var _this2 = this;

    var _props = this.props;
    var rows = _props.rows;
    var isMobile = _props.isMobile;

    var lastRowIndex = rows.length - 1;

    return rows.map(function (row, rowIndex) {
      var isLastRow = rowIndex === lastRowIndex;
      var lastSpotIndex = row.spots.length - 1;

      return row.spots.map(function (spot, spotIndex) {
        var isLastSpot = spotIndex === lastSpotIndex;
        var isSpotHiddenEligible = isLastRow && isLastSpot && rowIndex % 2 === 0;
        return _react2.default.createElement(_miniStoryTile2.default, (0, _extends3.default)({}, spot, {
          isMobile: isMobile,
          isHidden: isSpotHiddenEligible,
          __self: _this2
        }));
      });
    });
  };

  MinistoryStackable.prototype.render = function render() {
    return _react2.default.createElement(
      "div",
      (0, _extends3.default)({ className: "ResponsiveContainer ministory-stackable"
      }, (0, _categoryUtils.getTempoModuleAutomationId)(this.props.moduleType, process), {
        __self: this
      }),
      _react2.default.createElement(
        "div",
        { className: "Grid mini-story-gutters Grid--gutters", __self: this
        },
        this._getSpots()
      )
    );
  };

  return MinistoryStackable;
}(_react.Component);

exports.default = MinistoryStackable;


MinistoryStackable.propTypes = {
  /**
  To add proper torbit params (width and height)
  */
  isMobile: _react.PropTypes.bool,
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: _react.PropTypes.string,
  /**
  spotlight Configuration rows
  */
  rows: _react.PropTypes.array.isRequired
};

MinistoryStackable.defaultProps = {
  isMobile: true,
  moduleType: _categoryUtils.moduleTypes.MINI_STORY
};