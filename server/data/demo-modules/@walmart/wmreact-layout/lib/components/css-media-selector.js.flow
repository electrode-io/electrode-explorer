/* @flow */
import React from "react";
import classNames from "classnames";

/**
Media selector is a component that wraps a group of children.
Those children can have a `visibleWidths` prop that defines
when they should be visible. For example, if the child has
`visibleWidths` set to `['small','medium']` then it will only
be visible in small and medium screen widths.

Here is a simple example, where the first child is shown when the
media size is `medium` or above, and the second child is shown only
when the media size is below `medium`.

```jsx
<CSSMediaSelector>
  <div visibleAtOrAbove="medium">Shown in medium</div>
  <div visibleBelow="medium">Shown below medium</div>
</CSSMediaSelector>
```
@component CSSMediaSelector
@synonym responsive
@import {CSSMediaSelector}
@playground
CSSMediaSelector
```
<CSSMediaSelector mode="hide">
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
</CSSMediaSelector>
```
*/
export default class CSSMediaSelector extends React.Component {
  constructor(props:Object) {
    super(props);
    this._addClasses = this._addClasses.bind(this);
  }

  _mapHiddens(visible:Array, props:Object, sizeToIndex:Object): Array {
    if (props.hiddenAtOrBelow) {
      visible = visible.map((v, index) => index > sizeToIndex[props.hiddenAtOrBelow]);
    }
    if (props.hiddenBelow) {
      visible = visible.map((v, index) => index >= sizeToIndex[props.hiddenBelow]);
    }
    if (props.hiddenAtOrAbove) {
      visible = visible.map((v, index) => index < sizeToIndex[props.hiddenAtOrAbove]);
    }
    if (props.hiddenAbove) {
      visible = visible.map((v, index) => index <= sizeToIndex[props.hiddenAbove]);
    }
    return visible;
  }

  _mapVisibles(visible:Array, props:Object, sizeToIndex:Object): Array {
    if (props.visibleAtOrBelow) {
      visible = visible.map((v, index) => index <= sizeToIndex[props.visibleAtOrBelow]);
    }
    if (props.visibleBelow) {
      visible = visible.map((v, index) => index < sizeToIndex[props.visibleBelow]);
    }
    if (props.visibleAtOrAbove) {
      visible = visible.map((v, index) => index >= sizeToIndex[props.visibleAtOrAbove]);
    }
    if (props.visibleAbove) {
      visible = visible.map((v, index) => index > sizeToIndex[props.visibleAbove]);
    }
    return visible;
  }

  _buildVisibilityMaps(child: Object, breakpoints:Object): Array {
    const sizeToIndex = {};
    const sizes = [];
    breakpoints.forEach((breakpoint, index) => {
      sizes.push(breakpoint.name);
      sizeToIndex[breakpoint.name] = index;
    });

    let visible = sizes.map(() => true);

    visible = this._mapHiddens(visible, child.props, sizeToIndex);
    visible = this._mapVisibles(visible, child.props, sizeToIndex);

    if (child.props.visibleWidths) {
      visible = sizes.map(() => false);
      child.props.visibleWidths.forEach((width) => {
        visible[sizeToIndex[width]] = true;
      });
    }

    return visible;
  }

  _findTransitions(visible:Array): Object {
    let state = false;
    const transitions = [];
    visible.forEach((v, index) => {
      if (state !== v) {
        transitions.push(index);
        state = v;
      }
    });
    return transitions;
  }

  _addClasses(child: Object, key: number): ReactElement {
    const visible = this._buildVisibilityMaps(child, this.props.breakpoints);
    const transitions = this._findTransitions(visible);

    const additionalClasses = [];

    if (transitions.length === 0) {
      additionalClasses.push(this.props.formatAll());
    } else if (transitions.length === 1) {
      if (transitions[0] > 0) {
        additionalClasses.push(this.props.formatBelow(this.props.breakpoints[
          transitions[0]
        ]));
      }
    } else if (transitions.length === 2) {
      if (transitions[0] > 0) {
        additionalClasses.push(this.props.formatBelow(this.props.breakpoints[
          transitions[0]
        ]));
      }
      additionalClasses.push(this.props.formatAbove(this.props.breakpoints[
        transitions[1]
      ]));
    } else {
      visible.forEach((v, index) => {
        if (v === false) {
          additionalClasses.push(this.props.formatAt(this.props.breakpoints[index]));
        }
      });
    }

    const className = classNames(
      additionalClasses,
      child.props.className
    );

    return React.cloneElement(child, {
      key,
      className
    });
  }

  render(): ReactElement {
    const {className, children} = this.props;
    return (
      <span className={className}>
        {React.Children.map(children, this._addClasses)}
      </span>
    );
  }
}

CSSMediaSelector.propTypes = {
  /**
  Formats hidden below classnames
  */
  formatBelow: React.PropTypes.func,
  /**
  Formats hidden above classnames
  */
  formatAbove: React.PropTypes.func,
  /**
  Formats hidden at classnames
  */
  formatAt: React.PropTypes.func,
  /**
  Formats hidden at all breakpoints classname
  */
  formatAll: React.PropTypes.func,
  /**
  The available breakpoints from the CSS framework
  */
  breakpoints: React.PropTypes.array,
  className: React.PropTypes.string,
  children: React.PropTypes.node
};

CSSMediaSelector.defaultProps = {
  formatBelow: (breakpoint) => breakpoint.hideBelow,
  formatAbove: (breakpoint) => breakpoint.hideAbove,
  formatAt: (breakpoint) => breakpoint.hideAt,
  formatAll: () => "hide-content",
  breakpoints: [
    {
      name: "x-small",
      hideBelow: "hide-content-max-xs",
      hideAbove: "hide-content-xs",
      hideAt: "hide-content-max-xs"
    },
    {
      name: "small",
      hideBelow: "hide-content-max-s",
      hideAbove: "hide-content-s",
      hideAt: "hide-content-xs hide-content-max-m"
    },
    {
      name: "medium",
      hideBelow: "hide-content-max-m",
      hideAbove: "hide-content-m",
      hideAt: "hide-content-max-s hide-content-m"
    },
    {
      name: "large",
      hideBelow: "hide-content-max-l",
      hideAbove: "hide-content-l",
      hideAt: "hide-content-max-m hide-content-xl"
    },
    {
      name: "x-large",
      hideBelow: "hide-content-max-xl",
      hideAbove: "hide-content-xl",
      hideAt: "hide-content-xl"
    }
  ]
};
