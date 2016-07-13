#  (@walmart/store-finder-carousel)

Carousel for finding nearby stores


## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *toggleSearching* | func |  | `noop()`
| *isSearching* | bool |  | `false`
| *zip* | string |  | `""`
| *onSearch* | func |  | `noop()`

### import

```jsx
import  from "@walmart/store-finder-carousel";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *onClick* | func |  | `noop()`
| *shouldLink* | bool |  | `true`
| *isMyStore* | bool |  | `false`
| *store* | shape |  | 

### import

```jsx
import  from "@walmart/store-finder-carousel";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *stores* | arrayOf | The array of stores to loop over. It's expected that these arrive in the shape
returned by the GSF endpoint: https://confluence.walmart.com/display/PGGSF/Response+Json | `[]`
| *onChange* | func | Callback to be fired when user selects a store. It's passed the ID of the new store. | `noop()`
| *onZipChange* | func | Callback to be fired when user enters a new zip to search near. It's passed the new zip. | `noop()`
| *filterDecorators* | func | Callback to restrict what navigation UI is shown: hairline arrows, dots, etc.
By default, the carousel shows all the "decorators" (UI elements) present in
gecgithub01.walmart.com/react/carousel/blob/master/src/components/carousel-decorators.jsx,
but consumers can pick and choose decorators by providing this arbitrary filtering function. | `() => true`
| *toggleVisibility* | func | Callback to handle showing/hiding carousel; see `props.isVisible`. | `noop()`
| *onMount* | func | Callback to alert parent container when mounted (e.g., for data fetching) | `noop()`
| *toggleSearching* | func | Callback to alert parent container to toggle between zip display/search mode. | `noop()`
| *loading* | bool | Governs whether to show spinner or not. If `loading` is true, no carousel will
be rendered, even if `stores` contains store objects. | `false`
| *isVisible* | bool | Governs 1.) whether carousel will be visible and 2.) whether UI text will read
"Show" or "Hide." | `true`
| *isSearchingForZip* | bool | Governs whether zip UI will show search box/button or current zip. | `false`
| *zip* | string | Zip code to be displayed in the upper left in the format, "Stores near {zip}."
If no zip is provided, no zip-related UI will appear. | `""`
| *currentStore* | number | Store ID to treat as "current." Current stores aren't hyperlinked or clickable. | 
| *myStore* | number | Store ID to highlight as "My Store" with a gold star. | 
| *carouselConfig* | object | All values namespaced under `carouselConfig` are passed through to the underlying `Carousel`:
https://gecgithub01.walmart.com/react/carousel/blob/master/src/components/carousel.jsx

`propTypes` left intentionally vague (no `shape`) because that's Carousel's decision. | `{ framePadding: "35", responsive: [{ selectors: ["...`

### import

```jsx
import  from "@walmart/store-finder-carousel";
```

<hr/>
