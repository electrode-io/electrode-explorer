/**
 * Client tests
 */
import React from "react";
import { render } from "react-dom";

describe("SignIn", () => {
  let SignIn;
  let component;
  let container;

  beforeEach(() => {
    SignIn = require("src/components/sign-in");
    container = document.createElement("div");
  });

  afterEach(() => {
    React.unmountComponentAtNode(container);
  });

  it("has expected content with deep render", () => {
    component = render(
      <SignIn />,
      container
    );

    expect(component).to.not.be.false;
  });
});
