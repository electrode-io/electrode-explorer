import React from "react";
import { shallow } from "enzyme";

import WMXOMPAdCarousel from "src/components/tempo-components/wmxomp-ad-carousel";

describe("<WMXOMPAdCarousel>", () => {
  let component;

  beforeEach(() => {
    const props = {
      moduleData: {
        configs: {
          products: []
        }
      }
    };
    component = shallow(<WMXOMPAdCarousel {...props} />);
  });

  it("should render correctly", () => {
    expect(component).to.shallowly.find("TempoTileCarousel").have.length(1);
  });
});
