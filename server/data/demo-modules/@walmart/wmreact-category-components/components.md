#  (@walmart/wmreact-category-components)

Category Components


## Banner

A component for displaying a multi-heading banner that is responsive

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *backgroundColor* | string |  | `""`
| *headerColor1* | string |  | `""`
| *headerColor2* | string |  | `""`
| *headerColor3* | string |  | `""`
| *headerText1* | string |  | `""`
| *headerText2* | string |  | `""`
| *headerText3* | string |  | `""`
| *moduleType* | string |  | `ModuleTypes.VALUE_OF_DAY_MESSAGING`
| *secondaryColor1* | string |  | `""`
| *secondaryColor2* | string |  | `""`
| *secondaryColor3* | string |  | `""`
| *secondaryText1* | string |  | `""`
| *secondaryText2* | string |  | `""`
| *secondaryText3* | string |  | `""`

### import

```jsx
import {Banner} from "@walmart/wmreact-category-components";
```

<hr/>

## Banner.Image

A component for displaying a single image banner that is responsive

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *backgroundColor* | string |  | `""`
| *image* | object |  | `null`
| *mobileImage* | object |  | `null`
| *moduleType* | string |  | `ModuleTypes.VALUE_OF_DAY_MESSAGING`

### import

```jsx
import {Banner} from "@walmart/wmreact-category-components";
```

<hr/>

## BreadCrumbs

A component for displaying category breadcrumb

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *data* | array |  | `[]`
| *moduleType* | string |  | `ModuleTypes.BREADCRUMB`
| *analyticsDataFunc* | func |  | 

### import

```jsx
import {BreadCrumbs} from "@walmart/wmreact-category-components";
```

<hr/>

## CrossLinksModule

A component for displaying subcategory as a flyout

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *data* | arrayOf |  | 
| *maxRow* | number |  | `4`
| *moduleTitle* | string |  | 
| *moduleType* | string |  | `"CrossLinksModule"`

### import

```jsx
import {CrossLinksModule} from "@walmart/wmreact-category-components";
```

<hr/>

## ExpandableHtmlText

Expandable HTML and text

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *data* | arrayOf |  | `[]`
| *edgeThreshold* | number |  | `50`
| *initialLeftMargin* | number |  | `10`
| *moduleType* | string |  | `ModuleTypes.CATEGORY_NAV`
| *pageId* | number |  | `0`
| *resizeThrottle* | number |  | `100`

### import

```jsx
import {ExpandableHtmlText} from "@walmart/wmreact-category-components";
```

<hr/>

## ExpandableHtmlText

Expandable HTML and text

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *baseHeight* | number |  | `187`
| *defaultOpen* | bool |  | `false`
| *disableClose* | bool |  | `false`
| *markup* | string |  | 
| *moduleType* | string |  | `ModuleTypes.SEO_CUSTOM_HTML`
| *readMore* | bool |  | `true`

### import

```jsx
import {ExpandableHtmlText} from "@walmart/wmreact-category-components";
```

<hr/>

## FacetTab

Facet Tab module component.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *active* | number | current active tab index. | `0`
| *moduleType* | string | Tempo module type for analytics and automation testing | `ModuleTypes.FACET_TAB`
| *onChange* | func | on tab Change callback. should be connected with redux connect | 
| *tabs* | array | tabbed product carousel data | 
| *tabsToLoad* | array | Number of tabs to load. This will be used to lazily load the tabs into dom
  only when tabs are switched. Currently we just render the active tab.
  So onchanging the tabs, there is always going to dom modifications. | 
| *title* | string | Module title | `""`

### import

```jsx
import {FacetTab} from "@walmart/wmreact-category-components";
```

<hr/>

## MinistoryStackable

Ministory Banner Spotlights module

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *isMobile* | bool | To add proper torbit params (width and height) | `true`
| *moduleType* | string | Tempo module type for analytics and automation testing | `ModuleTypes.MINI_STORY`
| *rows* | array | spotlight Configuration rows | 

### import

```jsx
import {MinistoryStackable} from "@walmart/wmreact-category-components";
```

<hr/>

## MinistoryTile

Ministory tile

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *imageUrl* | string | Image url | 
| *width* | number | image width: 433 => oneThird, 878 => twoThird | 
| *url* | string | target url | 
| *title* | string | image title | `""`
| *alt* | string | image alt text | `""`
| *isMobile* | bool | To load proper image sizes based on mobile or desktop | `true`
| *isHidden* | bool | Should be hidden or visible? | `false`

### import

```jsx
import {MinistoryStackable.Tile} from "@walmart/wmreact-category-components";
```

<hr/>

## ModuleDrawer

