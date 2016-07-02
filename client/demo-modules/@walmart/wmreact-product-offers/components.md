#  (@walmart/wmreact-product-offers)

A set of react components for the product offers


## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *primaryShippingPrice* | number | This is shipping price | 
| *secondaryMessage* | string | This is secondary shipping message | 
| *logo* | string | logo to be displayed | 
| *currency* | string | Currency to fed in as currency symbols
Can also use the ISO code for currency, but will not be translated to currency symbol | 
| *secondaryShippingPrice* | number | Price if we have any for secondary message | 
| *showPlus* | bool | true if we have to show "+" before message | 

### import

```jsx
import  from "@walmart/wmreact-product-offers";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *price* | number | Product hero price | `0`
| *currency* | string | Currency to fed in as currency symbols
Can also use the ISO code for currency, but will not be translated to currency symbol | `"$"`
| *shippingPrice* | number | Shipping price | 
| *pickupable* | bool | Flag when product is pickable | 
| *pickupToday* | bool | Flag when product is eligible for pickup today | 
| *freeShippingThresholdPrice* | number | Price if product is threshold shipping eligible | 
| *shippable* | bool | Flag when product is shippable | 
| *isFreight* | bool | Flag when product is eligible for Freight delivery | 
| *shippingPass* | bool | Flag when product is shipping pass eligible | 
| *showPlus* | bool | true if we have to show "+" before message | 

### import

```jsx
import  from "@walmart/wmreact-product-offers";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *currency* | string | Currency to fed in as currency symbols
Can also use the ISO code for currency, but will not be translated to currency symbol | 
| *displayRange* | bool | Boolean to determine if we display price as a range or standalone price | 
| *type* | string | The label of secondary price. | 
| *oldPrice* | number | Old Price to display | 
| *minOldPrice* | number | Old Price to display | 
| *maxOldPrice* | number | Old Price to display | 
| *savePrice* | number | Save Price to display | 
| *outOfStock* | bool | Is it Out of stock? | 

### import

```jsx
import  from "@walmart/wmreact-product-offers";
```

<hr/>

## ProductOffer

The main offer component component. Used to display the
 - Product pricecd
 - Product status: out of stock
 - Price per unit
 - store name
 - secondary price: was, list, savings prices
 - fulfillment info: shipping pass, shipping, pickup.
 For example this is how we use this component.
 ```jsx
 <ProductOffer price={100.99}
   currency="$"
   minPrice={100}
   maxPrice={1000.00}
   displayRange={true}
   savingsPrice="$10.00"
   listPrice="$110.99"
   unitPrice="89.7¢ / oz"
   storeName="Mountain view"
   shippable={true}
   pickupable={true}
   pickupToday={true}
   freeShippingThresholdPrice="$35"
   priceFlags={["clearance", "rollback"]}/>
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *price* | number | Primary price of the product | `0`
| *displayRange* | bool | Boolean to determine if we display price as a range or standalone price | `false`
| *minPrice* | number | Min Price of the offer | `0`
| *maxPrice* | number | Max price of the offer | `0`
| *currency* | string | Primary currency unit of the product price | `"$"`
| *savingsPrice* | number | Savings price of product | `0`
| *listPrice* | number | List price of product | `0`
| *minListPrice* | number | Min List price of product | `0`
| *maxListPrice* | number | Max List price of product | `0`
| *wasPrice* | number | Was price of product | `0`
| *minWasPrice* | number | Min Was price of product | `0`
| *maxWasPrice* | number | Max Was price of product | `0`
| *unitPrice* | string | Price per unit of product | `""`
| *availabilityStatus* | enum | Availability status of the product | `availabilityStatuses.IN_STOCK`
| *storeName* | string | Store Name of the product | `""`
| *shippable* | bool | Flag that determines if the product is shippable | `false`
| *shippingPrice* | number | Shipping price, default value is 0, indicating its free shipping. | `0`
| *pickupable* | bool | Flag that determines if the product is pickupable | `false`
| *pickupToday* | bool | Flag that determines if the product is pickupable today | `false`
| *preorder* | bool | Flag that determines if the product is preorder | `false`
| *freeShippingThresholdPrice* | number | Shipping threshold price | `0`
| *priceFlags* | array | List of price flags of the product | `[]`
| *isAValidOffer* | bool | Determines if the current state offer is invalid.
We use this flag to render an invalid state when an invalid variant combo is selected | `true`
| *seoProps* | bool | A flag to pass SEO props.
  Should only be called once to avoid duplicate props. | `false`
| *itemsLeft* | number | Total number of items left in stock | `0`

### import

```jsx
import {ProductOffer} from "@walmart/wmreact-product-offers";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *displayRange* | bool | Boolean to determine if we display price as a range or standalone price | 
| *minPrice* | number | Min Price of the offer | 
| *maxPrice* | number | Max price of the offer | 
| *price* | number | Actual price of the offer | 
| *autoId* | string | automationId | 
| *currency* | string | Primary currency unit of the product price | 
| *availabilityStatus* | enum | Availability status of the product | 
| *seoProps* | bool | A flag to pass SEO props.
    Should only be called once to avoid duplicate props. | 

### import

```jsx
import  from "@walmart/wmreact-product-offers";
```

<hr/>

## ProductOfferFulfillment

The offer fulfillment section. Displays
 - shipping pass (todo: this needs to be implemented)
 - shipping info
 -pickup info

 For example this is how we use this component.

 ```jsx
 <ProductOfferFulfillment shippable={true}
 pickupable={true}
 pickupToday={true}
 freeShippingThresholdPrice="$35"/>
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *shippable* | bool | Flag that determines if the product is shippable | `false`
| *pickupable* | bool | Flag that determines if the product is pickupable | `false`
| *pickupToday* | bool | Flag that determines if the product is pickupable today | `false`
| *currency* | string | Currency to fed in as currency symbols
Can also use the ISO code for currency, but will not be translated to currency symbol | `"$"`
| *freeShippingThresholdPrice* | number | The shipping threshold price | 
| *shippingPrice* | number | Shipping price, default value is 0, indicating its free shipping. | `0`

### import

```jsx
import {ProductOfferFulfillment} from "@walmart/wmreact-product-offers";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *isWM* | bool | if the seller is walmart | `false`
| *isToday* | bool | if it can be picked up today | `false`
| *isUpsell* | bool | it could be shipped earlier | `true`
| *minDate* | number | unix time for the earliest delivery date | 
| *maxDate* | number | unix time for the latest delivery date | 
| *storeName* | string | walmart store name | `""`

### import

```jsx
import  from "@walmart/wmreact-product-offers";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *currency* | string | Currency to fed in as currency symbols
Can also use the ISO code for currency, but will not be translated to currency symbol | 
| *minPrice* | number | Min price to display | 
| *maxPrice* | number | Max price to display | 
| *type* | enum | Determines what type of price range to render | 
| *typeLabel* | string | Label if the price range is Old | 
| *seoPriceProp* | string | The name of the SEO price prop | 
| *outOfStock* | bool |  | 
| *unit* | string |  | 

### import

```jsx
import  from "@walmart/wmreact-product-offers";
```

<hr/>
