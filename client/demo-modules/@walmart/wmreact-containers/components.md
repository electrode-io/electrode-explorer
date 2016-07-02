# Containers (@walmart/wmreact-containers)

A set of container components for hydra based UI


## Expander

An expandable/contractable container.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *expanded* | bool | True if the container is expanded | `false`
| *expandText* | node | The text for the expand control | 
| *hidden* | bool |  | 

### import

```jsx
import {Expander} from "@walmart/wmreact-containers";
```

<hr/>

## Flyout

A flyout container.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *onActiveChange* | func | Event triggered when the flyout toggles hidden shown state. | `() => {}`
| *trigger* | node | The trigger control | 
| *triggerText* | node | The trigger text if you just want a button | 
| *direction* | enum | The direction that the flyout should come from | `"right"`
| *size* | enum | The size of the flyout | `"wide"`
| *align* | enum | The alignment of the flyout | `null`
| *block* | bool | Whether to render as a block element (apply the "flyout-block" class) | `false`
| *active* | bool | True if the flyout is shown. If not set, component defaults to using internal state control. | `null`
| *closeButton* | bool | True if we should render a close button within the flyout | `false`
| *closeOnClickOut* | bool | True if we should close the flyout if the user clicks outside of it | `true`
| *hover* | bool | To display on hover pass in true | `false`
| *hoverTimeout* | string | To display on hover pass in true | 
| *disableTouchLinksOnly* | bool | To make the flyout toggle prevent default on touch devices only | `true`
| *onTriggerElementClick* | func | An additional click handler hook for the passed in trigger element | `() => {}`
| *hidden* | bool |  | 

### import

```jsx
import {Flyout} from "@walmart/wmreact-containers";
```

<hr/>

## Meter

A simple meter.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *percent* | number | The percent to show | 
| *hidden* | bool |  | `false`

### import

```jsx
import {Meter} from "@walmart/wmreact-containers";
```

<hr/>

## Meter.PercentageCircle

A percentage circle type meter.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *percent* | number |  | 
| *hidden* | bool |  | `false`

### import

```jsx
import {Meter} from "@walmart/wmreact-containers";
```

<hr/>

## Modal

Modal dialog component.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *active* | bool |  | `false`
| *padded* | bool | True if this should be padded | `false`
| *fixed* | bool | True if the dialog is fixed | `false`
| *onClose* | func | Set callback on Component | `() => {}`

### import

```jsx
import {Modal} from "@walmart/wmreact-containers";
```

<hr/>

## 

ResponsiveFlyoutSlidePanel renders flyout for desktop and slidepanel for mobile

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *flyoutClassName* | string | classes for flyout | 
| *slidepanelClassName* | string | classes for slidepanel | 
| *trigger* | element | element that will spawn modal onClick | `<span className="HelpFlyout-trigger"> <i className...`
| *flyoutOnly* | bool | Only Render Flyout, disable slidepanel | 
| *slidepanelOnly* | bool | Only Render slidepanel, disable flyout | 
| *showFlyout* | bool | Used to hide and show flyout on page load | `false`
| *flyoutDirection* | enum | direction for flyout only | `"right"`
| *flyoutSize* | enum | size for flyout only | `"wide"`

### import

```jsx
import  from "@walmart/wmreact-containers";
```

<hr/>

## Modal.Alert

Alert dialog.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *active* | bool | True if the alert is active | `false`
| *buttons* | node | The buttons to show at the base of the alert | 

### import

```jsx
import {Modal} from "@walmart/wmreact-containers";
```

<hr/>

## Modal.Confirm

Confirm dialog.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *onOK* | func | Event handler for the OK button | `() => {/*no-op*/}`

### import

```jsx
import {Modal} from "@walmart/wmreact-containers";
```

<hr/>

## Modal.Tray

Tray dialog.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *active* | bool | True if the tray is open | `false`

### import

```jsx
import {Modal} from "@walmart/wmreact-containers";
```

<hr/>

## Separator

A seperator component.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *type* | enum | The type of separator | `"normal"`
| *hidden* | bool |  | `false`

### import

```jsx
import {Separator} from "@walmart/wmreact-containers";
```

<hr/>

## Shelf

A shelf component.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *hidden* | bool | True if the shelf is hidden | `false`
| *threeCol* | bool |  | `true`

### import

```jsx
import {Shelf} from "@walmart/wmreact-containers";
```

<hr/>

## SlidePanel

A slide panel.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *active* | bool |  | `false`
| *direction* | enum | The direction of the panel | `"right"`
| *backgroundColor* | string | The background color | `"#fff"`
| *header* | any | The header of the panel | 
| *onClose* | func | Set callback on Component | `() => {}`
| *btnText* | string | Change default button text | 
| *btnClass* | string | Any additional btn style classes | 

### import

```jsx
import {SlidePanel} from "@walmart/wmreact-containers";
```

<hr/>

## Spinner

Spinner component.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *loading* | bool | True if we should show the spinner to indicate loading | 
| *timeout* | number | Time in milliseconds before the spinner appears | 
| *fixed* | bool | True if the spinner should take the entire screen (display fixed) | 

### import

```jsx
import {Spinner} from "@walmart/wmreact-containers";
```

<hr/>

## Tray

Tray container component.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *isOpen* | bool | This is required, and is what triggers the tray showing and hidding | 
| *cancelButtonText* | string | Optional text for "Cancel" button (or left button) | `"Cancel"`
| *cancelButtonClass* | string | CSS class for the cancel button | `""`
| *doneButtonText* | string | Optional text for "Done" button (or right button) | `"Done"`
| *doneButtonClass* | string | CSS class for the done button | `""`
| *trayHeaderClass* | string | CSS class for the tray header | `""`
| *trayContentClass* | string | CSS class for the tray content | `""`
| *header* | node | The header node | `null`
| *hideButtons* | bool | True if we should hide both buttons | `false`
| *hideDoneButton* | bool | True if we should hide the done button | `false`
| *hideCancelButton* | bool | True if we should hide the cancel button | `false`
| *scrollable* | bool | True if this is scrollable | `false`
| *onCancel* | func | Optional function that "Cancel" button will call | 
| *onDone* | func | Optional function that "Done" button will call | 
| *hidden* | bool | True if the tray is hidden | 

### import

```jsx
import {Tray} from "@walmart/wmreact-containers";
```

<hr/>

## Well

Well container component.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *padded* | bool | True if the well should be padded | `true`
| *filled* | bool | True if the well should be filled | `false`
| *below* | bool | True if the well should be below | `false`
| *hidden* | bool |  | `false`

### import

```jsx
import {Well} from "@walmart/wmreact-containers";
```

<hr/>
