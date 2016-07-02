#  (@walmart/wmreact-chooser)

A chooser component library


## Chooser

Chooser component, this component is a shim or proxy component around `RadonSelect`

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *chooserName* | string | Name of the chooser | 
| *defaultValue* | string | The default value | 
| *placeholderText* | string | The text that shows up when no items are selected. | 
| *typeaheadDelay* | number | Passed though to RadonSelect, time in MS before the typeahead appears. Default 1000 | 
| *fixedWidth* | string | Style property, adds chooser-fixed-width class to component. | 
| *isAlt* | bool | Style property, adds chooser-alt class to component. | 
| *isBlock* | bool | Style property, adds chooser-block class to component. | 
| *isRounded* | bool | Style property, adds chooser-rounded class to component. | 
| *isMini* | bool | Style property, adds chooser-rounded and chooser-rounded-mini class to component. | 
| *onChange* | func | Called on a change. | 
| *onBlur* | func | Called on focus. | 
| *automationId* | string | An automation ID for magellan | 

### import

```jsx
import Chooser from "@walmart/wmreact-chooser";
```

<hr/>

## Chooser.Option

A chooser option

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *value* | string | The value of the option | 

### import

```jsx
import Chooser from "@walmart/wmreact-chooser";
```

<hr/>
