/* @flow */
import React, { Component, PropTypes } from "react";
import classNames from "classnames";
import { getDataAutomationIdPair } from "@walmart/automation-utils/lib/utils/automation-id-utils";
import ProductVariantSwatch from "./product-variant-swatch";
import ProductVariantDropdown from "./product-variant-dropdown";
import clientWidth from "@walmart/wmreact-layout/lib/components/helpers/client-width";
import map from "lodash/map";
import find from "lodash/find";
import isEmpty from "lodash/isEmpty";
import VariantProperties from "../enums/variant-properties";

const BREAKPOINT_SETTINGS = {
  "x-small": {
    swatchToggleCount: 5
  },
  "small": {
    swatchToggleCount: 6
  },
  "medium": {
    swatchToggleCount: 7
  },
  "large": {
    swatchToggleCount: 7
  },
  "x-large": {
    swatchToggleCount: 8
  }
};

const AUTOMATION_CONTEXT = "VariantType";

/**
 The product variant type, displays a list of variants (for e.g. dropdown, swatches).

 For example this is how we use this component.

 ```jsx
 <div>
  <h3>Swatch variant Example</h3>
  <ProductVariantType variantType="SWATCH"
  id="actual_color"
  selectedVariantName="Arctic White"
  selectedVariantId="actual_color-arcticwhite"
  onVariantClick={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  onVariantMouseLeave={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  onVariantMouseEnter={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  name="Actual Color" variants={[
  {
    id: "actual_color-greyplaid",
    name: "Grey Plaid",
    selected:false,
    swatchImageUrl: "http://dummyimage.com/60x60/7766EE/fff",
    status: "out of stock"
  }, {
    id: "actual_color-arcticwhite",
    name: "Arctic White",
    selected:true,
    swatchImageUrl: "http://dummyimage.com/60x60/448899/fff",
    status: "in stock"}]}/>
  <h3>Dropdown variant Example</h3>
  <ProductVariantType variantType="DROPDOWN"
    id="size"
    name="Size"
    selectedVariantName="Full"
    selectedVariantId="size-full"
    onVariantClick={(ev)=>{console.log(ev);}}
    variants={[
      {
        id: "size-full",
        name: "Full",
        status: "in stock",
        selected: true
      }, {
        id: "size-queen",
        name: "Queen",
        status: "in stock",
        selected: false
      }]}/>
 </div>
 ```

 @import {ProductVariantType}
 @flags noVisibleRender
 @component ProductVariantType
 @playground
 ProductVariantType
 ```
 <div>
  <h3>Swatch variant Example</h3>
  <ProductVariantType variantType="SWATCH"
  id="actual_color"
  selectedVariantName="Arctic White"
  selectedVariantId="actual_color-arcticwhite"
  onVariantClick={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  onVariantMouseLeave={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  onVariantMouseEnter={(ev)=>{console.log(ev.currentTarget.dataset.variantId);}}
  name="Actual Color" variants={[
  {
    id: "actual_color-greyplaid",
    name: "Grey Plaid",
    selected:false,
    swatchImageUrl: "http://dummyimage.com/60x60/7766EE/fff",
    status: "out of stock"
  }, {
    id: "actual_color-arcticwhite",
    name: "Arctic White",
    selected:true,
    swatchImageUrl: "http://dummyimage.com/60x60/448899/fff",
    status: "in stock"}]}/>
  <h3>Dropdown variant Example</h3>
  <ProductVariantType variantType="DROPDOWN"
    id="size"
    name="Size"
    selectedVariantName="Full"
    selectedVariantId="size-full"
    onVariantClick={(ev)=>{console.log(ev);}}
    variants={[
      {
        id: "size-full",
        name: "Full",
        status: "in stock",
        selected: true
      }, {
        id: "size-queen",
        name: "Queen",
        status: "in stock",
        selected: false
      }]}/>
 </div>
 ```
 */

