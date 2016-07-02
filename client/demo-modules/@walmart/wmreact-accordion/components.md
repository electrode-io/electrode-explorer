# Accordion (@walmart/wmreact-accordion)

An accordion container for Electrode UIs


## Accordion

An accordion component with expanding/collapsing titled
accordion segments that works well in responsive.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *mode* | enum | In `auto` mode the accordion tabs open and close themselves. In `manual` mode
    you use the `completed` state on the accordion item to manage which item is open | `"auto"`
| *automationId* | string | The ID to use for automation | 
| *hidden* | bool |  | 

### import

```jsx
import Accordion from "@walmart/wmreact-accordion";
```

<hr/>

## Accordion.Item

The container class for the accordion items.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *title* | string | The title | 
| *index* | number | The index if you want to set the number manually | `null`
| *active* | bool | True if this is the active accordion item | `true`
| *open* | bool | True if the item is open | `false`
| *titleButton* | node | An optional title button if you want to use a button instead of text | `null`
| *titleExtra* | node | Optional extra material in the title area if you want it. | `null`
| *editButton* | node | The edit button if you want one | 
| *onClick* | func | An event callback for a click on the title bar. | `() => {}`
| *completed* | bool | Set to true if this step has been completed. | 
| *titleCompleted* | node | Title for when the step is completed. | 
| *automationId* | string | An optional automation ID | 
| *hidden* | bool |  | 

### import

```jsx
import Accordion from "@walmart/wmreact-accordion";
```

<hr/>

## Accordion.Summary

A item summary container specifically for accordions.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *inReview* | bool | True if we should add the `in-review` class | `false`

### import

```jsx
import Accordion from "@walmart/wmreact-accordion";
```

<hr/>
