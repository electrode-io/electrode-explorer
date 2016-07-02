#  (@walmart/wmreact-product-inputs)

A quantity dropdown used in product page.


## ProductQuantity

The quantity dropdown field for the product page.

 For example this is how we use this component.

 ```jsx
 <ProductQuantity label="Quantity: " quantityOptions={[1, 2, 3, 4, 5]}/>
 ```

### Properties

| Property | Type | Description | Default |
| -------- | ---- | ----------- | ------- |
| *onChange* | func | Event callback when selected quantity changes | `() => { /*no-op*/ }`
| *quantityOptions* | array | An array of quantity options/values. | `[1]`
| *label* | string | The label for the quantity field | `"Quantity : "`

### import

```jsx
import {ProductQuantity} from "@walmart/wmreact-product-inputs";
```

<hr/>
