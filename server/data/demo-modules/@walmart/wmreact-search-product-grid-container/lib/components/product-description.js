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

var _classnames = require("classnames");

var _classnames2 = _interopRequireDefault(_classnames);

var _underscore = require("underscore");

var _underscore2 = _interopRequireDefault(_underscore);

var _wmreactProductTypography = require("@walmart/wmreact-product-typography");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProductDescription = function (_React$Component) {
  (0, _inherits3.default)(ProductDescription, _React$Component);

  function ProductDescription() {
    (0, _classCallCheck3.default)(this, ProductDescription);
    return (0, _possibleConstructorReturn3.default)(this, _React$Component.apply(this, arguments));
  }

  ProductDescription.prototype._renderMediaDetails = function _renderMediaDetails(mediaFormat) {
    return _react2.default.createElement(
      "div",
      { className: "format" },
      _react2.default.createElement(
        "dt",
        { className: "media-details-format" },
        "Format:"
      ),
      _react2.default.createElement(
        "dd",
        { className: "media-details-multi-line" },
        mediaFormat
      )
    );
  };

  ProductDescription.prototype._renderAuthorList = function _renderAuthorList(authorList) {
    return _react2.default.createElement(
      "div",
      { className: "author" },
      _react2.default.createElement(
        "dt",
        { className: "media-details-author" },
        "Authors:"
      ),
      _react2.default.createElement(
        "dd",
        { className: "media-details-multi-line media-details-author-dd" },
        _react2.default.createElement(
          "ul",
          null,
          authorList
        )
      )
    );
  };

  ProductDescription.prototype._renderIsbn10Info = function _renderIsbn10Info(isbn10) {
    return _react2.default.createElement(
      "div",
      { className: "isbn10" },
      _react2.default.createElement(
        "dt",
        { className: "media-details-isbn10" },
        "ISBN10:"
      ),
      _react2.default.createElement(
        "dd",
        null,
        isbn10
      )
    );
  };

  ProductDescription.prototype._renderIsbnInfo = function _renderIsbnInfo(isbn) {
    return _react2.default.createElement(
      "div",
      { className: "isbn" },
      _react2.default.createElement(
        "dt",
        { className: "media-details-isbn" },
        "ISBN:"
      ),
      _react2.default.createElement(
        "dd",
        null,
        isbn
      )
    );
  };

  ProductDescription.prototype._renderBookDescription = function _renderBookDescription(item, description) {
    var formatJsx = null;
    var authorJsx = null;
    var ISBN10Jsx = null;
    var ISBNJsx = null;
    var authorList = [];

    _underscore2.default.each(item.authors, function (val, index) {
      authorList.push(_react2.default.createElement(
        "li",
        { key: index },
        val
      ));
    }, this);

    if (item.mediaFormat) {
      formatJsx = this._renderMediaDetails(item.mediaFormat);
    }

    if (item.authors) {
      authorJsx = this._renderAuthorList(authorList);
    }

    if (item.isbn10) {
      ISBN10Jsx = this._renderIsbn10Info(item.isbn10);
    }

    if (item.isbn) {
      ISBNJsx = this._renderIsbnInfo(item.isbn);
    }

    return _react2.default.createElement(
      "div",
      { className: "description-text" },
      _react2.default.createElement(
        "dl",
        { className: "media-details dl-horizontal copy-mini" },
        formatJsx,
        authorJsx,
        ISBN10Jsx,
        ISBNJsx
      ),
      _react2.default.createElement("div", { className: "additional-text", dangerouslySetInnerHTML: { __html: description } })
    );
  };

  ProductDescription.prototype._renderDirectorList = function _renderDirectorList(directors) {
    var directorList = [];
    _underscore2.default.each(directors, function (val, index) {
      directorList.push(_react2.default.createElement(
        "li",
        { key: index },
        val
      ));
    }, this);
    return _react2.default.createElement(
      "div",
      { className: "director" },
      _react2.default.createElement(
        "dt",
        { className: "media-details-director" },
        "Director:"
      ),
      _react2.default.createElement(
        "dd",
        { className: "media-details-multi-line media-details-director-dd" },
        _react2.default.createElement(
          "ul",
          null,
          directorList
        )
      )
    );
  };

  ProductDescription.prototype._renderActorList = function _renderActorList(actors) {
    var actorList = [];
    _underscore2.default.each(actors, function (val, index) {
      actorList.push(_react2.default.createElement(
        "li",
        { key: index },
        val
      ));
    }, this);
    return _react2.default.createElement(
      "div",
      { className: "actor" },
      _react2.default.createElement(
        "dt",
        { className: "media-details-starring" },
        "Starring:"
      ),
      _react2.default.createElement(
        "dd",
        { className: "media-details-multi-line media-details-artist-dd module" },
        _react2.default.createElement(
          "ul",
          null,
          actorList
        )
      )
    );
  };

  ProductDescription.prototype._renderMediaRunningTime = function _renderMediaRunningTime(runningTime) {
    var mediaRunningTime = null;
    if (parseInt(runningTime) === 1) {
      mediaRunningTime = "1 minute";
    } else {
      mediaRunningTime = parseInt(runningTime) + " minutes";
    }
    return _react2.default.createElement(
      "div",
      { className: "running-time" },
      _react2.default.createElement(
        "dt",
        { className: "media-details-running-time" },
        "Running:"
      ),
      _react2.default.createElement(
        "dd",
        null,
        mediaRunningTime
      )
    );
  };

  ProductDescription.prototype._renderMediaFormat = function _renderMediaFormat(mediaFormat) {
    return _react2.default.createElement(
      "div",
      { className: "format" },
      _react2.default.createElement(
        "dt",
        { className: "media-details-format" },
        "Format:"
      ),
      _react2.default.createElement(
        "dd",
        { className: "media-details-multi-line" },
        mediaFormat
      )
    );
  };

  ProductDescription.prototype._renderLaunchDate = function _renderLaunchDate(launchDate) {
    return _react2.default.createElement(
      "div",
      { className: "release-date" },
      _react2.default.createElement(
        "dt",
        { className: "media-details-release-date" },
        "Release:"
      ),
      _react2.default.createElement(
        "dd",
        null,
        launchDate
      )
    );
  };

  ProductDescription.prototype._renderMediaRating = function _renderMediaRating(mediaRating) {
    return _react2.default.createElement(
      "div",
      { className: "rating" },
      _react2.default.createElement(
        "dt",
        { className: "media-details-rating" },
        "Rating:"
      ),
      _react2.default.createElement(
        "dd",
        null,
        mediaRating
      )
    );
  };

  ProductDescription.prototype._renderMovieDescription = function _renderMovieDescription(item) {
    return _react2.default.createElement(
      "div",
      { className: "description-text" },
      _react2.default.createElement(
        "dl",
        { className: "media-details dl-horizontal copy-mini" },
        item.directors ? this._renderDirectorList(item.directors) : null,
        item.actors ? this._renderActorList(item.actors) : null,
        item.mediaRunningTime ? this._renderMediaRunningTime(item.mediaRunningTime) : null,
        item.mediaFormat ? this._renderMediaFormat(item.mediaFormat) : null,
        item.launchDate ? this._renderLaunchDate(item.launchDate) : null,
        item.mediaRating ? this._renderMediaRating(item.mediaRating) : null
      )
    );
  };

  ProductDescription.prototype._renderMusicDescription = function _renderMusicDescription(item, description) {
    var artistJsx = null;
    var releaseDateJsx = null;

    if (item.artistName) {
      artistJsx = _react2.default.createElement(
        "div",
        { className: "artist" },
        _react2.default.createElement(
          "dt",
          { className: "media-details-artist" },
          "Artist:"
        ),
        _react2.default.createElement(
          "dd",
          null,
          item.artistName
        )
      );
    }

    if (item.launchDate) {
      releaseDateJsx = _react2.default.createElement(
        "div",
        { className: "release-date" },
        _react2.default.createElement(
          "dt",
          { className: "media-details-release-date" },
          "Release:"
        ),
        _react2.default.createElement(
          "dd",
          null,
          item.launchDate
        )
      );
    }

    return _react2.default.createElement(
      "div",
      { className: "description-text" },
      _react2.default.createElement(
        "dl",
        { className: "media-details dl-horizontal copy-mini" },
        artistJsx,
        releaseDateJsx
      ),
      _react2.default.createElement("div", { className: "additional-text", dangerouslySetInnerHTML: { __html: description } })
    );
  };

  ProductDescription.prototype._renderVideoGamesDescription = function _renderVideoGamesDescription(item, description) {
    var consoleJsx = null;
    var releaseDateJsx = null;

    if (item.consoleKstem) {
      consoleJsx = _react2.default.createElement(
        "div",
        { className: "console" },
        _react2.default.createElement(
          "dt",
          { className: "media-details-console" },
          "Console:"
        ),
        _react2.default.createElement(
          "dd",
          null,
          item.consoleKstem
        )
      );
    }

    if (item.launchDate) {
      releaseDateJsx = _react2.default.createElement(
        "div",
        { className: "release-date" },
        _react2.default.createElement(
          "dt",
          { className: "media-details-release-date" },
          "Release:"
        ),
        _react2.default.createElement(
          "dd",
          null,
          item.launchDate
        )
      );
    }

    return _react2.default.createElement(
      "div",
      { className: "description-text" },
      _react2.default.createElement(
        "dl",
        { className: "media-details dl-horizontal copy-mini" },
        consoleJsx,
        releaseDateJsx
      ),
      _react2.default.createElement("div", { className: "additional-text", dangerouslySetInnerHTML: { __html: description } })
    );
  };

  ProductDescription.prototype.render = function render() {
    var _props = this.props;
    var item = _props.item;
    var description = _props.description;
    var department = _props.department;

    var classes = (0, _classnames2.default)("search-result-product-description");
    if (_underscore2.default.isEmpty(description)) {
      return null;
    }
    if (department === "Books") {
      return this._renderBookDescription(item, description);
    } else if (department === "Movies & TV") {
      return this._renderMovieDescription(item, description);
    } else if (department === "Music") {
      return this._renderMusicDescription(item, description);
    } else if (department === "Video Games") {
      return this._renderVideoGamesDescription(item, description);
    } else {
      return _react2.default.createElement(
        "div",
        { className: classes },
        _react2.default.createElement(_wmreactProductTypography.ProductShortDescription, {
          content: description,
          removeMoreInfoLabel: true })
      );
    }
  };

  return ProductDescription;
}(_react2.default.Component);

exports.default = ProductDescription;


ProductDescription.displayName = "ProductDescription";
ProductDescription.propTypes = {
  /**
  Item Info
  */
  "item": _react2.default.PropTypes.object,
  /**
  Additional Class Name
  */
  "className": _react2.default.PropTypes.string,
  /**
  Product description content
  */
  "description": _react2.default.PropTypes.string,
  /**
  Department Name
  */
  "department": _react2.default.PropTypes.string
};

ProductDescription.defaultProps = {
  "item": {},
  "description": "",
  "department": ""
};

exports.default = ProductDescription;