/* @flow */
import React, { Component } from "react";

import classNames from "classnames";

/**
An expandable/contractable container.
@examples
```jsx
<Expander expandText="Expand">
  <h1>Expanded!</h1>
</Expander>
```
@component Expander
@import {Expander}
@playground
Expander
```
<Expander expandText="Expand">
  <h1>Expanded!</h1>
</Expander>
```
*/
class Expander extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: props.expanded || false
    };
    this._onExpand = this._onExpand.bind(this);
  }

  componentWillReceiveProps(nextProps: Object): void {
    if (nextProps.expanded) {
      this.setState({expanded: nextProps.expanded});
    }
  }

  _onExpand(e: Object): void {
    e.preventDefault();
    this.setState({expanded: !this.state.expanded});
  }

  render(): ReactElement {
    const extras = {
      "expanded": this.state.expanded
    };

    return (
      <div
        className={classNames(
          "expander",
          extras,
          this.props.hidden ? "hide-content" : "",
          this.props.className
        )}
        {... this.props}>
        <a className="expander-toggle" href="#" onClick={this._onExpand}>
          {this.props.expandText}
        </a>
        <div className="expander-content module">
          {this.props.children}
        </div>
      </div>
    );
  }
}

Expander.displayName = "Expander";

Expander.propTypes = {
  /**
  True if the container is expanded
  */
  expanded: React.PropTypes.bool,
  /**
  The text for the expand control
  */
  expandText: React.PropTypes.node,
  className: React.PropTypes.string,
  children: React.PropTypes.node,
  hidden: React.PropTypes.bool
};

Expander.defaultProps = {
  expanded: false
};

export default Expander;
