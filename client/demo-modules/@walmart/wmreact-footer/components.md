# Footer (@walmart/wmreact-footer)

A set of react components for Footer


## Footer

This component displays the footer on page

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *isMobile* | bool | check mobile device | `false`
| *copyrightText* | string | Copyright text | `"© Walmart Stores, Inc."`
| *referenceId* | string | Customer reference Id | `""`
| *emailSignup* | shape | Emailsignup info | `{ loading: false, emailId: "", didInvalidate: fals...`
| *onBootstrap* | func | The first action dispatched | `() => {}`
| *onEmailSubmitted* | func |  | `() => {}`
| *onModalClose* | func |  | `() => {}`
| *quimbyData* | object | quimbyData is the result of tempo-core calls to quimby stored in redux | 
| *pathToAssets* | string | Path to opinion lab assets | `""`
| *emailSignupUrl* | string | Url for email signup | `"/ajax/footer-email"`

### import

```jsx
import {Footer} from "@walmart/wmreact-footer";
```

<hr/>

## FooterCopyright

This component displays the FooterCopyright text

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *isMobile* | bool | check mobile device | `false`
| *text* | string | Footer copyright text | `""`
| *referenceId* | string | Customer reference Id | `""`
| *autoId* | string | Used for generating unique automation id's | `""`
| *feedbackText* | string | Feedback link text | `""`

### import

```jsx
import {FooterCopyright} from "@walmart/wmreact-footer";
```

<hr/>

## GlobalEmailSignup

This component displays the form to user
to signup for marketing emails at walmart.com

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *isMobile* | bool | check mobile device | `false`
| *moduleData* | shape | Tempo module Data | `{ type: "", moduleId: "", configs: { campaignId: "...`
| *showModal* | bool | Show modal with customer Email | `false`
| *onModalClose* | func | Callback trigger on modal close. | `() => {}`
| *onEmailSubmitted* | func | Pass value of the email box to set showModal | 
| *autoId* | string | Used for generating unique automation id's | `""`
| *emailId* | string |  | `""`
| *loading* | bool |  | 
| *didInvalidate* | bool |  | 

### import

```jsx
import {GlobalEmailSignup} from "@walmart/wmreact-footer";
```

<hr/>

## GlobalEmailSignupModal

This component displays the confermation modal to user
when they signup for emails.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *isMobile* | bool | check mobile device | `false`
| *showModal* | bool | Used to hide and show modal | `false`
| *emailId* | string | Show email id for customer | 
| *link* | shape | Show Privacy link in the modal | `{ linkText: "", clickThrough: { value: "" } }`
| *autoId* | string | Used for generating unique automation id's | `""`
| *onModalClose* | func |  | `() => {}`

### import

```jsx
import {GlobalEmailSignupModal} from "@walmart/wmreact-footer";
```

<hr/>

## GlobalFooterItems

This component displays the GlobalFooterItems

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *block* | bool | True if we are applying the `footer-block-list` class | `true`
| *links* | array | The list of links | `[]`
| *name* | string | The name of list | `""`
| *autoId* | string | Used for generating unique automation id's | `""`
| *pathToAssets* | string | Path to opinion lab assets | `""`

### import

```jsx
import {GlobalFooterItems} from "@walmart/wmreact-footer";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *uid* | string | Link data from tempo | `""`
| *title* | string | Link data from tempo | `""`
| *pathToAssets* | string | Path to opinion lab assets | `""`
| *linkText* | string | Link Text | `""`

### import

```jsx
import  from "@walmart/wmreact-footer";
```

<hr/>
