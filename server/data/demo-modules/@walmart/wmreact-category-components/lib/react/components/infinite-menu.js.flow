import React, {Component, PropTypes} from "react";
import {findDOMNode as $} from "react-dom";
import { moduleTypes as ModuleTypes, getTempoModuleAutomationId } from "@walmart/category-utils";
import classnames from "classnames";
// small module, see source and talk to @ktan7 if you have concerns
import debounce from "lodash/debounce";
import vendorPrefix from "../../utils/vendor-prefix";
/**
 Expandable HTML and text
 @examples
 ```jsx
 const response = {
  data: [
    {
      "linkText": "All Deals",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Electronics",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Home",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Clothing",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Baby",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Toys",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Sports & Outdoors",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Home Improvement",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    }
  ]
};

 React.render(<InfiniteMenu {...response} />, mountNode);

 ```
 @component ExpandableHtmlText
 @import {ExpandableHtmlText}
 @playground
 ```
 const response = {
  data: [
    {
      "linkText": "All Deals",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Electronics",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Home",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Clothing",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Baby",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Toys",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Sports & Outdoors",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    },
    {
      "linkText": "Home Improvement",
      "url": "http://www.walmart.com",
      "uid": "wAAdKeyJ"
    }
  ]
};

 React.render(<InfiniteMenu {...response} />, mountNode);

 ```
 */


export default class InfiniteMenu extends Component {
  constructor(props): void {
    super(props);

    this._onTouchStart = this._onTouchStart.bind(this);
    this._onTouchMove = this._onTouchMove.bind(this);
    this._onTouchEnd = this._onTouchEnd.bind(this);
    this._normalizeInitialOffset = this._normalizeInitialOffset.bind(this);
    this._debouncedInitialOffset = debounce(
      this._normalizeInitialOffset, this.props.resizeThrottle);

    const active = props.data.filter((item) => {
      return props.pageId === this._getCatIdFromPath(item.url);
    });

    const activeIndex = active.pop() || 0;

    // transient stuff
    this.state = {
      minLeft: props.initialLeftMargin, // maximum left margin
      horizontalOffset: props.initialLeftMargin, // current left margin
      startMarginLeft: props.initialLeftMargin, // the margin onTouchStart
      startX: null, // the touch position onTouchStart
      startTime: null, // start time in miliseconds
      transition: null, // the transition css style
      activeIndex
    };
  }

