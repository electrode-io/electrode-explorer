import React from "react";

import Modal from "@walmart/wmreact-containers/lib/components/modal";
import SlidePanel from "@walmart/wmreact-containers/lib/components/slidepanel";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Image from "@walmart/wmreact-base/lib/components/image";

class CancelModal extends React.Component {
  constructor() {
    super();
    this.state = {active: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({active: !this.state.active});
  }

  _renderContent() {
    const {renewalDate, logo, trialStatus} = this.props;

    const TrialUpsell = () => (
      <div>
        <dl className="dl-emphasize">
          <dt>Are you sure you want to lose these FREE <Image src={logo} style={{width: 110}}/>
          {' '}benefits?</dt>
          <dd>
            <ul>
              <li>FREE 2-day shipping on over a million <Image src={logo} style={{width: 90}}/>
              {' '}eligible items</li>
              <li>FREE value shipping on regular Walmart items</li>
              <li>No minimum orders</li>
            </ul>
          </dd>
        </dl>

        <dl className="dl-emphasize">
          <dt>Canceling anyway?</dt>
          <dd>Use <Image src={logo} style={{width: 90}}/> until {renewalDate}
          {' '}and we won't charge your card!</dd>
        </dl>
      </div>
    );

    const Upsell = () => (
      <h1 className="heading-d well-heading">
        Please confirm that you do not want to automatically renew your subscription.
      </h1>
    );

    return (
      <div>
        {trialStatus ? <TrialUpsell /> : <Upsell />}
      </div>
    );
  }

  _renderButtons(block) {
    const {trialStatus} = this.props;

    const ContinueButton = () => (
      <Button
        className="button-spacing"
        data-automation-id="continueButton"
        inverse={true}
        block={block}
        onClick={this.toggle}>
          {trialStatus ? <span>Continue</span> : <span>Cancel</span>}
      </Button>
    );

    const CancelButton = () => (
      <Button
        data-automation-id="yesCancelButton"
        block={block}
        onClick={() => {this.props.cancel(); this.toggle();}}>
          {trialStatus ? <span>Yes,Cancel</span> : <span>Confirm</span>}
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
        ref="slidePanel"
        active={this.state.active}
        onClose={this.toggle}
        direction="left"
        className="hide-content-s">
          {this._renderContent()}
          {this._renderButtons(true)}
      </SlidePanel>
    );
  }

  _renderModal() {
    return (
      <div className="hide-content-max-s">
        <Modal
          ref="cancelModal"
          active={this.state.active}
          fixed={this.props.fixed}
          padded={this.props.padded}
          onClose={this.toggle}
          className="cancel-modal-body">
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
  renewalDate: React.PropTypes.string,
  logo: React.PropTypes.any,
  fixed: React.PropTypes.bool,
  padded: React.PropTypes.bool,
  trialStatus: React.PropTypes.bool
};

export default CancelModal;
