import React from "react";
import classNames from "classnames";
import _ from "underscore";
import { ProductShortDescription } from "@walmart/wmreact-product-typography";

export default class ProductDescription extends React.Component {

  _renderMediaDetails(mediaFormat): ReactElement {
    return (
      <div className="format">
        <dt className="media-details-format">Format:</dt>
        <dd className="media-details-multi-line">
          {mediaFormat}
        </dd>
      </div>
    );
  }

  _renderAuthorList(authorList): ReactElement {
    return (
      <div className="author">
        <dt className="media-details-author">Authors:</dt>
        <dd className="media-details-multi-line media-details-author-dd">
          <ul>
            {authorList}
          </ul>
        </dd>
      </div>
    );
  }

  _renderIsbn10Info(isbn10): ReactElement {
    return (
      <div className="isbn10">
        <dt className="media-details-isbn10">ISBN10:</dt>
        <dd>{isbn10}</dd>
      </div>
    );
  }

  _renderIsbnInfo(isbn): ReactElement {
    return (
      <div className="isbn">
        <dt className="media-details-isbn">ISBN:</dt>
        <dd>{isbn}</dd>
      </div>
    );
  }

  _renderBookDescription(item, description): ReactElement {
    let formatJsx = null;
    let authorJsx = null;
    let ISBN10Jsx = null;
    let ISBNJsx = null;
    const authorList = [];

    _.each(item.authors, function (val, index) {
      authorList.push(
        <li key={index}>
          {val}
        </li>
      );
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

    return (
      <div className="description-text">
        <dl className="media-details dl-horizontal copy-mini">
          {formatJsx}
          {authorJsx}
          {ISBN10Jsx}
          {ISBNJsx}
        </dl>
        <div className="additional-text" dangerouslySetInnerHTML={{__html: description}} />
      </div>
    );
  }

  _renderDirectorList(directors): ReactElement {
    const directorList = [];
    _.each(directors, function (val, index) {
      directorList.push(
        <li key={index}>
          {val}
        </li>
      );
    }, this);
    return (
      <div className="director">
        <dt className="media-details-director">Director:</dt>
        <dd className="media-details-multi-line media-details-director-dd">
          <ul>
            {directorList}
          </ul>
        </dd>
      </div>
    );
  }

  _renderActorList(actors): ReactElement {
    const actorList = [];
    _.each(actors, function (val, index) {
      actorList.push(
        <li key={index}>
          {val}
        </li>
      );
    }, this);
    return (
      <div className="actor">
        <dt className="media-details-starring">Starring:</dt>
        <dd className="media-details-multi-line media-details-artist-dd module">
          <ul>
            {actorList}
          </ul>
        </dd>
      </div>
    );
  }

  _renderMediaRunningTime(runningTime): ReactElement {
    let mediaRunningTime = null;
    if (parseInt(runningTime) === 1) {
      mediaRunningTime = "1 minute";
    } else {
      mediaRunningTime = parseInt(runningTime) + " minutes";
    }
    return (
      <div className="running-time">
        <dt className="media-details-running-time">Running:</dt>
        <dd>{mediaRunningTime}</dd>
      </div>
    );
  }


  _renderMediaFormat(mediaFormat): ReactElement {
    return (
      <div className="format">
        <dt className="media-details-format">Format:</dt>
        <dd className="media-details-multi-line">
          {mediaFormat}
        </dd>
      </div>
    );
  }

  _renderLaunchDate(launchDate): ReactElement {
    return (
      <div className="release-date">
        <dt className="media-details-release-date">Release:</dt>
        <dd>{launchDate}</dd>
      </div>
    );
  }

  _renderMediaRating(mediaRating): ReactElement {
    return (
      <div className="rating">
        <dt className="media-details-rating">Rating:</dt>
        <dd>{mediaRating}</dd>
      </div>
    );
  }

  _renderMovieDescription(item): ReactElement {
    return (
      <div className="description-text">
        <dl className="media-details dl-horizontal copy-mini">
          {item.directors ? this._renderDirectorList(item.directors) : null }
          {item.actors ? this._renderActorList(item.actors) : null }
          {item.mediaRunningTime ? this._renderMediaRunningTime(item.mediaRunningTime) : null }
          {item.mediaFormat ? this._renderMediaFormat(item.mediaFormat) : null }
          {item.launchDate ? this._renderLaunchDate(item.launchDate) : null }
          {item.mediaRating ? this._renderMediaRating(item.mediaRating) : null}
        </dl>
      </div>
    );
  }

  _renderMusicDescription(item, description): ReactElement {
    let artistJsx = null;
    let releaseDateJsx = null;

    if (item.artistName) {
      artistJsx = (
        <div className="artist">
          <dt className="media-details-artist">Artist:</dt>
          <dd>{item.artistName}</dd>
        </div>
      );
    }

    if (item.launchDate) {
      releaseDateJsx = (
        <div className="release-date">
          <dt className="media-details-release-date">Release:</dt>
          <dd>{item.launchDate}</dd>
        </div>
      );
    }

    return (
      <div className="description-text">
        <dl className="media-details dl-horizontal copy-mini">
          {artistJsx}
          {releaseDateJsx}
        </dl>
        <div className="additional-text" dangerouslySetInnerHTML={{__html: description}} />
      </div>
    );
  }

  _renderVideoGamesDescription(item, description): ReactElement {
    let consoleJsx = null;
    let releaseDateJsx = null;

    if (item.consoleKstem) {
      consoleJsx = (
        <div className="console">
          <dt className="media-details-console">Console:</dt>
          <dd>{item.consoleKstem}</dd>
        </div>
      );
    }

    if (item.launchDate) {
      releaseDateJsx = (
        <div className="release-date">
          <dt className="media-details-release-date">Release:</dt>
          <dd>{item.launchDate}</dd>
        </div>
      );
    }

    return (
      <div className="description-text">
        <dl className="media-details dl-horizontal copy-mini">
          {consoleJsx}
          {releaseDateJsx}
        </dl>
        <div className="additional-text" dangerouslySetInnerHTML={{__html: description}} />
      </div>
    );
  }

  render(): ReactElement {
    const {item, description, department} = this.props;
    const classes = classNames(
      "search-result-product-description"
    );
    if (_.isEmpty(description)) {return null;}
    if (department === "Books") {
      return this._renderBookDescription(item, description);
    } else if (department === "Movies & TV") {
      return this._renderMovieDescription(item, description);
    } else if (department === "Music") {
      return this._renderMusicDescription(item, description);
    } else if (department === "Video Games") {
      return this._renderVideoGamesDescription(item, description);
    } else {
      return (
        <div className={classes}>
          <ProductShortDescription
            content={description}
            removeMoreInfoLabel={true} />
        </div>
      );
    }
  }
}

ProductDescription.displayName = "ProductDescription";
ProductDescription.propTypes = {
  /**
  Item Info
  */
  "item": React.PropTypes.object,
  /**
  Additional Class Name
  */
  "className": React.PropTypes.string,
  /**
  Product description content
  */
  "description": React.PropTypes.string,
  /**
  Department Name
  */
  "department": React.PropTypes.string
};

ProductDescription.defaultProps = {
  "item": {},
  "description": "",
  "department": ""
};

export default ProductDescription;
