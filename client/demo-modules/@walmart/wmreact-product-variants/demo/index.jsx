import React from "react";
import Playground from "component-playground";
import assign from "object-assign";
import ProductVariantDropdownUnselectedExperience
  from "raw!./examples/variant-dropdown/unselected-experience.example";
import ProductVariantDropdownUnselectedExperienceWithTitle
  from "raw!./examples/variant-dropdown/unselected-experience-with-title.example";
import ProductVariantDropdownUnselectedVariantError
  from "raw!./examples/variant-dropdown/unselected-experience-variant-unselected-error.example";
import ProductVariantOptionExample from "raw!./examples/product-variant-option.example";
import ProductVariantSwatchExample from "raw!./examples/product-variant-swatch.example";
import ProductVariantTypeExample from "raw!./examples/product-variant-type.example";
import VariantExpanderExample from "raw!./examples/variant-expander.example";
import VariantItemExample from "raw!./examples/variant-item.example";
import VariantsExample from "raw!./examples/variants.example";
import VariantsDisplayNameExample from "raw!./examples/variant-displayname.example";

import * as libraryScope from "../src/index";

export default class Index extends React.Component {
  render() {
    const localScope = assign({ React }, this.props.scope || {}, libraryScope);
    return (
      <div className="component-documentation">
        {Index.Components.map((component, index) => (
          <div key={index}>
            <h3 id={component.title}>{component.title}</h3>
            {component.examples.map((example, subindex) => (
              <div key={subindex}>
                {example.title ? <h4>{example.title}</h4> : null}
                <Playground codeText={example.code}
                  scope={localScope}
                  noRender={example.noRender}/>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }
}

Index.propTypes = {
  scope: React.PropTypes.object
};

Index.Components = [
  { title: "Variants.Expander",
    examples: [
      {
        type: "playground",
        code: VariantExpanderExample,
        noRender: true
      }
    ]
  },
  { title: "Variants.Item",
    examples: [
      {
        type: "playground",
        code: VariantItemExample,
        noRender: true
      }
    ]
  },
  { title: "Variants",
    examples: [
      {
        type: "playground",
        code: VariantsExample,
        noRender: true
      }
    ]
  },
  { title: "ProductVariantSwatch",
    examples: [
      {
        type: "playground",
        code: ProductVariantSwatchExample,
        noRender: true
      }
    ]
  },
  { title: "ProductVariantDropdown - Unselected Experience",
    examples: [
      {
        type: "playground",
        code: ProductVariantDropdownUnselectedExperience,
        noRender: true
      }
    ]
  },
  { title: "ProductVariantDropdown - Unselected Experience with Title",
    examples: [
      {
        type: "playground",
        code: ProductVariantDropdownUnselectedExperienceWithTitle,
        noRender: true
      }
    ]
  },
  { title: "ProductVariantDropdown - Unselected Variant Error",
    examples: [
      {
        type: "playground",
        code: ProductVariantDropdownUnselectedVariantError,
        noRender: true
      }
    ]
  },
  { title: "ProductVariantOption",
    examples: [
      {
        type: "playground",
        code: ProductVariantOptionExample,
        noRender: true
      }
    ]
  },
  { title: "ProductVariantType",
    examples: [
      {
        type: "playground",
        code: ProductVariantTypeExample,
        noRender: true
      }
    ]
  },
  { title: "Variants with Display Names",
    examples: [
      {
        type: "playground",
        code: VariantsDisplayNameExample,
        noRender: true
      }
    ]
  }
];
