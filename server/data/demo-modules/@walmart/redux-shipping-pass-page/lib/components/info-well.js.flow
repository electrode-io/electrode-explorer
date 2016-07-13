import React from "react";

import Button from "@walmart/wmreact-interactive/lib/components/button";
import Copy from "@walmart/wmreact-base/lib/components/copy";
import Image from "@walmart/wmreact-base/lib/components/image";
import Separator from "@walmart/wmreact-containers/lib/components/separator";
import Well from "@walmart/wmreact-containers/lib/components/well";

import InfoModal from "./info-modal";

class InfoWell extends React.Component {
  render() {
    const { getModalInfo, modalContent, url } = this.props;

    return (
      <Well padded>
        <h1 className="heading-d well-heading">
          Your <Image className="sp-logo" src={this.props.logo} /> benefits
        </h1>
        <Copy>
          Use it as often as you want. There's no maximum number of deliveries.
        </Copy>
        <Copy>
          Use it whenever you want, too. There are no minimum order sizes.
        </Copy>
        <Copy>
          Use it to get over a million <Image className="sp-logo" src={this.props.logo} /> items.
        </Copy>
        <div className="hide-content-m">
          <Separator />
        </div>
        <Button
          className="s-margin-top more-info-button"
          data-automation-id="infoModalButton"
          fakelink={true}
          onClick={() => this.refs.infoModal.toggle()}
        >
          <span>More info</span>
        </Button>
        <InfoModal
          fixed
          getModalInfo={getModalInfo}
          modalContent={modalContent}
          padded
          ref="infoModal"
          url={url}
        />
      </Well>
    );
  }
}

InfoWell.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]),
  getModalInfo: React.PropTypes.func,
  logo: React.PropTypes.any,
  modalContent: React.PropTypes.object,
  url: React.PropTypes.string
};

export default InfoWell;
