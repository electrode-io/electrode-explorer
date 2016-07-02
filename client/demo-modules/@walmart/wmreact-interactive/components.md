# Interactive (@walmart/wmreact-interactive)

Base level ineractive components for the Hydra UI.


## Button

A button wrapper

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *arrowlink* | bool | True if this is an arrow link | `false`
| *fakelink* | bool | True if this is an fake link | `false`
| *compact* | bool | True if this is a compact button | `false`
| *disabled* | bool | True if this is disabled | `false`
| *inverse* | bool | True if this should be inverse | `false`
| *mini* | bool | True if this is a mini button | `false`
| *block* | bool | True if this is a block button | `false`
| *primary* | bool | True if this is an primary button | `false`
| *badge* | bool | True if this is an badge button | `false`
| *badgeAlt* | bool | True if this is an altbadge button | `false`
| *active* | bool | True if this is actve | `false`
| *vote* | bool | True if this is a vote button | `false`
| *spinner* | bool | True if this should show a spinner | `false`
| *remove* | bool | True if this is an remove button | `false`
| *icon* | string | The icon to show in the button | 
| *textIcon* | string | The text icon to show in the button | 
| *type* | string | The button type | `"button"`
| *onClick* | func | The click handler | `() => {}`
| *automationId* | string |  | `"button"`
| *tealeafId* | string |  | `"button"`
| *dropdown* | bool | True if this is a dropdown button | 
| *hidden* | bool |  | 

### import

```jsx
import {Button} from "@walmart/wmreact-interactive";
```

<hr/>

## Revealer

A revelear component

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *baseHeight* | number | The base height of the container | `100`
| *border* | bool | True if we should display a border above the button | `true`
| *buttonClosedText* | string | Text to be displayed within the button when closed | `"Show more"`
| *buttonOpenText* | string | Text to be displayed within the button when open | `"Show less"`
| *defaultOpen* | bool | True if the revealer should start open | `false`
| *disableClose* | bool | True the revealer should not be closeable | `false`
| *fakeLink* | bool | True if we should display button as a fake link | `true`
| *inverse* | bool | True if we should display the inverse button | `false`

### import

```jsx
import {Revealer} from "@walmart/wmreact-interactive";
```

<hr/>

## Tabber

Tabber component

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *initialActiveTab* | number | The intially active tab | `0`
| *activeTabClass* | string | The class to apply to the active tab | `"is-active"`
| *initiallyClosed* | bool | True if tabber starts out initially closed | `false`
| *closeable* | bool | True if the Tabber is closeable | `false`
| *closeOnDocClick* | func | True if we should close on a document click outside the tabber | 

### import

```jsx
import {Tabber} from "@walmart/wmreact-interactive";
```

<hr/>

## Tabber.Content

The content section of a Tabber

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *autoHeight* | bool | True if we should adjust to auto height | `false`
| *activeTab* | number | True if this is the active tab | 
| *easingType* | string | The easing function we should use on opening | `"easeInOutQuad"`
| *autoHeightSpeed* | number | The speed of the height change | `400`

### import

```jsx
import {Tabber} from "@walmart/wmreact-interactive";
```

<hr/>

## Tabber.Control

The control for a Tabber

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *activeTabClass* | string |  | 
| *isActive* | bool |  | 
| *handleControlClick* | func |  | 

### import

```jsx
import {Tabber} from "@walmart/wmreact-interactive";
```

<hr/>

## Tabber.Controls

A child section of a Tabber


### import

```jsx
import {Tabber} from "@walmart/wmreact-interactive";
```

<hr/>

## Tabber.Controls

The controls section of Tabber

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *setActiveTab* | func | Event handler for setting the active tab | 
| *activeTab* | number | The active tab number | 
| *activeTabClass* | string | The CSS class to apply to the active tab | 

### import

```jsx
import {Tabber} from "@walmart/wmreact-interactive";
```

<hr/>

## Tabber.Simple

A simple Tabber wrapper

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *initialActiveTab* | number | The number of the initially active tab | 

### import

```jsx
import {Tabber} from "@walmart/wmreact-interactive";
```

<hr/>
