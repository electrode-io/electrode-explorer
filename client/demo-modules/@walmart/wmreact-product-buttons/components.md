#  (@walmart/wmreact-product-buttons)

A collection of button components to be used on the product and related pages.


## PreorderFlyoutContent

A PreorderFlyoutContent component. Displayed when the product is preorder eligible.

 For example this is how we use this component.

 ```jsx
<PreorderFlyoutContent/>
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *autoId* | string | Used for generating unique automation id's | `""`
| *preorderInfo* | shape | The date it ships and tye type of preorder it is. | `{ streetDateType: SHIP_BY_TYPE, preorderDate: unde...`

### import

```jsx
import {PreorderFlyoutContent} from "@walmart/wmreact-product-buttons";
```

<hr/>

## 

The ZipCode search component.
 For example this is how we use this component.
 ```jsx
 <ZipCodeSearch
  zipCode="83713"
  className="prod-zipcode-search"
  onLocationUpdate={(event)=>{console.log(event)}}
 />
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *zipCode* | string | Current customer zipcode | `""`
| *onLocationUpdate* | func | The callback handler for updating the customer zip | `() => {}`

### import

```jsx
import  from "@walmart/wmreact-product-buttons";
```

<hr/>

## ProductHelpFlyoutButton

A simple button with help icon and a flyout to show the
 help text

 For example this is how we use this component.

 ```jsx
 <ProductHelpFlyoutButton
   helpIconsClass="wmicon wmicon-help u-textBlue"
   flyoutPosition="right"
   flyoutSize="wide"
   content={<span>Hello!!!</span>}/>
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *content* | element | The content of the flyout. | 
| *flyoutPosition* | enum | The position of the flyout. | `"left"`
| *flyoutSize* | string | The size of the flyout. | `"wide"`
| *flyoutHover* | bool | Whether to show the flyout on hover | `false`
| *flyoutCloseButton* | bool | Whether to show a close button on the flyout | `false`
| *helpIconsClass* | string | Additional classes for help icon button. | `"wmicon wmicon-help"`

### import

```jsx
import {ProductHelpFlyoutButton} from "@walmart/wmreact-product-buttons";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *legalPromptStatus* |  |  | `"ACCEPTED"`
| *onClick* |  |  | `() => {}`
| *onMoreInfoClicked* |  |  | `() => {}`
| *onMoreInfoClosed* |  |  | `() => {}`
| *onAcceptClicked* |  |  | `() => {}`
| *onDeclineClicked* |  |  | `() => {}`
| *onFlyoutClosed* |  |  | `() => {}`

### import

```jsx
import  from "@walmart/wmreact-product-buttons";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *heading* | string | Title for the container | `"Add item to:"`
| *listItems* | arrayOf | List of items | 
| *onListItemSelected* | func | Callback to handle list or registry selection | 

### import

```jsx
import  from "@walmart/wmreact-product-buttons";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *active* | bool | Used to hide and show modal | `false`
| *onContinue* | func | Used to submit the from | `() => {}`
| *onClose* | func | Used to close modal | `() => {}`

### import

```jsx
import  from "@walmart/wmreact-product-buttons";
```

<hr/>

## LegalFlyoutContent

This component renders the content inside legal flyout.
The component also handles the case when the legal warning is declined.

 For example this is how we use this component.

 ```jsx
 <LegalFlyoutContent onAcceptClicked={() => {console.log("accept clicked")}}/>
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *decline* | bool | Prop that decides whether to render decline content or not | `false`
| *onAcceptClicked* | func | Callback when yes button is clicked | `() => {}`
| *onMoreInfoClicked* | func | Callback when more info is clicked | `() => {}`
| *onDeclineClicked* | func | Callback when no button is clicked | `() => {}`

### import

```jsx
import {LegalFlyoutContent} from "@walmart/wmreact-product-buttons";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *status* | enum | Prop that describes the current state of the button | `"INITIALIZED"`
| *listItems* | arrayOf | List of items | 
| *onListItemSelected* | func | Callback to handle list or registry selection | `() => {}`
| *onClick* | func | Callback to handle onClick on Add to registry button | 
| *onPromptClose* | func | Callback to handle close of prompt | `() => {}`

### import

```jsx
import  from "@walmart/wmreact-product-buttons";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *submapModalStatus* |  |  | `"INACTIVE"`
| *onClick* |  |  | `() => {}`
| *onModalClosed* |  |  | `() => {}`
| *onContinue* |  |  | `() => {}`

### import

```jsx
import  from "@walmart/wmreact-product-buttons";
```

<hr/>

## MoreInfoModal

This component renders more info modal on medium and above breakpoints
and renders the content as a slidepanel in smaller breakpoints.
Set the active prop to either show or hide this component

 For example this is how we use this component.

 ```jsx
 <MoreInfoModal active={true}/>
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *active* | bool | Prop used to open close modal | `true`
| *onClose* | func | Callback executed when modal closed | `() => {}`

### import

```jsx
import {MoreInfoModal} from "@walmart/wmreact-product-buttons";
```

<hr/>

## ProductInvalidPrompt

A ProductInvalidPrompt component. Displays a generic invalid prompt in the primary cta component.

 For example this is how we use this component.

 ```jsx
<ProductInvalidPrompt/>
 ```


### import

```jsx
import {ProductInvalidPrompt} from "@walmart/wmreact-product-buttons";
```

<hr/>

## ProductPrimaryCTA

The product primary cta sections. Displays a
 - Primary cta button like, Add to cart, Let me know,
  Preorder, Add to List (in case the product is out of stock)
  Cell coverage etc.

 For example this is how we use this component.

 ```jsx
 <ProductPrimaryCTA availabilityStatus="IN_STOCK"
    showQuantity={true}
    quantityOptions= {[1, 2, 3, 4, 5]}/>
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *availabilityStatus* | enum | The availability status of the product. | `availabilityStatuses.IN_STOCK`
| *addedQuantity* | number | The number of items have been added to cart | 
| *maxAddQuantity* | number | The limit number of the items that could be added to cart | 
| *actionStatus* | enum | The status of the action resulting from clicking the CTA | 
| *preorder* | bool | If this product is avaialble for preorder | `false`
| *preorderInfo* | shape | The date it ships and tye type of preorder it is. | `{}`
| *onAddToCart* | func | The callback handler for adding to cart. | `() => { /*no-op*/ }`
| *onCloseAddedToCartFlyout* | func | The callback handler for closing the Added to Cart flyout. | `() => { /*no-op*/ }`
| *onAddToList* | func | The callback handler for adding to list. | `() => { /*no-op*/ }`
| *onNotifyBackInStock* | func | The callback handler for signing up to be notified when a product is
   back in stock. | `() => { /*no-op*/ }`
| *onCloseNotifyFlyout* | func | When notify flyout closes. | `() => { /*no-op*/ }`
| *onQuantityChange* | func | The callback handler for the quantity button. | `() => { /*no-op*/ }`
| *showQuantity* | bool | Set this to true if you dont want the component to render the
   quantity dropdown. | `true`
| *quantityOptions* | array | An array of quantity options/values. | `[1]`
| *quantityLabel* | string | label text for quantity | 
| *isAValidOffer* | bool | determines if the current state offer is invalid.
   We use this flags to render an invalid state when a
   invalid variant combo is selected. | `true`
| *isSubmapCheckout* | bool | determine which variation of add-to-cart button to show.
   if true, show submapAddToCartButton | `false`
| *autoId* | string | Used for generating unique automation id's | `""`
| *layoutSizes* | arrayOf | The default col sizes for quantity and cta buttons | `[6, 6]`
| *flyoutDirection* | enum | The direction in which the email alert form flyout appears | `"left"`
| *flyoutSize* | enum | The width of the flyout | `"wide"`
| *legalPromptProps* | shape | Legal prompt props | 
| *submapProps* | object | submap modal/slide panel props | 

### import

```jsx
import {ProductPrimaryCTA} from "@walmart/wmreact-product-buttons";
```

<hr/>

## 

This component will be removed! It is meant to be replaced.
 By ReactIntl

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *value* | number |  | 
| *format* | string |  | 
| *timezone* | string |  | `"UTC"`

### import

```jsx
import  from "@walmart/wmreact-product-buttons";
```

<hr/>
