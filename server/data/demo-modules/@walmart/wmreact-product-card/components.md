#  (@walmart/wmreact-product-card)

This is a product card component that displays product data like image, price, availability, variants, reviews, ratings and CTA buttons.


## ProductCallToAction

This component represents the call to action section of a product.
This component displays the quantity dropdown and the buttons like
Add To Cart, In-stock alert etc.
```jsx
<ProductCallToAction maxQuantity={12} url="/product/1531"/>
```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *addedQuantity* | number | The number of items have been added to cart | 
| *maxAddQuantity* | number | The limit number of the items that could be added to cart | 
| *maxQuantity* | number | The max orderable quantity | `Defaults.DEFAULT_MAX_QUANTITY`
| *url* | string | Product url | 
| *availabilityStatus* | enum | This is the AvailabilityStatus of the item. | `AvailabilityStatus.IN_STOCK`
| *pureSoi* | bool | If this product is a pure store only item. | `false`
| *preorder* | bool | If this product is avaialble for preorder | `false`
| *preorderInfo* | shape | The date it ships and tye type of preorder it is. | `{}`
| *quantityLabel* | string | label text for quantity | 
| *variantsUnselectedExperience* | bool | Is it variant selected or unselected experience | `true`
| *variantTypes* | custom |  | `[]`
| *onAddToCart* | func |  | `() => { /*no-op*/ }`
| *onNotifyBackInStock* | func |  | `() => { /*no-op*/ }`
| *onCloseAddedToCartFlyout* | func |  | `() => { /*no-op*/ }`
| *onCloseNotifyFlyout* | func |  | `() => { /*no-op*/ }`
| *onQuantityChange* | func |  | `() => { /*no-op*/ }`
| *actionStatus* | enum |  | 
| *isAValidOffer* | bool | A flag for if the product isAValidOffer. Generally used for variant combination
  to tell if a product is available for purchase. | `true`
| *flyoutDirection* | string | Optional flyout direction | `""`

### import

```jsx
import {ProductCallToAction} from "@walmart/wmreact-product-card";
```

<hr/>

## ProductCard

This component displays product information in a card layout
```jsx
<ProductCard name="samsung tv" url="/ip/1531"
price={{price:40, currency:"$", savingsPrice:"$5", wasPrice:"$45"}}
maxQuantity={12} maxRating={5} averageRating={4} numberOfReviews={22}
flags={[{text: "Rollback", type: "rollback"}]}/>
```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *isMobile* | bool | check mobile device | `false`
| *name* | string | Name of the product | 
| *url* | string | Product url | 
| *id* | string | Product ID | `Defaults.DEFAULT_ID`
| *imageUrl* | string | Product image url | `Defaults.DEFAULT_IMAGE_URL`
| *productCardIndex* | number | index of current product card in collection | 
| *price* | custom | Price details for the product | `{ savingsPrice: 0, listPrice: 0, wasPrice: 0, unit...`
| *maxQuantity* | number | The max orderable quantity | 
| *maxRating* | number | The max rating | `Defaults.DEFAULT_MAX_RATING`
| *averageRating* | number | The current rating of the product | `Defaults.DEFAULT_AVERAGE_RATING`
| *addedQuantity* | number | The number of items have been added to cart | 
| *maxAddQuantity* | number | The limit number of the items that could be added to cart | 
| *numberOfReviews* | number | The number of reviews for this product | `Defaults.DEFAULT_NUMBER_OF_REVIEWS`
| *pureSoi* | bool | If this product is a pure store only item. | `false`
| *preorder* | bool | If this product is avaialble for preorder | `false`
| *preorderInfo* | shape | The date it ships and tye type of preorder it is. | `{}`
| *flags* | arrayOf | Price flags displayed on the image | 
| *availabilityStatus* | enum | Availability status of the product | `AvailabilityStatus.IN_STOCK`
| *isAValidOffer* | bool | A flag for if the product isAValidOffer. Generally used for variant combination
  to tell if a product is available for purchase. | `true`
| *variantTypes* | custom |  | `[]`
| *onVariantClick* | func |  | `() => {/*noop*/}`
| *onVariantMouseLeave* | func |  | `() => {/*noop*/}`
| *onVariantMouseEnter* | func |  | `() => {/*noop*/}`
| *onAddToCart* | func |  | `() => { /*no-op*/ }`
| *onNotifyBackInStock* | func |  | `() => { /*no-op*/ }`
| *onCloseAddedToCartFlyout* | func |  | `() => { /*no-op*/ }`
| *onCloseNotifyFlyout* | func |  | `() => { /*no-op*/ }`
| *onQuantityChange* | func |  | `() => { /*no-op*/ }`
| *actionStatus* | enum |  | 

