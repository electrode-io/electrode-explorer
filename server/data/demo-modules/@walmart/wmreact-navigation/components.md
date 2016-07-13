#  (@walmart/wmreact-navigation)




## Breadcrumbs

Breadcrumbs control.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *mini* | bool | True if we should apply the mini CSS | `false`
| *automationId* | string | Optional automation ID | 
| *hidden* | bool |  | 

### import

```jsx
import {Breadcrumbs} from "@walmart/wmreact-navigation";
```

<hr/>

## Subnav

Subnav control.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *staticPage* | bool | If a page is static, add `staticPage` to set a fixed
    width of 1024px to the subnav. This maintains correct
    styling if a browser is more narrow than 1024px and the
    user scrolls to the right. | `false`
| *withContainer* | bool | Adds a container element inside the subnav for proper
    display when the element should span the entire width
    of the page. | `false`
| *automationId* | string | If a component user or author needs a subnav to differentiate
    itself for automation purposes, we accept an
    externally-supplied automationId. | 
| *hidden* | bool |  | 

### import

```jsx
import {Subnav} from "@walmart/wmreact-navigation";
```

<hr/>

## Subnav.Item

Subnav child item.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *title* | node | Item title | 
| *childCount* | number | The index | `1`
| *current* | bool | True if this is the current item | `false`
| *onClick* | func | onClick callback | `function(event: Object): void {}`
| *href* | string | The href attribute for the link | `"#"`
| *automationId* | string | An optional automation ID | 
| *hidden* | bool |  | 

### import

```jsx
import {Subnav} from "@walmart/wmreact-navigation";
```

<hr/>

## Tabs

Tabs container.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *automationId* | string | If a component user or author needs a tab control to
    differentiate itself for automation purposes, we
    accept an externally-supplied automationId. | 
| *hidden* | bool |  | 

### import

```jsx
import {Tabs} from "@walmart/wmreact-navigation";
```

<hr/>

## Tabs.Item

Tabs child item.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *title* | node | The title | 
| *hidden* | bool |  | 

### import

```jsx
import {Tabs} from "@walmart/wmreact-navigation";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *url* | string |  | 
| *name* | string |  | 

### import

```jsx
import  from "@walmart/wmreact-navigation";
```

<hr/>
