#  (@walmart/wmreact-header)




## Fader

A wrapper component for implementing a fade out or fade in.

```jsx
<Fader type="fadeOut" duration={1000}>
  <div style={{height: 50, width: 50, background: "blue"}}>
  </div>
</Fader>
```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *type* | enum | Type of fade ("fadeIn", "fadeOut", or "none") | `"none"`
| *duration* | number | Duration of the fade in milliseconds | `1000`
| *callback* | func | Callback to be executed after fade is complete | 

### import

```jsx
import {Fader} from "@walmart/wmreact-header";
```

<hr/>

## GlobalEyebrowNavMobile

This component displays the EyebrowNav in the Offcanvas nav in the header.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape | Data for configuring the component. Typically coming from Tempo.
  Contains information on the URL, link text, and colors to use for the links. | `{ type: "", moduleId: "", configs: { giftCardsMain...`
| *dataAutomationId* | string | Automation ID base string | `"header-GlobalEyebrowNavMobile"`

### import

```jsx
import {GlobalEyebrowNavMobile} from "@walmart/wmreact-header";
```

<hr/>

## GlobalLefthandNav

The header left hand nav. A navigation menu for going to department and category pages.

 ```jsx
 <GlobalLefthandNav moduleData={
   {
     type: "GlobalLefthandNav",
     configs: {
     campaignDepartment: {
       link: {
         linkText: "Daily Savings Center",
         title: "Daily Savings Center",
         clickThrough: {
           type: "url",
           value: "http://www.walmart.com/Daily-Savings-Center"
         },
         uid: "QRVQ4o9Q"
       },
       textColor: "#f42121",
       uid: "HlRFhIjQ"
     },
     departments: [{
       name: "Electronics & Office",
       link: {
         alt: "Electronics & Office",
         assetId: "3781758",
         assetName: "35023-119032-01_INT_86995_Electronics_Flyout_207x460_1219_V1.png",
         clickThrough: {
           type: "url",
           value: "/browse/electronics/laptops/3944_3951_1089430?cat_id=3944_3951_1089430"
         },
         height: "460",
         src: "http://i5.walmartimages.com/dfw/4ff9c6c9-8c13/k2-_b6e99a03-22d2-4d5e-8a0f.v1.png",
         title: "Electronics & Office",
         width: "207",
         size: "67492",
         contentType: "image/png",
         uid: "qGxDjh9C"
       },
       departments: [],
       uid: "-QBPPMxd"
     }, {
       name: "Movies, Music & Books",
       link: {
         alt: "Star Wars",
         assetId: "3785082",
         assetName: "35373-123898_StarWars_FO_207x460_03_V1.png",
         clickThrough: {
           type: "url",
           value: "/browse/movies-tv/star-wars-movies/4096_1229475"
         },
         height: "460",
         src: "http://i5.walmartimages.com/dfw/4ff9c6c9-ed89/k2-_f7f94c1b-7778-4605-9b77.v1.png",
         title: "Star Wars",
         width: "207",
         size: "136693",
         contentType: "image/png",
         uid: "Rtp0RJyz"
       },
       departments: [],
       uid: "GEEpibG6"
     }],
     optionalDepartment: {
       link: {
         linkText: "See All Departments",
         title: "See All Departments",
         clickThrough: {
           type: "url",
           value: "http://www.walmart.com/all-departments"
         },
         uid: "mYLWJn6V"
       },
       uid: "1MwO8I83"
     },
   },
   module_id: "29b9c6f0-28b9-470c-9e65-1b3f09f64083"
   }
 }/>
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape | Data for configuring the component. Typically coming from Tempo. Contains department data. | `{ type: "", moduleId: "", configs: {} }`
| *dataAutomationId* | string | Automation ID base string | `"header-GlobalLefthandNav"`
| *isBot* | bool | Check for web crawler bots. | `false`

### import

```jsx
import {GlobalLefthandNav} from "@walmart/wmreact-header";
```

<hr/>

## GlobalMarketingMessages

The header marketing message component. Has links customizable by text and url which rotate with a
 fade effect with configurable timing.

 ```jsx
 <GlobalMarketingMessages fadeDuration={800} sustainDuration={5000} moduleData={
   {
     type: "GlobalMarketingMessages",
     configs: {
       messages: [
         {
           link: {
             linkText: "FREE SHIPPING on $50 orders",
             title: "FREE SHIPPING on $50 orders",
             clickThrough: {
               type: "category",
               value: "/cp/1088989"
             },
             uid: "Rm-f-ARE"
           },
           uid: "noSNifYr",
         },
         {
           link: {
             linkText: "FREE in-store pickup",
             title: "FREE in-store pickup",
             clickThrough: {
               type: "category",
               value: "/cp/1088989"
             },
             uid: "Hu2fuUAj"
           },
           uid: "rC4mqJwC"
         }, {
           link: {
             clickThrough: {
               type: "url",
               value: "http://grocery.walmart.com/usd-estore/m/home/anonymouslanding.jsp"
             },
             linkText: "FREE Walmart Grocery pickup",
             title: "FREE Walmart Grocery Pickup",
             uid: "LAtNdeIe"
           },
           uid: "tKV0zOCO"
         }
       ],
     },
     moduleId: "8600fadf-4ad5-46d5-aa3c-52c02af51ced"
   }
 }/>
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleData* | shape | Data for configuring the component. Typically coming from Tempo. Contains information on the URL,
  link text. | 
