/* eslint react/prop-types: 0 */
import React from "react";
import classNames from "classnames";

const REGEX = /\W/g;
const HYPHEN = "-";
const TOPIC = "/tp/";

/**
This component displays the product brand as a link. Clicking
on the brand link takes user to the topic page

```jsx
<ProductBrand name="samsung tv"/>
```

@return {ReactElement} Element tree
@param {object} props Props
@import {ProductBrand}
@flags noVisibleRender
@component ProductBrand
@playground
Brand
```
<ProductBrand name="samsung tv"/>
```
*/
export default (props) => {
  const _getCanonicalTopicId = (brandName) => {
    if (brandName) {
      return brandName.trim().replace(REGEX, HYPHEN);
    }
    return brandName;
  };

  const _getTopicUrl = (brandName) => TOPIC + _getCanonicalTopicId(brandName);

  const _getBrandElClasses = () => classNames("prod-BrandName", props.className);

  const topicUrl = _getTopicUrl(props.name);
  return (
    <a href={topicUrl} className={_getBrandElClasses()}>
      <span>
        {props.name}
      </span>
    </a>
  );
};
