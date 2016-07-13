#  (@walmart/wmreact-user)

react part for user authentication


## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *titleText* | string |  | `"Create Account"`
| *btnText* | string |  | `"Create Account"`
| *btnPrimary* | bool |  | `true`
| *newsletter* | bool |  | `true`
| *newsletterText* | node |  | `<span> Email me about Rollbacks, special pricing, ...`
| *privacyPolicyText* | node |  | `<span> By clicking Create Account, you acknowledge...`
| *newsletterDefaultChecked* | bool |  | `true`
| *onSignInRequested* | func |  | 
| *defaultEmail* | string |  | 
| *lockEmail* | bool |  | 
| *showFirstName* | bool |  | `true`
| *showLastName* | bool |  | `true`
| *showSignIn* | bool |  | `true`
| *showNortonLogo* | bool |  | `true`
| *showSubtitle* | bool |  | `false`
| *subtitleText* | string |  | `"Enjoy faster checkout with an account."`
| *onSignUp* | func |  | 
| *handleResponse* | func |  | 
| *handleSubmit* | func |  | 
| *fields* | shape |  | 
| *error* | string |  | 
| *submitting* | bool |  | 
| *submitSuccess* | bool |  | 
| *initializeForm* | func |  | 
| *automation* | shape |  | `{ firstNameInput: "signup-first-name-input", lastN...`
| *tealeaf* | shape |  | `{ firstNameInput: "signup-first-name-input", lastN...`
| *headingElement* | union |  | `Heading.H4`
| *showPasswordStength* |  |  | `false`

### import

```jsx
import  from "@walmart/wmreact-user";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *titleText* | string |  | `"Sign In"`
| *btnPrimary* | bool |  | `true`
| *btnText* | string |  | `"Sign In"`
| *defaultEmail* | string |  | 
| *lockEmail* | bool |  | 
| *privacyPolicyUrl* | string |  | `"http://corporate.walmart.com/privacy-security/wal...`
| *onSignIn* | func |  | 
| *handleResponse* | func |  | 
| *handleSubmit* | func |  | 
| *onForgotPasswordRequested* | func |  | 
| *onSignUpRequested* | func |  | 
| *fields* | shape |  | 
| *error* | object |  | 
| *submitting* | bool |  | 
| *submitSuccess* | bool |  | 
| *initializeForm* | func |  | 
| *showSignUp* | bool |  | `true`
| *showNortonLogo* | bool |  | `true`
| *showPrivacyPolicy* | bool |  | `true`
| *showLabels* | bool |  | 
| *showRememberme* | bool |  | 
| *captchaAvailable* | bool |  | 
| *captcha* | shape |  | 
| *automation* | shape |  | `{ emailInput: "signin-email-input", passwordInput:...`
| *tealeaf* | shape |  | `{ emailInput: "signin-email-input", passwordInput:...`
| *headingElement* | union |  | `Heading.H4`

### import

```jsx
import  from "@walmart/wmreact-user";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *onNewCodeRequested* | func |  | 
| *onSignInRequested* | func |  | 
| *onForgotPasswordRequested* | func |  | 
| *showNortonLogo* | bool |  | `true`
| *defaultEmail* | string |  | 
| *onResetPassword* | func |  | 
| *handleResponse* | func |  | 
| *tokenRequested* | bool |  | 
| *submitting* | bool |  | 
| *submitSuccess* | bool |  | 
| *handleSubmit* | func |  | 
| *initializeForm* | func |  | 
| *fields* | shape |  | 
| *error* | object |  | 
| *captchaAvailable* | bool |  | 
| *captcha* | shape |  | 
| *automation* | shape |  | `{ newCodeBtnLink: "resetpwd-new-code-btn-link", pa...`
| *tealeaf* | shape |  | `{ newCodeBtnLink: "resetpwd-new-code-btn-link", pa...`
| *alertStyle* |  |  | `"traditional"`

### import

```jsx
import  from "@walmart/wmreact-user";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *onSignInRequested* | func |  | 
| *onResetPasswordRequested* | func |  | 
| *showNortonLogo* | bool |  | `true`
| *defaultEmail* | string |  | 
| *fields* | shape |  | 
| *initializeForm* | func |  | 
| *error* | object |  | 
| *compromisedErr* | object |  | 
| *submitting* | bool |  | 
| *handleSubmit* | func |  | 
| *onForgotPassword* | func |  | 
| *handleResponse* | func |  | 
| *captchaAvailable* | bool |  | 
| *captcha* | shape |  | 
| *automation* | shape |  | `{ emailInput: "forgotpwd-email-input", signInBtn: ...`
| *tealeaf* | shape |  | `{ emailInput: "forgotpwd-email-input", signInBtn: ...`
| *titleText* | string |  | `"Enter your email for this account"`
| *alertStyle* |  |  | `"traditional"`

### import

```jsx
import  from "@walmart/wmreact-user";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *isBot* | number |  | 
| *onReCaptchaResponse* | func |  | 
| *beKey* | string |  | 
| *reCaptchaSiteKey* | string |  | 
| *identifyConfirmMssg* | string |  | ``Thanks! Your identity has been confirmed.``
| *isBotMssg* | string |  | ``Help us keep your account safe by clicking on the...`

### import

```jsx
import  from "@walmart/wmreact-user";
```

<hr/>
