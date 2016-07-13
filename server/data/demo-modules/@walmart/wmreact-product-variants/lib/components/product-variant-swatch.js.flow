/* @flow */
import React from "react";
import classNames from "classnames";
import Variants from "./variants";
import VariantProperties from "../enums/variant-properties";
import {isDisabled, isUnavailable, isCollapsable} from "../utils/variants-util";

type TVariants = {
  "id": string,
  "name": string,
  "selected": boolean,
  "swatchImageUrl": string,
  "status": string,
  "categoryId": string,
  "productIds": Array<string>,
  "availabilityStatus": string,
  "rank": number
};

/**
  A product specific variants component. Displays certain number of variants based on the
  passed in swatchToggleCount property. Accepts a variants property which is same as
  the product terra variants model.

 For example this is how we use this component.

 ```jsx
 <ProductVariantSwatch
  selectedVariantId="actual_color-arcticwhite"
  selectedVariantName="Arctic White"
  onVariantClick={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  onVariantMouseLeave={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  onVariantMouseEnter={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  onExpanderClick={(ev)=>{console.log(ev.currentTarget.dataset.isCollapsed);}}
  variants={[
    {
      id: "actual_color-greyplaid",
      name: "Grey Plaid",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/7766EE/fff",
      status: "out of stock"
    },{
      id: "actual_color-greyplaid1",
      name: "Grey Plaid1",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/448899/fff",
      status: "out of stock"
    },{
      id: "actual_color-greyplaid2",
      name: "Grey Plaid2",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/EECCAA/fff",
      status: "out of stock"
    },{
      id: "actual_color-greyplaid3",
      name: "Grey Plaid4",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/22FF99/fff",
      status: "out of stock"
    },{
      id: "actual_color-greyplaid4",
      name: "Grey Plaid4",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/5599AA/fff",
      status: "out of stock"
    },{
      id: "actual_color-greyplaid5",
      name: "Grey Plaid5",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/223344/fff",
      status: "out of stock"
    }, {
      id: "actual_color-arcticwhite",
      name: "Arctic White",
      selected:true,
      swatchImageUrl: "http://dummyimage.com/60x60/667788/fff",
      status: "in stock"}]}/>
 ```

 @import {ProductVariantSwatch}
 @flags noVisibleRender
 @component ProductVariantSwatch
 @playground
 ProductVariantSwatch
 ```
 <ProductVariantSwatch
  selectedVariantId="actual_color-arcticwhite"
  selectedVariantName="Arctic White"
  onVariantClick={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  onVariantMouseLeave={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  onVariantMouseEnter={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  onExpanderClick={(ev)=>{console.log(ev.currentTarget.dataset.isCollapsed);}}
  variants={[
    {
      id: "actual_color-greyplaid",
      name: "Grey Plaid",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/7766EE/fff",
      status: "out of stock"
    },{
      id: "actual_color-greyplaid1",
      name: "Grey Plaid1",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/448899/fff",
      status: "out of stock"
    },{
      id: "actual_color-greyplaid2",
      name: "Grey Plaid2",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/EECCAA/fff",
      status: "out of stock"
    },{
      id: "actual_color-greyplaid3",
      name: "Grey Plaid4",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/22FF99/fff",
      status: "out of stock"
    },{
      id: "actual_color-greyplaid4",
      name: "Grey Plaid4",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/5599AA/fff",
      status: "out of stock"
    },{
      id: "actual_color-greyplaid5",
      name: "Grey Plaid5",
      selected:false,
      swatchImageUrl: "http://dummyimage.com/60x60/223344/fff",
      status: "out of stock"
    }, {
      id: "actual_color-arcticwhite",
      name: "Arctic White",
      selected:true,
      swatchImageUrl: "http://dummyimage.com/60x60/667788/fff",
      status: "in stock"}]}/>
 ```
 */

class ProductVariantSwatch extends React.Component {
  constructor(): void {
    super();
    this.state = {collapsed: true};
    this._toggleVariant = this._toggleVariant.bind(this);
  }

  _toggleVariant(): void {
    this.setState({
      collapsed: !this.state.collapsed
    });
    this.props.onExpanderClick(this.state.collapsed);
  }

  _getClasses({className}): string {
    return classNames("prod-ProductVariantSwatch",
      className);
  }

