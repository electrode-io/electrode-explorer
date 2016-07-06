import React from "react";
import { shallow } from "enzyme";

import ItemCarouselCurated from "src/components/tempo-components/item-carousel-curated";

describe("<ItemCarouselCurated>", () => {
  let component;

  beforeEach(() => {
    const props = {
      moduleData: {
        configs: {
          products: []
        }
      }
    };
    component = shallow(<ItemCarouselCurated {...props} />);
  });

  it("should render correctly", () => {
    expect(component).to.shallowly.find("TempoTileCarousel").have.length(1);
  });
});
