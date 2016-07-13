import React, { Component } from "react";
import ReactDOM from "react-dom";
import Link from "@walmart/wmreact-base/lib/components/link";
import stickyNavRow from "./sticky-nav-row";

import Fixie from "@walmart/wmreact-layout/lib/components/fixie";
import clientWidth from "@walmart/wmreact-layout/lib/components/helpers/client-width";

import classNames from "classnames";

/**
Basic Structure for Sticky Nav
<div>
  <StickyNav selected={0} minScreen="large">
    <StickNav.Row title="Foo" link="foo">content</StickyNav.Row>
    <StickNav.Row title="Bar" link="bar">content</StickyNav.Row>
    <StickNav.Row title="Baz" link="baz">content</StickyNav.Row>
  </StickyNav>
</div>
**/


class StickyNav extends Component {

  constructor(props) {
    super(props);

    this.state = {
      selected: props.selected,
      initYOffset: 44,
      tabAnchors: []
    };
    this.requestAnimeId = null;
    this.pending = false;
    this.isSticky = false;
    if (!props.minScreen ||
      (props.minScreen
        && !clientWidth.isBelowBreakPoint(props.minScreen))) {
      this.isSticky = true;
    }
    this._checkTabInView = this._checkTabInView.bind(this);
    this.onScroll = this.onScroll.bind(this);
  }

  onScroll() {
    if (this.pending) {
      return;
    }
    this.pending = true;
    this.requestAnimeId = window.requestAnimationFrame(() => {
      this.pending = false;
      this._checkTabInView();
    });
  }

  _checkTabInView() {
    const tabAnchors = this.state.tabAnchors;
    const pageYOffset = window.pageYOffset + this.state.initYOffset;

    if (!tabAnchors) {
      return;
    }

    tabAnchors.forEach((tabAnchor, index) => {
      const tab = ReactDOM.findDOMNode(this.refs.stickyNav.children[index]);
      if (tab) {
        if (tab.offsetTop < pageYOffset && pageYOffset < (tab.offsetTop + tab.offsetHeight)) {
          this.setState({
            selected: index
          });
        }
      }
    });
  }

  componentDidMount() {
    if (this.isSticky) {
      this.onScroll();
      window.addEventListener("scroll", this.onScroll);
    }
  }

  componentWillUnmount() {
    window.cancelAnimationFrame(this.requestAnimeId);
    window.removeEventListener("scroll", this.onScroll);
  }

  _clickTab(index) {
    this.setState({
      selected: index
    });
  }

  _renderLabels(child, index): ReactElement {
    const classes = ["StickyNav-head-list-item", "display-block", "text-center", "font-semibold"];
    const tabAnchors = this.state.tabAnchors;

    if (this.state.selected === index) {
      classes.push("active");
    }

    tabAnchors.push(child.props.link);

    return (
      <div key={index}
        className="Grid-col u-size-1 u-size-3-12-m">
        <Link href={`#${child.props.link}`} className={classNames(classes)}
          onClick={this._clickTab.bind(this, index)}>
          {child.props.title}
        </Link>
      </div>
    );
  }

  _renderTabs(): ReactElement {
    return (
      <div className="Grid">
        {this.props.children.map(this._renderLabels.bind(this))}
      </div>
      );
  }

  _renderFixie(): ReactElement {
    if (this.isSticky) {
      return (<Fixie>
        {this._renderTabs()}
      </Fixie>);
    }
  }

  render(): ReactElement {
    return (
      <div className="StickyNav">
        <div className="StickyNav-tabs">
          {this._renderFixie()}
        </div>
        <div ref="stickyNav">
          {this.props.children}
        </div>
      </div>
    );
  }
}

StickyNav.propTypes = {
  /**
  *Children to render in container
  */
  children: React.PropTypes.node,

  tabs: React.PropTypes.array,

  selected: React.PropTypes.number,

  initYOffset: React.PropTypes.number,

  minScreen: React.PropTypes.string
};

StickyNav.Row = stickyNavRow;

export default StickyNav;