### import

```jsx
import {ProductCard} from "@walmart/wmreact-product-card";
```

<hr/>

## ProductImage

This component displays product image

```jsx
<ProductImage url="/ip/1531"
imageUrl="http://placehold.it/1000x1000"
flags={[{text: "Rollback", type: "rollback"}]}/>
```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *isLazy* | bool | Lazy Loading Boolean | `false`
| *imageUrl* | string | Product image url | `Defaults.DEFAULT_IMAGE_URL`
| *size* | number | Image size | `Defaults.DEFAULT_IMAGE_SIZE`
| *url* | string | Product url | 
| *flags* | arrayOf | Price flags displayed on the image | `Defaults.DEFAULT_FLAGS`
| *maxFlags* | number | Maximum number of flags to render | `Defaults.DEFAULT_IMAGE_MAX_FLAGS`
| *isAValidOffer* | bool | A flag for if the product isAValidOffer. Generally used for variant combination
   to tell if a product is available for purchase. | `true`
| *productTitle* | string | Product Title | `""`
| *shouldRenderFlags* | bool | A flag to help remove flags rendering when it's necessary | `true`
| *isTileImage* | bool | A flag to determine if tile image should be used | `false`

### import

```jsx
import {ProductImage} from "@walmart/wmreact-product-card";
```

<hr/>

## ProductItemTile

Product item tile.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *img* | string | Product image | 
| *image* | string | Product image | 
| *title* | string | Title | 
| *display-price* | number | Display price | 
| *original-price* | number | Original price | 
| *reduced* | string | Reduced | 
| *stars* | number | Number of stars | 
| *offerShippingPassEligible* | bool | Is offerShippingPassEligible | 
| *numReviews* | number | Number of reviews | 
| *properties* | object | Additional properties object including URL and variants | 

### import

```jsx
import {ProductItemTile} from "@walmart/wmreact-product-card";
```

<hr/>

## ProductThemeTile

Product theme tile.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *imageSrc* | string | Image URL | 
| *title* | string | Theme title | 
| *url* | string | Theme page url | 

### import

```jsx
import {ProductThemeTile} from "@walmart/wmreact-product-card";
```

<hr/>

## StoreItemTile

Store item tile.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *inStoreInfo* | object |  | 

### import

```jsx
import {StoreItemTile} from "@walmart/wmreact-product-card";
```

<hr/>

## Tile

Product tile.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *flags* | arrayOf | Price flags displayed on the image | `null`
| *availabilityStatus* | enum | Availability status of the product | `AvailabilityStatus.IN_STOCK`
| *stars* | object | Stars data | `null`
| *offerShippingPassEligible* | bool | ShippingPassTile data if this is an overlay | `false`
| *image* | node | Image element | `null`
| *imageSrc* | string | Image URL | `null`
| *title* | string | Product title. Null to not show any title. | `"Title"`
| *footer* | node | Footer element | `null`
| *extra* | node | Extra element | `null`
| *price* | custom | Price details for the product. Null to not show any price. | `{ price: 0, savingsPrice: 0, listPrice: 0, wasPric...`
| *fromPrice* | custom | From price details for the product | 
| *preorder* | bool | If this product is avaialble for preorder | `false`
| *isAValidOffer* | bool | A flag for if the product isAValidOffer. Generally used for variant combination
  to tell if a product is available for purchase. | `true`
| *overlayNode* | node | An optional overlay node | `null`
| *overlay* | bool | True if this is an overlay | `true`
| *altText* | string | Alternate text | `null`
| *unitLabel* | string | The units label | `"quantity"`
| *url* | string | The product URL | `"#"`
| *quantities* | array | Quantities | `null`
| *variants* | array | Variants | 
| *isSubmap* | bool | is Submap eligible product | `false`
| *submapMessage* | string | submap message to be shown | `"See details in cart"`
| *maxTitleLines* | number | Maximum number of lines to allow for the product title. 0 for no truncation. | `0`
| *inStoreOnly* | bool | Is in store only product. | `false`
| *quantityLeft* | number | Quantity left for a product. Will display if non-null. | `null`
| *showSubmapFlyout* | bool | Show submap flyout? | `false`
| *submapFlyoutCheckout* | bool | True to use checkout submap flyout content. Otherwise will use cart version. | `false`
| *submapFlyoutPosition* | enum | Position of the submap flyout. | `"right"`
| *lowercasePriceText* | bool | To set all price text (was, list price, save, etc.) as lowercase | `false`
| *uid* | string | Unique identifier for anchor tags used for analytics | `""`
| *dataAutomationId* | string | Prefix to generate unique identifiers for automation tests | `""`

