import React from "react";
import { shallow } from "enzyme";

import Link from "@walmart/wmreact-base/lib/components/link";
import Image from "@walmart/wmreact-base/lib/components/image";
import TempoCategoryTile from
  "src/components/helper-components/tempo-category-tile";
import props from "../../test-data/tempo-featured-category-tile-test-data.js";

describe("<TempoCategoryTile />", () => {
  let wrapper;
  let component;

  beforeEach(() => {
    component = shallow(<TempoCategoryTile category={props} />);
    wrapper = component.find(".TempoCategoryTile");
  });

  it("should render tile", () => {
    expect(wrapper).to.shallowly.have.length(1);
    expect(component).to.be.ok;
  });

  it("Link, Image, Torbit image size should render properly", () => {
    const image = component.find(Image);
    const link = component.find(Link);
    const imageSrc = `${props.image.src}?odnWidth=144&odnHeight=144`;

    expect(image).to.shallowly.have.length(1);
    expect(link).to.shallowly.have.length(1);
    expect(image).to.shallowly.have.props("src").to.equal(imageSrc);
  });

  it("shoud use the mobileImageSize if isMobile is true", () => {
    component = shallow(
      <TempoCategoryTile category={props} isMobile={true} mobileImageSize={90} />
    );
    const imageSrc = `${props.image.src}?odnWidth=90&odnHeight=90`;
    expect(component).to.shallowly.find(Image).to.shallowly.have.props("src").to.equal(imageSrc);
  });

  describe("truncation", () => {
    it("should truncate title to one line if titleAlignment is center", () => {
      expect(component).to.shallowly.find("TextTruncate").to.shallowly.have.props("line").eq(1);
    });

    it("should truncate title to two lines if titleAlignment is not center", () => {
      component = shallow(<TempoCategoryTile category={props} titleAlignment="left" />);
      expect(component).to.shallowly.find("TextTruncate").to.shallowly.have.props("line").eq(2);
    });
  });
});
