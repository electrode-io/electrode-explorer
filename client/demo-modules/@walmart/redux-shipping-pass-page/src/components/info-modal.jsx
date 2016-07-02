import React from "react";
import Modal from "@walmart/wmreact-containers/lib/components/modal";
import SlidePanel from "@walmart/wmreact-containers/lib/components/slidepanel";

/**
Wrapper for Modal component that loads the response of the URL you pass in as props.

@import {InfoModal}

@examples
```jsx
<InfoModal url={'http://jsonplaceholder.typicode.com'} fixed={false} padded={true} />
```
*/

class InfoModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {active: false};
    this.toggle = this.toggle.bind(this);
    props.getModalInfo(props.url);
  }

  toggle() {
    this.setState({active: !this.state.active});
  }

  _injectHTML() {
    return (
      <div dangerouslySetInnerHTML={this.props.modalContent}></div>
    );
  }

  _renderSlidePanel() {
    return (
      <SlidePanel
        ref="slidePanel"
        active={this.state.active}
        onClose={this.toggle}
        direction="left"
        className="hide-content-s">
          <div className="slide-panel">
            {this._injectHTML()}
          </div>
      </SlidePanel>
    );
  }

  _renderModal() {
    return (
      <Modal
        ref="infoModal"
        active={this.state.active}
        onClose={this.toggle}
        fixed={this.props.fixed}
        padded={this.props.padded}
        className="hide-content-max-s modal--small">
          <div className="info-modal-body">
            {this._injectHTML()}
          </div>
      </Modal>
    );
  }

  render() {
    return (
      <div>
        {this.state.active && this._renderSlidePanel()}
        {this._renderModal()}
      </div>
    );
  }
}

InfoModal.propTypes = {
  url: React.PropTypes.string,
  fixed: React.PropTypes.bool,
  padded: React.PropTypes.bool,
  getModalInfo: React.PropTypes.func,
  modalContent: React.PropTypes.object
};

export default InfoModal;
