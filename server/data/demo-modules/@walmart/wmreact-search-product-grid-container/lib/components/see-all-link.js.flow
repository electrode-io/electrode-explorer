import React from "react";

export default class SeeAllLink extends React.Component {
  render(): ReactElement {
    const {seeAllFacetLink, seeAllFacet} = this.props;
    return (
      <div className="see-all-link">
        <a className="link" href={"?" + seeAllFacetLink}
          onClick={() => this.props.onClickLink("seeAll")}>
          Show only {seeAllFacet} items
        </a>
      </div>
    );
  }
}

SeeAllLink.displayName = "SeeAllLink";
SeeAllLink.propTypes = {
  /**
  See all facet link name
  */
  seeAllFacet: React.PropTypes.string,
  /**
  See all facet link
  */
  seeAllFacetLink: React.PropTypes.string,
  /**
  Action triggered when clicking on the see all link
  */
  onClickLink: React.PropTypes.string
};

SeeAllLink.defaultProps = {
  seeAllFacet: "",
  seeAllFacetLink: "",
  onClickLink() {}
};

export default SeeAllLink;
