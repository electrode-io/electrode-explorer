#  (@walmart/wmreact-sams-header)

Samsclub.com header component


## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape |  | `{ type: "", moduleId: "" }`
| *dataAutomationId* | string |  | `"header-GlobalEyebrowNavMobile"`
| *userName* | string |  | 

### import

```jsx
import  from "@walmart/wmreact-sams-header";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *type* | string |  | 
| *moduleId* | string |  | 
| *configs* | shape |  | 
| *preferredStores* | shape |  | 
| *nearbyStores* | array |  | 
| *automation* | shape |  | `{ findOtherClubsBtn: "find-other-clubs-btn" }`
| *tealeaf* | shape |  | `{ findOtherClubsBtn: "find-other-clubs-btn" }`

### import

```jsx
import  from "@walmart/wmreact-sams-header";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape | Data for configuring the component. Typically coming from Tempo. Contains department data. | `{ type: "", moduleId: "", configs: {} }`
| *onSuperDeptClick* | func | Callback to execute after a super department is clicked | `() => {}`
| *onBackClick* | func | Callback to execute after back button is clicked | `() => {}`
| *dataAutomationId* | string | Automation ID base string | `"header-GlobalLefthandNavMobile"`
| *isBot* | bool | Check for web crawler bots. | `false`

### import

```jsx
import  from "@walmart/wmreact-sams-header";
```

<hr/>

## BannerMessage

The banner message component has links customizable by text, color, url font
 weight and height.
 ```jsx
 <BannerMessage messages={
    {
      "type": "BannerMessage",
      "configs": {
        "height": "small",
        "headerText1": "Daily",
        "headerColor1": "#A1D7F8",
        "headerFontWeight1": "bold",
        "headerText2": "Center",
        "headerColor2": "#F07330",
        "headerFontWeight2": "bold",
        "headerText3": "Savings",
        "headerColor3": "#A1D7F8",
        "headerFontWeight3": "bold",
        "secondaryText1": "Your Hottest values for |date|.",
        "secondaryColor1": "#FFFFFF",
        "secondaryFontWeight1": "regular",
        "secondaryText2": null,
        "secondaryColor2": null,
        "secondaryFontWeight2": null,
        "secondaryText3": null,
        "secondaryColor3": null,
        "secondaryFontWeight3": null,
        "themeButton": {
          "linkText": "Shop All",
          "title": "Shop All",
          "clickThrough": {
            "type": "url",
            "value": "http://www.walmart.com/browse/3944_1078524_1231200"
          },
          "uid": "CLAM4z1m"
        },
        "themeButtonColor": null,
        "buttonTextColor": "#007dc6",
        "image": null,
        "mobileImage": null,
        "athenaEnabled": "true",
        "filterType": null,
        "moduleList": [],
        "useListForAll": null
      },
      "moduleId": "84c9fa92-2122-443a-89fe-b4a21c75d0d2"
    }
  } />
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape | Data for configuring the component. Typically coming from Tempo.
Contains information on the URL, link text, and colors to use for the links. | 
| *moduleId* | string |  | 
| *type* | string |  | 
| *dataAutomationId* | string | Automation ID base string | `"homepage-zone1"`
| *messages* |  |  | `{ configs: { themeButton: { clickThrough: {} } } }`

### import

```jsx
import {BannerMessage} from "@walmart/wmreact-sams-header";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* |  |  | `{ name: "", type: "", moduleId: "", configs: {} }`
| *dataAutomationId* |  |  | `"header-GlobalLefthandNav"`
| *isBot* |  |  | `false`

### import

```jsx
import  from "@walmart/wmreact-sams-header";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* |  |  | `{ name: "", type: "", moduleId: "", configs: {} }`
| *dataAutomationId* |  |  | `"header-BusinessToolsNav"`
| *isBot* |  |  | `false`

### import

```jsx
import  from "@walmart/wmreact-sams-header";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *nbrOfStores* | number |  | `20`
| *headerInfo* | shape |  | `{ clubCity: "San Francisco, CA", changeLocation: "...`
| *onSelectFilterServices* | func |  | 
| *onCancelFilterServices* | func |  | 
| *onApplyFilterServices* | func |  | 
| *onSelectClubChoice* | func |  | 
| *onChangeLocation* | func |  | 
| *filterOptions* | object |  | `{items: ["Pharmacy", "Business Center", "Cafe", "T...`
| *stores* | arrayOf |  | `[]`
| *btnCancel* | string |  | `"Cancel"`
| *btnApply* | string |  | `"Apply"`
| *titleText* | string |  | `"Club results"`
| *automation* | shape |  | `{ changeLocationLink: "cr-change-location-link", c...`
| *tealeaf* | shape |  | `{ changeLocationLink: "cr-change-location-link", c...`
| *nearbyStores* | array |  | 
| *singleLineAddr* | string |  | 
| *close* | func |  | 

### import

```jsx
import  from "@walmart/wmreact-sams-header";
```

<hr/>

## Header

