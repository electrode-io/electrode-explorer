# Forms (@walmart/wmreact-forms)

Input components including fields and checkboxes


## Alert

Alert component.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *message* | string | The message | `""`
| *alertType* | enum | The type of alert. Either error, warning or success. | `"error"`
| *isBlock* | bool | True if it lays out block style. | `false`
| *isAboveForm* | bool | True if it it's located above a form. | `false`

### import

```jsx
import {Alert} from "@walmart/wmreact-forms";
```

<hr/>

## CreditCardNumber

Credit card number field.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *automationId* |  |  | `"credit-card-number"`
| *labelText* | node | The field label | `""`
| *instructionText* | string | The instruction text | `""`
| *isDisabled* | bool | True if the field is disabled | `false`
| *showLabel* | bool | True if we should show the label | `true`
| *hidden* | bool |  | 
| *tealeafId* | string | The optional TeaLeaf ID | `"field"`

### import

```jsx
import {CreditCardNumber} from "@walmart/wmreact-forms";
```

<hr/>

## DOB

Date of birth field.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *labelText* | string |  | `"Date of birth"`
| *placeholderText* | string |  | `"mm/dd/yyyy"`
| *automationId* | string |  | `"date-of-birth"`
| *instructionText* | string | The instruction text | `""`
| *isDisabled* | bool | True if the field is disabled | `false`
| *showLabel* | bool | True if we should show the label | `true`
| *hidden* | bool |  | 
| *tealeafId* | string | The optional TeaLeaf ID | `"field"`

### import

```jsx
import {DOB} from "@walmart/wmreact-forms";
```

<hr/>

## Email

Email field.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *automationId* |  |  | `"email-address"`
| *labelText* | node | The field label | `""`
| *instructionText* | string | The instruction text | `""`
| *isDisabled* | bool | True if the field is disabled | `false`
| *showLabel* | bool | True if we should show the label | `true`
| *hidden* | bool |  | 
| *tealeafId* | string | The optional TeaLeaf ID | `"field"`

### import

```jsx
import {Email} from "@walmart/wmreact-forms";
```

<hr/>

## Field

A generic field.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *labelText* | node | The field label | `""`
| *instructionText* | string | The instruction text | `""`
| *isDisabled* | bool | True if the field is disabled | `false`
| *showLabel* | bool | True if we should show the label | `true`
| *automationId* | string | The optional automation ID | `"field"`
| *hidden* | bool |  | 
| *tealeafId* | string | The optional TeaLeaf ID | `"field"`

### import

```jsx
import {Field} from "@walmart/wmreact-forms";
```

<hr/>

## FirstName

First name field.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *automationId* |  |  | `"first-name"`
| *labelText* | node | The field label | `""`
| *instructionText* | string | The instruction text | `""`
| *isDisabled* | bool | True if the field is disabled | `false`
| *showLabel* | bool | True if we should show the label | `true`
| *hidden* | bool |  | 
| *tealeafId* | string | The optional TeaLeaf ID | `"field"`

### import

```jsx
import {FirstName} from "@walmart/wmreact-forms";
```

<hr/>

## FullName

Full name field.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *automationId* |  |  | `"full-name"`
| *labelText* | node | The field label | `""`
| *instructionText* | string | The instruction text | `""`
| *isDisabled* | bool | True if the field is disabled | `false`
| *showLabel* | bool | True if we should show the label | `true`
| *hidden* | bool |  | 
| *tealeafId* | string | The optional TeaLeaf ID | `"field"`

### import

```jsx
import {FullName} from "@walmart/wmreact-forms";
```

<hr/>

## LastName

Full name field.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *automationId* |  |  | `"last-name"`
| *labelText* | node | The field label | `""`
| *instructionText* | string | The instruction text | `""`
| *isDisabled* | bool | True if the field is disabled | `false`
| *showLabel* | bool | True if we should show the label | `true`
| *hidden* | bool |  | 
| *tealeafId* | string | The optional TeaLeaf ID | `"field"`

### import

```jsx
import {LastName} from "@walmart/wmreact-forms";
```

<hr/>

## Message.Error

Error message component

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *block* | bool | True if this should be presented in block | `false`
| *aboveForm* | bool | True if it's located above a form | `false`
| *automationId* | string | The optional automation ID | `"error-message"`
| *hidden* | bool |  | 

### import

```jsx
import {Message} from "@walmart/wmreact-forms";
```

<hr/>

## Message.Success

Success message component

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *block* | bool | True if this should be presented in block | `false`
| *aboveForm* | bool | True if it's located above a form | `false`
| *automationId* | string | The optional automation ID | `"success-message"`
| *hidden* | bool |  | 

### import

```jsx
import {Message} from "@walmart/wmreact-forms";
```

<hr/>

## Message.Warning

Warning message component

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *block* | bool | True if this should be presented in block | `false`
| *aboveForm* | bool | True if it's located above a form | `false`
| *automationId* | string | The optional automation ID | `"warning-message"`
| *hidden* | bool |  | 

### import

```jsx
import {Message} from "@walmart/wmreact-forms";
```

<hr/>

## Option

A checkbox (or option).

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *idName* | string |  | `""`
| *onCheckedChange* | func | Called when the check state changes | 
| *checkboxName* | string | The name of the checkbox | 
| *disabled* | bool | True if disabled | 
| *defaultChecked* | bool | True if the input defaults to checked. | 
| *automationId* | string | The optional automation ID. | `"option"`
| *hidden* | bool |  | 
| *tealeafId* | string | The optional TeaLeaf ID. | `"option"`

### import

```jsx
import {Option} from "@walmart/wmreact-forms";
```

<hr/>

## Options

