# Base (@walmart/wmreact-base)

Core non-interactive Hydra UI components


## Body

Body container component.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *logoImage* | string | The logo image to use | `"//i5.walmartimages.com/dfw/63fd9f59-a546/k2-_4700...`
| *title* | string | The page title | `""`
| *navTarget* | string | The navigation target | `""`
| *navText* | string | The navigation text | `""`
| *navShort* | string | The short name for the nav | `""`
| *navIcon* | string | The navigation icon | `""`
| *footerLeft* | node | Extra content for the left of the footer | `null`
| *footerRight* | node | Extra content for the right of the footer | `<a className="js-footer-feedback-opinion-lab" href...`
| *showHeader* | bool | True if the header should be shown | `true`
| *showFooter* | bool | True if the footer should be shown | `true`
| *headerHref* | string | The link for the title on the header | `"/"`

### import

```jsx
import {Body} from "@walmart/wmreact-base";
```

<hr/>

## Copy

Makes copy

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *hidden* | bool |  | 

### import

```jsx
import {Copy} from "@walmart/wmreact-base";
```

<hr/>

## Copy.Mini

Makes mini copy.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *hidden* | bool |  | 

### import

```jsx
import {Copy} from "@walmart/wmreact-base";
```

<hr/>

## Copy.OpenLeading

Makes open-leading copy

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *hidden* | bool |  | 

### import

```jsx
import {Copy} from "@walmart/wmreact-base";
```

<hr/>

## Copy.Small

Makes samll copy

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *hidden* | bool |  | 

### import

```jsx
import {Copy} from "@walmart/wmreact-base";
```

<hr/>

## Descriptions

Descriptions components family

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *emphasize* | bool | True if it should apply `dl-emphasize` | `false`
| *horizontal* | bool | True if it should apply `dl-horizontal` | `false`
| *copySmall* | bool | True if it should apply `copy-small` | `false`
| *copyMini* | bool | True if it should apply `copy-mini` | `false`
| *hidden* | bool |  | 

### import

```jsx
import {Descriptions} from "@walmart/wmreact-base";
```

<hr/>

## Descriptions.Description

Description within a descriptions block

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *hidden* | bool |  | 

### import

```jsx
import {Descriptions} from "@walmart/wmreact-base";
```

<hr/>

## Descriptions.Term

Description term

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *hidden* | bool |  | 

### import

```jsx
import {Descriptions} from "@walmart/wmreact-base";
```

<hr/>

## Icon.ValidationMarker

Validation marker component

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *error* | string | The error string | 
| *hidden* | bool |  | 

### import

```jsx
import {Icon} from "@walmart/wmreact-base";
```

<hr/>

## Image

Image component that conforms to our standard sizings.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *lazy* | bool |  | `false`
| *size* | number |  | 
| *height* | custom |  | 
| *width* | custom |  | 
| *onClick* | func |  | `() => {}`
| *src* | string |  | 
| *ondemand* | bool |  | `false`
| *hidden* |  |  | `false`

### import

```jsx
import {Image} from "@walmart/wmreact-base";
```

<hr/>

## ImageLoader

Image loader that manages errors and can display a loading
image.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *onError* | func |  | 

### import

```jsx
import {ImageLoader} from "@walmart/wmreact-base";
```

<hr/>

## Link

The base link component.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *arrow* | bool | True if you want to apply `arrow-link` | `false`
| *more* | bool | True if you want to apply `more-link` | `false`
| *dropdown* | bool | True if you want to apply `dropdown-link` | `false`
| *onClick* | func | Handles the onClick event. | 
| *active* | bool | True if you want to apply `active` | `false`
| *hidden* | bool |  | 

### import

```jsx
import {Link} from "@walmart/wmreact-base";
```

<hr/>

## Link.Arrow

Link with arrow.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *active* | bool | True if it should apply `active` | 
| *onClick* | func | Handles the onClick event. | 
| *hidden* | bool |  | 

### import

```jsx
import {Link} from "@walmart/wmreact-base";
```

<hr/>

## Link.Dropdown

Dropdown link.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *onClick* | func | Handles the onClick event. | 
| *hidden* | bool |  | 

### import

```jsx
import {Link} from "@walmart/wmreact-base";
```

<hr/>

## Link.More

Link for more.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *onClick* | func | Handles the onClick event. | 
| *hidden* | bool |  | 

### import

```jsx
import {Link} from "@walmart/wmreact-base";
```

<hr/>
