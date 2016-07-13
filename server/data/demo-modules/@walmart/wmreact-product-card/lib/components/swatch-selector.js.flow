/* @flow */
import React, { Component } from "react";

import Swatch from "./swatch";
import Flyout from "@walmart/wmreact-containers/lib/components/flyout";

import FlyoutTrigger from "./flyout-trigger";

import {fireDataEvent} from "@walmart/wmreact-analytics";

/**
@private
*/
export default class SwatchSelector extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: null,
      lastIndex: null
    };
  }

  _onSwatchClick(redirectUrl: string): void {
    this.props.onSwatchClick(redirectUrl);
  }

  _setIndex(index: number): void {
    const self = this;
    this.setState({
      selectedIndex: index,
      lastIndex: index
    }, () => {
      const imageSrc = this.props.swatches[index].product_image_url; // eslint-disable-line
      fireDataEvent(this, "setIndex", {imageSrc});
      if (self.props.onChange) {
        self.props.onChange(imageSrc);
      }
    });
  }

  _setHover(index: number, leave: any): void {
    const self = this;
    if (leave === true) {
      const imageSrc = this.props.swatches[this.state.lastIndex] &&
          this.props.swatches[this.state.lastIndex].product_image_url ||
          this.props.imageUrl;
      if (self.props.onChange) {
        self.props.onChange(imageSrc);
      }
    } else {
      const imageSrc = this.props.swatches[index].product_image_url;
      if (self.props.onChange) {
        self.props.onChange(imageSrc);
      }
    }
  }

  _renderFlyout(): ReactElement {
    const self = this;
    const swatches = this.props.swatches.map((swatch, index) => {
      if (index >= this.props.maxSwatchCount) {
        return (
          <Swatch
            onClick={() => {self._setIndex(index); self._onSwatchClick(swatch.productPageUrl);}}
            onMouseOver={() => {self._setHover(index, false);}}
            onMouseOut={() => {self._setHover(index, true);}}
            key={index}
            active={self.state.selectedIndex === index}
            title={swatch.display_name}
            image={swatch.swatch_image_url} />
        );
      }
    });
    return (
      <Flyout
        trigger={<FlyoutTrigger/>}
        direction="bottom"
        size="narrow" >
        {swatches}
      </Flyout>
    );
  }

  render(): ReactElement {
    const self = this;
    return (
      <div className="swatch-selector">
        {this.props.swatches.map((swatch, index) => {
          if (index < this.props.maxSwatchCount) {
            return (
              <Swatch
                onClick={
                  () => {self._setIndex(index); self._onSwatchClick(swatch.productPageUrl); }
                }
                onMouseOver={() => {self._setHover(index, false);}}
                onMouseOut={() => {self._setHover(index, true);}}
                key={index}
                active={self.state.selectedIndex === index}
                title={swatch.display_name}
                image={swatch.swatch_image_url} />
            );
          }
        })}
        {this.props.swatches.length > this.props.maxSwatchCount ?
          this._renderFlyout() : null}
      </div>
    );
  }
}

SwatchSelector.displayName = "SwatchSelector";

SwatchSelector.propTypes = {
  swatches: React.PropTypes.array.isRequired,
  imageUrl: React.PropTypes.string,
  maxSwatchCount: React.PropTypes.number,
  onChange: React.PropTypes.func,
  onSwatchClick: React.PropTypes.func
};

SwatchSelector.defaultProps = {
  swatches: [],
  imageUrl: null,
  maxSwatchCount: 4,
  onSwatchClick: () => {}
};
