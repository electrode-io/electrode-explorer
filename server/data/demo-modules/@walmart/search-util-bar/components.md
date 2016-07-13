#  (@walmart/search-util-bar)

search util bar


## Brand

The brand component flyout.
 For example this is how we use this component.
 ```jsx
 <Brand
 onChange={(ev)=>{console.log(ev)}}
 choices={[
   {
      "name":"Samsung",
      "url":"cat_id=0&prg=desktop&facet=brand:Samsung",
      "itemCount":4862,
      "expandOnLoad":true
   },
   {
      "name":"Apple",
      "url":"cat_id=0&prg=desktop&facet=brand:Apple",
      "itemCount":494,
      "expandOnLoad":true,
      "isSelected": true
   },
   {
      "name":"Better Homes and Gardens",
      "url":"cat_id=0&prg=desktop&facet=brand:Better%20Homes%20and%20Gardens",
      "itemCount":2962,
      "expandOnLoad":true
   }
  ]}/>
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *choices* | array |  | `[]`
| *onChange* | func |  | 

### import

```jsx
import {Brand} from "@walmart/search-util-bar";
```

<hr/>

## Price

The price component flyout.
 For example this is how we use this component.
 ```jsx
 <Price
  onChange={(range)=> {console.log(range)}}
 />
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *min* | number |  | `null`
| *max* | number |  | `null`
| *currency* | string |  | `"usd"`
| *onChange* | func |  | 

### import

```jsx
import {Price} from "@walmart/search-util-bar";
```

<hr/>

## Sort

The sort component flyout.
 For example this is how we use this component.
 ```jsx
 <Sort
  currentSortValue="price_high"
  options={options}
  onChange={(ev)=> {console.log(ev)}}
 />
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *currentSortValue* | string |  | 
| *options* | array |  | 
| *onChange* | func |  | 

### import

```jsx
import {Sort} from "@walmart/search-util-bar";
```

<hr/>

## Store

The Store component flyout.
 For example this is how we use this component.
 ```jsx
 <Store
  nearbyStores={nearbyStores}
  selectedStores={["5435", "2486", "5884"]}
  location={location}
  onFetchStores={(location)=>{console.log(location)}}
  onFetchPreso={(event)=>{console.log(event)}}
 />
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *location* | any |  | 
| *selectedStores* | array |  | 
| *nearbyStores* | array |  | 
| *onFetchStores* | func |  | 
| *onFetchPreso* | func |  | 

### import

```jsx
import {Store} from "@walmart/search-util-bar";
```

<hr/>

## Switcher

The Switcher component flyout.
 For example this is how we use this component.
 ```jsx
 <Switcher
   isGridView={false}
   onChange={(showGrid)=> {console.log(showGrid)}}
 />
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *isGridView* | bool |  | 
| *onChange* | func |  | 

### import

```jsx
import {Switcher} from "@walmart/search-util-bar";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *min* | number |  | 
| *max* | number |  | 
| *currency* | string |  | 
| *onChangePrice* | func |  | 
| *brandChoices* | array |  | 
| *onChangeBrand* | func |  | 
| *location* | any |  | 
| *selectedStores* | array |  | 
| *nearbyStores* | array |  | 
| *onFetchStores* | func |  | 
| *onFetchPreso* | func |  | 
| *currentSortValue* | string |  | 
| *sortOptions* | array |  | 
| *onChangeSort* | func |  | 
| *isGridView* | bool |  | `false`
| *onChangeSwitcher* | func |  | 

### import

```jsx
import  from "@walmart/search-util-bar";
```

<hr/>
