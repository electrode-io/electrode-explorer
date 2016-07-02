import React from "react";
import Copy from "@walmart/wmreact-base/lib/components/copy";
import Image from "@walmart/wmreact-base/lib/components/image";
import Well from "@walmart/wmreact-containers/lib/components/well";
import Separator from "@walmart/wmreact-containers/lib/components/separator";
import Button from "@walmart/wmreact-interactive/lib/components/button";

import InfoModal from "./info-modal";

class InfoWell extends React.Component {
  render() {
    const { getModalInfo, url, modalContent } = this.props;

    return (
      <Well padded={true}>
        <h1 className="heading-b well-heading">
          Your <Image src={this.props.logo} className="sp-logo"/> benefits
        </h1>
        <Copy>
          Use it as often as you want. There's no maximum number of deliveries.
        </Copy>
        <Copy>
          Use it whenever you want, too. There are no minimum order sizes.
        </Copy>
        <Copy>
          Use it to get over a million <Image src={this.props.logo} className="sp-logo"/> items.
        </Copy>
        <div className="hide-content-m">
          <Separator/>
        </div>
        <Button
          className="s-margin-top more-info-button"
          data-automation-id="infoModalButton"
          fakelink={true}
          onClick={() => this.refs.infoModal.toggle()}>
            <span>More info</span>
        </Button>
        <InfoModal
          ref="infoModal"
          getModalInfo={getModalInfo}
          url={url}
          modalContent={modalContent}
          fixed={true}
          padded={true}/>
      </Well>
    );
  }
}

InfoWell.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]),
  logo: React.PropTypes.any,
  url: React.PropTypes.string,
  getModalInfo: React.PropTypes.func,
  modalContent: React.PropTypes.object
};

export default InfoWell;