A component for displaying a group of tiles within a sliding drawer container.

The child Revealer component requires a base height be input; the base height
determines the height of the container when the component is collapsed. The base
height is dynamically calculated, after the component has mounted, using the
height of the tiles, the overall height of the container, and the number of rows
that should be displayed.

This component is responsive. The height of container will be recalculated on a
screen resize. To minimize the effects of many screen resizings, this method is
wrapped in lodash's debounce function.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *buttonClosedText* | string | Revealer button text when revealer is closed | `"View more"`
| *buttonOpenText* | string | Revealer button text when revealer is closed | `"View less"`
| *data* | array | Array of tile data | 
| *large* | number | Number of tiles per row at large breakpoints | `6`
| *medium* | number | Number of tiles per row at medium breakpoints | `4`
| *moduleTitle* | string | Component title | `""`
| *resizeThreshold* | number | Responsive debouncing threshold for window.resize | `100`
| *rows* | number | Number of rows that are visible when the revealer is closed | `2`
| *small* | number | Number of tiles per row at small breakpoints | `4`
| *xLarge* | number | Number of tiles per row at x-large breakpoints | `6`
| *xSmall* | number | Number of tiles per row at x-small breakpoints | `3`
| *moduleType* |  |  | `"ModuleDrawer"`

### import

```jsx
import {ModuleDrawer} from "@walmart/wmreact-category-components";
```

<hr/>

## ModuleDrawerTile

A component for displaying a tile containing an image and optionally a title.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *displayTitle* | bool | Boolean value indicating if title should be displayed | `true`
| *alt* | string | Image alt text | `""`
| *imageUrl* | string | Image URL | 
| *title* | string | Popular category page title | `""`
| *url* | string | Popular category page URL | 

### import

```jsx
import {ModuleDrawerTile} from "@walmart/wmreact-category-components";
```

<hr/>

## ModuleTitle

A component for responsively inline displaying a heading and link

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleType* | string | Tempo module type for analytics and automation testing | `"ModuleTitle"`
| *linkText* | string | Module title link text | `"See all"`
| *linkUrl* | string | Module title link URL | `""`
| *title* | string | Module title heading text | 

### import

```jsx
import {ModuleTitle} from "@walmart/wmreact-category-components";
```

<hr/>

## MultiStory



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleType* | string | Tempo module type for analytics and automation testing | `ModuleTypes.MULTI_STORY_POV_RESPONSIVE`
| *stories* | array | POV Frame story | 
| *zone* | string | Zone configured in tempo | 
| *isMobile* | bool | Device type | `false`
| *arrowColor* | enum | arrow color dark or white? | `"white"`

### import

