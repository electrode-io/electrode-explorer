#  (@walmart/wmreact-member-common)

react components


## 

Usage:
<RegisterReclaimModal
  userMessage="Looks like you're already signed in."
  btnMessage="Continue shopping"
/>

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *userMessage* | string |  | 
| *btnMessage* | string |  | 
| *submitting* | bool |  | `false`
| *automation* | object |  | `{// for testing submitBtn: "register-reclaim-modal...`
| *tealeaf* | object |  | `{ //for analytics submitBtn: "register-reclaim-mod...`

### import

```jsx
import  from "@walmart/wmreact-member-common";
```

<hr/>

## 

Usage:
<ExpiredLink
  notification="Your request has expired."
  userMessage="Still need to change your password?"
  btnMessage1="Change password"
  btnMessage2="Continue shopping"
  />

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *notification* | string |  | 
| *userMessage* | string |  | 
| *btnMessage1* | string |  | 
| *btnMessage2* | string |  | 
| *submitting* | bool |  | `false`
| *tealeaf* | object |  | `{ //for analytics submitBtn1: "expired-link-pwd-su...`
| *automation* | object |  | `{// for testing submitBtn1: "expired-link-pwd-subm...`

### import

```jsx
import  from "@walmart/wmreact-member-common";
```

<hr/>

## 

Usage:
  <AccountConfirmation
    mainMessage="You're all set!"
    detailedMessage='Your account has been updated'
    buttonMessage="Let's go shopping"
  />

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *mainMessage* | string |  | 
| *detailedMessage* | string |  | 
| *buttonMessage* | string |  | 
| *handleSubmit* | func |  | 
| *firstName* | string |  | `""`
| *tealeaf* | object |  | `{ //for analytics submitBtn: "acct-confrm-submit-b...`
| *automation* | object |  | `{// for testing submitBtn: "acct-confrm-submit-btn...`
| *submitting* | bool |  | `false`
| *handleRedirectTo* | func |  | 

### import

```jsx
import  from "@walmart/wmreact-member-common";
```

<hr/>
