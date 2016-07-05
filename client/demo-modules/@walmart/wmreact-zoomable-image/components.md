#  (@walmart/wmreact-zoomable-image)

A zoomable image component


## 



### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *zoomInClick* | func | Callback handler for zoomIn button click event | 
| *zoomOutClick* | func | Callback handler for zoomOut button click event | 
| *resetClick* | func | Callback handler for reset button click event | 
| *fullyZoomedOut* | bool | Boolean indicating if a component is fullyZoomedIn | 
| *fullyZoomedIn* | bool | Boolean indicating if a component is fullyZoomedIn | 
| *enableReset* | bool | When set to true, display a reset button | 
| *resetButtonLabel* | string | Label for the optional reset button. | 

### import

```jsx
import  from "@walmart/wmreact-zoomable-image";
```

<hr/>

## PannableContainer

A component for allowing panning of DOM-elements too large for their container.
This component is just a wrapper around the react-element-pan component.
This component just adds a componentDidUpdate method to adjust the, scrollLeft
and scrollTop position.
```jsx
<PannableContainer
  width={300}
  height={300}>
  <SpinnerImage
    style={{display:"block", width:500, height:500, maxWidth:"inherit"}}
    src="http://i5.walmartimages.com/dfw/dce07b8c-3b27/
k2-_afa12da1-f17a-4ace-a8ae-8820733e5e0d.v1.jpg"/>
</PannableContainer>
```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *width* | number | The width of the container. | 
| *height* | number | The height of the container. | 
| *scrollLeft* | number | scrollLeft position of the container | `0`
| *scrollTop* | number | scrollTop position of the container | `0`
| *scrollContentOnUpdate* | bool | When set to true, scroll the children to the specified
    scrollLeft and scrollTop upon component update. | `false`

### import

```jsx
import {PannableContainer} from "@walmart/wmreact-zoomable-image";
```

<hr/>

## SpinnerImage

An image component that displays a loading spinner while the image is loading.
```jsx
<SpinnerImage style={{
  width:300,
  height:300
}} src="http://i5.walmartimages.com/dfw/dce07b8c-3b27/
k2-_afa12da1-f17a-4ace-a8ae-8820733e5e0d.v1.jpg"/>
```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *imageWidth* | number | The image width. | `450`
| *imageHeight* | number | The image height. | `450`
| *src* | string | The image source. | 

### import

```jsx
import {SpinnerImage} from "@walmart/wmreact-zoomable-image";
```

<hr/>

## ZoomableImage

A image component that can be zoomed in or out.
 ```jsx
 <ZoomableImage
 enableZoomControls={true}
 enableReset={true}
 viewportWidth={600}
 viewportHeight={600}
 maxWidth={2000}
 maxHeight={2000}
 initialWidth={600}
 initialHeight={600}
 zoomRatio={1000}
 src="http://i5.walmartimages.com/dfw/dce07b8c-3b27/k2-_afa12da1-f17a-4ace-a8ae-8820733e5e0d.v1.jpg"
 />
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *viewportWidth* | number | The viewport window width, used for panning the image | 
| *viewportHeight* | number | The viewport window height, used for panning the image | 
| *src* | string | The src attribite of the image | 
| *enableZoomControls* | bool | When set to true displays the zoom control buttons | `true`
| *enableReset* | bool | When set to true dispaly a reset button when zoom controls are enabled | `false`
| *maxWidth* | number | The max width that an image can be zoomed in | `2000`
| *maxHeight* | number | The max height that an image can be zoomed in | `2000`
| *initialWidth* | number | Initial width of the image to be zoomed | `450`
| *initialHeight* | number | Initial height of the image to be zoomed | `450`
| *zoomRatio* | number | The zoom in/ zoom out ratio. | `1000`

### import

```jsx
import {ZoomableImage} from "@walmart/wmreact-zoomable-image";
```

<hr/>