```jsx
import {MultiStory} from "@walmart/wmreact-category-components";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *backgroundColor* | string | background color on the module. Optional. | `"#fff"`
| *backgroundImage* | string | background image on the module. Optional. | `""`
| *firstTile* | object | First tile configuration for themed tile | `{}`
| *items* | array | Products array to be displayed as part of carousel | 
| *moduleType* | string | Tempo module type for analytics and automation testing | `ModuleTypes.SINGLE_ITEM`
| *seeAllUrl* | string | Url for see all link on right side. | `""`
| *title* | string | Module Title | `""`
| *zone* | string | zone configured in tempo | 

### import

```jsx
import  from "@walmart/wmreact-category-components";
```

<hr/>

## PopularCategories

A component for displaying a list of popular categories.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *data* | array | Array of tile data | 
| *maxTiles* | number | Maximum number of tiles displayed in the open revealer | `20`
| *moduleTitle* | string | Component title | `"Popular Categories"`
| *moduleType* | string | Tempo module type for analytics and automation testing | `ModuleTypes.FEATURED_CATEGORIES`
| *rows* | number | Number of rows that are visible when the revealer is closed | `2`

### import

```jsx
import {PopularCategories} from "@walmart/wmreact-category-components";
```

<hr/>

## ProductCarousel

Carousel component consist of product tiles and custom themed tiles (at starting)

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *firstTile* | object | Themed Tile configuration | `{}`
| *items* | array | product items array to be displayed in carousel | 
| *moduleType* | string | Tempo module type for analytics and automation testing | `"ProductCarousel"`

### import

```jsx
import {ProductCarousel} from "@walmart/wmreact-category-components";
```

<hr/>

## RedirectMessage

A component that displays a message based on a query string.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *linkText* | string | Text appearing in link before search query | `"See all"`
| *message* | string | Module title link text | `"Here are some items based on your search."`
| *moduleType* | string | Tempo module type for analytics and automation testing | `"RedirectMessage"`
| *searchQuery* | string | Search query | 

### import

```jsx
import {RedirectMessage} from "@walmart/wmreact-category-components";
```

<hr/>

## SideBarMenuModule

A component for displaying a group of sidebar menu items

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *data* | array | Array of items data | 
| *isExpanded* | bool | Expander open or not | `true`
| *moduleTitle* | string | component title | 
| *moduleType* | string | Tempo module type for analytics and automation testing | `ModuleTypes.SHOP_BY_CATEGORY`
| *zone* | string | Zone configured in tempo. | 

### import

```jsx
import {SideBarMenuModule} from "@walmart/wmreact-category-components";
```

<hr/>

## SideBarMenuModuleFlyout

A component for displaying a flyout of subcategory menu items in columns.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *subMenuData* | arrayOf | Array of tile data | `[]`
| *maxItemPerColumn* | number | Maximum number of items each column can have | `6`
| *active* | bool | The flyout is display or not | 

### import

```jsx
import {SideBarMenuModuleFlyout} from "@walmart/wmreact-category-components";
```

<hr/>

## SideBarMenuModuleItem

A component for displaying a LeftNav Menu Item

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *uid* | string |  | `""`
| *url* | string |  | 
| *title* | string |  | 
| *subMenuData* | array |  | `[]`
| *maxItemPerColumn* | number |  | `10`

### import

```jsx
import {SideBarMenuModuleItem} from "@walmart/wmreact-category-components";
```

<hr/>

## SingleStory



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleType* | string | Tempo module type for analytics and automation testing | `ModuleTypes.SINGLE_STORY_POV_RESPONSIVE`
| *stories* | array | POV Frame stories. | 
| *zone* | string | Tempo zone value where module is configured | 
| *isMobile* | bool | Is Mobile breakpoint or desktop breakpoint | `false`

### import

```jsx
import {SingleStory} from "@walmart/wmreact-category-components";
```

<hr/>

## TabNavigation

Tab Navigation component. It will act as navigation for Tabbed content.
It is capable of rendering based on device width.
It renders a Chooser component for smaller breakpoints and Button groups
for higher breakpoints

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *moduleType* | string | Tempo module type for analytics and automation testing | `"TabNavigation"`
| *onChange* | func | callback when chooser value is changed or any button is clicked in
  case of button group. | `() => {}`
| *options* | array | options to be rendered as chooser or as in individual buttons | 
| *value* | number | current active selection | 

### import

```jsx
import {TabNavigation} from "@walmart/wmreact-category-components";
```

<hr/>

## TabbedProductCarousel

Tabbed Product carousel
Content pane will be Product Carousel and navigation will depend on device width.
For mobile breakpoints, it will render a Chooser component.
For desktop breakpoints, it will be normal group of badge buttons

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *active* | number | Current active tab | `0`
| *moduleType* | string | Tempo module type for analytics and automation testing | `"TabbedProductCarousel"`
| *onChange* | func | Callback for tab changes. Redux dispatch callback. | 
| *tabs* | arrayOf | Tabs to display: Tab title and product data | 
| *tabsToLoad* | array | Number of tabs to load. This will be used to lazily load the tabs into dom
  only when tabs are switched. Currently we just render the active tab.
  So onchanging the tabs, there is always going to dom modifications. | 

### import

```jsx
import {TabbedProductCarousel} from "@walmart/wmreact-category-components";
```

<hr/>

## ThemedTile

Themed tile Component to be used along with product tiles in product carousels

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *imageUrl* | string | Background image source for the tile. | 
| *moduleType* | string | Tempo module type for analytics and automation testing | `"ThemedTile"`
| *url* | string | target clickThrough url | 
| *button* | shape | Theme Button with custom background and text color | 

### import

```jsx
import {ThemedTile} from "@walmart/wmreact-category-components";
```

<hr/>

## TopBrands

A component for displaying a list of top brands.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *data* | array | Array of tile data | 
| *maxTiles* | number | Maximum number of tiles displayed in the open revealer | `20`
| *large* | number | Number of top brand tiles per row at large breakpoints | `6`
| *medium* | number | Number of top brand tiles per row at medium breakpoints | `6`
| *moduleTitle* | string | Component title | `"Top Brands"`
| *moduleType* | string | Tempo module type for analytics and automation testing | `ModuleTypes.TOP_BRAND`
| *rows* | number | Number of rows that are visible when the revealer is closed | `2`
| *small* | number | Number of top brand tiles per row at small breakpoints | `6`
| *xLarge* | number | Number of top brand tiles per row at x-large breakpoints | `6`
| *xSmall* | number | Number of top brand tiles per row at x-small breakpoints | `4`

### import

```jsx
import {TopBrands} from "@walmart/wmreact-category-components";
```

<hr/>
