# Layout (@walmart/wmreact-layout)

A set of layout components for hydra based UI


## Arrange

Container component for arrange layouts.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *spaced* | bool | Applies `arrange-spaced` class | `false`
| *middle* | bool | Applies `arrange-middle` class | `false`
| *bottom* | bool | Applies `arrange-bottom` class | `false`
| *equalSpacing* | bool | Applies `arrange-equal-spacing` class | `false`
| *equal* | bool | Applies `arrange-equal` class | `false`

### import

```jsx
import {Arrange} from "@walmart/wmreact-layout";
```

<hr/>

## Arrange.FitAll

Convencience component to apply an arrange-fit layout to all of the children.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *spaced* | bool | Applies `arrange-spaced` to the container. | `true`
| *middle* | bool | Applies `arrange-middle` to the container. | `false`
| *bottom* | bool | Applies `arrange-bottom` to the container. | `false`
| *equalSpacing* | bool | Applies `arrange-equal-spacing` to the container. | `false`
| *equal* | bool | Applies `arrange-equal` to the container. | `false`

### import

```jsx
import {Arrange} from "@walmart/wmreact-layout";
```

<hr/>

## CSSMediaSelector

Media selector is a component that wraps a group of children.
Those children can have a `visibleWidths` prop that defines
when they should be visible. For example, if the child has
`visibleWidths` set to `['small','medium']` then it will only
be visible in small and medium screen widths.

Here is a simple example, where the first child is shown when the
media size is `medium` or above, and the second child is shown only
when the media size is below `medium`.

```jsx
<CSSMediaSelector>
  <div visibleAtOrAbove="medium">Shown in medium</div>
  <div visibleBelow="medium">Shown below medium</div>
</CSSMediaSelector>
```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *formatBelow* | func | Formats hidden below classnames | `(breakpoint) => breakpoint.hideBelow`
| *formatAbove* | func | Formats hidden above classnames | `(breakpoint) => breakpoint.hideAbove`
| *formatAt* | func | Formats hidden at classnames | `(breakpoint) => breakpoint.hideAt`
| *formatAll* | func | Formats hidden at all breakpoints classname | `() => "hide-content"`
| *breakpoints* | array | The available breakpoints from the CSS framework | `[ { name: "x-small", hideBelow: "hide-content-max-...`

### import

```jsx
import {CSSMediaSelector} from "@walmart/wmreact-layout";
```

<hr/>

## Collapsable

Provides a collapsing layout.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *containerClassName* | string | CSS class name to apply to the component container | 
| *isOpen* | bool | True if the collapsable area is open | `true`
| *transitionDuration* | number | The duration of the collasping transition (in milliseconds) | `400`
| *transitionTimingFunction* | string | The easing function for the transition | 
| *transitionComplete* | func | Event callback for when the transition is complete | `() => {}`
| *isVertical* | bool | True if the layout is vertical | `true`
| *baseHeight* | number | The collapsed height, in pixels | `0`
| *baseWidth* | number | The collapsed width, in pixels | `0`
| *overflow* | string | What CSS overflow style to apply when collapsed | `"hidden"`

### import

```jsx
import {Collapsable} from "@walmart/wmreact-layout";
```

<hr/>

## Fixie

A fixed bar component.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *fixedContent* | node | The content that should be used when fixed | `null`
| *fixedAtBottom* | bool | True if it should be fixed at the bottom | `false`
| *cssMode* | bool | True if Fixie should just add CSS classes instead of creating DOM elements | `false`

### import

```jsx
import {Fixie} from "@walmart/wmreact-layout";
```

<hr/>

## Grid

Component that adds the `grid` CSS class to container


### import

```jsx
import  from "@walmart/wmreact-layout";
```

<hr/>

## Grid.ApplyClasses

A responsive helper class that applies the `classes` prop to all of the children.

An example that applies 'foo bar' to the classNames of all of the children.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *classes* | string | The classes to add to each of the children | 