| *size* | enum | True if using the version for the medium breakpoint | `"large"`
| *fadeDuration* | number | How long (in milliseconds) to fade in/out | `1000`
| *sustainDuration* | number | How long (in milliseconds) at full opactiy | `7000`
| *dataAutomationId* | string | Automation ID base string | `"header-GlobalMarketingMessages"`

### import

```jsx
import {GlobalMarketingMessages} from "@walmart/wmreact-header";
```

<hr/>

## GlobalSearch

The Global Search component of the header. Passes moduleData down to the searchdropdown.

 ```jsx
 <GlobalSearch moduleData={
   {
     type: "GlobalSearch",
     configs: {
       options: [
         {
           label: "Auto & Tires",
           categoryId: "91083",
           uid: "KZ0ktkHH"
         },
         {
           label: "Baby",
           categoryId: "5427",
           uid: "fHCypgFG"
         },
         {
           label: "Beauty",
           categoryId: "1085666",
           uid: "whzlG8-N"
         },
         {
           label: "Books",
           categoryId: "3920",
           uid: "Prik5hH8"
         },
         {
           label: "Cell Phones",
           categoryId: "1105910",
           uid: "oJgACZdH"
         },
         {
           label: "Clothing",
           categoryId: "5438",
           uid: "IRVq4Xj2"
         },
         {
           label: "Electronics",
           categoryId: "3944",
           uid: "8ojrslW8"
         },
         {
           label: "Food",
           categoryId: "976759",
           uid: "88kAZA4B"
         }
       ]
     },
     module_id: "56074e92-06db-4890-b5cd-2f87dc7327c4"
   }
 } />
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *isMobile* | bool | check mobile device | `false`
| *moduleData* | shape | Data for configuring the component. Typically coming from Tempo. Contains on the category ID's
  and labels to be used in the dropdown. | 
| *selectedCategory* | string | Category ID to be initially selected | `null`
| *dataAutomationId* | string | Automation ID base string | `"header-GlobalSearch"`

### import

```jsx
import {GlobalSearch} from "@walmart/wmreact-header";
```

<hr/>

## Header

Global Header component connected to Tempo and Redux
  ```jsx
  <StatelessHeader searchExposed={true} totalItemsCount={100} userName="Test" />
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
| *storeFinderUrl* | string | Url to fetch nearby stores | `"/store/ajax/preferred-flyout"`
| *typeAheadUrl* | string | Url to fetch recomendations in searchbar | `""`

