/* @flow */
import React from "react";
import classNames from "classnames";
import Heading from "@walmart/wmreact-base/lib/components/heading";
import Collapsable from "@walmart/wmreact-layout/lib/components/collapsable";
import fireUIEvent from "@walmart/wmreact-analytics/lib/helpers/fire-ui-event";

/**
The container class for the accordion items.
@import Accordion
@component Accordion.Item
@references Accordion
@playground
```
<Accordion.Item title="Step 1">
  <h1>First Step Content</h1>
</Accordion.Item>
```
*/
export default React.createClass({
  displayName: "Accordion.Item",

  contextTypes: {
    analytics: React.PropTypes.object
  },

  propTypes: {
    /**
    The title
    */
    title: React.PropTypes.string.isRequired,
    /**
    The index if you want to set the number manually
    */
    index: React.PropTypes.number,
    /**
    True if this is the active accordion item
    */
    active: React.PropTypes.bool,
    /**
    True if the item is open
    */
    open: React.PropTypes.bool,
    /**
    An optional title button if you want to use a button instead of text
    */
    titleButton: React.PropTypes.node,
    /**
    Optional extra material in the title area if you want it.
    */
    titleExtra: React.PropTypes.node,
    /**
    The edit button if you want one
    */
    editButton: React.PropTypes.node,
    /**
    An event callback for a click on the title bar.
    */
    onClick: React.PropTypes.func.isRequired,
    /**
    Set to true if this step has been completed.
    */
    completed: React.PropTypes.bool,
    /**
    Title for when the step is completed.
    */
    titleCompleted: React.PropTypes.node,
    children: React.PropTypes.node,
    /**
    An optional automation ID
    */
    automationId: React.PropTypes.string,
    hidden: React.PropTypes.bool
  },

  getDefaultProps(): any {
    return {
      active: true,
      index: null,
      titleButton: null,
      titleExtra: null,
      open: false,
      onClick: () => {}
    };
  },

  _onClick(event: Object):void {
    fireUIEvent(this, event);
    this.props.onClick(event);
  },

  _renderHeader(): ReactElement {
    if (!this.props.completed) {

      const wrapperClasses = classNames(
        "clearfix zeus-accordion-header",
        {"zeus-pickup-header-expanded": this.props.active}
      );

      const headerNumberClasses = classNames(
        "zeus-accordion-number",
        this.props.active ? "zeus-accordion-number-active" : "zeus-accordion-number-inactive"
      );

      const headingClasses = classNames(
        "zeus-header-title",
        {"zeus-accordion-inactive": !this.props.active}
      );

      return (
        <div className={wrapperClasses}>
          <div className="zeus-block zeus-accordion-header-title zeus-accordion-header-icon-text">
            <b className={headerNumberClasses}>
              {this.props.index}
            </b>
            <Heading.H4 className={headingClasses}>
              {this.props.title}
            </Heading.H4>
          </div>
        </div>
      );
    } else {
      return (
        <div className="clearfix zeus-accordion-header">

          <div className="zeus-block zeus-accordion-header-title zeus-accordion-header-icon-text">
            <b className="zeus-accordion-number zeus-accordion-check">
              <i className="wmicon wmicon-ok"></i>
            </b>
            <Heading.H4 className="zeus-header-title zeus-header-title-completed">
              {this.props.titleCompleted}
            </Heading.H4>
            {this.props.titleExtra}
          </div>
          <span className="zeus-edit-accordion">
            {this.props.editButton}
          </span>
        </div>
      );
    }
  },

  render(): ReactElement {
    const classes = classNames(
        "clearfix zeus-accordion-item zeus-content",
        {"zeus-expanded": this.props.open}
      );

    return (
      <li onClick={this._onClick}
        className={this.props.hidden ? "hide-content" : ""}
        data-automation-id={this.props.automationId}>
        {this._renderHeader()}
        <Collapsable
          ref="accordionContent"
          isOpen={this.props.open}
          className={classes}>
          {this.props.children}
        </Collapsable>
      </li>
    );
  }
});
