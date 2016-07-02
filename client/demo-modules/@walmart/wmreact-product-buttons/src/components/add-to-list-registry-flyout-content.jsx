import React, { PropTypes } from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";

/**
 A component that renders the registry or wish lists of a user.

 An example usage:

 ```jsx
 <AddToListRegistryFlyoutContent heading="Add to:"
  onListItemSelected={(type) => console.log(type)}
  listItems={[{name: "Baby registry", type: "BR"},
  {name: "Wedding registry", type: "WR"}]}/>
 ```

 @import {AddToListRegistryFlyoutContent}
 @flags noVisibleRender
 @component AddToListRegistryFlyoutContent
 @playground
 AddToListRegistryFlyoutContent
 ```
 <AddToListRegistryFlyoutContent heading="Add to:"
  onListItemSelected={(type) => console.log(type)}
  listItems={[{name: "Baby registry", type: "BR"},
  {name: "Wedding registry", type: "WR"}]}/>
 ```
 */

const _renderList = ({listItems, onListItemSelected}) => {
  if (listItems) {
    return listItems.map((listItem, index) => {
      const autoId = `addToListOrRegistry-${index}`;
      return (
        <li className="AddToListOrRegistry-listItem" key={autoId}>
          <Button fakelink
            onClick={() => {onListItemSelected(listItem.type);}}
            automationId={autoId}>
            {listItem.name}
          </Button>
        </li>
      );
    });
  }
};

const _renderHeading = (heading) => {
  return (
    <h5 className="AddToListOrRegistry-heading heading-e no-margin">
      {heading}
    </h5>
  );
};

const AddToListRegistryFlyoutContent = (props) => {
  const {
    heading,
    ...rest
  } = props;
  return (
    <div className="AddToListOrRegistry-container">
      {_renderHeading(heading)}
      <div>
        <ul className="AddToListOrRegistry-list no-margin block-list">
          {_renderList(rest)}
        </ul>
      </div>
    </div>
  );
};

AddToListRegistryFlyoutContent.displayName = "AddToRegistryFlyoutContent";

AddToListRegistryFlyoutContent.propTypes = {
  /**
  Title for the container
  */
  heading: PropTypes.string,
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
  })).isRequired,
  /**
  Callback to handle list or registry selection
  */
  onListItemSelected: PropTypes.func.isRequired
};

AddToListRegistryFlyoutContent.defaultProps = {
  heading: "Add item to:"
};

export default AddToListRegistryFlyoutContent;
