/*
 eslint-disable
*/
/* @flow */
import React, { PropTypes, Component } from "react";
import classNames from "classnames";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import Link from "@walmart/wmreact-base/lib/components/link";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Separator from "@walmart/wmreact-containers/lib/components/separator";
import CollectorContext from "@walmart/wmreact-analytics/lib/backplane/collector-context";

const MAIN_CLASS_NAME = "header-GlobalLefthandNavMobile";
const ENTRY_CLASS_NAME = "header-OffcanvasNav-entry";

class GlobalAccountNavMobile extends Component {
  constructor(props: Object): void {
    super(props);
    this.state = {
      expanded: false,
      renderLinks: true,
      selected: false

    };
    this._toggleExpanded = this._toggleExpanded.bind(this);
    this._clearLinks = this._clearLinks.bind(this);
  }

  _getClassNames(className: string): string {
    return classNames(MAIN_CLASS_NAME, className);
  }

  _getEntryClassName(depth: number, index: ?number, selected: ?number): string {
    return classNames(ENTRY_CLASS_NAME, {
      [`${MAIN_CLASS_NAME}-superDept`]: depth === 0,
      "is-selected": index !== null && index === selected
    });
  }

  _getButtonClassName(depth: number): string {
    return classNames("header-OffcanvasNav-entry-gray", {
      [`${MAIN_CLASS_NAME}-superDept-account`]: depth === 0,
      "is-selected": this.state.selected
    });
  }

  _clearLinks(): void {
    this.setState({
      expanded: !this.state.expanded,
      renderLinks: !this.state.renderLinks,
      selected: false
    }, () => {
      this.props.onAccountLinkClick();
    });
  }

  _toggleExpanded(): void {
    this.props.onAccountLinkClick();
    this.setState({
      expanded: !this.state.expanded,
      renderLinks: !this.state.renderLinks,
      selected: !this.state.selected
    });
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
  }

  _renderLink(link: Object, { depth, index }): ReactElement {
    const {title, clickThrough: {value}} = link;
    return (
      <Link
        key={index}
        className={this._getEntryClassName(depth, 0, 0)}
        alt={title}
        href={value}>
        {title}
      </Link>
    );
  }

  _renderMenuItems(section: Array<Object>): Array<ReactElement> {
    if (this.state.expanded === true) {
      return section.map((sectionItem, index) => {
        return (
          <div key={index}>
          {this._renderLink(sectionItem.menu, {depth: 0, index})}
          </div>
        );
      });
    }
  }

  _renderSeperator(): Array<ReactElement> {
    if (this.state.expanded === true) {
      return (
        <Separator/>
      );
    }
  }

  render(): ReactElement {
    const {
      moduleData: {
        type,
        moduleId,
        configs: {
          sectionOne,
          sectionTwo,
          sectionThree
        }
      },
      className
    } = this.props;
    const {renderLinks, expanded} = this.state;
    return (
      <CollectorContext moduleId={moduleId}>
        <div
          className={this._getClassNames(className)}
          data-module={type}
          data-module-id={moduleId}>
          <div>
            {this._renderBack(this.state)}
            <Button
              fakelink={true}
              onClick={this._toggleExpanded}
              className={this._getButtonClassName(0)}>
              Your Account
              {renderLinks &&
                <Icon className="pull-right" name="angle-right" />}
            </Button>
            {this._renderMenuItems(sectionOne)}
            {this._renderSeperator(expanded)}
            {this._renderMenuItems(sectionTwo)}
            {this._renderSeperator(expanded)}
            {this._renderMenuItems(sectionThree)}
          </div>
        </div>
      </CollectorContext>
      );
  }
}

GlobalAccountNavMobile.displayName = "GlobalAccountNavMobile";

GlobalAccountNavMobile.propTypes = {
  moduleData: PropTypes.shape({
    type: PropTypes.string,
    moduleId: PropTypes.string,
    configs: PropTypes.shape({
      sectionOne: PropTypes.array,
      sectionTwo: PropTypes.array,
      sectionThree: PropTypes.array
    }).isRequired
  }).isRequired,
  onAccountLinkClick: PropTypes.func,
  onBackClick: PropTypes.func,
  className: PropTypes.string
};

GlobalAccountNavMobile.defaultProps = {
  moduleData: {
    type: "",
    moduleId: "",
    configs: {
      sectionOne: [],
      sectionTwo: [],
      sectionThree: []
    }
  },
  onAccountLinkClick: () => {},
  onBackClick: () => {},
  className: ""
};

GlobalAccountNavMobile.contextTypes = {
  analytics: PropTypes.object
};

export default GlobalAccountNavMobile;
