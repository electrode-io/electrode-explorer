import React, {PropTypes} from "react";
import Copy from "@walmart/wmreact-base/lib/components/copy";

const DEFAULT_CHILDREN = (
  <span>
    <span className="font-bold">This item is not available&nbsp;</span>with these options
    <br/>Please choose different options to purchase this product.
  </span>
);

/**
 A ProductInvalidPrompt component. Displays a generic invalid prompt in the primary cta component.

 For example this is how we use this component.

 ```jsx
<ProductInvalidPrompt/>
 ```

 @import {ProductInvalidPrompt}
 @flags noVisibleRender
 @component ProductInvalidPrompt
 @playground
 ProductInvalidPrompt
 ```
<ProductInvalidPrompt/>
 ```
 */

class ProductInvalidPrompt extends React.Component {
  render(): ReactElement {
    return (
      <div className="prod-InvalidPrompt prod-Padding--m">
        <Copy.Small>
          {this.props.children}
        </Copy.Small>
    </div>
    );
  }
}

ProductInvalidPrompt.displayName = "ProductInvalidPrompt";

ProductInvalidPrompt.propTypes = {
  children: PropTypes.node
};

ProductInvalidPrompt.defaultProps = {
  children: DEFAULT_CHILDREN
};
export default ProductInvalidPrompt;
