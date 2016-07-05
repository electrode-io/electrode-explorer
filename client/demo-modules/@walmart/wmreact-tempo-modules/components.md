#  (@walmart/wmreact-tempo-modules)

Integration layer for tempo


## BannerMessage

The banner message component has links costomisable by text, color, url font
weight and height.

```jsx
  <BannerMessage moduleData={
    {
      "type": "BannerMessage",
      "configs": {
        "height": "small",
        "themeColor": null,
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
Contains information on the URL, link text, and colors to use for the links. | `{ configs: { themeColor: "#222", themeButton: { cl...`
| *dataAutomationId* | string | Automation ID base string | `"homepage-zone1"`

### import

```jsx
import {BannerMessage} from "@walmart/wmreact-tempo-modules";
```

<hr/>

## FeaturedCategoriesCurated

Featured Categories Curated Module

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape | Data for configuring the component. Typically coming from Tempo.
Contains information on the URL detail, image detail and header data. | 
| *dataAutomationId* | string | Tempo module type for analytics and automation testing. | `""`
| *verticalZonesCount* | number | Vertical Zones on the sides. Used to change the Grid column structure. | `0`
| *isMobile* | bool | True on mobile devices | `false`

### import

```jsx
import {FeaturedCategoriesCurated} from "@walmart/wmreact-tempo-modules";
```

<hr/>

## MiniStoryStackable

The MiniStory Stackable component has links, Images, Module Header and Theme Button.
Provides link to the special Categories
Offers scaling and cropping on with safe zone on defined breakpoints
Provides ModuleHeader and BannerMessage
Includes dropping the spot to align on smaller breakpoints.

```jsx
<MiniStoryStackable
  isMobile={true}
  moduleData={miniStoryData}/>
```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape | Data for configuring the component. Typically coming from Tempo.
Contains information on the URL, link text, and colors to use for the links. | 
| *isMobile* | bool | To add proper torbit params (width and height) | `false`
| *dataAutomationId* | string | Tempo module type for analytics and automation testing | `""`

### import

```jsx
import {MiniStoryStackable} from "@walmart/wmreact-tempo-modules";
```

<hr/>

## MultiStoryPOVResponsive

The MiltiStory POV component has links, Images, Theme Button, dynamic pricing and theme buttons.
Provides link to the special Categories
Offers scaling and cropping on with safe zone on defined breakpoints

```jsx
<MultiStoryPOVResponsive
  isMobile={true}
  moduleData={multiStoryPOVData}/>
```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape | Data for configuring the component. Typically coming from Tempo.
Contains information on the URL, link text, and colors to use for the links. | 
| *isMobile* | bool | To add proper torbit params (width and height) | `false`
| *dataAutomationId* | string | Tempo module type for analytics and automation testing | `""`
| *zoneId* | number | Zone ID for analytics | `0`

### import

```jsx
import {MultiStoryPOVResponsive} from "@walmart/wmreact-tempo-modules";
```

<hr/>

## SingleStoryPOVResponsive

The SingleStory POV component has links, Images, Theme Button, dynamic pricing and theme buttons.
Provides link to the special Categories
Offers scaling and cropping on with safe zone on defined breakpoints

```jsx
<SingleStoryPOVResponsive
  isMobile={true}
  moduleData={singleStoryData}/>
```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape | Data for configuring the component. Typically coming from Tempo.
Contains information on the URL, link text, and colors to use for the links. | 
| *isMobile* | bool | To add proper torbit params (width and height) | `false`
| *dataAutomationId* | string | Tempo module type for analytics and automation testing | `""`

### import

```jsx
import {SingleStoryPOVResponsive} from "@walmart/wmreact-tempo-modules";
```

<hr/>

## TempoCategoryTile

Tempo Featured Category Tile

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *category* | shape |  | 
| *hiddenClasses* | string | to hide tile | `""`
| *lazy* | bool | Don't load image initially? | `false`
| *dataAutomationId* | string | Automation ID | `""`
| *titleAlignment* | enum | Number of lines to trunctate the title to. | `"center"`
| *isMobile* | bool | True if on mobile device | `false`
| *mobileImageSize* | number | Width/height to use for mobile image | `120`

### import

```jsx
import {TempoCategoryTile} from "@walmart/wmreact-tempo-modules";
```

<hr/>

## TempoItemTile

Wrapper component for Tile which maps IRO and Tempo response to the correct props on Tile. Will be
used extensively in Tempo based carousels.

```jsx
<TempoItemTile
  productData={{
    price: { currentPrice: 12.34, listPrice: 15.64 },
    ratings: { rating: "3.5", totalRatings: "20" },
    flags: { isRollback: true },
    productName: "Demo product",
    productUrl: "#",
    quantity: 1000
  }}
/>
```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *productData* | shape | Data from IRO via Quimby | 
| *productNameLines* | number | Number of lines to truncate the product name to. 0 will not display the name. | `2`
| *showPrice* | bool | Show price in tile? | `true`
| *showFlags* | bool | Show flags in tile? | `true`
| *showShippingPass* | bool | Show shipping pass in tile? | `true`
| *showRatings* | bool | Show ratings in tile? | `true`
| *showQuantityLeft* | bool | Show quantity left in tile? | `false`
| *lowQuantityThreshold* | number | Inventory threshold at which to show "Low in Stock" flag | `7`
| *vertical* | bool | if the carousel is vertical | `false`
| *isMobile* | bool | Mobile device type? | `false`
| *userLoggedIn* | bool | Is user logged in? | `false`
| *lazyLoadImage* | bool | Don't load image initially? | `false`
| *submapFlyoutPosition* | enum | Direction the flyout should open. | `"right"`
| *dataAutomationId* | string | Automation ID | `"TempoItemTile"`
| *moduleId* | string | Module ID from a carousel to generate unique UIDs | 

### import

```jsx
import {TempoItemTile} from "@walmart/wmreact-tempo-modules";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape | Data for configuring the component. Typically coming from Tempo.
Contains the header text, as well as the link text and URLs. | `{ moduleId: "", type: "", configs: { header: "", l...`
| *dataAutomationId* | string | Automation ID base string | `""`

### import

```jsx
import  from "@walmart/wmreact-tempo-modules";
```

<hr/>

## WMXOMPAdController

The WMXOMPAdController component is a wrapper component for ads

```jsx
<WMXOMPAdController
  isMobile={true}
  moduleData={WMXOMPAdControllerData}/>
```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape | Data for configuring the component. Typically coming from Tempo.
Contains information on the URL, link text, and colors to use for the links. | 
| *isMobile* | bool | To add proper torbit params (width and height) | `false`
| *dataAutomationId* | string | Tempo module type for analytics and automation testing | `""`

### import

```jsx
import {WMXOMPAdController} from "@walmart/wmreact-tempo-modules";
```

<hr/>

## 

A Single pov in SingleStory and MultiStory POV modules.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *story* | shape | story object of POV | 
| *lazy* | bool | whether the pov Image should lazy load or not. | `false`
| *isMobile* | bool | if it is a mobile request | `false`
| *dataAutomationId* | string | Automation ID base string | `""`

### import

```jsx
import  from "@walmart/wmreact-tempo-modules";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *alt* | string |  | `""`
| *src* | string |  | 
| *clickThrough* | shape |  | 
| *title* | string |  | `""`
| *uid* | string |  | `""`
| *themeButton* | object |  | `null`
| *dataAutomationId* | string |  | `""`

### import

```jsx
import  from "@walmart/wmreact-tempo-modules";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape | Data coming from Tempo and IRO via Quimby to apply to the Module | 
| *isMobile* | bool | Whether or not the device has type mobile. | `false`
| *dataAutomationId* | string | ID used to identify the component in automation tests. | `""`
| *zoneId* | number | Zone ID for analytics | `0`

### import

```jsx
import  from "@walmart/wmreact-tempo-modules";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape | Data coming from Tempo and IRO via Quimby to apply to the Module | 
| *userLoggedIn* | bool | Whether or not user is logged in. Used in tiles for submap logic. | `false`
| *lowQuantityThreshold* | number | Threshold at which to display the low quantity flag in item tiles. | `7`
| *isMobile* | bool | Whether or not the device has type mobile. | `false`
| *dataAutomationId* | string | ID used to identify the component in automation tests. | `""`
| *zoneId* | number | Zone ID for analytics | `0`

### import

```jsx
import  from "@walmart/wmreact-tempo-modules";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape | Data coming from Tempo and IRO via Quimby to apply to the Module | 
| *userLoggedIn* | bool | Whether or not user is logged in. Used in tiles for submap logic. | `false`
| *lowQuantityThreshold* | number | Threshold at which to display the low quantity flag in item tiles. | `7`
| *isMobile* | bool | Whether or not the device has type mobile. | `false`
| *dataAutomationId* | string | ID used to identify the component in automation tests. | `""`
| *zoneId* | number | Zone ID for analytics | `0`

### import

```jsx
import  from "@walmart/wmreact-tempo-modules";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape | Data coming from Tempo and IRO via Quimby to apply to the Module | 
| *isMobile* | bool | Whether or not the device has type mobile. | `false`
| *dataAutomationId* | string | ID used to identify the component in automation tests. | `""`
| *zoneId* | number | Zone ID for analytics | `0`

### import

```jsx
import  from "@walmart/wmreact-tempo-modules";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *spot* | object | story spot image object | 
| *isMobile* | bool | To load proper image sizes based on mobile or desktop | `true`
| *isMobileHidden* | bool | Should be hidden or visible? | `false`
| *dataAutomationId* | string | Automation ID base string | `""`

### import

```jsx
import  from "@walmart/wmreact-tempo-modules";
```

<hr/>

## 

An image link component which wraps a image inside a link.
Current use-case is to use inside POV story.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *image* | shape | Image object of POV | 
| *imageSize* | object | Image Height and width | `{}`
| *lazy* | bool | whether the pov Image should lazy load or not. | `false`
| *dataAutomationId* | string | Automation ID base string | `""`

### import

```jsx
import  from "@walmart/wmreact-tempo-modules";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape | Data coming from Tempo and IRO via Quimby to Apply to the Module | 
| *userLoggedIn* | bool | Whether or not user is logged in. Used in tiles for submap logic. | `false`
| *lowQuantityThreshold* | number | Threshold at which to display the low quantity flag in item tiles. | `7`
| *vertical* | bool | Whether or not the carousel is vertical. | `false`
| *isMobile* | bool | Whether or not the device has type mobile. | `false`
| *dataAutomationId* | string | ID used to identify the component in automation tests. | `""`
| *zoneId* | number | Zone ID for analytics | `0`

### import

```jsx
import  from "@walmart/wmreact-tempo-modules";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape | Data coming from Tempo and IRO via Quimby to apply to the Module | 
| *userLoggedIn* | bool | Whether or not user is logged in. Used in tiles for submap logic. | `false`
| *lowQuantityThreshold* | number | Threshold at which to display the low quantity flag in item tiles. | `7`
| *isMobile* | bool | Whether or not the device has type mobile. | `false`
| *dataAutomationId* | string | ID used to identify the component in automation tests. | `""`
| *zoneId* | number | Zone ID for analytics | `0`

### import

```jsx
import  from "@walmart/wmreact-tempo-modules";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape | Data for configuring the component. Typically coming from Tempo.
Contains the header text, as well as the link text and URLs. | `{ moduleId: "", type: "", configs: { title: "", ti...`
| *dataAutomationId* | string | Automation ID base string | `""`

### import

```jsx
import  from "@walmart/wmreact-tempo-modules";
```

<hr/>
