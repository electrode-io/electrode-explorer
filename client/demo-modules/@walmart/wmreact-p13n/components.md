#  (@walmart/wmreact-p13n)

P13N common modules and components


## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *page* | string |  | 
| *isMobile* | bool |  | 
| *placementId* | string |  | 
| *irsData* | object |  | 
| *products* | array |  | 

### import

```jsx
import  from "@walmart/wmreact-p13n";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *enableATC* | bool |  | `true`
| *isRVI* | bool |  | 
| *index* | number |  | `0`
| *product* | object |  | 
| *onAddToCart* | func |  | 
| *onCloseAddedToCartFlyout* | func |  | 
| *actionStatus* | object |  | 
| *onClick* | func |  | 

### import

```jsx
import  from "@walmart/wmreact-p13n";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *irsData* | object |  | 
| *products* | array |  | 
| *handleClick* | func |  | 

### import

```jsx
import  from "@walmart/wmreact-p13n";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *selected* | bool |  | 
| *product* | object |  | 
| *onClick* | func |  | 
| *classNames* | string |  | `"rvi-tile-image"`

### import

```jsx
import  from "@walmart/wmreact-p13n";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *irsData* | object |  | 
| *products* | array |  | 
| *handleClick* | func |  | 

### import

```jsx
import  from "@walmart/wmreact-p13n";
```

<hr/>

## 

P13N container sends single request to p13n web service and retrieves
 all placements data for the page in one shot and stored in
 irsDataMap prop. Each P13N zone get its irs data by placementId.
 Note that this module needs to be as children of TempoWrapper.
 ```
 <P13NContainer
 page="Homepage",
 parentItemId="1234"
 />
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *page* | string |  | 
| *parentItemId* | string |  | 
| *irsDataMap* | object |  | 
| *resultDetail* | object |  | 
| *visitorId* | string |  | 
| *tempoModules* | object |  | 
| *isMobile* | bool |  | `false`
| *placementIds* | arrayOf |  | 
| *queryParams* | object |  | 
| *onAjaxRender* | func |  | 
| *onDataFetchComplete* | func |  | 
| *onDataFetchFailed* | func |  | 
| *dataAutomationId* | string |  | `""`

### import

```jsx
import  from "@walmart/wmreact-p13n";
```

<hr/>
