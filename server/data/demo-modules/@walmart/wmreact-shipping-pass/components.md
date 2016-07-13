#  (@walmart/wmreact-shipping-pass)

A collection of common shipping pass components and utilities used in apps


## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *dataAutomationId* | string | Automation ID base string | `"shipping-pass-tile"`
| *shippingPassEligible* | func |  | `(): boolean => { return isTargeted() || isSubscrib...`

### import

```jsx
import  from "@walmart/wmreact-shipping-pass";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *spTrialText* | string | Sp prop types for text on flyout | `""`
| *spNumberOfShipDays* | string |  | `""`
| *spFulfillmentText* | string |  | `""`
| *spPromotionText* | string |  | `""`
| *seeDetailsText* | string |  | `""`
| *signUpUrl* | string |  | `""`
| *signUpText* | string |  | `""`
| *showShippingPassFlyout* | bool | Conditions to be fulfilled to display SP flyout | `false`
| *onClickSeeDetails* | func | What to do if See details is clicked and you want to extend onClick behavior | `() => {/*no-op*/}`

### import

```jsx
import  from "@walmart/wmreact-shipping-pass";
```

<hr/>
