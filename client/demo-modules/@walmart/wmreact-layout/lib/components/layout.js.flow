/* @flow */
import React, { Component, PropTypes } from "react";
import classNames from "classnames";
import getColumnMap from "./utils/map-columns";

/**
A layout manager that makes it easy to build responsive layouts with different
numbers of columns at different breakpoints.
@examples
This layout is one column in `x-small` media size, and three columns
in `medium` and above.

```jsx
<Layout x-small={1} medium={3}>
  <div>A</div><div>B</div><div>C</div>
</Layout>
```

And this layout is one column in `x-small` media size, and three columns
in `medium` where the columns are 2, 8 and 2 wide (using the 12 grid layout
sizing).

```jsx
<Layout x-small={1} medium-sizes={[2,8,2]}>
  <div>A</div><div>B</div><div>C</div>
</Layout>
```
@import {Layout}
@component Layout
@flags noVisibleRender
@synonym responsive
@playground
Layout
```
<Layout large={4} medium={3} small={2} x-small={1} padded={true}>
  <div style={{background:'#ccc',padding:'1rem'}}>A</div>
  <div style={{background:'#aaa',padding:'1rem'}}>B</div>
  <div style={{background:'#ccc',padding:'1rem'}}>C</div>
</Layout>
```
*/
class Layout extends Component {
  layoutChildren(children: Array<ReactElement>, options:Object, className: string) {
    const cMap = getColumnMap(options, "sizes");
    const coMap = getColumnMap(options, "offsets");

    const wrappedChildren = React.Children.map(children,
      (child: ReactElement, index: number) => {
        const classes = className ? [className] : [];
        classes.push("Grid-col");
        for (const k in cMap) {
          if (cMap[k][index % cMap[k].length] === 12) {
            classes.push(`u-size-1${k}`); // there is no 12-12 class
          } else {
            classes.push(`u-size-${cMap[k][index % cMap[k].length]}-12${k}`);
          }
        }
        for (const k in coMap) {
          classes.push(`u-offset-${coMap[k][index % coMap[k].length]}-12${k}`);
        }
        classes.push(classNames({
          "valign-top": options.vertical === "top",
          "valign-middle": options.vertical === "middle",
          "valign-bottom": options.vertical === "bottom"
        }));
        return (<div className={classes.join(" ")}>{child}</div>);
      }
    );

    return (
      <div className={classNames({
        "Grid--gutters": options.padded,
        "text-left": options.align === "left",
        "text-center": options.align === "center",
        "text-right": options.align === "right"
      }, "Grid", this.props.hidden ? "hide-content" : "")}
      >
        {wrappedChildren}
      </div>
    );
  }

  render(): ReactElement {
    return this.layoutChildren(this.props.children, this.props,
      this.props.className);
  }
}

Layout.displayName = "Layout";

Layout.propTypes = {
  /**
   The number of columns for the x-small media size.
   */
  "x-small": PropTypes.number,
  /**
   The number of columns for the small media size.
   */
  small: PropTypes.number,
  /**
   The number of columns for the medium media size.
   */
  medium: PropTypes.number,
  /**
   The number of columns for the large media size.
   */
  large: PropTypes.number,
  /**
   The number of columns for the x-large media size.
   */
  "x-large": PropTypes.number,
  /**
   An array of column sizes (based on a 12-grid layout) for the x-small media size.
   */
  "x-small-sizes": PropTypes.array,
  /**
   An array of column sizes (based on a 12-grid layout) for the small media size.
   */
  "small-sizes": PropTypes.array,
  /**
   An array of column sizes (based on a 12-grid layout) for the medium media size.
   */
  "medium-sizes": PropTypes.array,
  /**
   An array of column sizes (based on a 12-grid layout) for the large media size.
   */
  "large-sizes": PropTypes.array,
  /**
   An array of column sizes (based on a 12-grid layout) for the x-large media size.
   */
  "x-large-sizes": PropTypes.array,
  /**
   True if the grid should be padded.
   */
  padded: PropTypes.bool,
  /**
   * Horizontal alignment for the container.
   */
  align: PropTypes.oneOf(["left", "center", "right"]),
  /**
   Vertical alignment for the container.
   */
  vertical: PropTypes.oneOf(["top", "middle", "bottom"]),
  children: PropTypes.node,
  className: PropTypes.string,
  hidden: PropTypes.string
};

Layout.defaultProps = {
  align: "left"
};

export default Layout;

