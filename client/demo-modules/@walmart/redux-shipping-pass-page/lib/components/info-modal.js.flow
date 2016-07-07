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
    this.state = { active: false };
    this.toggle = this.toggle.bind(this);
    props.getModalInfo(props.url);
  }

  toggle() {
    this.setState({ active: !this.state.active });
  }

  _injectHTML() {
    return (
      <div dangerouslySetInnerHTML={this.props.modalContent} />
    );
  }

  _renderSlidePanel() {
    return (
      <SlidePanel
        active={this.state.active}
        className="hide-content-s"
        direction="left"
        onClose={this.toggle}
        ref="slidePanel"
      >
        <div className="slide-panel">
          {this._injectHTML()}
        </div>
      </SlidePanel>
    );
  }

  _renderModal() {
    return (
      <Modal
        active={this.state.active}
        className="hide-content-max-s modal--small"
        fixed={this.props.fixed}
        onClose={this.toggle}
        padded={this.props.padded}
        ref="infoModal"
      >
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
  fixed: React.PropTypes.bool,
  getModalInfo: React.PropTypes.func,
  modalContent: React.PropTypes.object,
  padded: React.PropTypes.bool,
  url: React.PropTypes.string
};

export default InfoModal;
