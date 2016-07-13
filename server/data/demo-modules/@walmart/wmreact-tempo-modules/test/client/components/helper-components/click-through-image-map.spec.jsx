import React from "react";
import ReactDOM from "react-dom";
import { shallow } from "enzyme";
import { Link, Image } from "@walmart/wmreact-base";

import ClickThroughImageMap from "src/components/helper-components/click-through-image-map";
import props from "../../test-data/click-through-test-data.js";
import imageMapProp from "../../test-data/click-through-image-map-data.js";

describe("<ClickThroughImageMap for type URL/>", () => {
  let component;
  let testProps;

  beforeEach(() => {
    testProps = props;
    component = shallow(<ClickThroughImageMap {...testProps} />);
  });

  it("should render", () => {
    const image = component.find(Image);
    expect(image).to.shallowly.have.length(1);
    expect(component).to.be.ok;
  });

  it("should display alt if title is not present", () => {
    testProps.image.title = null;
    component = shallow(<ClickThroughImageMap {...testProps} />);
    const link = component.find(Link);
    expect(link).to.shallowly.have.props("alt")
      .equal(props.image.title);
  });
});

describe("<ClickThroughImageMap for type Map/>", () => {
  let component;
  let testProps;
  let instance;
  let sandbox;
  let setMapSize;

  beforeEach(() => {
    testProps = imageMapProp;
    component = shallow(<ClickThroughImageMap {...testProps} />);
    sandbox = sinon.sandbox.create();
  });

  afterEach(() => {
    sandbox.restore();
  });

  it("should render", () => {
    const image = component.find(Image);
    expect(image).to.shallowly.have.length(1);
    expect(component).to.be.ok;
  });

  it("should render full area if anchorUrl is present", () => {
    const area = component.find("area");
    expect(area).to.shallowly.have.length(2);
  });

  it("should be responsive", () => {
    const container = document.createElement("div");
    component = ReactDOM.render(<ClickThroughImageMap {...testProps} />, container);

    const imageDOMStub = {
      complete: true,
      useMap: "#foo",
      height: 1364,
      width: 300,
      naturalWidth: 1364,
      naturalHeight: 300
    };

    component.updateWidth();
    expect(component.state.coords[0]).to.eql("110,56,650,178");

    component._findImageElement = () => (
      Object.assign({}, imageDOMStub, { width: 1287, height: 283 })
    );
    component.updateWidth();
    expect(component.state.coords[0]).to.eql("103,52,613,167");
    expect(component.state.originalCoords[0]).to.eql("110,56,650,178");
  });

  it("should call _setMapSize function if click through type is map", () => {
    component = shallow(<ClickThroughImageMap {...testProps} />);
    instance = component.instance();
    setMapSize = sandbox.stub(instance, "_setMapSize");
    instance.updateWidth();

    expect(setMapSize).have.been.called;
  });

  it("should not call _setMapSize function if click through type is not map", () => {
    testProps.image.clickThrough.type = "url";
    component = shallow(<ClickThroughImageMap {...testProps} />);
    instance = component.instance();
    setMapSize = sandbox.stub(instance, "_setMapSize");
    instance.updateWidth();

    expect(setMapSize).not.have.been.called;
  });
});
