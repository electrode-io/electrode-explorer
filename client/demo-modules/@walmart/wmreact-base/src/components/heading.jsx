/* @flow */
import React from "react";
import classNames from "classnames";
import assign from "object-assign";

const headerMapping = {
  h1: "heading-a",
  h2: "heading-b",
  h3: "heading-c",
  h4: "heading-d",
  h5: "heading-e",
  h6: "heading-f"
};

const headingComponents = {};

const createClass = (h) => React.createClass({
  displayName: "Heading",
  propTypes: {
    className: React.PropTypes.string,
    children: React.PropTypes.node,
    hidden: React.PropTypes.bool
  },
  mixins: [React.PureRenderMixin],
  render(): ReactElement {
    const headerClass = headerMapping[h];
    const {
      className,
      children,
      ...headingProps
    } = this.props;
    const classes = classNames(className, headerClass, this.props.hidden ? "hide-content" : "");
    const propsToAssign = assign({ className: classes }, headingProps);
    return React.createElement(h, propsToAssign, children);
  }
});

for (const h in headerMapping) {
  headingComponents[h.toUpperCase()] = createClass(h);
}

export default headingComponents;
