import React from "react";
import ReactDOM from "react-dom";

import Message from "src/components/message";

describe("Message", () => {
  let container;
  let component;

  describe("Mounting", () => {
    beforeEach(() => {
      container = document.createElement("div");
    });

    afterEach(() => {
      ReactDOM.unmountComponentAtNode(container);
    });

    it("should render Error into the document", () => {
      component = ReactDOM.render(
        React.createElement(Message.Error),
        container
      );
      expect(component.isMounted()).to.be.true;
    });

    it("should render Success into the document", () => {
      component = ReactDOM.render(
        React.createElement(Message.Success),
        container
      );
      expect(component.isMounted()).to.be.true;
    });

    it("should render Warning into the document", () => {
      component = ReactDOM.render(
        React.createElement(Message.Warning),
        container
      );
      expect(component.isMounted()).to.be.true;
    });
  });
});
