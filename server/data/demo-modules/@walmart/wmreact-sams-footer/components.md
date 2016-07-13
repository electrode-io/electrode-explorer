#  (@walmart/wmreact-sams-footer)

sams-footer


## 

This component displays the footer on page

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *isMobile* | bool | check mobile device | `false`
| *copyrightText* | string | Copyright text | `"© SamsClub, Inc."`
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
import  from "@walmart/wmreact-sams-footer";
```

<hr/>

## 

This component displays the GlobalSocialIcons with a
Higher Order Function wrapped around it called Copyright.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *isMobile* | bool | check mobile device | `false`
| *moduleData* | shape | Tempo module Data | `{ type: "", moduleId: "", configs: { icons: [], co...`
| *autoId* | string | Used for generating unique automation id's | `""`

### import

```jsx
import  from "@walmart/wmreact-sams-footer";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape |  | 

### import

```jsx
import  from "@walmart/wmreact-sams-footer";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *isMobile* | bool |  | `false`
| *moduleData* | shape |  | `{ type: "", moduleId: "", configs: { membershipSec...`
| *autoId* | string |  | `""`
| *pathToAssets* | string |  | `""`

### import

```jsx
import  from "@walmart/wmreact-sams-footer";
```

<hr/>

## 

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
import  from "@walmart/wmreact-sams-footer";
```

<hr/>
