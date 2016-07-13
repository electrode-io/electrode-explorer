/* @flow */
import React, { PropTypes } from "react";
import SlidePanel from "@walmart/wmreact-containers/lib/components/slidepanel";
import Modal from "@walmart/wmreact-containers/lib/components/modal";
import Heading from "@walmart/wmreact-base/lib/components/heading";
import Image from "@walmart/wmreact-base/lib/components/image";

const IMAGE_HOST = "//i5.walmartimages.com/dfw/63fd9f59-ecd8";
const IMAGE_SRC = `${IMAGE_HOST}/k2-_2e2a8c94-42d1-4784-83d9-1a47292ee4d6.v11.png`;

const MORE_INFO_CONTENT = (
  <div className="prod-MoreInfo-container">
    <div className="pull-left">
      <Image src={IMAGE_SRC} size={60} />
    </div>
    <div className="prod-MoreInfo-content" >
      <div className="prod-MoreInfo-heading">
        <Heading.H6 className="no-margin">
          Restricted
        </Heading.H6>
      </div>
      <span className="prod-MoreInfo-text">
        Some material may be inappropriate for viewers under 17.
        Requires the approval of a parent or adult guardian.
      </span>
    </div>
  </div>
);

/**
This component renders more info modal on medium and above breakpoints
and renders the content as a slidepanel in smaller breakpoints.
Set the active prop to either show or hide this component

 For example this is how we use this component.

 ```jsx
 <MoreInfoModal active={true}/>
 ```

 @import {MoreInfoModal}
 @flags noVisibleRender
 @component MoreInfoModal
 @playground
 MoreInfoModal
 ```
 <MoreInfoModal active={true}/>
 ```
 @return {ReactElement} MoreInfoModal
 @param {object} props for the component
 */
const MoreInfoModal = (props) => {

  const _renderModal = ({ active, onClose }): ReactElement => {
    return (
      <div className="hide-content-max-s">
        <Modal active={active}
          padded
          fixed
          onClose={onClose}
          className="prod-MoreInfo-modal">
            {MORE_INFO_CONTENT}
        </Modal>
      </div>
    );
  };

  const _renderSlidePanel = ({ active, onClose }): ReactElement => {
    return (
      <div className="hide-content-s">
        <SlidePanel active={active}
          direction="bottom"
          onClose={onClose}
          padded
          className="prod-MoreInfo-slidePanel">
          {MORE_INFO_CONTENT}
        </SlidePanel>
      </div>
    );
  };

  return (
    <div className="prod-MoreInfo-panel">
      {_renderModal(props)}
      {_renderSlidePanel(props)}
    </div>
  );
};

MoreInfoModal.displayName = "MoreInfoModal";

MoreInfoModal.propTypes = {
  /**
  Prop used to open close modal
  */
  active: PropTypes.bool,
  /**
  Callback executed when modal closed
  */
  onClose: PropTypes.func
};

MoreInfoModal.defaultProps = {
  active: true,
  onClose: () => {}
};

export default MoreInfoModal;