### import

```jsx
import {Header} from "@walmart/wmreact-header";
```

<hr/>

## HeaderButtonToggle

The header button toggle component. Primarily used in the mobile header to expand search or nav.

 ```jsx
 <HeaderSearchToggle onClick={() => {}} />
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *onClick* | func | Click handler | 
| *name* | string | Name of icon | 

### import

```jsx
import {HeaderButtonToggle} from "@walmart/wmreact-header";
```

<hr/>

## HeaderCart

A header cart icon component.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *totalItemsCount* | number | Total number of items. | `0`
| *maxCountThreshold* | number | The max count value. After totalItemsCount reaches maxCountThreshold,
  the HeaderCartCount would start displaying the value as
  (maxCountThreshold+) instead of actual totalItemsCount, for e.g. if maxCountThreshold is 99
  and totalItemsCount is 100, the component would display the total as 99+ instead of 100.
  Default value for this is 99. | `99`
| *dataAutomationId* | string | dataAutomationId for the element. | `"header-Cart"`

### import

```jsx
import {HeaderCart} from "@walmart/wmreact-header";
```

<hr/>

## HeaderCartCount

A header cart count indicator component.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *totalItemsCount* | number | Total number of items. | `0`
| *maxCountThreshold* | number | The max count value. After totalItemsCount reaches maxCountThreshold,
    the HeaderCartCount would start displaying the value as
    (maxCountThreshold+) instead of actual totalItemsCount, for e.g. if maxCountThreshold is 99
    and totalItemsCount is 100, the component would display the total as 99+ instead of 100.
    Default value for this is 99. | `99`

### import

```jsx
import {HeaderCartCount} from "@walmart/wmreact-header";
```

<hr/>

## HeaderLogo

Walmart Logo component for use in the header.
  ```jsx
    <HeaderLogo shippingPass={true} />
  ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *shippingPass* | bool | shippingPass means there is another
  shippingPass logo under the primary logo | `false`
| *dataAutomationId* | string | Automation ID base string | `"header-Logo"`

### import

```jsx
import {HeaderLogo} from "@walmart/wmreact-header";
```

<hr/>

## LefthandNavPanel

