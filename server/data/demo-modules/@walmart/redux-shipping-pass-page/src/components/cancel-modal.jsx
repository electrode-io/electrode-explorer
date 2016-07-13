import React from "react";

import Button from "@walmart/wmreact-interactive/lib/components/button";
import Image from "@walmart/wmreact-base/lib/components/image";
import Modal from "@walmart/wmreact-containers/lib/components/modal";
import SlidePanel from "@walmart/wmreact-containers/lib/components/slidepanel";

class CancelModal extends React.Component {
  constructor() {
    super();
    this.state = { active: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({ active: !this.state.active });
  }

  _renderContent() {
    const { logo, renewalDate } = this.props;

    return (
      <div>
        <dl className="dl-emphasize">
          <dt>Are you sure you want to lose these FREE <Image className="sp-logo" src={logo} />
          {' '}benefits?</dt>
          <dd>
            <ul>
              <li>FREE 2-day shipping on over a million <Image className="sp-logo" src={logo} />
              {' '}eligible items</li>
              <li>FREE value shipping on regular Walmart items</li>
              <li>No minimum orders</li>
            </ul>
          </dd>
        </dl>

        <dl className="dl-emphasize">
          <dt>Canceling anyway?</dt>
          <dd>Use <Image className="sp-logo" src={logo} /> until {renewalDate}
          {' '}and we won't charge your card!</dd>
        </dl>
      </div>
    );
  }

  _renderButtons(block) {
    const { trialStatus } = this.props;

    const ContinueButton = () => (
      <Button
        block={block}
        className="button-spacing"
        data-automation-id="continueButton"
        inverse
        onClick={this.toggle}
      >
        {trialStatus ? <span>Continue</span> : <span>Cancel</span>}
      </Button>
    );

    const CancelButton = () => (
      <Button
        block={block}
        data-automation-id="yesCancelButton"
        onClick={() => {this.props.cancel(); this.toggle();}}
      >
        {trialStatus ? <span>Yes, Cancel</span> : <span>Confirm</span>}
      </Button>
    );

    return (
      <div className="l-margin-top">
        {block ? <CancelButton /> : <ContinueButton />}
        {block ? <ContinueButton /> : <CancelButton />}
      </div>
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
        {this._renderContent()}
        {this._renderButtons(true)}
      </SlidePanel>
    );
  }

  _renderModal() {
    return (
      <div className="hide-content-max-s">
        <Modal
          active={this.state.active}
          className="cancel-modal-body"
          fixed={this.props.fixed}
          onClose={this.toggle}
          padded={this.props.padded}
          ref="cancelModal"
        >
          {this._renderContent()}
          <div className="pull-right">
            {this._renderButtons()}
          </div>
        </Modal>
      </div>
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

CancelModal.propTypes = {
  cancel: React.PropTypes.func,
  fixed: React.PropTypes.bool,
  logo: React.PropTypes.any,
  padded: React.PropTypes.bool,
  renewalDate: React.PropTypes.string,
  trialStatus: React.PropTypes.bool
};

export default CancelModal;
