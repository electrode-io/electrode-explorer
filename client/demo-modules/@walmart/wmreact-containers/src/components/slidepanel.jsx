/* @flow */
import React, { Component, PropTypes } from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import classNames from "classnames";

/**
A slide panel.
@examples
```jsx
var SlidePanelExample = React.createClass({
  _toggleSlidePanel() {
    var slidePanel = this.refs.jsSlidePanel;
    slidePanel.toggleSlidePanel();
  },
  render() {
    return(<div>
      <button type="button" onClick={this._toggleSlidePanel} >Open Slide Panel</button>
      <SlidePanel ref="jsSlidePanel" direction="right">
        &nbsp;Slide panel content goes here.
      </SlidePanel>
      </div>)
  }
});

React.render(<SlidePanelExample/>, mountNode);
```
@component SlidePanel
@import {SlidePanel}
@playground
SlidePanel
!noRenderFalse!
```
var SlidePanelExample = React.createClass({
  _toggleSlidePanel() {
    var slidePanel = this.refs.jsSlidePanel;
    slidePanel.toggleSlidePanel();
  },
  render() {
    return(<div>
      <button type="button" onClick={this._toggleSlidePanel} >Open Slide Panel</button>
      <SlidePanel ref="jsSlidePanel" direction="right" onClose={() => console.log("foo")}>
        &nbsp;Slide panel content goes here.
      </SlidePanel>
      </div>)
  }
});

React.render(<SlidePanelExample/>, mountNode);
```
*/
class SlidePanel extends Component {
  constructor(props): void {
    super(props);
    this.state = {
      active: props.active
    };

    this.toggleSlidePanel = this.toggleSlidePanel.bind(this);
  }

  componentWillReceiveProps(nextProps: Object): void {
    if (nextProps.active !== this.props.active) {
      this.setState({active: nextProps.active});
    }
  }

  _getDefaultHeader(btnText, btnClass): ReactElement {
    return (
      <Button
        className={btnClass}
        fakelink={btnClass === undefined}
        onClick={this.toggleSlidePanel}
      >{btnText || "Back"}</Button>
    );
  }

  _getComponentClasses({className, direction, active}): string {
    const directionClass = `slidepanel-slide-from-${direction}`;
    return classNames("slidepanel", directionClass, className, {
      "slidepanel--open": active
    });
  }

  // Toggles the slide panel open and closed
  toggleSlidePanel(): void {
    this.setState({
      active: !this.state.active
    }, () => {
      // when the slide panel is closed, call
      // the onClose callback handler.
      if (!this.state.active) {
        this.props.onClose();
      }
    });
  }

  _getSlidePanelStyles({backgroundColor}): Object {
    return { backgroundColor };
  }

  render(): ReactElement {
    const { header, children, className, direction, btnText, btnClass } = this.props;
    const { active } = this.state;
    return (<div style={this._getSlidePanelStyles(this.props)}
      className={this._getComponentClasses({
        className, direction, active
      })}>
      <div className="slidepanel-header padding">
        {header ? header : this._getDefaultHeader(btnText, btnClass)}
      </div>
      <div className="slidepanel-body">
        {children}
      </div>
    </div>);
  }
}

SlidePanel.displayName = "SlidePanel";

SlidePanel.propTypes = {
  /*
    True if the SlidePanel is open
  */
  active: PropTypes.bool,
  /**
    The direction of the panel
  */
  direction: PropTypes.oneOf(["top", "right", "bottom", "left"]),
  /**
    The background color
  */
  backgroundColor: PropTypes.string,
  /**
    The header of the panel
  */
  header: PropTypes.any,
  /**
  Children
  */
  children: PropTypes.any,
  /**
    Set callback on Component
  */
  onClose: PropTypes.func,
  /**
    Any additional style classes
  */
  className: PropTypes.string,
  /**
    Change default button text
  */
  btnText: PropTypes.string,
  /**
    Any additional btn style classes
  */
  btnClass: PropTypes.string

};

SlidePanel.defaultProps = {
  active: false,
  direction: "right",
  backgroundColor: "#fff",
  onClose: () => {},
  className: ""
};

export default SlidePanel;
