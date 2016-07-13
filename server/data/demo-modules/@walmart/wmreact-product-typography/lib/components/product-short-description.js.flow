import React from "react";
import Button from "@walmart/wmreact-interactive/lib/components/button";
import isEmpty from "lodash/isEmpty";
import classNames from "classnames";
/**
  Display the short description an an anchor link to
 the long description.section

 For example this is how we use this component.

 ```jsx
 <ProductShortDescription
 moreInfoLabel="More about this item..."
 content={"<li>Plugs into your HDTV<li>Streams media from laptops, tablets and smartphones"}/>
 ```

 @return {ReactElement} Element tree
 @param {object} props Props
 @import {ProductShortDescription}
 @flags noVisibleRender
 @component ProductShortDescription
 @playground
 ProductShortDescription
 ```
 <ProductShortDescription
 moreInfoLabel="More about this item..."
 content={"<li>Plugs into your HDTV<li>Streams media from laptops, tablets and smartphones"} />
 ```
 */
const ProductShortDescription = (props) => {
  const _getContentComp = (content) => {
    // TODO: check with core team on this one.
    return (
      <div
        className="prod-ProductShortDescription-content"
        dangerouslySetInnerHTML= {{__html: content}}
      />
    );
  };

  const _getMoreInfoComp = (onClick, moreInfoLabel) => {
    return (<div className="prod-PositionedAbsolute prod-ProductShortDescription-info">
        <Button fakelink={true} onClick={onClick}>
            {moreInfoLabel}
        </Button>
      </div>);
  };

  const _getShortDescriptionElClasses = (className, big) => {
    return classNames("prod-ProductShortDescription",
      "prod-PositionedRelative",
      { "copy-small": !big },
      className);
  };

  const {
    className,
    content,
    onClick,
    moreInfoLabel,
    big,
    removeMoreInfoLabel,
    ...rest
  } = props;

  if (isEmpty(content)) {
    return null;
  }

  return (
    <div
      className={_getShortDescriptionElClasses(className, big)}
      {...rest}
    >
      {_getContentComp(content)}
      {removeMoreInfoLabel ? null : _getMoreInfoComp(onClick, moreInfoLabel)}
    </div>
  );
};

ProductShortDescription.displayName = "ProductShortDescription";

ProductShortDescription.propTypes = {
  /**
   The content aka the short descrition of the product.
   */
  "content": React.PropTypes.string,
  /**
   Label for the long description link.
   */
  "moreInfoLabel": React.PropTypes.string,
  /**
   Additional css classes that can be applied to the element.
   */
  "className": React.PropTypes.string,
  /**
   Onclick handler for more info button.
  */
  "onClick": React.PropTypes.func,
  /**
   Use larger font size
  */
  "big": React.PropTypes.bool,
  /**
  A flag that determines if the more info label should be removed
  */
  "removeMoreInfoLabel": React.PropTypes.bool
};

ProductShortDescription.defaultProps = {
  "content": "",
  "moreInfoLabel": "More about this item...",
  "className": "",
  "onClick": () => {},
  "big": false,
  "removeMoreInfoLabel": false
};

export default ProductShortDescription;
