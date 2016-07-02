#  (@walmart/wmreact-product-higher-order-components)

A set of react components for non-atomic product components


## ProductsCarousel

Products carousel.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *products* | array | The array of products | `[]`

### import

```jsx
import {ProductsCarousel} from "@walmart/wmreact-product-higher-order-components";
```

<hr/>

## 

Basic Structure for Sticky Nav
<div>
  <StickyNav selected={0} minScreen="large">
    <StickNav.Row title="Foo" link="foo">content</StickyNav.Row>
    <StickNav.Row title="Bar" link="bar">content</StickyNav.Row>
    <StickNav.Row title="Baz" link="baz">content</StickyNav.Row>
  </StickyNav>
</div>

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *tabs* | array |  | 
| *selected* | number |  | 
| *initYOffset* | number |  | 
| *minScreen* | string |  | 

### import

```jsx
import  from "@walmart/wmreact-product-higher-order-components";
```

<hr/>

## 

Basic component for Buying Options Table messaging
Ex: Pick up options messaging

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *iconType* | string | Children to render in container | `""`
| *messaging* | string |  | `""`
| *launchModalText* | string |  | `""`
| *showMessagingSection* | bool |  | 
| *onClickLaunchModal* | func |  | `() => {/*no-op*/}`

### import

```jsx
import  from "@walmart/wmreact-product-higher-order-components";
```

<hr/>

## Comparison

Comparison table that switch from small to large based on size.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *productData* | array | The product data | `[]`

### import

```jsx
import {Comparison} from "@walmart/wmreact-product-higher-order-components";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *products* | array | The products | `[]`
| *animated* | bool | True if it's animated | `true`
| *columns* | object | Number of columns to display | `{ medium: 3, large: 4 }`
| *tileType* | string | Type of tile | `""`
| *automationId* | string | Automation Id | 

### import

```jsx
import  from "@walmart/wmreact-product-higher-order-components";
```

<hr/>

## Comparison.Large

Large factor comparison table.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *productData* | array | The product data | `[]`

### import

```jsx
import {Comparison} from "@walmart/wmreact-product-higher-order-components";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *count* | number | Count of ratings for the particular rating value | 
| *totalReviewCount* | number | Total number of reviews for the item | 
| *ratingValue* | number | The star rating value | 
| *onRatingClicked* | func | Callback to execute when the rating bar is clicked | 
| *active* | custom | The current rating bar whose reviews are shown. If none, then all reviews are shown | 

### import

```jsx
import  from "@walmart/wmreact-product-higher-order-components";
```

<hr/>

## 

StickyNav.Row is child element for Sticky Nav
  <StickNav.Row>Tab Content</StickyNav.Row>


### import

```jsx
import  from "@walmart/wmreact-product-higher-order-components";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *usItemId* | string | Product us item id | 
| *total* | number | The total number of stars (e.g. 5, 10) | 
| *average* | number | The average number of stars (e.g. 3) | 
| *count* | number | The count of reviews | 

### import

```jsx
import  from "@walmart/wmreact-product-higher-order-components";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *offerCount* | number | number of other sellers | 
| *isWMseller* | bool | walmart is among marketplace sellers | 
| *usItemId* | number | walmart is among marketplace sellers | 
| *offers* | arrayOf | array of offers | 

### import

```jsx
import  from "@walmart/wmreact-product-higher-order-components";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *reviewId* | number | Prop Types | 
| *reviewTitle* | string |  | 
| *reviewText* | string |  | 
| *reviewUrl* | string |  | 
| *rating* | number |  | 
| *reviewSubmissionTime* | string |  | 
| *userNickname* | string |  | 
| *badgeList* | array |  | 

### import

```jsx
import  from "@walmart/wmreact-product-higher-order-components";
```

<hr/>

## 




### import

```jsx
import  from "@walmart/wmreact-product-higher-order-components";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *title* | string | The title of the item or collection. | 
| *description* | string | The description of the item or collection. | 
| *imageWidth* | number | The width of the hero image. | `450`
| *imageHeight* | number | The height of the hero image. | `450`
| *imageUrl* | string | This is a URL of the hero image. | 
| *onClick* | func | Click handler for read more link | `() => {}`

### import

```jsx
import  from "@walmart/wmreact-product-higher-order-components";
```

<hr/>

## Comparison.Small

Phone factor comparison table.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *productData* | array | The product data | `[]`

### import

```jsx
import {Comparison} from "@walmart/wmreact-product-higher-order-components";
```

<hr/>

## ProductsBOT

Basic container component for Buying Options Table.
Where Foo is any React component e.g. <ProductOffer />


### import

```jsx
import {ProductsBOT} from "@walmart/wmreact-product-higher-order-components";
```

<hr/>

## ProductsBOT.Row

Wraps a ProductsBOT.Row cell.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *showBottomBorder* | bool | Hide the bottom border style | `true`
| *colored* | bool | Adds a background color to the bot row. | `false`

### import

```jsx
import {ProductsBOT} from "@walmart/wmreact-product-higher-order-components";
```

<hr/>
