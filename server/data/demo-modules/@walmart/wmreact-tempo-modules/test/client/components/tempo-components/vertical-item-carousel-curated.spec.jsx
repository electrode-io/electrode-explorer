import React from "react";
import { shallow } from "enzyme";

import VerticalItemCarouselCurated
  from "src/components/tempo-components/vertical-item-carousel-curated";

describe("<VerticalItemCarouselCurated>", () => {
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
    component = shallow(<VerticalItemCarouselCurated {...props} />);
  });

  it("should render correctly", () => {
    expect(component).to.shallowly.find("TempoTileCarousel").have.length(1);
  });
});
