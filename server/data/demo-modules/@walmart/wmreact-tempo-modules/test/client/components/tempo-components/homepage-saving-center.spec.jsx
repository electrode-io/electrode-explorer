import React from "react";
import HomepageSavingCenter, {
  _renderLinks
} from "src/components/tempo-components/homepage-saving-center";
import { shallow } from "enzyme";
import props from "../../test-data/homepage-saving-center-test-data.js";

describe("<HomepageSavingCenter />", () => {
  let component;

  beforeEach(() => {
    component = shallow(<HomepageSavingCenter moduleData={props}/>);
  });

  it("Header should have correct text", () => {
    expect(component).to.shallowly.find(".ModuleHeader")
    .to.contains.text("Saving center - Testing");
  });

  it("_renderLinks should return array with length of 10", () => {
    expect(_renderLinks(props.configs.tiles, "homepage-zone1"))
    .to.have.length(10);
  });

  it("Should Display 10 links", () => {
    expect(component).to.shallowly.find(".HomepageSavingCenter-link").to.have.length(10);
  });

  it("_renderLinks[0] should render correct text", () => {
    expect(component).to.shallowly.find(".HomepageSavingCenter-link")
    .to.contains.text("Shop rollback");
  });
});
