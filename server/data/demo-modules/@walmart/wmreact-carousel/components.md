# Carousel (@walmart/wmreact-carousel)

A carousel component for Hydra UI


## FeaturedElementCarousel

Responsive Carousel with option of static tile, background color and background image

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *header* | node | Header to be rendered inside customized area | `null`
| *staticTile* | node | Static tile to be rendered, doesn't rotate with children | `null`
| *staticTileWidth* | string | Static tile width | `"200px"`
| *backgroundColor* | string | CSS background-color property to be set on carousel wrapper | `"transparent"`
| *backgroundImage* | string | CSS background-image property to be set on carousel wrapper | `null`
| *framePadding* | string | Padding of carousel, also pads static tile | `"0"`
| *dataModuleType* | string | Required for Tempo modules and automation tests | `""`
| *dataModuleId* | string | Required for Tempo modules and automation tests | `""`
| *dataAutomationId* | string | Required for automation tests | `""`

### import

```jsx
import Carousel from "@walmart/wmreact-carousel";
```

<hr/>
