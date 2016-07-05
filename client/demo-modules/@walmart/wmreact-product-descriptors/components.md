#  (@walmart/wmreact-product-descriptors)

Components related to products descriptors


## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *total* | number | The total number of stars (e.g. 5, 10) | 
| *average* | number | The average number of stars (e.g. 3) | 
| *count* | number | The count label. | 
| *countNode* | node | The formatted count label node. If this prop is set, the component ignores the count property. | 
| *onCountClick* | func | Click handler for count. | 
| *onStarsClick* | func | Click handler for stars. | 
| *size* | enum | The display size | 
| *automationId* | string | Automation id | 
| *hidden* | bool |  | 

### import

```jsx
import  from "@walmart/wmreact-product-descriptors";
```

<hr/>

## 

This componet display the specification chart of an item.
```jsx
<Specification
  specifications={specsData}
/>

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *specifications* | arrayOf | specification data | 
| *stripeStyle* | string | style. Could be "odd", "even", "light-odd", "light-even" | `"odd"`

### import

```jsx
import  from "@walmart/wmreact-product-descriptors";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *shortDescriptionMarkup* | string | Short description markup | 

### import

```jsx
import  from "@walmart/wmreact-product-descriptors";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *yesCount* | number |  | `0`
| *noCount* | number |  | `0`
| *onYesClick* | func |  | 
| *onNoClick* | func |  | 
| *onReportClick* | func |  | 

### import

```jsx
import  from "@walmart/wmreact-product-descriptors";
```

<hr/>

## FlagList

This component displays a list of flags

```jsx
<div style={{height: 100}}>
  <FlagList>
    <Flag type="rollback" text="Rollback" />
    <Flag text="Clearance" align="right" />
    <Flag text="New flag" outline={true}/>
  </FlagList>
</div>

```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *outline* |  |  | `false`

### import

```jsx
import {FlagList} from "@walmart/wmreact-product-descriptors";
```

<hr/>

## Flag`

Product flag.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *type* | string | True if this is a certain type | 
| *outline* | bool | True if we should render in an outline mode | 
| *align* | custom | Specify alignment of left or right if required.
  The default is no alignment. | 
| *text* | string | text is the display content in the flag | 
| *hidden* | bool |  | 

### import

```jsx
import {Flag} from "@walmart/wmreact-product-descriptors";
```

<hr/>

## RatingSelector

This component allows a user to select a certain "star" rating.
It is used on the "write a review" page

```jsx
<div style={{height: 100}}>
  <RatingSelector />
</div>
```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *handleClick* | func |  | `() => {}`

### import

```jsx
import {RatingSelector} from "@walmart/wmreact-product-descriptors";
```

<hr/>
