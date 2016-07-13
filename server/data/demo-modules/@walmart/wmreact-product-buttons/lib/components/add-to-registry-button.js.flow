import React, { PropTypes } from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import Flyout from "@walmart/wmreact-containers/lib/components/flyout";
import AddToListRegistryFlyoutContent from "./add-to-list-registry-flyout-content";
import SlidePanel from "@walmart/wmreact-containers/lib/components/slidepanel";

const _renderATRButton = (onClick, spinner) => {
  return (
    <Button
      className="AddToRegistry-button"
      inverse
      spinner={spinner}
      block
      onClick={onClick}>
      Add to Registry
    </Button>
  );
};

const _renderFlyoutContent = (props) => {
  return (<AddToListRegistryFlyoutContent {...props}/>);
};

const _renderFlyout = ({onClick, onPromptClose}, content) => {
  return (
    <Flyout direction="left"
      className="AddToRegistry-flyout"
      onActiveChange={(active) => {
        if (!active) {
          onPromptClose();
        }
      }}
      trigger={_renderATRButton(onClick, false)}
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

const _renderPrompt = (props) => {
  const content = _renderFlyoutContent(props);
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

const StatelessAddToRegistryButton = (props) => {
  const {
    status,
    onClick
  } = props;
  switch (status) {
  case "INITIALIZED":
    return _renderATRButton(onClick, false);
  case "LOADING":
    return _renderATRButton(null, true);
  case "PROMPT":
    return _renderPrompt(props);
  }
};

StatelessAddToRegistryButton.displayName = "StatelessAddToRegistryButton";

StatelessAddToRegistryButton.propTypes = {
  /**
  Prop that describes the current state of the button
  */
  status: PropTypes.oneOf(["INITIALIZED", "LOADING", "PROMPT"]),
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
  onPromptClose: PropTypes.func
};

StatelessAddToRegistryButton.defaultProps = {
  status: "INITIALIZED",
  onPromptClose: () => {},
  onListItemSelected: () => {}
};

export default StatelessAddToRegistryButton;
