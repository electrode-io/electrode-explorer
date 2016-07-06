import React from "react";
import HighlightedDepartments, {
  _renderLinks
} from "src/components/tempo-components/highlighted-departments";
import { shallow } from "enzyme";
import props from "../../test-data/highlighted-departments-test-data.js";

describe("<HighlightedDepartments />", () => {
  let component;

  describe("when the component is rendered", () => {
    beforeEach(() => {
      component = shallow(<HighlightedDepartments {...props}/>);
    });

    it("Header should have correct text", () => {
      expect(component).to.shallowly.find(".ModuleHeader")
      .to.contains.text("In the Spotlight");
    });

    it("_renderLinks should return array with length of 6", () => {
      expect(_renderLinks(props.moduleData.configs, "homepage-zone1"))
      .to.have.length(6);
    });

    it("Should Display 5 links", () => {
      expect(component).to.shallowly.find(".HighlightedDepartments-button").to.have.length(5);
    });

  });
});