The submenu panel subcomponent for the header left hand nav. Has links for departments and
 and categories as well as a lazy loaded promo image for the given super department.

 ```jsx
 <LefthandNavPanel show={true} superDept={
   {
     name: "Electronics & Office",
     link: {
       alt: "Electronics & Office",
       assetId: "3781758",
       assetName: "35023-119032-01_INT_86995_Electronics_Flyout_207x460_1219_V1.png",
       clickThrough: {
         type: "url",
         value: "/browse/electronics/laptops/3944_3951_1089430?cat_id=3944_3951_1089430
       },
       height: "460",
       src: "http://i5.walmartimages.com/dfw/4ff9c6c9-8c13/k2-_b6e99a03-22d2-4d5e-8a0f.png",
       title: "Electronics & Office",
       width: "207",
       size: "67492",
       contentType: "image/png",
       uid: "qGxDjh9C"
     },
     departments: [{
       department: {
         linkText: "Shop Electronics",
         title: "Shop Electronics",
         clickThrough: {
           type: "url",
           value: "/cp/Electronics/3944"
         },
         uid: "p1jc5fJq"
       },
       colNum: "1",
       uid: "7LhTgYRR",
       categories: []
     }, {
       department: {
         linkText: "TV & Video",
         title: "TV & Video",
         clickThrough: {
           type: "url",
           value: "/cp/televisions-video/1060825"
         },
         uid: "pXHzlEyi"
       },
       colNum: "1",
       categories: [{
         category: {
           linkText: "TVs",
           title: "TVs",
           clickThrough: {
             type: "url",
             value: "/browse/electronics/tvs/3944_1060825_447913"
           },
           uid: "IwLIj6qT"
         },
         uid: "OAraUC3y"
       }, {
         category: {
           linkText: "DVD & Blu-ray Players ",
           title: "DVD & Blu-ray Players ",
           clickThrough: {
             type: "url",
             value: "/browse/electronics/dvd-blu-ray-players/3944_1060825_95987"
           },
           uid: "F6F3Droh"
         },
         uid: "0TMGv5cD"
       }, {
         category: {
           linkText: "Home Audio & Theater ",
           title: "Home Audio & Theater ",
           clickThrough: {
             type: "url",
             value: "/cp/Home-Audio-Theater/77622"
           },
           uid: "mQER_pBQ"
         },
         uid: "x76Q43t6"
       }],
       uid: "P_Qsh1oB"
     }, {
       department: {
         linkText: "Portable Audio",
         title: "iPod & Portable Audio",
         clickThrough: {
           type: "url",
           value: "/cp/ipods-mp3-players/96469"
         },
         uid: "gSQgXeD8"
       },
       colNum: "2",
       categories: [],
       uid: "Hp-IHs5A"
     }, {
       department: {
         linkText: "Tips & Advice",
         title: "Tips & Advice",
         uid: "2HNCL1LP",
         clickThrough: {
           type: "url",
           value: "http://wm15.walmart.com/electronics-resource-center/"
         }
       },
       colNum: "3",
       categories: [],
       uid: "-ko6h6mz"
     }],
     uid: "-QBPPMxd"
   }
 }/>

 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *superDept* | shape | Super department data. | 
| *show* | bool | Toggle to show component. | `false`
| *dataAutomationId* | string | Automation ID base string | `"header-GlobalLeftHandNav-panel"`

### import

```jsx
import {LefthandNavPanel} from "@walmart/wmreact-header";
```

<hr/>

## MenuAimWrapper

A wrapper component for using the behavior from the react-menu-aim mixin which allows
for easier navigation through a dropdown down menu by detecting the mouse direction to infer the
user's intent. Assign a ref to wrapper and use the exposed handleMouseEnterRow(index, handler) when
selecting a menu item.
https://github.com/jasonslyvia/react-menu-aim

```jsx
MenuAimExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {selected: null};
    this._setSelected = this._setSelected.bind(this);
  }

  _setSelected(index) {
    this.setState({selected: index});
  }


  _selectRow(index) {
    this.refs.handleMouseEnterRow(index, this._setSelected)
  }

  render() {
    return (
      <MenuAimWrapper ref="menuAim">
        <ul class="menu">
          <li onMouseEnter={this._selectRow(0)}></li>
          <li onMouseEnter={this._selectRow(1)}></li>
        </ul>
        <Submenu selectedMenu={this.state.selected} />
      </MenuAimWrapper>
    );
  }
}
```


### import

```jsx
import {MenuAimWrapper} from "@walmart/wmreact-header";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *daysHidden* | number |  | `15`
| *daysReminder* | number |  | `90`
| *appStoreLanguage* | string |  | `""`
| *button* | string |  | `"View"`
| *url* | string |  | `""`
| *storeText* | custom |  | `{ ios: "On the App Store", android: "In Google Pla...`
| *price* | custom |  | `{ ios: "Free", android: "Free", windows: "Free" }`
| *force* | shape |  | 
| *title* | string |  | `""`
| *author* | string |  | `""`
| *hide* | bool |  | `false`
| *dataAutomationId* | string |  | `"header-AppBanner"`

### import

