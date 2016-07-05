/* @flow */
import React, {PropTypes, Component} from "react";
import {findDOMNode as $} from "react-dom";
import ModuleTitle from "./module-title";
import ModuleDrawerTile from "./module-drawer-tile";
import Revealer from "@walmart/wmreact-interactive/lib/components/revealer";
import Layout from "@walmart/wmreact-layout/lib/components/layout";
import debounce from "lodash/debounce";
import { getTempoModuleAutomationId } from "@walmart/category-utils";

/**
A component for displaying a group of tiles within a sliding drawer container.

The child Revealer component requires a base height be input; the base height
determines the height of the container when the component is collapsed. The base
height is dynamically calculated, after the component has mounted, using the
height of the tiles, the overall height of the container, and the number of rows
that should be displayed.

This component is responsive. The height of container will be recalculated on a
screen resize. To minimize the effects of many screen resizings, this method is
wrapped in lodash's debounce function.

@examples
```jsx
<ModuleDrawer data={[
  {
    "title": "TVs",
    "url": "/browse/electronics/tvs/3944_1060825_447913",
    "alt": "TVs",
    "imageUrl": "//i5.walmartimages.com/dfw/4ff9c6c9-5220/" +
      "k2-_ace57524-f8e5-4fb9-8189-4f94adf6d011.v1.jpg",
    "categoryId": "3944_1060825_447913",
    "assetId": "b5f4c3d0-d357-11e4-8430-9bb6eb04884d",
    "uid": "2TXEZx_h"
  },
  {
    "title": "Laptops",
    "url": "/browse/electronics/laptop-computers/3944_3951_132960",
    "alt": "Laptops",
    "imageUrl": "http://i5.walmartimages.com/dfw/4ff9c6c9-ce9a/" +
      "k2-_71a2c162-b553-428e-8e52-d149efbf0da9.v1.jpg",
    "categoryId": "3944_3951_132960",
    "assetId": "d1229ec0-d357-11e4-8c7c-258c79afbf66",
    "uid": "IE78xV1I"
  }
]} />
```
@component ModuleDrawer
@import {ModuleDrawer}
@playground
ModuleDrawer
```
<ModuleDrawer data={[
  {
    "title": "TVs",
    "url": "/browse/electronics/tvs/3944_1060825_447913",
    "alt": "TVs",
    "imageUrl": "//i5.walmartimages.com/dfw/4ff9c6c9-5220/" +
      "k2-_ace57524-f8e5-4fb9-8189-4f94adf6d011.v1.jpg",
    "categoryId": "3944_1060825_447913",
    "assetId": "b5f4c3d0-d357-11e4-8430-9bb6eb04884d",
    "uid": "2TXEZx_h"
  },
  {
    "title": "Laptops",
    "url": "/browse/electronics/laptop-computers/3944_3951_132960",
    "alt": "Laptops",
    "imageUrl": "http://i5.walmartimages.com/dfw/4ff9c6c9-ce9a/" +
      "k2-_71a2c162-b553-428e-8e52-d149efbf0da9.v1.jpg",
    "categoryId": "3944_3951_132960",
    "assetId": "d1229ec0-d357-11e4-8c7c-258c79afbf66",
    "uid": "IE78xV1I"
  }
]} />
```
*/
class ModuleDrawer extends Component {
  constructor(props: Object): void {
    super(props);

    this.state = {
      baseHeight: 0
    };

    this._normalizeRowHeight = this._normalizeRowHeight.bind(this);
    this._debouncedNormalizeRowHeight = debounce(
      this._normalizeRowHeight, this.props.resizeThreshold
    );

    this._calculateBaseHeight = this._calculateBaseHeight.bind(this);
    this._renderTiles = this._renderTiles.bind(this);
  }

  _getNodeFromRef(ref: Object): Object {
    return $(ref);
  }

