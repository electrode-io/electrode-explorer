import React from "react";
import { shallow } from "enzyme";

import TempoItemTile from "src/components/helper-components/tempo-item-tile";

describe("<TempoItemTile />", () => {
  let component;
  let props;

  beforeEach(() => {
    props = {
      productData: {}
    };
    component = shallow(<TempoItemTile {...props} />);
  });

  it("should render correctly", () => {
    expect(component).to.shallowly.have.type("div");
    expect(component).to.shallowly.find("Tile").to.have.length(1);
  });
});
