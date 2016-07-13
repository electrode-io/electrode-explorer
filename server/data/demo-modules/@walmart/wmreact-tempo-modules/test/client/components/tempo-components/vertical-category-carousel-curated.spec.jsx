import React from "react";
import { shallow } from "enzyme";

import VerticalCategoryCarouselCurated
  from "src/components/tempo-components/vertical-category-carousel-curated";

describe("<VerticalCategoryCarouselCurated>", () => {
  let component;

  beforeEach(() => {
    const props = {
      moduleData: {
        configs: {
          products: []
        }
      },
      vertical: true
    };
    component = shallow(<VerticalCategoryCarouselCurated {...props} />);
  });

  it("should render correctly", () => {
    expect(component).to.shallowly.find("TempoTileCarousel").have.length(1);
  });
});