Global SamsHeader component connected to Tempo and Redux
  ```jsx
  <SamsHeader searchExposed={true} totalItemsCount={100} userName="Test" />
  ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *isMobile* | bool | check mobile device | `false`
| *isBot* | bool | check for bots | `false`
| *searchExposed* | bool | True if search should be exposed by default at smaller screen widths. | `true`
| *selectedCategory* | string | Initially selected category ID in the search dropdown on larger screen widths. | `null`
| *shippingPass* | bool | True if the shipping pass logo should show on larger screen widths. | `false`
| *userName* | string | First name of the user if signed in. Null otherwise. | `null`
| *totalItemsCount* | number | Total number of items. | `0`
| *maxCountThreshold* | number | The max count value. After totalItemsCount reaches maxCountThreshold,
  the HeaderCartCount would start displaying the value as
  (maxCountThreshold+) instead of actual totalItemsCount, for e.g. if maxCountThreshold is 99
  and totalItemsCount is 100, the component would display the total as 99+ instead of 100.
  Default value for this is 99. | `99`
| *storeFinderResponse* | shape | Data used to render storefinder panel.
  This includes the loading and error states and stores data | `{ loading: false, didInvalidate: false, stores: {}...`
| *onBootstrap* | func | The first action dispatched | `() => {}`
| *onStoreFinderActive* | func | On location change is a action that is called when user's location changes | `() => {}`
| *quimbyData* | object | quimbyData is the result of tempo-core calls to quimby stored in redux | 
| *typeAheadUrl* | string | Url to fetch recomendations in searchbar | `""`
| *storeFinderUrl* | string |  | 
| *bizToolsMob* | object |  | 
| *renderBizToolsMobile* | func |  | 
| *indexSuperDeptMobile* | func |  | 
| *renderDeptMobile* | func |  | 
| *indexDeptMobile* | func |  | 
| *btoolsIndexMobile* | func |  | 

### import

```jsx
import {SamsHeader} from "@walmart/wmreact-sams-header";
```

<hr/>

## OffcanvasNav

An intermediate component for the header for rendering the offcanvas nav and overlay. Should be
used inside a TempoWrapper so all modules are populated

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *userName* | string |  | `null`
| *bizToolsMob* | object |  | 
| *renderBizToolsMobile* | func |  | 
| *indexSuperDeptMobile* | func |  | 
| *renderDeptMobile* | func |  | 
| *indexDeptMobile* | func |  | 
| *btoolsIndexMobile* | func |  | 

### import

```jsx
import {OffcanvasNav} from "@walmart/wmreact-sams-header";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape |  | `{ name: "", type: "", moduleId: "", configs: {} }`

### import

```jsx
import  from "@walmart/wmreact-sams-header";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape | Data for configuring the component. Typically coming from Tempo. Contains department data. | `{ type: "", moduleId: "", configs: {} }`
| *onMenuLinkClick* | func | Callback to execute after a super department is clicked | `() => {}`
| *onBackClick* | func | Callback to execute after back button is clicked | `() => {}`
| *dataAutomationId* | string | Automation ID base string | `"header-MemberServicesNavMobile"`
| *isBot* | bool | Check for web crawler bots. | `false`

### import

```jsx
import  from "@walmart/wmreact-sams-header";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *notification* | string |  | `"Find a club"`
| *userMessage* | string |  | `"Choose your club to see pricing and availability"`
| *findBtn* | string |  | `"Find"`
| *titleText* | string |  | 
| *cancelBtn* | string |  | `"Cancel"`
| *changeLocationBtn* | string |  | 
| *submitting* | bool |  | `false`
| *tealeaf* | object |  | `{ //for analytics submitBtn1: "Find-a-club-cancel-...`
| *automation* | object |  | `{// for testing submitBtn1: "Find-a-club-cancel-su...`
| *close* | func |  | 
| *btnMessage* | string |  | 
| *onStoreFinderActive* | func |  | 
| *nearbyStores* | array |  | 
| *nearbyDistance* | number |  | 
| *openClubList* | func |  | 
| *zipError* | string |  | 
| *onFocus* | string |  | 
| *labelText* | string |  | 

### import

```jsx
import  from "@walmart/wmreact-sams-header";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *type* | string |  | 
| *moduleId* | string |  | 
| *submitting* | bool |  | 
| *configs* | shape |  | 
| *tealeaf* | shape |  | 
| *isUserLoggedIn* | bool |  | 
| *preferedClub* | object |  | 
| *nearbyClub* | object |  | 
| *onStoreFinderActive* | func |  | 
| *stores* | object |  | 

### import

```jsx
import  from "@walmart/wmreact-sams-header";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape | Data for configuring the component. Typically coming from Tempo. Contains department data. | `{ type: "", moduleId: "", configs: {} }`
| *onBusinessToolsClick* | func |  | `() => {}`
| *onSuperDeptClick* | func | Callback to execute after a super department is clicked | `() => {}`
| *onBackClick* | func | Callback to execute after back button is clicked | `() => {}`
| *dataAutomationId* | string | Automation ID base string | `"header-BusinessToolsNavMobile"`
| *isBot* | bool | Check for web crawler bots. | `false`
| *bizToolsMob* | object |  | 
| *renderBizToolsMobile* | func |  | 
| *indexSuperDeptMobile* | func |  | 
| *renderDeptMobile* | func |  | 
| *indexDeptMobile* | func |  | 
| *btoolsIndexMobile* | func |  | 

### import

```jsx
import  from "@walmart/wmreact-sams-header";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape |  | `{ type: "", moduleId: "", configs: { sectionOne: [...`
| *onAccountLinkClick* | func |  | `() => {}`
| *onBackClick* | func |  | `() => {}`

### import

```jsx
import  from "@walmart/wmreact-sams-header";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape | Data for configuring the component. Typically coming from Tempo.
  Contains information on the URL and link text to use for the links. | `{ configs: { sectionOne: [], sectionTwo: [], secti...`
| *customerName* | string |  | `""`

### import

```jsx
import  from "@walmart/wmreact-sams-header";
```

<hr/>