class ProductVariantType extends Component {
  constructor(props, context) {
    super(props, context);
    this._onVariantMouseEnter = this._onVariantMouseEnter.bind(this);
    this._onVariantMouseLeave = this._onVariantMouseLeave.bind(this);
    this._onVariantDropdownClick = this._onVariantDropdownClick.bind(this);
    this._onVariantSwatchClick = this._onVariantSwatchClick.bind(this);
    this.state = {
      isSelected: false,
      isValid: props.isValid
    };
  }

  componentWillReceiveProps(nextProps): void {
    if (nextProps.isValid !== this.props.isValid) {
      this.setState({
        isValid: nextProps.isValid
      });
    }
  }

  _getClasses({className}): string {
    return classNames("prod-ProductVariantType", className);
  }

  _getVariantDropDownOptions(): Array<{name:string, id: string, status:string}> {
    const {variants} = this.props;
    return map(variants, (variant) => {
      return {
        name: variant.name,
        id: variant.id,
        status: variant.status
      };
    });
  }

  _onVariantMouseLeave() {
    this.setState({
      hoveredVariantName: null
    });

    this.props.onVariantMouseLeave(...arguments);
  }

  _onVariantMouseEnter(variant) {
    const {variants, onVariantMouseEnter} = this.props;
    const variantId = variant.currentTarget.getAttribute("data-variant-id") || "";
    const selectedVariant = find(variants, (v) => v.id === variantId);

    if (selectedVariant) {
      this.setState({
        hoveredVariantName: selectedVariant.name
      });
    }

    onVariantMouseEnter(...arguments);
  }

  _renderLabelComponent(): ReactElement {
    let classes = "";

    let selectedVariantName;
    const {name} = this.props;
    const {hoveredVariantName} = this.state;
    selectedVariantName = isEmpty(hoveredVariantName)
      ? this.props.selectedVariantName
      : hoveredVariantName;

    if (this.props.variantType === "SWATCH" && isEmpty(hoveredVariantName)) {
      classes = classNames(
        {"prod-ProductVariant-variantUnselectedError": !this.state.isValid}
      );
    }

    return (
      <div className="prod-ProductVariantType-label copy-small font-bold">
        <span>
          <span {...getDataAutomationIdPair("Label", AUTOMATION_CONTEXT, process)}>
            {name}
          </span>&nbsp;:&nbsp;
          <span className={classes}
            {...getDataAutomationIdPair("SelectedVariant", AUTOMATION_CONTEXT, process)}>
            {selectedVariantName}
          </span>
        </span>
      </div>
    );
  }

  invalidate(): void {
    this.setState({
      isValid: false
    });
  }

  isSelected(): boolean {
    return this.state.isSelected;
  }

  _onVariantDropdownClick(option): void {
    if (option !== "choose_an_option") {
      this.setState({
        isSelected: true,
        isValid: true
      });
    }

    this.props.onVariantClick(option);
  }

  _onVariantSwatchClick(variant): void {
    this.setState({
      isSelected: true,
      isValid: true
    });

    this.props.onVariantClick(variant);
  }

  _renderDropdownComponent(variantOptions): ReactElement {
    return (<ProductVariantDropdown
      title={this.props.name}
      variantUnselectedError={!this.state.isValid}
      onVariantClick={this._onVariantDropdownClick}
      variantOptions={variantOptions}/>);
  }

  _renderSwatchComponent(visibleWidth): ReactElement {
    const {
      variants,
      selectedVariantId,
      selectedVariantName,
      swatchToggleCountPerBreakpoint
    } = this.props;
    const {swatchToggleCount} = swatchToggleCountPerBreakpoint[visibleWidth];
    const props = {
      swatchToggleCount,
      variants,
      selectedVariantId,
      selectedVariantName,
      onVariantClick: this._onVariantSwatchClick,
      onVariantMouseEnter: this._onVariantMouseEnter,
      onVariantMouseLeave: this._onVariantMouseLeave
    };

    const {
      hoveredVariantName
    } = this.state;

    if (!isEmpty(hoveredVariantName)) {
      props.selectedVariantName = hoveredVariantName;
    }

    return (<ProductVariantSwatch {...props}/>);
  }

