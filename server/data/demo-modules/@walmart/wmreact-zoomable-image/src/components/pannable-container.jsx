import React, { PropTypes } from "react";
import classNames from "classnames";
import ElementPan from "react-element-pan";
import { get } from "lodash/object";
import { isEmpty } from "lodash/lang";

/**
A component for allowing panning of DOM-elements too large for their container.
This component is just a wrapper around the react-element-pan component.
This component just adds a componentDidUpdate method to adjust the, scrollLeft
and scrollTop position.
```jsx
<PannableContainer
  width={300}
  height={300}>
  <SpinnerImage
    style={{display:"block", width:500, height:500, maxWidth:"inherit"}}
    src="http://i5.walmartimages.com/dfw/dce07b8c-3b27/
k2-_afa12da1-f17a-4ace-a8ae-8820733e5e0d.v1.jpg"/>
</PannableContainer>
```
@import {PannableContainer}
@flags noVisibleRender
@component PannableContainer
@playground
PannableContainer
```
<PannableContainer
  width={300}
  height={300}>
  <SpinnerImage
    style={{display:"block", width:500, height:500, maxWidth:"inherit"}}
    src="http://i5.walmartimages.com/dfw/dce07b8c-3b27/
k2-_afa12da1-f17a-4ace-a8ae-8820733e5e0d.v1.jpg"/>
</PannableContainer>
```
*/

class PannableContainer extends ElementPan {
  // TODO: intentionally overriding the ElementPan
  // componentDidMount function. to add a null check
  // condition at the first if block. I will open
  // a PR soon on the main repo
  // JIRA: https://jira.walmart.com/browse/GPRDT-638
  componentDidMount() {
    // Cached for faster lookup
    this.el = this.refs.container;

    // Old versions of React doesn't return the raw DOM node
    if (!(this.el instanceof window.Node) && this.el) {
      this.el = this.el.getDOMNode();
    }

    if (this.props.startX) {
      this.el.scrollLeft = this.props.startX;
    }

    if (this.props.startY) {
      this.el.scrollTop = this.props.startY;
    }
  }

  componentDidUpdate() {
    // When the component updates, reset
    // the scrollLeft and scrollTop such that
    // the children are positioned at the specified scrolling position
    // of the containers viewport (usually needed for centering content).
    const {scrollLeft, scrollTop, scrollContentOnUpdate} = this.props;
    const container = get(this, "_viewport.refs.container", {});
    if (!isEmpty(container) && scrollContentOnUpdate) {
      container.scrollLeft = scrollLeft;
      container.scrollTop = scrollTop;
    }
  }

  getScrollTop() {
    const container = get(this, "_viewport.refs.container", {});
    if (!isEmpty(container)) {
      return container.scrollTop;
    }
    return 0;
  }

  getScrollLeft() {
    const container = get(this, "_viewport.refs.container", {});
    if (!isEmpty(container)) {
      return container.scrollLeft;
    }
    return 0;
  }

  _getElementPanClasses() {
    return classNames("PannableContainer-viewport", this.props.className);
  }

  render() {
    return (
      <ElementPan
        ref={(viewport) => this._viewport = viewport}
        className={this._getElementPanClasses()}
        width={this.props.width}
        height={this.props.height}>
        {this.props.children}
      </ElementPan>
    );
  }
}

PannableContainer.displayName = "PannableContainer";

PannableContainer.propTypes = {
  /**
    The children elements within the pannable container
  */
  "children": PropTypes.element.isRequired,
  /**
    The width of the container.
  */
  "width": PropTypes.number.isRequired,
  /**
    The height of the container.
  */
  "height": PropTypes.number.isRequired,
  /**
    scrollLeft position of the container
  */
  "scrollLeft": PropTypes.number,
  /**
    scrollTop position of the container
  */
  "scrollTop": PropTypes.number,
  /**
    When set to true, scroll the children to the specified
    scrollLeft and scrollTop upon component update.
  */
  "scrollContentOnUpdate": PropTypes.bool,
  /**
    Additional css classNames passed into the component.
  */
  "className": PropTypes.string
};

PannableContainer.defaultProps = {
  "scrollLeft": 0,
  "scrollTop": 0,
  "scrollContentOnUpdate": false,
  "className": ""
};
export default PannableContainer;
