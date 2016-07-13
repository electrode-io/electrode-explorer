import React from "react";
import { shallow } from "enzyme";

import WMXOMPAdCarousel from "src/components/tempo-components/wmxomp-ad-carousel";

describe("<WMXOMPAdCarousel>", () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      moduleData: {
        configs: {
          products: [],
          midasModuleData: {}
        }
      }
    };
    component = shallow(<WMXOMPAdCarousel {...props} />);
  });

  it("should render correctly", () => {
    expect(component).to.shallowly.find("TempoTileCarousel").have.length(1);
  });

  it("should render empty div if no midasModuleData provided", () => {
    props.moduleData.configs.midasModuleData = null;
    component = shallow(<WMXOMPAdCarousel {...props} />);
    expect(component).to.shallowly.have.type("div");
    expect(component.children()).to.have.length(0);
  });
});
