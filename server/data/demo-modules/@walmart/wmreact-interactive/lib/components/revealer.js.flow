/* @flow */
import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import Collapsable from "@walmart/wmreact-layout/lib/components/collapsable";
import Button from "./button";
import fireUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-ui-event";

/**
A revelear component
@examples
```jsx
<Revealer baseHeight={100} defaultOpen={false} disableClose={true}>
  Foo
</Revealer>
```
@component Revealer
@import {Revealer}
@playground
Revealer
```
<Revealer baseHeight={100} defaultOpen={false} disableClose={true}>
  <ul>
    <li>Item one</li>
    <li>Item two</li>
    <li>Item three</li>
    <li>Item four</li>
    <li>Item five</li>
    <li>Item six</li>
    <li>Item seven</li>
    <li>Item eight</li>
    <li>Item nine</li>
    <li>Item ten</li>
  </ul>
</Revealer>
```
*/
export default class Revealer extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isOpen: props.defaultOpen,
      visibleToggle: (props.defaultOpen && props.disableClose) ? false : true,
      baseHeight: props.baseHeight,
      contentSet: false
    };
  }

  componentDidMount(): void {
    this.normalizeHeight();
  }

  _afterAnimation(): void {
    if (this.state.isOpen && this.props.disableClose) {
      this.setState({
        visibleToggle: false
      });
    }
  }

  componentDidUpdate(): void {
    this.normalizeHeight();
  }

  componentWillReceiveProps(nextProps: Object): void {
    // If the content is changing, reset baseHeight and visibleToggle
    if (nextProps.children !== this.props.children) {
      this.setState({
        baseHeight: nextProps.baseHeight,
        contentSet: false,
        visibleToggle: (nextProps.defaultOpen && nextProps.disableClose) ? false : true
      });
    }
  }

  normalizeHeight(): void {
    // Check that our content fills the baseHeight, if not, remove toggle and
    // slim down
    const contentElement = ReactDOM.findDOMNode(this.refs.content);
    const contentWidth = contentElement.offsetWidth;
    const contentHeight = contentElement.offsetHeight;

    this.checkVisibilityAndResize(contentHeight, contentWidth);
  }

  checkVisibilityAndResize(contentHeight: number, contentWidth: number): void {
    // Exit early if the element"s has no height or width, indicating that it"s
    // not visible.
    if (contentWidth === 0 && contentHeight === 0) {
      return;
    }

    if (contentHeight < this.state.baseHeight) {
      this.setState({
        baseHeight: contentHeight,
        visibleToggle: false,
        contentSet: true
      });
    }
  }

  toggleOpen(event): void {
    this.setState({
      isOpen: !this.state.isOpen
    });

    fireUIEvent(this, event, {eventType: "toggleOpen"});
  }

  render(): ReactElement {
    const buttonText = this.state.isOpen ? this.props.buttonOpenText : this.props.buttonClosedText;
    const baseHeight =
      this.state.contentSet ?
      this.state.baseHeight + 20 : // This makes up for the 20px margin-top
      this.state.baseHeight;       // that was cutting off the text.

    return (
      <div>
        <Collapsable
          containerClassName={classNames({"is-open": this.state.isOpen})}
          baseHeight={baseHeight}
          isOpen={this.state.isOpen}
          transitionComplete={() => this._afterAnimation()}
        >
          <div ref={"content"}>
            {this.props.children}
          </div>
        </Collapsable>
        {this.state.visibleToggle &&
          <div
            className={classNames(
              "revealer-footer",
              {"is-active": this.state.isOpen},
              {"border": this.props.border}
            )}
          >
            <Button
              fakelink={this.props.fakeLink}
              inverse={this.props.inverse}
              className={classNames(
                "caret",
                "caret-blue",
                "font-semibold",
                "copy-mini",
                {"active": this.state.isOpen}
              )}
              onClick={(ev) => this.toggleOpen(ev)}
            >
              {buttonText}
            </Button>
          </div>
        }
      </div>
    );
  }
}

Revealer.displayName = "Revealer";

Revealer.propTypes = {
  /**
  The base height of the container
  */
  baseHeight: React.PropTypes.number,
  /**
  True if we should display a border above the button
  */
  border: React.PropTypes.bool,
  /**
  Text to be displayed within the button when closed
  */
  buttonClosedText: React.PropTypes.string,
  /**
  Text to be displayed within the button when open
  */
  buttonOpenText: React.PropTypes.string,
  /**
  Children node to be placed in collapsable container
  */
  children: React.PropTypes.node,
  /**
  True if the revealer should start open
  */
  defaultOpen: React.PropTypes.bool,
  /**
  True the revealer should not be closeable
  */
  disableClose: React.PropTypes.bool,
  /**
  True if we should display button as a fake link
  */
  fakeLink: React.PropTypes.bool,
  /**
  True if we should display the inverse button
  */
  inverse: React.PropTypes.bool
};

Revealer.contextTypes = {
  analytics: React.PropTypes.object
};

Revealer.defaultProps = {
  baseHeight: 100,
  border: true,
  buttonClosedText: "Show more",
  buttonOpenText: "Show less",
  defaultOpen: false,
  disableClose: false,
  fakeLink: true,
  inverse: false
};
