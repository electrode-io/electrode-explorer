import React, { PropTypes, Component } from "react";

import Layout from "@walmart/wmreact-layout/lib/components/layout";
import Link from "@walmart/wmreact-base/lib/components/link";

export default class RelatedSearch extends Component {
  _handleClick(suggestedUrl, event) {
    event.preventDefault();
    this.props.onClick(suggestedUrl);
  }

  render() {
    return this.props.relatedQueries.length ? (
      <section className="related-search-container">
        <h1 className="heading-f related-search-title">Related Searches</h1>
        <Layout x-small={4} padded={true}>
          {this.props.relatedQueries.map(
            (query, index) => (
              <Link
                className="related-search-link"
                onClick={(event) => this._handleClick(query.searchQuery, event)}
                key={index}>
                {query.searchText}
              </Link>
            )
          )}
        </Layout>
      </section>
    ) : null;
  }
}

RelatedSearch.displayName = "RelatedSearch";

RelatedSearch.propTypes = {
  relatedQueries: PropTypes.arrayOf(
    PropTypes.shape({
      searchText: PropTypes.string.isRequired,
      searchQuery: PropTypes.object.isRequired
    })
  ),
  onClick: PropTypes.func
};

RelatedSearch.defaultProps = {
  relatedQueries: [],
  onClick() {}
};
