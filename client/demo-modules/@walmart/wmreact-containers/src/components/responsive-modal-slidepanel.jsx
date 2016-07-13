import React, { Component, PropTypes } from "react";
import classNames from "classnames";
import Modal from "./modal";
import SlidePanel from "./slidepanel";

/**
ResponsiveModalSlidePanel renders modal above large and slidepanel below large breakpoints
@examples
```jsx
<div>
  <ResponsiveModalSlidePanel showContainer={false} ref="responsiveModalSlidePanel">
    <h1>Contents Here</h1>
  </ResponsiveModalSlidePanel>
  <a href="javascript:void(0)" onClick={() => this.refs.responsiveModalSlidePanel._show()}>
    Show Container
  </a>
</div>

**/

class ResponsiveModalSlidePanel extends Component {
  constructor(props:Object):void {
    super(props);
    this.state = {
      showContainer: props.showContainer
    };
  }

  componentWillReceiveProps(nextProps:Object):void {
    if (nextProps.showContainer !== this.props.showContainer) {
      this.setState({
        showContainer: nextProps.showContainer
      });
    }
  }

  show():void {
    this.setState({
      showContainer: true
    });
  }

  close():void {
    this.setState({
      showContainer: false
    });
    this.props.onContainerClose();
  }

  _renderModal(props:Object):ReactElement {
    return (
      <Modal
        className = {classNames("hide-content-max-l", props.modalClassName)}
        active = {this.state.showContainer}
        padded = {true}
        onClose = { () => this.close()}
        fixed = {true}
      >
      {props.children}
    </Modal>);
  }

  _renderSlidePanel(props:Object):ReactElement {
    return (
      <SlidePanel
        className = {classNames("hide-content-l", props.slidePanelClassName)}
        active = {this.state.showContainer}
        onClose = { () => this.close()}
      >
      {props.children}
    </SlidePanel>);
  }


  render():ReactElement {
    return (
      <div
        className = {classNames("display-inline-block", this.props.className)}>
        {this.state.showContainer && this._renderModal(this.props)}
        {this.state.showContainer && this._renderSlidePanel(this.props)}
      </div>
  );
  }
}

ResponsiveModalSlidePanel.propTypes = {
  /**
   classes for the container
   */
  className: PropTypes.string,
  /**
   classes for slidepanel
   */
  slidePanelClassName: PropTypes.string,
  /**
   classes for modal
   */
  modalClassName: PropTypes.string,
  /**
   boolean value to decide whether to display container
   */
  showContainer: PropTypes.bool,
  /**
   callback to be executed when container is closed
   */
  onContainerClose: PropTypes.func,
  /**
   modal/slidepanel contents
   */
  children: PropTypes.node
};

ResponsiveModalSlidePanel.defaultProps = {
  className: "",
  showContainer: false,
  onContainerClose: () => {},
  children: ""
};

export default ResponsiveModalSlidePanel;
