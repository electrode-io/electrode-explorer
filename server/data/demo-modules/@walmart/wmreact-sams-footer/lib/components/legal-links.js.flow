import React, {Component, PropTypes} from "react";

class LegalLinks extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const legalLinks = this.props.moduleData.configs.legalLinks;
    return (
      <div className="legal-links">
        <div className="links-divider hide-content-l"></div>
        <ul className="legal-link-list">
          {legalLinks.map((item) => {
            return (
              <li key={item.link.uid} className="legal-link-item">
                <a href={item.link.clickThrough.value}>{item.link.linkText}</a>
              </li>
            );
          })}
        </ul>
        <div className="links-divider hide-content-l"></div>
      </div>
    );
  }
}

LegalLinks.propTypes = {
  moduleData: PropTypes.shape({
    type: PropTypes.string,
    moduleId: PropTypes.string,
    configs: PropTypes.shape({
      legalLinks: PropTypes.array
    }).isRequired
  }).isRequired
};

export default LegalLinks;
