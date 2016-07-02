/* @flow */
import React from "react";
import classNames from "classnames";
import Heading from "@walmart/wmreact-base/lib/components/heading";

import {getDataAutomationIdPair} from "@walmart/automation-utils";

/**
About this Collection component
@examples
```
<AboutItem title="collection" description="Lorem <b>ipsum</b>" disclaimer="made in USA" />
```
@return {ReactElement} Element tree
@param {object} props Props
@component AboutItem
@import {AboutItem}
@playground
AboutItem
```
<AboutItem title="collection" description="<div><ul> <li> Visio TV </li> </ul></div>" />
```
*/
export default (props) => {
  const {
    description,
    disclaimer
  } = props;
  const title = props.title || "collection";
  return (
    <div className={classNames("product-about")}>
      <Heading.H1
        {...getDataAutomationIdPair("Title", "AboutThis", process)}
      >
        About this {title}
      </Heading.H1>
      <div
        className="product-description-disclaimer"
        dangerouslySetInnerHTML={{__html: disclaimer}}
        {...getDataAutomationIdPair("Disclaimer", "AboutThis", process)}
      />
      <div
        className={classNames("about-desc")}
        dangerouslySetInnerHTML={{__html: description}}
        {...getDataAutomationIdPair("ShortDescription", "AboutThis", process)}
      />
    </div>
  );
};
