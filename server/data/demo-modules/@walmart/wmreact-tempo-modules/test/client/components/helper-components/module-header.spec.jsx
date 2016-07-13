import React from "react";
import ModuleHeader from "src/components/helper-components/module-header";
import { shallow } from "enzyme";

describe("<ModuleHeader />", () => {
  let component;
  let props;
  component = shallow(<ModuleHeader {...props}/>);

  it("should mount the component correctly", () => {
    expect(component).to.be.defined;
  });

  describe("<ModuleHeader /> with Header Only", () => {
    beforeEach(() => {
      props = {
        headerTitle: "My Header",
        headerTitleColor: "#eee"
      };
      component = shallow(<ModuleHeader {...props}/>);
    });

    it("Should Display Header with headerTitleColor", () => {
      expect(component).to.shallowly.find(".ModuleHeader-heading").contains.text("My Header");
      const wrapper = component.find(".ModuleHeader-heading");
      const style = {
        color: "#eee"
      };
      expect(wrapper).to.shallowly.have.props("style").deep.equal(style);
    });

    it("Should Display Header without headerTitleColor", () => {
      props.headerTitleColor = null;
      component = shallow(<ModuleHeader {...props}/>);
      const wrapper = component.find(".ModuleHeader-heading");
      const style = {};
      expect(wrapper).to.shallowly.have.props("style").deep.equal(style);
    });

    it("Should not Display Link", () => {
      expect(component).to.shallowly.find(".ModuleHeader-button").to.have.length(0);
    });
  });

  describe("<ModuleHeader /> with Link Only", () => {
    beforeEach(() => {
      props = {
        showArrow: true,
        themeButton: {
          linkText: "Shop All",
          title: "Shop All",
          className: "ModuleHeader-button",
          clickThrough: {
            type: "url",
            value: "http://www.walmart.com/browse/3944_1078524_1231200"
          },
          uid: "CLAM4z1m"
        }
      };
      component = shallow(<ModuleHeader {...props}/>);
    });

    it("Should not Display Header", () => {
      expect(component).to.shallowly.find(".ModuleHeader-heading").to.have.length(0);
    });

    it("Should Display Link", () => {
      expect(component).to.shallowly.find(".ModuleHeader-button").to.have.length(1);
    });

  });
});