  _renderVariantTypeComponent(visibleWidth): ReactElement {
    const {variantType} = this.props;
    if (variantType === "SWATCH") {
      return this._renderSwatchComponent(visibleWidth);
    }

    const variantOptions = this._getVariantDropDownOptions();
    return this._renderDropdownComponent(variantOptions);
  }

  _renderLayoutComponent(visibleWidth): ReactElement {
    return (<div>
      {this._renderLabelComponent()}
      {this._renderVariantTypeComponent(visibleWidth)}
    </div>);
  }

  _getBreakPoint(): string {
    let breakpoint = "x-large";
    if (clientWidth.isBelowBreakPoint("extraSmall")) {
      breakpoint = "x-small";
    } else if (clientWidth.isBelowBreakPoint("small")) {
      breakpoint = "small";
    } else if (clientWidth.isBelowBreakPoint("medium")) {
      breakpoint = "medium";
    } else if (clientWidth.isBelowBreakPoint("large")) {
      breakpoint = "large";
    }
    return breakpoint;
  }

  render(): ReactElement {
    return (
      <div className={this._getClasses(this.props)}>
        {this._renderLayoutComponent(this._getBreakPoint())}
      </div>
    );
  }
}

ProductVariantType.displayName = "ProductVariantType";

ProductVariantType.propTypes = {
  /**
   Type of the variant.
   */
  "variantType": PropTypes.oneOf(["SWATCH", "DROPDOWN"]),
  /**
   The name of the variant type for e.g. Actual Color, Size etc.
   */
  "name": PropTypes.string.isRequired,
  /**
   The id of the variant type.
   */
  "id": PropTypes.string.isRequired,
  /**
   Selected variant name.
   */
  "selectedVariantName": PropTypes.string,

  /**
   Selected variant id.
   */
  "selectedVariantId": PropTypes.string,

  /**
    An array of variants. Each variant is an object of type
    Variant.
   */
  "variants": PropTypes.arrayOf(PropTypes.shape(VariantProperties)).isRequired,
  /**
   Callback function upon variant click. Usually handled in
   a higher order component.
   */
  "onVariantClick": PropTypes.func,
  /**
    Callback function upon variant mouseleave. Usually handled in
    a higher order component. Attatches a variantId property to the
    ev.currentTarget.dataset. Used to access the current variant info.
   */
  "onVariantMouseLeave": PropTypes.func,
  /**
    Callback function upon variant hover in. Usually handled in
    a higher order component. Attatches a variantId property to the
    ev.currentTarget.dataset. Used to access the current variant info.
   */
  "onVariantMouseEnter": PropTypes.func,
  /**
    To to render validated state for variants.
   */
  "isValid": PropTypes.bool,
  /**
   Any additional css classes that needs to be applied
   to the root element.
   */
  "className": PropTypes.string,
  /**
    Number of swatches to display before displaying a toggle button per breakpoint.
    Does not display a toggle button when the total number of variants
    is less than or equal to swatchToggleCount.
   */
  "swatchToggleCountPerBreakpoint": PropTypes.shape({
    "x-small": PropTypes.shape({
      "swatchToggleCount": PropTypes.number
    }),
    "small": PropTypes.shape({
      "swatchToggleCount": PropTypes.number
    }),
    "medium": PropTypes.shape({
      "swatchToggleCount": PropTypes.number
    }),
    "large": PropTypes.shape({
      "swatchToggleCount": PropTypes.number
    }),
    "x-large": PropTypes.shape({
      "swatchToggleCount": PropTypes.number
    })
  })
};

ProductVariantType.defaultProps = {
  selectedVariantName: "",
  selectedVariantId: "",
  variantType: "DROPDOWN",
  className: "",
  swatchToggleCountPerBreakpoint: BREAKPOINT_SETTINGS,
  isValid: true,
  onVariantClick: () => {/*no-op*/},
  onVariantMouseLeave: () => {/*no-op*/},
  onVariantMouseEnter: () => {/*no-op*/}
};

export default ProductVariantType;
