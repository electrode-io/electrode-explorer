import React, {Component, PropTypes} from "react";
import Flyout from "@walmart/wmreact-containers/lib/components/flyout";
import Link from "@walmart/wmreact-base/lib/components/link";
import classNames from "classnames";
//import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";

class MemberServicesNav extends Component {
  constructor(props) {
    super(props);
  }

  _getClassNames(className: string, dropdown: boolean): string {
    return classNames("header-GlobalAccountFlyout-link", className, {
      "dropdown-link": dropdown
    });
  }

  _renderLink({link, dropdown}, id: string, className: string): ReactElement {
    const{
      uid,
      title,
      linkText,
      clickThrough: { value }
    } = link;
    return (

        <Link
          className={this._getClassNames(className, dropdown)}
          data-uid={uid}
          href={value}
          alt={title}
          key={uid}>
          {linkText}
        </Link>

    );
  }

  _renderFlyoutLink(linkDetails: Object, index: number): ReactElement {
    const linkId = `flyout-link-${index}`;
    const {
      link
    } = linkDetails;
    const linkClass = "display-block";
    return (
      <div key={index}>
      {this._renderLink({link, dropdown: false}, linkId, linkClass)}
      </div>
    );
  }

  render() {
    return (
      <div className="header-member-services-nav" >
        <Flyout className="flyout-trigger dropdown-link"
          triggerText={this.props.moduleData.name} direction="bottom"
          hover={true} size="narrow">
          {this.props.moduleData.configs.menuLinks.map((link, index) =>
            this._renderFlyoutLink(link, index))
          }
        </Flyout>
      </div>
    );
  }
}

MemberServicesNav.displayName = "MemberServicesNav";
MemberServicesNav.propTypes = {
  moduleData: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    moduleId: PropTypes.string,
    configs: PropTypes.shape({
      menuLinks: PropTypes.array.isRequired
    }).isRequired
  }).isRequired,
  className: PropTypes.string
};
MemberServicesNav.defaultProps = {
  moduleData: {
    name: "",
    type: "",
    moduleId: "",
    configs: {}
  },
  className: ""
};
MemberServicesNav.displayName = "MemberServicesNav";
export default MemberServicesNav;
