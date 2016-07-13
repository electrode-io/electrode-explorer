import React from "react";
import ReactDOM from "react-dom";
import {spy} from "sinon";
import {Fixture, createMouseEvent} from "../test-data/pointer-events-data.js";

describe("addPointerEvents()", () => {
  let testProps;
  let topClick;
  let bottomClick;

  beforeEach(() => {
    topClick = spy();
    bottomClick = spy();

    testProps = {topClick, bottomClick};
  });

  it("works like its CSS counterpart", () => {
    const container = window.document.createElement("div");
    window.document.body.appendChild(container);
    ReactDOM.render(<Fixture {...testProps} pointerEvents />, container);

    const event = createMouseEvent();
    window.document.elementFromPoint(40, 40).dispatchEvent(event);

    expect(bottomClick.called).to.eql(true);
  });
});

