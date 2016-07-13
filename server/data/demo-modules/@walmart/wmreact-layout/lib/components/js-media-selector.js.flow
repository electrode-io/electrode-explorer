/* @flow */
/* eslint max-statements: 0, complexity: 0 */
/*
If you use this component be sure to shim matchMedia for IE8/IE9 compatibility:

https://github.com/paulirish/matchMedia.js/
*/

import React, { Component, PropTypes } from "react";
import { canUseDOM } from "exenv";

const cloneElement = React.cloneElement;
import { WidthWatcher } from "./utils/width-watcher";

const _sizeValues = {
  "x-small": 1,
  "small": 2,
  "medium": 3,
  "large": 4,
  "x-large": 5
};

let _widthWatcher = null;

/**
Media selector is a component that wraps a group of children.
Those children can have a `visibleWidths` prop that defines
when they should be visible. For example, if the child has
`visibleWidths` set to `['small','medium']` then it will only
be visible in small and medium screen widths.

Here is a simple example, where the first child is shown when the
media size is `medium` or above, and the second child is shown only
when the media size is below `medium`.

This components gets updates on the current responsive width
of the screen. We can set the `visibleWidths` prop
to the component and give it an
array of responsive sizes where the component should be seen.
For example `visibleWidths={['small','medium']}` says that this
component should only be visible in small and medium sizes.

In the render method we can use `this.showAtVisibleWidth()`
which will return `true` if the component should be visible at
the current size. Or your can use `this.mediaSelectorStyles()` to
get a styles object that you can apply to the style property on
your top tag.

If you define `onMediaChange` you will get an update any time
the screen size changes.

```jsx
<JSMediaSelector>
  <div visibleAtOrAbove="medium">Shown in medium</div>
  <div visibleBelow="medium">Shown below medium</div>
</JSMediaSelector>
```
@component JSMediaSelector
@synonym responsive
@import {JSMediaSelector}
@playground
JSMediaSelector
```
<JSMediaSelector mode="hide">
  <div visibleWidths={['small']}>Currently in small</div>
  <div visibleWidths={['medium']}>Currently in medium</div>
  <div visibleWidths={['large']}>Currently in large</div>
  <div visibleWidths={['x-large']}>Currently in x-large</div>
  <div visibleWidths={['xx-large']}>Currently in xx-large</div>
  <hr/>

  <div visibleAbove='small'>visibleAbove: Visible in Medium and above</div>
  <div visibleAbove='medium'>visibleAbove: Visible in Large and above</div>
  <hr/>

  <div visibleAtOrAbove='medium'>visibleAtOrAbove: Visible in Medium and above</div>
  <div visibleAtOrAbove='large'>visibleAtOrAbove: Visible in Large and above</div>
  <hr/>

  <div visibleBelow='medium'>visibleBelow: Visible in Small</div>
  <div visibleBelow='large'>visibleBelow: Visible in Small and Medium</div>
  <hr/>

  <div visibleAtOrBelow='small'>visibleAtOrBelow: Visible in Small</div>
  <div visibleAtOrBelow='medium'>visibleAtOrBelow: Visible in Small and Medium</div>
  <hr/>

  <div hiddenAbove='small'>hiddenAbove: Visible in Small</div>
  <div hiddenAbove='medium'>hiddenAbove: Visible in Small and Medium</div>
  <hr/>

  <div hiddenAtOrAbove='medium'>hiddenAtOrAbove: Visible in Small</div>
  <div hiddenAtOrAbove='large'>hiddenAtOrAbove: Visible in Small and Medium</div>
  <hr/>

  <div hiddenBelow='medium'>hiddenBelow: Visible above Small</div>
  <div hiddenBelow='large'>hiddenBelow: Visible above Medium</div>
  <hr/>

  <div hiddenAtOrBelow='medium'>hiddenAtOrAbove: Visible in Large</div>
  <div hiddenAtOrBelow='large'>hiddenAtOrAbove: Visible above Large</div>
</JSMediaSelector>
```
*/
class JSMediaSelector extends Component {
  constructor(props, context) {
    super(props, context);

    if (_widthWatcher === null) {
      _widthWatcher = new WidthWatcher();
    }

    const width = canUseDOM ?
      _widthWatcher.width : this._getWidthFromProps(props, context);

    this.state = { width };
  }

