# POVFrame (@walmart/wmreact-pov-frame)

A Single frame for different kind of POVs (Single Story and MultiStory)


## 

Themable button for POVs.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *buttonAlignment* | enum | Button Alignment wrt POV Container. (left, center, right) | `""`
| *linkText* | string | Text to show on Button. | 
| *clickThrough* | shape | Target url link. | 
| *buttonTextColor* | string | Button Text color. | `""`
| *themeButtonColor* | string | Button background color. | `""`
| *uid* | string | identifier used in analytics. | 
| *assetId* | string | identifier used in analytics. | 

### import

```jsx
import  from "@walmart/wmreact-pov-frame";
```

<hr/>

## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *alt* | string | Alt text for image. | 
| *assetId* | string | identifier used in analytics. | 
| *clickThrough* | shape | An object with target url information in form of simple link or image maps. | 
| *contentType* | string | Content Type of image file. To be used in module preview. | 
| *height* | string | Image height. | 
| *size* | string | Size of image file in bytes. To be used in module preview. | 
| *src* | string | Image source. | 
| *title* | string | Image title. | 
| *uid* | string | identifier used in analytics. | 
| *width* | string | Image width. | 
| *url* | string | Target url for rest of the image in case of image maps. | `""`
| *lazy* | bool | lazy load image | 
| *isMobile* | bool | is mobile or desktop? | 

### import

```jsx
import  from "@walmart/wmreact-pov-frame";
```

<hr/>

## POVFrame

A Single frame in SingleStory and MultiStory POV modules.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *themeButton* | object |  | `null`
| *overlays* | array |  | `[]`
| *image* | object |  | 
| *lazy* | bool |  | `false`
| *isMobile* | bool |  | `false`

### import

```jsx
import {POVFrame} from "@walmart/wmreact-pov-frame";
```

<hr/>

## POVFrame.Image

An image link component which wraps a image inside a link.
Current use-case is to use inside POVSlide frame.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *alt* | string | Alt text for image. | 
| *assetId* | string | identifier used in analytics. | 
| *clickThrough* | object | An object with target url information in form of simple link or image maps. | 
| *contentType* | string | Content Type of image file. To be used in module preview. | 
| *height* | string | Image height. | 
| *size* | string | Size of image file in bytes. To be used in module preview. | 
| *src* | string | Image source. | 
| *title* | string | Image title. | 
| *uid* | string | identifier used in analytics. | 
| *width* | string | Image width. | 
| *lazy* | bool | lazy load image | 
| *isMobile* | bool | is mobile or desktop? | 

### import

```jsx
import {POVFrame.Image} from "@walmart/wmreact-pov-frame";
```

<hr/>

## 

Button overlays on POVs

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *location* | string | Location string for positioning the button in grid. | 
| *currentPrice* | string | Price to display. It can be from IRO response or manualPrice set in tempo. | 
| *listPrice* | string | To Show was price incase of Rollback. | `""`
| *priceDisplay* | enum | Text to display inside bubble for mobile breakpoint. | 
| *bubbleText* | string | Text to display inside bubble for desktop breakpoint. | `""`
| *defaultColor* | string | Text color for messages. | `""`
| *hexCode* | string | Background color of buttons. | `""`
| *uid* | string | unique id to be used in analytics. | 

### import

```jsx
import  from "@walmart/wmreact-pov-frame";
```

<hr/>
