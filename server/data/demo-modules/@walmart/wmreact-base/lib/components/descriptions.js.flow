/* @flow */
import React from "react";

import classNames from "classnames";

import DescriptionTerm from "./description-term";
import DescriptionDescription from "./description-description";

/**
Descriptions components family
@examples
```jsx
<Descriptions>
  <Descriptions.Term>Term</Descriptions.Term>
  <Descriptions.Description>Description</Descriptions.Description>
</Descriptions>
```
@component Descriptions
@import {Descriptions}
@playground
Descriptions
```
<Descriptions>
  <Descriptions.Term>Term</Descriptions.Term>
  <Descriptions.Description>Description</Descriptions.Description>
</Descriptions>
```
*/
export default class Descriptions extends React.Component {
  render(): ReactElement {
    const extras = {
      "copy-mini": this.props.copyMini,
      "copy-small": this.props.copySmall,
      "dl-horizontal": this.props.horizontal,
      "dl-emphasize": this.props.emphasize
    };
    return (
      <dl
        className={classNames(
          extras,
          this.props.className,
          this.props.hidden ? "hide-content" : ""
        )}
        {...this.props}
      >
        {this.props.children}
      </dl>
    );
  }
}

Descriptions.displayName = "Descriptions";

Descriptions.propTypes = {
  /**
  True if it should apply `dl-emphasize`
  */
  emphasize: React.PropTypes.bool,
  /**
  True if it should apply `dl-horizontal`
  */
  horizontal: React.PropTypes.bool,
  /**
  True if it should apply `copy-small`
  */
  copySmall: React.PropTypes.bool,
  /**
  True if it should apply `copy-mini`
  */
  copyMini: React.PropTypes.bool,
  className: React.PropTypes.string,
  children: React.PropTypes.node,
  hidden: React.PropTypes.bool
};

Descriptions.defaultProps = {
  emphasize: false,
  horizontal: false,
  copySmall: false,
  copyMini: false
};

Descriptions.Term = DescriptionTerm;
Descriptions.Description = DescriptionDescription;