### import

```jsx
import {Tile} from "@walmart/wmreact-product-card";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *title* | string | The title of the product | 
| *imageUrl* | string | The image url of the product | 
| *imageSize* | number | The size of the item preview image | `100`
| *usItemId* | string | The UsItemID of the product | 
| *selectedVariant* | arrayOf | Selected Variant Array (i.e. size & color) | 
| *price* | shape | Price details for the product | 

### import

```jsx
import  from "@walmart/wmreact-product-card";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *flags* | arrayOf | Price flags displayed on the image | 
| *maxFlags* | number | Maximum number of flags to render | 

### import

```jsx
import  from "@walmart/wmreact-product-card";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *name* | string | Name of the product | 
| *url* | string | Product url | 
| *price* | shape | Price details for the product | `{ savingsPrice: 0, listPrice: 0, wasPrice: 0, unit...`
| *maxRating* | number | The max rating | `Defaults.DEFAULT_MAX_RATING`
| *averageRating* | number | The current rating of the product | `Defaults.DEFAULT_AVERAGE_RATING`
| *numberOfReviews* | number | The number of reviews for this product | `Defaults.DEFAULT_NUMBER_OF_REVIEWS`
| *flags* | arrayOf | Price flags displayed on the image | 
| *availabilityStatus* | enum | Availability status of the product | `AvailabilityStatus.IN_STOCK`
| *preorder* | bool | If this product is avaialble for preorder | `false`
| *isAValidOffer* | bool | A flag for if the product isAValidOffer. Generally used for variant combination
    to tell if a product is available for purchase. | `true`
| *offerShippingPassEligible* | bool | A flag for if the product is shipping pass eligibile. | `false`
| *seoProps* | bool | A flag to pass SEO props.
    Should only be called once to avoid duplicate props. | `false`
| *maxTitleLines* | number | Maximum number of lines to allow for the product title. 0 for no truncation. | `0`

### import

```jsx
import  from "@walmart/wmreact-product-card";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *bottomLinkOnClick* | custom | Bottom link handler | `() => {}`
| *bottomLinkText* | string | Bottom link text | `""`
| *imageClassName* | string | Image container optional class | `"Grid-col u-size-1-4-xs"`
| *imageOnClick* | custom | Image button handler | `""`
| *imageSize* | number | The size of the item preview image | `150`
| *imageUrl* | string | The image url of the product | 
| *infoClassName* | string | Product info optional class | `"Grid-col u-size-3-4-xs"`
| *quantityIncluded* | number | Number of items in package | 
| *shortDescription* | object | Short description properties (maxLines, asHTML, text) | 
| *stars* | object | Star rating information | `{}`
| *starsOnClick* | custom | Function to run when the number of ratings is clicked | `() => {}`
| *title* | string | The title of the product | 

### import

```jsx
import  from "@walmart/wmreact-product-card";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *idx* | number | for automation id | `0`
| *price* | number | item's price from this seller | 
| *pickupable* | bool | if it can be picked up | 
| *pickupToday* | bool | if it can be picked up today | 
| *freeShippingThresholdPrice* | number | shreshhold for free shipping | 
| *shippable* | bool | can be shipped | 
| *isFreight* | bool | if ship method is freight | 
| *shippingPass* | bool | if it has shipping pass | 
| *shipPrice* | number | shipping price | 
| *isWM* | bool | if the seller is walmart online or store | 
| *isUpsell* | bool | it could be shipped earlier | 
| *minDate* | number | unix time for the earliest delivery date | 
| *maxDate* | number | unix time for the latest delivery date | 
| *storeName* | string | walmart store name | 
| *sellerName* | string | seller's name | 
| *isSOI* | bool | store only item from walmart | 
| *sellerLink* | string | seller's website | 
| *sellerLogo* | string | seller's logo | 
| *returnPolicy* | string | seller's return policy | 
| *addedQuantity* | number | number of items have been added to cart for this ATC click | 
| *onAddToCart* | func | ATC click event handler | 
| *maxQuantity* | number | max quantity available for this item from this seller | 
| *maxAddQuantity* | number | limit of the number of items which can be added to cart | 
| *onCloseAddedToCartFlyout* | func | close ATC flyout event handler | 
| *onQuantityChange* | func | quantity select on change event handler | 
| *actionStatus* | enum | action status which controls the ATC button state | 

### import

```jsx
import  from "@walmart/wmreact-product-card";
```

<hr/>