### import

```jsx
import {Grid} from "@walmart/wmreact-layout";
```

<hr/>

## Grid.GroupChildren

Groups children into rows with a set number of columns.

This example organizes the children into rows of 2 columns where each row
is given the `className` of `my-column`.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *classes* | string | The classes to apply to the row div | 
| *columns* | number | The number of columns in a row | 

### import

```jsx
import {Grid} from "@walmart/wmreact-layout";
```

<hr/>

## JSMediaSelector

Media selector is a component that wraps a group of children.
Those children can have a `visibleWidths` prop that defines
when they should be visible. For example, if the child has
`visibleWidths` set to `['small','medium']` then it will only
be visible in small and medium screen widths.

Here is a simple example, where the first child is shown when the
media size is `medium` or above, and the second child is shown only
when the media size is below `medium`.

```jsx
<JSMediaSelector>
  <div visibleAtOrAbove="medium">Shown in medium</div>
  <div visibleBelow="medium">Shown below medium</div>
</JSMediaSelector>
```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *onChange* | func | An event fired when the media width changes | `() => {}`
| *mode* | enum | Selects between either `hide`ing the childrens on not displaying them (i.e. `delete`) | `"delete"`
| *default* | string | Sets the default media width for server rendering | `"small"`

### import

```jsx
import {JSMediaSelector} from "@walmart/wmreact-layout";
```

<hr/>

## Layout

A layout manager that makes it easy to build responsive layouts with different
numbers of columns at different breakpoints.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *x-small* | number | The number of columns for the x-small media size. | 
| *small* | number | The number of columns for the small media size. | 
| *medium* | number | The number of columns for the medium media size. | 
| *large* | number | The number of columns for the large media size. | 
| *x-large* | number | The number of columns for the x-large media size. | 
| *x-small-sizes* | array | An array of column sizes (based on a 12-grid layout) for the x-small media size. | 
| *small-sizes* | array | An array of column sizes (based on a 12-grid layout) for the small media size. | 
| *medium-sizes* | array | An array of column sizes (based on a 12-grid layout) for the medium media size. | 
| *large-sizes* | array | An array of column sizes (based on a 12-grid layout) for the large media size. | 
| *x-large-sizes* | array | An array of column sizes (based on a 12-grid layout) for the x-large media size. | 
| *padded* | bool | True if the grid should be padded. | 
| *align* | enum | Horizontal alignment for the container. | `"left"`
| *vertical* | enum | Vertical alignment for the container. | 

### import

```jsx
import {Layout} from "@walmart/wmreact-layout";
```

<hr/>

## MediaSelector

Media selector is a component that wraps a group of children.
Those children can have a `visibleWidths` prop that defines
when they should be visible. For example, if the child has
`visibleWidths` set to `['small','medium']` then it will only
be visible in small and medium screen widths.

Here is a simple example, where the first child is shown when the
media size is `medium` or above, and the second child is shown only
when the media size is below `medium`.

```jsx
<MediaSelector>
  <div visibleAtOrAbove="medium">Shown in medium</div>
  <div visibleBelow="medium">Shown below medium</div>
</MediaSelector>
```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *onChange* | func | An event fired when the media width changes | 
| *mode* | enum | Selects between either `hide`ing the childrens on not displaying them (i.e. `delete`) | `"delete"`
| *default* | string | Sets the default media width for server rendering | 

### import

```jsx
import {MediaSelector} from "@walmart/wmreact-layout";
```

<hr/>

## Stack

Container component for stack layouts.


### import

```jsx
import {Stack} from "@walmart/wmreact-layout";
```

<hr/>

## Stack.Fill

Wraps an stack fill cell.


### import

```jsx
import {Stack} from "@walmart/wmreact-layout";
```

<hr/>

## Stack.Fit

Wraps an stack fill cell.


### import

```jsx
import {Stack} from "@walmart/wmreact-layout";
```

<hr/>
