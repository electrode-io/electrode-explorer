import React, {PropTypes} from "react";
import Revealer from "@walmart/wmreact-interactive/lib/components/revealer";
import { moduleTypes as ModuleTypes, getTempoModuleAutomationId } from "@walmart/category-utils";

/**
Expandable HTML and text
@examples
```jsx
<ExpandableHtmlText
  markup="<b>Pioneer Woman Cookware</b><p>Walmart.com is proud to offer cooking products." />
```
@component ExpandableHtmlText
@import {ExpandableHtmlText}
@playground
```
<ExpandableHtmlText
  markup="<b>Pioneer Woman Cookware</b><p>Walmart.com is proud to offer cooking products." />
```
*/

const ExpandableHtmlText = (props) => {
  return (
    <div className="ExpandableHtmlText"
      {...getTempoModuleAutomationId(props.moduleType, process)}>
      <Revealer {...props}>
        <div className="ExpandableHtmlText-markup"
          dangerouslySetInnerHTML={{__html: props.markup}}/>
      </Revealer>
    </div>
  );
};

ExpandableHtmlText.displayName = "ExpandableHtmlText";

ExpandableHtmlText.propTypes = {
  baseHeight: PropTypes.number,
  defaultOpen: PropTypes.bool,
  disableClose: PropTypes.bool,
  markup: PropTypes.string,
  moduleType: PropTypes.string,
  readMore: PropTypes.bool
};

ExpandableHtmlText.defaultProps = {
  baseHeight: 187,
  defaultOpen: false,
  disableClose: false,
  moduleType: ModuleTypes.SEO_CUSTOM_HTML,
  readMore: true
};

export default ExpandableHtmlText;
