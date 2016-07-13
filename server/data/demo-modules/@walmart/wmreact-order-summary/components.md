#  (@walmart/wmreact-order-summary)

<Add description here>


## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *taxTotal* | number |  | `0`
| *taxLabel* | string |  | `"Est. Tax"`
| *taxPostalCode* | string |  | `null`
| *taxCalculated* | bool |  | `true`
| *onTaxZipCodeChanged* | func |  | `null`
| *automation* | shape |  | `{ label: "order-summary-tax-label", price: "order-...`
| *tealeaf* | shape |  | `{ changeZipCode: "order-summary-tax-change-zip" }`
| *flyout* | shape |  | `{}`

### import

```jsx
import  from "@walmart/wmreact-order-summary";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *subTotal* | number |  | `0`
| *itemCount* | number |  | `0`
| *itemCountLink* | string |  | `null`
| *itemCountVisible* | bool |  | `true`
| *automation* | shape |  | `{ quantity: "order-summary-item-quantity", label: ...`
| *tealeaf* | shape |  | `{ quantity: "order-summary-item-quantity" }`

### import

```jsx
import  from "@walmart/wmreact-order-summary";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *label* | string |  | `"Shipping"`
| *price* | number |  | `0`
| *showFree* | bool |  | `true`
| *noSuffix* | bool |  | `false`
| *flyout* | shape |  | `null`
| *automationIndex* | number |  | `0`
| *automation* | shape |  | `{ label: "order-summary-shipping-type", price: "or...`

### import

```jsx
import  from "@walmart/wmreact-order-summary";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *price* | number |  | `0`
| *currency* | string |  | `"$"`
| *zeroAlt* | bool |  | `false`
| *zeroAltText* | string |  | `"FREE"`
| *plain* | bool |  | `true`
| *automationId* | string |  | 
| *tealeafId* | string |  | 

### import

```jsx
import  from "@walmart/wmreact-order-summary";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *postalCode* | string |  | `""`
| *onSubmit* | func |  | 
| *onCancel* | func |  | 
| *loading* | bool |  | `false`
| *automation* | shape |  | `{ input: "order-summary-tax-flyout-input", submit:...`
| *tealeaf* | shape |  | `{ input: "order-summary-tax-flyout-input", submit:...`

### import

```jsx
import  from "@walmart/wmreact-order-summary";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *subTotal* | number |  | `0`
| *lineItems* | arrayOf |  | `[]`
| *shippingCosts* | arrayOf |  | `[]`
| *genericFees* | arrayOf |  | `[]`
| *taxTotal* | number |  | `0`
| *grandTotal* | number |  | `null`
| *automation* | shape |  | `{}`
| *tealeaf* | shape |  | `{}`

### import

```jsx
import  from "@walmart/wmreact-order-summary";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *label* | string |  | `"Line Item"`
| *price* | number |  | `0`
| *showFree* | bool |  | `false`
| *flyout* | shape |  | `null`
| *automationIndex* | number |  | `0`
| *automation* | shape |  | `{ label: "order-summary-item-type", price: "order-...`

### import

```jsx
import  from "@walmart/wmreact-order-summary";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *grandTotal* | number |  | `0`
| *grandTotalLabel* | string |  | `"Total"`
| *automation* | shape |  | `{ label: "order-summary-grand-total-label", price:...`

### import

```jsx
import  from "@walmart/wmreact-order-summary";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *label* | string |  | `"Misc. Fee"`
| *price* | number |  | `0`
| *description* | union |  | `null`
| *automationIndex* | number |  | `0`
| *automation* | shape |  | `{ label: "order-summary-fee-type", price: "order-s...`

### import

```jsx
import  from "@walmart/wmreact-order-summary";
```

<hr/>
