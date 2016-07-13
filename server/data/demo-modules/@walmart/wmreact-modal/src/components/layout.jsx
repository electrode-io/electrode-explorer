import flow from "lodash/flow";
import getOr from "lodash/fp/getOr";
import invoke from "lodash/fp/invoke";
import throttle from "lodash/throttle";
import React, {Component, PropTypes} from "react";
import {canUseDOM} from "exenv";
import classNames from "classnames";

import {WidthWatcher} from "@walmart/wmreact-layout/lib/components/utils/width-watcher";

const widthWatcher = new WidthWatcher();

const RESIZE_THROTTLE_INTERVAL = 30;
const MODAL_MARGIN = 20;
const SHADOW_TRANSITION_RANGE = 100;
const SHADOW_OPACITY = 0.08;

const scope = "modal_layout";
const styles = {
  /* Element Classes */
  container: `${scope}_container`,
  headerContainer: `${scope}_header-container`,
  header: `${scope}_header`,
  headerActions: `${scope}_header_actions`,
  scroll: `${scope}_scroll`,
  bodyContainer: `${scope}_body-container`,
  body: `${scope}_body`,
  footerContainer: `${scope}_footer-container`,
  footer: `${scope}_footer`,
  footerActions: `${scope}_footer_actions`,

  /* Modifier Classes */
  border: "border",
  margin: "margin"
};

const shadowOpacity = (scroll) => Math.min(scroll / SHADOW_TRANSITION_RANGE, 1) * SHADOW_OPACITY;

const getHeight = flow(invoke("getBoundingClientRect"), getOr(0, "height"));

const isSmallWidth = (width) => width === "x-small" || width === "small";

class ModalLayout extends Component {
  constructor(state, props) {
    super(state, props);
    this.state = {
      windowHeight: 0,
      fillScreen: isSmallWidth(widthWatcher.width),
      headerHeight: 0,
      footerHeight: 0,
      bodyHeight: 0,
      scrollTop: 0,
      mounted: false
    };

    this.layout = () => {
      this.setState({
        windowHeight: window.innerHeight,
        headerHeight: getHeight(this.refs.header),
        footerHeight: getHeight(this.refs.footer),
        bodyHeight: getHeight(this.refs.body),
        scrollTop: getOr(0, "scrollTop", this.refs.scroll),
        mounted: true
      });
    };

    this.updateWidth = (width) => {
      this.setState({fillScreen: isSmallWidth(width)});
    };

    this.handleLayout = throttle(this.layout, RESIZE_THROTTLE_INTERVAL);
  }

  componentDidMount() {
    if (canUseDOM) {
      this.handleLayout();
      window.addEventListener("resize", this.handleLayout);
      widthWatcher.addSubscriber(this);
    }
  }

  componentWillUnmount() {
    if (canUseDOM) {
      window.removeEventListener("resize", this.handleLayout);

      // Call `cancel` on the throttled handler to prevent it from executing
      // after the component unmounts.
      this.handleLayout.cancel();
      widthWatcher.removeSubscriber(this);
    }
  }

  calculateLayout() {
    const {maxHeight = Infinity, minHeight = 0, minBodyHeight = 50} = this.props;

    const {
      windowHeight,
      headerHeight,
      footerHeight,
      bodyHeight,
      scrollTop,
      fillScreen
    } = this.state;

    const margins = fillScreen ? 0 : MODAL_MARGIN * 2;

    const modalHeight = headerHeight + bodyHeight + footerHeight + margins;
    const scrollAmount = Math.max(modalHeight - windowHeight, 0);
    const scrollContainerHeight = fillScreen
      ? windowHeight - headerHeight - footerHeight
      : Math.max(
          Math.max(
            Math.min(
              bodyHeight - scrollAmount,
              maxHeight - headerHeight - footerHeight
            ),
            minHeight - headerHeight - footerHeight
          ),
          minBodyHeight
        );
    const scrollBottom = bodyHeight - scrollContainerHeight - scrollTop;

    return {
      scrollContainerHeight,
      scrollBottom,
      scrollTop
    };
  }

  render() {
    const {header, body, footer, actions, divided, shadows, margins} = this.props;
    const {mounted, fillScreen} = this.state;
    const {scrollContainerHeight, scrollBottom, scrollTop} = this.calculateLayout();

    const containerStyle = {visibility: mounted ? "visible" : "hidden"};
    const scrollContainerStyle = {height: scrollContainerHeight};

    const headerActionsVisible = actions && fillScreen;
    const footerActionsVisible = actions && !fillScreen;

    const headerVisible = header || headerActionsVisible;
    const footerVisible = footer || footerActionsVisible;

    const topShadow = headerVisible && shadows ? {
      boxShadow: `0 0 6px 3px rgba(0,0,0,${shadowOpacity(scrollTop)})`
    } : {};
    const bottomShadow = footerVisible && shadows ? {
      boxShadow: `0 0 6px 3px rgba(0,0,0,${shadowOpacity(scrollBottom)})`
    } : {};

    return (
      <div className={styles.container} style={containerStyle}>
        <div
          ref="header"
          style={topShadow}
          className={classNames({
            [styles.headerContainer]: true,
            [styles.border]: divided && headerVisible
          })}
        >
          {
            headerVisible &&
            <div>
              {headerActionsVisible && <div className={styles.headerActions}>{actions}</div>}
              {
                !!header &&
                <div
                  className={classNames({
                    [styles.header]: true,
                    [styles.margin]: margins
                  })}
                >
                  {header}
                </div>
              }
            </div>
          }
        </div>
        <div
          ref="scroll"
          className={styles.scroll}
          style={scrollContainerStyle}
          onScroll={this.handleLayout}
        >
          <div ref="body" className={styles.bodyContainer}>
            <div className={classNames({[styles.body]: true, [styles.margin]: margins})}>
              {body}
            </div>
          </div>
        </div>
        <div
          ref="footer"
          style={bottomShadow}
          className={classNames({
            [styles.footerContainer]: true,
            [styles.border]: divided && footerVisible
          })}
        >
          {footerVisible &&
            <div
              className={classNames({
                [styles.footer]: true,
                [styles.margin]: margins
              })}
            >
              {footer}
              {
                footerActionsVisible &&
                <div className={styles.footerActions}>
                  {actions}
                </div>
              }
            </div>
          }
        </div>
      </div>
    );
  }
}

ModalLayout.propTypes = {
  body: PropTypes.node,
  header: PropTypes.node,
  footer: PropTypes.node,
  actions: PropTypes.node,
  maxHeight: PropTypes.number,
  minHeight: PropTypes.number,
  minBodyHeight: PropTypes.number,
  divided: PropTypes.bool,
  shadows: PropTypes.bool,
  margins: PropTypes.bool
};

export default ModalLayout;