  _getWidthFromProps(props, context): string {
    if (context.serverWidth) {
      return this._checkServerWidth(context.serverWidth);
    } else if (props.serverWidth) {
      return this._checkServerWidth(props.serverWidth);
    } else {
      return "x-large";
    }
  }

  componentDidMount(): void {
    if (_widthWatcher && canUseDOM) {
      _widthWatcher.addSubscriber(this);
    }
  }

  componentWillUnmount(): void {
    if (_widthWatcher && canUseDOM) {
      _widthWatcher.removeSubscriber(this);
    }
  }

  updateWidth(width: number): void {
    this.setState({width});
    if (this.onMediaChange) {
      this.onMediaChange();
    }
  }

  showAtVisibleWidth(): boolean {
    let show = true;
    if (this.props.visibleWidths) {
      show = false;
      for (const s in this.props.visibleWidths) {
        if (this.props.visibleWidths[s] === this.state.width) {
          show = true;
        }
      }
    }
    return show;
  }

  mediaSelectorStyles(): Object {
    return this.showAtVisibleWidth() ? {} : {display: "none"};
  }

  _checkServerWidth(width: string): string {
    let name = "x-small";
    const checkOrder: Array<string> = ["small", "medium", "large", "x-large"];
    const serverSizeMap = {
      "small": 480,
      "medium": 768,
      "large": 1024,
      "x-large": 1364
    };
    for (const c of checkOrder) {
      if (parseInt(width) >= serverSizeMap[c]) {
        name = c;
      }
    }
    return name;
  }

  onMediaChange(): void {
    if (this.props.onChange) {
      this.props.onChange();
    }
  }

  _renderByMedia(child: ReactElement): ?ReactElement {
    let hide = false;
    const curWidth = this.state.width || this.props.default;
    if (child.props.visibleWidths) {
      hide = true;
      for (const s in child.props.visibleWidths) {
        if (child.props.visibleWidths[s] === curWidth) {
          hide = false;
        }
      }
    }

    const wi = _sizeValues[curWidth];
    if (child.props.visibleAbove) {
      hide = (wi <= _sizeValues[child.props.visibleAbove]);
    }
    if (child.props.visibleAtOrAbove) {
      hide = (wi < _sizeValues[child.props.visibleAtOrAbove]);
    }

    if (child.props.visibleBelow) {
      hide = (wi >= _sizeValues[child.props.visibleBelow]);
    }
    if (child.props.visibleAtOrBelow) {
      hide = (wi > _sizeValues[child.props.visibleAtOrBelow]);
    }

    if (child.props.hiddenAbove) {
      hide = (wi > _sizeValues[child.props.hiddenAbove]);
    }
    if (child.props.hiddenAtOrAbove) {
      hide = (wi >= _sizeValues[child.props.hiddenAtOrAbove]);
    }

    if (child.props.hiddenBelow) {
      hide = (wi < _sizeValues[child.props.hiddenBelow]);
    }
    if (child.props.hiddenAtOrBelow) {
      hide = (wi <= _sizeValues[child.props.hiddenAtOrBelow]);
    }

    if (this.props.mode === "delete") {
      return hide ? null : child;
    } else {
      const attrs = {};
      if (hide) {
        attrs.style = {display: "none"};
      }
      return cloneElement(child, attrs);
    }
  }

  render(): ReactElement {
    return (
      <div className={this.props.hidden ? "hide-content" : ""}>
        {React.Children.map(this.props.children, this._renderByMedia.bind(this))}
      </div>
    );
  }
}

JSMediaSelector.displayName = "JSMediaSelector";

JSMediaSelector.defaultProps = {
  onChange: () => {},
  mode: "delete",
  "default": "small"
};

JSMediaSelector.contextTypes = {
  serverWidth: PropTypes.string
};

JSMediaSelector.propTypes = {
  /**
   * Children to render in the container
   */
  children: PropTypes.node,
  /**
   An event fired when the media width changes
   */
  onChange: PropTypes.func,
  /**
   Selects between either `hide`ing the childrens on not displaying them (i.e. `delete`)
   */
  mode: PropTypes.oneOf(["hide", "delete"]),
  /**
   Array of widths strings
   */
  visibleWidths: PropTypes.arrayOf(PropTypes.oneOf(["x-small",
    "small",
    "medium",
    "large",
    "x-large",
    "xx-large"])),
  hidden: PropTypes.bool,
  serverWidth: PropTypes.string,
  /**
   Sets the default media width for server rendering
   */
  "default": PropTypes.string
};

export default JSMediaSelector;