```jsx
import  from "@walmart/wmreact-header";
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
import  from "@walmart/wmreact-header";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *dataAutomationId* |  |  | `"storeListItem"`
| *preferred* |  |  | `false`

### import

```jsx
import  from "@walmart/wmreact-header";
```

<hr/>

## OffcanvasNav

An intermediate component for the header for rendering the offcanvas nav and overlay. Should be
 used inside a TempoWrapper so all modules are populated

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *isBot* | bool | Check for web crawler bots. | `false`
| *userName* | string | First name of the user if signed in. Null otherwise. | `null`

### import

```jsx
import {OffcanvasNav} from "@walmart/wmreact-header";
```

<hr/>

## SearchDropdown

The search dropdown component. Has a dropdown to select a category used when searching.

 ```jsx
 <SearchDropdown options={
   [
     {
       label: "Auto & Tires",
       categoryId: "91083"
     },
     {
       label: "Baby",
       categoryId: "5427"
     },
     {
       label: "Beauty",
       categoryId: "1085666"
     },
     {
       label: "Books",
       categoryId: "3920"
     },
     {
       label: "Cell Phones",
       categoryId: "1105910"
     },
     {
       label: "Clothing",
       categoryId: "5438"
     },
     {
       label: "Electronics",
       categoryId: "3944"
     },
     {
       label: "Food",
       categoryId: "976759"
     }
   ]
 } />
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *options* | array | Category ID's and labels to be used in the dropdown. | 
| *selectedCategory* | string | Category ID to be initially selected | `null`
| *columnLength* | number | Number of categories in each column. | `9`
| *dataAutomationId* | string | Automation ID base string | `"header-SearchDropdown"`

### import

```jsx
import {SearchDropdown} from "@walmart/wmreact-header";
```

<hr/>

## SearchbarWrapper

An intermediate component for the header for rendering and managing the state of the
  search bar at mobile breakpoints. Should be used inside a TempoWrapper so all modules are
  populated.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *isMobile* | bool | check mobile device | `false`
| *searchExposed* | bool | True if search should be exposed by default at smaller screen widths. | `true`
| *selectedCategory* | string | Category ID to be initially selected | `null`
| *typeAheadUrl* | string | Url to fetch recomendations in searchbar | `""`

### import

```jsx
import {SearchbarWrapper} from "@walmart/wmreact-header";
```

<hr/>

## StoreFinderField

This component is used to find stores near your specified location

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *dataAutomationId* | string | Automation id for testing | `"storeFinderField"`

### import

```jsx
import {StoreFinderField} from "@walmart/wmreact-header";
```

<hr/>

## StoreFinderFlyout

This component is the StoreFinderFlyout. This has three states.
1) On initial render, it renders as a Link
2) On hover and during loading in renders a loading Flyout
3) On service response it renders the flyout with stores near you

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *storeFinderResponse* | shape | Data used to render storefinder panel.
  This includes the loading and error states and stores data | 
| *linkData* | object | Data for configuring the component. Typically coming from Tempo.
  Contains information on the URL, link text, and colors to use for the links. | 
| *iconName* | string |  | `"pin"`
| *index* | number |  | `0`
| *onStoreFinderActive* | func | Callback that is triggered when storefinder flyout is open | `() => {}`
| *dataAutomationId* | string | automation id for tests | `"storeFinderFlyout"`

### import

```jsx
import {StoreFinderFlyout} from "@walmart/wmreact-header";
```

<hr/>

## StoreList

This component displays a store list

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *title* | string | Tile for the list | `"Stores near you"`
| *dataAutomationId* | string | dataAutomationId used for testings | `"storeList"`

### import

```jsx
import {StoreList} from "@walmart/wmreact-header";
```

<hr/>

## StorefinderLink

Store Finder Link component
Component is used in mobile header and tries to get the location from the Browser using the
Geolocate library from @walmart/geolocate when clicked on it

On resolution of the Promise, component would redirect the browser to:
- /store/finder?latitude=xxx&longitude=xxx - If we are able to retrieve the geolocation
- /store/finder - If we are not able to retrieve the geolocation

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *dataAutomationId* | string | Automation ID base string | `"header-StorefinderLink"`

### import

```jsx
import {StorefinderLink} from "@walmart/wmreact-header";
```

<hr/>
