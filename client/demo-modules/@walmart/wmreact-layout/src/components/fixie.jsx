/* @flow */
import React from "react";
import ReactDOM from "react-dom";
import classNames from "classnames";

/**
A fixed bar component.
@examples
```jsx
<Fixie>
   <p>Fixed when you scroll past</p>
</Fixie>
```

Fixed at the bottom:

```jsx
<Fixie fixedAtBottom={true}>
  <p>Fixed when you scroll past the bottom</p>
</Fixie>
```

Supporting replaced content when fixed

```jsx
<Fixie fixedContent={<div>Different content when fixed</div>}>
  <p>Content when not fixed</p>
</Fixie>
```

CSS mode to add a class to existing DOM rather than creating new elements. Doesn't support different
fixed content.

```jsx
<Fixie cssMode={true}>
  <p>Content fixed with CSS mode</p>
</Fixie>
```
@component Fixie
@import {Fixie}
@playground
Fixie
```
<div>
  <Fixie>
    <p>Fixed when you scroll past</p>
  </Fixie>

  <Fixie fixedAtBottom={true}>
    <p>Fixed when you scroll past the bottom</p>
  </Fixie>

  <Fixie fixedContent={<div>Different content when fixed</div>}>
    <p>Content when not fixed</p>
  </Fixie>

  <Fixie cssMode={true}>
    <p style={{ margin: 0, textAlign: "right" }}>Content fixed with CSS mode</p>
  </Fixie>
</div>
```
*/
const Fixie = class Fixie extends React.Component {
  constructor(props: Object): void {
    super(props);

    this.state = {
      active: false
    };

    this._checkPosition = this._checkPosition.bind(this);
  }

  componentDidMount(): void {
    window.addEventListener("scroll", this._checkPosition);
    window.addEventListener("resize", this._checkPosition);

    // Defer initial position check to next event loop. Prevents
    // element.getBoundingClientRect() from returning incorrect values while
    // initial render occurs.
    // Keep track of the timer so we can use `clearTimeout` on it, in case the
    // component unmounts before the timeout fires. This will prevent some
    // unnecessary work and React from issuing a warning about `setState` being
    // called on an unmounted component.
    this._initialCheckTimer = window.setTimeout(this._checkPosition, 1);
  }

  componentWillUpdate(nextProps: Object, nextState: Object): void {
    // Set height on wrapper when switching to position fixed to avoid jumpiness
    if (nextProps.cssMode) {
      if (!this.state.active && nextState.active) {
        this.height = ReactDOM.findDOMNode(this).offsetHeight;
      } else if (this.state.active && !nextState.active) {
        this.height = null;
      }
    }
  }

  componentWillUnmount(): void {
    window.removeEventListener("scroll", this._checkPosition);
    window.removeEventListener("resize", this._checkPosition);
    window.clearTimeout(this._initialCheckTimer);
  }

  _checkPosition(): void {
    const isActive = this.props.fixedAtBottom ?
      !(ReactDOM.findDOMNode(this).getBoundingClientRect().bottom > 0) :
      !(ReactDOM.findDOMNode(this).getBoundingClientRect().top >= 0);

    if (this.state.active !== isActive) {
      this.setState({
        active: isActive
      });
    }
  }

  _renderFixie(): ?ReactElement {
    if (!this.state.active) {
      return null;
    }

    return (
      <div className="fixie" ariaHidden>
        {this.props.fixedContent ? this.props.fixedContent : this.props.children}
      </div>
    );
  }

  render(): ReactElement {
    const { children, cssMode } = this.props;
    const { active } = this.state;

    if (cssMode) {
      return (
        <div style={{ height: this.height }}>
          <div className={classNames({ "fixie is-fixed": active })}>
            {children}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div className={classNames({ "u-invisible": active })}>
            {children}
          </div>

          {this._renderFixie()}
        </div>
      );
    }
  }
};

Fixie.propTypes = {
  /**
   The content that should be used when fixed
   */
  fixedContent: React.PropTypes.node,
  /**
   True if it should be fixed at the bottom
   */
  fixedAtBottom: React.PropTypes.bool,
  /**
  True if Fixie should just add CSS classes instead of creating DOM elements
  */
  cssMode: React.PropTypes.bool
};

Fixie.defaultProps = {
  fixedContent: null,
  fixedAtBottom: false,
  cssMode: false
};

export default Fixie;
