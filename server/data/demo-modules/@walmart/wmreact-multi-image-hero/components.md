#  (@walmart/wmreact-multi-image-hero)

A hero component containing several images


## BundleImage

Hero image of a bundle component.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *decorate* | bool |  | `false`
| *showHeader* | bool |  | `false`
| *details* | string |  | 
| *imageUrl* | string |  | 
| *title* | string |  | 
| *numberComponents* |  |  | `1`

### import

```jsx
import {BundleImage} from "@walmart/wmreact-multi-image-hero";
```

<hr/>

## CarouselList

Carousel of images.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *separator* | element |  | `<span className="plus-sign display-inline-block">+...`
| *slidesToShow* | number |  | `2.25`
| *slidesToScroll* | number |  | `2`
| *responsive* | object |  | `[ { selectors: ["small", "x-small"], settings: { s...`

### import

```jsx
import {CarouselList} from "@walmart/wmreact-multi-image-hero";
```

<hr/>

## ImageList

List of images.

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *separator* | element |  | `<span className="plus-sign display-inline-block">+...`

### import

```jsx
import {ImageList} from "@walmart/wmreact-multi-image-hero";
```

<hr/>

## MultiImageHero

Hero component for a bundle containing one or several items

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *bundleData* | shape |  | 

### import

```jsx
import {MultiImageHero} from "@walmart/wmreact-multi-image-hero";
```

<hr/>
