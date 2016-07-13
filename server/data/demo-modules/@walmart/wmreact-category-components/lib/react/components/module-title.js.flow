import React, {PropTypes} from "react";
import Arrange from "@walmart/wmreact-layout/lib/components/arrange";
import Link from "@walmart/wmreact-base/lib/components/link";
import Icon from "@walmart/wmreact-base/lib/components/icon";
import { getTempoModuleAutomationId } from "@walmart/category-utils";

const _renderLink = (linkText, linkUrl) => {
  return (
    !linkUrl ? null :
      <Arrange.Fit noWrap={true}>
        <Link className="ModuleTitle-link" href={linkUrl}>
          {linkText}
          <Icon name="angle-right" className="ModuleTitle-icon"/>
        </Link>
      </Arrange.Fit>
  );
};

/**
A component for responsively inline displaying a heading and link
@examples
```jsx
<ModuleTitle title="Sample Title"
  linkText="See more"
  linkUrl="http://sampleLink" />
```
@component ModuleTitle
@import {ModuleTitle}
@playground
```
<ModuleTitle title="Sample Title"
  linkText="See more"
  linkUrl="http://sampleLink" />
```
*/

const ModuleTitle = ({moduleType, linkText, linkUrl, title}) => {
  return (
    <div className="ModuleTitle"
      {...getTempoModuleAutomationId(moduleType, process)}>
      <Arrange middle={true}>
        <Arrange.Fill>
          <h5 className="ModuleTitle-heading">{title}</h5>
        </Arrange.Fill>
        {_renderLink(linkText, linkUrl)}
      </Arrange>
    </div>
  );
};

ModuleTitle.propTypes = {
  /**
  Tempo module type for analytics and automation testing
  */
  moduleType: PropTypes.string,
  /**
  Module title link text
  */
  linkText: PropTypes.string,
  /**
  Module title link URL
  */
  linkUrl: PropTypes.string,
  /**
  Module title heading text
  */
  title: PropTypes.string.isRequired
};

ModuleTitle.defaultProps = {
  moduleType: "ModuleTitle",
  linkText: "See all",
  linkUrl: ""
};

export default ModuleTitle;