  _getVariantOptions(): TVariants {
    const {swatchToggleCount, variants} = this.props;
    const {collapsed} = this.state;

    if (collapsed && swatchToggleCount < variants.length) {
      // return variants swatches up to the swatchToggleCount
      return variants.filter((variant, index) => {
        return index <= swatchToggleCount - 1;
      });
    }

    return variants;
  }

  _renderVariantItems(): ReactElement {
    const variantOptions = this._getVariantOptions();
    return variantOptions.map((variant, index) => {
      const {id, selected, swatchImageUrl, name} = variant;
      const {onVariantMouseEnter,
        onVariantMouseLeave,
        onVariantClick, isImageSwatch, type} = this.props;
      return (<Variants.Item
        key={id}
        type={type}
        data-variant-id={id}
        selected={selected}
        disabled={isDisabled(variant)}
        unavailable={isUnavailable(variant)}
        index={index}
        isImageSwatch={isImageSwatch}
        swatch={swatchImageUrl}
        onMouseEnter={onVariantMouseEnter}
        onMouseLeave={onVariantMouseLeave}
        onClick={onVariantClick}>
          {name}
        </Variants.Item>);
    }, this);
  }

  _renderVariantExpander(): ?ReactElement {
    const {collapsed} = this.state;
    if (isCollapsable(this.props)) {
      return (<Variants.Expander active={false} less={!collapsed}
        onClick={this._toggleVariant}/>);
    }
  }

  _renderVariantsComponent({small, swatches}): ReactElement {
    return (
      <Variants swatches={swatches} small={small}>
        {this._renderVariantItems()}
        {this._renderVariantExpander()}
      </Variants>
    );
  }

  render(): ReactElement {
    return (
      <div className={this._getClasses(this.props)}>
        {this._renderVariantsComponent(this.props)}
      </div>
    );
  }
}

ProductVariantSwatch.displayName = "ProductVariantSwatch";

ProductVariantSwatch.propTypes = {
  /**
   True if the variants are swatches.
   */
  swatches: React.PropTypes.bool,
  /**
   True if the variants are small.
   */
  small: React.PropTypes.bool,
  /**
    The type of control to use for this variant.
   */
  type: React.PropTypes.oneOf(["button", "checkbox", "radio"]),
  /**
    When set to true, uses the swatchImageUrl prop as a
    background image.
   */
  isImageSwatch: React.PropTypes.bool,
  /**
    An array of variants. Each variant is an object of type
    Variant.
   */
  "variants": React.PropTypes.arrayOf(React.PropTypes.shape(VariantProperties)).isRequired,
  /**
    Number of swatches to display before displaying a toggle button.
    Does not display a toggle button when the total number of variants
    is less than or equal to swatchToggleCount.
   */
  "swatchToggleCount": React.PropTypes.number,
  /**
    Name of the selected variant.
   */
  "selectedVariantName": React.PropTypes.string,
  /**
    Id of the selected variant.
   */
  "selectedVariantId": React.PropTypes.string,
  /**
    Any additional css classes that needs to be applied
    to the root element.
   */
  "className": React.PropTypes.string,
  /**
    Callback function upon variant click. Usually handled in
    a higher order component. Attatches a variantId property to the
    ev.currentTarget.dataset. Used to access the current variant info.
   */
  "onVariantClick": React.PropTypes.func,
  /**
    Callback function upon variant mouseout. Usually handled in
    a higher order component. Attatches a variantId property to the
    ev.currentTarget.dataset. Used to access the current variant info.
   */
  "onVariantMouseLeave": React.PropTypes.func,
  /**
    Callback function upon variant mouseenter. Usually handled in
    a higher order component. Attatches a variantId property to the
    ev.currentTarget.dataset. Used to access the current variant info.
   */
  "onVariantMouseEnter": React.PropTypes.func,
  /**
    Callback function upon expander click. Usually handled in
    a higher order component. Gets value of `collapsed` state
    passed as an argument
   */
  "onExpanderClick": React.PropTypes.func
};

ProductVariantSwatch.defaultProps = {
  "swatches": true,
  "small": false,
  "type": "radio",
  "isImageSwatch": true,
  "className": "",
  "selectedVariantName": "",
  "selectedVariantId": "",
  "swatchToggleCount": 4,
  "onVariantClick": () => {/*no-op*/},
  "onVariantMouseLeave": () => {/*no-op*/},
  "onVariantMouseEnter": () => {/*no-op*/},
  "onExpanderClick": () => {/*no-op*/}
};

export default ProductVariantSwatch;