  _normalizeRowHeight(): void {
    const revealer = this._getNodeFromRef(this.refs.Revealer);
    if (!revealer) {
      return;
    }

    const collapsable = revealer.children[0];
    const layout = this._getNodeFromRef(this.refs.Layout);
    const aTile = layout.children[0];

    if (collapsable && layout && aTile) {
      this.setState({
        baseHeight: this._calculateBaseHeight({
          rows: this.props.rows,
          collapsable,
          layout,
          aTile
        })
      });
    }
  }

  _calculateBaseHeight(opts: Object): number {
    // Revealer has ability to auto-hide the toggle button when the
    // content is less than the baseHeight. Add 1px to baseHeight to ensure
    // toggle button is hidden if content and baseHeight are equal
    const visibleRows = (opts.collapsable.offsetHeight <= opts.layout.offsetHeight) ? opts.rows : 1;
    return (opts.aTile.offsetHeight * visibleRows) + 1;
  }

  componentDidMount(): void {
    // Add listener for screen size changes to appropriately handle responsive layout
    window.addEventListener("resize", this._debouncedNormalizeRowHeight);

    this._normalizeRowHeight();
  }

  componentWillUnmount(): void {
    window.removeEventListener("resize", this._debouncedNormalizeRowHeight);
  }

  _renderTiles(data: Object): ReactElement {
    return data.map((tile, i) => <ModuleDrawerTile key={i} {...tile} />);
  }

  render(): ReactElement {
    const {
      buttonClosedText,
      buttonOpenText,
      data,
      large,
      medium,
      moduleTitle,
      small,
      xLarge,
      xSmall
    } = this.props;

    return (
      <div className="ModuleDrawer"
        {...getTempoModuleAutomationId("ModuleDrawer", process)}>
        {moduleTitle && <ModuleTitle title={moduleTitle} />}
        <Revealer baseHeight={this.state.baseHeight}
          defaultOpen={false}
          disableClose={false}
          border={false}
          inverse={true}
          fakeLink={false}
          buttonClosedText={buttonClosedText}
          buttonOpenText={buttonOpenText}
          ref="Revealer" >
          <div className="Grid ResponsiveContainer ModuleDrawer-grid">
            <Layout ref="Layout"
              x-large={xLarge}
              large={large}
              medium={medium}
              small={small}
              x-small={xSmall}
              padded={true} >
              {this._renderTiles(data)}
            </Layout>
          </div>
        </Revealer>
      </div>
    );
  }
}

ModuleDrawer.displayName = "ModuleDrawer";

ModuleDrawer.propTypes = {
  /**
  Revealer button text when revealer is closed
  */
  buttonClosedText: PropTypes.string,
  /**
  Revealer button text when revealer is closed
  */
  buttonOpenText: PropTypes.string,
  /**
  Array of tile data
  */
  data: PropTypes.array.isRequired,
  /**
  Number of tiles per row at large breakpoints
  */
  large: PropTypes.number,
  /**
  Number of tiles per row at medium breakpoints
  */
  medium: PropTypes.number,
  /**
  Component title
  */
  moduleTitle: PropTypes.string,
  /**
  Responsive debouncing threshold for window.resize
  */
  resizeThreshold: PropTypes.number,
  /**
  Number of rows that are visible when the revealer is closed
  */
  rows: PropTypes.number,
  /**
  Number of tiles per row at small breakpoints
  */
  small: PropTypes.number,
  /**
  Number of tiles per row at x-large breakpoints
  */
  xLarge: PropTypes.number,
  /**
  Number of tiles per row at x-small breakpoints
  */
  xSmall: PropTypes.number
};

ModuleDrawer.defaultProps = {
  buttonClosedText: "View more",
  buttonOpenText: "View less",
  large: 6,
  medium: 4,
  moduleTitle: "",
  moduleType: "ModuleDrawer",
  resizeThreshold: 100,
  rows: 2,
  small: 4,
  xLarge: 6,
  xSmall: 3
};

ModuleDrawer.Tile = ModuleDrawerTile;

export default ModuleDrawer;
