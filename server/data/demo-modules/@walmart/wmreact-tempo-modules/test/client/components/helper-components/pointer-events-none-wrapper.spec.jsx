import React from "react";
import PointerEventsNoneWrapper from "src/components/helper-components/pointer-events-none-wrapper";
import {mount} from "enzyme";
import {spy} from "sinon";

describe("<PointerEventsNoneWrapper />", () => {
  it("passes itself in to the polyfill", () => {
    const stubPolyfill = spy();
    const component = mount(
      <PointerEventsNoneWrapper polyfill={stubPolyfill}>
        <div/>
      </PointerEventsNoneWrapper>
    );
    expect(stubPolyfill.args[0][0]).to.eql(component.instance());
  });
});
