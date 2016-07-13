#  (@walmart/wmreact-product-image-carousel)

Product image carousel


## ProductImage

Displays a list of product images for a given product. See below for how this component renders
 at each breakpoint.
 - breakpoint-xs: Primary image as a carousel, no center mode, no alt images
 - breakpoint-s: Primary image as a carousel, center mode, no alt images
 - breakpoint-m: Single primary image, all alt images as horizontal carousel.
  Display up to 4 carousel images per page.
 - breakpoint-l and above:  Single primary image, all alt images as vertical carousel.
  Display up to 5 carousel images per page.


 For example this is how we use this component.

 ```jsx
 <ProductImage images={imageArray}/>
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *images* | array | An array of product alt images. | `[]`
| *primaryImage* | string | An array of product alt images. | `""`
| *handleHover* | func |  | `() => {}`
| *handleClick* | func |  | `() => {}`
| *handleHeroImageClick* | func |  | `() => {}`
| *onSlideChange* | func |  | `() => {}`
| *activeIndex* | number |  | `0`
| *lastIndex* | number |  | `0`

### import

```jsx
import {ProductImage} from "@walmart/wmreact-product-image-carousel";
```

<hr/>
