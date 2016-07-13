#  (@walmart/wmreact-product-variants)

Set of components related to displaying variants


## ProductVariantDropdown

The product variant dropdown.

 For example this is how we use this component.

 ```jsx
 <ProductVariantDropdown
  onVariantClick={(ev)=>{console.log(ev)}}
  variantOptions={[{
    id: "color_blue",
    name: "Blue",
    status: "in stock"
  }, {
    id: "color_red",
    name: "Red",
    status: "out of stock"
  }, {
    id: "color_green",
    name: "Green",
    status: "not available"
  }]}/>
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *title* | string | Default title for the unselected option | `"an option"`
| *variantUnselectedError* | bool | Is variant not selected as part of the Unselected Variants Experience | `false`
| *variantOptions* | array | A list of variant options. Internally its a list of objects,
   containing props like: id, name, status. | 
| *disabledVariantClassName* | string | A className for displaying a disabled state on variant option.
   Used when the variant status is not in stock. | `"u-textGrey"`
| *onVariantClick* | func | Callback function upon variant click. Usually handled in
   a higher order component. | `() => {/*no-op*/}`

### import

```jsx
import {ProductVariantDropdown} from "@walmart/wmreact-product-variants";
```

<hr/>

## ProductVariantOption

The product variant dropdown option.

 For example this is how we use this component.

 ```jsx
 <ProductVariantOption
  variantName="Color Red"
  suffix="- Out of stock"
  disabled={true}
  disabledVariantClassName="u-textGrey"
  displaySuffix={true}/>
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *variantName* | string | The actual variantName or label | 
| *displaySuffix* | bool | When set to true adds a suffix option | `false`
| *suffix* | string | The suffix string. | `""`
| *disabled* | bool | When set to true adds a disabled state class | `false`
| *disabledVariantClassName* | string | A disabled state className | `"u-textGrey"`

### import

```jsx
import {ProductVariantOption} from "@walmart/wmreact-product-variants";
```

<hr/>

## ProductVariantSwatch

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

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *swatches* | bool | True if the variants are swatches. | `true`
| *small* | bool | True if the variants are small. | `false`
| *type* | enum | The type of control to use for this variant. | `"radio"`
| *isImageSwatch* | bool | When set to true, uses the swatchImageUrl prop as a
    background image. | `true`
| *variants* | arrayOf | An array of variants. Each variant is an object of type
    Variant. | 
| *swatchToggleCount* | number | Number of swatches to display before displaying a toggle button.
    Does not display a toggle button when the total number of variants
    is less than or equal to swatchToggleCount. | `4`
| *selectedVariantName* | string | Name of the selected variant. | `""`
| *selectedVariantId* | string | Id of the selected variant. | `""`
| *onVariantClick* | func | Callback function upon variant click. Usually handled in
    a higher order component. Attatches a variantId property to the
    ev.currentTarget.dataset. Used to access the current variant info. | `() => {/*no-op*/}`
| *onVariantMouseLeave* | func | Callback function upon variant mouseout. Usually handled in
    a higher order component. Attatches a variantId property to the
    ev.currentTarget.dataset. Used to access the current variant info. | `() => {/*no-op*/}`
| *onVariantMouseEnter* | func | Callback function upon variant mouseenter. Usually handled in
    a higher order component. Attatches a variantId property to the
    ev.currentTarget.dataset. Used to access the current variant info. | `() => {/*no-op*/}`
| *onExpanderClick* | func | Callback function upon expander click. Usually handled in
    a higher order component. Gets value of `collapsed` state
    passed as an argument | `() => {/*no-op*/}`

### import

```jsx
import {ProductVariantSwatch} from "@walmart/wmreact-product-variants";
```

<hr/>

## ProductVariantType

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

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *variantType* | enum | Type of the variant. | `"DROPDOWN"`
| *name* | string | The name of the variant type for e.g. Actual Color, Size etc. | 
| *id* | string | The id of the variant type. | 
| *selectedVariantName* | string | Selected variant name. | `""`
| *selectedVariantId* | string | Selected variant id. | `""`
| *variants* | arrayOf | An array of variants. Each variant is an object of type
    Variant. | 
| *onVariantClick* | func | Callback function upon variant click. Usually handled in
   a higher order component. | `() => {/*no-op*/}`
| *onVariantMouseLeave* | func | Callback function upon variant mouseleave. Usually handled in
    a higher order component. Attatches a variantId property to the
    ev.currentTarget.dataset. Used to access the current variant info. | `() => {/*no-op*/}`
| *onVariantMouseEnter* | func | Callback function upon variant hover in. Usually handled in
    a higher order component. Attatches a variantId property to the
    ev.currentTarget.dataset. Used to access the current variant info. | `() => {/*no-op*/}`
| *isValid* | bool | To to render validated state for variants. | `true`
| *swatchToggleCountPerBreakpoint* | shape | Number of swatches to display before displaying a toggle button per breakpoint.
    Does not display a toggle button when the total number of variants
    is less than or equal to swatchToggleCount. | `{ "x-small": { swatchToggleCount: 5 }, "small": { ...`

### import

```jsx
import {ProductVariantType} from "@walmart/wmreact-product-variants";
```

<hr/>

## VariantExpander

A variant expander button

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *active* | bool | True if this is active. | `false`
| *less* | bool | True if we should be showing as less. | `false`

### import

```jsx
import {Variants} from "@walmart/wmreact-product-variants";
```

<hr/>

## Variants

Variants container

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *small* | bool | True if the variants are small | `false`
| *swatches* | bool | True if the variants are swatches | `false`

### import

```jsx
import {Variants} from "@walmart/wmreact-product-variants";
```

<hr/>