A simplified component that makes building a set of components easy.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *choices* | arrayOf | The choices. Which is an array of `label` and `checked` | 
| *onChange* | func | Called when the radio selection changes | 
| *automationId* | string | The optional automation ID | `"options"`
| *tealeafId* | string | The optional TeaLeaf ID | `"options"`
| *idName* |  |  | `""`

### import

```jsx
import {Options} from "@walmart/wmreact-forms";
```

<hr/>

## PasswordExisting

Existing Password field.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *automationId* |  |  | `"password-existing"`
| *labelText* | node | The field label | `""`
| *instructionText* | string | The instruction text | `""`
| *isDisabled* | bool | True if the field is disabled | `false`
| *showLabel* | bool | True if we should show the label | `true`
| *hidden* | bool |  | 
| *tealeafId* | string | The optional TeaLeaf ID | `"field"`

### import

```jsx
import {PasswordExisting} from "@walmart/wmreact-forms";
```

<hr/>

## PasswordWithConfirmation

Password with confirm field.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *cols* | number | The number of columns | `2`
| *useConfirmLabel* | bool | True if we should use the confirm label | `true`
| *usePasswordLabel* | bool | True if we should use the password label | `true`
| *usePasswordPlaceHolder* | bool | True if we should use the password place holder | `false`
| *useConfirmPlaceHolder* | bool | True if we should use the confirm place holder | `false`
| *onChange* | func | Called back when the value changes | 
| *hidden* | bool | True if the component is hidden | 
| *automationId* | string | The optional automation ID | `"password"`
| *tealeafId* | string | The optional TeaLeaf ID | `"password"`

### import

```jsx
import {PasswordWithConfirmation} from "@walmart/wmreact-forms";
```

<hr/>

## Phone

Phone number field.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *automationId* |  |  | `"phone-number"`
| *labelText* | node | The field label | `""`
| *instructionText* | string | The instruction text | `""`
| *isDisabled* | bool | True if the field is disabled | `false`
| *showLabel* | bool | True if we should show the label | `true`
| *hidden* | bool |  | 
| *tealeafId* | string | The optional TeaLeaf ID | `"field"`

### import

```jsx
import {Phone} from "@walmart/wmreact-forms";
```

<hr/>

## Radio.Button

A radio compnent.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *alt* | bool | True if this is in alt style | `false`
| *id* | string | The id of the control | `""`
| *group* | string | The group name | 
| *onChange* | func | The change callback | `function() {}`
| *onClick* | func | The click handler | `function() { const isChecked = !this.props.checked...`
| *checked* | bool | True if the input is checked | `false`
| *automationId* | string | The optional automation ID | `"radio-button"`
| *hidden* | bool |  | 
| *tealeafId* | string | The optional TeaLeaf ID | `"radio-button"`

### import

```jsx
import {Radio} from "@walmart/wmreact-forms";
```

<hr/>

## Radio.Group

A radio group compnent.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *name* | string |  | 
| *onChange* | func |  | `function(index: number) {}`
| *selected* | number |  | 
| *automationId* | string |  | `"radio-group"`
| *hidden* | bool |  | 
| *tealeafId* | string |  | `"radio-group"`

### import

```jsx
import {Radio} from "@walmart/wmreact-forms";
```

<hr/>

## RadioTile

A radio tile group component.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *groupName* | string | The name of the group | 
| *automationId* | string | An optional automation ID | `"radio-tile"`
| *hidden* | bool |  | 
| *tealeafId* | string | An optional TeaLeaf ID | `"radio-tile"`

### import

```jsx
import {RadioTile} from "@walmart/wmreact-forms";
```

<hr/>

## RadioTile.tile

A radio tile component for use within a radio group.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *groupName* | string | The host group name | 
| *column* | number | The column number | `0`
| *alignment* | string | The alignment | `""`
| *checked* | bool | True if checked | 
| *footer* | node | An optional footer | `null`
| *aside* | node | An optional aside | 
| *borderless* | bool | True if the tile is borderless | `false`
| *flat* | bool | True if the tile is flat | `false`
| *rounded* | bool | True if the tile is rounded | `false`
| *roundedTop* | bool | True if the tile has a rounded top | `false`
| *roundedBottom* | bool | True if the tile has a rounded bottom | `false`
| *padded* | bool | True if the tile is padded | `false`
| *onChange* | func | Called when the component changes | `function(index: ?number) {}`
| *onClick* | func | Called when the component is clicked | `function(index: ?number) {}`
| *automationId* | string | An optional automation ID | 
| *hidden* | bool |  | 
| *tealeafId* | string | An optional TeaLeaf ID | 
| *selected* |  |  | `""`

### import

```jsx
import {RadioTile} from "@walmart/wmreact-forms";
```

<hr/>

## StoreNumber

Store number field.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *automationId* |  |  | `"store-number"`
| *labelText* | node | The field label | `""`
| *instructionText* | string | The instruction text | `""`
| *isDisabled* | bool | True if the field is disabled | `false`
| *showLabel* | bool | True if we should show the label | `true`
| *hidden* | bool |  | 
| *tealeafId* | string | The optional TeaLeaf ID | `"field"`

### import

```jsx
import {StoreNumber} from "@walmart/wmreact-forms";
```

<hr/>

## ZipCode

Zipcode field.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *automationId* |  |  | `"zipcode"`
| *labelText* | node | The field label | `""`
| *instructionText* | string | The instruction text | `""`
| *isDisabled* | bool | True if the field is disabled | `false`
| *showLabel* | bool | True if we should show the label | `true`
| *hidden* | bool |  | 
| *tealeafId* | string | The optional TeaLeaf ID | `"field"`

### import

```jsx
import {ZipCode} from "@walmart/wmreact-forms";
```

<hr/>
