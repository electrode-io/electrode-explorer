import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";
import Collapsable from "./collapsable";

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

  componentDidMount() {
    this.normalizeHeight();
  }

  _afterAnimation(): void {
    if (this.state.isOpen && this.props.disableClose) {
      this.setState({
        visibleToggle: false
      });
    }
  }

  componentDidUpdate() {
    this.normalizeHeight();
  }

  componentWillReceiveProps(nextProps) {
    // If the content is changing, reset baseHeight and visibleToggle
    if (nextProps.children !== this.props.children) {
      this.setState({
        baseHeight: nextProps.baseHeight,
        contentSet: false,
        visibleToggle: (nextProps.defaultOpen && nextProps.disableClose) ? false : true
      });
    }
  }

  normalizeHeight() {
    // Check that our content fills the baseHeight, if not, remove toggle and
    // slim down
    const contentElement = ReactDOM.findDOMNode(this.refs.content);
    const contentWidth = contentElement.offsetWidth;
    const contentHeight = contentElement.offsetHeight;

    this.checkVisibilityAndResize(contentHeight, contentWidth);
  }

  checkVisibilityAndResize(contentHeight, contentWidth) {
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

  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const buttonText = this.state.isOpen ? this.props.buttonOpenText : this.props.buttonClosedText;
    const baseHeight = this.state.contentSet ?
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
          <button className="button" onClick={this.toggleOpen.bind(this)}>
            {buttonText}
          </button>
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
