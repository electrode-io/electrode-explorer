import React, { PropTypes, Children } from "react";

const getItemClass = (numberSections) => {
  return `list-item size-1-${numberSections} display-inline-block`;
};

/**
List of images.
@param {object} props - React properties
@returns {ReactElement} The rendered component
@examples
```jsx
<ImageList separator={(<span>&amp;,</span>)}>
  <div>Item 1</div>
  <div>Item 2</div>
</ImageList>
```
@component ImageList
@import {ImageList}
@playground
ImageList
```
<ImageList separator={(<span>&amp;,</span>)}>
  <div>Item 1</div>
  <div>Item 2</div>
</ImageList>
```
*/
const ImageList = (props) => {
  const {
    separator,
    children,
    ...rest
  } = props;

  return (
    <div className="bundle-image-list static-list">
      {Children.map(children, (child, index) => [
        (index ? <div className="list-separator display-inline-block"
          key={`separator-${index}`}>{(separator)}</div> : null),
        (<div className={getItemClass(children.length)}
          key={`item-${index}`}>{child}</div>)
      ])}
    </div>
  );
};

ImageList.propTypes = {
  separator: PropTypes.element
};

ImageList.defaultProps = {
  separator: (<span className="plus-sign display-inline-block">+</span>)
};

export default ImageList;
