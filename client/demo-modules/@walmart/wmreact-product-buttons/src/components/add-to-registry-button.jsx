import React, { PropTypes } from "react";
import Flyout from "@walmart/wmreact-containers/lib/components/flyout";
import ResponsiveModalSlidePanel
  from "@walmart/wmreact-containers/lib/components/responsive-modal-slidepanel";
import AddToListRegistryFlyoutContent from "./add-to-list-registry-flyout-content";
import SlidePanel from "@walmart/wmreact-containers/lib/components/slidepanel";
import clientWidth from "@walmart/wmreact-layout/lib/components/helpers/client-width";
import PostAddToRegistryContent from "./post-add-to-registry-content";

const _getFlyoutDirection = (_clientWidth = clientWidth) => {
  return _clientWidth.isBelowBreakPoint("medium") ?
    "bottom" : "left";
};

const _renderATRButton = (onClick) => {
  return (
    <div className="AddToRegistry-button u-textBlue font-normal" onClick={onClick}>
      <i className="AddToRegistry-icon wmicon wmicon-registry"/>
      <span className="AddToRegistry-text">Add to Registry</span>
    </div>
  );
};

const _renderFlyout = ({onClick, onPromptClose}, content) => {
  return (
    <Flyout direction={_getFlyoutDirection()}
      className="AddToRegistry-flyout"
      onActiveChange={(active) => {
        if (!active) {
          onPromptClose();
        }
      }}
      closeButton
      size="narrow"
      onTriggerElementClick={onClick}
      trigger={_renderATRButton(null)}
      active>
      {content}
    </Flyout>
  );
};

const _renderSlidePanel = ({onPromptClose}, content) => {
  return (
    <SlidePanel
      className="AddToRegistry-sildePanel"
      active padded onClose={onPromptClose} direction="bottom">
      {content}
    </SlidePanel>
  );
};

const _renderPrompt = (props, content) => {
  return (
    <div className="AddToRegistry-prompt">
      <div className="hide-content-max-s">
        {_renderFlyout(props, content)}
      </div>
      <div className="hide-content-s">
        {_renderSlidePanel(props, content)}
      </div>
    </div>
  );
};

const _renderPostATR = ({status, listType, onPromptClose}) => {
  return (
    <ResponsiveModalSlidePanel
      className="AddToRegistry-successModal"
      showContainer
      onContainerClose={onPromptClose}>
      <PostAddToRegistryContent status={status} listType={listType} />
    </ResponsiveModalSlidePanel>
  );
};

const StatelessAddToRegistryButton = (props) => {
  const {
    status,
    onClick
  } = props;
  switch (status) {
  case "INITIALIZED":
    return _renderATRButton(onClick);
  case "LOADING":
    return _renderATRButton(null);
  case "PROMPT":
    return _renderPrompt(props, (<AddToListRegistryFlyoutContent {...props}/>));
  case "SUCCESS":
  case "ERROR":
    return (
      <div>
        {_renderATRButton(onClick)}
        {_renderPostATR(props)}
      </div>
    );
  }
};

StatelessAddToRegistryButton.displayName = "StatelessAddToRegistryButton";

StatelessAddToRegistryButton.propTypes = {
  /**
  Prop that describes the current state of the button
  */
  status: PropTypes.oneOf(["INITIALIZED", "LOADING", "PROMPT", "SUCCESS", "ERROR"]),
  /**
  List of items
  */
  listItems: PropTypes.arrayOf(PropTypes.shape({
    /**
    Type of list or registry
    */
    type: PropTypes.string.isRequired,
    /**
    Name of the list or registry
    */
    name: PropTypes.string.isRequired
  })),
  /**
  Callback to handle list or registry selection
  */
  onListItemSelected: PropTypes.func,
  /**
  Callback to handle onClick on Add to registry button
  */
  onClick: PropTypes.func.isRequired,
  /**
  Callback to handle close of prompt
  */
  onPromptClose: PropTypes.func,
  /**
  Type of the list to which the item was added
  */
  listType: PropTypes.string
};

StatelessAddToRegistryButton.defaultProps = {
  status: "INITIALIZED",
  onPromptClose: () => {},
  onListItemSelected: () => {}
};

export default StatelessAddToRegistryButton;
