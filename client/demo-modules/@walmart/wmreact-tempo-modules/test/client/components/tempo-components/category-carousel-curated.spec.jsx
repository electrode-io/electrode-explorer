import React from "react";
import { shallow } from "enzyme";

import CategoryCarouselCurated from "src/components/tempo-components/category-carousel-curated";

describe("<CategoryCarouselCurated>", () => {
  let component;

  beforeEach(() => {
    const props = {
      moduleData: {
        configs: {
          tiles: []
        }
      }
    };
    component = shallow(<CategoryCarouselCurated {...props} />);
  });

  it("should render correctly", () => {
    expect(component).to.shallowly.find("TempoTileCarousel").have.length(1);
  });
});
