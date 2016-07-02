#  (@walmart/wmreact-product-typography)

Typography components for the Product and related pages.


## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *serverLineHeight* | union | The CSS `line-height` to use when visually truncating text in a
   server-side render. | `1.5`
| *text* | string | The text to (potentially) truncate; passed along to `react-text-truncate`. | 
| *line* | number | The maximum number of lines to render; passed along to `react-text-truncate`. | 
| *doInsertHTMLTitle* | bool | A flag to enable title inserted as HTML | 

### import

```jsx
import  from "@walmart/wmreact-product-typography";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *legalBadgeLabel* | string | Legal badge label. | 
| *brandName* | string | The brand name. | 
| *qAndALabel* | string | Q & A label. Defaults to Q&A | 
| *onQAndAClick* | func | On click callback handler for Q&A button | 
| *starsSize* | enum | Size of the reviews star component. Defaults to medium. | 
| *emptyReviewLabel* | string | Label to render when review count is 0. Defaults to Write a review. | 
| *onStarsClick* | func | Click handler for stars. | 
| *onReviewsClick* | func | Click handler for reviews count | 
| *total* | number | The total number of stars (e.g. 5, 10) | 
| *average* | number | The average number of stars (e.g. 3) | 
| *reviewsLabel* | string | Label for the reviews count section. Defaults to reviews | 
| *count* | custom | The count of reviews | 

### import

```jsx
import  from "@walmart/wmreact-product-typography";
```

<hr/>

## ProductLegalBadge

The legal badge component.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *badgeLabel* | string | The legal badge label. | 

### import

```jsx
import {ProductLegalBadge} from "@walmart/wmreact-product-typography";
```

<hr/>

## ProductShortDescription

Display the short description an an anchor link to
 the long description.section

 For example this is how we use this component.

 ```jsx
 <ProductShortDescription
 moreInfoLabel="More about this item..."
 content={"<li>Plugs into your HDTV<li>Streams media from laptops, tablets and smartphones"}/>
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *content* | string | The content aka the short descrition of the product. | `""`
| *moreInfoLabel* | string | Label for the long description link. | `"More about this item..."`
| *onClick* | func | Onclick handler for more info button. | `() => {}`
| *big* | bool | Use larger font size | `false`
| *removeMoreInfoLabel* | bool | A flag that determines if the more info label should be removed | `false`

### import

```jsx
import {ProductShortDescription} from "@walmart/wmreact-product-typography";
```

<hr/>

## ProductStoreInfoLabel

This is a clickable button that specifies a store.

 ```jsx
 <ProductStoreInfoLabel
  storeName="Mountain View"
 />
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *storeName* | string |  | 

### import

```jsx
import {ProductStoreInfoLabel} from "@walmart/wmreact-product-typography";
```

<hr/>

## ProductTitle

The product title or name for a give product.
Per UX spec, this title has a font-size of 18px by default, 20px on breakpoint-s
and 25px font-size on breakpoint-m or above.

For example this is how we use this component.

```jsx
<ProductTitle title="MagLite 4 D-Cell Flashlight"/>
```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *title* | string | The name or title of the product. | 
| *big* | bool | Use larger font size | `false`
| *maxLines* | number | Max number of lines to show before truncating | 
| *doInsertHTMLTitle* | bool | A flag to enable title rendering using inner html | `false`

### import

```jsx
import {ProductTitle} from "@walmart/wmreact-product-typography";
```

<hr/>
