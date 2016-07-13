/* @flow */
import React, { PropTypes, Component } from "react";
import classNames from "classnames";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import Link from "@walmart/wmreact-base/lib/components/link";
import Button from "@walmart/wmreact-interactive/lib/components/button";

import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";
import generateMemberServicesNavUids from "../utils/msn-uid-swap";


const MAIN_CLASS_NAME = "header-GlobalLefthandNavMobile";
const ENTRY_CLASS_NAME = "header-OffcanvasNav-entry";

class MemberServicesNavMobile extends Component {
  constructor(props: Object): void {
    super(props);

    this.state = {
      menuLinks: null,
      expanded: false, // render departments initially only for bots
      link: null,
      renderLinks: true,
      selected: false
    };

    this._toggleExpanded = this._toggleExpanded.bind(this);
    this._clearLinks = this._clearLinks.bind(this);

  }

  _getClassNames(className: string, { expanded, menuLinks, link }): string {
    return classNames(MAIN_CLASS_NAME, className, {
      "is-collapsed": menuLinks === null && !expanded,
      [`${MAIN_CLASS_NAME}--menuLinksSelected`]: menuLinks !== null,
      [`${MAIN_CLASS_NAME}--linkSelected`]: link !== null
    });
  }

  _getEntryClassName(depth: number, index: ?number, selected: ?number): string {
    return classNames(ENTRY_CLASS_NAME, {
      [`${MAIN_CLASS_NAME}-menuLinksSelected`]: depth === 0,
      [`${MAIN_CLASS_NAME}-linkSelected`]: depth === 1,
      "is-selected": index !== null && index === selected
    });
  }

  _getButtonClassName(depth: number): string {
    return classNames("header-OffcanvasNav-entry-gray", {
      [`${MAIN_CLASS_NAME}-superDept-account`]: depth === 0,
      "is-selected": this.state.selected
    });
  }


  _setLink(index: number): void {
    if (this.state.link === null) {
      this.setState({
        link: index
      });
    }
  }

  _toggleExpanded(): void {
    this.props.onMenuLinkClick();
    this.setState({
      expanded: !this.state.expanded,
      renderLinks: !this.state.renderLinks,
      selected: true
    });
  }
  _clearLinks(): void {
    this.setState({ expanded: !this.state.expanded,
                    renderLinks: !this.state.renderLinks,
                    selected: false},
                    () => {this.props.onMenuLinkClick(); });
  }

  _renderLinks(link: Object, { depth, index }): ReactElement {
    const {uid, title, linkText, clickThrough: {value}} = link;
    return (

      <Link
        key={index}
        className={this._getEntryClassName(depth, null, null)}
        data-uid={uid}
        alt={title}
        href={value}
      >
      {linkText}
      </Link>

    );
  }

  _renderMenuLinks(menuLinks: Array<Object>): Array<ReactElement> {
    const { expanded } = this.state;
    if (expanded) {
      return menuLinks.map((link, index) => {
        return (
          <div key={index}>
          {this._renderLinks(link.link, {depth: 2, index})}
          </div>
        );

      });
    }
  }

  _renderAllMenuLinks(menuLinks: Array<Object>, {renderLinks}): Array<ReactElement> {
    const index = 1;
    return (
      <div key={index}>
        {this._renderBack(this.state)}
        <Button
          fakelink={true}
          onClick={this._toggleExpanded}
          className={this._getButtonClassName(0, index, menuLinks)}>
          {"Member Services"}
          {renderLinks &&
            <Icon className="pull-right" name="angle-right" />}
        </Button>
        {this._renderMenuLinks(menuLinks)}
      </div>
      );
  }

  _renderBack(): ?ReactElement {
    if (this.state.expanded === true) {
      return (
        <Button
          className={`${ENTRY_CLASS_NAME} ${ENTRY_CLASS_NAME}--top`}
          fakelink={true}
          onClick={this._clearLinks}>
          <Icon className="pull-left" name="angle-left" />Back to main menu
        </Button>
      );
    }
    return null;
  }

  render(): ReactElement {
    const {
          moduleData: {
            type, moduleId, configs
          },
          className
        } = this.props;
    const {
          menuLinks
        } = generateMemberServicesNavUids(configs);

    return (
      <CollectorContext moduleId={moduleId}>
        <div
          className={this._getClassNames(className, this.state)}
          data-module={type}
          data-module-id={moduleId}>
          <div className={`${MAIN_CLASS_NAME}-menuLinks`}>
          {this._renderAllMenuLinks(menuLinks, this.state)}
          </div>
          </div>
          </CollectorContext>
        );
  }
}

MemberServicesNavMobile.displayName = "MemberServicesNavMobile";

MemberServicesNavMobile.propTypes = {
  /**
  Data for configuring the component. Typically coming from Tempo. Contains department data.
  */
  moduleData: PropTypes.shape({
    type: PropTypes.string,
    moduleId: PropTypes.string,
    configs: PropTypes.shape({
      menuLinks: PropTypes.array.isRequired
    }).isRequired
  }).isRequired,
  /**
  Callback to execute after a super department is clicked
  */
  onMenuLinkClick: PropTypes.func,
  /**
  Callback to execute after back button is clicked
  */
  onBackClick: PropTypes.func,
  /**
  Any additional classes for styling.
  */
  className: PropTypes.string,
  /**
  Automation ID base string
  */
  dataAutomationId: PropTypes.string,
  /**
  Check for web crawler bots.
  */
  isBot: PropTypes.bool
};

MemberServicesNavMobile.defaultProps = {
  moduleData: {
    type: "",
    moduleId: "",
    configs: {}
  },
  onMenuLinkClick: () => {},
  onBackClick: () => {},
  className: "",
  dataAutomationId: "header-MemberServicesNavMobile",
  isBot: false
};

MemberServicesNavMobile.contextTypes = {
  analytics: PropTypes.object
};

export default MemberServicesNavMobile;