  /* istanbul ignore next */
  componentDidMount(): void {
    this._normalizeInitialOffset();
    // we need this._debouncedInitialOffset so that it can be unbound
    window.addEventListener("resize", this._debouncedInitialOffset);
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this._debouncedInitialOffset);
  }

  _normalizeInitialOffset(): void {
    // note: actual dimensions can only be calculated after mounting
    const $menuList = $(this.refs.menuList);
    const menuWidth = $menuList.scrollWidth;
    const rootWidth = $(this).offsetWidth;

    let horizontalOffset = this.props.initialLeftMargin;
    for (let i = 0; i < this.state.activeIndex; i++) {
      horizontalOffset -= $menuList.children[i].clientWidth;
    }

    this._setRestrictions(menuWidth, rootWidth, horizontalOffset);
  }

  // only update when animation happens
  // or if menu selection changed in SPA mode
  shouldComponentUpdate(nextProps: Object, nextState: Object): boolean {
    return nextState.horizontalOffset !== this.state.horizontalOffset ||
      nextProps.pageId !== this.props.pageId ||
      JSON.stringify(this.state.transition) !== JSON.stringify(nextState.transition);
  }

  _setRestrictions(menuWidth: number, rootWidth: number, horizontalOffset: number): void {
    // is it swipe-able
    const minLeft = menuWidth <= rootWidth
      ? this.props.initialLeftMargin
      : -1 * menuWidth + rootWidth;

    this.setState({
      rootWidth, // container width
      menuWidth, // menu width
      horizontalOffset, // current margin left offset
      minLeft // maximum margin left offset
    });
  }

  _isEdgeHit(): boolean {
    const leftLimit = this.props.edgeThreshold;
    const rightLimit = -1 * (this.state.menuWidth +
      this.props.edgeThreshold - this.state.rootWidth);
    return rightLimit < this.state.horizontalOffset && this.state.horizontalOffset < leftLimit;
  }

  _isStatic(): boolean {
    // non swipe-able
    return this.state.minLeft === this.props.initialLeftMargin;
  }

  _onTouchStart(ev: Object): void {
    if (this._isStatic()) {
      return;
    }
    // handle the tap
    if (ev.nativeEvent.target.tagName !== "A") {
      ev.preventDefault();
    }

    // multi-touch does not count
    if (ev.touches.length > 1) {
      return;
    }

    const transition = vendorPrefix("transitionDuration", 0);

    this.setState({
      startX: ev.touches[0].clientX,
      startHorizontalOffset: this.state.horizontalOffset,
      startTime: Date.now(),
      transition
    });
  }

  _onTouchMove(ev: Object): void {
    if (this._isStatic()) {
      return;
    }

    ev.preventDefault();
    if (ev.touches.length > 1 || !this._isEdgeHit()) {
      return;
    }

    const delta = ev.changedTouches[0].clientX - this.state.startX;
    const horizontalOffset = this.state.startHorizontalOffset + delta < this.state.minLeft
      ? this.state.minLeft
      : this.state.startHorizontalOffset + delta;

    this.setState({
      horizontalOffset
    });
  }

  _onTouchEnd(ev: Object): void {
    if (this._isStatic()) {
      return;
    }
    // Calculate the velocity for autoscroll
    const elapsed = (Date.now() - this.state.startTime);
    const delta = ev.changedTouches[0].clientX - this.state.startX;
    const velocity = delta / (1 + elapsed);
    let horizontalOffset = this.state.horizontalOffset + velocity * 500;

    if (horizontalOffset > this.props.initialLeftMargin) {
      horizontalOffset = this.props.initialLeftMargin;
    } else if (horizontalOffset < this.state.minLeft) {
      horizontalOffset = this.state.minLeft;
    }

    const transition = vendorPrefix("transitionDuration", "1000ms");

    this.setState({
      horizontalOffset,
      startX: null,
      startTime: null,
      transition
    });
  }

  _getCatIdFromPath(url: string): number {
    return parseInt((url || "").split("/").pop(), 10) || NaN;
  }

  _renderLink(item: Object, index: number, linkId: number): ReactElement {
    const classNames = classnames("InfiniteMenu-Item", {"active": linkId === this.props.pageId});
    return (
      <li key={index} className={classNames}>
        <a href={item.url} title={item.linkText}>{item.linkText}</a>
      </li>
    );
  }

  _renderMenu(): ReactElement {
    const style = {...this.state.transition, marginLeft: this.state.horizontalOffset};

    return (
      <ul className="InfiniteMenu-List" ref="menuList" style={style}>
        {
          this.props.data.map((item, index) => {
            return this._renderLink(item, index,
              this._getCatIdFromPath(item.url));
          })
        }
      </ul>
    );
  }

  render(): ReactElement {
    return (
      <div
        className="InfiniteMenu"
        onTouchStart={this._onTouchStart}
        onTouchMove={this._onTouchMove}
        onTouchCancel={this._onTouchEnd}
        onTouchEnd={this._onTouchEnd}
        {...getTempoModuleAutomationId(this.props.moduleType, process)}>
        {this._renderMenu()}
      </div>
    );
  }
}

InfiniteMenu.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    linkText: PropTypes.string,
    url: PropTypes.string
  })),
  edgeThreshold: PropTypes.number,
  initialLeftMargin: PropTypes.number,
  moduleType: PropTypes.string,
  pageId: PropTypes.number,
  resizeThrottle: PropTypes.number
};

InfiniteMenu.defaultProps = {
  data: [],
  edgeThreshold: 50,
  initialLeftMargin: 10,
  moduleType: ModuleTypes.CATEGORY_NAV,
  pageId: 0,
  resizeThrottle: 100
};
