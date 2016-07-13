import React from "react";
import Heading from "@walmart/wmreact-base/lib/components/heading";
import TextTruncate from "./text-truncate";
import classNames from "classnames";

/**
The product title or name for a give product.
Per UX spec, this title has a font-size of 18px by default, 20px on breakpoint-s
and 25px font-size on breakpoint-m or above.

For example this is how we use this component.

```jsx
<ProductTitle title="MagLite 4 D-Cell Flashlight"/>
```

@return {ReactElement} Element tree
@param {object} props Props
@import {ProductTitle}
@flags noVisibleRender
@component ProductTitle
@playground
ProductTitle
```
<ProductTitle title="Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Curabitur volutpat efficitur nisi. Mauris sodales, elit quis varius tincidunt,
elit justo." maxLines={2}/>
```
*/

const ProductTitle = (props) => {
  const _getTitleElClasses = (className) => {
    const truncated = props.maxLines ? "truncated" : "";
    return classNames("prod-ProductTitle", "no-margin", truncated, className);
  };

  const _getTitle = (title, maxLines, doInsertHTMLTitle) => {
    return maxLines > 0 ?
      <TextTruncate
        line={maxLines}
        text={title}
        doInsertHTMLTitle={doInsertHTMLTitle} />
        : <div dangerouslySetInnerHTML={{__html: title}} />;
  };

  const {
    title,
    className,
    big,
    maxLines,
    doInsertHTMLTitle,
    ...rest
  } = props;
  const TitleHeading = big ? Heading.H1 : Heading.H2;
  return (
    <TitleHeading
      className={_getTitleElClasses(className)}
      {...rest}
    >
      {_getTitle(title, maxLines, doInsertHTMLTitle)}
    </TitleHeading>
  );
};

ProductTitle.displayName = "ProductTitle";

ProductTitle.propTypes = {
  /**
    The name or title of the product.
    */
  "title": React.PropTypes.string.isRequired,
  /**
   Any additional css classes that needs to be applied
   to the root element.
   */
  "className": React.PropTypes.string,
  /**
   Use larger font size
  */
  "big": React.PropTypes.bool,
  /**
  Max number of lines to show before truncating
  */
  "maxLines": React.PropTypes.number,
  /**
  A flag to enable title rendering using inner html
  */
  "doInsertHTMLTitle": React.PropTypes.bool
};

ProductTitle.defaultProps = {
  "className": "",
  "big": false,
  "doInsertHTMLTitle": false
};

export default ProductTitle;
