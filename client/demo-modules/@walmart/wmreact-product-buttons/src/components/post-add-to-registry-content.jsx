import React, { PropTypes } from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";

const SUCCESS_HEADER = (
  <div className="PostAddToRegistry-header">
    <span>
      <i className="PostAddToRegistry-icon wmicon wmicon-26 wmicon-ok"/>
    </span>
      <span className="PostAddToRegistry-success font-bold">
        This item was added to your registry
      </span>
  </div>
);

const _redirectTo = (url, _window = window) => {
  _window.location.href = url;
};

const _renderChecklistButton = (listType) => {
  const checklistLink = listType === "WR"
    ? "/lists/wedding-registry-checklist"
    : "/lists/baby-registry-checklist";
  return (
    <Button inverse block onClick={() => _redirectTo(checklistLink)}>
      View Your Checklist
    </Button>
  );
};

const _renderRegistryButton = (listType) => {
  const registryLink = listType === "WR"
    ? "/lists/manage-wedding-registry-items"
    : "/lists/manage-baby-registry-items";
  return (
    <Button block onClick={() => _redirectTo(registryLink)}>
      View Your Registry
    </Button>
  );
};

const PostAddToRegistryContent = (props) => {
  const {
    status,
    listType
  } = props;
  if (status === "ERROR") {
    return (
      <h3 className="PostAddToRegistry-error">
        There was an error adding to registry
      </h3>
    );
  }

  return (
    <div className="PostAddToRegistry-container">
      {SUCCESS_HEADER}
      <div className="Grid Grid--gutters PostAddToRegistry-buttons">
        <div className="Grid-col u-size-1-2">
          {_renderChecklistButton(listType)}
        </div>
        <div className="Grid-col u-size-1-2">
          {_renderRegistryButton(listType)}
        </div>
      </div>
    </div>
  );
};

PostAddToRegistryContent.displayName = PostAddToRegistryContent;

PostAddToRegistryContent.propTypes = {
  status: PropTypes.oneOf(["SUCCESS", "ERROR"]).isRequired,
  listType: PropTypes.string.isRequired
};

export default PostAddToRegistryContent;
